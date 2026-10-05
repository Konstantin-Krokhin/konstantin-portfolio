import Link from "next/link";
import { SERVICE_BY_ID } from "@/lib/services";

// Must render per-request: the service comes from the ?service= query param,
// which is empty at build time (would bake in the generic fallback forever).
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Payment successful | Konstantin Solutions",
  description: "Your payment went through. Here are the next steps.",
};

export default async function PaySuccess({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service: serviceId } = await searchParams;
  const service = SERVICE_BY_ID[serviceId ?? ""] ?? null;

  return (
    <main className="mx-auto max-w-2xl px-6 py-20 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-4xl">
        ✓
      </div>
      <h1 className="text-3xl font-bold tracking-tight">
        Payment successful{service ? ` — ${service.title}` : ""}
      </h1>
      <p className="mt-3 text-zinc-400">
        Thanks! Your receipt is on its way from Stripe. Here&apos;s what
        happens next:
      </p>

      <ol className="mt-10 space-y-6 text-left">
        <li className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="font-semibold">
            <span className="text-gradient">1.</span> Check your inbox
          </div>
          <p className="mt-1 text-sm text-zinc-400">
            I&apos;ve sent you a welcome email with everything below, so you
            have it in writing.
          </p>
        </li>
        <li className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="font-semibold">
            <span className="text-gradient">2.</span> Reply with a few answers
          </div>
          {service ? (
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-400">
              {service.intakeQuestions.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-1 text-sm text-zinc-400">
              Just reply to the email and tell me about your project.
            </p>
          )}
        </li>
        <li className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="font-semibold">
            <span className="text-gradient">3.</span> Book your kickoff call
          </div>
          <p className="mt-1 text-sm text-zinc-400">
            Pick a time that works for you and we&apos;ll get started.
          </p>
          {service && (
            <a
              href={service.bookingUrl}
              className="mt-4 inline-block rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:brightness-110"
            >
              Book your call
            </a>
          )}
        </li>
      </ol>

      <p className="mt-10 text-sm text-zinc-500">
        Questions? Email{" "}
        <a
          className="text-zinc-200 underline"
          href="mailto:konstakrokhin@gmail.com"
        >
          konstakrokhin@gmail.com
        </a>{" "}
        or <Link className="text-zinc-200 underline" href="/">go home</Link>.
      </p>
    </main>
  );
}
