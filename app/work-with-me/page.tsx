import type { Metadata } from "next";
import Link from "next/link";
import BrandShowcase from "@/app/components/BrandShowcase";
import BookCallForm from "@/app/components/BookCallForm";
import Reveal from "@/app/components/Reveal";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Explore how Ye Htet Aung works with brands and teams through training, consulting, and freelance media buying.",
};

const offers = [
  {
    label: "Trainer",
    title: "Build stronger in-house marketing capability",
    description:
      "Workshops and practical sessions for teams that need better campaign planning, reporting, paid-media discipline, and performance thinking.",
    bullets: [
      "Meta Ads and Google Ads training",
      "Campaign planning and KPI frameworks",
      "Reporting and optimization workflows",
    ],
    accent:
      "border-sky-500/30 bg-[linear-gradient(180deg,rgba(14,165,233,0.16),rgba(15,23,42,0.9))]",
  },
  {
    label: "Consultant",
    title: "Clarify growth strategy and channel direction",
    description:
      "Strategic support for brands that want sharper positioning, cleaner funnel thinking, stronger SEO direction, and better paid-media decisions.",
    bullets: [
      "Growth and channel strategy",
      "Performance audits and diagnosis",
      "Roadmaps with practical next steps",
    ],
    accent:
      "border-indigo-500/30 bg-[linear-gradient(180deg,rgba(99,102,241,0.16),rgba(15,23,42,0.9))]",
  },
  {
    label: "Freelance Media Buyer",
    title: "Hands-on execution for paid campaign performance",
    description:
      "Flexible execution support for businesses that need campaign setup, optimization, creative testing, and consistent performance reporting.",
    bullets: [
      "Meta Ads and Google Ads management",
      "Testing and budget optimization",
      "Weekly reporting and recommendations",
    ],
    accent:
      "border-emerald-500/30 bg-[linear-gradient(180deg,rgba(16,185,129,0.16),rgba(15,23,42,0.9))]",
  },
];

const fitItems = [
  "Businesses that need support without building a large in-house team first.",
  "Marketing teams that want practical training instead of generic theory.",
  "Brands looking for strategy support before scaling SEO or paid media.",
  "Founders who want a clearer path from marketing activity to business results.",
];

const processSteps = [
  "We review your current goals, team setup, campaigns, and growth challenges.",
  "I recommend the best fit: training, consulting, freelance execution, or a mix.",
  "We move into a focused scope with clear deliverables and next actions.",
];

const supportSignals = [
  "For founders, marketing leads, and in-house teams",
  "Useful before scaling paid media or training a team",
  "Good for both one-off strategy and ongoing execution support",
];

export default function WorkWithMePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="site-bg-grid" />
      <div className="site-orb site-orb--cyan" />
      <div className="site-orb site-orb--violet" />
      <div className="site-orb site-orb--emerald" />

      <section className="page-shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal className="order-2 space-y-6 lg:order-1">
            <Link
              href="/"
              className="motion-button inline-flex w-fit rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition hover:border-sky-400 hover:text-sky-300"
            >
              Back to Home
            </Link>

            <div className="editorial-panel hero-panel space-y-5">
              <div className="flex flex-wrap gap-2">
                {["Trainer", "Consultant", "Media Buyer"].map((item) => (
                  <span
                    key={item}
                    className="hero-chip rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                <p className="section-kicker text-xs uppercase tracking-[0.24em] text-sky-300">
                  Work With Me
                </p>
                <h1 className="max-w-4xl text-4xl font-semibold leading-[1.04] md:text-6xl">
                  Choose the kind of support you need and send a work inquiry
                </h1>
                <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                  This page is for real work conversations: team training,
                  strategy support, freelance media buying, audits, and growth
                  planning. Use the inquiry form to tell me what you need and
                  I&apos;ll reply with the best next step.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#work-inquiry-form"
                  className="motion-button rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-400"
                >
                  Send a work inquiry
                </Link>
                <Link
                  href="/book-call"
                  className="motion-button rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-200"
                >
                  Go to booking page
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-[linear-gradient(135deg,rgba(14,165,233,0.12),rgba(15,23,42,0.78)_52%,rgba(99,102,241,0.1))] p-6">
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-sky-400/12 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 left-8 h-28 w-28 rounded-full bg-indigo-400/12 blur-3xl" />

              <div className="relative space-y-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                  Best Fit
                </p>
                <div className="grid gap-3 md:grid-cols-3">
                  {supportSignals.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-4 text-sm leading-6 text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="section-shell grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
          <Reveal variant="left" className="space-y-4">
            <div className="story-card motion-card motion-panel rounded-[2rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                Choose the right lane
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {offers.map((offer) => (
                  <div
                    key={offer.label}
                    className={`rounded-[1.6rem] border p-5 ${offer.accent}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex rounded-full border border-white/10 bg-slate-950/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                        {offer.label}
                      </span>
                      <Link
                        href="#work-inquiry-form"
                        className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200"
                      >
                        Inquire →
                      </Link>
                    </div>
                    <h2 className="mt-4 text-lg font-semibold leading-snug text-slate-50">
                      {offer.title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {offer.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={120} className="lg:sticky lg:top-6">
            <div className="mb-4 overflow-hidden rounded-[1.75rem] border border-sky-400/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.12),rgba(15,23,42,0.78)_50%,rgba(99,102,241,0.08))] px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                    Main Action
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-100">
                    Send a work inquiry here
                  </p>
                </div>
                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
                  Start here →
                </span>
              </div>
            </div>

            <BookCallForm
              formId="work-inquiry-form"
              chips={["Work Inquiry", "Training / Consulting", "Reply by Email"]}
              heading="Tell me what kind of support you need"
              description="Use this form for business inquiries related to consulting, training, audits, freelance media buying, or strategic support. I review the fit first, then reply with the clearest next step."
              leadContentName="Work With Me Inquiry"
              nextStepText="I review the inquiry, recommend the best fit, and reply with the next action or booking suggestion."
              submitLabel="Send Work Inquiry"
            />
          </Reveal>
        </div>

        <div className="section-shell grid gap-4 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <Reveal key={offer.label} delay={index * 100} variant="up">
              <article
                className={`motion-card motion-panel story-card rounded-[1.9rem] border p-6 shadow-lg shadow-slate-950/20 ${offer.accent}`}
              >
                <span className="inline-flex rounded-full border border-white/10 bg-slate-950/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                  {offer.label}
                </span>
                <h2 className="mt-5 text-xl font-semibold leading-snug text-slate-50">
                  {offer.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {offer.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-slate-200">
                  {offer.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 text-sky-300">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <BrandShowcase
          compact
          kicker="Selected Track Record"
          title="Selected brands and organizations behind my experience"
          description="For visitors exploring how we might work together, this gives a faster visual read on the brand and organizational exposure behind my work before we get into fit, process, and scope."
        />

        <div className="section-shell grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal variant="left">
            <div className="story-card motion-card motion-panel rounded-[2rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                Who This Is For
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                {fitItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-sky-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="story-card motion-card motion-panel rounded-[2rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                How We Start
              </p>
              <ol className="mt-4 space-y-4">
                {processSteps.map((step, index) => (
                  <li
                    key={step}
                    className="process-card rounded-2xl p-4 pl-7"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Step {index + 1}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} variant="scale">
          <div className="editorial-panel motion-card motion-panel flex flex-col gap-4 rounded-[2rem] p-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl space-y-2">
              <p className="text-lg font-semibold text-slate-50">
                Ready to talk about the right kind of support?
              </p>
              <p className="text-sm leading-6 text-slate-300">
                Use the inquiry form or booking page and tell me about your
                business, team, campaign goals, or hiring needs before we
                schedule anything.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#work-inquiry-form"
                className="motion-button rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-400"
              >
                Send a Work Inquiry
              </Link>
              <Link
                href="/book-call"
                className="motion-button rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-200"
              >
                Go to Booking Page
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
