import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center font-medium tracking-tightish transition-colors duration-150 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900";

const variants: Record<Variant, string> = {
  primary:
    "bg-stone-900 text-canvas hover:bg-stone-700",
  secondary:
    "bg-transparent text-stone-900 border border-stone-300 hover:border-stone-900 hover:bg-stone-50/50",
  ghost:
    "bg-transparent text-stone-900 hover:text-stone-700 underline underline-offset-4 decoration-1 decoration-stone-300 hover:decoration-stone-900",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type LinkProps = CommonProps & { href: string };
type BtnProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export default function Button(props: LinkProps | BtnProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const cls = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cls}>
        {children}
      </Link>
    );
  }
  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } =
    props as BtnProps;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
