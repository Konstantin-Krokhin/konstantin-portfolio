import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { Resend } from 'resend';

const prisma = new PrismaClient();

const contactSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Invalid email address'),
	message: z.string().min(1, 'Message is required'),
});

// Where contact-form notifications go. Override with CONTACT_NOTIFY_EMAIL.
const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL ?? 'konstakrokhin@gmail.com';
// Verified sender domain in Resend. Override with CONTACT_FROM_EMAIL.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? 'website@k-solutions.tech';

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { name, email, message } = contactSchema.parse(body);

		// Save to DB
		await prisma.contact.create({
			data: { name, email, message },
		});

		// Email notification so new inquiries land in the inbox, not just the DB.
		// Requires RESEND_API_KEY to be set; skips silently without it.
		if (process.env.RESEND_API_KEY) {
			try {
				const resend = new Resend(process.env.RESEND_API_KEY);
				await resend.emails.send({
					from: `Konstantin Solutions <${FROM_EMAIL}>`,
					to: NOTIFY_EMAIL,
					subject: `New website inquiry from ${name}`,
					text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
					replyTo: email,
				});
			} catch (emailError) {
				// Don't fail the request if the notification email fails;
				// the message is already saved in the DB.
				console.error('Contact notification email failed:', emailError);
			}
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json({ error: 'Invalid request!' }, { status: 400 });
	}
}
