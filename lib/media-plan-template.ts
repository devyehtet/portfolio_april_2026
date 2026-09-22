export type MediaPlanBlock = {
  description: string;
  fields: string[];
  title: string;
};

export type MediaPlanDemoMetric = {
  label: string;
  note: string;
  value: string;
};

export type MediaPlanDemoRow = {
  audience: string;
  budget: string;
  channel: string;
  flight: string;
  objective: string;
  phase: string;
  target: string;
};

export const mediaPlanHighlights = [
  {
    label: "Built For",
    value:
      "Founders, marketers, freelancers, and teams that need a clearer paid media workflow.",
  },
  {
    label: "Toolkit Format",
    value:
      "Google Sheets planning system with buying checklist, budget view, and reporting prompts.",
  },
  {
    label: "Order Flow",
    value:
      "Buyers register their order first, then receive payment and delivery steps by email.",
  },
];

export const mediaPlanWorkflow = [
  "Campaign brief builder for objective, offer, audience, KPI, market context, and channel role clarity.",
  "Media planning sheet for budget split, flighting, pacing, expected results, and channel ownership.",
  "Buying checklist for launch QA, tracking checks, creative readiness, naming, and optimization rhythm.",
  "Review prompts for weekly decisions, performance notes, next actions, and client or team updates.",
];

export const mediaPlanBlocks: MediaPlanBlock[] = [
  {
    title: "Campaign Brief Builder",
    description:
      "Turn a messy campaign idea into a clear brief before budget or channel decisions are made.",
    fields: ["Objective", "Offer", "Audience", "Primary KPI"],
  },
  {
    title: "Media Plan Workspace",
    description:
      "Plan channel roles, spend, pacing, timing, targets, and key assumptions in one working sheet.",
    fields: ["Channel role", "Budget split", "Flighting", "Targets"],
  },
  {
    title: "Buying QA Checklist",
    description:
      "Check the setup before launch so tracking, naming, creative, and optimization basics are covered.",
    fields: ["Tracking", "UTM", "Creative", "Launch QA"],
  },
  {
    title: "Optimization Review Notes",
    description:
      "Keep weekly media buying decisions visible instead of relying on memory or scattered comments.",
    fields: ["Learnings", "Actions", "Risks", "Next tests"],
  },
];

export const mediaPlanDemoMetrics: MediaPlanDemoMetric[] = [
  {
    label: "Planning Time",
    value: "2-3h",
    note: "Typical setup time saved per campaign brief",
  },
  {
    label: "Included Sheets",
    value: "8+",
    note: "Planning, buying, QA, reporting, and review tabs",
  },
  {
    label: "Use Cases",
    value: "5",
    note: "Launch, monthly plan, audit, workshop, client review",
  },
  {
    label: "Delivery",
    value: "Email",
    note: "Toolkit access and next steps after payment confirmation",
  },
];

export const mediaPlanDemoRows: MediaPlanDemoRow[] = [
  {
    phase: "Awareness",
    channel: "Meta Ads",
    objective: "Reach new audiences and test message hooks",
    audience: "Urban buyers, lookalikes, retargeting pools",
    budget: "$4,200",
    flight: "Weeks 1-4",
    target: "2.8M reach at efficient CPM",
  },
  {
    phase: "Awareness",
    channel: "TikTok",
    objective: "Discover winning creative angles quickly",
    audience: "Video-first audiences in key cities",
    budget: "$1,800",
    flight: "Weeks 1-3",
    target: "1.2M views and strong CTR",
  },
  {
    phase: "Consideration",
    channel: "Google Search",
    objective: "Capture branded and category intent",
    audience: "High-intent category searchers",
    budget: "$3,600",
    flight: "Weeks 2-8",
    target: "High CTR and efficient CVR",
  },
  {
    phase: "Conversion",
    channel: "Landing Page + CRO",
    objective: "Improve conversion flow for paid traffic",
    audience: "Visitors from Meta, TikTok, and Google",
    budget: "$1,200",
    flight: "Weeks 1-8",
    target: "Higher CVR and lower CPA",
  },
];
