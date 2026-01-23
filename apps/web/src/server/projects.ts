import { prisma } from '@/lib/prisma';

async function ensureConnection() {
	try {
		// Health check query
		await prisma.$queryRaw`SELECT 1`;
	} catch (error) {
		console.log('Connection health check failed, reconnecting...');
		await prisma.$disconnect();
		await prisma.$connect();
	}
}

async function executeWithRetry<T>(operation: () => Promise<T>): Promise<T> {
	await ensureConnection(); // Ensure connection is healthy before operation
	try {
		return await operation();
	} catch (error: any) {
		// If operation fails with connection error, retry once after reconnecting
		if (error.code === 'P1001' || error.code === 'P1017' || error.message?.includes('connection') || error.message?.includes('Closed')) {
			console.log('Database operation failed with connection error, retrying...');
			try {
				await prisma.$disconnect();
				await prisma.$connect();
				return await operation();
			} catch (retryError) {
				console.error('Retry failed:', retryError);
				throw retryError;
			}
		}
		throw error;
	}
}

export async function listProjects() {
	return executeWithRetry(() => prisma.project.findMany({ orderBy: { createdAt: 'desc' } }));
}

export async function getProjectBySlug(slug: string) {
	return executeWithRetry(() => prisma.project.findUnique({ where: { slug } }));
}