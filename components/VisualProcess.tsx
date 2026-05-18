import ImagePlaceholder, { type PlaceholderTone } from "./ImagePlaceholder";

export type VisualStep = {
  n: string;
  title: string;
  body: string;
  tone: PlaceholderTone;
  image?: string;
};

/**
 * Five-step visual survey strip used on the homepage.
 * Detailed seven-step breakdown lives on /survey-process.
 */
export default function VisualProcess({ steps }: { steps: VisualStep[] }) {
  return (
    <ol className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s) => (
        <li key={s.n} className="flex flex-col">
          <ImagePlaceholder
            tone={s.tone}
            ratio="3/4"
            src={s.image}
            alt={`${s.title} — survey stage placeholder`}
          />
          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-serif text-xl text-brass-500 tabular-nums">
              {s.n}
            </span>
            <h3 className="font-serif text-xl tracking-tightish text-stone-900">
              {s.title}
            </h3>
          </div>
          <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">
            {s.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
