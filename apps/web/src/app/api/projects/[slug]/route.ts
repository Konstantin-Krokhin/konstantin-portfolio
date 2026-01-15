import { NextResponse } from 'next/server';
import { getProjectBySlug } from '@/server/projects';

export const runtime = 'nodejs';

export async function GET(_req: Request, ctx: { params: { slug: string } }) {
	const project = await getProjectBySlug(ctx.params.slug);
	if (!project) return NextResponse.json({ message: 'Not Found' }, { status: 404 });
	return NextResponse.json(project);
}