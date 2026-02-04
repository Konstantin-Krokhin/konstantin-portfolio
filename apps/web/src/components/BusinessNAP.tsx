import { BUSINESS } from "@/content/businessFromJsonLd";

type Props = { title?: string; className?: string };

export function BusinessNAP({ title = "Business details", className = "" }: Props) {
  return (
    <section className={className} aria-label="Business details">
      <h2 className="text-sm font-semibold text-zinc-200">{title}</h2>

      <dl className="mt-3 space-y-2 text-sm text-zinc-300">
        <div>
          <dt className="text-zinc-400">Business name</dt>
          <dd className="text-zinc-200">{BUSINESS.name}</dd>
        </div>

        <div>
          <dt className="text-zinc-400">Service area</dt>
          <dd className="text-zinc-200">{BUSINESS.serviceArea}</dd>
        </div>

        <div>
          <dt className="text-zinc-400">Contact</dt>
          <dd className="text-zinc-200">
            <a className="underline underline-offset-4" href={`mailto:${BUSINESS.email}`}>
              {BUSINESS.email}
            </a>
            <span className="mx-2 text-zinc-500">|</span>
            <a className="underline underline-offset-4" href={`tel:${BUSINESS.phone.replace(/[^+\d]/g, "")}`}>
              {BUSINESS.phone}
            </a>
          </dd>
        </div>

        <div>
          <dt className="text-zinc-400">Business hours</dt>
          <dd className="text-zinc-200">{BUSINESS.hours}</dd>
        </div>
      </dl>
    </section>
  );
}