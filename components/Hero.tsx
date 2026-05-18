import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Button from "./Button";

type HeroProps = {
  eyebrow?: string;
  headline: string;
  sub?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tone?: "canvas" | "paper";
  size?: "default" | "compact";
};

/**
 * Standard text-only hero used on inner pages.
 * For the homepage and other media-led heroes, use <HomeHero />.
 */
export default function Hero({
  eyebrow,
  headline,
  sub,
  primaryCta,
  secondaryCta,
  tone = "canvas",
  size = "default",
}: HeroProps) {
  const bg = tone === "paper" ? "bg-paper" : "bg-canvas";
  const py =
    size === "compact"
      ? "pt-20 pb-16 sm:pt-28 sm:pb-20"
      : "pt-24 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36";

  return (
    <section className={`${bg} ${py} border-b border-stone-200/60`}>
      <Container>
        <div className="max-w-4xl">
          {eyebrow && (
            <Eyebrow withDot className="mb-6">
              {eyebrow}
            </Eyebrow>
          )}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tighter2 leading-[1.05] text-stone-900">
            {headline}
          </h1>
          {sub && (
            <p className="mt-6 sm:mt-8 max-w-2xl text-lg sm:text-xl text-stone-600 leading-relaxed">
              {sub}
            </p>
          )}
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {primaryCta && (
                <Button href={primaryCta.href} size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary" size="lg">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
