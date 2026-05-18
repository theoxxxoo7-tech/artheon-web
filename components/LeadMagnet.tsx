import Container from "./Container";
import Eyebrow from "./Eyebrow";
import GuideForm from "./GuideForm";
import ImagePlaceholder from "./ImagePlaceholder";

type LeadMagnetProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  highlights: string[];
  meta: { pages: string; format: string; cost: string; delivery: string };
  formCta: string;
  privacyNote: string;
  successTitle: string;
  successBody: string;
  source?: string;
};

export default function LeadMagnet({
  eyebrow,
  title,
  subtitle,
  body,
  highlights,
  meta,
  formCta,
  privacyNote,
  successTitle,
  successBody,
  source = "homepage-lead-magnet",
}: LeadMagnetProps) {
  return (
    <section className="bg-paper">
      <Container>
        <div className="py-20 sm:py-28 grid gap-12 lg:gap-16 lg:grid-cols-12 lg:items-center">
          {/* Cover visual — placeholder PDF mockup */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <ImagePlaceholder
                tone="warm"
                ratio="3/4"
                label="Replace with real guide cover artwork"
                className="shadow-[0_24px_60px_-30px_rgba(26,26,26,0.5)]"
              />
              <span
                className="absolute -top-2 -left-2 hidden sm:block w-6 h-6 border-l border-t border-brass-500"
                aria-hidden
              />
              <span
                className="absolute -bottom-2 -right-2 hidden sm:block w-6 h-6 border-r border-b border-brass-500"
                aria-hidden
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <Eyebrow withDot className="mb-5">{eyebrow}</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tighter2 leading-[1.08] text-stone-900">
              {title}
            </h2>
            <p className="mt-5 text-lg text-stone-700 max-w-prose2 leading-relaxed">
              {subtitle}
            </p>
            <p className="mt-5 text-base text-stone-600 max-w-prose2 leading-relaxed">
              {body}
            </p>

            {/* Highlights */}
            <ul className="mt-8 space-y-3 max-w-prose2">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-stone-700">
                  <span className="brass-dot mt-1.5 shrink-0" aria-hidden />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Meta strip */}
            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-stone-200 py-6 max-w-2xl">
              {([
                ["Pages", meta.pages],
                ["Format", meta.format],
                ["Cost", meta.cost],
                ["Delivery", meta.delivery],
              ] as const).map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-stone-500">{k}</dt>
                  <dd className="mt-1 text-sm font-medium text-stone-900">{v}</dd>
                </div>
              ))}
            </dl>

            {/* Form */}
            <div className="mt-10 max-w-xl">
              <GuideForm
                ctaLabel={formCta}
                privacyNote={privacyNote}
                successTitle={successTitle}
                successBody={successBody}
                source={source}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
