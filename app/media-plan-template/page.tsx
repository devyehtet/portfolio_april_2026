import type { Metadata } from "next";
import Link from "next/link";
import MediaPlanRequestForm from "@/app/components/MediaPlanRequestForm";
import {
  mediaPlanBlocks,
  mediaPlanDemoMetrics,
  mediaPlanDemoRows,
  mediaPlanHighlights,
  mediaPlanWorkflow,
} from "@/lib/media-plan-template";

export const metadata: Metadata = {
  title: "Digital Media Planning & Buying Toolkit",
  description:
    "Buy Ye Htet Aung's Digital Media Planning & Buying Toolkit for campaign planning, budget allocation, buying QA, and optimization reviews.",
  alternates: {
    canonical: "/media-plan-template",
  },
  openGraph: {
    title: "Digital Media Planning & Buying Toolkit",
    description:
      "A practical toolkit for campaign planning, media buying, budget allocation, buying QA, and weekly optimization reviews.",
    url: "/media-plan-template",
    siteName: "Ye Htet Aung",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Media Planning & Buying Toolkit",
    description:
      "A practical toolkit for campaign planning, media buying, budget allocation, buying QA, and weekly optimization reviews.",
  },
};

const toolkitCheckoutUrl = process.env.NEXT_PUBLIC_TOOLKIT_CHECKOUT_URL?.trim();

const phaseStyles: Record<string, string> = {
  Awareness: "border-sky-400/35 bg-sky-400/12 text-sky-100",
  Consideration: "border-violet-400/35 bg-violet-400/12 text-violet-100",
  Conversion: "border-emerald-400/35 bg-emerald-400/12 text-emerald-100",
};

const phaseRowGlowStyles: Record<string, string> = {
  Awareness: "from-sky-400/18 via-sky-400/8 to-transparent",
  Consideration: "from-violet-400/18 via-violet-400/8 to-transparent",
  Conversion: "from-emerald-400/18 via-emerald-400/8 to-transparent",
};

const metricCardStyles = [
  "border-sky-400/20 bg-sky-400/[0.08]",
  "border-indigo-400/20 bg-indigo-400/[0.08]",
  "border-violet-400/20 bg-violet-400/[0.08]",
  "border-emerald-400/20 bg-emerald-400/[0.08]",
];

const requestFlowSteps = [
  "Fill the order form with your name, work email, company, and product option.",
  "Receive the payment step and invoice option directly by email.",
  "Get toolkit access after payment confirmation and start planning cleaner campaigns.",
];

export default function MediaPlanTemplatePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(129,140,248,0.16),transparent_40%)]" />

      <section className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="order-2 space-y-6 pt-1 lg:order-1">
            <Link
              href="/"
              className="inline-flex rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition hover:border-sky-400 hover:text-sky-200"
            >
              Back to Home
            </Link>

            <div className="flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-200">
              {["Paid Toolkit", "Media Planning", "Buying Workflow"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1"
                  >
                    {item}
                  </span>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.26em] text-sky-300">
                Digital Media Planning & Buying Toolkit
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] md:text-[3.55rem]">
                Ready-to-use planning tools for cleaner campaigns, budgets, and buying decisions
              </h1>
              <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                A practical toolkit for marketers, founders, freelancers, and
                small teams who need a repeatable way to brief campaigns, plan
                channel roles, allocate budgets, check buying setup, and review
                performance without scattered notes.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[1.9rem] border border-slate-800 bg-[linear-gradient(135deg,rgba(8,15,33,0.96),rgba(17,24,39,0.92)_58%,rgba(15,23,42,0.98))] p-6">
              <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-sky-400/12 blur-3xl" />
              <div className="pointer-events-none absolute bottom-0 left-10 h-28 w-28 rounded-full bg-indigo-400/12 blur-3xl" />

              <div className="relative grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-sky-300/20 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200">
                      Ready to buy
                    </span>
                    <span className="text-sm font-medium text-slate-300">
                      Register your order in one step
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h2 className="max-w-xl text-2xl font-semibold leading-tight text-white">
                      Register once and buy the toolkit directly.
                    </h2>
                    <p className="max-w-xl text-sm leading-7 text-slate-300">
                      Use the form to place your order now. I&apos;ll reply with
                      the payment step, invoice option if needed, and delivery
                      access for the toolkit.
                    </p>
                  </div>

                  {toolkitCheckoutUrl ? (
                    <a
                      href={toolkitCheckoutUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                    >
                      Buy Toolkit Now
                    </a>
                  ) : (
                    <Link
                      href="#request-form"
                      className="inline-flex items-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                    >
                      Register Order Now
                    </Link>
                  )}
                </div>

                <div className="grid gap-3">
                  {requestFlowSteps.map((item, index) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-4"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-sky-300/25 bg-sky-400/10 text-xs font-semibold text-sky-200">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-6 text-slate-200">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {mediaPlanHighlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:sticky lg:top-6 lg:order-2">
            <div className="relative mb-4 overflow-hidden rounded-[1.75rem] border border-sky-400/20 bg-[linear-gradient(135deg,rgba(14,165,233,0.12),rgba(15,23,42,0.78)_50%,rgba(99,102,241,0.1))] px-4 py-4 lg:mr-4">
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-400/15 blur-2xl" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
                  Main Action
                </p>
                <p className="mt-1 text-sm font-medium text-slate-100">
                  Register your toolkit order
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Fill this once to register your order. I&apos;ll send the
                  payment step and toolkit access details to your email.
                </p>
              </div>
              <span className="absolute right-4 top-4 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold text-sky-200">
                Start here →
              </span>
            </div>

            <MediaPlanRequestForm />
          </div>
        </div>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-sky-300">
              How Buying Works
            </p>
            <div className="mt-4 space-y-4">
              {[
                "Register your order with your buyer details and selected product option.",
                "Receive payment instructions and invoice option by email.",
                "After payment confirmation, receive toolkit access and setup notes.",
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
                >
                  <p className="text-sm font-semibold text-slate-50">
                    0{index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-xs uppercase tracking-[0.22em] text-sky-300">
              What Buyers Get
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              {mediaPlanWorkflow.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 text-sky-300">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.26em] text-sky-300">
              Inside the Toolkit
            </p>
            <h2 className="text-2xl font-semibold">What the buyer receives</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {mediaPlanBlocks.map((block) => (
              <article
                key={block.title}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <h3 className="text-lg font-semibold text-slate-50">
                  {block.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {block.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {block.fields.map((field) => (
                    <span
                      key={field}
                      className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs text-slate-200"
                    >
                      {field}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.26em] text-sky-300">
              Toolkit Preview
            </p>
            <h2 className="text-2xl font-semibold">
              Example of the planning and buying view
            </h2>
            <p className="max-w-3xl text-sm leading-7 text-slate-300">
              This preview shows the product structure. Payment and delivery
              can stay manual until a checkout link is connected.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-800/90 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(2,6,23,0.98))] text-slate-100 shadow-[0_30px_120px_rgba(2,6,23,0.65)]">
            <div className="border-b border-slate-800/80 bg-slate-950/80 px-5 py-5 backdrop-blur">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                      Toolkit Mockup
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-100">
                      Digital media planning workspace
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-[11px] font-medium text-slate-300">
                  {["Overview", "Channel Mix", "Conversion Notes"].map((tab) => (
                    <span
                      key={tab}
                      className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1.5"
                    >
                      {tab}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-3 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-3xl border border-slate-800 bg-[linear-gradient(135deg,rgba(14,165,233,0.16),rgba(15,23,42,0.4)_55%,rgba(99,102,241,0.12))] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-200">
                    Campaign Snapshot
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    Multi-channel planning system with buying QA and optimization notes
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                    Built to show how campaign briefing, spend, audience
                    strategy, buying setup, and weekly review decisions can
                    live in one clean workspace.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { label: "Product Type", value: "Google Sheets Toolkit" },
                    { label: "Best For", value: "Planning + Buying" },
                    { label: "Review Rhythm", value: "Weekly" },
                    { label: "Delivery Method", value: "Email Access" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-slate-800 bg-slate-900/75 p-4"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-100">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5 px-5 py-5">
              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                {mediaPlanDemoMetrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={`rounded-3xl border p-4 ${metricCardStyles[index % metricCardStyles.length]}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                        {metric.label}
                      </p>
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                        Demo
                      </span>
                    </div>
                    <p className="mt-4 text-3xl font-semibold tracking-tight text-white">
                      {metric.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {metric.note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="overflow-x-auto rounded-[1.75rem] border border-slate-800/80 bg-slate-950/55">
                <div className="min-w-[980px]">
                  <div className="grid grid-cols-[0.85fr_1fr_1.35fr_1.2fr_0.8fr_0.8fr_0.95fr] border-b border-slate-800 bg-white/[0.04] text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  {["Phase", "Channel", "Objective", "Audience", "Budget", "Flight", "Target"].map(
                    (header) => (
                      <div key={header} className="px-4 py-3.5">
                        {header}
                      </div>
                    )
                  )}
                </div>

                {mediaPlanDemoRows.map((row) => (
                  <div
                    key={`${row.phase}-${row.channel}`}
                    className="group relative grid grid-cols-[0.85fr_1fr_1.35fr_1.2fr_0.8fr_0.8fr_0.95fr] border-b border-slate-800/80 bg-slate-950/15 transition hover:bg-slate-900/45 last:border-b-0"
                  >
                    <div
                      className={`pointer-events-none absolute inset-y-3 left-0 w-20 bg-gradient-to-r ${phaseRowGlowStyles[row.phase] ?? "from-white/5 to-transparent"} opacity-90`}
                    />

                    <div className="relative px-4 py-4">
                      <span
                        className={`inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold ${phaseStyles[row.phase] ?? "border-slate-700 bg-slate-800 text-slate-200"}`}
                      >
                        {row.phase}
                      </span>
                    </div>
                    <div className="relative px-4 py-4">
                      <p className="text-sm font-semibold text-white">{row.channel}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                        Channel role
                      </p>
                    </div>
                    <div className="relative px-4 py-4 text-sm leading-6 text-slate-200">
                      {row.objective}
                    </div>
                    <div className="relative px-4 py-4 text-sm leading-6 text-slate-300">
                      {row.audience}
                    </div>
                    <div className="relative px-4 py-4">
                      <p className="text-sm font-semibold text-white">{row.budget}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-500">
                        Allocated
                      </p>
                    </div>
                    <div className="relative px-4 py-4 text-sm text-slate-200">
                      {row.flight}
                    </div>
                    <div className="relative px-4 py-4 text-sm leading-6 text-slate-300">
                      {row.target}
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
