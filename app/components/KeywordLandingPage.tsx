import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import type { KeywordLandingPage as KeywordLandingPageData } from "@/lib/keyword-landing-pages";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPersonSchema,
  buildProfessionalServiceSchema,
  siteConfig,
  toJsonLd,
} from "@/lib/seo";

export function buildKeywordLandingPageMetadata(
  page: KeywordLandingPageData
): Metadata {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: page.canonicalPath,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: page.canonicalPath,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

export default function KeywordLandingPage({
  page,
}: {
  page: KeywordLandingPageData;
}) {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonSchema(),
      buildProfessionalServiceSchema(),
      buildFaqSchema(page.faqs),
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: page.title, path: page.canonicalPath },
      ]),
      {
        "@type": "Service",
        "@id": absoluteUrl(`${page.canonicalPath}#service`),
        name: page.title,
        description: page.description,
        provider: {
          "@id": absoluteUrl("/#person"),
        },
        areaServed: page.market,
        serviceType: page.serviceType,
        url: absoluteUrl(page.canonicalPath),
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl(`${page.canonicalPath}#proof`),
        name: `${page.title} proof points`,
        itemListElement: page.proof.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            name: item.campaignType,
            about: item.market,
            description: `${item.process} ${item.result}`,
          },
        })),
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
          <Reveal className="editorial-panel hero-panel space-y-6">
            <Link
              href="/"
              className="motion-button inline-flex w-fit rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition hover:border-sky-400 hover:text-sky-300"
            >
              Back to Home
            </Link>

            <div className="flex flex-wrap gap-2">
              {[page.label, page.market, "Performance Marketing"].map((item) => (
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
                {page.label}
              </p>
              <h1 className="max-w-5xl text-4xl font-semibold leading-[1.04] md:text-6xl">
                {page.headline}
              </h1>
              <p className="max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                {page.intro}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={page.ctaPrimary.href}
                className="motion-button rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-400"
              >
                {page.ctaPrimary.label}
              </Link>
              <Link
                href={page.ctaSecondary.href}
                className="motion-button rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-200"
              >
                {page.ctaSecondary.label}
              </Link>
            </div>
          </Reveal>

          <Reveal className="section-note space-y-4" delay={120} variant="right">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300">
              Quick Answer
            </p>
            <p className="text-sm leading-7 text-slate-300">{page.summary}</p>
          </Reveal>
        </div>

        <div className="section-shell grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal variant="left">
            <section className="story-card motion-card motion-panel rounded-[2rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                Who This Helps
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                {page.audience.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-sky-300">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <section className="story-card motion-card motion-panel rounded-[2rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                What I Can Support
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {page.serviceType.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-slate-200"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                This page is built around high-intent search terms so Google and
                answer engines can understand the service, region, proof, and
                next action clearly.
              </p>
            </section>
          </Reveal>
        </div>

        <section className="section-shell space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.26em] text-sky-300">
              Case Studies / Proof
            </p>
            <h2 className="text-2xl font-semibold">
              Campaign proof with market, result, role, and process
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {page.proof.map((item, index) => (
              <Reveal key={item.campaignType} delay={index * 90} variant="scale">
                <article className="story-card motion-card motion-panel h-full rounded-[1.75rem] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
                    {item.campaignType}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-slate-50">
                    {item.result}
                  </h3>
                  <dl className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Market
                      </dt>
                      <dd className="mt-1">{item.market}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Role
                      </dt>
                      <dd className="mt-1">{item.role}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Process
                      </dt>
                      <dd className="mt-1">{item.process}</dd>
                    </div>
                  </dl>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal variant="up">
          <section className="section-shell rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300">
              FAQ
            </p>
            <div className="mt-5 grid gap-4">
              {page.faqs.map((item) => (
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

        <div className="section-shell space-y-5">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.26em] text-sky-300">
              Related Pages
            </p>
            <h2 className="text-2xl font-semibold">
              Continue through the best matching path
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {page.relatedPaths.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="motion-button rounded-2xl border border-slate-800 bg-slate-950/55 p-4 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <Reveal delay={140} variant="scale">
          <div className="editorial-panel motion-card motion-panel flex flex-col gap-4 rounded-[2rem] p-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl space-y-2">
              <p className="text-lg font-semibold text-slate-50">
                Want help with this exact problem?
              </p>
              <p className="text-sm leading-6 text-slate-300">
                Share your market, offer, current channels, budget range, and
                the main campaign or visibility problem you want to solve.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href={page.ctaPrimary.href}
                className="motion-button rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-sky-400"
              >
                {page.ctaPrimary.label}
              </Link>
              <Link
                href="/book-call"
                className="motion-button rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-200"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
