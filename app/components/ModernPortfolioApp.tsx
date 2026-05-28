"use client";

import Image from "next/image";
import { FormEvent, useEffect, useMemo, useState } from "react";
import type { IconType } from "react-icons";
import {
  LuArrowRight,
  LuBriefcaseBusiness,
  LuCalendarDays,
  LuChartBar,
  LuChartLine,
  LuCircleCheck,
  LuDownload,
  LuFileSpreadsheet,
  LuGraduationCap,
  LuTrendingUp,
  LuTarget,
  LuZap,
  LuX,
  LuMenu,
  LuSparkles,
  LuSearch,
  LuMail,
  LuShieldCheck,
  LuSend,
  LuMapPin,
  LuUserRound,
} from "react-icons/lu";
import { sendLeadEvent } from "@/app/components/MetaLeadTracker";
import {
  googleAdsConversionIds,
  sendGoogleAdsConversion,
} from "@/lib/google-ads";

type Route =
  | "home"
  | "about"
  | "services"
  | "work"
  | "template"
  | "skills"
  | "experience"
  | "education"
  | "contact";

type ConversionType = "booking" | "work" | "template" | "contact";

type Service = {
  icon: IconType;
  title: string;
  body: string;
  tools: string[];
};

type WorkItem = {
  category: string;
  title: string;
  body: string;
  metrics: string[][];
  channels: string[];
};

type ConversionForm = {
  company: string;
  detailOne: string;
  detailTwo: string;
  email: string;
  message: string;
  name: string;
  need: string;
  website: string;
};

const DEFAULT_BOOKING_CALENDAR_URL =
  "https://calendar.app.google/v6wXTWekHG8RUNh29";

const bookingCalendarUrl =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_BOOKING_URL?.trim() ||
  DEFAULT_BOOKING_CALENDAR_URL;

const routes: { label: string; route: Route }[] = [
  { label: "About", route: "about" },
  { label: "Services", route: "services" },
  { label: "Work", route: "work" },
  { label: "Template", route: "template" },
  { label: "Skills", route: "skills" },
  { label: "Experience", route: "experience" },
  { label: "Education", route: "education" },
  { label: "Contact", route: "contact" },
];

const stats = [
  ["12+", "Years experience"],
  ["3.2x-7.5x", "ROAS range"],
  ["$300K+", "Media budget handled"],
  ["SEA + Global", "Market exposure"],
];

const brands = [
  "Mytel",
  "Samsung",
  "Tiger Beer",
  "Vitamilk",
  "NIVEA",
  "L'Oreal",
  "City Mart",
  "Homology",
  "Starcom",
  "MCIX",
];

const services: Service[] = [
  {
    icon: LuSearch,
    title: "Search Engine Optimization (SEO)",
    body: "Increase organic traffic and search visibility with technical SEO, on-page optimization, and high-intent content.",
    tools: [
      "Google Analytics",
      "SEMrush",
      "Ahrefs",
      "Moz",
      "Screaming Frog",
      "Search Console",
    ],
  },
  {
    icon: LuTarget,
    title: "Pay-Per-Click (PPC) Advertising",
    body: "Performance-focused PPC campaigns across Google Ads and social platforms to hit CPA and ROAS targets.",
    tools: ["Google Ads", "Meta Ads Manager", "Bing Ads", "GTM", "GA4"],
  },
  {
    icon: LuSparkles,
    title: "Social Media Marketing & Management",
    body: "Platform-native content, community building, and always-on paid support to grow brand and demand.",
    tools: [
      "Hootsuite",
      "Buffer",
      "Sprout Social",
      "Canva",
      "Meta Business Suite",
    ],
  },
  {
    icon: LuFileSpreadsheet,
    title: "Content Marketing",
    body: "Full-funnel content execution to drive meaningful search, social and retention results.",
    tools: ["WordPress", "Google Docs", "Buzzsumo", "Canva", "YouTube"],
  },
  {
    icon: LuMail,
    title: "Email & CRM Automation",
    body: "Lifecycle automation and segmentation to convert leads into customers with predictable uplift.",
    tools: ["Mailchimp", "Klaviyo", "HubSpot", "ActiveCampaign"],
  },
  {
    icon: LuChartLine,
    title: "Conversion Rate Optimization (CRO)",
    body: "Landing page and funnel experiments to improve conversion without increasing ad spend.",
    tools: ["Hotjar", "Google Optimize", "VWO", "Unbounce"],
  },
];

const workItems: WorkItem[] = [
  {
    category: "Education - Meta + Google",
    title: "Enrollment-intent performance system",
    body: "Built a full-funnel structure where Meta drove awareness and Google captured high-intent demand. Optimization focused on lead quality, CPL, landing relevance, and booked-call conversion.",
    metrics: [
      ["4.8x", "ROAS"],
      ["38%", "CPL down"],
      ["2.1x", "Qualified leads"],
    ],
    channels: ["Meta Ads", "Google Search", "Landing Page", "GA4"],
  },
  {
    category: "Digital Product - Paid Acquisition",
    title: "Creative-led product launch scale",
    body: "Structured cold, warm and retargeting campaigns with creator-style hooks, offer testing, and conversion-focused reporting to push ROAS from stable to scalable.",
    metrics: [
      ["7.5x", "Peak ROAS"],
      ["31%", "CPA down"],
      ["18", "Creative tests"],
    ],
    channels: ["Meta Ads", "Google Ads", "Retargeting", "Creative Testing"],
  },
  {
    category: "D2T - Meta + Google",
    title: "Direct-to-transaction growth loop",
    body: "Mapped channel roles from awareness to conversion, then used budget guardrails, weekly learning loops, and conversion tracking to keep campaigns profitable while volume scaled.",
    metrics: [
      ["3.2x", "Baseline"],
      ["6.4x", "Scaled ROAS"],
      ["42%", "Budget efficiency"],
    ],
    channels: ["Meta", "Google", "YouTube", "Looker Studio"],
  },
];

const templateBlocks = [
  [
    "Business Objective",
    "Campaign name, planning period, primary objective, commercial goal, and north-star KPI.",
  ],
  [
    "Audience & Market Context",
    "Audience segments, geography, pain points, demand insight, and seasonal notes before channel planning.",
  ],
  [
    "Channel & Budget Mix",
    "Channel role, budget split, pacing, flighting, and optimization guardrails.",
  ],
  [
    "Creative & Landing Support",
    "Message hook, creative formats, test ideas, and landing page notes in the same workflow.",
  ],
];

const skills: [string, number][] = [
  ["Digital Marketing Strategy", 95],
  ["Performance Marketing", 93],
  ["Paid Advertising (PPC)", 90],
  ["Analytics & Reporting", 90],
  ["SEM / Google Ads", 88],
  ["Social Media Strategy", 86],
  ["Campaign Optimization", 92],
  ["Budget Management", 95],
];

const experience = [
  {
    role: "Regional Digital Manager",
    company: "MCIX Thailand Agency",
    period: "Feb 2025 - Present",
    bullets: [
      "Overseeing digital strategy and performance optimization across SEA markets.",
      "Developing high-impact digital marketing strategies.",
      "Managing analytics frameworks to improve campaign tracking and ROI measurement.",
    ],
  },
  {
    role: "Senior Operation Manager",
    company: "Homology",
    period: "Nov 2019 - Mar 2022",
    bullets: [
      "Managed team deliverables and campaign operation standards.",
      "Improved process turnaround and campaign management workflows.",
      "Supported concurrent client projects with optimization frameworks.",
    ],
  },
  {
    role: "Senior Digital Media Buyer / Planner",
    company: "Passion Point Media Ltd",
    period: "Jul 2017 - Apr 2019",
    bullets: [
      "Developed media strategies and managed client relationships.",
      "Handled $300,000+ digital media budgets.",
      "Built reporting systems and targeting strategies across platforms.",
    ],
  },
  {
    role: "Digital Marketing Specialist",
    company: "City Mart Holding Ltd",
    period: "Feb 2016 - May 2017",
    bullets: [
      "Managed digital marketing strategy for visibility and engagement.",
      "Improved website traffic, social media engagement, and email marketing activity.",
      "Established digital marketing best practices for brand campaigns.",
    ],
  },
];

const education = [
  [
    "B.Sc in Physics",
    "Dagon University",
    "Graduation Year: 2012",
    "Analytical foundation for measurement, testing, and performance thinking.",
  ],
  [
    "Google Ads - Measurement Certification",
    "Google",
    "2024",
    "Advanced measurement and optimization frameworks.",
  ],
  [
    "Google Ads Apps Certification",
    "Google",
    "2024",
    "App acquisition strategy and optimization.",
  ],
  [
    "Display & Video 360 Certification",
    "Google",
    "2024",
    "Programmatic media planning and activation.",
  ],
];

const emptyForm: ConversionForm = {
  company: "",
  detailOne: "",
  detailTwo: "",
  email: "",
  message: "",
  name: "",
  need: "",
  website: "",
};

function getInitialRoute(): Route {
  if (typeof window === "undefined") return "home";

  const hash = window.location.hash.replace("#", "") as Route;
  const validRoutes: Route[] = [
    "home",
    "about",
    "services",
    "work",
    "template",
    "skills",
    "experience",
    "education",
    "contact",
  ];

  return validRoutes.includes(hash) ? hash : "home";
}

function openConversion(type: ConversionType) {
  window.dispatchEvent(new CustomEvent("open-conversion", { detail: type }));
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 text-xs font-black uppercase tracking-[0.36em] text-emerald-300">
      {children}
    </div>
  );
}

function GradientTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-green-400 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function PageShell({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function Button({
  children,
  variant = "primary",
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "dark";
}) {
  const classes = {
    primary:
      "bg-emerald-300 text-[#050914] hover:bg-emerald-200 shadow-[0_0_28px_rgba(80,245,170,0.18)]",
    ghost:
      "border border-emerald-300/25 bg-emerald-300/[0.08] text-emerald-100 hover:border-emerald-300/50 hover:bg-emerald-300/[0.12]",
    dark: "bg-white text-[#050914] hover:bg-emerald-100",
  }[variant];

  return (
    <button
      onClick={onClick}
      className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black transition ${classes}`}
      type="button"
    >
      {children}
      <LuArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </button>
  );
}

function Header({
  activeRoute,
  goTo,
}: {
  activeRoute: Route;
  goTo: (route: Route) => void;
}) {
  const [open, setOpen] = useState(false);
  const navigate = (route: Route) => {
    goTo(route);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-300/10 bg-[#050914]/88 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button
          onClick={() => navigate("home")}
          className="flex items-center gap-3 text-left"
          type="button"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-emerald-300 text-[#050914] shadow-[0_0_24px_rgba(80,245,170,0.25)]">
            <span className="absolute left-2 h-3 w-3 skew-x-[-20deg] rounded-sm bg-[#050914]" />
            <span className="absolute right-2 h-3 w-3 skew-x-[-20deg] rounded-sm bg-[#050914]" />
          </span>
          <span>
            <span className="block text-sm font-black tracking-tight text-white">
              Ye Htet Aung
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-200/45">
              Performance Marketing
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-7 text-sm font-semibold text-white/62 lg:flex">
          {routes.map((item) => (
            <button
              key={item.route}
              onClick={() => navigate(item.route)}
              className={`transition hover:text-emerald-200 ${
                activeRoute === item.route ? "text-emerald-300" : ""
              }`}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button onClick={() => openConversion("booking")}>
            Strategy Call
          </Button>
        </div>

        <button
          className="rounded-full border border-white/10 p-2 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <LuX /> : <LuMenu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#050914] px-5 py-4 lg:hidden">
          <div className="grid gap-3">
            {[{ label: "Home", route: "home" as Route }, ...routes].map(
              (item) => (
                <button
                  key={item.route}
                  onClick={() => navigate(item.route)}
                  className="rounded-2xl bg-white/[0.04] px-4 py-3 text-left text-sm font-semibold text-white/75"
                  type="button"
                >
                  {item.label}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function ProfileCard() {
  const [imageOk, setImageOk] = useState(true);

  return (
    <div className="relative mx-auto w-full max-w-sm rounded-[2rem] border border-emerald-300/14 bg-slate-900/72 p-6 shadow-[0_28px_110px_rgba(80,245,170,0.12)] backdrop-blur-xl">
      <div className="absolute -inset-0.5 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-300/35 via-teal-400/10 to-transparent blur-sm" />
      <div className="mx-auto grid h-44 w-44 place-items-center overflow-hidden rounded-full border-[6px] border-emerald-300 bg-slate-800 shadow-[0_0_45px_rgba(80,245,170,0.26)]">
        {imageOk ? (
          <Image
            src="/yha_photo.png"
            alt="Ye Htet Aung"
            width={176}
            height={176}
            priority
            className="h-full w-full object-cover"
            onError={() => setImageOk(false)}
          />
        ) : (
          <span className="text-5xl font-black text-emerald-300">YH</span>
        )}
      </div>
      <div className="mt-6 text-center">
        <h3 className="text-2xl font-black md:text-3xl">Based in Chiang Mai, Thailand</h3>
        <p className="mx-auto mt-2 max-w-xs text-sm leading-7 text-white/62 md:text-base">
          Open to remote, hybrid and regional leadership roles across SEA and
          global markets.
        </p>
      </div>
      <div className="mt-7 flex flex-wrap justify-center gap-2">
        <span className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200">
          12+ years experience
        </span>
        <span className="rounded-full border border-emerald-300/18 bg-emerald-300/10 px-4 py-2 text-sm font-bold text-emerald-200">
          SEA & Global Markets
        </span>
      </div>
    </div>
  );
}

function HeroActionCard({
  icon: Icon,
  eyebrow,
  title,
  body,
  action,
  type,
  featured = false,
}: {
  action: string;
  body: string;
  eyebrow: string;
  featured?: boolean;
  icon: IconType;
  title: string;
  type: ConversionType;
}) {
  return (
    <button
      onClick={() => openConversion(type)}
      className={`group relative overflow-hidden rounded-[1.65rem] border p-5 text-left transition duration-300 hover:-translate-y-1 ${
        featured
          ? "border-emerald-300/45 bg-gradient-to-br from-emerald-300 to-teal-400 text-[#050914] shadow-[0_24px_70px_rgba(80,245,170,0.28)]"
          : "border-white/10 bg-white/[0.045] text-white hover:border-emerald-300/35 hover:bg-emerald-300/10"
      }`}
      type="button"
    >
      <div
        className={`absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl ${
          featured ? "bg-white/35" : "bg-emerald-300/12"
        }`}
      />
      <div className="relative flex items-start justify-between gap-5">
        <div
          className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${
            featured
              ? "bg-[#050914] text-emerald-300"
              : "bg-emerald-300/12 text-emerald-300"
          }`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <LuArrowRight
          className={`mt-3 h-5 w-5 transition group-hover:translate-x-1 ${
            featured ? "text-[#050914]" : "text-emerald-300"
          }`}
        />
      </div>
      <div
        className={`relative mt-5 text-[10px] font-black uppercase tracking-[0.24em] ${
          featured ? "text-slate-800/70" : "text-emerald-300"
        }`}
      >
        {eyebrow}
      </div>
      <h3 className="relative mt-2 text-2xl font-black tracking-[-0.04em]">
        {title}
      </h3>
      <p
        className={`relative mt-3 min-h-[72px] text-sm leading-6 ${
          featured ? "text-slate-800/78" : "text-white/58"
        }`}
      >
        {body}
      </p>
      <div
        className={`relative mt-5 inline-flex rounded-full px-4 py-2 text-xs font-black ${
          featured ? "bg-[#050914] text-white" : "bg-white/[0.07] text-emerald-200"
        }`}
      >
        {action}
      </div>
    </button>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-16 md:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(80,245,170,0.22),transparent_34%),radial-gradient(circle_at_76%_16%,rgba(80,245,170,0.12),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.25),rgba(5,11,26,0))]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(80,245,170,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(80,245,170,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/[0.08] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-emerald-200">
            <LuSparkles className="h-4 w-4" /> Digital Marketing Manager -
            Performance Marketing
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-[-0.065em] md:text-7xl lg:text-8xl">
            Performance marketing built for{" "}
            <GradientTitle>measurable growth.</GradientTitle>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70 md:text-xl">
            I help education, digital product, and D2T brands scale with Meta,
            Google Ads, Programmatic, SEO, creative testing, and analytics-led
            optimization.
          </p>

          <div className="mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ["3.2x-7.5x", "ROAS range"],
              ["12+", "years experience"],
              ["Meta + Google", "core channels"],
            ].map(([metric, label]) => (
              <div
                key={metric}
                className="rounded-[1.35rem] border border-emerald-300/12 bg-white/[0.045] p-4"
              >
                <div className="text-2xl font-black text-emerald-300 md:text-3xl">
                  {metric}
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/38">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid max-w-3xl gap-4 md:grid-cols-2">
            <HeroActionCard
              icon={LuCalendarDays}
              eyebrow="Primary CTA"
              title="Strategy Call"
              body="For campaign reviews, performance strategy, training, or consulting discussions. Start with a focused 30-minute strategy call."
              action="Open strategy form"
              type="booking"
              featured
            />
            <HeroActionCard
              icon={LuBriefcaseBusiness}
              eyebrow="Work inquiry"
              title="Work With Me"
              body="For freelance media buying, audits, consulting, regional growth support, or full-time opportunities."
              action="Send work inquiry"
              type="work"
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/45">
            <button
              onClick={() => openConversion("template")}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 font-bold text-white/62 transition hover:border-emerald-300/35 hover:text-emerald-200"
              type="button"
            >
              <LuDownload className="h-4 w-4" /> Request Media Plan Template
            </button>
            <span className="hidden md:inline">-</span>
            <span>
              Based in Chiang Mai - Open to remote, hybrid and regional roles
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-emerald-300/12 blur-3xl" />
          <div className="rounded-[2.35rem] border border-emerald-300/14 bg-slate-900/62 p-5 shadow-[0_28px_110px_rgba(80,245,170,0.12)] backdrop-blur-xl">
            <div className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#07120f]">
              <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1 xl:grid-cols-[0.9fr_1.1fr]">
                <div className="relative grid min-h-[320px] items-start justify-center bg-[radial-gradient(circle_at_center,rgba(80,245,170,0.28),rgba(15,23,42,0.15)_62%)] p-7">
                  <ProfileCard />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <div className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
                        Portfolio Signal
                      </div>
                      <div className="mt-1 text-3xl font-black md:text-4xl">
                        Ye Htet Aung
                      </div>
                    </div>
                    <div className="rounded-full bg-emerald-300 px-3 py-1 text-xs font-black text-[#050914]">
                      LIVE
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-1">
                    {[
                      [LuTrendingUp, "Peak ROAS", "7.5x"],
                      [LuTarget, "Baseline", "3.2x"],
                      [LuChartBar, "Budget", "$300K+"],
                      [LuZap, "Focus", "Conversion"],
                    ].map(([Icon, label, value]) => {
                      const MetricIcon = Icon as IconType;
                      const compactValue = label === "Budget" || label === "Focus";
                      return (
                        <div
                          key={label as string}
                          className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                        >
                          <MetricIcon className="mb-4 h-5 w-5 text-emerald-300" />
                          <div className="text-xs text-white/42">
                            {label as string}
                          </div>
                          <div
                            className={
                              compactValue
                                ? "mt-1 text-xs font-semibold md:text-[0.7rem]"
                                : "mt-1 text-lg font-black leading-tight md:text-xl"
                            }
                          >
                            {value as string}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 rounded-2xl border border-emerald-300/18 bg-emerald-300/10 p-4">
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
                      Conversion Paths
                    </div>
                    <div className="mt-3 grid gap-2 text-sm font-bold text-white/68">
                      <div>01 - Book a Call</div>
                      <div>02 - Work With Me</div>
                      <div>03 - Media Plan Template Request</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([metric, label]) => (
          <div
            key={metric}
            className="rounded-[1.6rem] border border-emerald-300/12 bg-white/[0.035] p-6"
          >
            <div className="text-3xl font-black text-emerald-300">
              {metric}
            </div>
            <p className="mt-3 text-sm leading-6 text-white/58">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BrandMarquee() {
  return (
    <section className="border-y border-emerald-300/10 bg-emerald-300/[0.025] py-6">
      <div className="mx-auto max-w-7xl overflow-hidden px-5">
        <div className="mb-4 text-sm font-semibold text-white/45">
          Experience across brands, agencies and regional campaigns
        </div>
        <div className="flex min-w-max animate-[marquee_24s_linear_infinite] gap-10 text-2xl font-black tracking-[-0.04em] text-white/28">
          {[...brands, ...brands].map((brand, index) => (
            <span key={`${brand}-${index}`}>{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionLabel>Digital Marketing Services</SectionLabel>
      <h2 className="max-w-4xl text-3xl font-black tracking-[-0.035em] md:text-5xl">
        End-to-end digital strategy execution across SEO, PPC, Social, CRO,
        Analytics, and full-funnel optimization.
      </h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map(({ icon: Icon, title, body, tools }) => (
          <div
            key={title}
            className="rounded-[1.8rem] border border-emerald-300/12 bg-slate-900/55 p-6 transition hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-slate-900/75"
          >
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-300/12 text-emerald-300">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-white/62">{body}</p>
              </div>
            </div>
            <div className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-emerald-300">
              Tools & Technologies
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-white/[0.055] px-3 py-1 text-xs font-bold text-white/45"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionLabel>Work / Portfolio</SectionLabel>
      <h2 className="max-w-4xl text-3xl font-black tracking-[-0.035em] md:text-5xl">
        Performance systems for education, digital products and D2T growth.
      </h2>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {workItems.map((item, index) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-[2rem] border border-emerald-300/12 bg-white/[0.035]"
          >
            <div className="border-b border-white/10 bg-[radial-gradient(circle_at_center,rgba(80,245,170,0.22),rgba(15,23,42,0.18)_66%)] p-7">
              <div className="text-6xl font-black text-white/86">
                0{index + 1}
              </div>
              <div className="mt-3 text-xs font-black uppercase tracking-[0.24em] text-emerald-300">
                {item.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-black">{item.title}</h3>
              <p className="mt-4 min-h-[132px] leading-7 text-white/58">
                {item.body}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-2">
                {item.metrics.map(([metric, label]) => (
                  <div key={label} className="rounded-2xl bg-emerald-300/[0.08] p-3">
                    <div className="text-lg font-black text-emerald-300">
                      {metric}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-wide text-white/38">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.channels.map((channel) => (
                  <span
                    key={channel}
                    className="rounded-full bg-white/[0.055] px-3 py-1 text-xs font-bold text-white/48"
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TemplateSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-10 rounded-[2.4rem] border border-emerald-300/14 bg-slate-900/52 p-7 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionLabel>Media Plan Template</SectionLabel>
          <h2 className="text-3xl font-black tracking-[-0.035em] md:text-5xl">
            Request the planning sheet before launch.
          </h2>
          <p className="mt-6 leading-8 text-white/62">
            I use this template to structure business goals, audience logic,
            channel roles, KPI targets, and budget planning in one Google Sheet
            workflow. Visitors request access first, then I manually share the
            sheet after review.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => openConversion("template")}>
              Request Access
            </Button>
            <Button variant="ghost" onClick={() => openConversion("template")}>
              View Template
            </Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {templateBlocks.map(([title, body]) => (
            <div
              key={title}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5"
            >
              <LuFileSpreadsheet className="h-7 w-7 text-emerald-300" />
              <h3 className="mt-5 font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/55">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionLabel>Skills & Expertise</SectionLabel>
      <h2 className="max-w-4xl text-3xl font-black tracking-[-0.035em] md:text-5xl">
        A performance stack for strategy, media buying and optimization.
      </h2>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {skills.map(([name, score]) => (
          <div
            key={name}
            className="rounded-2xl border border-emerald-300/12 bg-white/[0.035] p-5"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-bold text-white/76">{name}</span>
              <span className="font-black text-emerald-300">{score}%</span>
            </div>
            <div className="mt-4 h-2 rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-emerald-300 to-teal-400"
                style={{ width: `${score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionLabel>Work Experience</SectionLabel>
      <h2 className="max-w-4xl text-3xl font-black tracking-[-0.035em] md:text-5xl">
        12+ years across agency, brand and regional digital roles.
      </h2>
      <div className="mt-10 space-y-4">
        {experience.map((item) => (
          <div
            key={item.role}
            className="grid gap-6 rounded-[1.8rem] border border-emerald-300/12 bg-white/[0.035] p-6 lg:grid-cols-[0.72fr_1.28fr]"
          >
            <div>
              <h3 className="text-2xl font-black">{item.role}</h3>
              <div className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                {item.company}
              </div>
              <div className="mt-2 text-sm text-white/40">{item.period}</div>
            </div>
            <div className="grid gap-3">
              {item.bullets.map((bullet) => (
                <div key={bullet} className="flex gap-3 text-white/60">
                  <LuCircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  {bullet}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionLabel>Education & Certifications</SectionLabel>
      <h2 className="max-w-4xl text-3xl font-black tracking-[-0.035em] md:text-5xl">
        Credentials that support measurement and performance thinking.
      </h2>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {education.map(([title, source, year, body]) => (
          <div
            key={title}
            className="rounded-[1.8rem] border border-emerald-300/12 bg-white/[0.035] p-6"
          >
            <LuGraduationCap className="h-8 w-8 text-emerald-300" />
            <h3 className="mt-6 text-2xl font-black">{title}</h3>
            <div className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              {source} - {year}
            </div>
            <p className="mt-4 leading-7 text-white/58">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ConversionPaths() {
  const paths: [IconType, string, string, ConversionType][] = [
    [
      LuBriefcaseBusiness,
      "Work With Me",
      "Send a focused work inquiry for consulting, training, audits, freelance media buying and strategic growth support.",
      "work",
    ],
    [
      LuCalendarDays,
      "Strategy Call",
      "Choose this when you want a focused 30-minute call for campaign review, media strategy, or growth direction.",
      "booking",
    ],
    [
      LuFileSpreadsheet,
      "Media Plan Template",
      "Request the Google Sheet workflow and share what you are planning before access is manually reviewed.",
      "template",
    ],
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <SectionLabel>Best Way to Reach Me</SectionLabel>
      <h2 className="max-w-4xl text-3xl font-black tracking-[-0.035em] md:text-5xl">
        Choose the page that matches what you need.
      </h2>
      <p className="mt-5 max-w-3xl leading-8 text-white/58">
        If you are contacting me about work, use the landing path that matches
        your intent. That keeps the message clearer and helps me reply with the
        right next step faster.
      </p>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {paths.map(([Icon, title, body, type]) => (
          <button
            key={title}
            onClick={() => openConversion(type)}
            className="group rounded-[2rem] border border-emerald-300/12 bg-white/[0.035] p-7 text-left transition hover:-translate-y-1 hover:border-emerald-300/35 hover:bg-emerald-300/[0.08]"
            type="button"
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-300 text-[#050914]">
              <Icon className="h-7 w-7" />
            </div>
            <h3 className="mt-7 text-2xl font-black">{title}</h3>
            <p className="mt-4 leading-7 text-white/58">{body}</p>
            <span className="mt-7 inline-flex items-center gap-2 text-sm font-black text-emerald-300">
              Open Form{" "}
              <LuArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 className="text-3xl font-black tracking-[-0.035em] md:text-5xl">
            Performance-first digital marketer based in Chiang Mai.
          </h2>
          <p className="mt-6 leading-8 text-white/62">
            I combine channel strategy, creative testing, analytics, media
            buying, and reporting discipline to help teams make better
            decisions. My portfolio is designed to show not only what I do, but
            how I think about growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => openConversion("work")}>Work With Me</Button>
            <Button variant="ghost" onClick={() => openConversion("booking")}>
              Strategy Call
            </Button>
          </div>
        </div>
        <div className="rounded-[2rem] border border-emerald-300/12 bg-white/[0.035] p-7">
          <div className="text-xs font-black uppercase tracking-[0.28em] text-emerald-300">
            Portfolio Focus
          </div>
          <div className="mt-6 grid gap-3">
            {[
              "Meta and Google performance systems",
              "Education and digital product campaigns",
              "Media plan template request funnel",
              "Remote, hybrid and SEA/global opportunities",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-2xl bg-white/[0.045] p-4 text-white/65"
              >
                <LuShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const contactOptions: [IconType, string, ConversionType][] = [
    [LuSend, "Contact", "contact"],
    [LuBriefcaseBusiness, "Work With Me", "work"],
    [LuCalendarDays, "Strategy Call", "booking"],
    [LuFileSpreadsheet, "Request Media Plan Template", "template"],
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-20">
      <div className="grid overflow-hidden rounded-[2.4rem] border border-emerald-300/12 bg-white/[0.035] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-emerald-300 p-8 text-[#050914] md:p-12">
          <div className="mb-4 text-xs font-black uppercase tracking-[0.36em] text-[#050914]/70">
            Get In Touch
          </div>
          <h2 className="text-3xl font-black tracking-[-0.035em] md:text-5xl">
            Based in Chiang Mai. Open to full-time, contract and consulting
            roles.
          </h2>
          <div className="mt-8 space-y-4 font-semibold">
            <div className="flex gap-3">
              <LuMapPin className="h-5 w-5" /> Chiang Mai, Thailand
            </div>
            <div className="flex gap-3">
              <LuMail className="h-5 w-5" /> info@yehtet.com
            </div>
            <div className="flex gap-3">
              <LuUserRound className="h-5 w-5" /> Remote, hybrid and regional
              opportunities
            </div>
          </div>
        </div>
        <div className="grid gap-4 p-8 md:p-12">
          {contactOptions.map(([Icon, title, type]) => (
            <button
              key={title}
              onClick={() => openConversion(type)}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.045] p-5 text-left transition hover:border-emerald-300/35 hover:bg-white/[0.07]"
              type="button"
            >
              <span className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300 text-[#050914]">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="font-black">{title}</span>
              </span>
              <LuArrowRight className="h-5 w-5 text-white/35" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function getConversionConfig(type: ConversionType) {
  return {
    booking: {
      button: "Submit Strategy Call Request",
      fields: ["Preferred date / time", "Campaign / business goal"],
      icon: LuCalendarDays,
      label: "Strategy Call",
      title: "Book a free performance strategy call.",
    },
    work: {
      button: "Send Work Inquiry",
      fields: ["Project type", "Budget / scope"],
      icon: LuBriefcaseBusiness,
      label: "Work With Me",
      title: "Send a focused work inquiry.",
    },
    template: {
      button: "Request Template Access",
      fields: ["Campaign type", "Planning purpose"],
      icon: LuFileSpreadsheet,
      label: "Media Plan Template",
      title: "Request the media plan template.",
    },
    contact: {
      button: "Send Message",
      fields: ["Subject", "Timeline"],
      icon: LuSend,
      label: "Contact",
      title: "Send a direct message.",
    },
  }[type];
}

function buildMessage(form: ConversionForm, type: ConversionType) {
  return [
    `Conversion path: ${type}`,
    `Website / LinkedIn: ${form.website || "Not provided"}`,
    `${form.detailOne || "Detail 1"} / ${form.detailTwo || "Detail 2"}`,
    `Main need: ${form.need || "Not provided"}`,
    "",
    form.message,
  ]
    .filter(Boolean)
    .join("\n");
}

function ConversionModal({
  type,
  onClose,
}: {
  onClose: () => void;
  type: ConversionType | null;
}) {
  const [form, setForm] = useState<ConversionForm>(emptyForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  if (!type) return null;

  const selected = getConversionConfig(type);
  const Icon = selected.icon;

  const updateField = (field: keyof ConversionForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("Please complete your name, email, and message.");
      return;
    }

    setStatus("submitting");
    setError(null);

    const endpoint =
      type === "template"
        ? "/api/media-plan-request"
        : type === "contact"
          ? "/api/contact"
          : "/api/book-call";

    const payload =
      type === "template"
        ? {
            budgetRange: form.detailTwo || "Not provided",
            company: form.company || "Not provided",
            email: form.email,
            name: form.name,
            notes: buildMessage(form, type),
            role: form.detailOne || "Website visitor",
            useCase: form.need || "Media plan template request",
          }
        : type === "contact"
          ? {
              email: form.email,
              message: buildMessage(form, type),
              name: form.name,
            }
          : {
              company: form.company,
              email: form.email,
              message: buildMessage(form, type),
              name: form.name,
              service:
                type === "booking"
                  ? "Strategy Call"
                  : form.need || "Work Inquiry",
            };

    try {
      const response = await fetch(endpoint, {
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      let data: { error?: string } | null = null;
      try {
        data = (await response.json()) as { error?: string };
      } catch {
        // ignore non-json responses
      }

      if (!response.ok) {
        setStatus("error");
        setError(data?.error ?? "Unable to send your request right now.");
        return;
      }

      sendGoogleAdsConversion(googleAdsConversionIds.submitLeadForm);
      void sendLeadEvent({
        contentName: selected.label,
        email: form.email,
        url: window.location.href,
      }).catch((trackingError) => {
        console.error("Lead tracking error:", trackingError);
      });

      setStatus("success");
      setForm(emptyForm);
    } catch (submitError) {
      console.error("Conversion form error:", submitError);
      setStatus("error");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
      <button
        aria-label="Close form"
        onClick={onClose}
        className="absolute inset-0 bg-black/74 backdrop-blur-sm"
        type="button"
      />
      <div className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-emerald-300/14 bg-[#07120f] shadow-[0_30px_120px_rgba(0,0,0,0.62)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_0%,rgba(80,245,170,0.18),transparent_35%)]" />
        <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-white/10 p-7 md:p-9 lg:border-b-0 lg:border-r">
            <div className="flex items-start justify-between gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-300 text-[#050914]">
                <Icon className="h-7 w-7" />
              </div>
              <button
                onClick={onClose}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/65 hover:text-white"
                type="button"
              >
                <LuX className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-emerald-300">
              {selected.label}
            </div>
            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-5xl">
              {selected.title}
            </h2>
            <p className="mt-5 leading-8 text-white/58">
              Share a few details so I can understand your campaign, current
              bottleneck, and what we should review before the next step.
            </p>
            <div className="mt-7 grid gap-3">
              {[
                "Reply from info@yehtet.com",
                "Performance-first review",
                "Clear next step",
                "No spam",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3 text-sm font-semibold text-white/68"
                >
                  <LuCircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <form className="space-y-4 p-7 md:p-9" onSubmit={handleSubmit}>
            {status === "success" ? (
              <div className="rounded-[1.5rem] border border-emerald-300/20 bg-emerald-300/10 p-6">
                <div className="text-xs font-black uppercase tracking-[0.24em] text-emerald-300">
                  Request received
                </div>
                <p className="mt-3 text-lg font-black text-white">
                  Thanks. Your request has been sent successfully.
                </p>
                <p className="mt-3 text-sm leading-6 text-white/60">
                  I will review the details and reply with the next step.
                </p>
                {type === "booking" ? (
                  <a
                    href={bookingCalendarUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-emerald-300 px-6 py-4 font-black text-[#050914] transition hover:bg-emerald-200"
                  >
                    Open Google Calendar
                  </a>
                ) : null}
              </div>
            ) : (
              <>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    required
                    placeholder="Full name"
                    value={form.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 outline-none placeholder:text-white/35 focus:border-emerald-300"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 outline-none placeholder:text-white/35 focus:border-emerald-300"
                  />
                  <input
                    placeholder="Company / brand"
                    value={form.company}
                    onChange={(event) =>
                      updateField("company", event.target.value)
                    }
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 outline-none placeholder:text-white/35 focus:border-emerald-300"
                  />
                  <input
                    placeholder="Website / LinkedIn URL"
                    value={form.website}
                    onChange={(event) =>
                      updateField("website", event.target.value)
                    }
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 outline-none placeholder:text-white/35 focus:border-emerald-300"
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    placeholder={selected.fields[0]}
                    value={form.detailOne}
                    onChange={(event) =>
                      updateField("detailOne", event.target.value)
                    }
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 outline-none placeholder:text-white/35 focus:border-emerald-300"
                  />
                  <input
                    placeholder={selected.fields[1]}
                    value={form.detailTwo}
                    onChange={(event) =>
                      updateField("detailTwo", event.target.value)
                    }
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 outline-none placeholder:text-white/35 focus:border-emerald-300"
                  />
                </div>
                <select
                  className="w-full rounded-2xl border border-white/10 bg-[#07120f] px-5 py-4 text-white/70 outline-none focus:border-emerald-300"
                  value={form.need}
                  onChange={(event) => updateField("need", event.target.value)}
                >
                  <option value="">Main need</option>
                  <option>Meta / Google performance audit</option>
                  <option>Education lead generation</option>
                  <option>Digital product launch</option>
                  <option>Media plan template</option>
                  <option>Training / workshop</option>
                  <option>Freelance media buying</option>
                  <option>Strategy call / consultation</option>
                </select>
                <textarea
                  rows={5}
                  placeholder="Tell me about your goal, current ROAS/CPL/CPA if available, monthly budget, timeline, and main challenge"
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 outline-none placeholder:text-white/35 focus:border-emerald-300"
                />
                {error ? (
                  <p className="text-sm font-semibold text-red-300">{error}</p>
                ) : null}
                <button
                  className="w-full rounded-full bg-emerald-300 px-6 py-4 font-black text-[#050914] transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={status === "submitting"}
                  type="submit"
                >
                  {status === "submitting" ? "Sending..." : selected.button}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

function PageHero({
  label,
  title,
  body,
}: {
  body: string;
  label: string;
  title: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:py-28">
      <SectionLabel>{label}</SectionLabel>
      <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.055em] md:text-7xl">
        {title}
      </h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-white/62">{body}</p>
    </section>
  );
}

function HomePage() {
  return (
    <PageShell>
      <Hero />
      <BrandMarquee />
      <StatsSection />
      <ServicesSection />
      <TemplateSection />
      <WorkSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ConversionPaths />
      <ContactSection />
    </PageShell>
  );
}

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="About"
        title={
          <>
            Performance-first marketing with{" "}
            <GradientTitle>practical execution</GradientTitle>
          </>
        }
        body="Based in Chiang Mai, Thailand. Open to remote, hybrid and regional leadership opportunities across SEA and global markets."
      />
      <AboutSection />
      <StatsSection />
      <ExperienceSection />
      <ContactSection />
    </PageShell>
  );
}

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        label="Services"
        title={
          <>
            Digital marketing execution across the{" "}
            <GradientTitle>full funnel</GradientTitle>
          </>
        }
        body="SEO, PPC, social, content, CRM automation and CRO support for growth-focused campaigns."
      />
      <ServicesSection />
      <ConversionPaths />
      <ContactSection />
    </PageShell>
  );
}

function WorkPage() {
  return (
    <PageShell>
      <PageHero
        label="Work"
        title={
          <>
            Selected performance systems and{" "}
            <GradientTitle>portfolio proof</GradientTitle>
          </>
        }
        body="Examples across education, digital products and D2T growth, built around Meta, Google, creative testing and analytics."
      />
      <WorkSection />
      <StatsSection />
      <ContactSection />
    </PageShell>
  );
}

function TemplatePage() {
  return (
    <PageShell>
      <PageHero
        label="Template"
        title={
          <>
            Request the media planning <GradientTitle>Google Sheet</GradientTitle>
          </>
        }
        body="A structured workflow for business objectives, audience logic, channel roles, KPI targets and budget planning."
      />
      <TemplateSection />
      <ContactSection />
    </PageShell>
  );
}

function SkillsPage() {
  return (
    <PageShell>
      <PageHero
        label="Skills"
        title={
          <>
            The skill stack behind <GradientTitle>performance growth</GradientTitle>
          </>
        }
        body="Strategy, performance media, paid advertising, analytics, reporting and campaign optimization."
      />
      <SkillsSection />
      <ServicesSection />
      <ContactSection />
    </PageShell>
  );
}

function ExperiencePage() {
  return (
    <PageShell>
      <PageHero
        label="Experience"
        title={
          <>
            Agency, brand and regional digital{" "}
            <GradientTitle>leadership</GradientTitle>
          </>
        }
        body="12+ years across digital strategy, media execution, optimization and campaign operations."
      />
      <ExperienceSection />
      <ContactSection />
    </PageShell>
  );
}

function EducationPage() {
  return (
    <PageShell>
      <PageHero
        label="Education"
        title={
          <>
            Education and certifications for{" "}
            <GradientTitle>measurement-led marketing</GradientTitle>
          </>
        }
        body="Physics background with Google certifications across measurement, apps and programmatic activation."
      />
      <EducationSection />
      <ContactSection />
    </PageShell>
  );
}

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        label="Contact"
        title={
          <>
            Choose the fastest path to <GradientTitle>reach me</GradientTitle>
          </>
        }
        body="Work inquiry, booking request, media plan template request or direct contact."
      />
      <ConversionPaths />
      <ContactSection />
    </PageShell>
  );
}

export default function ModernPortfolioApp() {
  const [activeRoute, setActiveRoute] = useState<Route>(getInitialRoute);
  const [conversionOpen, setConversionOpen] = useState<ConversionType | null>(
    null
  );

  useEffect(() => {
    const onHashChange = () => setActiveRoute(getInitialRoute());
    const onOpenConversion = (event: Event) =>
      setConversionOpen(
        (event as CustomEvent<ConversionType>).detail ?? "contact"
      );

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("open-conversion", onOpenConversion);

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("open-conversion", onOpenConversion);
    };
  }, []);

  const goTo = (route: Route) => {
    setActiveRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const page = useMemo(() => {
    switch (activeRoute) {
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "work":
        return <WorkPage />;
      case "template":
        return <TemplatePage />;
      case "skills":
        return <SkillsPage />;
      case "experience":
        return <ExperiencePage />;
      case "education":
        return <EducationPage />;
      case "contact":
        return <ContactPage />;
      case "home":
      default:
        return <HomePage />;
    }
  }, [activeRoute]);

  return (
    <main className="min-h-screen bg-[#050914] text-white selection:bg-emerald-300 selection:text-[#050914]">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(80,245,170,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(45,212,191,0.12),transparent_35%)]" />
      <Header activeRoute={activeRoute} goTo={goTo} />
      {page}
      {conversionOpen ? (
        <ConversionModal
          key={conversionOpen}
          type={conversionOpen}
          onClose={() => setConversionOpen(null)}
        />
      ) : null}
      <footer className="border-t border-emerald-300/10 px-5 py-10 text-center text-sm text-white/42">
        © 2026 Ye Htet Aung. All rights reserved. - info@yehtet.com
      </footer>
      <style>
        {`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}
      </style>
    </main>
  );
}
