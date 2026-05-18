import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * The Artheon dual CTA system used throughout the site:
 *   - Primary: commitment-led action ("Book a consultation")
 *   - Secondary: low-commitment soft entry ("Download the renovation guide")
 *
 * The pair lets serious leads commit and curious browsers self-qualify,
 * without the secondary cannibalising the primary.
 */
export default function DualCTA({
  primary = { label: "Book a consultation", href: "/consultation" },
  secondary = { label: "Download the renovation guide", href: "/guide" },
  size = "md",
  align = "start",
  variant = "light",
  className,
}: {
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  size?: "md" | "lg";
  align?: "start" | "center";
  variant?: "light" | "dark";
  className?: string;
}) {
  const isDark = variant === "dark";
  const sizing = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";
  const primaryCls = isDark
    ? "bg-canvas text-stone-900 hover:bg-paper"
    : "bg-stone-900 text-canvas hover:bg-stone-700";
  const secondaryCls = isDark
    ? "text-canvas border border-canvas/40 hover:border-canvas"
    : "text-stone-900 border border-stone-300 hover:border-stone-900";

  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-4",
        align === "center" && "justify-center",
        className
      )}
    >
      <Link
        href={primary.href}
        className={cn(
          "inline-flex items-center justify-center font-medium tracking-tightish transition-colors rounded-sm",
          sizing,
          primaryCls,
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
          isDark
            ? "focus-visible:outline-canvas"
            : "focus-visible:outline-stone-900"
        )}
      >
        {primary.label}
      </Link>
      <Link
        href={secondary.href}
        className={cn(
          "inline-flex items-center gap-2 font-medium tracking-tightish transition-colors rounded-sm bg-transparent",
          sizing,
          secondaryCls,
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
          isDark
            ? "focus-visible:outline-canvas"
            : "focus-visible:outline-stone-900"
        )}
      >
        <span>{secondary.label}</span>
        <span aria-hidden className="text-brass-500">↓</span>
      </Link>
    </div>
  );
}
