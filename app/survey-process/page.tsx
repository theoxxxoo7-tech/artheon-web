import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Container from "@/components/Container";
import ProcessSteps from "@/components/ProcessSteps";
import VisualProcess from "@/components/VisualProcess";
import SectionHeader from "@/components/SectionHeader";
import CTABand from "@/components/CTABand";
import { surveyPage, visualProcess } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our consultation & survey process",
  description:
    "From consultation to written quote — the full Artheon process. Calm, structured, and used on every project in Reading and Berkshire.",
};

export default function SurveyProcessPage() {
  return (
    <>
      <Hero
        eyebrow={surveyPage.hero.eyebrow}
        headline={surveyPage.hero.headline}
        sub={surveyPage.hero.sub}
        primaryCta={{ label: "Book a consultation", href: "/consultation" }}
        secondaryCta={{ label: "Download the guide", href: "/guide" }}
      />

      <Section tone="canvas">
        <Container size="wide">
          <div className="mb-12 max-w-3xl">
            <SectionHeader
              eyebrow="At a glance"
              eyebrowDot
              title="Five stages, calmly delivered."
              body="A short visual overview before the detailed breakdown below."
            />
          </div>
          <VisualProcess steps={visualProcess.steps} />
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <div className="mb-12 max-w-3xl">
            <SectionHeader
              eyebrow="The full process"
              eyebrowDot
              title="From first conversation to written quote."
            />
          </div>
          <ProcessSteps steps={surveyPage.steps} />
        </Container>
      </Section>

      <Section tone="canvas">
        <Container>
          <SectionHeader
            eyebrow="Survey kit"
            eyebrowDot
            title={surveyPage.kit.title}
            body={surveyPage.kit.body}
          />
          <div className="mt-12 grid gap-px bg-stone-200 border border-stone-200 sm:grid-cols-2 lg:grid-cols-3">
            {surveyPage.kit.items.map((k) => (
              <div key={k.name} className="bg-canvas p-8 sm:p-10">
                <p className="font-serif text-xl tracking-tightish text-stone-900">{k.name}</p>
                <p className="mt-2 text-sm text-stone-600">{k.note}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand
        title="Start with a calm conversation."
        body="A consultation takes 30 minutes. We'll listen first, then suggest the right next step."
        cta={{ label: "Book a consultation", href: "/consultation" }}
        secondaryCta={{ label: "Download the guide", href: "/guide" }}
      />
    </>
  );
}
