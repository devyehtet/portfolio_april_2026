import crypto from "crypto";
import { NextResponse } from "next/server";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { getJsonRequestError } from "@/lib/request-validation";

export const runtime = "nodejs";

const ALLOWED_EVENT_NAMES = new Set(["Lead"]);
const DEFAULT_GRAPH_API_VERSION = "v26.0";
const MAX_BROWSER_ID_LENGTH = 512;
const MAX_CUSTOM_DATA_LENGTH = 120;
const MAX_EVENT_ID_LENGTH = 128;
const MAX_URL_LENGTH = 2048;

function sha256(str: string) {
  return crypto.createHash("sha256").update(str).digest("hex");
}

type MetaCapiRequestBody = {
  custom_data?: Record<string, unknown>;
  email?: string;
  event_id?: string;
  event_name?: string;
  fbc?: string;
  fbp?: string;
  phone?: string;
  url?: string;
};

type MetaCapiPayload = {
  data: Array<{
    action_source: string;
    custom_data?: Record<string, unknown>;
    event_id?: string;
    event_name: string;
    event_source_url?: string;
    event_time: number;
    user_data: {
      client_ip_address?: string;
      client_user_agent?: string;
      em?: string[];
      fbc?: string;
      fbp?: string;
      ph?: string[];
    };
  }>;
  test_event_code?: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

async function readRequestBody(req: Request) {
  try {
    const body = (await req.json()) as unknown;
    return isRecord(body) ? (body as MetaCapiRequestBody) : null;
  } catch {
    return null;
  }
}

function getString(value: unknown, maxLength: number) {
  if (typeof value !== "string") return undefined;

  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLength) : undefined;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function normalizePhone(value: unknown) {
  const phone = getString(value, 64)?.replace(/[^\d+]/g, "");
  return phone && /\d/.test(phone) ? phone : undefined;
}

function getMetaGraphApiVersion() {
  const configuredVersion = process.env.META_GRAPH_API_VERSION?.trim();
  if (configuredVersion && /^v\d+\.\d+$/.test(configuredVersion)) {
    return configuredVersion;
  }

  return DEFAULT_GRAPH_API_VERSION;
}

function getRequestOrigin(req: Request) {
  const requestUrl = new URL(req.url);
  const forwardedProto = req.headers.get("x-forwarded-proto")?.split(",")[0];
  const forwardedHost = req.headers.get("x-forwarded-host")?.split(",")[0];
  const host = forwardedHost?.trim() || req.headers.get("host") || requestUrl.host;
  const proto = forwardedProto?.trim() || requestUrl.protocol.replace(":", "");

  return `${proto}://${host}`;
}

function getSafeEventSourceUrl(value: unknown, req: Request) {
  const origin = getRequestOrigin(req);
  const allowedHost = new URL(origin).host;
  const referer = getString(req.headers.get("referer"), MAX_URL_LENGTH);
  const rawUrl = getString(value, MAX_URL_LENGTH) ?? referer ?? origin;

  try {
    const url = new URL(rawUrl, origin);
    return url.host === allowedHost ? url.toString() : origin;
  } catch {
    return origin;
  }
}

function isSameOriginRequest(req: Request) {
  const origin = getRequestOrigin(req);
  const allowedHost = new URL(origin).host;
  const requestOrigin = getString(req.headers.get("origin"), MAX_URL_LENGTH);
  const referer = getString(req.headers.get("referer"), MAX_URL_LENGTH);
  const candidate = requestOrigin ?? referer;

  if (!candidate) return false;

  try {
    return new URL(candidate).host === allowedHost;
  } catch {
    return false;
  }
}

function getAllowedCustomData(value: unknown) {
  if (!isRecord(value)) return undefined;

  const contentName = getString(value.content_name, MAX_CUSTOM_DATA_LENGTH);
  return contentName ? { content_name: contentName } : undefined;
}

export async function POST(req: Request) {
  const ip = getClientIp(req);

  if (!checkRateLimit(`meta-capi:${ip}`, 30, 60_000)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  if (!isSameOriginRequest(req)) {
    return NextResponse.json(
      { ok: false, error: "Meta event request is not allowed." },
      { status: 403 }
    );
  }

  try {
    const requestError = getJsonRequestError(req, 4 * 1024);
    if (requestError) return requestError;

    const PIXEL_ID = process.env.META_PIXEL_ID;
    const ACCESS_TOKEN = process.env.META_CAPI_TOKEN;
    const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;

    if (!PIXEL_ID || !ACCESS_TOKEN) {
      return NextResponse.json(
        {
          ok: false,
          error:
            process.env.NODE_ENV === "development"
              ? "Missing META_PIXEL_ID or META_CAPI_TOKEN in .env.local"
              : "Meta tracking is temporarily unavailable.",
        },
        { status: 500 }
      );
    }

    const body = await readRequestBody(req);
    if (!body) {
      return NextResponse.json(
        { ok: false, error: "Invalid request body." },
        { status: 400 }
      );
    }

    const eventName = getString(body.event_name, 64) ?? "Lead";
    if (!ALLOWED_EVENT_NAMES.has(eventName)) {
      return NextResponse.json(
        { ok: false, error: "Unsupported Meta event." },
        { status: 400 }
      );
    }

    const eventId = getString(body.event_id, MAX_EVENT_ID_LENGTH);
    if (!eventId) {
      return NextResponse.json(
        { ok: false, error: "Meta event_id is required." },
        { status: 400 }
      );
    }

    const eventSourceUrl = getSafeEventSourceUrl(body.url, req);
    const userAgent = req.headers.get("user-agent") ?? undefined;

    const email = getString(body.email, 320)?.toLowerCase();
    if (email && !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const phone = normalizePhone(body.phone);
    const fbp = getString(body.fbp, MAX_BROWSER_ID_LENGTH);
    const fbc = getString(body.fbc, MAX_BROWSER_ID_LENGTH);

    const user_data: MetaCapiPayload["data"][number]["user_data"] = {
      client_user_agent: userAgent,
      client_ip_address: ip,
    };

    // Hash PII only if provided
    if (email) user_data.em = [sha256(email)];
    if (phone) user_data.ph = [sha256(phone)];

    // Add browser IDs if available
    if (fbp) user_data.fbp = fbp;
    if (fbc) user_data.fbc = fbc;

    const payload: MetaCapiPayload = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          action_source: "website",
          event_source_url: eventSourceUrl,
          event_id: eventId,
          user_data,
          custom_data: getAllowedCustomData(body.custom_data),
        },
      ],
    };

    // Only send test_event_code if it's set
    if (TEST_EVENT_CODE) payload.test_event_code = TEST_EVENT_CODE;

    const res = await fetch(
      `https://graph.facebook.com/${getMetaGraphApiVersion()}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "Meta API error" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error: unknown) {
    console.error("Meta CAPI error:", error);
    return NextResponse.json(
      { ok: false, error: "Meta tracking failed." },
      { status: 500 }
    );
  }
}
