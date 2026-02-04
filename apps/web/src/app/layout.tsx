import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link"
import BusinessDetails from "@/components/BusinessDetails"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Konstantin Solutions",
  url: "https://konstantinsolutions.tech",
  email: "sales.konsta@gmail.com",
  telephone: "+16725585554",
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "AdministrativeArea", name: "Greater Toronto Area" }
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "14:00"
    }
  ]
};

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
