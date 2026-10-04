import Link from "next/link";

export const metadata = {
  title: "Payment cancelled | Konstantin Solutions",
  description: "Your payment was cancelled. No charge was made.",
};

export default function PayCancel() {
  return (
    <main className="mx-auto max-w-xl px-6 py-20 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-4xl">
        ✕
      </div>
      <h1 className="text-3xl font-bold tracking-tight">Payment cancelled</h1>
      <p className="mt-3 text-zinc-400">
        No charge was made. If something went wrong, you can try again — or
        just reach out and we&apos;ll sort it out.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/#services"
          className="rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:brightness-110"
        >
          Try again
        </Link>
        <Link
          href="/contact"
          className="rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/5"
        >
          Contact me
        </Link>
      </div>
    </main>
  );
}
