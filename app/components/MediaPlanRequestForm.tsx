"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { sendLeadEvent } from "@/app/components/MetaLeadTracker";

type MediaPlanRequestResponse = {
  error?: string;
  ok?: boolean;
};

const useCases = [
  "Buy toolkit now",
  "Buy toolkit + setup support",
  "Buy for team / agency",
  "Need invoice before payment",
  "Ask a question before buying",
];

const productOptions = [
  "Digital Media Planning & Buying Toolkit",
  "Toolkit + setup guidance",
  "Team / agency access",
  "Invoice purchase",
];

export default function MediaPlanRequestForm() {
  const [form, setForm] = useState({
    budgetRange: productOptions[0],
    company: "",
    email: "",
    name: "",
    notes: "",
    role: "",
    useCase: useCases[0],
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

    if (
      !form.name ||
      !form.email ||
      !form.company ||
      !form.role ||
      !form.useCase
    ) {
      setError("Please complete the required fields.");
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const submittedForm = { ...form };
      const response = await fetch("/api/media-plan-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submittedForm),
      });

      let data: MediaPlanRequestResponse | null = null;

      try {
        data = (await response.json()) as MediaPlanRequestResponse;
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
        budgetRange: productOptions[0],
        company: "",
        email: "",
        name: "",
        notes: "",
        role: "",
        useCase: useCases[0],
      });

      void sendLeadEvent({
        email: submittedForm.email,
        url: window.location.href,
        contentName: "Digital Media Planning & Buying Toolkit Order",
      }).catch((trackingError) => {
        console.error("Toolkit order lead tracking error:", trackingError);
      });
    } catch (submitError) {
      console.error("Toolkit order form error:", submitError);
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  const isDisabled =
    status === "submitting" ||
    !form.name ||
    !form.email ||
    !form.company ||
    !form.role ||
    !form.useCase;

  return (
    <form
      id="request-form"
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-sky-400/15 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.96))] p-6 shadow-[0_25px_100px_rgba(2,6,23,0.55)] backdrop-blur"
    >
      <div className="rounded-2xl border border-sky-400/20 bg-sky-400/[0.08] p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
              Start Here
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-50">
              Fill this order form to register your toolkit purchase.
            </p>
          </div>

          <span className="rounded-full border border-sky-300/20 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200">
            Buy now
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300">
        {["Order Form", "Payment Next", "Email Delivery"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-2">
        <h2 className="text-xl font-semibold text-slate-50">
          Register to buy the toolkit
        </h2>
        <p className="text-sm leading-7 text-slate-300">
          Submit your order registration now. I&apos;ll send the payment step,
          invoice option, and toolkit delivery access to your email.
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
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-sky-500 focus:bg-slate-950"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-xs font-medium text-slate-300">Work Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@company.com"
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-sky-500 focus:bg-slate-950"
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
            required
            placeholder="Company / brand name"
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-sky-500 focus:bg-slate-950"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-xs font-medium text-slate-300">Role</span>
          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            placeholder="Manager, founder, planner..."
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-sky-500 focus:bg-slate-950"
          />
        </label>

        <label className="block">
          <span className="mb-1 block text-xs text-slate-300">
            Order Type
          </span>
          <select
            name="useCase"
            value={form.useCase}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:bg-slate-950"
          >
            {useCases.map((useCase) => (
              <option key={useCase} value={useCase}>
                {useCase}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1 block text-xs text-slate-300">Product Option</span>
          <select
            name="budgetRange"
            value={form.budgetRange}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm outline-none transition focus:border-sky-500 focus:bg-slate-950"
          >
            {productOptions.map((productOption) => (
              <option key={productOption} value={productOption}>
                {productOption}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-1 block text-xs font-medium text-slate-300">
          Order note
        </span>
        <textarea
          name="notes"
          rows={6}
          value={form.notes}
          onChange={handleChange}
          placeholder="Optional: tell me whether you are buying for yourself, a team, client work, training, or a specific campaign planning problem."
          className="w-full rounded-3xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm outline-none transition placeholder:text-slate-500 focus:border-sky-500 focus:bg-slate-950"
        />
      </label>

      {error && (
        <p className="mt-4 text-sm text-red-400" aria-live="polite">
          {error}
        </p>
      )}

      {status === "success" && (
        <p className="mt-4 text-sm text-emerald-400" aria-live="polite">
          Your order registration has been sent. I&apos;ll reply with the payment
          step and toolkit delivery access by email.
        </p>
      )}

      <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
          <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 font-semibold uppercase tracking-[0.16em] text-sky-200">
            Next step
          </span>
          <span>Your order is registered first, then I send payment and delivery steps.</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={isDisabled}
        className={`mt-6 w-full rounded-full px-6 py-3.5 text-sm font-semibold transition ${
          isDisabled
            ? "cursor-not-allowed bg-sky-500/40 text-slate-700"
            : "bg-sky-500 text-slate-900 shadow-lg shadow-sky-950/30 hover:bg-sky-400"
        }`}
      >
        {status === "submitting" ? "Sending..." : "Register Order & Buy Now"}
      </button>

      <p className="mt-4 text-center text-xs leading-6 text-slate-400">
        This registers your order. I&apos;ll send payment confirmation steps and
        toolkit access by email.
      </p>
    </form>
  );
}
