// apps/web/app/demo/[slug]/page.tsx
import { notFound } from "next/navigation";
import { demos } from "../_demo";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const demo = demos.find((d) => d.slug === params.slug);
  if (!demo) return {};
  return {
    title: `${demo.businessName} - Demo`,
    robots: { index: false, follow: false },
  };
}

export default function DemoPage({ params }: { params: { slug: string } }) {
  const demo = demos.find((d) => d.slug === params.slug);
  if (!demo) return notFound();

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="border-b border-zinc-800 bg-zinc-950/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="text-sm text-zinc-300">
            Concept demo (not affiliated). Built from public listing info.
          </div>
          <a
            href={demo.phoneHref}
            className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-white"
          >
            Call now: {demo.phoneDisplay}
          </a>
        </div>
      </div>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300">
          <span className="font-semibold text-zinc-100">{demo.hoursNote ?? "Open"}</span>
          <span className="text-zinc-500">|</span>
          <span>{demo.city}</span>
        </div>

        <h1 className="mt-4 text-3xl font-bold md:text-4xl">
          {demo.businessName}
          <span className="block text-zinc-300">
            Fast, reliable service - book by phone or request a quote
          </span>
        </h1>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={demo.phoneHref}
            className="rounded-2xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-white"
          >
            Call {demo.phoneDisplay}
          </a>
          <a
            href="#quote"
            className="rounded-2xl border border-zinc-700 bg-zinc-900/40 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
          >
            Get a quote
          </a>
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4 text-sm text-zinc-300">
          <div className="flex flex-wrap items-center gap-2">
            {demo.rating ? (
              <>
                <span className="font-semibold text-zinc-100">{demo.rating}</span>
                <span className="text-zinc-500">/</span>
                <span>{demo.reviewsCount ?? 0} reviews (Google)</span>
                <span className="text-zinc-500">|</span>
              </>
            ) : null}
            <span>{demo.address}</span>
          </div>
        </div>

        <section id="quote" className="mt-10 rounded-3xl border border-zinc-800 bg-zinc-950/30 p-6">
          <h2 className="text-2xl font-semibold">Request a quote</h2>
          <p className="mt-2 text-zinc-300">
            Demo UI. In production this can send email/SMS, track conversions, and connect analytics.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <input
              placeholder="Name"
              className="rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-zinc-600"
            />
            <input
              placeholder="Phone"
              className="rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-zinc-600"
            />
            <textarea
              placeholder="What do you need help with?"
              className="md:col-span-2 min-h-[120px] rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-zinc-600"
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={demo.phoneHref}
              className="rounded-2xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-white"
            >
              Call now
            </a>
            <button
              type="button"
              className="rounded-2xl border border-zinc-700 bg-zinc-900/40 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
            >
              Send request (demo)
            </button>
          </div>

          <div className="mt-6 text-xs text-zinc-500">
            {demo.notes ?? "Concept demo only. Not affiliated with the business."}
          </div>
        </section>
      </section>

      <footer className="border-t border-zinc-800 bg-zinc-950/60">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-zinc-400">
          Demo by Konstantin Solutions. Contact to build a live version.
        </div>
      </footer>
    </main>
  );
}