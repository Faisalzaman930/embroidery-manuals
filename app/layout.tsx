import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://embroidery-manuals.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Embroidery Machine Manuals — Free PDF Downloads",
    template: "%s | EmbroideryMachineManuals",
  },
  description:
    "Free instruction and service manuals for commercial embroidery machines. Tajima, Barudan, SWF, Happy, Brother, Toyota, Melco and more — view or download PDF.",
  openGraph: {
    siteName: "EmbroideryMachineManuals",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">

        <header className="border-b border-slate-200 bg-slate-900 sticky top-0 z-50">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
            <Link href="/" className="text-lg font-bold text-white shrink-0">
              🧵 EmbroideryManuals
            </Link>
            <nav className="flex gap-5 text-sm shrink-0">
              <Link href="/brands/tajima" className="text-slate-300 hover:text-white transition">Tajima</Link>
              <Link href="/brands/barudan" className="text-slate-300 hover:text-white transition">Barudan</Link>
              <Link href="/brands/swf" className="text-slate-300 hover:text-white transition">SWF</Link>
              <Link href="/brands/happy" className="text-slate-300 hover:text-white transition">Happy</Link>
              <Link href="/category/single-head" className="text-slate-300 hover:text-white transition hidden sm:inline">Single Head</Link>
              <Link href="/category/multi-head" className="text-slate-300 hover:text-white transition hidden sm:inline">Multi Head</Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-16 border-t border-slate-200 bg-slate-900 py-10 text-slate-400 text-sm">
          <div className="mx-auto max-w-5xl px-4 grid gap-8 sm:grid-cols-4">
            <div>
              <p className="font-semibold text-white mb-3">Top Brands</p>
              <ul className="space-y-1.5">
                <li><Link href="/brands/tajima" className="hover:text-white transition">Tajima</Link></li>
                <li><Link href="/brands/barudan" className="hover:text-white transition">Barudan</Link></li>
                <li><Link href="/brands/swf" className="hover:text-white transition">SWF</Link></li>
                <li><Link href="/brands/happy" className="hover:text-white transition">Happy</Link></li>
                <li><Link href="/brands/brother-commercial" className="hover:text-white transition">Brother</Link></li>
                <li><Link href="/brands/melco" className="hover:text-white transition">Melco</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-3">Popular Manuals</p>
              <ul className="space-y-1.5">
                <li><Link href="/machines/tajima-temx-c-multi" className="hover:text-white transition">Tajima TEMX-C</Link></li>
                <li><Link href="/machines/tajima-tfmx-c" className="hover:text-white transition">Tajima TFMX-C</Link></li>
                <li><Link href="/machines/barudan-bexs" className="hover:text-white transition">Barudan BEXS</Link></li>
                <li><Link href="/machines/swf-e-multi" className="hover:text-white transition">SWF E Series</Link></li>
                <li><Link href="/machines/happy-hcs-voyager" className="hover:text-white transition">Happy HCS Voyager</Link></li>
                <li><Link href="/machines/brother-bes-1230ac" className="hover:text-white transition">Brother BES-1230AC</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-3">Machine Types</p>
              <ul className="space-y-1.5">
                <li><Link href="/category/single-head" className="hover:text-white transition">Single Head</Link></li>
                <li><Link href="/category/multi-head" className="hover:text-white transition">Multi Head</Link></li>
                <li><Link href="/category/cap" className="hover:text-white transition">Cap / Hat</Link></li>
                <li><Link href="/category/chenille" className="hover:text-white transition">Chenille</Link></li>
                <li><Link href="/category/combination" className="hover:text-white transition">Combination</Link></li>
                <li><Link href="/category/tubular" className="hover:text-white transition">Tubular / Cylinder</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-3">About</p>
              <ul className="space-y-1.5 mb-3">
                <li><Link href="/about" className="hover:text-white transition">About this site</Link></li>
                <li><Link href="/sitemap.xml" className="hover:text-white transition">Sitemap</Link></li>
              </ul>
              <p className="text-slate-500 text-xs leading-relaxed">
                Free PDFs sourced from manufacturers and authorized retailers.
                We do not host copyrighted files.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-5xl px-4 mt-8 pt-6 border-t border-slate-800 text-xs text-slate-600">
            © {new Date().getFullYear()} EmbroideryMachineManuals — All manuals are the property of their respective manufacturers.
          </div>
        </footer>

      </body>
    </html>
  );
}
