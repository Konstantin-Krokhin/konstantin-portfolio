// apps/web/app/demo/a-y-electrical/page.tsx
import Link from "next/link";

export const metadata = {
  title: "A & Y Electrical - Demo",
  robots: { index: false, follow: false },
};

export default function DemoAYElectrical() {
  const businessName = "A & Y Electrical";
  const phoneDisplay = "(416) 939-3301";
  const phoneHref = "tel:+14169393301";
  const email = "[email protected]";
  const serviceAreas = ["North York", "Toronto", "Vaughan", "Scarborough", "Mississauga", "Greater Toronto Area"];

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Top bar */}
      <div className="border-b border-zinc-800 bg-zinc-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-xs text-zinc-400">
            Concept demo (not affiliated). Built from public info.
          </div>

          <div className="flex items-center gap-2">
            <a
              href={phoneHref}
              className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-white"
            >
              Call now: {phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1 text-xs text-zinc-300">
              <span className="font-semibold text-zinc-100">North York + GTA</span>
              <span className="text-zinc-500">|</span>
              <span>Residential, commercial, emergency</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              {businessName}
              <span className="mt-2 block text-zinc-300 text-xl md:text-2xl">
                Electrical repairs, installs, and upgrades you can trust
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-zinc-300">
              Fast troubleshooting. Clean work. Clear communication. Built to convert mobile visitors into calls.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={phoneHref}
                className="rounded-2xl bg-zinc-100 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-white"
              >
                Call {phoneDisplay}
              </a>

              <a
                href="#estimate"
                className="rounded-2xl border border-zinc-700 bg-zinc-900/40 px-5 py-3 text-sm font-semibold text-zinc-100 hover:bg-zinc-900"
              >
                Get an estimate
              </a>

              <Link
                href="/demo"
                className="rounded-2xl border border-zinc-800 bg-zinc-950/40 px-5 py-3 text-sm font-semibold text-zinc-200 hover:border-zinc-700 hover:text-white"
              >
                Back to demos
              </Link>
            </div>

            {/* Trust bar */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
                <div className="text-sm text-zinc-300">
                  <span className="font-semibold text-zinc-100">5.0</span> (47 Google reviews)
                </div>
                <div className="mt-1 text-xs text-zinc-500">
                  Trust signal from their current website.
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-4">
                <div className="text-sm text-zinc-300">
                  Emergency troubleshooting available
                </div>
                <div className="mt-1 text-xs text-zinc-500">
                  Clear CTA + fast response positioning.
                </div>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950/30 p-6">
            <h2 className="text-lg font-semibold">What this demo improves</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
              <li>More specific services and common jobs (less generic template text)</li>
              <li>Sticky call-to-action mindset for mobile users</li>
              <li>Cleaner service areas block + clearer next steps</li>
              <li>Stronger structure for SEO pages later (if they want)</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900/20 p-4 text-sm text-zinc-300">
              <div className="font-semibold text-zinc-100">Quick contact</div>
              <div className="mt-1">{phoneDisplay}</div>
              <div className="mt-1">{email}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-semibold">Services</h2>
        <p className="mt-2 max-w-3xl text-zinc-300">
          Their current site highlights residential, commercial, and emergency work. This demo makes it scannable and call-focused.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Card
            title="Residential"
            items={[
              "Panel upgrades and power distribution",
              "Lighting installs and upgrades",
              "Safety checks and troubleshooting",
              "EV charger installs (common request)",
              "Flickering lights diagnostics",
            ]}
          />
          <Card
            title="Commercial"
            items={[
              "Power distribution and troubleshooting",
              "Lighting upgrades and installs",
              "Equipment installs",
              "After-hours work available",
              "Emergency response",
            ]}
          />
          <Card
            title="Emergency"
            items={[
              "Rapid troubleshooting",
              "Restore safety and power",
              "Identify root cause",
              "Residential and commercial",
              "Trusted local service",
            ]}
          />
        </div>

        <div className="mt-6 rounded-3xl border border-zinc-800 bg-zinc-950/30 p-6">
          <h3 className="text-lg font-semibold">Common jobs people search for</h3>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {[
              "Panel upgrade",
              "Pot lights",
              "Ceiling fan install",
              "EV charger",
              "Outlet not working",
              "Breaker tripping",
              "Lights flickering",
              "Emergency troubleshooting",
            ].map((x) => (
              <span key={x} className="rounded-full border border-zinc-800 bg-zinc-900/30 px-3 py-1 text-zinc-200">
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews (short snippets only) */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-2xl font-semibold">Reviews</h2>
        <p className="mt-2 text-zinc-300">
          Short, high-signal snippets (keep it under 1 screen on mobile).
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Quote text="Extremely quick, prompt, efficient and courteous service." />
          <Quote text="Very prompt, very caring, very attentive." />
          <Quote text="Fantastic job installing our ceiling fan efficiently." />
        </div>
      </section>

      {/* Service areas */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950/30 p-6">
          <h2 className="text-2xl font-semibold">Service areas</h2>
          <p className="mt-2 text-zinc-300">
            North York and the Greater Toronto Area.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {serviceAreas.map((x) => (
              <span key={x} className="rounded-full border border-zinc-800 bg-zinc-900/30 px-3 py-1 text-sm text-zinc-200">
                {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate form */}
      <section id="estimate" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950/30 p-6">
          <h2 className="text-2xl font-semibold">Get an estimate</h2>
          <p className="mt-2 text-zinc-300">
            Demo UI. In production this can email the office, send SMS, and track conversions.
          </p>

          <form className="mt-6 grid gap-4 md:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Phone" placeholder="(416) 123-4567" />
            <Field label="Email" placeholder="you@email.com" />
            <Field label="City" placeholder="North York / Toronto / Vaughan..." />
            <div className="md:col-span-2">
              <Textarea label="What do you need help with?" placeholder="Briefly describe the issue" />
            </div>

            <div className="md:col-span-2 flex flex-wrap gap-3">
              <a
                href={phoneHref}
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
          </form>

          <div className="mt-6 text-xs text-zinc-500">
            Concept demo only. Not affiliated with the business. Built to illustrate structure and conversion.
          </div>
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 bg-zinc-950/90 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-1">
          <div className="text-xs text-zinc-300">Need an electrician?</div>
          <a
            href={phoneHref}
            className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 hover:bg-white"
          >
            Call
          </a>
        </div>
      </div>
    </main>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/30 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
        {items.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

function Quote({ text }: { text: string }) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-950/30 p-6 text-sm text-zinc-200">
      "{text}"
      <div className="mt-2 text-xs text-zinc-500">Google review snippet (demo)</div>
    </div>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="text-zinc-300">{label}</span>
      <input
        placeholder={placeholder}
        className="rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-zinc-600"
      />
    </label>
  );
}

function Textarea({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="text-zinc-300">{label}</span>
      <textarea
        placeholder={placeholder}
        className="min-h-[120px] rounded-2xl border border-zinc-800 bg-zinc-950/40 px-4 py-3 text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-zinc-600"
      />
    </label>
  );
}