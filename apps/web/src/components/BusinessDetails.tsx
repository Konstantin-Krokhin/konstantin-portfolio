import { BUSINESS } from "@/content/business"

type Props = {
  variant?: "card" | "compact";
  className?: string;
};

function formatHours() {
  return BUSINESS.hours
    .map((h) => {
      if (!h.opens || !h.closes) return `${h.label}: Closed`;
      return `${h.label}: ${h.opens} - ${h.closes} (${BUSINESS.timezone})`;
    })
    .join("\n");
}

export default function BusinessDetails({ variant = "card", className = "" }: Props) {
  const hoursText = formatHours();

  if (variant === "compact") {
    return (
      <div className={className}>
        <div>
          Serving {BUSINESS.serviceArea} |{" "}
          <a className="hover:text-zinc-200" href={`tel:${BUSINESS.phoneE164}`}>
            {BUSINESS.phoneDisplay}
          </a>{" "}
          |{" "}
          <a className="hover:text-zinc-200" href={`mailto:${BUSINESS.email}`}>
            {BUSINESS.email}
          </a>
        </div>
        <div className="mt-1 text-xs text-zinc-500 whitespace-pre-line">
          {hoursText}
        </div>
      </div>
    );
  }

  return (
    <section className={className} aria-label="Business details">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
        <h3 className="text-base font-semibold text-zinc-100">{BUSINESS.name}</h3>
        <p className="mt-1 text-sm text-zinc-400">
          Web development and AI automations for Canadian businesses.
        </p>

        <div className="mt-4 space-y-2 text-sm text-zinc-300">
          <div>
            <span className="text-zinc-400">Service area:</span>{" "}
            {BUSINESS.serviceArea}
          </div>

          <div>
            <span className="text-zinc-400">Phone:</span>{" "}
            <a className="hover:text-white" href={`tel:${BUSINESS.phoneE164}`}>
              {BUSINESS.phoneDisplay}
            </a>
          </div>

          <div>
            <span className="text-zinc-400">Email:</span>{" "}
            <a className="hover:text-white" href={`mailto:${BUSINESS.email}`}>
              {BUSINESS.email}
            </a>
          </div>

          <div className="whitespace-pre-line">
            <span className="text-zinc-400">Hours:</span>
            {"\n"}
            {hoursText}
          </div>

          <div className="pt-2 text-xs text-zinc-500">{BUSINESS.notes}</div>
        </div>
      </div>
    </section>
  );
}
