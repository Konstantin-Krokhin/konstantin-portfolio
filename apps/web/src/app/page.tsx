import { listProjects } from "@/server/projects";
import Link from "next/link";

type Project = Awaited<ReturnType<typeof listProjects>>[number];

export default async function Home() {
  const projects: Project[] = await listProjects();

  console.log("HAS_DB_URL", !!process.env.DATABASE_URL);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-200px] top-[-200px] h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute right-[-200px] top-[150px] h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <header className="space-y-6">

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I&apos;m Konstantin.
          </h1>

          <p className="text-sm text-zinc-400">konstantinsolutions.tech</p>

          <p className="max-w-2xl text-zinc-300">
            I build production-style full-stack apps with Next.js, Prisma and Postgres,
            focusing on clean architecture, testing, and deployability.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300">
              Next.js
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300">
              Prisma
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300">
              Neon Postgres
            </span>
          </div>
        </header>

        <section className="mt-16 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
              <p className="text-xs uppercase tracking-wide text-zinc-400">What I build</p>
              <p className="mt-2 text-sm text-zinc-200">
                Full-stack apps with Next.js, Prisma, and Postgres - designed to ship and scale.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
              <p className="text-xs uppercase tracking-wide text-zinc-400">What I care about</p>
              <p className="mt-2 text-sm text-zinc-200">
                Clean architecture, reliability, security mindset, and developer experience.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
              <p className="text-xs uppercase tracking-wide text-zinc-400">Open to</p>
              <p className="mt-2 text-sm text-zinc-200">
                Full-stack roles, backend-heavy work, and contract projects. Toronto / remote.
              </p>
            </div>
          </section>

        <section className="mt-20">
          <div className="mb-6 h-px bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />

          <div className="flex items-end justify-between">
            <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
            <span className="text-sm text-zinc-400">{projects.length} total</span>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p: any) => (
              <article
                key={p.id}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition hover:-translate-y-0.5 hover:border-zinc-700 hover:bg-zinc-900/50"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold leading-snug group-hover:text-white transition">{p.title}</h3>

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
                  <p className="mt-2 line-clamp-3 text-sm text-zinc-300">
                    {p.description}
                  </p>
                ) : (
                  <p className="mt-2 text-sm text-zinc-500">No description yet.</p>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {(p.techStack ?? "")
                    .split(",")
                    .map((t: string) => t.trim())
                    .filter(Boolean)
                    .slice(0, 6)
                    .map((tag: string) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[11px] text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
