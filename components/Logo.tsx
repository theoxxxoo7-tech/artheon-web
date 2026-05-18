import Link from "next/link";

/**
 * Wordmark logo with a subtle brass underline tick.
 * Replace with finalised SVG when brand assets are ready.
 */
export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "text-stone-900" : "text-canvas";
  return (
    <Link href="/" className={`group inline-flex items-baseline gap-2 ${color}`}>
      <span className="relative font-serif text-2xl tracking-tighter2">
        Artheon
        <span
          className="absolute -bottom-1 left-0 h-[1.5px] w-3 bg-brass-500 transition-all group-hover:w-full"
          aria-hidden
        />
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 group-hover:text-stone-700 transition-colors">
        LTD
      </span>
    </Link>
  );
}
