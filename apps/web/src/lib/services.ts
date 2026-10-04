export interface ServiceInfo {
  id: "website-audit" | "bugfix-session" | "landing-page-build";
  title: string;
  priceLabel: string;
  bookingUrl: string;
  stripePriceId: string;
  intakeQuestions: string[];
}

export const SERVICES: ServiceInfo[] = [
  {
    id: "website-audit",
    title: "Website Audit",
    priceLabel: "CAD 249",
    bookingUrl: "https://cal.com/konstantinkrokhin/website-audit",
    stripePriceId: "price_1UM8YU2MrLg1cB9viV5QoKBj",
    intakeQuestions: [
      "What's your website URL?",
      "What's the #1 thing you want the audit to focus on — speed, SEO, or conversions?",
      "Is there anything specific that's been bothering you about the site?",
    ],
  },
  {
    id: "bugfix-session",
    title: "Bugfix Session",
    priceLabel: "CAD 449",
    bookingUrl: "https://cal.com/konstantinkrokhin/bugfix-session",
    stripePriceId: "price_1UM8YU2MrLg1cB9veerXrH9N",
    intakeQuestions: [
      "What's broken? Describe it in 1-2 sentences.",
      "Link to the page (or repo) where it happens, if you can share it.",
      "How urgent is it — blocking you right now, or can it wait a few days?",
    ],
  },
  {
    id: "landing-page-build",
    title: "Landing Page Build",
    priceLabel: "CAD 1,900",
    bookingUrl: "https://cal.com/konstantinkrokhin/landing-page-build",
    stripePriceId: "price_1UM8YU2MrLg1cB9vlO8A5tvL",
    intakeQuestions: [
      "Business name — and in one line, what do you sell?",
      "Who is the page for? (your ideal customer)",
      "Do you have logo, text and photos ready, or do you need help with content?",
      "Any websites you like as a reference for style?",
    ],
  },
];

export const SERVICE_BY_PRICE_ID: Record<string, ServiceInfo> =
  Object.fromEntries(SERVICES.map((s) => [s.stripePriceId, s]));

export const SERVICE_BY_ID: Record<string, ServiceInfo> =
  Object.fromEntries(SERVICES.map((s) => [s.id, s]));
