import { BUSINESS } from "@/content/business";

function to24h(input: string): string {
  // Accepts "8:00 AM" / "5:00 PM"
  const parts = input.trim().split(/\s+/);
  const timePart = parts[0];
  const meridiem = parts[1]?.toUpperCase();

  if (!timePart || (meridiem !== "AM" && meridiem !== "PM")) {
    // fallback (keeps build safe)
    return "09:00";
  }

  const [hhStr, mmStr = "00"] = timePart.split(":");
  let hh = Number(hhStr);
  const mm = Number(mmStr);

  if (Number.isNaN(hh) || Number.isNaN(mm)) return "09:00";

  if (meridiem === "PM" && hh !== 12) hh += 12;
  if (meridiem === "AM" && hh === 12) hh = 0;

  const HH = String(hh).padStart(2, "0");
  const MM = String(mm).padStart(2, "0");
  return `${HH}:${MM}`;
}

const monFri = BUSINESS.hours.find((h) => h.label === "Mon-Fri");

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BUSINESS.name,
  url: BUSINESS.url,
  email: BUSINESS.email,
  telephone: BUSINESS.phoneE164,
  areaServed: [
    { "@type": "Country", name: "Canada" },
    { "@type": "Place", name: "International (Remote)" }
  ],
  openingHoursSpecification: monFri?.opens && monFri?.closes
    ? [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: to24h(monFri.opens),
          closes: to24h(monFri.closes)
        }
      ]
    : []
} as const;