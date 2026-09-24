import type { Metadata } from "next";
import Link from "next/link";
import BookCallForm from "@/app/components/BookCallForm";
import PortfolioSiteHeader from "@/app/components/PortfolioSiteHeader";
import Reveal from "@/app/components/Reveal";
import {
  buildFaqSchema,
  buildProfessionalServiceSchema,
  seoKeywords,
  siteConfig,
  toJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Thailand, Myanmar & SEA",
  description:
    "Work with Ye Htet Aung for SEO, PPC, Meta Ads, Google Ads, media buying, training, consulting, and performance strategy across Thailand, Myanmar, and Southeast Asia.",
  keywords: seoKeywords,
  alternates: {
    canonical: "/work-with-me",
  },
  openGraph: {
    title: "Digital Marketing Services in Thailand, Myanmar & SEA",
    description:
      "SEO, PPC, Meta Ads, Google Ads, media buying, training, consulting, and performance strategy for Thailand, Myanmar, and Southeast Asia.",
    url: "/work-with-me",
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services in Thailand, Myanmar & SEA",
    description:
      "Work with Ye Htet Aung for regional SEO, paid media, training, and performance marketing support.",
  },
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
  "Good for one-off strategy and ongoing execution support",
];

const workWithMeFaqs = [
  {
    question: "What digital marketing services does Ye Htet Aung offer?",
    answer:
      "Ye Htet Aung offers SEO strategy, PPC planning, Meta Ads and Google Ads management, digital media buying, performance audits, campaign reporting, training, and consulting.",
  },
  {
    question: "Does Ye Htet Aung work with Thailand-based companies?",
    answer:
      "Yes. Ye Htet Aung is based in Bangkok, Thailand and works with Thailand-based brands, founders, agencies, and regional teams.",
  },
  {
    question: "Can Myanmar and Southeast Asia teams work remotely?",
    answer:
      "Yes. Projects can be handled remotely or in a hybrid setup for Myanmar and Southeast Asia teams that need consulting, training, audits, or media buying support.",
  },
];

export default function WorkWithMePage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [buildProfessionalServiceSchema(), buildFaqSchema(workWithMeFaqs)],
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050914] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(schemaGraph) }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(80,245,170,0.22),transparent_34%),radial-gradient(circle_at_78%_4%,rgba(45,212,191,0.12),transparent_32%),linear-gradient(180deg,#050914_0%,#07111d_46%,#050914_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(80,245,170,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(80,245,170,0.035)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-70" />

      <PortfolioSiteHeader />

      <section className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal className="space-y-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-emerald-300/12 bg-white/[0.045] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur md:p-8">
              <div className="absolute right-0 top-0 h-full w-1/3 bg-emerald-300/[0.035]" />
              <Link
                href="/"
                className="relative inline-flex rounded-full border border-emerald-300/18 bg-emerald-300/[0.08] px-3 py-1 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/45 hover:text-emerald-50"
              >
                Back to Home
              </Link>

              <div className="relative mt-8 flex flex-wrap gap-2">
                {["Trainer", "Consultant", "Media Buyer"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-300/16 bg-slate-950/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-100"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="relative mt-6 space-y-5">
                <p className="text-xs font-bold uppercase tracking-[0.32em] text-emerald-300">
                  Work With Me
                </p>
                <h1 className="max-w-4xl text-4xl font-black leading-[0.98] md:text-6xl">
                  Choose the right support for{" "}
                  <span className="text-emerald-300">
                    growth, training, or media buying
                  </span>
                </h1>
                <p className="max-w-3xl text-base leading-8 text-white/68">
                  This page is for real work conversations: team training,
                  strategy support, freelance media buying, audits, and growth
                  planning. Tell me what you need and I&apos;ll reply with the
                  clearest next step.
                </p>
              </div>

              <div className="relative mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#work-inquiry-form"
                  className="rounded-full bg-emerald-300 px-5 py-3 text-sm font-black text-[#050914] transition hover:bg-emerald-200"
                >
                  Send a Work Inquiry
                </Link>
                <Link
                  href="/book-call"
                  className="rounded-full border border-emerald-300/24 bg-emerald-300/[0.08] px-5 py-3 text-sm font-black text-emerald-100 transition hover:border-emerald-300/50 hover:bg-emerald-300/[0.12]"
                >
                  Go to Booking Page
                </Link>
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-emerald-300/12 bg-white/[0.04] p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-300">
                Best Fit
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {supportSignals.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-emerald-300/10 bg-slate-950/42 px-4 py-4 text-sm leading-6 text-white/62"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal
            variant="right"
            delay={120}
            className="space-y-4 lg:sticky lg:top-24"
          >
            <div className="overflow-hidden rounded-[1.6rem] border border-emerald-300/18 bg-emerald-300/[0.06] px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-emerald-300">
                    Main Action
                  </p>
                  <p className="mt-1 text-sm font-black text-white">
                    Send a work inquiry here
                  </p>
                </div>
                <span className="rounded-full border border-emerald-300/18 bg-slate-950/55 px-3 py-1 text-xs font-black text-emerald-200">
                  Start here -&gt;
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

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <Reveal key={offer.label} delay={index * 100} variant="up">
              <article className="h-full rounded-[1.6rem] border border-emerald-300/12 bg-white/[0.04] p-6 transition hover:border-emerald-300/42 hover:bg-emerald-300/[0.07]">
                <span className="inline-flex rounded-full border border-emerald-300/18 bg-slate-950/50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-emerald-200">
                  {offer.label}
                </span>
                <h2 className="mt-5 text-xl font-black leading-snug text-white">
                  {offer.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/64">
                  {offer.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-white/68">
                  {offer.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-1 text-emerald-300">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal variant="left">
            <div className="h-full rounded-[1.6rem] border border-emerald-300/12 bg-white/[0.04] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                Who This Is For
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-white/68">
                {fitItems.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-emerald-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="h-full rounded-[1.6rem] border border-emerald-300/12 bg-white/[0.04] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                How We Start
              </p>
              <ol className="mt-5 space-y-4">
                {processSteps.map((step, index) => (
                  <li
                    key={step}
                    className="rounded-[1.2rem] border border-emerald-300/10 bg-slate-950/42 p-4"
                  >
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/38">
                      Step {index + 1}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/68">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140} variant="scale">
          <div className="mt-14 flex flex-col gap-4 rounded-[1.8rem] border border-emerald-300/14 bg-emerald-300/[0.06] p-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl space-y-2">
              <p className="text-lg font-black text-white">
                Ready to talk about the right kind of support?
              </p>
              <p className="text-sm leading-7 text-white/68">
                Use the inquiry form or booking page and tell me about your
                business, team, campaign goals, or hiring needs before we
                schedule anything.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#work-inquiry-form"
                className="rounded-full bg-emerald-300 px-5 py-3 text-sm font-black text-[#050914] transition hover:bg-emerald-200"
              >
                Send a Work Inquiry
              </Link>
              <Link
                href="/book-call"
                className="rounded-full border border-emerald-300/24 bg-slate-950/40 px-5 py-3 text-sm font-black text-emerald-100 transition hover:border-emerald-300/50"
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
