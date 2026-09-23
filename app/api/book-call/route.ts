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
  { key: "company", label: "company", maxLength: 160 },
  { key: "service", label: "service", maxLength: 160 },
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
    const company = getBoundedStringField(body, "company", 160);
    const service = getBoundedStringField(body, "service", 160);
    const message = getBoundedStringField(body, "message", 3_000);

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Name, email, service, and message are required." },
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
    const escapedCompany = company ? escapeHtml(company) : "Not provided";
    const escapedService = escapeHtml(service);
    const escapedMessage = escapeHtml(message).replace(/\n/g, "<br>");

    await sendPortfolioEmail({
      fromLabel: "Book a Call Request",
      toEnv: "BOOKING_TO_EMAIL",
      subject: `Book a Call request from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Company: ${company ?? "Not provided"}
Service: ${service}

Message:
${message}
      `,
      html: `
        <h2>New Book a Call Request</h2>
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Company:</strong> ${escapedCompany}</p>
        <p><strong>Interested In:</strong> ${escapedService}</p>
        <p><strong>Message:</strong></p>
        <p>${escapedMessage}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("❌ ERROR sending booking request:", error);

    if (error instanceof MailConfigError) {
      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV === "development"
              ? getMailSetupHelpMessage(error)
              : "Booking form is temporarily unavailable. Please try again later.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send booking request" },
      { status: 500 }
    );
  }
}
