import { cn } from "@/lib/cn";

export default function Eyebrow({
  children,
  tone = "default",
  className,
  withDot = false,
}: {
  children: React.ReactNode;
  tone?: "default" | "muted" | "light";
  className?: string;
  /** Adds a small brass dot before the text — use sparingly on key sections */
  withDot?: boolean;
}) {
  const tones = {
    default: "text-stone-600",
    muted: "text-stone-500",
    light: "text-canvas/70",
  };
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em]",
        tones[tone],
        className
      )}
    >
      {withDot && <span className="brass-dot" aria-hidden />}
      {children}
    </p>
  );
}
