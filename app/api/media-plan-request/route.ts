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
  { key: "role", label: "role", maxLength: 120 },
  { key: "useCase", label: "order type", maxLength: 240 },
  { key: "budgetRange", label: "product option", maxLength: 120 },
  { key: "notes", label: "order note", maxLength: 3_000 },
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
    const role = getBoundedStringField(body, "role", 120);
    const useCase = getBoundedStringField(body, "useCase", 240);
    const budgetRange = getBoundedStringField(body, "budgetRange", 120);
    const notes = getBoundedStringField(body, "notes", 3_000);

    if (!name || !email || !company || !role || !useCase) {
      return NextResponse.json(
        {
          error:
            "Name, email, company, role, and order type are required.",
        },
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
    const escapedCompany = escapeHtml(company);
    const escapedRole = escapeHtml(role);
    const escapedUseCase = escapeHtml(useCase);
    const escapedBudgetRange = budgetRange
      ? escapeHtml(budgetRange)
      : "Not provided";
    const escapedNotes = notes
      ? escapeHtml(notes).replace(/\n/g, "<br>")
      : "No extra note provided.";

    await sendPortfolioEmail({
      fromLabel: "Toolkit Order Registration",
      toEnv: "TOOLKIT_TO_EMAIL",
      subject: `Toolkit order registration from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Company / Brand: ${company}
Role: ${role}
Order Type: ${useCase}
Product Option: ${budgetRange ?? "Not provided"}

Order Note:
${notes ?? "No extra note provided."}

Next Step:
Send payment confirmation steps and toolkit delivery access.
      `,
      html: `
        <h2>New Digital Media Planning & Buying Toolkit Order Registration</h2>
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Company / Brand:</strong> ${escapedCompany}</p>
        <p><strong>Role:</strong> ${escapedRole}</p>
        <p><strong>Order Type:</strong> ${escapedUseCase}</p>
        <p><strong>Product Option:</strong> ${escapedBudgetRange}</p>
        <p><strong>Order Note:</strong></p>
        <p>${escapedNotes}</p>
        <hr />
        <p><strong>Next Step:</strong> Send payment confirmation steps and toolkit delivery access.</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("❌ ERROR sending toolkit order registration:", error);

    if (error instanceof MailConfigError) {
      return NextResponse.json(
        {
          error:
            process.env.NODE_ENV === "development"
              ? getMailSetupHelpMessage(error)
              : "Toolkit order form is temporarily unavailable. Please try again later.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send toolkit order registration" },
      { status: 500 }
    );
  }
}
