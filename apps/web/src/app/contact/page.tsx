// app/contact/page.tsx
import type { Metadata } from "next";
import BusinessDetails from "@/components/BusinessDetails";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact - Konstantin Solutions",
  description: "Contact Konstantin Solutions for web development and AI automations in Toronto and GTA."
};

const card = "rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="text-sm text-zinc-400">
          Tell me what you need and I will reply with next steps and a quote range.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <BusinessDetails className={card} />
        <div className={card}>
          <ContactForm cardClassName="border-0 bg-transparent p-0" />
        </div>
      </div>
    </div>
  );
}
