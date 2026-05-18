/**
 * All written content for the site, grouped by page / section.
 * Edit copy here — components consume it.
 *
 * V2 expands Artheon's positioning from "bathroom renovations" to
 * "premium renovation management" — bathrooms remain the deepest product,
 * but the funnel routes other project types through a consultation flow.
 */

export const homepage = {
  hero: {
    eyebrow: "Premium renovation management · Reading",
    headline: "Considered renovations, calmly managed.",
    sub: "Artheon LTD plans, coordinates and delivers premium home renovations across Reading and Berkshire — starting with bathrooms, with the same calm process behind every project.",
    primaryCta: { label: "Book a consultation", href: "/consultation" },
    secondaryCta: { label: "Download the renovation guide", href: "/guide" },
    image: "/images/bathroom-hero.jpg",
  },
  intro: {
    eyebrow: "What we do",
    title: "A single, organised point of contact for your renovation.",
    body: "Most homeowners don't need another contractor. They need someone to plan the work, coordinate the trades, and keep them informed. That's what we do — quietly, properly, and only on projects we can deliver well.",
  },
  pillars: [
    { title: "Structured consultation", body: "Every project starts with a calm conversation, not a quote. We listen first, then suggest the right path." },
    { title: "Two clear bathroom packages", body: "Essential Refresh from £8,995 and Signature Renovation from £13,995. For other projects, pricing is confirmed after consultation." },
    { title: "Single point of contact", body: "One person leads your project from first call to handover. You always know who to talk to." },
    { title: "Realistic by design", body: "Honest scope, honest timelines, honest pricing. We say what we can and cannot take on." },
  ],
  closing: {
    title: "Tell us about your project.",
    body: "We respond to qualified enquiries within one working day. Consultations are calm, useful, and never a sales call.",
    cta: { label: "Book a consultation", href: "/consultation" },
  },
};

export const projectTypes = {
  eyebrow: "Project type",
  title: "What are you planning?",
  body: "Choose the closest fit. We'll tailor the conversation around what you actually need — not what we'd most like to sell.",
  items: [
    {
      slug: "bathroom",
      name: "Bathroom renovation",
      summary: "From a clean modern refresh to a full British-modern renovation.",
      intent: "Primary product — packages available",
      ctaLabel: "View bathroom packages",
      ctaHref: "/packages",
      tone: "warm" as const,
      featured: true,
    },
    {
      slug: "kitchen",
      name: "Kitchen renovation",
      summary: "Coordinated kitchen replacements with proper project management.",
      intent: "Consultation-led",
      ctaLabel: "Discuss your kitchen",
      ctaHref: "/consultation?projectType=kitchen",
      tone: "stone" as const,
    },
    {
      slug: "interior",
      name: "Interior refurbishment",
      summary: "Multi-room interior projects, planned and coordinated end-to-end.",
      intent: "Consultation-led",
      ctaLabel: "Plan a refurbishment",
      ctaHref: "/consultation?projectType=interior",
      tone: "tile" as const,
    },
    {
      slug: "flooring",
      name: "Flooring & decorating",
      summary: "Standalone flooring or decoration projects, properly specified.",
      intent: "Consultation-led",
      ctaLabel: "Discuss your project",
      ctaHref: "/consultation?projectType=flooring",
      tone: "warm" as const,
    },
    {
      slug: "joinery",
      name: "Bespoke joinery",
      summary: "Considered, made-to-measure storage, vanities and fitted detailing.",
      intent: "Consultation-led",
      ctaLabel: "Discuss your joinery",
      ctaHref: "/consultation?projectType=joinery",
      tone: "warm" as const,
    },
    {
      slug: "roofing",
      name: "Roofing & external works",
      summary: "External works coordinated alongside interior renovation.",
      intent: "Consultation-led — selective",
      ctaLabel: "Discuss your project",
      ctaHref: "/consultation?projectType=roofing",
      tone: "dark" as const,
    },
    {
      slug: "full-home",
      name: "Full home renovation",
      summary: "Multi-trade whole-house projects with proper coordination throughout.",
      intent: "Consultation-led — by appointment",
      ctaLabel: "Book a consultation",
      ctaHref: "/consultation?projectType=full-home",
      tone: "stone" as const,
    },
    {
      slug: "unsure",
      name: "Not sure yet — need guidance",
      summary: "Tell us where you are. We'll help you scope it without pressure.",
      intent: "Open conversation",
      ctaLabel: "Talk it through",
      ctaHref: "/consultation?projectType=unsure",
      tone: "fluted" as const,
    },
  ],
};

/**
 * "Safe pair of hands" — the renovation management positioning.
 * This is the central trust message of V2.
 */
export const safePairOfHands = {
  eyebrow: "A safe pair of hands",
  title: "Renovations should feel managed, not chaotic.",
  body: "Most homeowner anxiety around renovations comes from communication gaps — not the building work itself. Our job is to close those gaps. We plan properly, coordinate the trades, and keep you informed at every stage.",
  pillars: [
    { title: "Clear communication", body: "Plain-language updates at every stage. You always know what's happening next, and why." },
    { title: "Coordinated trades", body: "We sequence the right people at the right time so the project moves forward without idle days." },
    { title: "Realistic expectations", body: "Honest scope, honest timelines, honest pricing — set at consultation, not after deposit." },
    { title: "Single point of contact", body: "One person leads your project end-to-end. No passing you between sub-trades." },
    { title: "Clean site practice", body: "Dust sheets, daily tidy, protected floors. We respect that you live in your home." },
    { title: "2-year workmanship warranty", body: "Backed by separate manufacturer warranties on supplied products. Final wording subject to legal review." },
  ],
};

/**
 * Lead magnet — the downloadable guide.
 * Email is captured; the actual PDF is a placeholder until written.
 */
export const leadMagnet = {
  eyebrow: "Free guide for Reading homeowners",
  title: "The Reading Homeowner's Renovation Guide.",
  subtitle: "A calm, practical guide to planning a renovation properly — written for homeowners, not contractors.",
  body: "If you're planning a bathroom, kitchen or wider renovation in Reading or the surrounding area, this guide walks you through the questions to ask before any quote, the budget bands that genuinely exist, and the simple project plan most homeowners are never shown. It's the document we wish more clients had read before their last renovation.",
  highlights: [
    "How to set a realistic renovation budget — and what each band actually buys",
    "The seven questions to ask any renovation company before you commit",
    "Reading-specific notes on access, parking, waste removal and conservation considerations",
    "A simple project timeline template you can use with any contractor",
    "The handover checklist most renovations skip",
  ],
  meta: {
    pages: "12 pages",
    format: "PDF",
    cost: "Free",
    delivery: "Sent to your email instantly",
  },
  formCta: "Send me the guide",
  privacyNote: "We'll email you the guide. No sales calls. Unsubscribe anytime.",
  successTitle: "Check your inbox.",
  successBody:
    "We've sent the renovation guide to the email you provided. It usually arrives within a minute. If you don't see it, please check your spam folder.",
  // __PLACEHOLDER__ — replace with real PDF once written
  pdfPath: "/guides/artheon-renovation-guide.pdf",
  // Three working title options the founder can choose between
  titleOptions: [
    "The Reading Homeowner's Renovation Guide",
    "Planning a Premium Renovation: A Calm Guide for Homeowners",
    "The Renovation Planning Checklist: How Organised Homeowners Plan",
  ],
};

export const consultationPositioning = {
  eyebrow: "What is a consultation?",
  title: "A calm, useful conversation — not a sales call.",
  body: "Consultations last around 30 minutes and happen by phone or video. We listen to what you're planning, ask the questions a good renovation company should, and tell you honestly whether we are the right fit.",
  stages: [
    {
      n: "01",
      title: "Listen",
      body: "You tell us what you're planning, where, and roughly when. No forms to fill in beforehand — just a conversation.",
    },
    {
      n: "02",
      title: "Frame",
      body: "We ask a handful of questions to understand scope, budget realism, and decision-making setup. Honest answers help us help you.",
    },
    {
      n: "03",
      title: "Suggest",
      body: "We recommend the next step — a survey, a different specialist, or simply more thinking time. We will not push you into anything.",
    },
    {
      n: "04",
      title: "Document",
      body: "You receive a short written summary of what we discussed and what's next. No sales follow-up calls.",
    },
  ],
  expectations: [
    "30 minutes, by phone or video",
    "No pre-work or paperwork required",
    "A short written summary afterwards",
    "No follow-up unless you ask for one",
  ],
};

export const renovationsPage = {
  hero: {
    eyebrow: "Bathroom renovations",
    headline: "A more organised way to renovate your bathroom.",
    sub: "We strip out, install and finish modern bathrooms across Berkshire — from single-bathroom refreshes to full renovations.",
    image: "/images/renovations-hero.jpg",
  },
  intro: {
    title: "What an Artheon bathroom renovation looks like",
    body: "Most of our work is a full bathroom replacement: removing the old fittings, adjusting plumbing and electrics where needed, tiling, and installing new sanitaryware, brassware, lighting and finishes. We don't take on disorganised projects or chase the lowest price — we focus on doing the job well.",
  },
  scopeIncludes: [
    "Bathroom strip-out and waste removal",
    "Plumbing adjustments and first fix",
    "Electrical first and second fix (qualified electrician)",
    "Wall and floor tiling",
    "Sanitaryware, brassware and shower system installation",
    "Lighting and extractor installation",
    "Decoration and finishing",
    "Final clean and handover",
  ],
  scopeExcludes: [
    "Major structural alterations",
    "Bespoke joinery (consultation-led)",
    "Luxury spa systems and specialist stone packages",
    "Whole-house refurbishments (consultation-led)",
  ],
  styleNotes: {
    title: "Our design direction",
    body: "Clean, considered, British modern. Warm neutrals, honest materials, calm detailing. We are happy to guide design choices and specify finishes, but we are not a luxury interiors studio — we are a renovation company that takes design seriously.",
  },
};

export const packagesPage = {
  hero: {
    eyebrow: "Bathroom packages",
    headline: "Two packages. One realistic conversation.",
    sub: "Both packages cover a full bathroom renovation. The difference is the level of finish, the scope of upgrades, and the depth of design guidance.",
  },
  note: "Final pricing is confirmed after an on-site survey. Starting prices reflect typical project scope and do not include major structural work, bespoke joinery, or specialist finishes.",
};

/**
 * Material moodboard — what a premium Artheon bathroom is made of.
 */
export const materialPalette = {
  eyebrow: "Material direction",
  title: "The materials, fittings and finishes we work with.",
  body: "A calm, British-modern palette: large-format tiles, warm metallics, fluted glass, honest stone, considered lighting. We specify the parts that show, and the parts that don't.",
  note: "Imagery is reference-only mood direction — not completed Artheon projects.",
  items: [
    { title: "Large-format tiles", body: "Fewer grout lines, calmer rooms. Porcelain, stone-effect and matt finishes.", tone: "tile" as const, image: "/images/material-tiles.jpg" },
    { title: "Brushed brass & chrome", body: "Warm or cool metallics across taps, shower systems and accessories.", tone: "brass" as const, image: "/images/material-brass.jpg" },
    { title: "Fluted glass", body: "Vertical ribbing for shower screens and feature panels — privacy with light.", tone: "fluted" as const, image: "/images/material-fluted-glass.jpg" },
    { title: "Stone-effect finishes", body: "Travertine, limestone and concrete looks — honest, tactile, low-maintenance.", tone: "stone" as const, image: "/images/material-stone.jpg" },
    { title: "Vanity units", body: "Wall-hung, fluted or veneered. Integrated storage, considered proportions.", tone: "warm" as const, image: "/images/material-vanity.jpg" },
    { title: "LED niche lighting", body: "Recessed warm-white lighting that defines a wall and lifts material detail.", tone: "glow" as const, image: "/images/material-led-niche.jpg" },
    { title: "Modern shower screens", body: "Frameless, low-iron, hinged or walk-in — sized for the space, not the catalogue.", tone: "fluted" as const, image: "/images/material-shower-screen.jpg" },
    { title: "British modern palettes", body: "Warm whites, soft stone, deep charcoal — restrained, layered, calm.", tone: "warm" as const, image: "/images/material-palette.jpg" },
  ],
};

export const visualProcess = {
  eyebrow: "Survey process",
  title: "How we move from first call to clear quote.",
  body: "Five steps. No pressure, no chase calls. Every project begins with a proper on-site survey.",
  steps: [
    { n: "01", title: "Measure", body: "Laser-accurate measurements with a Leica DISTO so the quote reflects the real space.", tone: "stone" as const, image: "/images/process-measure.jpg" },
    { n: "02", title: "Inspect", body: "Thermal imaging, moisture readings and concealed pipework inspection where needed.", tone: "warm" as const, image: "/images/process-inspect.jpg" },
    { n: "03", title: "Document", body: "A full 360° photographic record, surface notes and on-site iPad documentation.", tone: "fluted" as const, image: "/images/process-document.jpg" },
    { n: "04", title: "Recommend", body: "We walk you through what's possible, suggest the package that genuinely fits, and explain why.", tone: "tile" as const, image: "/images/process-recommend.jpg" },
    { n: "05", title: "Quote", body: "A clear written quote: scope, exclusions, indicative timelines and the staged payment structure.", tone: "dark" as const, image: "/images/process-quote.jpg" },
  ],
};

export const beforeAfter = {
  eyebrow: "Project transformations",
  title: "Coming soon: Artheon project transformations.",
  body: "We're documenting our first projects with full before-and-after imagery, scope notes and material specifications. This space will fill up over the coming months — only with our own completed work.",
  note: "Placeholder pairs shown below. Replace with real before-and-after photography once each project is signed off.",
  pairs: [
    { title: "Project 01", subtitle: "Reading · main bathroom", status: "in delivery" },
    { title: "Project 02", subtitle: "Wokingham · en-suite", status: "scheduled" },
    { title: "Project 03", subtitle: "Bracknell · family bathroom", status: "in planning" },
  ],
};

export const visualTrust = {
  eyebrow: "Working with Artheon",
  title: "What you can expect from us, every project.",
  body: "We won't make claims we can't back up. These are the standards we hold ourselves to from first call through final handover.",
  items: [
    { title: "Clear communication", body: "Plain-language updates at every stage. You always know what's happening next." },
    { title: "Organised process", body: "A structured workflow from consultation to handover. No drifting timelines, no surprises." },
    { title: "Single point of contact", body: "One person leads your project end-to-end. No passing you between sub-trades." },
    { title: "Realistic expectations", body: "Honest scope, honest timelines, honest pricing. If something isn't right, we say so." },
    { title: "Clean site practice", body: "Dust sheets, daily tidy, protected floors. We respect that you live in your home." },
    { title: "2-year workmanship warranty", body: "Backed by separate manufacturer warranties on supplied products. Final wording subject to legal review." },
  ],
};

export const surveyPage = {
  hero: {
    eyebrow: "Survey process",
    headline: "We measure properly before we quote.",
    sub: "Our on-site survey gives us — and you — a clear, accurate picture of the project before any commitment.",
  },
  steps: [
    { n: "01", title: "Consultation", body: "We start with a short calm conversation by phone or video. We confirm your area, project scope, and rough timeline so we can be straight with you about whether we are a fit." },
    { n: "02", title: "Survey booking", body: "If the project looks like a match, we book a survey at a time that suits you. Surveys typically last 45–60 minutes." },
    { n: "03", title: "On-site inspection", body: "Our founder and survey partner attend together. We assess layout, plumbing, electrics, moisture and installation complexity using professional survey equipment." },
    { n: "04", title: "Measurements & documentation", body: "We capture accurate measurements with a Leica laser, thermal imaging where useful, moisture readings, and a full 360° photographic record of the space." },
    { n: "05", title: "Customer discussion", body: "We walk you through what we have found, what is possible, and what we would recommend. We answer questions in plain language — no jargon." },
    { n: "06", title: "Package recommendation", body: "We suggest the package that genuinely fits your project — and explain why. If a project does not fit either package, we say so." },
    { n: "07", title: "Quote preparation", body: "You receive a clear written quote with scope, exclusions, indicative timelines and the payment structure. No pressure, no follow-up calls every 24 hours." },
  ],
  kit: {
    title: "Our survey kit",
    body: "Proper tools make for accurate surveys and fewer surprises later.",
    items: [
      { name: "Leica DISTO D2 Smart", note: "Laser measuring" },
      { name: "HIKMICRO B10", note: "Thermal imaging" },
      { name: "Teslong articulating borescope", note: "Concealed pipework inspection" },
      { name: "Protimeter moisture meter", note: "Moisture readings" },
      { name: "Insta360 X5", note: "Full 360° space capture" },
      { name: "iPad Air", note: "On-site documentation" },
    ],
  },
};

export const aboutPage = {
  hero: {
    eyebrow: "About",
    headline: "A small, organised renovation company built on process.",
    sub: "Artheon LTD was founded to deliver the kind of renovation experience most homeowners say they cannot find: organised, communicative, and finished to a modern standard.",
  },
  story: {
    title: "Why Artheon exists",
    body: "Renovations have a reputation for being chaotic — vague quotes, drifting timelines, unclear communication. We started Artheon to do the opposite. We focus on calm management, in a defined area, with a clear process. Controlled growth and consistent execution matter more to us than scaling fast.",
  },
  principles: [
    { title: "Premium but realistic", body: "We are not a luxury interiors studio. We are a renovation company that takes design and finish seriously." },
    { title: "Organised", body: "Process-driven from first call through final handover." },
    { title: "Transparent", body: "Clear scope, clear pricing, clear timelines — and honest about what we will not take on." },
    { title: "Calm communication", body: "One point of contact. Fast responses where possible. No vague promises." },
  ],
  notYet: {
    title: "Where bathrooms sit in our offer",
    body: "Bathrooms are our deepest product, with two clear packages. Kitchens, interior refurbishments, joinery and full-home renovations are managed under our renovation management service — every one of those projects is handled with the same calm process.",
  },
};

export const areasPage = {
  hero: {
    eyebrow: "Areas covered",
    headline: "Currently serving Reading and selected Berkshire towns.",
    sub: "We deliberately keep our coverage tight. It lets us survey quickly, supervise sites properly, and respond to clients without delay.",
  },
  primary: { title: "Primary area", items: ["Reading"] },
  secondary: {
    title: "Secondary areas",
    note: "Selective projects only — by appointment for well-qualified leads.",
    items: ["Wokingham", "Bracknell", "Maidenhead"],
  },
  outside: {
    title: "Outside these areas?",
    body: "Get in touch anyway. If the project is the right fit, we will let you know. If it is not, we will be straight with you.",
  },
  /**
   * Per-area notes for local SEO and homeowner relevance.
   * These are calm, factual notes — not invented claims.
   */
  areaNotes: [
    {
      area: "Reading",
      postcodePrefixes: ["RG1", "RG2", "RG4", "RG5", "RG6", "RG30", "RG31"],
      note: "Our primary area. We typically respond to Reading enquiries the same working day and can usually offer a consultation slot within the same week.",
    },
    {
      area: "Wokingham",
      postcodePrefixes: ["RG40", "RG41"],
      note: "Selective projects only. We respond to qualified Wokingham enquiries within one working day.",
    },
    {
      area: "Bracknell",
      postcodePrefixes: ["RG12", "RG42"],
      note: "Selective projects only. We respond to qualified Bracknell enquiries within one working day.",
    },
    {
      area: "Maidenhead",
      postcodePrefixes: ["SL6"],
      note: "Selective projects only. We respond to qualified Maidenhead enquiries within one working day.",
    },
  ],
};

export const consultationPage = {
  hero: {
    eyebrow: "Book a consultation",
    headline: "Tell us about your project.",
    sub: "A short, calm conversation — not a sales call. We'll listen, ask a few useful questions, and suggest the right next step.",
  },
  expectations: [
    "30 minutes by phone or video",
    "No pre-work required",
    "A short written summary afterwards",
    "No follow-up unless you ask for one",
  ],
};

export const faqs = [
  { q: "What areas do you cover?", a: "Our primary area is Reading. We take selective projects in Wokingham, Bracknell and Maidenhead. If you are nearby, ask — we will be straight with you about whether we are a fit." },
  { q: "What is the minimum project value?", a: "Pricing is confirmed after consultation and survey, based on scope, specification and project complexity. We are transparent about what we can and cannot take on." },
  { q: "What happens in a consultation?", a: "A 30-minute conversation by phone or video. We listen first, ask a few useful questions, and recommend a next step — a survey, a different specialist, or more thinking time. No sales pressure." },
  { q: "How does the survey work?", a: "We attend on site for around 45–60 minutes, measure the space accurately, inspect plumbing, electrics and moisture, and discuss what is realistic. After that, we send a written quote." },
  { q: "How long does a renovation take?", a: "Most bathroom projects take a number of weeks on site, depending on scope and finish level. Kitchens and wider renovations vary. We confirm a realistic timeline at quote stage rather than at first contact." },
  { q: "Do you offer a warranty?", a: "We offer a 2-year workmanship warranty. Supplied products carry their own manufacturer warranties. Final warranty wording is subject to legal review." },
  { q: "How is payment structured?", a: "Payment is staged: booking deposit, materials, first fix, second fix and tiling, and a final payment on completion. Exact percentages are confirmed at quote stage." },
];
