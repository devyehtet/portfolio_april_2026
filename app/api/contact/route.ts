import { NextResponse } from "next/server";
import {
  escapeHtml,
  getMailSetupHelpMessage,
  isValidEmail,
  MailConfigError,
  sendPortfolioEmail,
} from "@/lib/email";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import {
  getBoundedStringField,
  getFieldLimitError,
  getJsonRequestError,
  readJsonObject,
} from "@/lib/request-validation";

export const runtime = "nodejs";

const fieldLimits = [
  { key: "name", label: "name", maxLength: 120 },
  { key: "email", label: "email", maxLength: 254 },
  { key: "message", label: "message", maxLength: 3_000 },
];

export async function POST(req: Request) {
  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment and try again." },
      { status: 429 }
    );
  }

  try {
    const requestError = getJsonRequestError(req);
    if (requestError) return requestError;

    const body = await readJsonObject(req);
    if (!body) {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const fieldLimitError = getFieldLimitError(body, fieldLimits);
    if (fieldLimitError) return fieldLimitError;

    const name = getBoundedStringField(body, "name", 120);
    const email = getBoundedStringField(body, "email", 254);
    const message = getBoundedStringField(body, "message", 3_000);

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const escapedName = escapeHtml(name);
    const escapedEmail = escapeHtml(email);
    const escapedMessage = escapeHtml(message).replace(/\n/g, "<br>");

    await sendPortfolioEmail({
      fromLabel: "Portfolio Contact",
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${escapedMessage}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("❌ ERROR sending email:", error);

    if (error instanceof MailConfigError) {
      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV === "development"
              ? getMailSetupHelpMessage(error)
              : "Contact form is temporarily unavailable. Please try again later.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
