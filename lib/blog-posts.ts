import { blogPreviews } from "./blog-preview";

export type BlogSection = {
  bullets?: string[];
  paragraphs: string[];
  title: string;
};

export type BlogPost = (typeof blogPreviews)[number] & {
  intro: string;
  relatedLinks?: Array<{
    href: string;
    label: string;
  }>;
  seoPhrases: string[];
  sections: BlogSection[];
};

const postDetails: Record<
  string,
  Pick<BlogPost, "intro" | "relatedLinks" | "sections" | "seoPhrases">
> = {
  "digital-media-planning-consultant-bangkok-media-plan": {
    intro:
      "A strong media plan is the bridge between a business goal and the money spent on ads. For Bangkok, Thailand, and Southeast Asia teams, the best planning work usually happens before anyone opens Meta Ads Manager or Google Ads. The plan should make the campaign easier to brief, launch, measure, and optimize.",
    seoPhrases: [
      "digital media planning consultant Bangkok",
      "media planning consultant Thailand",
      "campaign planning Thailand",
      "Bangkok performance marketing consultant",
    ],
    relatedLinks: [
      {
        href: "/digital-media-planning-consultant-bangkok",
        label: "Bangkok media planning service",
      },
      {
        href: "/media-planning-buying-toolkit",
        label: "Media planning and buying toolkit",
      },
      {
        href: "/work-with-me",
        label: "Send a planning inquiry",
      },
    ],
    sections: [
      {
        title: "Start with the campaign decision, not the channel",
        paragraphs: [
          "Many campaigns start with a channel choice too early. A better media plan starts with the decision the business needs to make: generate qualified leads, test a new offer, increase booked calls, sell a product, or build remarketing pools for a longer buying cycle.",
          "Once that decision is clear, the channel mix becomes easier to justify. Meta can build demand, Google can capture intent, retargeting can recover warm users, and content can support the questions people ask before they inquire.",
        ],
        bullets: [
          "Define one primary business outcome before choosing channels.",
          "Separate awareness, lead generation, remarketing, and sales goals.",
          "Write the campaign hypothesis before setting the budget.",
        ],
      },
      {
        title: "What a Bangkok media plan should include",
        paragraphs: [
          "A practical media plan should include the target market, audience segments, message angle, channel roles, budget split, timing, conversion events, landing page path, reporting rhythm, and the criteria for changing spend.",
          "For Thailand and SEA campaigns, the plan should also account for language, market maturity, payment or inquiry friction, and whether the buyer needs education before they are ready to convert.",
        ],
        bullets: [
          "Campaign objective, audience, offer, channel role, and KPI.",
          "Budget allocation by channel, stage, and testing priority.",
          "Tracking requirements, launch QA, and weekly optimization notes.",
        ],
      },
      {
        title: "How planning prevents wasted media spend",
        paragraphs: [
          "Wasted spend usually happens when campaign goals are vague. If the budget is split without knowing which channel is meant to create demand, capture demand, or close warm audiences, the results become difficult to read.",
          "A clear plan makes performance conversations calmer. Instead of asking whether ads are good or bad, the team can ask whether the offer, channel role, creative angle, audience, or landing page needs to change.",
        ],
      },
      {
        title: "When to use a consultant or a toolkit",
        paragraphs: [
          "A consultant is useful when the business problem is still unclear, when multiple teams need alignment, or when the account history needs interpretation. A toolkit is useful when the team already knows the goal and needs a repeatable planning structure.",
          "The strongest setup is often both: use consulting to shape the strategy, then use a planning and buying toolkit to keep execution consistent week after week.",
        ],
      },
    ],
  },
  "digital-media-buying-consultant-thailand-sea-audit-checklist": {
    intro:
      "Before scaling Meta Ads, Google Ads, PPC, or paid social budgets, Thailand and Southeast Asia teams should know whether the campaign system is healthy. A media buying audit is not only about finding mistakes. It is about identifying which part of the system is limiting growth.",
    seoPhrases: [
      "digital media buying consultant Thailand",
      "SEA media buying consultant",
      "Meta Ads specialist Thailand",
      "Google Ads consultant Thailand",
      "PPC consultant Southeast Asia",
    ],
    relatedLinks: [
      {
        href: "/digital-media-buying-consultant-thailand-sea",
        label: "Thailand and SEA media buying service",
      },
      {
        href: "/digital-media-planning-consultant-bangkok",
        label: "Bangkok media planning support",
      },
      {
        href: "/book-call",
        label: "Book a strategy call",
      },
    ],
    sections: [
      {
        title: "Audit the offer and landing page first",
        paragraphs: [
          "Media buying cannot fully fix a weak offer or confusing landing page. Before increasing budget, check whether the page explains the value, who it is for, what happens next, and why someone should trust the business.",
          "For lead generation, the conversion path should be simple. If the form asks for too much information, if the call to action is unclear, or if the proof points are thin, campaign performance will usually suffer even when targeting is good.",
        ],
        bullets: [
          "Check message match between ad, keyword, audience, and landing page.",
          "Review speed, mobile readability, proof, and form friction.",
          "Confirm the page has one primary conversion action.",
        ],
      },
      {
        title: "Audit conversion tracking and event quality",
        paragraphs: [
          "Scaling without clean tracking is risky. The campaign may look efficient while optimizing for a weak event, duplicate event, or page view that does not represent business value.",
          "A practical audit checks pixel events, Google Ads conversions, GA4 events, thank-you pages, duplicate firing, server-side tracking, and whether lead quality is connected back to the reporting view.",
        ],
        bullets: [
          "Confirm Meta Pixel, Google Ads, and GA4 events fire only when expected.",
          "Separate real leads from button clicks or low-intent micro events.",
          "Use event IDs where possible to reduce duplicate reporting.",
        ],
      },
      {
        title: "Audit campaign structure before changing budgets",
        paragraphs: [
          "Budget problems often come from structure problems. Campaigns become hard to optimize when too many audiences, goals, creatives, and funnel stages are mixed together.",
          "Before scaling, check whether the account has clear campaign objectives, audience logic, creative testing discipline, search term controls, negative keywords, and a decision rule for pausing or scaling.",
        ],
      },
      {
        title: "Audit reporting and weekly decisions",
        paragraphs: [
          "A strong media buyer should be able to explain not only what happened, but what changed and what should happen next. Reporting should connect spend, learning, and next actions.",
          "For Thailand and SEA campaigns, weekly reporting should include channel role, cost per qualified action, creative learnings, landing page notes, budget pacing, and the next decision for each campaign group.",
        ],
        bullets: [
          "Track spend, CPL or CPA, lead quality, conversion rate, and next action.",
          "Separate testing budgets from scaling budgets.",
          "Keep a weekly decision log so the account does not repeat the same tests.",
        ],
      },
    ],
  },
  "media-planning-buying-toolkit-before-launch": {
    intro:
      "A media planning and buying toolkit is most useful before a campaign launches. It gives marketers, founders, freelancers, agencies, and small teams a shared place to organize the brief, channel roles, budget, buying setup, tracking checks, and weekly optimization notes.",
    seoPhrases: [
      "media planning and buying toolkit",
      "digital media planning toolkit",
      "campaign planning template",
      "media buying checklist",
      "media plan template Thailand",
    ],
    relatedLinks: [
      {
        href: "/media-planning-buying-toolkit",
        label: "Toolkit SEO overview",
      },
      {
        href: "/media-plan-template",
        label: "Register for the toolkit",
      },
      {
        href: "/digital-media-planning-consultant-bangkok",
        label: "Get planning support",
      },
    ],
    sections: [
      {
        title: "Use the toolkit to clarify the brief",
        paragraphs: [
          "The campaign brief should explain the business goal, offer, target audience, market, key message, conversion path, budget range, timeline, and the main question the campaign needs to answer.",
          "A clear brief helps everyone move faster because the media buyer, founder, designer, content person, and manager are not guessing from separate notes.",
        ],
        bullets: [
          "Write the audience problem and offer in plain language.",
          "Choose the primary conversion action before building campaigns.",
          "Add campaign constraints such as budget, market, language, and timeline.",
        ],
      },
      {
        title: "Map channel roles before buying media",
        paragraphs: [
          "Every channel should have a job. Meta may introduce the offer to cold or warm audiences, Google Search may capture active demand, YouTube or display may support reach, and retargeting may bring people back to the conversion page.",
          "When channel roles are clear, reporting becomes easier. A top-funnel campaign should not be judged exactly like a search campaign, and a retargeting campaign should not be asked to create all demand by itself.",
        ],
      },
      {
        title: "Run buying QA before launch",
        paragraphs: [
          "Buying QA is the checklist that prevents simple mistakes from becoming expensive. Check conversion events, UTMs, naming conventions, budget caps, audience exclusions, location targeting, language settings, creative previews, and landing page links.",
          "This is especially helpful for small teams because it creates a calm launch process. The goal is to catch avoidable setup issues before the budget starts spending.",
        ],
        bullets: [
          "Check tracking, links, UTMs, budgets, audiences, and placements.",
          "Confirm the landing page and form work on mobile.",
          "Record launch notes so later performance changes make sense.",
        ],
      },
      {
        title: "Use weekly optimization prompts",
        paragraphs: [
          "A toolkit should not stop at launch. Weekly optimization prompts help teams decide what to keep, pause, refresh, test, or scale based on evidence.",
          "The best review notes explain the reason behind the next step. That is what turns a media plan from a one-time document into a repeatable performance workflow.",
        ],
      },
    ],
  },
  "digital-marketing-consultant-thailand-myanmar-sea": {
    intro:
      "Hiring a digital marketing consultant in Thailand is not only about finding someone who can run ads. For Thailand-based brands, Myanmar-focused businesses, and Southeast Asia teams, the real value comes from connecting search visibility, paid media execution, answer-friendly content, and conversion planning into one practical growth system.",
    seoPhrases: [
      "digital marketing consultant Thailand",
      "SEO consultant Thailand",
      "Southeast Asia performance marketing",
      "digital marketing consultant Myanmar",
    ],
    relatedLinks: [
      {
        href: "/digital-marketing-consultant-thailand-myanmar-sea",
        label: "Regional digital marketing services",
      },
      {
        href: "/digital-media-buying-consultant-thailand-sea",
        label: "Thailand and SEA media buying",
      },
      {
        href: "/work-with-me",
        label: "Send a consulting inquiry",
      },
    ],
    sections: [
      {
        title: "Why Thailand is a strong base for regional digital marketing",
        paragraphs: [
          "Thailand is a practical base for regional marketing work because many teams need a mix of local market awareness, English communication, cross-border coordination, and performance discipline. A Bangkok-based consultant can still support Thailand, Myanmar, Singapore, and Southeast Asia projects through remote and hybrid workflows.",
          "For many brands, the challenge is not choosing one channel. The challenge is making SEO, paid media, landing pages, tracking, and reporting work together so the business can see which activity is actually creating qualified demand.",
        ],
        bullets: [
          "Thailand-first visibility for local and regional search intent.",
          "Myanmar market context for brands that sell into or from Myanmar.",
          "SEA execution style for remote, hybrid, and cross-border teams.",
        ],
      },
      {
        title: "What search visibility should cover",
        paragraphs: [
          "Strong search visibility helps people and search systems understand pages, topics, and commercial intent. Clear headings, FAQs, concise explanations, and regional signals make the site easier to connect with Thailand, Myanmar, and Southeast Asia search contexts.",
          "For a consultant portfolio, this means the homepage should say who you are, where you are based, who you help, and what services you provide. Service pages should answer buyer questions directly, and blog posts should build topical authority around recurring problems.",
        ],
        bullets: [
          "Use clear page titles for Thailand, Myanmar, and SEA services.",
          "Add structured data for Person, ProfessionalService, FAQ, Article, and Product pages.",
          "Publish content that answers practical buyer questions, not only generic marketing definitions.",
        ],
      },
      {
        title: "How paid media supports search growth",
        paragraphs: [
          "Paid media creates fast feedback. Meta Ads and Google Ads can show which offer, audience, keyword, hook, and landing page angle gets meaningful response before a long SEO plan fully matures.",
          "A useful regional strategy turns those paid media learnings into search content, landing page updates, FAQs, case examples, and stronger conversion paths. That is how SEO and PPC stop competing and start informing each other.",
        ],
      },
      {
        title: "How to choose the right consultant",
        paragraphs: [
          "A strong consultant should be able to talk about business goals, tracking quality, channel roles, creative testing, content strategy, and reporting. If the conversation stays only at platform tactics, the growth system will stay fragile.",
          "Before starting, prepare your target market, current website, campaign history, monthly budget, lead or sales goal, and the main business constraint. That makes the first strategy conversation much more productive.",
        ],
        bullets: [
          "Ask how SEO, paid media, and conversion tracking will work together.",
          "Look for clear reporting logic and decision frameworks.",
          "Start with a focused audit or strategy call before scaling execution.",
        ],
      },
    ],
  },
  "myanmar-digital-marketing-strategy-playbook": {
    intro:
      "Myanmar brands do not need a bigger list of channels. They need a sharper operating system for traffic, messaging, and conversion. The brands that grow consistently are usually the ones that connect business goals to channel execution instead of treating Facebook posts, Google Ads, SEO, and landing pages as separate jobs.",
    seoPhrases: [
      "Myanmar digital marketing",
      "digital marketing consultant Myanmar",
      "SEO and paid media strategy Myanmar",
    ],
    relatedLinks: [
      {
        href: "/myanmar-digital-marketing-consultant",
        label: "Myanmar digital marketing support",
      },
      {
        href: "/blog/digital-marketing-training-myanmar-teams",
        label: "Myanmar team training guide",
      },
      {
        href: "/work-with-me",
        label: "Send a Myanmar inquiry",
      },
    ],
    sections: [
      {
        title: "Start with business questions, not platform tactics",
        paragraphs: [
          "A strong Myanmar digital marketing strategy starts with the business model. Are you trying to generate leads, sell products directly, increase repeat purchase, or improve brand trust before a market expansion? Without that clarity, every channel starts competing for attention instead of contributing to one funnel.",
          "As a consultant, I usually map the journey from audience problem to conversion action. That makes it easier to decide whether SEO should capture intent, whether Meta should drive discovery, and whether remarketing should be used to recover interested visitors.",
        ],
        bullets: [
          "Define one primary conversion goal for each landing page.",
          "Separate awareness campaigns from lead-generation campaigns.",
          "Measure cost per qualified lead, not just clicks or reach.",
        ],
      },
      {
        title: "Build search demand around local commercial intent",
        paragraphs: [
          "SEO traffic becomes valuable when content is aligned with the terms people actually use before they inquire or buy. For Myanmar-focused businesses, that usually means blending service keywords, location phrases, and decision-stage topics such as pricing, process, platform choice, or case-study style educational content.",
          "A blog strategy can help here, but only if each article supports a commercial theme. For example, articles around Myanmar digital marketing, media buying, campaign management, and team training can all feed authority back into your services page through internal links and clear calls to action.",
        ],
      },
      {
        title: "Use paid media to validate what SEO should expand",
        paragraphs: [
          "Paid campaigns are not only for immediate leads. They are also a fast research loop. When Meta or Google Ads data shows that one offer, one audience, or one message consistently wins, that is a strong signal for what long-form SEO content should explore in more depth.",
          "This is especially useful for Myanmar brands that are testing different product angles or trying to understand whether they should speak to local buyers, diaspora audiences, or regional decision makers in Thailand and Singapore.",
        ],
        bullets: [
          "Turn winning ad hooks into blog post angles.",
          "Use search-term reports to plan future content clusters.",
          "Compare landing page conversion rate before scaling traffic.",
        ],
      },
      {
        title: "Create authority through clarity and consistency",
        paragraphs: [
          "If you want to be known for Myanmar digital marketing, your site should make three things obvious: what you do, who you help, and how you think. Publishing consistent articles around consulting, training, and freelance media buying helps build that narrative over time.",
          "The goal is not to publish random content. The goal is to publish useful opinions, frameworks, and tactical guidance that show your decision-making quality. That is what turns a portfolio site into a lead-generation asset.",
        ],
      },
    ],
  },
  "freelance-digital-media-buying-myanmar-brands": {
    intro:
      "Freelance digital media buying works best when it is treated like a performance function, not a task list. Myanmar brands often hire freelancers because they need speed, channel expertise, and budget discipline without committing to a large internal team. That only pays off if campaign structure, reporting, and creative testing are handled with rigor.",
    seoPhrases: [
      "freelance digital media buying Myanmar",
      "Myanmar media buyer",
      "Meta and Google Ads freelancer Myanmar",
    ],
    relatedLinks: [
      {
        href: "/digital-media-buying-consultant-thailand-sea",
        label: "Media buying support",
      },
      {
        href: "/myanmar-digital-marketing-consultant",
        label: "Myanmar digital marketing support",
      },
      {
        href: "/work-with-me",
        label: "Send a media buying inquiry",
      },
    ],
    sections: [
      {
        title: "What a good freelance media buyer should own",
        paragraphs: [
          "A strong freelance media buyer should do more than launch ads. They should challenge budget allocation, improve audience logic, pressure-test creative assumptions, and keep reporting tied to business outcomes.",
          "That means the role usually covers campaign architecture, tracking checks, daily optimization, audience refresh planning, and weekly performance readouts with clear next actions.",
        ],
        bullets: [
          "Channel and budget planning",
          "Campaign setup and naming hygiene",
          "Creative test planning and learning summaries",
          "Performance reporting with actionable recommendations",
        ],
      },
      {
        title: "How Myanmar brands can avoid wasted spend",
        paragraphs: [
          "Wasted spend often comes from mixing too many goals in one campaign. If lead generation, reach, traffic, and remarketing all live inside the same budget without a clear hierarchy, the account becomes hard to optimize and even harder to explain.",
          "A better approach is to create simpler campaign systems with one purpose per campaign and one decision framework for scaling, pausing, or changing creative. This is where freelance specialists can add immediate value because they are forced to be selective.",
        ],
      },
      {
        title: "Why reporting matters as much as buying",
        paragraphs: [
          "Media buying without clear reporting creates dependence. The client sees spend, but not the logic. A better freelance setup includes dashboards or summary reports that explain what changed, what improved, and what is being tested next.",
          "That kind of communication is especially important when business owners want to understand if weak performance comes from targeting, offer quality, landing page friction, or market demand.",
        ],
      },
      {
        title: "When to bring in a consultant instead of only a buyer",
        paragraphs: [
          "If the business has traffic but weak conversion, or if multiple teams are involved in creative, CRM, website, and reporting, a consultant lens becomes just as important as a buyer lens. In those cases, the problem is rarely limited to campaign toggles.",
          "The most useful freelance media buying relationships usually combine execution with strategic advice so the account improves as a system, not only as a dashboard.",
        ],
      },
    ],
  },
  "digital-marketing-training-myanmar-teams": {
    intro:
      "Training only works when it changes how a team executes next week. Many digital marketing workshops sound impressive in the room but fail in practice because they do not connect theory to the tools, workflows, and decision points teams actually use every day.",
    seoPhrases: [
      "digital marketing training Myanmar",
      "Myanmar digital marketing trainer",
      "performance marketing workshop Myanmar",
    ],
    relatedLinks: [
      {
        href: "/myanmar-digital-marketing-consultant",
        label: "Myanmar consulting and training support",
      },
      {
        href: "/blog/myanmar-digital-marketing-strategy-playbook",
        label: "Myanmar strategy playbook",
      },
      {
        href: "/work-with-me",
        label: "Ask about team training",
      },
    ],
    sections: [
      {
        title: "What in-house teams usually struggle with",
        paragraphs: [
          "Most teams do not need another generic overview of digital marketing channels. They need confidence in campaign setup, audience logic, creative testing, attribution basics, and performance reporting.",
          "Training is most effective when it addresses the exact points where execution breaks: poor briefing, unclear KPIs, weak campaign naming, inconsistent tracking, and reporting that only repeats numbers without interpretation.",
        ],
      },
      {
        title: "A useful training roadmap for Myanmar teams",
        paragraphs: [
          "A practical training program usually starts with fundamentals and then moves quickly into live examples. Teams need to see how a strategy becomes account structure, how content maps to funnel stages, and how reporting should shape the next budget decision.",
          "For Myanmar businesses, I would usually structure training around search intent, Meta campaign planning, Google Ads basics, creative testing frameworks, landing page conversion logic, and analytics interpretation.",
        ],
        bullets: [
          "Campaign objective selection",
          "Audience and keyword planning",
          "Creative testing frameworks",
          "Reporting interpretation for managers and founders",
        ],
      },
      {
        title: "Training should leave behind templates, not just slides",
        paragraphs: [
          "The real value of a trainer is not only presentation delivery. It is the operating system left behind after the session. That can include planning templates, reporting formats, QA checklists, and decision guides for daily optimization.",
          "Those tools help teams execute after the workshop, which is usually the moment when knowledge gaps become visible again.",
        ],
      },
      {
        title: "How training supports consulting and execution",
        paragraphs: [
          "Training, consulting, and freelance media buying do not need to compete. In many cases, they reinforce each other. Training builds team capability, consulting aligns the overall strategy, and freelance buying accelerates execution where specialist support is needed.",
          "If you want to be known in the market, publishing educational content around this combined model is a strong move. It demonstrates depth and makes your website useful even before a prospect reaches out.",
        ],
      },
    ],
  },
};

export const blogPosts: BlogPost[] = blogPreviews.map((preview) => ({
  ...preview,
  ...postDetails[preview.slug],
}));

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
