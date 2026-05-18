/**
 * Single source of truth for site-wide constants.
 * All __PLACEHOLDER__ values require founder approval before launch.
 */
export const site = {
  name: "Artheon",
  legalName: "Artheon LTD",
  tagline: "Premium renovation management, organised and delivered with care.",
  description:
    "Artheon LTD is a premium renovation management company in Reading, Berkshire. We plan, coordinate and deliver bathroom, kitchen and interior renovations with a calm, organised, single-point-of-contact process.",
  url: "https://www.artheon.co.uk", // __PLACEHOLDER__ — update with final domain
  contact: {
    phone: "__PLACEHOLDER__",
    phoneHref: "tel:+44000000000",
    email: "hello@artheon.co.uk",
    emailHref: "mailto:hello@artheon.co.uk",
    address: {
      line1: "__PLACEHOLDER__",
      city: "Reading",
      county: "Berkshire",
      postcode: "__PLACEHOLDER__",
      country: "United Kingdom",
    },
    hours: "Monday – Friday, 9:00 – 17:30",
  },
  company: {
    companiesHouse: "__PLACEHOLDER__",
    vat: "__PLACEHOLDER__",
  },
  geo: {
    // Approximate Reading town centre — replace with registered address geocode
    latitude: 51.4543,
    longitude: -0.9781,
  },
  primaryArea: "Reading",
  secondaryAreas: ["Wokingham", "Bracknell", "Maidenhead"],
  minimumProjectValue: 8000,
} as const;

export const nav = [
  { label: "Projects", href: "/#projects" },
  { label: "Bathroom packages", href: "/packages" },
  { label: "Survey process", href: "/survey-process" },
  { label: "Areas", href: "/areas-covered" },
  { label: "About", href: "/about" },
] as const;
