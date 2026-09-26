"use client";

export function PayButton({ priceId }: { priceId: string }) {
	return (
		<div>
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
				className="block w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-center text-sm font-medium text-zinc-100 transition hover:border-white/30 hover:bg-white/10">
					Pay
				</button>
			</div>
	)
}