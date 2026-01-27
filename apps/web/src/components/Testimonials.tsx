"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Review = {
  author: string;
  authorUrl: string | null;
  authorPhoto: string | null;
  rating: number | null;
  text: string;
  relativeTime: string | null;
};

export default function Testimonials({ cardClassName }: { cardClassName: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const res = await fetch("/api/reviews");
        const json = await res.json();
        if (!mounted) return;
        setReviews(Array.isArray(json?.reviews) ? json.reviews : []);
      } catch {
        if (!mounted) return;
        setReviews([]);
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (loading) {
    return <div className="text-sm text-zinc-400">Loading reviews...</div>;
  }

  if (reviews.length === 0) {
    return <div className="text-sm text-zinc-400">No reviews available yet.</div>;
  }

  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {reviews.map((r, idx) => (
        <SwiperSlide key={idx}>
          <article className={cardClassName}>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="font-medium text-zinc-100 truncate">
                  {r.authorUrl ? (
                    <a href={r.authorUrl} target="_blank" rel="noreferrer" className="hover:underline">
                      {r.author}
                    </a>
                  ) : (
                    r.author
                  )}
                </div>
                {r.relativeTime ? (
                  <div className="text-xs text-zinc-400">{r.relativeTime}</div>
                ) : null}
              </div>

              {typeof r.rating === "number" ? (
                <div className="text-sm text-zinc-200">{r.rating.toFixed(1)} / 5</div>
              ) : null}
            </div>

            <p className="mt-3 text-sm text-zinc-300 leading-relaxed line-clamp-6">{r.text}</p>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
