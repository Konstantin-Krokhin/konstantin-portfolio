import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link"
import BusinessDetails from "@/components/BusinessDetails"
import { professionalServiceJsonLd } from "@/content/jsonld";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Konstantin Solutions — AI Chatbots & Python Automation",
  description: "AI chatbots and Python automation for Canadian businesses.",
  openGraph: {
    title: "Konstantin Solutions — AI Chatbots & Python Automation",
    description:
      "I build chatbots and Python automation for small businesses in the GTA — working prototype first, so you see the value before you pay.",
    url: "https://k-solutions.tech",
    siteName: "Konstantin Solutions",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Konstantin Solutions — AI Chatbots & Python Automation",
    description: "AI chatbots and Python automation for Canadian businesses.",
  },
};

const container = "mx-auto max-w-7xl px-6";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
      </head>
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "min-h-screen bg-[#05070d] text-zinc-100 font-sans antialiased flex flex-col",
        ].join(" ")}
      >

        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070d]/80 backdrop-blur-md">
          <div className={`${container} flex items-center justify-between py-4`}>
            <Link href="/" className="font-bold tracking-tight">
              Konstantin <span className="text-gradient">Solutions</span>
            </Link>

            <nav className="flex items-center gap-5 text-sm text-zinc-400">
              <a className="hidden transition hover:text-zinc-100 sm:inline" href="/#services">Services</a>
              <a className="hidden transition hover:text-zinc-100 sm:inline" href="/#demos">Demos</a>
              <Link className="transition hover:text-zinc-100" href="/contact">Contact</Link>
              <a
                href="#contact"
                className="rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:brightness-110"
              >
                Get in touch
              </a>
            </nav>
          </div>
        </header>

        <main className={`${container} min-w-0 py-12 flex-1`}>
          {children}
        </main>

        <footer className="border-t border-white/10">
          <div className={`${container} flex flex-col gap-4 py-10 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between`}>
            <div>
              <Link href="/" className="font-semibold text-zinc-200">
                Konstantin <span className="text-gradient">Solutions</span>
              </Link>
              <div className="mt-1">© {new Date().getFullYear()} · AI chatbots & Python automation</div>
            </div>
            <BusinessDetails variant="compact" />
          </div>
        </footer>

      </body>
    </html>
  );
}
