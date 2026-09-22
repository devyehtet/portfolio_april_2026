export class MailConfigError extends Error {
  constructor(message = "Missing email provider configuration.") {
    super(message);
    this.name = "MailConfigError";
  }
}

const DEFAULT_FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpbqvjb";

type MailInput = {
  html: string;
  replyTo: string;
  subject: string;
  text: string;
  toEnv?: string;
  fromLabel?: string;
};

export function getStringField(value: unknown) {
  if (typeof value !== "string") return null;

  const trimmed = value.trim();
  return trimmed ? trimmed : null;
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function getMailSetupHelpMessage(error?: MailConfigError | null) {
  if (error?.message) {
    return error.message;
  }

  return "Formspree is not configured yet. Set FORMSPREE_ENDPOINT to your Formspree form endpoint.";
}

function getFormspreeEndpoint() {
  const endpoint =
    process.env.FORMSPREE_ENDPOINT ??
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
    DEFAULT_FORMSPREE_ENDPOINT;

  try {
    const url = new URL(endpoint);

    if (url.protocol !== "https:" || url.hostname !== "formspree.io") {
      throw new MailConfigError(
        "FORMSPREE_ENDPOINT must be a valid https://formspree.io/f/... URL."
      );
    }

    return url.toString();
  } catch (error) {
    if (error instanceof MailConfigError) {
      throw error;
    }

    throw new MailConfigError(
      "FORMSPREE_ENDPOINT must be a valid https://formspree.io/f/... URL."
    );
  }
}

async function sendViaFormspree(input: MailInput) {
  const response = await fetch(getFormspreeEndpoint(), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _replyto: input.replyTo,
      _subject: input.subject,
      email: input.replyTo,
      form_type: input.fromLabel ?? "Portfolio Contact",
      message: input.text.trim(),
      subject: input.subject,
    }),
  });

  if (response.ok) {
    return;
  }

  let message = `Formspree request failed with status ${response.status}.`;

  try {
    const data = (await response.json()) as {
      error?: string;
      errors?: Array<{ message?: string }>;
    };

    message = data.error ?? data.errors?.[0]?.message ?? message;
  } catch {
    // ignore json parse errors
  }

  throw new Error(message);
}

export async function sendPortfolioEmail(input: MailInput) {
  await sendViaFormspree(input);
}
