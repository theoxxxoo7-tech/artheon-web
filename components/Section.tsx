import { cn } from "@/lib/cn";

export default function Section({
  children,
  className,
  tone = "canvas",
  size = "default",
  as: As = "section",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "canvas" | "paper" | "dark";
  size?: "default" | "compact" | "spacious";
  as?: keyof JSX.IntrinsicElements;
}) {
  const tones = {
    canvas: "bg-canvas text-stone-900",
    paper: "bg-paper text-stone-900",
    dark: "bg-stone-900 text-canvas",
  };
  const sizes = {
    compact: "py-16 sm:py-20",
    default: "py-20 sm:py-28",
    spacious: "py-24 sm:py-32 lg:py-40",
  };
  return (
    <As className={cn(tones[tone], sizes[size], className)}>
      {children}
    </As>
  );
}
