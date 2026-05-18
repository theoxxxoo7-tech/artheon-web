import Link from "next/link";
import type { Package } from "@/lib/packages";
import ImagePlaceholder from "./ImagePlaceholder";

export default function PackageCard({
  pkg,
  variant = "default",
}: {
  pkg: Package;
  variant?: "default" | "feature";
}) {
  const isFeature = variant === "feature";
  return (
    <article
      className={[
        "flex flex-col h-full border bg-canvas overflow-hidden transition-colors",
        isFeature
          ? "border-stone-900"
          : "border-stone-200 hover:border-stone-400",
      ].join(" ")}
    >
      {/* Header media — sets the package's atmosphere immediately */}
      <div className="relative">
        <ImagePlaceholder
          tone={pkg.placeholderTone}
          ratio="16/9"
          src={pkg.image}
          alt={`${pkg.name} — example bathroom mood`}
        />
        {isFeature && (
          <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.2em] text-canvas bg-stone-900 px-2.5 py-1.5">
            Most chosen
          </span>
        )}
        <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] text-stone-900 bg-canvas/85 backdrop-blur-sm px-2.5 py-1.5">
          {pkg.tier}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-8 sm:p-10">
        {/* Title + ideal client */}
        <h3 className="font-serif text-3xl sm:text-4xl tracking-tighter2 text-stone-900">
          {pkg.name}
        </h3>
        <p className="mt-2 text-sm text-stone-600 leading-relaxed max-w-prose2">
          {pkg.idealClient}
        </p>

        {/* Pricing placeholder — removed until real pricing is confirmed */}
        <div className="mt-6 pt-6 border-t border-stone-200">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
            Pricing
          </p>
          <p className="mt-2 text-sm text-stone-600 leading-relaxed">
            Pricing is confirmed after consultation and survey, based on scope, specification and project complexity.
          </p>
        </div>

        {/* Feature highlights */}
        <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-stone-200 py-6">
          {pkg.highlights.map((h) => (
            <div key={h.label}>
              <dt className="text-[10px] uppercase tracking-[0.18em] text-stone-500">
                {h.label}
              </dt>
              <dd className="mt-1.5 text-sm font-medium text-stone-900 leading-snug">
                {h.note}
              </dd>
            </div>
          ))}
        </dl>

        {/* Mood swatches */}
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
            Palette direction
          </p>
          <div className="mt-3 flex items-center gap-2">
            {pkg.moodSwatches.map((s) => (
              <span
                key={s.hex}
                title={s.label}
                className="block w-8 h-8 sm:w-9 sm:h-9 border border-stone-200"
                style={{ backgroundColor: s.hex }}
                aria-label={`${s.label} swatch`}
              />
            ))}
          </div>
        </div>

        {/* Scope */}
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
            Typical scope
          </p>
          <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-stone-700">
            {pkg.scope.map((s) => (
              <li key={s} className="flex gap-2">
                <span className="brass-dot mt-1.5 shrink-0" aria-hidden />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Upgrades */}
        {pkg.upgrades && (
          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
              Upgrade options
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {pkg.upgrades.map((u) => (
                <li
                  key={u}
                  className="text-xs text-stone-700 border border-stone-200 px-2.5 py-1 rounded-sm"
                >
                  {u}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Style direction */}
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
            Style direction
          </p>
          <p className="mt-3 text-sm text-stone-700">
            {pkg.styleDirection.join(" · ")}
          </p>
        </div>

        {/* Exclusions */}
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.18em] text-stone-500">
            Not included
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-stone-500">
            {pkg.exclusions.map((e) => (
              <li key={e}>· {e}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-auto pt-10">
          <Link
            href={{ pathname: "/contact", query: { package: pkg.slug } }}
            className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-700 transition-colors"
          >
            <span className="border-b border-stone-900 pb-0.5">
              Request survey for {pkg.name}
            </span>
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
