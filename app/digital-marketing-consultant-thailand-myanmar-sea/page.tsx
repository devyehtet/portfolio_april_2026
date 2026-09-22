import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPersonSchema,
  buildProfessionalServiceSchema,
  priorityMarkets,
  regionalFaqs,
  seoKeywords,
  siteConfig,
  toJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "Digital Marketing Consultant Thailand, Myanmar & SEA",
  description:
    "Digital marketing consulting for Thailand, Myanmar, and Southeast Asia: SEO, AEO, GEO, PPC, Meta Ads, Google Ads, media buying, training, and performance strategy.",
  keywords: seoKeywords,
  alternates: {
    canonical: "/digital-marketing-consultant-thailand-myanmar-sea",
  },
  openGraph: {
    title: "Digital Marketing Consultant Thailand, Myanmar & SEA",
    description:
      "Thailand-first digital marketing consulting with Myanmar and Southeast Asia market experience across SEO, AEO, GEO, PPC, and media buying.",
    url: "/digital-marketing-consultant-thailand-myanmar-sea",
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Consultant Thailand, Myanmar & SEA",
    description:
      "SEO, AEO, GEO, PPC, Meta Ads, Google Ads, and media buying support for Thailand, Myanmar, and SEA brands.",
  },
};

const answerCards = [
  {
    title: "What I do",
    body: "I help brands improve organic visibility, paid media performance, campaign planning, and reporting discipline across SEO, PPC, Meta Ads, Google Ads, and media buying workflows.",
  },
  {
    title: "Where I work",
    body: "I am based in Bangkok, Thailand and support Thailand, Myanmar, and Southeast Asia projects through remote, hybrid, consulting, training, and freelance execution models.",
  },
  {
    title: "Who this is for",
    body: "This is for founders, marketers, agencies, education teams, digital product businesses, D2T brands, and regional teams that need sharper growth execution.",
  },
];

const serviceClusters = [
  {
    title: "SEO, AEO, and GEO strategy",
    body: "Technical SEO, search intent mapping, answer-friendly page structure, schema markup, regional landing pages, internal linking, and content plans for Thailand, Myanmar, and SEA discovery.",
    terms: ["SEO consultant Thailand", "AEO strategy", "GEO visibility"],
  },
  {
    title: "Paid media and performance marketing",
    body: "Meta Ads, Google Ads, PPC planning, campaign audits, conversion tracking, creative testing, budget allocation, reporting, and optimization systems for measurable growth.",
    terms: ["PPC consultant Thailand", "Meta Ads specialist", "Google Ads specialist"],
  },
  {
    title: "Training, consulting, and media buying",
    body: "Practical workshops, team training, strategy calls, freelance media buying support, and digital media planning systems for in-house teams and founders.",
    terms: ["Digital marketing trainer Myanmar", "SEA media buying", "Performance workshops"],
  },
];

const rankingSignals = [
  "Clear Thailand-first location signal with Bangkok as the business base.",
  "Dedicated market coverage for Myanmar and Southeast Asia search intent.",
  "Structured data for Person, ProfessionalService, FAQPage, BreadcrumbList, and WebSite context.",
  "Answer-style copy that helps search engines and AI answer engines summarize the services accurately.",
  "Internal links to work inquiry, booking, toolkit, and blog content for stronger topical pathways.",
];

export default function RegionalDigitalMarketingPage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonSchema(),
      buildProfessionalServiceSchema(),
      buildFaqSchema(regionalFaqs),
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        {
          name: "Digital Marketing Consultant Thailand Myanmar SEA",
          path: "/digital-marketing-consultant-thailand-myanmar-sea",
        },
      ]),
      {
        "@type": "Service",
        "@id": absoluteUrl(
          "/digital-marketing-consultant-thailand-myanmar-sea#service"
        ),
        name: "Digital marketing consulting for Thailand, Myanmar, and Southeast Asia",
        provider: {
          "@id": absoluteUrl("/#person"),
        },
        areaServed: [
          { "@type": "Country", name: "Thailand" },
          { "@type": "Country", name: "Myanmar" },
          { "@type": "AdministrativeArea", name: "Southeast Asia" },
        ],
        serviceType: [
          "SEO consulting",
          "AEO strategy",
          "GEO strategy",
          "PPC advertising",
          "Meta Ads management",
          "Google Ads management",
          "Digital media buying",
          "Digital marketing training",
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(schemaGraph) }}
      />

      <div className="site-bg-grid" />
      <div className="site-orb site-orb--cyan" />
      <div className="site-orb site-orb--violet" />
      <div className="site-orb site-orb--emerald" />

      <section className="page-shell">
        <div className="section-intro gap-6">
          <Reveal className="editorial-panel hero-panel space-y-5">
            <Link
              href="/"
              className="motion-button inline-flex w-fit rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition hover:border-sky-400 hover:text-sky-300"
            >
              Back to Home
            </Link>

            <div className="flex flex-wrap gap-2">
              {["Thailand SEO", "Myanmar Digital Marketing", "SEA Performance"].map(
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
                AEO, SEO, GEO
              </p>
              <h1 className="max-w-5xl text-4xl font-semibold leading-[1.04] md:text-6xl">
                Digital marketing consultant for Thailand, Myanmar, and
                Southeast Asia
              </h1>
              <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                I help brands improve search visibility, paid media performance,
                campaign planning, and conversion quality across Thailand-first
                growth projects with Myanmar and Southeast Asia market context.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/work-with-me"
                className="motion-button rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-400"
              >
                Send a Work Inquiry
              </Link>
              <Link
                href="/book-call"
                className="motion-button rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-200"
              >
                Book a Strategy Call
              </Link>
            </div>
          </Reveal>

          <Reveal className="section-note space-y-4" delay={120} variant="right">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
              Quick Answer
            </p>
            <div className="space-y-3 text-sm leading-6 text-slate-300">
              <p>
                Ye Htet Aung is a Bangkok-based digital marketing consultant
                for Thailand, Myanmar, and Southeast Asia.
              </p>
              <p>
                Core services include SEO, AEO, GEO, PPC, Meta Ads, Google Ads,
                media buying, training, and performance strategy.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="section-shell grid gap-4 md:grid-cols-3">
          {answerCards.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} variant="up">
              <article className="story-card motion-card motion-panel h-full rounded-2xl p-5">
                <h2 className="text-lg font-semibold text-slate-50">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="section-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal variant="left">
            <section className="story-card motion-card motion-panel rounded-[2rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                Market Focus
              </p>
              <div className="mt-5 space-y-4">
                {priorityMarkets.map((market) => (
                  <div
                    key={market.name}
                    className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
                  >
                    <h2 className="text-lg font-semibold text-slate-50">
                      {market.name}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {market.focus}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <section className="story-card motion-card motion-panel rounded-[2rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                Ranking Foundation
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Top ten rankings depend on competition, content depth, backlinks,
                search demand, and time. This page gives the site a stronger
                technical and content foundation for Thailand, Myanmar, and SEA
                intent.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {rankingSignals.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-sky-300">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>

        <div className="section-shell space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.26em] text-sky-300">
              Services
            </p>
            <h2 className="text-2xl font-semibold">
              Search, ads, and growth systems for regional teams
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {serviceClusters.map((service, index) => (
              <Reveal key={service.title} delay={index * 100} variant="scale">
                <article className="story-card motion-card motion-panel h-full rounded-[1.75rem] p-6">
                  <h3 className="text-xl font-semibold text-slate-50">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {service.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.terms.map((term) => (
                      <span
                        key={term}
                        className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-300"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} variant="up">
          <section className="section-shell rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              Answer Engine FAQ
            </p>
            <div className="mt-5 grid gap-4">
              {regionalFaqs.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-slate-800 bg-slate-950/55 p-4"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-slate-100">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={150} variant="scale">
          <div className="editorial-panel motion-card motion-panel flex flex-col gap-4 rounded-[2rem] p-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl space-y-2">
              <p className="text-lg font-semibold text-slate-50">
                Want Thailand-first visibility with Myanmar and SEA reach?
              </p>
              <p className="text-sm leading-6 text-slate-300">
                Send a focused inquiry with your market, service, target
                keywords, monthly budget, and current campaign or website
                challenge.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/work-with-me"
                className="motion-button rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-400"
              >
                Work With Me
              </Link>
              <Link
                href="/blog"
                className="motion-button rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-200"
              >
                Read Insights
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
