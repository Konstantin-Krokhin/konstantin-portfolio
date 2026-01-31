import { listProjects } from "@/server/projects";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Testimonials from "@/components/Testimonials";
import { PayButton } from "@/components/PayButton";
import { Project, Service } from "@/types";

const card = "rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6";
const pill = "rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300 p-1.5";
const tag = "rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-[11px] text-zinc-300";

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

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-center">
            Hi, I&apos;m Konstantin.
          </h1>

          <p className="text-sm text-zinc-400 text-center">konstantinsolutions.tech</p>

          <p className="text-lg text-zinc-300 leading-relaxed mx-auto lg:mx-0 text-center">
            I build production-style full-stack apps with Next.js, Prisma and Postgres,
            focusing on clean architecture, testing, and deployability.
          </p>

          <div className="flex flex-wrap gap-2 justify-center justify-center">
            <span className={pill}>Next.js</span>
            <span className={pill}>Prisma</span>
            <span className={pill}>Neon Postgres</span>
          </div>
        </div>

        <div className="lg:w-50 space-y-4">
          <div className={card}>
            <p className="text-xs uppercase tracking-wide text-zinc-400">What I build</p>
            <p className="mt-3 text-sm text-zinc-200 leading-relaxed">
              Full-stack apps with Next.js, Prisma, and Postgres - designed to ship and scale.
            </p>
          </div>

          <div className={card}>
            <p className="text-xs uppercase tracking-wide text-zinc-400">What I care about</p>
            <p className="mt-3 text-sm text-zinc-200 leading-relaxed">
              Clean architecture, reliability, security mindset, and developer experience.
            </p>
          </div>

          <div className={card}>
            <p className="text-xs uppercase tracking-wide text-zinc-400">Open to</p>
            <p className="mt-3 text-sm text-zinc-200 leading-relaxed">
              Full-stack roles, backend-heavy work, and contract projects. Toronto / remote.
            </p>
          </div>
        </div>
      </section>

      <section>

        <h2 className="text-xl font-semibold tracking-tight"> Services </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.id} className={`${card} transition hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/40`}>

              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                <h3 className="text-base font-semibold leading-snug">{s.title}</h3>

                <p className="mt-1 text-sm text-zinc-400">
                  {formatCadFromCents(s.priceCents)}
                </p>
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

              <div className="mt-4 flex flex-wrap gap-2">
                {s.bookingUrl ? (
                  <a href={s.bookingUrl} target="_blank" rel="noreferrer">Book</a>
                ) : null
                  
                }
              </div>
            </article>

        ))}
        </div>

      </section>

      <section>
        
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
          <span className="text-sm text-zinc-400">{projects.length} total</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-4">
          {projects.map((p: Project) => (
            <article key={p.id} className={`${card} transition hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/40`}>

              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-snug">{p.title}</h3>

                {p.slug ? (
                    <Link
                      href={`/projects/${p.slug}`}
                      className="rounded-lg border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs text-zinc-200 transition hover:border-zinc-700 hover:text-white"
                    >
                      Open
                    </Link>
                ) : null}
              </div>

              {p.description ? (
                <p className="mt-3 line-clamp-3 text-sm text-zinc-300 leading-relaxed">
                  {p.description}
                </p>
              ) : (
                <p className="mt-3 text-sm text-zinc-500">No description yet.</p>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {(p.techStack ?? "")
                  .split(",")
                  .map((t: string) => t.trim())
                  .filter(Boolean)
                  .slice(0, 6)
                  .map((t: string) => (
                    <span
                      key={t}
                      className={tag}
                    >
                      {t}
                    </span>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold tracking-tight mb-6">Testimonials</h2>
        <Testimonials cardClassName={card} />
      </section>

      <section>
        <h2 className="text-xl font-semibold tracking-tight mb-6">Contact</h2>
        <ContactForm cardClassName={card} />
      </section>
    </div>
    </>
  );
}
