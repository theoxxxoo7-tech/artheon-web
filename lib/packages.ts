/**
 * Bathroom packages — copy lifted directly from the MVP Blueprint.
 * Do not invent additional packages or pricing without founder approval.
 */
export type Package = {
  slug: "essential-refresh" | "signature-renovation";
  name: string;
  tier: string;
  startingFrom: string;
  startingFromNumeric: number;
  idealClient: string;
  styleDirection: string[];
  scope: string[];
  upgrades?: string[];
  exclusions: string[];
  /** Three feature highlights shown above the scope list */
  highlights: { label: string; note: string }[];
  /** Mood swatches: small hex squares evoking the package palette */
  moodSwatches: { hex: string; label: string }[];
  /** Image path (real photo when supplied) for the package header */
  image?: string;
  /** Tone used for the placeholder image area if `image` is absent */
  placeholderTone: "warm" | "stone" | "dark" | "tile";
};

export const packages: Package[] = [
  {
    slug: "essential-refresh",
    name: "Essential Refresh",
    tier: "Package 1",
    startingFrom: "£8,995",
    startingFromNumeric: 8995,
    idealClient:
      "Homeowners wanting a modern bathroom refresh without major layout changes.",
    styleDirection: ["Clean modern", "Ultra modern", "Minimal contemporary"],
    highlights: [
      { label: "Layout", note: "Like-for-like" },
      { label: "Finish level", note: "Clean modern" },
      { label: "Typical scope", note: "Full strip-out & install" },
    ],
    moodSwatches: [
      { hex: "#EFEBE3", label: "Warm white" },
      { hex: "#C9C3B7", label: "Soft stone" },
      { hex: "#857F75", label: "Mid grey" },
      { hex: "#1A1A1A", label: "Charcoal" },
    ],
    scope: [
      "Bathroom strip-out",
      "Standard plumbing adjustments",
      "Tiling",
      "New sanitaryware",
      "Shower or bath installation",
      "Lighting replacement",
      "Decoration",
      "Waste removal",
    ],
    exclusions: [
      "Major structural changes",
      "Extensive replumbing",
      "Bespoke joinery",
      "Luxury specialist finishes",
    ],
    image: "/images/package-essential-refresh.jpg", // replace with real Artheon project
    placeholderTone: "stone",
  },
  {
    slug: "signature-renovation",
    name: "Signature Renovation",
    tier: "Package 2",
    startingFrom: "£13,995",
    startingFromNumeric: 13995,
    idealClient:
      "Homeowners wanting a premium modern bathroom with higher-end finishes and upgraded features.",
    styleDirection: ["British modern", "Contemporary premium", "Warm modern"],
    highlights: [
      { label: "Layout", note: "Like-for-like or refined" },
      { label: "Finish level", note: "Premium specification" },
      { label: "Design", note: "Guidance included" },
    ],
    moodSwatches: [
      { hex: "#F1EDE5", label: "Soft cream" },
      { hex: "#C4B8A5", label: "Warm clay" },
      { hex: "#A07E54", label: "Brushed brass" },
      { hex: "#2A2825", label: "Deep stone" },
    ],
    scope: [
      "Full renovation",
      "Premium tiling",
      "Feature lighting",
      "Vanity upgrades",
      "Premium shower systems",
      "Better finish specification",
      "Project coordination",
      "Design guidance",
    ],
    upgrades: [
      "LED niches",
      "Underfloor heating",
      "Premium mirrors",
      "Better brassware",
      "Custom storage",
    ],
    exclusions: [
      "Major structural work",
      "Luxury spa systems",
      "Specialist stone packages",
    ],
    image: "/images/package-signature-renovation.jpg", // replace with real Artheon project
    placeholderTone: "warm",
  },
];

export const packageBySlug = (slug: string) =>
  packages.find((p) => p.slug === slug);
