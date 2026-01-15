import { NextResponse } from 'next/server';
import { listProjects } from '@/server/projects';

export const runtime = 'nodejs';

export async function GET() {
	const projects = await listProjects();
	return NextResponse.json(projects);
}