import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Container from "@/components/Container";
import ConsultationForm from "@/components/form/ConsultationForm";
import { consultationPage, consultationPositioning, projectTypes } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a consultation",
  description:
    "Tell us about your renovation project. A 30-minute consultation by phone or video — calm, useful, and never a sales call.",
};

export default function ConsultationPageRoute({
  searchParams,
}: {
  searchParams?: { projectType?: string };
}) {
  const validProjectType =
    searchParams?.projectType &&
    projectTypes.items.find((p) => p.slug === searchParams.projectType)
      ? searchParams.projectType
      : undefined;

  return (
    <>
      <Hero
        eyebrow={consultationPage.hero.eyebrow}
        headline={consultationPage.hero.headline}
        sub={consultationPage.hero.sub}
        size="compact"
      />

      {/* Expectations strip */}
      <section className="bg-paper border-b border-stone-200">
        <Container>
          <div className="py-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {consultationPage.expectations.map((e) => (
              <p key={e} className="text-sm text-stone-700 leading-snug border-l border-brass-500/60 pl-4">
                {e}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <Section tone="canvas">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-8">
              <ConsultationForm defaultProjectType={validProjectType} />
            </div>

            {/* Sidebar — what is a consultation */}
            <aside className="lg:col-span-4 lg:pl-8 lg:border-l lg:border-stone-200">
              <p className="text-xs uppercase tracking-[0.22em] text-stone-500 mb-4">
                <span className="brass-dot mr-2 align-middle" aria-hidden />
                {consultationPositioning.eyebrow}
              </p>
              <h2 className="font-serif text-2xl tracking-tighter2 text-stone-900">
                {consultationPositioning.title}
              </h2>
              <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                {consultationPositioning.body}
              </p>

              <ol className="mt-8 space-y-5">
                {consultationPositioning.stages.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-serif text-lg text-brass-500 tabular-nums shrink-0 w-7">
                      {s.n}
                    </span>
                    <div>
                      <p className="font-serif text-base tracking-tightish text-stone-900">
                        {s.title}
                      </p>
                      <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <hr className="my-10 border-stone-200" />

              <p className="text-xs uppercase tracking-[0.22em] text-stone-500 mb-4">Other ways to reach us</p>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-stone-500">Email</p>
                  <a href={site.contact.emailHref} className="font-medium text-stone-900 hover:text-stone-700">
                    {site.contact.email}
                  </a>
                </div>
                {site.contact.phone && (
                  <div>
                    <p className="text-stone-500">Phone</p>
                    <a href={site.contact.phoneHref} className="font-medium text-stone-900 hover:text-stone-700">
                      {site.contact.phone}
                    </a>
                  </div>
                )}
                <div>
                  <p className="text-stone-500">Office hours</p>
                  <p className="text-stone-800">{site.contact.hours}</p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
