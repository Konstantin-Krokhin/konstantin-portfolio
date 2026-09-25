"use client";

import { useRef } from "react";
import type { PrototypeDemo } from "@/app/demo/_demo";

export default function DemoCarousel({ demos }: { demos: PrototypeDemo[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (dir === 1 && el.scrollLeft >= max - 10) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else if (dir === -1 && el.scrollLeft <= 10) {
      el.scrollTo({ left: max, behavior: "smooth" });
    } else {
      el.scrollBy({ left: dir * 360, behavior: "smooth" });
    }
  };

  const arrow =
    "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-lg text-zinc-200 backdrop-blur transition hover:border-cyan-400/50 hover:text-cyan-300";

  return (
    <div className="relative mt-10">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-zinc-500">
          {demos.length} prototypes — swipe or use the arrows
        </p>
        <div className="flex gap-2">
          <button type="button" aria-label="Previous demos" onClick={() => nudge(-1)} className={arrow}>
            ←
          </button>
          <button type="button" aria-label="Next demos" onClick={() => nudge(1)} className={arrow}>
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {demos.map((p) => (
          <article
            key={p.url}
            className="glow-card flex w-[300px] shrink-0 snap-start flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:w-[340px]"
          >
            <span className="inline-flex w-fit rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-xs font-medium text-indigo-300">
              {p.tag}
            </span>
            <h3 className="mt-3 text-base font-semibold leading-snug">
              {p.title}
            </h3>
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
    </div>
  );
}
