import { NextResponse } from "next/server";

export const DEFAULT_JSON_BODY_LIMIT_BYTES = 16 * 1024;

type FieldLimit = {
  key: string;
  label: string;
  maxLength: number;
};

export function getJsonRequestError(
  req: Request,
  maxBytes = DEFAULT_JSON_BODY_LIMIT_BYTES
) {
  const contentType = req.headers.get("content-type")?.toLowerCase() ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      { error: "Content-Type must be application/json." },
      { status: 415 }
    );
  }

  const contentLength = req.headers.get("content-length");
  if (contentLength) {
    const parsedLength = Number(contentLength);
    if (Number.isFinite(parsedLength) && parsedLength > maxBytes) {
      return NextResponse.json(
        { error: "Request body is too large. Please shorten your message." },
        { status: 413 }
      );
    }
  }

  return null;
}

export async function readJsonObject(req: Request) {
  try {
    const body = (await req.json()) as unknown;
    if (typeof body === "object" && body !== null && !Array.isArray(body)) {
      return body as Record<string, unknown>;
    }
  } catch {
    // Invalid JSON is handled by the caller with a generic bad request.
  }

  return null;
}

export function getBoundedStringField(
  body: Record<string, unknown>,
  key: string,
  maxLength: number
) {
  const value = body[key];
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  if (!trimmed || trimmed.length > maxLength) return null;

  return trimmed;
}

export function getFieldLimitError(
  body: Record<string, unknown>,
  limits: FieldLimit[]
) {
  const oversizedFields = limits
    .filter(({ key, maxLength }) => {
      const value = body[key];
      return typeof value === "string" && value.trim().length > maxLength;
    })
    .map(({ label }) => label);

  if (!oversizedFields.length) return null;

  return NextResponse.json(
    {
      error: `Please shorten ${oversizedFields.join(", ")} and try again.`,
    },
    { status: 413 }
  );
}
