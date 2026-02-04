export const BUSINESS = {
  name: "Konstantin Solutions",
  url: "https://konstantinsolutions.tech",
  email: "sales.konsta@gmail.com",
  phoneDisplay: "+1 (672) 558-5554",
  phoneE164: "+16725585554",
  serviceArea: "clients in Canada and internationally since 2024",
  timezone: "ET",
  hours: [
    { label: "Mon-Fri", opens: "8:00 AM", closes: "5:00 PM" },
    { label: "Sat", opens: null, closes: null },
    { label: "Sun", opens: null, closes: null } // closed
  ],
  notes: "Remote-first. Meetings by appointment (online or on-site at client location)."
} as const;