import { prisma } from '@/lib/prisma';

export async function listProjects() {
	return prisma.project.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function getProjectBySlug(slug: string) {
	return prisma.project.fundUnique({ where: { slug } });
}