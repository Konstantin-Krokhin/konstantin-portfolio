// apps/web/app/demo/_demo.ts
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