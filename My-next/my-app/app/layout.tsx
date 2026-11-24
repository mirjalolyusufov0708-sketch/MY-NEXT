import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mirjalol | Developer Portfolio",
  description: "Mirjalol's developer portfolio, skills and language-learning journey.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/languages", label: "Languages" },
  { href: "/contact", label: "Contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080d1b]/85 backdrop-blur-2xl">
          <nav className="max-w-7xl mx-auto px-5 md:px-8 min-h-20 flex flex-wrap items-center justify-between gap-4 py-3">
            <Link href="/" className="text-2xl font-black tracking-tight">
              <span className="gradient-text">Mirjalol</span><span className="text-slate-200">.dev</span>
            </Link>
            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}
                  className="rounded-xl px-3 sm:px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-white/10 bg-[#080d1b]/80">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-3">
            <Link href="/" className="text-lg font-bold"><span className="gradient-text">Mirjalol</span>.dev</Link>
            <p className="text-slate-500 text-sm text-center">Building ideas into reality, one line of code at a time.</p>
            <p className="text-slate-600 text-xs">© 2026 Mirjalol</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
