import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Konstantin Krokhin - Full-Stack Portfolio",
  description: "Production-style full-stack apps with Next.js, Prisma, and Neon Postgres.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>

        <header className = "border-b border-zinc-800">
          <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
            <Link href="/" className="font-semibold text-zinc-100"> Konstantin </Link>

            <nav className="flex gap-4 text-sm text-zinc-300">
              <a href="https://github.com/Konstantin-Krokhin" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/konstantin-krokhin-39a35a14b/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-6 py-10">
          {children}
        </main>

        <footer className="border-t border-zinc-800 mt-12">
          <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-zinc-400">
            © {new Date().getFullYear()} Konstantin Solutions
          </div>
        </footer>

      </body>
    </html>
  );
}
