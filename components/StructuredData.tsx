import { site } from "@/lib/site";

/**
 * LocalBusiness JSON-LD for Reading-area SEO.
 * Rendered in the root layout. Values pull from lib/site.ts so a single
 * source of truth controls both visible UI and structured data.
 */
export default function StructuredData() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${site.url}#organization`,
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    image: `${site.url}/images/bathroom-hero.jpg`,
    logo: `${site.url}/images/logo.png`,
    priceRange: "£££",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.contact.address.line1,
      addressLocality: site.contact.address.city,
      addressRegion: site.contact.address.county,
      postalCode: site.contact.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: site.primaryArea },
      ...site.secondaryAreas.map((a) => ({ "@type": "City", name: a })),
    ],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude,
      },
      geoRadius: 25000, // 25km — selective beyond primary area
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:30",
      },
    ],
    knowsAbout: [
      "Bathroom renovations",
      "Kitchen renovations",
      "Interior refurbishment",
      "Bespoke joinery",
      "Renovation management",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bathroom packages",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Essential Refresh",
          priceCurrency: "GBP",
          price: "8995",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "8995",
            priceCurrency: "GBP",
            valueAddedTaxIncluded: true,
            description: "Starting from",
          },
        },
        {
          "@type": "Offer",
          name: "Signature Renovation",
          priceCurrency: "GBP",
          price: "13995",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "13995",
            priceCurrency: "GBP",
            valueAddedTaxIncluded: true,
            description: "Starting from",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      // Server-rendered only — safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
