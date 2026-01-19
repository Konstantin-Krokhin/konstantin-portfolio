import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug } from "@/server/projects";

export default async function ProjectPage({ params }: { params: Promise <{ slug: string }>; })
{
	const { slug } = await params

	if (!slug) return notFound();

	const project = await getProjectBySlug(slug);
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

			<div className="mt-8">
			{
				project.description ? (
					<p className="text-zinc-200 whitespace-pre-line">{project.description}</p>
				) : (
					<p className="text-zinc-500">No description yet..</p>
				)
			}
			</div>

		</div>
	);
}