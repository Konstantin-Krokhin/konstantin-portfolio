import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod'; // Install with npm install zod

const prisma = new PrismaClient();

const contactSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
	message: z.string().min(1, 'Message is required'),
});

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, message } = contactSchema.parse(body);

		// Save to DB
		await prisma.contact.create({
			data: { name, email, message },
		});

		// Send email (TODO: replace with service, e.g., Resend)
		// Example: await resend.emails.send({ ... });

		return NextResponse.json({ success:true });
	} catch (error) {
		return NextResponse.json({ error: 'Invalid request!' }, { status: 400 });
	}
}