import type { Metadata } from "next";
import Link from "next/link";
import BookCallForm from "@/app/components/BookCallForm";
import Reveal from "@/app/components/Reveal";
import { googleAdsConversionIds } from "@/lib/google-ads";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Book time directly on Ye Htet Aung's Google Calendar for a focused call about strategy, training, or performance marketing support.",
  alternates: {
    canonical: "/book-call",
  },
  openGraph: {
    title: "Book a Call",
    description:
      "Book time directly on Ye Htet Aung's Google Calendar for a focused call about strategy, training, or performance marketing support.",
    url: "/book-call",
    siteName: "Ye Htet Aung",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Call",
    description:
      "Book time directly on Ye Htet Aung's Google Calendar for a focused call about strategy, training, or performance marketing support.",
  },
};

const DEFAULT_BOOKING_CALENDAR_URL = "https://calendar.app.google/v6wXTWekHG8RUNh29";

const bookingCalendarUrl =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL?.trim() ??
  DEFAULT_BOOKING_CALENDAR_URL;

const bookingBenefits = [
  "Live Google Calendar availability with timezone-aware booking",
  "Fast scheduling for intro calls, scoped discussions, and practical next steps",
  "A cleaner path when you are ready to lock time instead of sending a long inquiry",
];

const bookingExpectations = [
  "Choose an available time directly from Google Calendar",
  "Get confirmation, calendar details, and the next-step context faster",
  "Use Work With Me instead if you need proposals, audits, or a broader inquiry first",
];

const bookingDecisionCards = [
  {
    label: "Step 1 — Brief",
    value: "Fill in a short form so I know who you are and what the call is about.",
  },
  {
    label: "Step 2 — Calendar",
    value: "After you submit, the Google Calendar link appears so you can pick a time.",
  },
  {
    label: "Step 3 — Confirmed",
    value: "Google Calendar sends a confirmation email with the meeting details.",
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
                {["Google Calendar", "Live Availability", "Direct Scheduling"].map(
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
                  Book time directly on my Google Calendar
                </h1>
                <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                  This page is for actual scheduling. If you already know you
                  want a call, use the calendar flow here and lock a time
                  directly. If you need to explain a bigger project first, use
                  the Work With Me page instead.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#booking-calendar"
                  className="motion-button rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-400"
                >
                  Start the booking form
                </Link>
                <Link
                  href="/work-with-me"
                  className="motion-button rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-200"
                >
                  Need a broader inquiry?
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
                    Choose a slot first. Google Calendar handles the booking.
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

          <Reveal
            className="order-1 lg:sticky lg:top-6 lg:order-2"
            delay={120}
            variant="right"
          >
            <div id="booking-calendar">
            <BookCallForm
              calendarUrl={bookingCalendarUrl}
              conversionId={googleAdsConversionIds.bookAppointment}
              chips={["Step 1: Brief", "Step 2: Calendar", "Confirmed Booking"]}
              heading="Tell me what the call is about first"
              description="Share a quick brief — who you are, what you need, and what the call should cover. After you submit, the Google Calendar link appears so you can pick a slot straight away."
              leadContentName="Book a Call — Calendar Flow"
              nextStepLabel="What happens next"
              nextStepText="Submit this form and the Google Calendar booking link will appear immediately so you can lock a time."
              submitLabel="Send & Get Calendar Link"
            />
            </div>
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
                  <span>The main topic you want to cover in the call</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-sky-300">•</span>
                  <span>Whether it is training, consulting, or media support</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-sky-300">•</span>
                  <span>Any context that helps make the call more useful</span>
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
                When To Use Work With Me Instead
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {[
                  "You need to explain a wider business challenge first.",
                  "You want consulting, an audit, training scope, or ongoing execution support.",
                  "You are not ready to pick a time yet and want a response by email first.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-sky-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {["Calendar booking", "Live availability", "Faster scheduling"].map(
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
