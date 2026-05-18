import ImagePlaceholder from "./ImagePlaceholder";

export type BeforeAfterPair = {
  title: string;
  subtitle: string;
  status: string;
};

/**
 * Before/After placeholder grid. Each pair is intentionally blank
 * until real Artheon project photography is signed off.
 */
export default function BeforeAfter({ pairs }: { pairs: BeforeAfterPair[] }) {
  return (
    <div className="space-y-10 sm:space-y-12">
      {pairs.map((p) => (
        <article
          key={p.title}
          className="border border-stone-200 bg-canvas p-4 sm:p-6"
        >
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            <div className="relative">
              <ImagePlaceholder
                tone="stone"
                ratio="3/2"
                label="BEFORE — replace with real Artheon photography"
              />
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.25em] text-stone-900 bg-canvas/90 px-2.5 py-1.5">
                Before
              </span>
            </div>
            <div className="relative">
              <ImagePlaceholder
                tone="warm"
                ratio="3/2"
                label="AFTER — replace with real Artheon photography"
              />
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.25em] text-canvas bg-stone-900 px-2.5 py-1.5">
                After
              </span>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 flex flex-wrap items-baseline justify-between gap-3 px-1">
            <div>
              <p className="font-serif text-xl tracking-tightish text-stone-900">
                {p.title}
              </p>
              <p className="text-sm text-stone-500">{p.subtitle}</p>
            </div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500">
              <span className="brass-dot mr-2 align-middle" aria-hidden />
              {p.status}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
