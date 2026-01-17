/**
 * prisma.ts
 *
 * Shared PrismaClient instance.
 *
 * Purpose:
 * - Prevent multiple PrismaClient instances during Next.js dev hot reloads
 * - Avoid exhausting database connections (especially with Neon/Postgres)
 *
 * Pattern:
 * - Reuse a single client via globalThis in development
 * - Let production rely on normal process lifecycle
 */

import { PrismaClient } from "@prisma/client";

// Extend globalThis to cache PrismaClient in development
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

// Create or reuse PrismaClient
export const prisma =
	globalForPrisma.prisma ??
	new PrismaClient({
		log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
	});

// Cache the client only in development (hot reload protection)
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;