import Link from "next/link";
import ImagePlaceholder, { type PlaceholderTone } from "./ImagePlaceholder";

export type ProjectType = {
  slug: string;
  name: string;
  summary: string;
  intent: string;
  ctaLabel: string;
  ctaHref: string;
  tone: PlaceholderTone;
  featured?: boolean;
};

/**
 * "What are you planning?" selector — the Refresh-style entry into the
 * consultation funnel. The featured card (bathrooms) spans wider on
 * desktop to acknowledge it as the deepest product.
 */
export default function ProjectSelector({
  items,
  idAnchor = "projects",
}: {
  items: ProjectType[];
  idAnchor?: string;
}) {
  return (
    <div id={idAnchor} className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((p) => (
        <Link
          key={p.slug}
          href={p.ctaHref}
          className={[
            "group relative flex flex-col border bg-canvas overflow-hidden transition-colors",
            p.featured
              ? "border-stone-900"
              : "border-stone-200 hover:border-stone-900",
          ].join(" ")}
        >
          <div className="relative">
            <ImagePlaceholder
              tone={p.tone}
              ratio="3/2"
              label="Replace with real Artheon project image"
            />
            {p.featured && (
              <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.22em] text-stone-900 bg-canvas/85 backdrop-blur-sm px-2.5 py-1.5">
                Primary product
              </span>
            )}
          </div>
          <div className="p-6 sm:p-7 flex flex-col flex-1">
            <p className="text-[10px] uppercase tracking-[0.22em] text-stone-500">
              <span className="brass-dot mr-2 align-middle" aria-hidden />
              {p.intent}
            </p>
            <h3 className="mt-3 font-serif text-2xl sm:text-[1.7rem] tracking-tighter2 text-stone-900 leading-snug">
              {p.name}
            </h3>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed max-w-prose2">
              {p.summary}
            </p>
            <p className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-stone-900">
              <span className="border-b border-stone-900 pb-0.5 group-hover:border-brass-500 transition-colors">
                {p.ctaLabel}
              </span>
              <span aria-hidden className="text-brass-500 transition-transform group-hover:translate-x-0.5">→</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
