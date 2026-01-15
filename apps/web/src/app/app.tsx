import { listProjects } from '@/server/projects';

export default async function Home() {
	const projects = await listProjects();

	return (
		<main className="p-6">
      <h1 className="text-2xl font-bold">Projects</h1>
      <ul className="mt-4 space-y-2">
        {projects.map((p: any) => (
          <li key={p.id} className="border p-3 rounded">
            <div className="font-semibold">{p.title}</div>
            <div className="text-sm opacity-70">{p.techStack}</div>
          </li>
        ))}
      </ul>
    </main>
	);
}