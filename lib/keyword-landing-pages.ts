export type KeywordProof = {
  campaignType: string;
  market: string;
  process: string;
  result: string;
  role: string;
};

export type KeywordFaq = {
  answer: string;
  question: string;
};

export type KeywordLandingPage = {
  audience: string[];
  canonicalPath: string;
  ctaPrimary: {
    href: string;
    label: string;
  };
  ctaSecondary: {
    href: string;
    label: string;
  };
  description: string;
  faqs: KeywordFaq[];
  headline: string;
  intro: string;
  keywords: string[];
  label: string;
  market: string;
  proof: KeywordProof[];
  relatedPaths: Array<{
    href: string;
    label: string;
  }>;
  serviceType: string[];
  slug: string;
  summary: string;
  title: string;
};

const sharedProof: KeywordProof[] = [
  {
    campaignType: "Education lead generation",
    market: "Thailand and Myanmar audiences",
    process:
      "Built a full-funnel structure where Meta created demand and Google captured high-intent searches.",
    result: "4.8x ROAS with a 38% lower CPL and 2.1x more qualified leads.",
    role: "Strategy, media planning, paid search, paid social, and reporting.",
  },
  {
    campaignType: "Digital product launch",
    market: "Southeast Asia",
    process:
      "Structured cold, warm, and retargeting campaigns with creative testing, audience segmentation, and weekly budget shifts.",
    result: "Scaled from stable performance into a 3.2x-7.5x ROAS range.",
    role: "Campaign architecture, media buying, creative testing, and optimization.",
  },
  {
    campaignType: "Regional campaign planning",
    market: "Myanmar, Thailand, and SEA",
    process:
      "Converted campaign briefs, channel roles, spend allocation, QA checks, and optimization notes into one repeatable workflow.",
    result:
      "Cleaner launch decisions, clearer reporting, and faster weekly optimization reviews.",
    role: "Planning system design, buying QA, KPI mapping, and performance review.",
  },
];

export const keywordLandingPages: Record<string, KeywordLandingPage> = {
  "digital-media-planning-consultant-bangkok": {
    slug: "digital-media-planning-consultant-bangkok",
    canonicalPath: "/digital-media-planning-consultant-bangkok",
    label: "Bangkok Media Planning",
    title: "Digital Media Planning Consultant in Bangkok",
    headline:
      "Digital media planning consultant in Bangkok for cleaner campaign decisions",
    description:
      "Work with Ye Htet Aung, a Bangkok-based digital media planning consultant for channel strategy, media plans, budget allocation, launch QA, and campaign reporting.",
    intro:
      "I help founders, agencies, education brands, digital product teams, and regional marketers turn scattered campaign ideas into a clear media plan with channel roles, budget logic, tracking needs, and weekly optimization steps.",
    summary:
      "Bangkok-based support for media planning, campaign briefs, channel mix, budget allocation, buying QA, and performance reporting across Thailand, Myanmar, and Southeast Asia.",
    market: "Bangkok, Thailand",
    keywords: [
      "digital media planning consultant Bangkok",
      "media planning consultant Thailand",
      "Bangkok performance marketing consultant",
      "digital campaign planning Thailand",
    ],
    serviceType: [
      "Digital media planning",
      "Campaign brief development",
      "Channel strategy",
      "Budget allocation",
      "Buying QA",
      "Performance reporting",
    ],
    audience: [
      "Founders who need a campaign plan before spending media budget",
      "Marketing managers who need clearer channel roles and reporting",
      "Agencies that need planning support for Thailand or SEA campaigns",
      "Education, digital product, and D2T teams preparing launch campaigns",
    ],
    proof: sharedProof,
    faqs: [
      {
        question: "What does a digital media planning consultant in Bangkok do?",
        answer:
          "A digital media planning consultant helps define campaign goals, target audiences, channel roles, budget allocation, KPI structure, tracking needs, and optimization rhythm before media buying starts.",
      },
      {
        question: "Can Ye Htet Aung support Thailand and Southeast Asia campaigns?",
        answer:
          "Yes. Ye Htet Aung is based in Bangkok and supports Thailand, Myanmar, and Southeast Asia campaigns through consulting, planning, training, and freelance media buying support.",
      },
      {
        question: "Is this only for large companies?",
        answer:
          "No. The planning support is useful for founders, small teams, agencies, education brands, digital products, and in-house marketing teams that need clearer execution.",
      },
      {
        question: "What should I prepare before a media planning conversation?",
        answer:
          "Prepare your market, offer, target audience, budget range, campaign timeline, current channels, tracking setup, and the main business outcome you want the campaign to influence.",
      },
    ],
    ctaPrimary: {
      href: "/work-with-me",
      label: "Send a Planning Inquiry",
    },
    ctaSecondary: {
      href: "/media-plan-template",
      label: "View the Toolkit",
    },
    relatedPaths: [
      {
        href: "/digital-media-buying-consultant-thailand-sea",
        label: "Media buying for Thailand and SEA",
      },
      {
        href: "/digital-marketing-consultant-thailand-myanmar-sea",
        label: "Regional digital marketing services",
      },
      {
        href: "/media-planning-buying-toolkit",
        label: "Media planning and buying toolkit",
      },
    ],
  },
  "digital-media-buying-consultant-thailand-sea": {
    slug: "digital-media-buying-consultant-thailand-sea",
    canonicalPath: "/digital-media-buying-consultant-thailand-sea",
    label: "Thailand and SEA Buying",
    title: "Digital Media Buying Consultant for Thailand and SEA",
    headline:
      "Digital media buying consultant for Thailand and Southeast Asia campaigns",
    description:
      "Hire Ye Htet Aung for Meta Ads, Google Ads, PPC, paid social, campaign audits, conversion tracking, and media buying support across Thailand and SEA.",
    intro:
      "I help teams plan and buy paid media with clearer campaign structure, better testing discipline, cleaner conversion tracking, and reporting that connects ad spend to business results.",
    summary:
      "Hands-on and strategic support for Meta Ads, Google Ads, PPC, retargeting, creative testing, budget pacing, and weekly optimization across Thailand and SEA.",
    market: "Thailand and Southeast Asia",
    keywords: [
      "digital media buying consultant Thailand",
      "SEA media buying consultant",
      "Meta Ads specialist Thailand",
      "Google Ads consultant Thailand",
      "PPC consultant Southeast Asia",
    ],
    serviceType: [
      "Meta Ads management",
      "Google Ads management",
      "PPC planning",
      "Paid social media buying",
      "Conversion tracking",
      "Campaign optimization",
    ],
    audience: [
      "Teams spending on Meta or Google but unsure what is working",
      "Brands preparing to scale paid acquisition across Thailand or SEA",
      "Agencies that need freelance media buying or audit support",
      "Founders who need paid media structure before increasing budget",
    ],
    proof: sharedProof,
    faqs: [
      {
        question: "What channels can Ye Htet Aung support?",
        answer:
          "Core channels include Meta Ads, Google Ads, PPC search, paid social, retargeting, landing page conversion review, and campaign reporting.",
      },
      {
        question: "Can you audit existing ad accounts?",
        answer:
          "Yes. An audit can review campaign structure, targeting, conversion tracking, creative testing, budget pacing, search terms, reporting, and optimization logic.",
      },
      {
        question: "Do you work with SEA campaigns outside Thailand?",
        answer:
          "Yes. The support can cover Thailand, Myanmar, and Southeast Asia campaigns when the offer, audience, tracking, and reporting needs are clearly defined.",
      },
      {
        question: "What makes paid media performance easier to improve?",
        answer:
          "Performance improves faster when the offer, landing page, conversion event, audience segments, creative angles, budget allocation, and weekly decision rules are clear.",
      },
    ],
    ctaPrimary: {
      href: "/work-with-me",
      label: "Send a Buying Inquiry",
    },
    ctaSecondary: {
      href: "/book-call",
      label: "Book a Strategy Call",
    },
    relatedPaths: [
      {
        href: "/digital-media-planning-consultant-bangkok",
        label: "Bangkok media planning support",
      },
      {
        href: "/myanmar-digital-marketing-consultant",
        label: "Myanmar digital marketing support",
      },
      {
        href: "/media-plan-template",
        label: "Buy the media planning toolkit",
      },
    ],
  },
  "myanmar-digital-marketing-consultant": {
    slug: "myanmar-digital-marketing-consultant",
    canonicalPath: "/myanmar-digital-marketing-consultant",
    label: "Myanmar Growth Support",
    title: "Myanmar Digital Marketing Consultant",
    headline:
      "Myanmar digital marketing consultant for strategy, paid media, SEO, and training",
    description:
      "Work with Ye Htet Aung for Myanmar digital marketing strategy, SEO, Meta Ads, Google Ads, media buying, training, audits, and campaign planning.",
    intro:
      "I support Myanmar-focused brands and teams with practical digital marketing strategy, paid media structure, search visibility, training, reporting, and campaign planning that fits real market constraints.",
    summary:
      "Myanmar market support for SEO, Meta Ads, Google Ads, digital media buying, team training, campaign planning, and performance reporting.",
    market: "Myanmar and regional teams",
    keywords: [
      "Myanmar digital marketing consultant",
      "digital marketing consultant Myanmar",
      "freelance media buyer Myanmar",
      "digital marketing training Myanmar",
      "Myanmar SEO consultant",
    ],
    serviceType: [
      "Myanmar digital strategy",
      "SEO planning",
      "Meta Ads support",
      "Google Ads support",
      "Digital marketing training",
      "Campaign reporting",
    ],
    audience: [
      "Myanmar brands that need practical marketing direction",
      "Teams that want training before scaling paid media",
      "Agencies and founders that need campaign planning support",
      "Regional teams that need Myanmar market context",
    ],
    proof: sharedProof,
    faqs: [
      {
        question: "Can Ye Htet Aung support Myanmar digital marketing remotely?",
        answer:
          "Yes. Projects can be handled remotely for Myanmar brands, agencies, founders, and teams that need strategy, training, audits, or media buying support.",
      },
      {
        question: "What digital marketing services are useful for Myanmar brands?",
        answer:
          "Useful services include SEO planning, Meta Ads, Google Ads, campaign structure, media planning, conversion tracking, content planning, reporting, and team training.",
      },
      {
        question: "Is this support suitable for internal marketing teams?",
        answer:
          "Yes. Training and consulting can help internal teams improve campaign setup, tracking, weekly reporting, and optimization decisions.",
      },
      {
        question: "How can a Myanmar brand start?",
        answer:
          "Start by sending a work inquiry with your market, offer, current channels, budget range, team setup, and the main campaign or visibility problem you want to solve.",
      },
    ],
    ctaPrimary: {
      href: "/work-with-me",
      label: "Send a Myanmar Inquiry",
    },
    ctaSecondary: {
      href: "/blog/myanmar-digital-marketing-strategy-playbook",
      label: "Read the Myanmar Playbook",
    },
    relatedPaths: [
      {
        href: "/digital-marketing-consultant-thailand-myanmar-sea",
        label: "Thailand, Myanmar and SEA services",
      },
      {
        href: "/digital-media-buying-consultant-thailand-sea",
        label: "Media buying for Thailand and SEA",
      },
      {
        href: "/blog/digital-marketing-training-myanmar-teams",
        label: "Myanmar team training guide",
      },
    ],
  },
  "media-planning-buying-toolkit": {
    slug: "media-planning-buying-toolkit",
    canonicalPath: "/media-planning-buying-toolkit",
    label: "Toolkit",
    title: "Media Planning and Buying Toolkit",
    headline:
      "Media planning and buying toolkit for campaign briefs, budgets, and buying QA",
    description:
      "Buy the Digital Media Planning & Buying Toolkit for campaign briefs, channel roles, budget allocation, buying QA, optimization reviews, and reporting prompts.",
    intro:
      "The toolkit gives marketers, founders, agencies, and small teams a cleaner way to brief campaigns, map channel roles, allocate budgets, check launch setup, and review performance without scattered notes.",
    summary:
      "A practical media planning and buying toolkit for campaign planning, budget allocation, buying QA, reporting, and weekly optimization reviews.",
    market: "Thailand, Myanmar, and Southeast Asia teams",
    keywords: [
      "media planning and buying toolkit",
      "digital media planning toolkit",
      "media buying toolkit",
      "campaign planning template",
      "media plan template Thailand",
    ],
    serviceType: [
      "Campaign planning template",
      "Media buying checklist",
      "Budget allocation workflow",
      "Buying QA",
      "Weekly optimization review",
      "Reporting prompts",
    ],
    audience: [
      "Marketers who need repeatable campaign planning",
      "Founders preparing to buy paid media",
      "Freelancers and agencies managing client campaigns",
      "Teams that want clearer budget and optimization notes",
    ],
    proof: [
      {
        campaignType: "Campaign planning workflow",
        market: "Thailand, Myanmar, and SEA teams",
        process:
          "Organizes campaign objectives, channel roles, audience notes, budget allocation, launch QA, and weekly optimization prompts.",
        result:
          "A cleaner planning path before buying media or reviewing performance.",
        role: "Toolkit creator and media planning system designer.",
      },
      ...sharedProof.slice(0, 2),
    ],
    faqs: [
      {
        question: "What is inside the media planning and buying toolkit?",
        answer:
          "It includes a practical planning system for campaign briefs, channel roles, budget allocation, buying setup checks, campaign notes, reporting prompts, and weekly optimization review.",
      },
      {
        question: "Who should buy this toolkit?",
        answer:
          "It is useful for marketers, founders, freelancers, agencies, and in-house teams that need a repeatable media planning and buying workflow.",
      },
      {
        question: "Is this an instant download?",
        answer:
          "The current buying flow is manual. You register your order, then receive payment details and toolkit delivery access by email after payment confirmation.",
      },
      {
        question: "Can the toolkit be used for Thailand or Myanmar campaigns?",
        answer:
          "Yes. The workflow is channel and market flexible, so it can support Thailand, Myanmar, and Southeast Asia campaign planning.",
      },
    ],
    ctaPrimary: {
      href: "/media-plan-template",
      label: "Register Order",
    },
    ctaSecondary: {
      href: "/digital-media-planning-consultant-bangkok",
      label: "Planning Support",
    },
    relatedPaths: [
      {
        href: "/media-plan-template",
        label: "Toolkit order page",
      },
      {
        href: "/digital-media-planning-consultant-bangkok",
        label: "Bangkok media planning consultant",
      },
      {
        href: "/digital-media-buying-consultant-thailand-sea",
        label: "Thailand and SEA media buying",
      },
    ],
  },
};

export const keywordLandingPageRoutes = Object.values(keywordLandingPages).map(
  (page) => page.canonicalPath
);
