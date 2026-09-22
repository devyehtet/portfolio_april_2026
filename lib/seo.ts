export const siteConfig = {
  name: "Ye Htet Aung",
  siteUrl: "https://yehtet.com",
  title:
    "Ye Htet Aung | Digital Marketing Consultant in Thailand, Myanmar & SEA",
  description:
    "Performance marketing consultant based in Chiang Mai, Thailand, helping brands across Thailand, Myanmar, and Southeast Asia with SEO, PPC, Meta Ads, Google Ads, media buying, training, and growth strategy.",
  email: "info@yehtet.com",
  image: "/yha_photo.png",
};

export const seoKeywords = [
  "digital marketing consultant Thailand",
  "performance marketing consultant Thailand",
  "SEO consultant Thailand",
  "PPC consultant Thailand",
  "Google Ads specialist Thailand",
  "Meta Ads specialist Thailand",
  "digital marketing consultant Myanmar",
  "freelance media buyer Myanmar",
  "digital marketing trainer Myanmar",
  "Southeast Asia performance marketing",
  "SEA media buying consultant",
  "Chiang Mai digital marketing consultant",
];

export const priorityMarkets = [
  {
    name: "Thailand",
    focus:
      "Chiang Mai-based support for Thailand brands, regional teams, founders, agencies, and remote-first growth projects.",
  },
  {
    name: "Myanmar",
    focus:
      "Myanmar market experience across digital strategy, Meta Ads, Google Ads, media buying, training, and campaign planning.",
  },
  {
    name: "Southeast Asia",
    focus:
      "Regional performance marketing perspective for SEA campaigns, cross-border teams, and English-speaking growth projects.",
  },
];

export const regionalFaqs = [
  {
    question:
      "Who is a digital marketing consultant in Thailand for Myanmar and Southeast Asia markets?",
    answer:
      "Ye Htet Aung is a performance marketing consultant based in Chiang Mai, Thailand. He supports brands and teams across Thailand, Myanmar, and Southeast Asia with SEO, PPC, Meta Ads, Google Ads, media buying, training, and digital growth strategy.",
  },
  {
    question: "What regions does Ye Htet Aung serve?",
    answer:
      "Ye Htet Aung works from Chiang Mai, Thailand and supports clients in Thailand, Myanmar, and Southeast Asia through remote, hybrid, consulting, training, and freelance media buying projects.",
  },
  {
    question: "What services are available for Thailand and Myanmar brands?",
    answer:
      "Services include SEO strategy, paid media audits, Meta Ads and Google Ads management, PPC planning, conversion rate optimization, digital marketing training, campaign reporting, and media planning systems.",
  },
  {
    question: "Can Ye Htet Aung help with AEO, SEO, and GEO visibility?",
    answer:
      "Yes. The work can cover technical SEO, answer-friendly content, structured data, local and regional market signals, search intent planning, and content systems that help search engines and AI answer engines understand the site clearly.",
  },
  {
    question: "How can a Thailand brand start working with Ye Htet Aung?",
    answer:
      "Thailand brands can send a work inquiry or book a strategy call to discuss goals, current campaigns, target markets, monthly budget, and the clearest next step for SEO, paid media, or training support.",
  },
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function toJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function buildPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    image: absoluteUrl(siteConfig.image),
    email: siteConfig.email,
    jobTitle: [
      "Digital Marketing Consultant",
      "Performance Marketing Manager",
      "Media Buying Consultant",
    ],
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chiang Mai",
      addressRegion: "Chiang Mai",
      addressCountry: "TH",
    },
    areaServed: [
      { "@type": "Country", name: "Thailand" },
      { "@type": "Country", name: "Myanmar" },
      { "@type": "AdministrativeArea", name: "Southeast Asia" },
    ],
    knowsAbout: seoKeywords,
    knowsLanguage: ["English", "Burmese"],
  };
}

export function buildProfessionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#professional-service"),
    name: "Ye Htet Aung Digital Marketing Consulting",
    url: siteConfig.siteUrl,
    image: absoluteUrl(siteConfig.image),
    email: siteConfig.email,
    priceRange: "$$",
    founder: {
      "@id": absoluteUrl("/#person"),
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chiang Mai",
      addressRegion: "Chiang Mai",
      addressCountry: "TH",
    },
    areaServed: [
      { "@type": "City", name: "Chiang Mai" },
      { "@type": "City", name: "Bangkok" },
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
      "Performance marketing consulting",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital marketing services for Thailand, Myanmar, and SEA",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO, AEO, and GEO strategy",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Meta Ads and Google Ads media buying",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital marketing training and workshops",
          },
        },
      ],
    },
  };
}

export function buildWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: {
      "@id": absoluteUrl("/#person"),
    },
  };
}

export function buildFaqSchema(faqs = regionalFaqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: Array<{
    name: string;
    path: string;
  }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
