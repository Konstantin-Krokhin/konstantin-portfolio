import { NextResponse } from "next/server";

type GooglePlaceReview = {
  rating?: number;
  text?: { text?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!key || !placeId) {
    return NextResponse.json(
      { error: "Missing GOOGLE_PLACES_API_KEY or GOOGLE_PLACE_ID" },
      { status: 500 }
    );
  }

  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(
    placeId
  )}?key=${encodeURIComponent(key)}&languageCode=en`;

  const res = await fetch(url, {
    headers: {
      // FieldMask is required for Places API (New)
      "X-Goog-FieldMask": "rating,reviews",
      "Content-Type": "application/json",
    },
    // avoid caching stale reviews during dev; you can change to force-cache later
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return NextResponse.json(
      { error: "Google Places request failed", status: res.status, body: text },
      { status: 502 }
    );
  }

  const data = (await res.json()) as {
    rating?: number;
    reviews?: GooglePlaceReview[];
  };

  const reviews = (data.reviews ?? [])
    .map((r) => {
      const reviewText = (r.text?.text ?? "").trim();
      return {
        author: r.authorAttribution?.displayName ?? "Google user",
        authorUrl: r.authorAttribution?.uri ?? null,
        authorPhoto: r.authorAttribution?.photoUri ?? null,
        rating: r.rating ?? null,
        text: reviewText,
        relativeTime: r.relativePublishTimeDescription ?? null,
        publishTime: r.publishTime ?? null,
      };
    })
    .filter((r) => r.text.length > 0)
    .slice(0, 5);

  return NextResponse.json({
    rating: data.rating ?? null,
    reviews,
  });
}
