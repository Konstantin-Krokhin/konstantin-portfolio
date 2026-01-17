import { listProjects } from "@/server/projects";
import Link from "next/link";

export default async function Home() {
  const projects = await listProjects();

  return (
    <main className="p-6">
      <section className="mb-8">
        <h1 className="text-3xl font-bold">Hi, I'm Konstantin.</h1>
        <p className="mt-2 opacity-80">
          Full-stack portfolio: Next.js + Prisma + Neon Postgres.
        </p>
      </section>

      <h2 className="text-2xl font-bold">Projects</h2>

      <ul className="mt-4 space-y-2">
        {projects.map((p: any) => (
          <li key={p.id} className="border p-3 rounded">
            <Link href={`/projects/${p.slug}`} className="block">
              <div className="font-semibold">{p.title}</div>
              <div className="text-sm opacity-70">{p.techStack}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}