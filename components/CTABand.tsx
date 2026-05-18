import Link from "next/link";
import Container from "./Container";

export default function CTABand({
  title,
  body,
  cta = { label: "Book a consultation", href: "/consultation" },
  secondaryCta,
  tone = "dark",
}: {
  title: string;
  body?: string;
  cta?: { label: string; href: string };
  /** Optional secondary CTA — typically the guide download */
  secondaryCta?: { label: string; href: string };
  tone?: "dark" | "paper";
}) {
  const isDark = tone === "dark";
  return (
    <section className={isDark ? "relative bg-stone-900 text-canvas" : "relative bg-paper text-stone-900"}>
      <div className="absolute inset-x-0 top-0 h-px hairline-y" aria-hidden />
      <Container>
        <div className="py-20 sm:py-28 grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <h2 className={`font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tighter2 leading-[1.1] ${isDark ? "text-canvas" : "text-stone-900"}`}>
              {title}
            </h2>
            {body && (
              <p className={`mt-6 max-w-2xl text-base sm:text-lg leading-relaxed ${isDark ? "text-stone-200/80" : "text-stone-600"}`}>
                {body}
              </p>
            )}
          </div>
          <div className="md:col-span-4 md:justify-self-end flex flex-wrap items-center gap-3">
            <Link
              href={cta.href}
              className={
                isDark
                  ? "inline-flex items-center justify-center px-7 py-4 bg-canvas text-stone-900 hover:bg-paper transition-colors rounded-sm font-medium text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-canvas"
                  : "inline-flex items-center justify-center px-7 py-4 bg-stone-900 text-canvas hover:bg-stone-700 transition-colors rounded-sm font-medium text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
              }
            >
              {cta.label}
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={
                  isDark
                    ? "inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-canvas border border-canvas/40 hover:border-canvas rounded-sm transition-colors"
                    : "inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-stone-900 border border-stone-300 hover:border-stone-900 rounded-sm transition-colors"
                }
              >
                {secondaryCta.label}
                <span aria-hidden className="text-brass-500">↓</span>
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
