import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Konstantin Solutions - Web Development & AI Integration",
  description: "Web development and AI automations for Canadian businesses.",
};

const container = "mx-auto max-x-7xl px-6";

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
          "min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased flex flex-col",
        ].join(" ")}
      >

        <header className = "border-b border-zinc-800">
          <div className={`${container} flex items-center justify-between py-4`}>
            <Link href="/" className="font-semibold"> Konstantin </Link>

            <nav className="flex gap-4 text-sm text-zinc-300">
              <Link className="hover:text-zinc-100" href="/contact">Contact</Link>
              <a className="hover:text-zinc-100" href="https://github.com/Konstantin-Krokhin" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="hover:text-zinc-200" href="https://www.linkedin.com/in/konstantin-krokhin-39a35a14b/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </nav>
          </div>
        </header>

        <main className={`${container} py-12 flex-1`}>
          {children}
        </main>

        <footer className="border-t border-zinc-800">
          <div className={`${container} py-8 text-sm text-zinc-400`}>
            <Link href="/demo"> Demos </Link>
            <BusinessDetails variant="compact" />
            <div className="mt-4 text-s text-zinc-500">
              © {new Date().getFullYear()} Konstantin Solutions
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
