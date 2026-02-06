// apps/web/app/demo/page.tsx
import Link from "next/link";
import { demos } from "./_demo";

export const metadata = {
  title: "Demos - Konstantin Solutions",
  robots: { index: false, follow: false },
};

export default function DemoIndexPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold">Website demos</h1>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Concept demos built from public business listings. Not affiliated with the businesses.
          Used to show layout, mobile experience, and conversion-focused structure.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {demos.map((d) => (
            <div
              key={d.slug}
              className="rounded-3xl border border-zinc-800 bg-zinc-950/30 p-6"
            >
              <div className="text-sm text-zinc-400">{d.category}</div>
              <div className="mt-1 text-xl font-semibold">{d.businessName}</div>
              <div className="mt-2 text-sm text-zinc-300">{d.city}</div>

              <div className="mt-4 flex items-center gap-3">
                <Link
                  href={`/demo/${d.slug}`}
                  className="rounded-2xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-white"
                >
                  View demo
                </Link>
                <div className="text-xs text-zinc-500">
                  {d.rating ? `${d.rating} (${d.reviewsCount ?? 0} reviews)` : ""}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}