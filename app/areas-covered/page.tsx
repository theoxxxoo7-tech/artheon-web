import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Container from "@/components/Container";
import AreasGrid from "@/components/AreasGrid";
import SectionHeader from "@/components/SectionHeader";
import CTABand from "@/components/CTABand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { areasPage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Areas covered — Reading, Wokingham, Bracknell, Maidenhead",
  description:
    "Artheon LTD covers Reading as a primary area, with selective renovation projects in Wokingham, Bracknell and Maidenhead.",
};

export default function AreasPage() {
  return (
    <>
      <Hero
        eyebrow={areasPage.hero.eyebrow}
        headline={areasPage.hero.headline}
        sub={areasPage.hero.sub}
        primaryCta={{ label: "Book a consultation", href: "/consultation" }}
        secondaryCta={{ label: "Download the guide", href: "/guide" }}
      />

      <Section tone="canvas">
        <Container>
          <AreasGrid
            groups={[
              { title: areasPage.primary.title, items: areasPage.primary.items, emphasis: true },
              { title: areasPage.secondary.title, items: areasPage.secondary.items, note: areasPage.secondary.note },
            ]}
          />
        </Container>
      </Section>

      {/* Per-area notes — local SEO content */}
      <Section tone="paper">
        <Container>
          <div className="mb-12 max-w-3xl">
            <SectionHeader
              eyebrow="By town"
              eyebrowDot
              title="Where we work, and what to expect locally."
              body="Calm, factual notes for each town we serve — no inflated claims."
            />
          </div>
          <div className="grid gap-px bg-stone-200 border border-stone-200 sm:grid-cols-2">
            {areasPage.areaNotes.map((a) => (
              <article key={a.area} className="bg-canvas p-8 sm:p-10">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl sm:text-3xl tracking-tighter2 text-stone-900">
                    {a.area}
                  </h3>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500">
                    {a.postcodePrefixes.join(" · ")}
                  </p>
                </div>
                <p className="mt-4 text-sm text-stone-600 leading-relaxed max-w-prose2">
                  {a.note}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="canvas" size="compact">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <ImagePlaceholder tone="warm" ratio="4/5" label="Replace with map illustration or Reading street photography" />
            </div>
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="Outside our area?"
                eyebrowDot
                title={areasPage.outside.title}
                body={areasPage.outside.body}
              />
              <p className="mt-6 text-stone-600 leading-relaxed max-w-prose2">
                We deliberately keep our coverage tight so we can keep standards high — quick site visits, hands-on supervision, fast replies to clients. We&rsquo;d rather decline a job we cannot deliver well than over-stretch ourselves.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTABand
        title="Tell us where you are."
        body="If we cover your area, we'll book a consultation. If we don't, we'll say so plainly."
        cta={{ label: "Book a consultation", href: "/consultation" }}
        secondaryCta={{ label: "Download the guide", href: "/guide" }}
      />
    </>
  );
}
