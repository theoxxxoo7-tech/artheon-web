type AreaGroup = {
  title: string;
  items: readonly string[];
  note?: string;
  emphasis?: boolean;
};

export default function AreasGrid({ groups }: { groups: AreaGroup[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {groups.map((g) => (
        <div
          key={g.title}
          className={[
            "border p-8 sm:p-10",
            g.emphasis ? "border-stone-900 bg-paper" : "border-stone-200 bg-canvas",
          ].join(" ")}
        >
          <div className="flex items-center gap-3 mb-5">
            {g.emphasis && <span className="brass-dot" aria-hidden />}
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
              {g.title}
            </p>
          </div>
          <ul className="space-y-2 font-serif text-2xl sm:text-3xl tracking-tighter2 text-stone-900">
            {g.items.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          {g.note && (
            <p className="mt-6 text-sm text-stone-600 leading-relaxed">{g.note}</p>
          )}
        </div>
      ))}
    </div>
  );
}
