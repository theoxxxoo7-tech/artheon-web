import Container from "@/components/Container";
import Section from "@/components/Section";
import HomeHero from "@/components/HomeHero";
import CTABand from "@/components/CTABand";
import PackageCard from "@/components/PackageCard";
import SectionHeader from "@/components/SectionHeader";
import FAQ from "@/components/FAQ";
import ProjectSelector from "@/components/ProjectSelector";
import SafePairOfHands from "@/components/SafePairOfHands";
import LeadMagnet from "@/components/LeadMagnet";
import VisualProcess from "@/components/VisualProcess";
import BeforeAfter from "@/components/BeforeAfter";
import VisualTrust from "@/components/VisualTrust";
import DualCTA from "@/components/DualCTA";
import {
  homepage, faqs, projectTypes, safePairOfHands, leadMagnet,
  visualProcess, beforeAfter, visualTrust,
} from "@/lib/content";
import { packages } from "@/lib/packages";

export default function HomePage() {
  return (
    <>
      <HomeHero
        eyebrow={homepage.hero.eyebrow}
        headline={homepage.hero.headline}
        sub={homepage.hero.sub}
        primaryCta={homepage.hero.primaryCta}
        secondaryCta={homepage.hero.secondaryCta}
        image={homepage.hero.image}
      />

      {/* Intro — single, organised point of contact */}
      <Section tone="canvas" size="compact">
        <Container>
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow={homepage.intro.eyebrow}
              eyebrowDot
              title={homepage.intro.title}
              body={homepage.intro.body}
              size="large"
            />
          </div>
        </Container>
      </Section>

      {/* Project selector — start of the funnel */}
      <Section tone="paper">
        <Container size="wide">
          <div className="mb-12 max-w-3xl">
            <SectionHeader
              eyebrow={projectTypes.eyebrow}
              eyebrowDot
              title={projectTypes.title}
              body={projectTypes.body}
            />
          </div>
          <ProjectSelector items={[...projectTypes.items]} idAnchor="projects" />
        </Container>
      </Section>

      {/* Bathroom packages — depth on the primary product */}
      <Section tone="canvas">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeader
              eyebrow="Bathroom packages"
              eyebrowDot
              title="Two bathroom packages. Clear scope."
              body="Both packages cover a full bathroom renovation. The difference is finish level, scope of upgrades, and design depth."
            />
            <a href="/packages"
              className="text-sm font-medium text-stone-900 hover:text-stone-700 underline underline-offset-4 decoration-stone-300 hover:decoration-brass-500 transition-colors">
              See full package details →
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 items-stretch">
            {packages.map((p, i) => (
              <PackageCard key={p.slug} pkg={p} variant={i === 1 ? "feature" : "default"} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Safe pair of hands — central trust positioning */}
      <SafePairOfHands {...safePairOfHands} />

      {/* Visual survey/consultation process */}
      <Section tone="paper">
        <Container size="wide">
          <div className="mb-12 max-w-3xl">
            <SectionHeader
              eyebrow={visualProcess.eyebrow}
              eyebrowDot
              title={visualProcess.title}
              body={visualProcess.body}
            />
          </div>
          <VisualProcess steps={visualProcess.steps} />
          <div className="mt-10">
            <a href="/survey-process"
              className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-700">
              <span className="border-b border-stone-900 pb-0.5">See the full survey process</span>
              <span aria-hidden>→</span>
            </a>
          </div>
        </Container>
      </Section>

      {/* Lead magnet — the renovation guide */}
      <LeadMagnet {...leadMagnet} source="homepage" />

      {/* Before / After placeholder */}
      <Section tone="canvas">
        <Container>
          <div className="mb-12 max-w-3xl">
            <SectionHeader
              eyebrow={beforeAfter.eyebrow}
              eyebrowDot
              title={beforeAfter.title}
              body={beforeAfter.body}
            />
          </div>
          <BeforeAfter pairs={beforeAfter.pairs} />
          <p className="mt-10 text-xs text-stone-500 max-w-prose2 tracking-tightish">
            {beforeAfter.note}
          </p>
        </Container>
      </Section>

      {/* Visual trust — 6 standards */}
      <Section tone="paper">
        <Container>
          <div className="mb-12 max-w-3xl">
            <SectionHeader
              eyebrow={visualTrust.eyebrow}
              eyebrowDot
              title={visualTrust.title}
              body={visualTrust.body}
            />
          </div>
          <VisualTrust items={visualTrust.items} />
        </Container>
      </Section>

      {/* FAQ */}
      <Section tone="canvas" size="compact">
        <Container>
          <SectionHeader
            eyebrow="Frequently asked"
            title="What homeowners usually ask first."
          />
          <div className="mt-12">
            <FAQ items={faqs.slice(0, 5)} />
          </div>
        </Container>
      </Section>

      <CTABand
        title={homepage.closing.title}
        body={homepage.closing.body}
        cta={homepage.closing.cta}
      />
    </>
  );
}
