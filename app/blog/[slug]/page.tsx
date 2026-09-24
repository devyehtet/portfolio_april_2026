import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PortfolioSiteHeader from "@/app/components/PortfolioSiteHeader";
import Reveal from "@/app/components/Reveal";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import { absoluteUrl, siteConfig, toJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function toSectionId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.description,
    keywords: post.seoPhrases,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [siteConfig.name],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl(`/blog/${post.slug}#article`),
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    headline: post.title,
    description: post.description,
    image: absoluteUrl(siteConfig.image),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    keywords: post.seoPhrases.join(", "),
    articleSection: post.category,
    about: post.seoPhrases,
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050914] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(articleSchema) }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_8%,rgba(80,245,170,0.22),transparent_34%),radial-gradient(circle_at_82%_4%,rgba(45,212,191,0.12),transparent_32%),linear-gradient(180deg,#050914_0%,#07111d_44%,#050914_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(80,245,170,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(80,245,170,0.035)_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-70" />

      <PortfolioSiteHeader />

      <article className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-emerald-300/12 bg-white/[0.045] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur md:p-8">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-emerald-300/[0.035]" />
            <Link
              href="/blog"
              className="relative inline-flex w-fit rounded-full border border-emerald-300/18 bg-emerald-300/[0.08] px-3 py-1 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/45 hover:text-emerald-50"
            >
              Back to Blog
            </Link>

            <div className="relative mt-8 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
              <span>{post.category}</span>
              <span className="text-white/38">{post.readTime}</span>
              <span className="text-white/38">{post.publishedAt}</span>
            </div>

            <h1 className="relative mt-5 max-w-4xl text-4xl font-black leading-[0.98] md:text-6xl">
              {post.title}
            </h1>

            <p className="relative mt-5 max-w-3xl text-base leading-8 text-white/68">
              {post.description}
            </p>

            <div className="relative mt-6 flex flex-wrap gap-2">
              {post.seoPhrases.map((phrase) => (
                <span
                  key={phrase}
                  className="rounded-full border border-emerald-300/16 bg-emerald-300/[0.08] px-3 py-1 text-xs font-semibold text-emerald-100"
                >
                  {phrase}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal
            className="rounded-[1.6rem] border border-emerald-300/14 bg-slate-900/62 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur"
            delay={120}
            variant="right"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-emerald-300">
              Reading Lens
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-white/68">
              <p>This article is written for teams that need practical clarity.</p>
              <p>Use the section list to jump straight to the most useful part.</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={100} variant="scale">
            <div className="rounded-[1.6rem] border border-emerald-300/12 bg-white/[0.04] p-6 text-base leading-8 text-white/74">
              {post.intro}
            </div>
          </Reveal>

          <Reveal delay={140} variant="right">
            <aside className="rounded-[1.6rem] border border-emerald-300/12 bg-white/[0.04] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                In This Article
              </p>
              <ul className="mt-5 space-y-3 text-sm text-white/68">
                {post.sections.map((section) => (
                  <li key={section.title}>
                    <a
                      href={`#${toSectionId(section.title)}`}
                      className="transition hover:text-emerald-200"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>

        <div className="mt-12 space-y-7">
          {post.sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 110 + 80} variant="up">
              <section
                id={toSectionId(section.title)}
                className="scroll-mt-28 rounded-[1.6rem] border border-emerald-300/12 bg-white/[0.04] p-6"
              >
                <h2 className="text-2xl font-black text-white">
                  {section.title}
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-8 text-white/68 md:text-base">
                  {section.paragraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {section.bullets && (
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-white/68">
                    {section.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-1 text-emerald-300">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} variant="scale">
          <div className="mt-12 rounded-[1.8rem] border border-emerald-300/14 bg-emerald-300/[0.06] p-6">
            <p className="text-sm font-black text-white">
              Need practical support after reading this?
            </p>
            <p className="mt-3 text-sm leading-7 text-white/68">
              I help with consulting, media planning, paid media audits, team
              training, and freelance media buying for Thailand, Myanmar, and
              Southeast Asia growth.
            </p>

            {post.relatedLinks && (
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {post.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-[1.1rem] border border-emerald-300/14 bg-slate-950/46 px-4 py-3 text-xs font-black text-emerald-100 transition hover:border-emerald-300/45 hover:bg-emerald-300/[0.08]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/work-with-me"
              className="mt-6 inline-flex rounded-full bg-emerald-300 px-5 py-3 text-sm font-black text-[#050914] transition hover:bg-emerald-200"
            >
              Contact Me
            </Link>
          </div>
        </Reveal>
      </article>
    </main>
  );
}
