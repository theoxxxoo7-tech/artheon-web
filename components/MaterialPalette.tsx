import ImagePlaceholder, { type PlaceholderTone } from "./ImagePlaceholder";

export type MaterialItem = {
  title: string;
  body: string;
  tone: PlaceholderTone;
  image?: string;
};

/**
 * Editorial moodboard grid: the materials, fittings and finishes
 * that go into an Artheon bathroom. Each tile is a placeholder until
 * real photography is supplied — labels make this explicit.
 */
export default function MaterialPalette({ items }: { items: MaterialItem[] }) {
  return (
    <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((m, i) => (
        <figure
          key={m.title}
          className="group flex flex-col"
        >
          <div className="relative">
            <ImagePlaceholder
              tone={m.tone}
              ratio="3/4"
              src={m.image}
              alt={m.title}
              label="Replace with real Artheon project image"
            />
            <span
              className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.22em] text-stone-700/70 bg-canvas/80 backdrop-blur-sm px-2 py-1"
              aria-hidden
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <figcaption className="mt-4">
            <p className="font-serif text-lg tracking-tightish text-stone-900">
              {m.title}
            </p>
            <p className="mt-1.5 text-sm text-stone-600 leading-relaxed">
              {m.body}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
