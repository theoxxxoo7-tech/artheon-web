import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import VisualTrust from "@/components/VisualTrust";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { aboutPage, visualTrust } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Artheon LTD",
  description:
    "A small, organised renovation management company in Reading, focused on premium delivery and a calm customer experience.",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow={aboutPage.hero.eyebrow}
        headline={aboutPage.hero.headline}
        sub={aboutPage.hero.sub}
        primaryCta={{ label: "Book a consultation", href: "/consultation" }}
        secondaryCta={{ label: "Download the guide", href: "/guide" }}
      />

      <Section tone="canvas">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Why we exist"
                eyebrowDot
                title={aboutPage.story.title}
                body={aboutPage.story.body}
                size="large"
              />
            </div>
            <div className="lg:col-span-5">
              <ImagePlaceholder tone="stone" ratio="3/4" />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" size="compact">
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

      <Section tone="canvas">
        <Container>
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow="Where bathrooms sit"
              eyebrowDot
              title={aboutPage.notYet.title}
              body={aboutPage.notYet.body}
            />
          </div>
        </Container>
      </Section>

      <CTABand
        title="Working with us starts with one conversation."
        body="Book a consultation. We'll be straight with you about whether we're a fit."
        cta={{ label: "Book a consultation", href: "/consultation" }}
        secondaryCta={{ label: "Download the guide", href: "/guide" }}
      />
    </>
  );
}
