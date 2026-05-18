import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Container from "@/components/Container";
import PackageCard from "@/components/PackageCard";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
import VisualTrust from "@/components/VisualTrust";
import SectionHeader from "@/components/SectionHeader";
import { packagesPage, faqs, visualTrust } from "@/lib/content";
import { packages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Bathroom renovation packages",
  description:
    "Two clear bathroom renovation packages from Artheon LTD. Pricing is confirmed after consultation and survey, based on scope, specification and project complexity.",
};

export default function PackagesPage() {
  return (
    <>
      <Hero
        eyebrow={packagesPage.hero.eyebrow}
        headline={packagesPage.hero.headline}
        sub={packagesPage.hero.sub}
        primaryCta={{ label: "Book a consultation", href: "/consultation?projectType=bathroom" }}
        secondaryCta={{ label: "Download the guide", href: "/guide" }}
      />

      <Section tone="canvas">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 items-stretch">
            {packages.map((p, i) => (
              <PackageCard key={p.slug} pkg={p} variant={i === 1 ? "feature" : "default"} />
            ))}
          </div>
          <p className="mt-12 max-w-prose2 text-sm text-stone-500 leading-relaxed">{packagesPage.note}</p>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container>
          <div className="mb-12 max-w-3xl">
            <SectionHeader
              eyebrow={visualTrust.eyebrow}
              eyebrowDot
              title="The standards behind every package."
              body="Two packages, one consistent way of working."
            />
          </div>
          <VisualTrust items={visualTrust.items} />
        </Container>
      </Section>

      <Section tone="paper" size="compact">
        <Container>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tighter2 text-stone-900 max-w-2xl mb-12">
            Common questions about our packages.
          </h2>
          <FAQ items={faqs} />
        </Container>
      </Section>

      <CTABand
        title="Not sure which package fits?"
        body="Book a consultation. We'll recommend the package that genuinely fits — or tell you honestly if neither does."
        cta={{ label: "Book a consultation", href: "/consultation?projectType=bathroom" }}
        secondaryCta={{ label: "Download the guide", href: "/guide" }}
      />
    </>
  );
}
