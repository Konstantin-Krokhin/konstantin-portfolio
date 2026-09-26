import { prototypeDemos } from "@/app/demo/_demo";
import DemoCarousel from "@/components/DemoCarousel";
import { BUSINESS } from "@/content/business";
import ContactForm from "@/components/ContactForm";
import { PayButton } from "@/components/PayButton";
import { Service } from "@/types";
import type { ReactElement } from "react";

/* ---------- design tokens ---------- */
const eyebrow =
  "text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/90";
const h2 = "mt-3 text-3xl font-bold tracking-tight sm:text-4xl";
const sub = "mt-3 max-w-2xl text-zinc-400 leading-relaxed";
const card =
  "rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur";
const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-100 transition";

/* ---------- tiny inline icons ---------- */
const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const IconChat = () => (
  <svg {...iconProps}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);
const IconBolt = () => (
  <svg {...iconProps}>
    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);
const IconCalendar = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const IconCheck = () => (
  <svg {...iconProps} width={16} height={16}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const IconPhone = () => (
  <svg {...iconProps} width={18} height={18}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconMail = () => (
  <svg {...iconProps} width={18} height={18}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);
const IconPin = () => (
  <svg {...iconProps} width={18} height={18}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconClock = () => (
  <svg {...iconProps} width={18} height={18}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const serviceIcons: Record<string, () => ReactElement> = {
  "website-audit": IconBolt,
  "bugfix-session": IconCheck,
  "landing-page-build": IconCalendar,
};

/* ---------- data ---------- */
const services: Service[] = [
  {
    id: "website-audit",
    title: "Website Audit",
    priceCents: 24900,
    description:
      "30-45 min call + quick technical review (speed, SEO basics, conversion). You get a short action plan.",
    bookingUrl: "https://calendly.com/konstakrokhin/website-audit/",
    stripePriceId: "price_1UJdoDRvTRY7ZoKSJ3hOYnJF",
  },
  {
    id: "bugfix-session",
    title: "Bugfix Session",
    priceCents: 44900,
    description:
      "60 min hands-on session. Fix 1-2 urgent issues (deploy, CSS, forms, tracking, minor backend fixes).",
    bookingUrl: "https://calendly.com/konstakrokhin/bugfix-session",
    stripePriceId: "price_1UJdnHRvTRY7ZoKSEHXBS9gk",
  },
  {
    id: "landing-page-build",
    title: "Landing Page Build",
    priceCents: 190000,
    description:
      "High-converting landing page + analytics + basic SEO + deployment. Normally 2-3 days turnaround.",
    bookingUrl: "https://calendly.com/konstakrokhin/landing-page-build",
    stripePriceId: "price_1UJdmdRvTRY7ZoKSTUrpUcp0",
  },
];

function formatCadFromCents(cents: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

const steps = [
  {
    n: "01",
    title: "You describe the problem",
    text: "A quick call about what's eating your time — missed inquiries, manual booking, repetitive messages.",
  },
  {
    n: "02",
    title: "I build a working prototype",
    text: "You get a clickable demo like the ones below, usually within days — before you pay anything.",
  },
  {
    n: "03",
    title: "You approve, I ship it",
    text: "We refine it together, then I deploy it to your site and make sure it keeps running.",
  },
];

export const revalidate = 60;

export default function HomePage() {
  return (
    <div className="relative">
      {/* ambient background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-drift absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[130px]" />
        <div className="absolute top-[42rem] -left-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute top-[95rem] -right-40 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* ============ HERO ============ */}
        <section className="pb-16 pt-14 text-center sm:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Available for new projects
          </span>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
            Konstantin Solutions · Toronto, Canada
          </p>

          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl sm:leading-[1.05]">
            AI chatbots that{" "}
            <span className="text-gradient">answer your customers</span>.
            <span className="mt-2 block">
              Automation that <span className="text-gradient">saves you hours</span>.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            I&apos;m Konstantin — a software engineer with 7+ years of
            production experience. I build chatbots and Python automation for
            small businesses in the GTA. Working prototype first, so you see
            the value before you pay.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#demos"
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-indigo-500/40 hover:brightness-110"
            >
              Try the live demos
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-zinc-100 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
            >
              Get in touch
            </a>
          </div>

          <p className="mt-5 text-sm text-zinc-500">
            Prefer to talk?{" "}
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              className="font-medium text-cyan-300 hover:underline"
            >
              {BUSINESS.phoneDisplay}
            </a>{" "}
            ·{" "}
            <a
              href={`mailto:${BUSINESS.email}`}
              className="font-medium text-cyan-300 hover:underline"
            >
              {BUSINESS.email}
            </a>
          </p>

          <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3 sm:mt-12 sm:gap-6">
            {[
              { v: "7+", l: "years of production experience" },
              { v: "15", l: "live prototypes you can try now" },
              { v: "GTA", l: "based in Toronto, serving local businesses" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/10 bg-white/[0.02] px-2 py-4 sm:px-4 sm:py-5">
                <dt className="sr-only">{s.l}</dt>
                <dd className="text-gradient text-2xl font-bold sm:text-3xl">{s.v}</dd>
                <dd className="mt-1 text-[11px] leading-snug text-zinc-500 sm:text-xs">{s.l}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ============ TRUST STRIP ============ */}
        <section className="border-y border-white/10 py-5">
          <ul className="flex flex-col items-center gap-3 text-sm text-zinc-300 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-10 sm:gap-y-3">
            {[
              "Working prototype before you pay",
              "Fixed, transparent pricing",
              "Direct line to the engineer — no agency",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                  <IconCheck />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* ============ SERVICES ============ */}
        <section id="services" className="scroll-mt-24 py-14 sm:py-20">
          <p className={eyebrow}>Services</p>
          <h2 className={h2}>
            Fixed-price services, <span className="text-gradient">no surprises</span>
          </h2>
          <p className={sub}>
            Start small with a fixed-price service, or talk to me about a
            custom chatbot or automation project.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const Icon = serviceIcons[s.id] ?? IconBolt;
              return (
                <article key={s.id} className={`${card} glow-card flex flex-col`}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/40 to-cyan-400/20 text-cyan-300">
                    <Icon />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-3xl font-bold tracking-tight">
                    {formatCadFromCents(s.priceCents)}{" "}
                    <span className="text-sm font-normal text-zinc-500">CAD</span>
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                    {s.description}
                  </p>
                  <div className="mt-6 space-y-2">
                    <a
                      href={s.bookingUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-center text-sm font-medium text-zinc-100 transition hover:border-white/30 hover:bg-white/10"
                    >
                      Book appointment
                    </a>
                    <PayButton priceId={s.stripePriceId} />
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm text-zinc-500">
            Need a custom chatbot or automation?{" "}
            <a href="#contact" className="font-medium text-cyan-300 hover:underline">
              Tell me about your project →
            </a>
          </p>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section className="border-t border-white/10 py-14 sm:py-20">
          <p className={eyebrow}>Process</p>
          <h2 className={h2}>
            From idea to live in <span className="text-gradient">three steps</span>
          </h2>
          <p className={sub}>
            No lengthy specs, no agency runaround. You talk to the person
            building it.
          </p>

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className={`${card} glow-card relative`}>
                <span className="text-gradient text-5xl font-bold tracking-tight">
                  {s.n}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ============ DEMOS ============ */}
        <section id="demos" className="scroll-mt-24 border-t border-white/10 py-14 sm:py-20">
          <p className={eyebrow}>Demos</p>
          <h2 className={h2}>
            Try the <span className="text-gradient">prototypes</span>
          </h2>
          <p className={sub}>
            Real, clickable builds — not mockups. Concept pieces, not
            affiliated with any real business.
          </p>

          <DemoCarousel demos={prototypeDemos} />
          <p className="mt-6 text-sm text-zinc-500">
            Want the full list on one page?{" "}
            <a href="/demo" className="text-cyan-300 hover:text-cyan-200">
              Browse all prototypes →
            </a>
          </p>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="scroll-mt-24 border-t border-white/10 py-14 sm:py-20">
          <p className={eyebrow}>Contact</p>
          <h2 className={h2}>
            Let&apos;s build something <span className="text-gradient">useful</span>
          </h2>
          <p className={sub}>
            Tell me about your business and what&apos;s eating your time. I
            reply within one business day.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            <div className="space-y-4 lg:col-span-2">
              <div className={card}>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
                      <IconPhone />
                    </span>
                    <span>
                      <span className="block text-xs text-zinc-500">Phone</span>
                      <a href={`tel:${BUSINESS.phoneE164}`} className="font-medium text-zinc-100 hover:text-cyan-300">
                        {BUSINESS.phoneDisplay}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
                      <IconMail />
                    </span>
                    <span>
                      <span className="block text-xs text-zinc-500">Email</span>
                      <a href={`mailto:${BUSINESS.email}`} className="font-medium text-zinc-100 hover:text-cyan-300">
                        {BUSINESS.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
                      <IconPin />
                    </span>
                    <span>
                      <span className="block text-xs text-zinc-500">Area</span>
                      <span className="font-medium text-zinc-100">{BUSINESS.serviceArea}</span>
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300">
                      <IconClock />
                    </span>
                    <span>
                      <span className="block text-xs text-zinc-500">Hours</span>
                      <span className="font-medium text-zinc-100">
                        {BUSINESS.hours[0].label} · {BUSINESS.hours[0].opens} – {BUSINESS.hours[0].closes} {BUSINESS.timezone}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/15 to-cyan-400/10 p-6">
                <p className="flex items-center gap-2 font-semibold">
                  <IconChat /> Not sure where to start?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  Book a free intro call — we&apos;ll figure out in 15 minutes
                  whether a chatbot or automation makes sense for you.
                </p>
              </div>
            </div>

            <div className={`${card} lg:col-span-3`}>
              <ContactForm cardClassName={inputCls} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
