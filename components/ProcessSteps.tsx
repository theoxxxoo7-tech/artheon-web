export type Step = { n: string; title: string; body: string };

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-px bg-stone-200 border border-stone-200">
      {steps.map((s) => (
        <li
          key={s.n}
          className="bg-canvas grid gap-6 p-8 sm:p-10 sm:grid-cols-12 sm:items-start"
        >
          <div className="sm:col-span-2 flex items-baseline gap-3">
            <span
              className="brass-dot shrink-0 translate-y-[6px]"
              aria-hidden
            />
            <p className="font-serif text-3xl sm:text-4xl tracking-tighter2 text-stone-300">
              {s.n}
            </p>
          </div>
          <div className="sm:col-span-10 max-w-3xl">
            <h3 className="font-serif text-xl sm:text-2xl tracking-tightish text-stone-900">
              {s.title}
            </h3>
            <p className="mt-3 text-stone-600 leading-relaxed">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
