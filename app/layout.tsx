import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import StructuredData from "@/components/StructuredData";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} · Premium renovation management in Reading`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.legalName} · Premium renovation management in Reading`,
    description: site.description,
    url: site.url,
    siteName: site.legalName,
    locale: "en_GB",
    type: "website",
    images: [
      { url: "/images/bathroom-hero.jpg", width: 1600, height: 2000, alt: site.legalName },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.legalName,
    description: site.description,
    images: ["/images/bathroom-hero.jpg"],
  },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "GB-RDG",
    "geo.placename": site.contact.address.city,
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    "ICBM": `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <a href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-stone-900 focus:text-canvas focus:px-4 focus:py-2 focus:rounded">
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <StickyCTA />
        <StructuredData />
      </body>
    </html>
  );
}
