"use client";

export function PayButton({ priceId }: { priceId: string }) {
	return (
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
			className="rounded-lg border px-4 py-2"
		>
				Pay
			</button>
	)
}