import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug } from "@/server/projects";
import { Project } from "@/types";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

	if (!slug) return notFound();

	const project: Project = await getProjectBySlug(slug) as Project;
	if (!project) return notFound();

	return (
		<div className="py-10">
			<Link href="/" className="text-sm text-zinc-300 underline">
				Back
			</Link>

			<h1 className="mt-6 text-3xl font-bold" >{project.title}</h1>

			{
				project.techStack ? (
					<p className="mt-2 text-sm text-zinc-400">{project.techStack}</p>
				) : null
			}

			<div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
			{
				project.description ? (
					<p className="text-zinc-200 whitespace-pre-line">{project.description}</p>
				) : (
					<p className="text-zinc-500">No description yet..</p>
				)
			}

			{project.techStack ? (
				<div className="mt-4 flex flex-wrap gap-2">
					{project.techStack
					.split(",")
					.map((t: string) => t.trim())
					.filter(Boolean)
					.slice(0, 10)
					.map((tag: string) => (
						<span
						key={tag}
						className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[11px] text-zinc-300"
						>
						{tag}
						</span>
					))}
				</div>
			) : null}


			<div className="mt-6 flex flex-wrap gap-3">
				{project.repoUrl ? (
					<a
						className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm hover:border-zinc-700"
						href={project.repoUrl}
						target="_blank"
						rel="noreferrer"
					>
						Repo
					</a>
				) : null }

				{project.liveUrl ? (
					<a
						className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm hover:border-zinc-700"
						href={project.liveUrl}
						target="_blank"
						rel="noreferrer"
					>
						Live
					</a>
				) : null }
			</div>

			</div>

		</div>
	);
}