import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="py-32 sm:py-40">
      <Container>
        <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Page not found</p>
        <h1 className="mt-4 font-serif text-5xl sm:text-6xl tracking-tighter2 text-stone-900">
          That page doesn&rsquo;t exist.
        </h1>
        <p className="mt-6 text-stone-600 max-w-prose2">
          You may have followed an outdated link. Head back to the homepage or explore our renovation packages.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/" className="inline-flex items-center px-5 py-3 bg-stone-900 text-canvas rounded-sm text-sm font-medium hover:bg-stone-700">
            Back to homepage
          </Link>
          <Link href="/packages" className="inline-flex items-center px-5 py-3 border border-stone-300 text-stone-900 rounded-sm text-sm font-medium hover:border-stone-900">
            View packages
          </Link>
        </div>
      </Container>
    </section>
  );
}
