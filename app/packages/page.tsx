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
    "Two clear bathroom renovation packages from Artheon LTD: Essential Refresh from £8,995 and Signature Renovation from £13,995.",
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

      <Section tone="paper" size="compact">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.22em] text-stone-500 mb-4">The minimum</p>
              <h2 className="font-serif text-3xl sm:text-4xl tracking-tighter2 text-stone-900">
                Minimum project value: £8,000
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-stone-600 leading-relaxed max-w-prose2">
                We take on bathroom projects from £8,000 upwards. Below that, we simply cannot deliver the level of finish and project organisation we want our name attached to. We&rsquo;d rather be straight with you than waste your time.
              </p>
            </div>
          </div>
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
