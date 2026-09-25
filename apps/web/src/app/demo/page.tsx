// apps/web/app/demo/page.tsx
import { prototypeDemos } from "./_demo";

export const metadata = {
  title: "Demos - Konstantin Solutions",
  robots: { index: false, follow: false },
};

export default function DemoIndexPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-3xl font-bold">Live prototypes</h1>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Interactive concept prototypes of AI chatbots and booking/quote
          automation. Not affiliated with any real business.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {prototypeDemos.map((p) => (
            <div
              key={p.url}
              className="rounded-3xl border border-zinc-800 bg-zinc-950/30 p-6"
            >
              <div className="text-sm text-zinc-400">{p.tag}</div>
              <div className="mt-1 text-xl font-semibold">{p.title}</div>
              <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
                {p.blurb}
              </p>

              <div className="mt-4">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-white"
                >
                  Try it ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
