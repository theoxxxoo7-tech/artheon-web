"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

/**
 * Mobile-only sticky bottom CTA. Appears after the user has scrolled past
 * the first viewport so the hero CTA is given a clean first impression.
 *
 * Hidden on the consultation page itself and on the guide page (since both
 * already focus on the same action). Hidden on desktop because the
 * navigation already carries a Book Consultation button.
 */
const HIDDEN_ON: Array<string | RegExp> = [
  "/consultation",
  "/guide",
];

export default function StickyCTA() {
  const pathname = usePathname() ?? "/";
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hidden = HIDDEN_ON.some((p) =>
    typeof p === "string" ? pathname.startsWith(p) : p.test(pathname)
  );
  if (hidden) return null;

  return (
    <div
      className={cn(
        "md:hidden fixed inset-x-0 bottom-0 z-30 transition-transform duration-300 ease-out pointer-events-none",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      aria-hidden={!visible}
    >
      <div className="pointer-events-auto bg-canvas/95 backdrop-blur-md border-t border-stone-200 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link
            href="/guide"
            className="flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-stone-900 border border-stone-300 rounded-sm"
          >
            Free guide
          </Link>
          <Link
            href="/consultation"
            className="flex-1 inline-flex items-center justify-center px-4 py-3 text-sm font-medium bg-stone-900 text-canvas rounded-sm"
          >
            Book consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
