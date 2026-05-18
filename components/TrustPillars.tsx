type Pillar = { title: string; body: string };

export default function TrustPillars({ items }: { items: Pillar[] }) {
  return (
    <div className="grid gap-px bg-stone-200 border border-stone-200 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((p, i) => (
        <div key={p.title} className="bg-canvas p-8 sm:p-10">
          <div className="flex items-center gap-3">
            <span className="brass-dot" aria-hidden />
            <p className="font-serif text-2xl sm:text-3xl text-stone-200 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </p>
          </div>
          <h3 className="mt-4 font-serif text-xl tracking-tightish text-stone-900">
            {p.title}
          </h3>
          <p className="mt-3 text-sm text-stone-600 leading-relaxed">{p.body}</p>
        </div>
      ))}
    </div>
  );
}
