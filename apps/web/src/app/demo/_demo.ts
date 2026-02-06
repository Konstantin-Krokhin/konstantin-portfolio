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

export const demos: Demo[] = [
  {
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