// apps/web/app/demo/page.tsx
import { prototypeDemos } from "./_demo";

export const metadata = {
  title: "Demos - Konstantin Solutions",
  robots: { index: false, follow: false },
};

export default function DemoIndexPage() {
  return (
    <div className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[380px] w-[640px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[130px]" />
      </div>

      <main className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/90">
          Demos
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Try the <span className="text-gradient">prototypes</span>
        </h1>
        <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">
          Interactive concept prototypes of AI chatbots and booking/quote
          automation. Not affiliated with any real business.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {prototypeDemos.map((p) => (
            <article
              key={p.url}
              className="glow-card flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <span className="inline-flex w-fit rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-medium text-indigo-300">
                {p.tag}
              </span>
              <h2 className="mt-3 text-base font-semibold leading-snug">{p.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                {p.blurb}
              </p>
              <div className="mt-5">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:shadow-indigo-500/40 hover:brightness-110"
                >
                  Try it ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
