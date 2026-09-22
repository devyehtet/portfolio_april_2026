import type { Metadata } from "next";
import ModernPortfolioApp from "@/app/components/ModernPortfolioApp";
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

export default function HomePage() {
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      buildPersonSchema(),
      buildProfessionalServiceSchema(),
      buildWebsiteSchema(),
      buildFaqSchema(),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(schemaGraph) }}
      />
      <ModernPortfolioApp />
    </>
  );
}
