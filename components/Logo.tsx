import Link from "next/link";

/**
 * Artheon transparent PNG logo.
 */
export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" className="group inline-flex items-center">
      <img
        src="/images/logo.png"
        alt="Artheon"
        className="h-14 w-auto object-contain"
      />
    </Link>
  );
}
