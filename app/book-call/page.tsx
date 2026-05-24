import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";

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

const bookingCalendarUrl =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL?.trim() ?? "";
const bookingCalendarEmbedUrl =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL?.trim() ?? "";

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
    label: "Pick a Slot",
    value: "Choose an available time directly from the Google Calendar booking page.",
  },
  {
    label: "Confirm Details",
    value: "Google Calendar handles booking details, timezone conversion, and confirmation.",
  },
  {
    label: "Need More Scope?",
    value: "If it is a bigger business inquiry, use the Work With Me page instead.",
  },
];

export default function BookCallPage() {
  const hasBookingLink = Boolean(bookingCalendarUrl);
  const hasEmbeddedCalendar = Boolean(bookingCalendarEmbedUrl);

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
                  Open booking section
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
            <div
              id="booking-calendar"
              className="mb-4 overflow-hidden rounded-[1.75rem] border border-sky-400/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.12),rgba(15,23,42,0.78)_50%,rgba(99,102,241,0.08))] px-4 py-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                    Main Action
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-100">
                    Pick a time on the calendar
                  </p>
                </div>
                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
                  Start here →
                </span>
              </div>
            </div>

            <div className="form-surface motion-card motion-panel rounded-[2rem] border border-sky-400/15 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.96))] shadow-[0_25px_100px_rgba(2,6,23,0.55)]">
              <div className="rounded-2xl border border-sky-400/20 bg-sky-400/[0.08] p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
                      Google Calendar
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-50">
                      Book a time directly instead of sending a request first.
                    </p>
                  </div>

                  <span className="rounded-full border border-sky-300/20 bg-slate-950/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200">
                    Live booking
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {["Google Calendar", "Direct Booking", "Timezone Ready"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-700/80 bg-slate-950/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>

                <p className="text-sm font-semibold text-slate-50">
                  Choose a slot that works and confirm it inside Google Calendar.
                </p>
                <p className="text-xs leading-6 text-slate-400">
                  This is now the scheduling page. If you need to explain a
                  bigger scope, request consulting, or ask for a proposal
                  first, use the Work With Me page instead.
                </p>
              </div>

              {hasBookingLink ? (
                <div className="mt-6 space-y-4">
                  <a
                    href={bookingCalendarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="motion-button inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-sky-400"
                  >
                    Open Google Calendar Booking
                  </a>

                  {hasEmbeddedCalendar ? (
                    <div className="overflow-hidden rounded-[1.6rem] border border-slate-800 bg-slate-950/70">
                      <iframe
                        src={bookingCalendarEmbedUrl}
                        title="Book a call with Ye Htet Aung on Google Calendar"
                        className="h-[760px] w-full bg-white"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">
                        Booking Mode
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        The call booking opens in Google Calendar right now. If
                        you want the scheduler embedded directly on this page
                        too, add a public embed URL later.
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                      Calendar Not Connected Yet
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      Add your public Google Calendar booking URL to connect
                      this page to real scheduling.
                    </p>
                    {process.env.NODE_ENV === "development" ? (
                      <p className="mt-3 text-xs leading-6 text-slate-300">
                        Set <code>NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL</code>
                        , and optionally{" "}
                        <code>NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL</code>, in
                        your environment variables.
                      </p>
                    ) : null}
                  </div>

                  <Link
                    href="/work-with-me"
                    className="motion-button inline-flex w-full items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-200"
                  >
                    Use Work With Me Instead
                  </Link>
                </div>
              )}

              <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                  <span className="rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 font-semibold uppercase tracking-[0.16em] text-sky-200">
                    Best use
                  </span>
                  <span>
                    Direct scheduling for intro calls, check-ins, and focused
                    discussions. Bigger scopes should start on Work With Me.
                  </span>
                </div>
              </div>
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
