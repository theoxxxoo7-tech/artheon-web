import Container from "./Container";
import Eyebrow from "./Eyebrow";
import ImagePlaceholder from "./ImagePlaceholder";

type Pillar = { title: string; body: string };

/**
 * The "safe pair of hands" trust section — the central message of V2's
 * renovation-management positioning. Image on the left, pillar list on
 * the right. Calm, editorial, no fake claims.
 */
export default function SafePairOfHands({
  eyebrow,
  title,
  body,
  pillars,
}: {
  eyebrow: string;
  title: string;
  body: string;
  pillars: Pillar[];
}) {
  return (
    <section className="bg-canvas">
      <Container>
        <div className="py-20 sm:py-28 grid gap-12 lg:gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ImagePlaceholder
              tone="dark"
              ratio="4/5"
              label="Replace with real on-site Artheon photography"
              className="lg:sticky lg:top-24"
            />
          </div>

          <div className="lg:col-span-7">
            <Eyebrow withDot className="mb-5">{eyebrow}</Eyebrow>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tighter2 leading-[1.08] text-stone-900">
              {title}
            </h2>
            <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed max-w-prose2">
              {body}
            </p>

            <ol className="mt-12 grid gap-px bg-stone-200 border border-stone-200 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <li key={p.title} className="bg-canvas p-6 sm:p-8">
                  <div className="flex items-baseline gap-3">
                    <span className="brass-dot translate-y-[-2px]" aria-hidden />
                    <span className="font-serif text-sm text-stone-400 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-3 font-serif text-lg sm:text-xl tracking-tightish text-stone-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                    {p.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
