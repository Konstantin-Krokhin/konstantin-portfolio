import { listProjects } from "@/server/projects";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

type Project = Awaited<ReturnType<typeof listProjects>>[number];

const card = "rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6";
const pill = "rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300 p-1.5";
const tag = "rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1.5 text-[11px] text-zinc-300";

export default async function Home() {
  const projects: Project[] = await listProjects();

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
          
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
            <span className="text-sm text-zinc-400">{projects.length} total</span>
          </div>

          <div className="grid gap-12 lg:grid-cols-4">
            {projects.map((p: any) => (
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
          <h2 className="text-xl font-semibold tracking-tight mb-6">Contact</h2>
          <ContactForm cardClassName={card} />
        </section>
      </div>
    </>
  );
}
