import type { Metadata } from "next";
import Link from "next/link";
import BookingConversionTracker from "@/app/components/BookingConversionTracker";

export const metadata: Metadata = {
  title: "Booking Confirmed | Ye Htet Aung",
  description: "Your call has been booked. You will receive a Google Calendar confirmation by email.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookCallThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* Fire conversion tracking on page load */}
      <BookingConversionTracker />

      <div className="site-bg-grid" />
      <div className="site-orb site-orb--cyan" />
      <div className="site-orb site-orb--violet" />

      <section className="page-shell items-center justify-center">
        <div className="mx-auto w-full max-w-2xl space-y-8 text-center">

          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 shadow-[0_0_48px_rgba(52,211,153,0.18)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-9 w-9 text-emerald-400"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-400">
              Booking Confirmed
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Your call is booked
            </h1>
            <p className="mx-auto max-w-lg text-sm leading-7 text-slate-300 md:text-base">
              Google Calendar will send a confirmation to your email with the
              meeting details, time, and any next steps.
            </p>
          </div>

          {/* What happens next */}
          <div className="editorial-panel rounded-[2rem] p-6 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
              What Happens Next
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {[
                "Check your inbox for a Google Calendar confirmation email.",
                "Add the event to your calendar so you don't miss it.",
                "If something changes on your end, use the link in the email to reschedule.",
                "I'll prepare based on what you shared during booking.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-1 shrink-0 text-emerald-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="motion-button rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-400"
            >
              Back to Home
            </Link>
            <Link
              href="/work-with-me"
              className="motion-button rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-200"
            >
              View Services
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
