import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";
import { SERVICE_BY_PRICE_ID } from "@/lib/services";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "website@k-solutions.tech";
const OWNER_EMAIL = "konstakrokhin@gmail.com";

async function sendWelcomeEmail(session: Stripe.Checkout.Session) {
  const email = session.customer_email;
  if (!email || !process.env.RESEND_API_KEY) return;

  const full = await stripe.checkout.sessions.retrieve(session.id, {
    expand: ["line_items"],
  });
  const priceId = full.line_items?.data[0]?.price?.id;
  const service = priceId ? SERVICE_BY_PRICE_ID[priceId] : undefined;

  const questions = (service?.intakeQuestions ?? [
    "Tell me a bit about your project.",
  ])
    .map((q, i) => `${i + 1}. ${q}`)
    .join("\n");

  const booking = service
    ? `\nBook your kickoff call here: ${service.bookingUrl}\n`
    : "";

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: `Konstantin Solutions <${FROM_EMAIL}>`,
    to: email,
    replyTo: OWNER_EMAIL,
    subject: `Your ${service?.title ?? "order"} is confirmed — next steps`,
    text: [
      `Hi,`,
      ``,
      `Thanks for your payment${service ? ` for the ${service.title} (${service.priceLabel})` : ""}! Here's how we get started:`,
      ``,
      `1. Reply to this email with answers to these:`,
      questions,
      ``,
      `2. Book your kickoff call:${booking}`,
      `That's it — once I have your answers and a call booked, we're rolling.`,
      ``,
      `Talk soon,`,
      `Konstantin`,
      `Konstantin Solutions · k-solutions.tech`,
    ].join("\n"),
  });
}

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) {
    return NextResponse.json(
      { error: "Webhook not configured" },
      { status: 500 }
    );
  }

  let event: Stripe.Event;
  try {
    const body = await req.text();
    event = stripe.webhooks.constructEvent(body, sig, secret);
  } catch {
    return NextResponse.json({ error: "Bad signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    try {
      await sendWelcomeEmail(event.data.object as Stripe.Checkout.Session);
    } catch (err) {
      // Never fail the webhook on email errors — payment already succeeded.
      console.error("Welcome email failed:", err);
    }
  }

  return NextResponse.json({ received: true });
}
