import Container from "./Container";
import Eyebrow from "./Eyebrow";
import DualCTA from "./DualCTA";

/**
 * Editorial split hero used on the homepage. V2 uses the dual-CTA system:
 *   - Primary: "Book a consultation" (commitment)
 *   - Secondary: "Download the renovation guide" (low-commitment soft entry)
 *
 * On mobile, the visual stacks above the text so the user still gets a
 * strong bathroom-first impression in the first viewport.
 */
export default function HomeHero({
  eyebrow,
  headline,
  sub,
  primaryCta,
  secondaryCta,
}: {
  eyebrow?: string;
  headline: string;
  sub?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative bg-canvas border-b border-stone-200/60 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px hairline-y" aria-hidden />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32">
          {/* Visual — mobile first, desktop right */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="relative">
              <img
                src="/images/hero-main.png"
                alt="Premium modern bathroom interior, warm lighting"
                className="w-full h-auto rounded-sm shadow-[0_30px_60px_-30px_rgba(26,26,26,0.45)]"
                loading="eager"
              />
              <span className="absolute -top-2 -left-2 hidden sm:block w-6 h-6 border-l border-t border-brass-500" aria-hidden />
              <span className="absolute -bottom-2 -right-2 hidden sm:block w-6 h-6 border-r border-b border-brass-500" aria-hidden />
            </div>
          </div>

          {/* Text */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center">
            {eyebrow && (
              <Eyebrow withDot className="mb-6">{eyebrow}</Eyebrow>
            )}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.75rem] tracking-tighter2 leading-[1.02] text-stone-900">
              {headline}
            </h1>
            {sub && (
              <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-stone-600 leading-relaxed">
                {sub}
              </p>
            )}
            <DualCTA
              primary={primaryCta}
              secondary={secondaryCta}
              size="lg"
              className="mt-10"
            />

            {/* Quiet inline data strip */}
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md text-sm">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">Pricing</dt>
                <dd className="mt-1 font-serif text-2xl tracking-tightish text-stone-900">On request</dd>
                <dd className="text-[10px] uppercase tracking-[0.18em] text-stone-400">After consultation</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">Area</dt>
                <dd className="mt-1 font-serif text-2xl tracking-tightish text-stone-900">Reading</dd>
                <dd className="text-[10px] uppercase tracking-[0.18em] text-stone-400">& Berkshire</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-stone-500">Reply</dt>
                <dd className="mt-1 font-serif text-2xl tracking-tightish text-stone-900">1 day</dd>
                <dd className="text-[10px] uppercase tracking-[0.18em] text-stone-400">Working hours</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
