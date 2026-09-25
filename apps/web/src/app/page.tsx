import { listProjects } from "@/server/projects";
import { prototypeDemos } from "@/app/demo/_demo";
import { BUSINESS } from "@/content/business";
import ContactForm from "@/components/ContactForm";
import { PayButton } from "@/components/PayButton";
import { Project, Service } from "@/types";

const card = "rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6";
const pill = "rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300";
const tag = "rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-[13px] text-zinc-300";

const services: Service[] = [
  { 
    id: "website-audit",
    title: "Website Audit",
    priceCents: 9900,
    description:
      "30-45 min call + quick technical review (speed, SEO basics, conversion). You get a short action plan.",
    bookingUrl: "https://calendly.com/konstakrokhin/website-audit/",
    stripePriceId: "price_1Sv1V1RvTRY7ZoKSdBWyzK04"
  },
  {
    id: "bugfix-session",
    title: "Bugfix Session",
    priceCents: 14900,
    description:
      "60 min hands-on session. Fix 1-2 urgent issues (deploy, CSS, forms, tracking, minor backend fixes).",
    bookingUrl: "https://calendly.com/konstakrokhin/bugfix-session",
    stripePriceId: "price_1Sv30FRvTRY7ZoKSzizosCzn"
  },
  {
    id: "landing-page-build",
    title: "Landing Page Build",
    priceCents: 39900,
    description:
      "High-converting landing page + analytics + basic SEO + deployment. Normally 2-3 days turnaround.",
    bookingUrl: "https://calendly.com/konstakrokhin/landing-page-build",
    stripePriceId: "price_1Sv30dRvTRY7ZoKSscBcRYhN"
  }
];

function formatCadFromCents(cents: number) {
  return new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0
  }).format(cents / 100);
}

export const revalidate = 60;

export default async function Home() {
  const projects: Project[] = await listProjects() as Project[];

  return (
    <>
    <div className="space-y-12">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute right-[-200px] top-[150px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <section className="flex flex-col lg:flex-row">
        <div className="lg:flex-1 space-y-8">

          <p className="text-sm text-zinc-400 text-center">Konstantin Solutions · k-solutions.tech</p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center">
            AI chatbots that answer your customers.
            <span className="block text-zinc-300">Automation that saves you hours.</span>
          </h1>

          <p className="text-lg text-zinc-300 leading-relaxed mx-auto lg:mx-0 text-center">
            I build chatbots and Python automation for small businesses in the GTA —
            working prototype first, so you see the value before you pay.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#demos" className="rounded-lg bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-white">
              Try the live demos
            </a>
            <a href="#contact" className="rounded-lg border border-zinc-800 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-white">
              Get in touch
            </a>
          </div>

          <p className="text-sm text-zinc-400 text-center">
            Prefer to talk?{" "}
            <a href={`tel:${BUSINESS.phoneE164}`} className="underline hover:text-zinc-200">{BUSINESS.phoneDisplay}</a>
            {" · "}
            <a href={`mailto:${BUSINESS.email}`} className="underline hover:text-zinc-200">{BUSINESS.email}</a>
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            <span className={pill}>AI Chatbots</span>
            <span className={pill}>Python Automation</span>
            <span className={pill}>Next.js</span>
          </div>
        </div>

        <div className="lg:w-60 space-y-4">
          <div className={card}>
            <p className="text-xs uppercase tracking-wide text-zinc-400">What's Konstantin Solutions?</p>
            <p className="mt-3 text-sm text-zinc-200 leading-relaxed">
              Konstantin Solutions is a software consultancy focused on building reliable web and AI-powered solutions for businesses.
            </p>
          </div>

          <div className={card}>
            <p className="text-xs uppercase tracking-wide text-zinc-400">Team's Expertise</p>
            <p className="mt-3 text-sm text-zinc-200 leading-relaxed">
              Led by a full-stack engineer with 7+ years of production experience.
            </p>
          </div>

          <div className={card}>
            <p className="text-xs uppercase tracking-wide text-zinc-400">How I help businesses?</p>
            <p className="mt-3 text-sm text-zinc-200 leading-relaxed">
              I help startups and small companies automate workflows, improve performance, and ship maintainable software.
            </p>
          </div>

        </div>
      </section>

      <section className="space-y-4">

        <h2 className="text-xl font-semibold tracking-tight"> Services </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.id} className={`${card} transition hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/40`}>

              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400"> {formatCadFromCents(s.priceCents)} </p>
                </div>

                {s.stripePriceId ? (
                    <PayButton priceId={s.stripePriceId} />
                ) : null}
              </div>

              {s.description ? (
                <p className="mt-3 line-clamp-3 text-sm text-zinc-300 leading-relaxed">
                  {s.description}
                </p>
              ) : (
                <p className="mt-3 text-sm text-zinc-500">No description yet.</p>
              )}

              <div className="mt-4 flex gap-2">
                {s.bookingUrl ? (
                  <a href={s.bookingUrl} target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-s font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-white">Book Appointment</a>
                ) : null
                  
                }
              </div>
            </article>

        ))}
        </div>

      </section >

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">How it works</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              step: "1",
              title: "You describe the problem",
              text: "A quick call about what's eating your time — missed inquiries, manual booking, repetitive messages.",
            },
            {
              step: "2",
              title: "I build a working prototype",
              text: "You get a clickable demo like the ones below, usually within days — before you pay anything.",
            },
            {
              step: "3",
              title: "You approve, I ship it",
              text: "We refine it together, then I deploy it and make sure it keeps running.",
            },
          ].map((s) => (
            <article key={s.step} className={card}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-sm font-bold text-zinc-950">
                {s.step}
              </div>
              <h3 className="mt-3 text-base font-semibold leading-snug">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="demos" className="space-y-4 scroll-mt-24">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">Demos</h2>
          <span className="text-sm text-zinc-400">{prototypeDemos.length} live prototypes</span>
          <div className="mt-1 text-xs text-zinc-500">
            Interactive concept prototypes. Not affiliated with any real business.
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prototypeDemos.map((p) => (
            <article
              key={p.url}
              className={`${card} transition hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/40`}
            >
              <div className="text-xs text-zinc-400">{p.tag}</div>
              <h3 className="mt-1 text-base font-semibold leading-snug">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                {p.blurb}
              </p>
              <div className="mt-4">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-zinc-800 bg-zinc-950 px-6 py-2 text-s font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
                >
                  Try it ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="space-y-4 scroll-mt-24">
        <h2 className="text-xl font-semibold tracking-tight">Contact</h2>
        <ContactForm cardClassName={card} />
      </section>

    </div>
    </>
  );
}
