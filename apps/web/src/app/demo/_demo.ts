// apps/web/app/demo/_demos.ts
export type Demo = {
  slug: string;
  businessName: string;
  category: string;
  city: string;
  phoneDisplay: string;
  phoneHref: string;
  address: string;
  rating?: number;
  reviewsCount?: number;
  hoursNote?: string;
  notes?: string;
};

export const demos: Demo[] = [  {
    slug: "ay-electrical-plumbing",
    businessName: "AY Electrical & Plumbing",
    category: "Plumber / Electrician",
    city: "North York, ON",
    phoneDisplay: "(416) 939-3301",
    phoneHref: "tel:+14169393301",
    address: "9 Dellbank Rd, North York, ON M3H 4M9",
    rating: 4.7,
    reviewsCount: 529,
    hoursNote: "Open 24 hours",
    notes: "Concept demo built from public listing info. Not affiliated.",
  },
  {
    slug: "a-y-electrical",
    businessName: "A & Y Electrical",
    category: "Electrician",
    city: "North York, ON (GTA)",
    phoneDisplay: "(416) 939-3301",
    phoneHref: "tel:+14169393301",
    address: "North York, ON (serving GTA)",
    rating: 5.0,
    reviewsCount: 47,
    hoursNote: "Emergency troubleshooting available",
    notes: "Concept demo built from public website/listing info. Not affiliated.",
  },
];

// Live interactive prototypes (hosted externally). These are the strongest
// examples of AI chatbots and booking/quote automation built for outreach.
// Generic titles on purpose: concept pieces, not client work.
export type PrototypeDemo = {
  title: string;
  tag: string;
  blurb: string;
  url: string;
};

export const prototypeDemos: PrototypeDemo[] = [
  {
    title: "Retail shop chatbot",
    tag: "AI chatbot",
    blurb:
      "Answers product questions and recommends picks for a neighbourhood comics shop.",
    url: "https://muse.ai/s/comics-shop-chatbot-demo-for-beguiling-xuj6kcnxg6xlxxxy",
  },
  {
    title: "Florist inquiry chatbot",
    tag: "AI chatbot",
    blurb:
      "Handles wedding-flower inquiries: dates, styles, and package questions.",
    url: "https://muse.ai/s/florist-inquiry-chatbot-demo-for-rxr6kcngxcjxlxl",
  },
  {
    title: "Nonprofit chatbot",
    tag: "AI chatbot",
    blurb:
      "Answers visitor questions about programs, hours, and how to get involved.",
    url: "https://muse.ai/s/nonprofit-chatbot-demo-for-fixt-point-xxxc6kcnhwgnv",
  },
  {
    title: "Wedding flower quote request",
    tag: "Quote automation",
    blurb:
      "Date-availability check plus an instant example estimate, built for a florist.",
    url: "https://muse.ai/s/wedding-flower-quote-request-demo-xmu6krbxkxqnxx0",
  },
  {
    title: "Catering quote request",
    tag: "Quote automation",
    blurb:
      "Date, guest count, and menu preferences with an instant example estimate.",
    url: "https://muse.ai/s/catering-quote-request-demo-prototype-xmb6krbyd9qxc",
  },
  {
    title: "Free-trial class booking",
    tag: "Booking automation",
    blurb:
      "Pick a class slot, get confirmed on the spot, with automated reminders.",
    url: "https://muse.ai/s/free-trial-class-booking-demo-xcxj6krbv3liw",
  },
];