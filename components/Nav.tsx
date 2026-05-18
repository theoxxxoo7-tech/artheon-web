"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/site";
import Logo from "./Logo";
import { cn } from "@/lib/cn";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-canvas/85 backdrop-blur-md border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-stone-700 hover:text-stone-900 transition-colors tracking-tightish"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/guide"
              className="hidden lg:inline-flex items-center px-3 py-2 text-sm font-medium text-stone-900 hover:text-stone-700 tracking-tightish"
            >
              Free guide
            </Link>
            <Link
              href="/consultation"
              className="inline-flex items-center px-4 py-2 text-sm font-medium tracking-tightish bg-stone-900 text-canvas hover:bg-stone-700 transition-colors rounded-sm"
            >
              Book consultation
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-stone-900"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1.5">
              <span className={cn("block h-px w-6 bg-current transition-transform", open && "translate-y-[7px] rotate-45")} />
              <span className={cn("block h-px w-6 bg-current transition-opacity", open && "opacity-0")} />
              <span className={cn("block h-px w-6 bg-current transition-transform", open && "-translate-y-[7px] -rotate-45")} />
            </div>
          </button>
        </div>

        {/* Mobile panel */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-[max-height] duration-300",
            open ? "max-h-[32rem]" : "max-h-0"
          )}
        >
          <nav className="py-4 space-y-1 border-t border-stone-200" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-3 text-base text-stone-800 hover:text-stone-900 hover:bg-stone-50/60 rounded"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3 px-2">
              <Link
                href="/guide"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-stone-900 border border-stone-300 rounded-sm"
              >
                Free guide
              </Link>
              <Link
                href="/consultation"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium bg-stone-900 text-canvas rounded-sm"
              >
                Book consultation
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
