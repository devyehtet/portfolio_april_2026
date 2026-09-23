import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  buildFaqSchema,
  buildPersonSchema,
  buildProfessionalServiceSchema,
  buildWebsiteSchema,
  siteConfig,
  toJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Digital Marketing Consultant in Thailand, Myanmar & SEA",
  description:
    "Hire Ye Htet Aung, a Bangkok-based digital marketing consultant for SEO, PPC, Meta Ads, Google Ads, media buying, training, and performance strategy across Thailand, Myanmar, and Southeast Asia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Digital Marketing Consultant in Thailand, Myanmar & SEA",
    description:
      "SEO, PPC, Meta Ads, Google Ads, media buying, training, and performance strategy for Thailand, Myanmar, and Southeast Asia brands.",
    url: "/",
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Consultant in Thailand, Myanmar & SEA",
    description:
      "Performance marketing support for Thailand, Myanmar, and Southeast Asia brands.",
  },
};

const navItems = [
  ["Services", "#services"],
  ["Proof", "#proof"],
  ["Toolkit", "/media-plan-template"],
  ["Experience", "#experience"],
  ["Contact", "/work-with-me"],
];

const metrics = [
  ["12+", "Years experience"],
  ["3.2x-7.5x", "ROAS range"],
  ["$300K+", "Media budget handled"],
  ["SEA", "Regional market exposure"],
];

const services = [
  {
    title: "SEO and regional visibility",
    body: "Technical SEO, intent-led landing pages, structured data, FAQ content, and market signals for Thailand, Myanmar, and SEA discovery.",
    href: "/digital-marketing-consultant-thailand-myanmar-sea",
  },
  {
    title: "Digital media planning",
    body: "Campaign briefs, channel roles, budget allocation, tracking needs, launch QA, and weekly optimization rhythm.",
    href: "/digital-media-planning-consultant-bangkok",
  },
  {
    title: "Paid media buying",
    body: "Meta Ads, Google Ads, PPC, paid social, conversion tracking, creative testing, budget pacing, and campaign audits.",
    href: "/digital-media-buying-consultant-thailand-sea",
  },
  {
    title: "Training and consulting",
    body: "Practical workshops and focused consulting for teams that need stronger campaign setup, reporting, and performance thinking.",
    href: "/work-with-me",
  },
];

const proofItems = [
  {
    title: "Education lead generation",
    market: "Thailand and Myanmar audiences",
    result: "4.8x ROAS, 38% lower CPL, and 2.1x more qualified leads.",
    process:
      "Meta created demand while Google captured high-intent searches. Reporting focused on lead quality, CPL, and booked-call conversion.",
  },
  {
    title: "Digital product launch",
    market: "Southeast Asia",
    result: "Scaled campaigns into a 3.2x-7.5x ROAS range.",
    process:
      "Cold, warm, and retargeting campaigns were structured around creative testing, audience segments, and weekly budget shifts.",
  },
  {
    title: "Campaign planning workflow",
    market: "Myanmar, Thailand, and SEA",
    result: "Cleaner launch decisions and faster weekly optimization reviews.",
    process:
      "Briefs, channel roles, spend allocation, QA checks, reporting notes, and next actions were organized into one repeatable system.",
  },
];

const keywordPages = [
  [
    "Digital media planning consultant in Bangkok",
    "/digital-media-planning-consultant-bangkok",
  ],
  [
    "Digital media buying consultant for Thailand and SEA",
    "/digital-media-buying-consultant-thailand-sea",
  ],
  ["Myanmar digital marketing consultant", "/myanmar-digital-marketing-consultant"],
  ["Media planning and buying toolkit", "/media-planning-buying-toolkit"],
];

const faqs = [
  {
    question: "Who is Ye Htet Aung?",
    answer:
      "Ye Htet Aung is a Bangkok-based digital marketing consultant and performance marketing manager supporting Thailand, Myanmar, and Southeast Asia projects.",
  },
  {
    question: "What services are available?",
    answer:
      "Services include SEO, Meta Ads, Google Ads, PPC, media planning, media buying, training, campaign audits, analytics, and performance strategy.",
  },
  {
    question: "Can Myanmar and SEA teams work remotely?",
    answer:
      "Yes. Support can be remote or hybrid for Myanmar, Thailand, and Southeast Asia teams that need consulting, training, audits, or media buying support.",
  },
];

export default function HomePage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonSchema(),
      buildProfessionalServiceSchema(),
      buildWebsiteSchema(),
      buildFaqSchema(faqs),
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050914] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(schemaGraph) }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_8%,rgba(80,245,170,0.18),transparent_30%),radial-gradient(circle_at_80%_18%,rgba(45,212,191,0.1),transparent_30%),linear-gradient(rgba(80,245,170,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(80,245,170,0.03)_1px,transparent_1px)] bg-[size:auto,auto,72px_72px,72px_72px]" />

      <header className="sticky top-0 z-50 border-b border-emerald-300/10 bg-[#050914]/90 backdrop-blur">
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4"
        >
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-300 text-sm font-black text-[#050914]">
              YH
            </span>
            <span>
              <span className="block text-sm font-black">Ye Htet Aung</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-200">
                Performance Marketing
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-6 text-sm font-semibold text-white/72 lg:flex">
            {navItems.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="transition hover:text-emerald-200"
              >
                {label}
              </Link>
            ))}
          </div>

          <Link
            href="/book-call"
            className="rounded-full bg-emerald-300 px-5 py-3 text-sm font-black text-[#050914] shadow-[0_0_28px_rgba(80,245,170,0.18)] transition hover:bg-emerald-200"
          >
            Strategy Call
          </Link>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/[0.08] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
            Digital Marketing Manager - Performance Marketing
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl lg:text-8xl">
            Performance marketing built for{" "}
            <span className="text-emerald-300">measurable growth.</span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            I help education, digital product, and D2T brands scale with SEO,
            Meta Ads, Google Ads, PPC, media planning, creative testing, and
            analytics-led optimization across Thailand, Myanmar, and SEA.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work-with-me"
              className="rounded-full bg-emerald-300 px-6 py-4 text-sm font-black text-[#050914] transition hover:bg-emerald-200"
            >
              Work With Me
            </Link>
            <Link
              href="/media-plan-template"
              className="rounded-full border border-emerald-300/25 bg-emerald-300/[0.08] px-6 py-4 text-sm font-black text-emerald-100 transition hover:border-emerald-300/50"
            >
              Buy Toolkit
            </Link>
          </div>

          <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
            {metrics.map(([metric, label]) => (
              <div
                key={metric}
                className="rounded-2xl border border-emerald-300/12 bg-white/[0.045] p-4"
              >
                <div className="text-2xl font-black text-emerald-300 md:text-3xl">
                  {metric}
                </div>
                <div className="mt-3 text-[11px] font-black uppercase leading-5 tracking-[0.16em] text-slate-300">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-[2rem] border border-emerald-300/14 bg-slate-900/62 p-5 shadow-[0_28px_110px_rgba(80,245,170,0.12)]">
          <div className="grid gap-5 rounded-[1.65rem] border border-white/10 bg-[#07120f] p-5 md:grid-cols-[0.8fr_1fr] lg:grid-cols-1 xl:grid-cols-[0.8fr_1fr]">
            <div className="mx-auto w-full max-w-[16rem]">
              <Image
                src="/ye-htet.webp"
                alt="Ye Htet Aung, Bangkok-based digital marketing consultant"
                width={320}
                height={427}
                priority
                sizes="(min-width: 1280px) 256px, (min-width: 768px) 280px, 220px"
                className="aspect-[3/4] rounded-[1.45rem] border-4 border-emerald-300 object-cover shadow-[0_0_45px_rgba(80,245,170,0.22)]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                    Portfolio Signal
                  </p>
                  <h2 className="mt-1 text-3xl font-black">Ye Htet Aung</h2>
                </div>
                <span className="rounded-full bg-emerald-300 px-3 py-1 text-xs font-black text-[#050914]">
                  LIVE
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  "Based in Bangkok, Thailand",
                  "Myanmar and SEA market experience",
                  "Remote, hybrid, and regional collaboration",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm font-bold text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-14">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-300">
          Services
        </p>
        <h2 className="mt-4 max-w-4xl text-3xl font-black md:text-5xl">
          Search, ads, media planning, and consulting for regional growth.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-[1.5rem] border border-emerald-300/12 bg-slate-900/55 p-6 transition hover:border-emerald-300/35 hover:bg-slate-900/75"
            >
              <h3 className="text-xl font-black text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-5 py-14">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-300">
          Case Studies / Proof
        </p>
        <h2 className="mt-4 max-w-4xl text-3xl font-black md:text-5xl">
          Proof points with market, result, and process.
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {proofItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.65rem] border border-emerald-300/12 bg-white/[0.035] p-6"
            >
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                {item.market}
              </p>
              <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
              <p className="mt-4 text-lg font-black text-emerald-300">
                {item.result}
              </p>
              <p className="mt-4 leading-7 text-slate-300">{item.process}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-5 py-14">
        <div className="grid gap-8 rounded-[2rem] border border-emerald-300/14 bg-slate-900/52 p-6 md:p-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-300">
              Experience
            </p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              12+ years across agency, brand, and regional digital roles.
            </h2>
          </div>
          <div className="grid gap-3 text-slate-300">
            {[
              "Regional digital strategy, performance optimization, and reporting systems.",
              "Meta Ads, Google Ads, PPC, SEO, campaign planning, and digital media buying.",
              "Support for Thailand, Myanmar, Southeast Asia, and global-facing projects.",
            ].map((item) => (
              <p key={item} className="rounded-2xl bg-white/[0.045] p-4">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-300">
          Focused SEO Pages
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {keywordPages.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-2xl border border-emerald-300/12 bg-white/[0.035] p-5 font-bold text-slate-100 transition hover:border-emerald-300/35"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-[2rem] border border-emerald-300/14 bg-emerald-300 p-7 text-[#050914] md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#050914]/70">
            Get In Touch
          </p>
          <h2 className="mt-4 max-w-4xl text-3xl font-black md:text-5xl">
            Based in Bangkok. Open to full-time, contract, consulting, and
            toolkit buyers.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/work-with-me"
              className="rounded-full bg-[#050914] px-6 py-4 text-sm font-black text-white"
            >
              Send Work Inquiry
            </Link>
            <Link
              href="/book-call"
              className="rounded-full border border-[#050914]/20 px-6 py-4 text-sm font-black text-[#050914]"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-300">
          FAQ
        </p>
        <div className="mt-5 grid gap-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-emerald-300/12 bg-white/[0.035] p-5"
            >
              <summary className="cursor-pointer font-black text-white">
                {item.question}
              </summary>
              <p className="mt-3 leading-7 text-slate-300">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-emerald-300/10 px-5 py-10 text-center text-sm text-slate-400">
        © 2026 Ye Htet Aung. All rights reserved. - info@yehtet.com
      </footer>
    </main>
  );
}
