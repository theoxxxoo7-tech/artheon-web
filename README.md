# Artheon LTD — Website V2

Premium **renovation management** in Reading and Berkshire.

This is V2 of the Artheon site. The brand has broadened from "bathroom
renovations only" to "premium renovation management" — bathrooms remain the
deepest product (with two clear packages), and every other project type
routes through a calm consultation funnel.

---

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — warm neutrals + subtle brass accent
- **`next/font`** — Fraunces (serif) + Inter (sans), self-hosted
- Zero UI libraries, zero animation libraries, no WebGL, no 3D
- Client JS limited to: nav toggle, FAQ, sticky CTA, multi-step form,
  guide form

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

## What V2 added on top of V1

### The funnel
- **Dual-CTA system everywhere** — Primary "Book a consultation" + secondary
  "Download the renovation guide". Used in HomeHero, every page hero, every
  CTABand, the desktop nav, and the mobile sticky CTA.
- **Three-step ConsultationForm** — Name+email → project details → soft
  qualifier. Progress indicator, validated per step, back / next buttons,
  pre-filled from `?projectType=` query param.
- **Lead magnet** — Single-field guide download form on the homepage and on
  a dedicated `/guide` landing page.
- **Project selector** — Eight-card grid covering bathroom, kitchen,
  interior refurbishment, flooring, joinery, roofing, full home, and
  "not sure yet". Bathroom is visually emphasised as the primary product.
  Cards deep-link to `/consultation?projectType=…`.
- **"Safe pair of hands" section** — The central renovation-management
  trust message: comms, coordination, single point of contact, realistic
  expectations, clean site practice, 2-year warranty.
- **Mobile StickyCTA** — Bottom-anchored dual CTA after the first viewport.
  Hidden on `/consultation` and `/guide` to avoid duplication. Desktop
  uses the nav CTAs instead.

### Local SEO
- **`<StructuredData />`** — JSON-LD GeneralContractor schema with full
  NAP, geo coordinates, opening hours, areaServed, and a priced
  OfferCatalog for the bathroom packages.
- **Geo metadata tags** — `geo.region`, `geo.placename`, `geo.position`,
  `ICBM` in `app/layout.tsx`.
- **Per-area mini sections** on `/areas-covered` listing Reading, Wokingham,
  Bracknell and Maidenhead with their postcode prefixes and calm
  factual notes.
- **Updated sitemap** with priorities — homepage > consultation > guide
  > packages > renovations > survey > areas > about.
- **OG + Twitter cards** plus canonical link in the root layout.

### Routes
- **New** `/consultation` — multi-step consultation funnel (replaces
  /contact as the primary lead destination)
- **New** `/guide` — lead-magnet landing page
- **New** `/api/guide` — POST endpoint for guide-download requests
- **Updated** `/api/lead` — now handles consultation, contact and survey
  kinds, plus in-memory rate limiting
- **Redirect** `/contact` → `/consultation` (preserves query string;
  legacy `?package=…` now maps to `projectType=bathroom`)

## Project structure

```
artheon-website/
├── app/
│   ├── layout.tsx                   # +StructuredData, +StickyCTA, geo meta
│   ├── page.tsx                     # V2 homepage flow
│   ├── globals.css
│   ├── consultation/page.tsx        # NEW — 3-step funnel
│   ├── guide/page.tsx               # NEW — lead magnet
│   ├── contact/page.tsx             # NEW — redirects to /consultation
│   ├── bathroom-renovations/page.tsx
│   ├── packages/page.tsx
│   ├── survey-process/page.tsx
│   ├── about/page.tsx
│   ├── areas-covered/page.tsx       # +per-area notes
│   ├── api/lead/route.ts            # consultation + contact + survey
│   ├── api/guide/route.ts           # NEW — guide download
│   ├── sitemap.ts · robots.ts · not-found.tsx
├── components/
│   ├── Nav.tsx                      # dual CTA in header
│   ├── Footer.tsx · Logo.tsx
│   ├── DualCTA.tsx                  # NEW
│   ├── StickyCTA.tsx                # NEW — mobile only
│   ├── ProjectSelector.tsx          # NEW
│   ├── SafePairOfHands.tsx          # NEW
│   ├── LeadMagnet.tsx               # NEW
│   ├── GuideForm.tsx                # NEW
│   ├── StructuredData.tsx           # NEW — JSON-LD
│   ├── HomeHero.tsx                 # now uses DualCTA
│   ├── Hero.tsx · CTABand.tsx       # both gain optional secondary CTA
│   ├── PackageCard.tsx
│   ├── MaterialPalette.tsx · VisualProcess.tsx
│   ├── BeforeAfter.tsx · VisualTrust.tsx
│   ├── TrustPillars.tsx · AreasGrid.tsx
│   ├── ProcessSteps.tsx · FAQ.tsx
│   ├── ImagePlaceholder.tsx · Section.tsx · Container.tsx
│   ├── SectionHeader.tsx · Eyebrow.tsx · Button.tsx
│   └── form/
│       ├── ConsultationForm.tsx     # NEW — 3-step
│       ├── ContactForm.tsx · SurveyRequestForm.tsx (legacy, retained)
│       └── Field.tsx
├── lib/
│   ├── site.ts                      # +geo, broader description, V2 nav
│   ├── packages.ts
│   ├── content.ts                   # +projectTypes, +safePairOfHands,
│   │                                # +leadMagnet, +consultationPositioning,
│   │                                # +consultationPage, +areaNotes
│   └── cn.ts
├── public/
│   ├── images/README.md             # drop project photography here
│   └── guides/README.md             # NEW — drop guide PDF here
├── tailwind.config.ts · next.config.mjs · postcss.config.mjs
├── tsconfig.json · package.json
```

## Homepage flow (V2)

1. **HomeHero** — split visual + dual CTA + inline "From £8,995 · Reading · 1-day reply" strip
2. **Intro** — single, organised point of contact
3. **ProjectSelector** — 8-card grid, deep-links into consultation
4. **Bathroom packages** — depth on the primary product
5. **SafePairOfHands** — renovation management positioning
6. **VisualProcess** — five-step survey overview
7. **LeadMagnet** — renovation guide download
8. **BeforeAfter** — placeholder pairs (clearly marked)
9. **VisualTrust** — six standards we hold ourselves to
10. **FAQ** — top five questions
11. **CTABand** — final book consultation

## Consultation form (3 steps)

```
Step 1 — Your details
  · Full name *
  · Email *

Step 2 — Your project
  · Phone *
  · Postcode / project address *
  · Project type *           (pre-filled from URL when arriving from selector)
  · Estimated timeline *
  · Estimated budget *       (band selector — bands include "below £8,000 (we cannot help)")

Step 3 — How can we help next?
  · Contact preference *     ("Yes, please get in touch" / "Not yet — just researching")
  · Anything else            (optional textarea)
  · Consent *
```

Progress indicator, in-step validation, back/next buttons, calm success state.

## ⚠ Founder approval items (V2)

Carry-forward from V1:
1. Contact details — phone, email, registered address, postcode,
   Companies House #, VAT #, hours (`lib/site.ts`)
2. Final domain — `site.url`
3. Logo — currently a CSS wordmark with brass underline tick
4. Project photography — see `public/images/README.md`
5. Lead delivery channel — `/api/lead` and `/api/guide` log only;
   choose Resend / Postmark / Google Sheet / Notion etc.
6. Privacy & Terms pages — footer links exist; not yet written
7. Warranty wording — final copy needs legal review
8. Payment percentages — kept generic
9. "Most chosen" badge on Signature Renovation
10. Before/After project pairs — placeholder until real projects sign off

**New in V2:**
11. **Guide title** — three options in `lib/content.ts` `leadMagnet.titleOptions`.
    Site currently shows "The Reading Homeowner's Renovation Guide".
12. **Guide PDF** — write and drop into `public/guides/artheon-renovation-guide.pdf`.
    Suggested 12-page structure in `public/guides/README.md`.
13. **Geo coordinates** — `site.geo` currently approximates Reading town centre.
    Replace with the registered address geocode for accurate LocalBusiness schema.
14. **Project type pricing copy** — only bathroom pricing comes from the blueprint.
    All other project types currently say "Consultation-led" / "By appointment".
    Don't add prices for kitchens/joinery/etc until you have data.
15. **Email follow-up sequences** — out of scope for the frontend.
    Wire up your chosen ESP and design the 2–4 email guide sequence + the
    consultation reminder flow as a separate backend exercise.
16. **GeneralContractor JSON-LD** — verify priceRange, knowsAbout list and
    serviceArea radius (currently 25km) reflect actual operating reality.

## What this site deliberately does NOT include

- No fake reviews, testimonials, awards, accreditations or case studies
- No "trusted by hundreds" / "industry-leading" / "X+ years" language
- No completed-project gallery presented as Artheon work
- No CRM, automation engine, live chat, animation library or WebGL
- No prices or timelines beyond what the blueprint sets out
- No urgency tactics, no countdown timers, no exit-intent popups

## Performance & accessibility

- Mobile-first, tested at 320 / 768 / 1280 breakpoints
- Skip-to-content link
- All controls are real `<button>`/`<a>` with focus rings
- Form: keyboard-navigable, progress indicator with `aria-current`, error
  messages with `role="alert"`, controlled radio choices via `aria-pressed`
- FAQ uses `aria-expanded` + `aria-controls`
- StickyCTA respects pointer-events on hidden state
- `prefers-reduced-motion` respected globally
- Fonts via `next/font` with `display: swap`

## Deploy

Vercel detects Next.js automatically. Before launch:
1. Set `site.url` in `lib/site.ts` to the production domain
2. Resolve the founder-approval items above
3. Wire up the `/api/lead` and `/api/guide` delivery channels
