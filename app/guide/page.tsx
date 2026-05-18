import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LeadMagnet from "@/components/LeadMagnet";
import Section from "@/components/Section";
import Container from "@/components/Container";
import CTABand from "@/components/CTABand";
import { leadMagnet } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Reading Homeowner's Renovation Guide",
  description:
    "A free 12-page guide on planning a renovation properly — written for Reading homeowners, not for contractors.",
};

export default function GuidePage() {
  return (
    <>
      <Hero
        eyebrow={leadMagnet.eyebrow}
        headline={leadMagnet.title}
        sub={leadMagnet.subtitle}
        size="compact"
      />

      <LeadMagnet {...leadMagnet} source="guide-page" />

      <Section tone="canvas" size="compact">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-500 mb-4">
              <span className="brass-dot mr-2 align-middle" aria-hidden />
              What&rsquo;s inside
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tighter2 text-stone-900">
              Practical, calm, and written for homeowners.
            </h2>
            <p className="mt-5 text-stone-600 leading-relaxed">
              The guide is plain English. It is not a brochure for Artheon — it
              is a working document you can use with any renovation company,
              including ones we never speak to. We&rsquo;d rather you make a
              good decision than chase a quick lead.
            </p>
          </div>
        </Container>
      </Section>

      <CTABand
        title="Prefer to talk it through?"
        body="Book a 30-minute consultation. No sales pressure, no follow-up calls unless you ask for one."
        cta={{ label: "Book a consultation", href: "/consultation" }}
      />
    </>
  );
}
