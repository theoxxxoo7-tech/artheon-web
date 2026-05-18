import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import MaterialPalette from "@/components/MaterialPalette";
import { renovationsPage, materialPalette } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bathroom renovations in Reading & Berkshire",
  description:
    "Modern bathroom renovations across Reading, Wokingham, Bracknell and Maidenhead. Structured consultation, clear scope, organised delivery.",
};

export default function RenovationsPage() {
  return (
    <>
      <Hero
        eyebrow={renovationsPage.hero.eyebrow}
        headline={renovationsPage.hero.headline}
        sub={renovationsPage.hero.sub}
        primaryCta={{ label: "Book a consultation", href: "/consultation?projectType=bathroom" }}
        secondaryCta={{ label: "Download the renovation guide", href: "/guide" }}
      />

      <Section tone="canvas" size="compact">
        <Container size="wide">
          <ImagePlaceholder
            tone="dark"
            ratio="21/9"
            label="Replace with real Artheon project image — wide hero"
          />
        </Container>
      </Section>

      <Section tone="canvas">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Approach"
                eyebrowDot
                title={renovationsPage.intro.title}
                body={renovationsPage.intro.body}
                size="large"
              />
            </div>
            <div className="lg:col-span-5">
              <ImagePlaceholder tone="warm" ratio="3/4" label="Replace with real Artheon project image" />
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone-500 mb-5">What we cover</p>
              <h3 className="font-serif text-2xl sm:text-3xl tracking-tighter2 text-stone-900 mb-8">
                Scope of a typical renovation
              </h3>
              <ul className="space-y-3 text-stone-700 max-w-prose2">
                {renovationsPage.scopeIncludes.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="brass-dot mt-1.5 shrink-0" aria-hidden />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-stone-500 mb-5">What we don&rsquo;t cover yet</p>
              <h3 className="font-serif text-2xl sm:text-3xl tracking-tighter2 text-stone-900 mb-8">
                Out of current scope
              </h3>
              <ul className="space-y-3 text-stone-500 max-w-prose2">
                {renovationsPage.scopeExcludes.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="text-stone-300 mt-1.5">·</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-stone-500 max-w-prose2">
                Some items are consultation-led rather than packaged.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="canvas">
        <Container size="wide">
          <div className="mb-12 max-w-3xl">
            <SectionHeader
              eyebrow={materialPalette.eyebrow}
              eyebrowDot
              title={materialPalette.title}
              body={materialPalette.body}
            />
          </div>
          <MaterialPalette items={materialPalette.items} />
          <p className="mt-10 text-xs text-stone-500 max-w-prose2 tracking-tightish">{materialPalette.note}</p>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <ImagePlaceholder tone="glow" ratio="4/5" label="Replace with real Artheon project image — LED niche / lighting" />
            </div>
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Design direction"
                eyebrowDot
                title={renovationsPage.styleNotes.title}
                body={renovationsPage.styleNotes.body}
              />
            </div>
          </div>
        </Container>
      </Section>

      <CTABand
        title="Ready to renovate properly?"
        body="Tell us about your project. We'll book a consultation and, if it fits, a survey."
        cta={{ label: "Book a consultation", href: "/consultation?projectType=bathroom" }}
        secondaryCta={{ label: "Download the guide", href: "/guide" }}
      />
    </>
  );
}
