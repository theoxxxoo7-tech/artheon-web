"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

type FaqItem = { q: string; a: string };

export default function FAQ({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-stone-200 border-y border-stone-200">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              className="w-full text-left py-6 sm:py-7 flex items-start justify-between gap-6 group"
              aria-expanded={isOpen}
              aria-controls={`faq-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-serif text-lg sm:text-xl tracking-tightish text-stone-900 group-hover:text-stone-700 transition-colors">
                {f.q}
              </span>
              <span
                className={cn(
                  "shrink-0 mt-1 inline-flex items-center justify-center w-6 h-6 border border-stone-300 rounded-full text-stone-700 transition-transform",
                  isOpen && "rotate-45 border-brass-500 text-brass-600"
                )}
                aria-hidden
              >
                <svg viewBox="0 0 12 12" width="12" height="12" fill="none">
                  <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </span>
            </button>
            <div
              id={`faq-${i}`}
              role="region"
              className={cn(
                "overflow-hidden transition-[max-height,opacity] duration-300",
                isOpen ? "max-h-96 opacity-100 pb-7" : "max-h-0 opacity-0"
              )}
            >
              <p className="text-stone-600 leading-relaxed max-w-prose2">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
