import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-900 text-canvas">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl tracking-tighter2">Artheon</p>
            <div className="mt-3 h-px w-10 bg-brass-500" aria-hidden />
            <p className="mt-5 max-w-prose2 text-stone-200/80 text-sm leading-relaxed">
              Premium bathroom renovations across Reading and Berkshire.
              Organised projects, modern design, calm delivery.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-300/70 mb-4">Site</p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-stone-200/90 hover:text-canvas transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-300/70 mb-4">Get in touch</p>
            <ul className="space-y-2 text-sm text-stone-200/90">
              <li><a href={site.contact.emailHref} className="hover:text-canvas">{site.contact.email}</a></li>
              {site.contact.phone && (
                <li><a href={site.contact.phoneHref} className="hover:text-canvas">{site.contact.phone}</a></li>
              )}
              <li className="pt-2">{site.contact.address.city}, {site.contact.address.county}</li>
              <li className="text-stone-300/70">{site.contact.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-700/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-stone-300/70">
          <p>
            &copy; {year} {site.legalName}. Registered in England &amp; Wales.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-canvas">Privacy</Link>
            <Link href="/terms" className="hover:text-canvas">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
