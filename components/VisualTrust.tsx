export type TrustItem = { title: string; body: string };

/**
 * Visual trust grid — six standards we hold ourselves to.
 * Each tile uses a small monoline icon drawn in SVG (no library).
 */
const icons: React.ReactNode[] = [
  // 01 — clear communication (speech bubble + tick)
  (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" key="icon-1">
      <path d="M5 7h22v14H17l-6 5v-5H5z" />
      <path d="M12 14l3 3 6-6" />
    </svg>
  ),
  // 02 — organised process (stacked lines)
  (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" key="icon-2">
      <path d="M7 8h18M7 16h18M7 24h12" />
      <circle cx="4.5" cy="8" r="1" />
      <circle cx="4.5" cy="16" r="1" />
      <circle cx="4.5" cy="24" r="1" />
    </svg>
  ),
  // 03 — single point of contact (person)
  (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" key="icon-3">
      <circle cx="16" cy="12" r="4" />
      <path d="M7 26c1.5-4 5-6 9-6s7.5 2 9 6" />
    </svg>
  ),
  // 04 — realistic expectations (balance scale)
  (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" key="icon-4">
      <path d="M16 6v20M7 26h18" />
      <path d="M16 9l-6 8h12z" />
      <path d="M10 17a3 3 0 0 1-6 0" />
      <path d="M22 17a3 3 0 0 0 6 0" />
    </svg>
  ),
  // 05 — clean site practice (broom + dot)
  (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" key="icon-5">
      <path d="M19 6l7 7" />
      <path d="M9 23l-3 3" />
      <path d="M14 14l-7 7 4 4 7-7z" />
      <path d="M14 14l5-5 4 4-5 5z" />
    </svg>
  ),
  // 06 — warranty (shield)
  (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" key="icon-6">
      <path d="M16 5l9 3v8c0 6-4 9-9 11-5-2-9-5-9-11V8z" />
      <path d="M12 16l3 3 6-6" />
    </svg>
  ),
];

export default function VisualTrust({ items }: { items: TrustItem[] }) {
  return (
    <div className="grid gap-px bg-stone-200 border border-stone-200 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((t, i) => (
        <div
          key={t.title}
          className="bg-canvas p-8 sm:p-10 flex flex-col group"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 sm:w-14 sm:h-14 border border-stone-200 text-stone-800 group-hover:text-brass-600 group-hover:border-brass-300 transition-colors flex items-center justify-center">
              <span className="block w-7 h-7 sm:w-8 sm:h-8">
                {icons[i % icons.length]}
              </span>
            </div>
            <span className="font-serif text-2xl text-stone-200 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mt-6 font-serif text-xl tracking-tightish text-stone-900">
            {t.title}
          </h3>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            {t.body}
          </p>
        </div>
      ))}
    </div>
  );
}
