import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
	apiVersion: "2026-01-28.clover"
});

export async function POST(req: Request) {
	const { priceId } = await req.json();

	const session = await stripe.checkout.sessions.create({
		mode: "payment",
		line_items: [{ price: priceId, quantity: 1 }],
		success_url: `${process.env.NEXT_PUBLIC_APP_URL}/pay/success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pay/cancel`
	});

	return NextResponse.json({ url: session.url });
}