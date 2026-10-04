import { NextResponse } from "next/server";
import Stripe from "stripe";
import { SERVICE_BY_PRICE_ID } from "@/lib/services";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
	const { priceId } = await req.json();

	const service = SERVICE_BY_PRICE_ID[priceId];
	if (!service) {
		return NextResponse.json({ error: "Unknown service" }, { status: 400 });
	}

	const session = await stripe.checkout.sessions.create({
		mode: "payment",
		line_items: [{ price: priceId, quantity: 1 }],
		success_url: `${process.env.NEXT_PUBLIC_APP_URL}/pay/success?session_id={CHECKOUT_SESSION_ID}&service=${service.id}`,
		cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pay/cancel`
	});

	return NextResponse.json({ url: session.url });
}
