import { cn } from "@/lib/cn";

export default function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const widths = {
    narrow: "max-w-3xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  };
  return (
    <div className={cn("mx-auto px-6 sm:px-8 lg:px-12", widths[size], className)}>
      {children}
    </div>
  );
}
