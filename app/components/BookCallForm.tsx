"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { sendLeadEvent } from "@/app/components/MetaLeadTracker";

type BookingResponse = {
  error?: string;
  ok?: boolean;
};

type BookCallFormProps = {
  chips?: string[];
  description?: string;
  formId?: string;
  heading?: string;
  leadContentName?: string;
  nextStepLabel?: string;
  nextStepText?: string;
  submitLabel?: string;
};

const services = [
  "Team Training",
  "Growth Consulting",
  "Freelance Media Buying",
  "SEO Strategy",
  "Performance Audit",
];

export default function BookCallForm({
  chips = ["Focused Brief", "Work Inquiry", "Email Follow-up"],
  description = "Share the business context, the kind of support you need, and the challenge you want help with. I review the fit first, then reply with the clearest next step.",
  formId = "booking-form",
  heading = "Start the work inquiry here",
  leadContentName = "Book a Call Form",
  nextStepLabel = "Next step",
  nextStepText = "I review the request first, then reply with the clearest recommendation or booking next step.",
  submitLabel = "Send Inquiry",
}: BookCallFormProps) {
  const [form, setForm] = useState({
    company: "",
    email: "",
    message: "",
    name: "",
    service: services[0],
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.service || !form.message) {
      setError("Please complete the required fields.");
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const submittedForm = { ...form };
      const response = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submittedForm),
      });

      let data: BookingResponse | null = null;

      try {
        data = (await response.json()) as BookingResponse;
      } catch {
        // ignore json parse errors
      }

      if (!response.ok) {
        setStatus("error");
        setError(data?.error ?? "Unable to send your request right now.");
        return;
      }

      setStatus("success");
      setForm({
        company: "",
        email: "",
        message: "",
        name: "",
        service: services[0],
      });

      void sendLeadEvent({
        email: submittedForm.email,
        url: window.location.href,
        contentName: leadContentName,
      }).catch((trackingError) => {
        console.error("Book a call lead tracking error:", trackingError);
      });
    } catch (submitError) {
      console.error("Book call form error:", submitError);
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  const isDisabled =
    status === "submitting" ||
    !form.name ||
    !form.email ||
    !form.service ||
    !form.message;

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className="form-surface motion-card motion-panel rounded-[2rem] border border-sky-400/15 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.96))] shadow-[0_25px_100px_rgba(2,6,23,0.55)]"
    >
      <div className="rounded-2xl border border-sky-400/20 bg-sky-400/[0.08] p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
              Start Here
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-50">
              Fill this form and I&apos;ll reply by email.
            </p>
          </div>

          <span className="rounded-full border border-sky-300/20 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200">
            Fast intake
          </span>
        </div>
      </div>

      <div className="relative z-10 space-y-4">
        <div className="flex flex-wrap gap-2">
          {chips.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-700/80 bg-slate-950/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="text-sm font-semibold text-slate-50">
          {heading}
        </p>
        <p className="text-xs leading-6 text-slate-400">
          {description}
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-xs font-medium text-slate-300">Name</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="field-control text-sm placeholder:text-slate-500"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-xs font-medium text-slate-300">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@company.com"
            className="field-control text-sm placeholder:text-slate-500"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-xs text-slate-300">
            Company or Brand
          </span>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company / brand name"
            className="field-control text-sm placeholder:text-slate-500"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-xs text-slate-300">
            Interested In
          </span>
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="field-control text-sm"
          >
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1 block text-xs text-slate-300">
          What would you like to talk about?
        </span>
          <textarea
          name="message"
          rows={6}
          value={form.message}
          onChange={handleChange}
          required
          className="field-control rounded-[1.35rem] text-sm"
          placeholder="Tell me about your business, goals, current challenge, and what kind of support you are looking for."
        />
      </label>

      {error && <p className="mt-4 text-sm text-red-400">{error}</p>}

      {status === "success" && (
        <p className="mt-4 text-sm text-emerald-400">
          Your request has been sent. I&apos;ll get back to you soon.
        </p>
      )}

      <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
          <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 font-semibold uppercase tracking-[0.16em] text-sky-200">
            {nextStepLabel}
          </span>
          <span>{nextStepText}</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className={`motion-button relative z-10 mt-6 inline-flex w-full justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition ${
          isDisabled
            ? "cursor-not-allowed bg-sky-500/40 text-slate-700"
            : "bg-sky-500 text-slate-900 hover:bg-sky-400"
        }`}
      >
        {status === "submitting" ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}
