import Eyebrow from "./Eyebrow";

export default function SectionHeader({
  eyebrow,
  eyebrowDot = false,
  title,
  body,
  align = "left",
  size = "default",
}: {
  eyebrow?: string;
  eyebrowDot?: boolean;
  title: string;
  body?: string;
  align?: "left" | "center";
  size?: "default" | "large";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  const titleSize =
    size === "large"
      ? "text-4xl sm:text-5xl lg:text-6xl"
      : "text-3xl sm:text-4xl lg:text-5xl";
  return (
    <div className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <Eyebrow withDot={eyebrowDot} className="mb-5">
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className={`font-serif ${titleSize} tracking-tighter2 leading-[1.08] text-stone-900`}>
        {title}
      </h2>
      {body && (
        <p className="mt-6 text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl">
          {body}
        </p>
      )}
    </div>
  );
}
