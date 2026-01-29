export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  techStack: string;
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Service = {
  id: string;
  title: string;
  priceCents: number;
  description: string;
  bookingUrl: string;
  stripePriceId: string;
};