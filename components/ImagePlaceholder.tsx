"use client";

import { cn } from "@/lib/cn";

export type PlaceholderTone =
  | "stone"
  | "warm"
  | "dark"
  | "brass"
  | "fluted"
  | "tile"
  | "glow";

const toneClass: Record<PlaceholderTone, string> = {
  stone: "mat-stone",
  warm: "mat-warm",
  dark: "mat-dark",
  brass: "mat-brass",
  fluted: "mat-fluted",
  tile: "mat-tile",
  glow: "mat-glow",
};

const labelToneClass: Record<PlaceholderTone, string> = {
  stone: "text-stone-700/80",
  warm: "text-stone-700/80",
  dark: "text-canvas/80",
  brass: "text-stone-900/80",
  fluted: "text-stone-700/80",
  tile: "text-stone-700/80",
  glow: "text-canvas/85",
};

/**
 * Calm placeholder block standing in for real photography.
 *
 * Pass `src` once real Artheon photography exists — the placeholder texture
 * is then overlaid below the image until the image loads.
 *
 * NOTE: Even with `src` we render `<img>` rather than `next/image` to keep
 * this component dependency-light. Swap to `next/image` once the photo set
 * is finalised and you want responsive optimisation.
 */
export default function ImagePlaceholder({
  ratio = "4/5",
  tone = "stone",
  label,
  caption,
  src,
  alt = "",
  className,
  priority = false,
}: {
  ratio?: "4/5" | "3/4" | "1/1" | "16/9" | "3/2" | "21/9";
  tone?: PlaceholderTone;
  /** Small label inside the block — used to flag placeholders */
  label?: string;
  /** Caption shown beneath the block */
  caption?: string;
  /** When supplied, renders an <img> on top of the placeholder texture */
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={cn("w-full", className)}>
      <div
        className={cn(
          "relative w-full overflow-hidden",
          toneClass[tone]
        )}
        style={{ aspectRatio: ratio }}
        aria-hidden={!label && !alt}
      >
        {src && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              // If the image is missing, leave the placeholder texture visible.
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        )}
        {label && (
          <span
            className={cn(
              "absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.22em]",
              labelToneClass[tone]
            )}
          >
            {label}
          </span>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs text-stone-500 tracking-tightish">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
