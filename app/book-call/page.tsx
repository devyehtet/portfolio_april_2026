import type { Metadata } from "next";
import Link from "next/link";
import BookCallForm from "@/app/components/BookCallForm";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Share your project goals, training needs, or campaign challenges and send a direct booking request to Ye Htet Aung.",
  alternates: {
    canonical: "/book-call",
  },
  openGraph: {
    title: "Book a Call",
    description:
      "Share your project goals, training needs, or campaign challenges and send a direct booking request to Ye Htet Aung.",
    url: "/book-call",
    siteName: "Ye Htet Aung",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Call",
    description:
      "Share your project goals, training needs, or campaign challenges and send a direct booking request to Ye Htet Aung.",
  },
};

const bookingBenefits = [
  "Training support for in-house marketing teams",
  "Strategic consulting for growth and positioning",
  "Freelance media buying across Meta and Google Ads",
];

const bookingExpectations = [
  "Brief replies with a recommended next step",
  "Clear fit on whether training, consulting, or execution is best",
  "Useful context for follow-up before any call is scheduled",
];

const bookingDecisionCards = [
  {
    label: "Hiring or Consulting",
    value: "Share the business context and what kind of support you need.",
  },
  {
    label: "Training Request",
    value: "Tell me about your team, skill gaps, and campaign maturity.",
  },
  {
    label: "Freelance Media Buying",
    value: "Explain the channels, goals, and current performance challenge.",
  },
];

export default function BookCallPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="site-bg-grid" />
      <div className="site-orb site-orb--cyan" />
      <div className="site-orb site-orb--violet" />

      <section className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="order-2 space-y-6 lg:order-1">
            <Link
              href="/"
              className="motion-button inline-flex w-fit rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition hover:border-sky-400 hover:text-sky-300"
            >
              Back to Home
            </Link>

            <div className="editorial-panel hero-panel space-y-5">
              <div className="flex flex-wrap gap-2">
                {["Team Training", "Growth Consulting", "Freelance Media Buying"].map(
                  (item) => (
                    <span
                      key={item}
                      className="hero-chip rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-200"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="space-y-4">
                <p className="section-kicker text-xs uppercase tracking-[0.24em] text-sky-300">
                  Book a Call
                </p>
                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] md:text-6xl">
                  Start the work conversation with one focused inquiry
                </h1>
                <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                  This page is designed for business inquiries, not generic
                  contact noise. Fill the form, tell me what kind of help you
                  need, and I&apos;ll reply with the best next step before we
                  schedule anything.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#booking-form"
                  className="motion-button rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-400"
                >
                  Start the inquiry
                </Link>
                <Link
                  href="/work-with-me"
                  className="motion-button rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-200"
                >
                  Explore work types
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[linear-gradient(135deg,rgba(14,165,233,0.12),rgba(15,23,42,0.78)_52%,rgba(99,102,241,0.1))] p-6">
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-sky-400/12 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 left-8 h-28 w-28 rounded-full bg-indigo-400/12 blur-3xl" />

              <div className="relative space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200">
                    How this works
                  </span>
                  <span className="text-sm text-slate-300">
                    Fill the form first. I reply by email.
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-3">
                  {bookingDecisionCards.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-4"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:sticky lg:top-6 lg:order-2" delay={120} variant="right">
            <div className="mb-4 overflow-hidden rounded-[1.75rem] border border-sky-400/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.12),rgba(15,23,42,0.78)_50%,rgba(99,102,241,0.08))] px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                    Main Action
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-100">
                    Fill the inquiry form
                  </p>
                </div>
                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
                  Start here →
                </span>
              </div>
            </div>

            <BookCallForm
              chips={["Focused Brief", "Business Inquiry", "Clear Next Step"]}
              formId="booking-form"
              heading="Tell me what support you need"
              submitLabel="Send Booking Request"
            />
          </Reveal>
        </div>

        <div className="section-shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4" variant="left">
            <div className="story-card motion-card motion-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                Best For
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {bookingBenefits.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-sky-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="story-card motion-card motion-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                What To Include
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 text-sky-300">•</span>
                  <span>Your business or brand context</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-sky-300">•</span>
                  <span>The challenge or goal you want help with</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-sky-300">•</span>
                  <span>The type of support you are looking for</span>
                </li>
              </ul>
            </div>

            <div className="story-card motion-card motion-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                What Happens Next
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {bookingExpectations.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-sky-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="space-y-4" variant="right" delay={120}>
            <div className="story-card motion-card motion-panel p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                What You Can Expect
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {bookingExpectations.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-sky-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {["Brief first", "Clear recommendation", "Email follow-up"].map(
                (item) => (
                  <div key={item} className="metric-card">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                      {item}
                    </p>
                  </div>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
