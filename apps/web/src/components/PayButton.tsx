"use client";

export function PayButton({ priceId }: { priceId: string }) {
	return (
		<div className="mt-4 flex gap-3">
			<button
				type="button"
				onClick={async () => {
					const res = await fetch("/api/stripe/checkout", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ priceId })
					});

					if (!res.ok) throw new Error(await res.text());

					const { url } = await res.json();
					window.location.assign(url);
				}}
				className="rounded-lg border px-10 py-2 transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-white">
					Pay
				</button>
			</div>
	)
}