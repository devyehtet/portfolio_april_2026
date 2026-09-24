import type { Metadata } from "next";
import Link from "next/link";
import PortfolioSiteHeader from "@/app/components/PortfolioSiteHeader";
import Reveal from "@/app/components/Reveal";
import { blogPreviews } from "@/lib/blog-preview";
import { absoluteUrl, seoKeywords, siteConfig, toJsonLd } from "@/lib/seo";

const blogDescription =
  "Practical articles on Thailand, Myanmar, and Southeast Asia digital marketing, SEO, PPC, consulting, training, and freelance media buying by Ye Htet Aung.";

export const metadata: Metadata = {
  title: "Digital Marketing Blog for Thailand, Myanmar & SEA",
  description: blogDescription,
  keywords: seoKeywords,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Digital Marketing Blog for Thailand, Myanmar & SEA",
    description:
      "SEO, paid media, consulting, training, and performance marketing insights for Thailand, Myanmar, and Southeast Asia brands.",
    url: "/blog",
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Blog for Thailand, Myanmar & SEA",
    description:
      "Regional SEO, paid media, consulting, and training insights by Ye Htet Aung.",
  },
};

export default function BlogIndexPage() {
  const [featuredPost, ...otherPosts] = blogPreviews;
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Digital Marketing Blog for Thailand, Myanmar & SEA",
    url: absoluteUrl("/blog"),
    description: blogDescription,
    mainEntity: blogPreviews.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
      author: {
        "@type": "Person",
        name: siteConfig.name,
      },
    })),
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050914] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(collectionSchema) }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(80,245,170,0.22),transparent_34%),radial-gradient(circle_at_78%_4%,rgba(45,212,191,0.12),transparent_32%),linear-gradient(180deg,#050914_0%,#07111d_46%,#050914_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(80,245,170,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(80,245,170,0.035)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-70" />

      <PortfolioSiteHeader />

      <section className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.55fr_0.95fr]">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-emerald-300/12 bg-white/[0.045] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur md:p-8">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-emerald-300/[0.035]" />
            <Link
              href="/"
              className="relative inline-flex rounded-full border border-emerald-300/18 bg-emerald-300/[0.08] px-3 py-1 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/45 hover:text-emerald-50"
            >
              Back to Home
            </Link>

            <div className="relative mt-8 space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-emerald-300">
                Blog & Insights
              </p>
              <h1 className="max-w-4xl text-4xl font-black leading-[0.98] md:text-6xl">
                Digital marketing insights for{" "}
                <span className="text-emerald-300">
                  Thailand, Myanmar, and SEA
                </span>
              </h1>
              <p className="max-w-3xl text-base leading-8 text-white/68">
                I write about SEO, paid media, digital strategy, team training,
                and freelance campaign execution for businesses that want
                clearer growth systems across Thailand, Myanmar, and Southeast
                Asia.
              </p>
            </div>
          </Reveal>

          <Reveal
            className="rounded-[1.6rem] border border-emerald-300/14 bg-slate-900/62 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur"
            delay={100}
            variant="right"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-300">
              What You&apos;ll Find
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-white/68">
              <p>SEO thinking, paid-media systems, and practical growth notes.</p>
              <p>Written for teams, founders, and brands that need clarity.</p>
            </div>
            <div className="mt-6 grid gap-3">
              {["Strategy", "Training", "Execution"].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-emerald-300/12 bg-white/[0.035] px-5 py-4"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/74">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-12 rounded-[1.8rem] border border-emerald-300/12 bg-white/[0.04] p-5 md:p-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Trainer",
                body: "Workshops and practical learning for teams that need better execution, clearer reporting, and stronger campaign thinking.",
              },
              {
                title: "Consultant",
                body: "Strategy support for brands that need sharper positioning, channel planning, and conversion-focused decision making.",
              },
              {
                title: "Freelance Media Buyer",
                body: "Hands-on paid media execution across Meta and Google Ads with testing, optimization, and budget discipline.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 100} variant="up">
                <div className="h-full rounded-[1.35rem] border border-emerald-300/10 bg-slate-950/42 p-5">
                  <p className="text-sm font-black text-white">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-white/56">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={80} variant="scale">
          <article className="mt-14 grid gap-6 overflow-hidden rounded-[2rem] border border-emerald-300/14 bg-white/[0.045] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.32)] md:grid-cols-[1.15fr_0.85fr] md:p-8">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                <span>Featured Insight</span>
                <span className="rounded-full border border-emerald-300/22 bg-emerald-300/[0.08] px-3 py-1 text-emerald-100">
                  {featuredPost.category}
                </span>
                <span className="text-white/38">{featuredPost.readTime}</span>
              </div>

              <h2 className="max-w-3xl text-2xl font-black leading-tight text-white md:text-4xl">
                {featuredPost.title}
              </h2>

              <p className="max-w-3xl text-sm leading-7 text-white/68 md:text-base">
                {featuredPost.description}
              </p>

              <div className="flex flex-wrap gap-3 text-xs text-white/45">
                <span>{featuredPost.roleFocus}</span>
                <span>{featuredPost.publishedAt}</span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-[1.5rem] border border-emerald-300/12 bg-slate-950/44 p-5">
              <p className="text-sm leading-7 text-white/68">
                {featuredPost.excerpt}
              </p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex w-fit rounded-full bg-emerald-300 px-5 py-3 text-sm font-black text-[#050914] transition hover:bg-emerald-200"
              >
                Read Featured Article
              </Link>
            </div>
          </article>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {otherPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 110 + 120} variant="scale">
              <article className="group flex h-full flex-col rounded-[1.6rem] border border-emerald-300/12 bg-white/[0.04] p-6 transition hover:border-emerald-300/42 hover:bg-emerald-300/[0.07]">
                <div className="flex items-center justify-between gap-4 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                  <span>{post.category}</span>
                  <span className="text-white/38">{post.readTime}</span>
                </div>

                <h2 className="mt-5 text-xl font-black leading-snug text-white">
                  {post.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/64">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between text-xs text-white/42">
                  <span>{post.roleFocus}</span>
                  <span>{post.publishedAt}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-7 inline-flex w-fit rounded-full border border-emerald-300/35 px-4 py-2 text-xs font-black text-emerald-200 transition group-hover:border-emerald-300 group-hover:text-emerald-100"
                >
                  Read article
                </Link>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} variant="up">
          <div className="mt-14 rounded-[1.6rem] border border-emerald-300/12 bg-emerald-300/[0.06] p-6 text-sm leading-7 text-white/70">
            Looking for a trainer, consultant, or freelance digital media buyer
            for Thailand, Myanmar, or Southeast Asia growth?{" "}
            <Link
              href="/work-with-me"
              className="font-black text-emerald-200 hover:text-emerald-100"
            >
              Let&apos;s talk
            </Link>
            .
          </div>
        </Reveal>
      </section>
    </main>
  );
}
