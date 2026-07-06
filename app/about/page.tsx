import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About — Embroidery Machine Manuals",
  description:
    "EmbroideryMachineManuals is a free reference for commercial embroidery shop owners and service technicians to find instruction and service manuals for Tajima, Barudan, SWF, Happy, Brother, Toyota and Melco machines.",
  alternates: { canonical: "/about" },
};

const BRANDS = [
  { name: "Tajima", slug: "tajima", country: "Japan", note: "30+ models — TEMX, TFMX, TEHX, TMFX, TMCE series" },
  { name: "Barudan", slug: "barudan", country: "Japan", note: "20+ models — BEAT, BEXS, BEXY, BEVT, BEVY series" },
  { name: "SWF", slug: "swf", country: "South Korea", note: "18 models — E, B, BT, ET, EU, C, K, DM, MA, MAN series" },
  { name: "Happy", slug: "happy", country: "Japan", note: "10 models — HCS Voyager, HCR, HCD, HCA, HCB, HCM, HMS" },
  { name: "Brother Commercial", slug: "brother-commercial", country: "Japan", note: "14 models — BES, BE, BAS, PR series" },
  { name: "Toyota Industrial", slug: "toyota-industrial", country: "Japan", note: "5 models — 850, 851, 860, 9000, 9100" },
  { name: "Melco", slug: "melco", country: "United States", note: "2 models — EMT 10-4T, EMT 10-6T" },
  { name: "ZSK", slug: "zsk", country: "Germany", note: "Sprint and Racer series" },
  { name: "Ricoma", slug: "ricoma", country: "China", note: "EM-1010, MT-1501, CHT-1201" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "About EmbroideryMachineManuals",
  description:
    "EmbroideryMachineManuals is a free reference for commercial embroidery shop owners and service technicians to find instruction and service manuals for commercial embroidery machines.",
  url: "https://embroidery-manuals.vercel.app/about",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={schema} />

      <div className="bg-slate-900 text-white px-4 py-14">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            {" / "}
            <span className="text-slate-300">About</span>
          </nav>
          <h1 className="text-3xl font-bold">About This Site</h1>
          <p className="text-slate-300 mt-3 leading-relaxed">
            A free manual library for commercial embroidery machine owners, operators, and service technicians.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">

        <section className="prose prose-slate max-w-none">
          <h2 className="text-xl font-bold text-slate-800">Why This Exists</h2>
          <p className="text-slate-600 leading-relaxed mt-3">
            Commercial embroidery machine manuals are notoriously hard to find. Manufacturers publish them
            once and let the link rot. Dealers go out of business. Forum threads die. The person who knew
            where the manual was retires.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            Meanwhile, an embroidery shop with a 15-year-old Tajima TMFX-IIC that suddenly starts skipping
            stitches needs the manual <em>today</em> — not after a week of email back-and-forth with a dealer
            who may not even carry that model anymore.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            This site indexes every embroidery machine instruction manual we can find from manufacturers,
            authorized retailers, and technical archives — and presents them on clean, fast, mobile-friendly
            pages so you can find what you need in under 30 seconds.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-5">Brands Covered</h2>
          <div className="grid gap-3">
            {BRANDS.map((b) => (
              <Link key={b.slug} href={`/brands/${b.slug}`}
                className="flex items-start justify-between border border-slate-200 rounded-lg px-4 py-3 hover:border-amber-400 hover:bg-amber-50 transition group">
                <div>
                  <span className="font-semibold text-slate-800 group-hover:text-amber-700">{b.name}</span>
                  <span className="ml-2 text-xs text-slate-400">{b.country}</span>
                  <p className="text-xs text-slate-500 mt-0.5">{b.note}</p>
                </div>
                <span className="text-amber-500 text-sm shrink-0 mt-0.5">Browse →</span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">How It Works</h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              PDFs are sourced from manufacturers' official websites and authorized embroidery parts
              retailers — primarily{" "}
              <a href="https://www.pinpointinternational.com" target="_blank" rel="nofollow noreferrer"
                className="text-amber-600 hover:underline">
                PinPoint International
              </a>
              , one of the most comprehensive third-party embroidery manual archives available. We do not
              host or reproduce copyrighted PDF files — we link directly to the source.
            </p>
            <p>
              Each machine page includes the instruction manual PDF, full specs (heads, needles per head,
              max stitch speed, embroidery area), and auto-generated FAQs drawn from the spec data.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">Who This Is For</h2>
          <ul className="space-y-2 text-sm text-slate-600">
            {[
              "Commercial embroidery shop owners troubleshooting a machine",
              "Service technicians looking up timing specs or part locations",
              "Buyers evaluating a used Tajima, Barudan, or SWF before purchase",
              "Operators new to a machine they inherited from a previous shop",
              "Students in embroidery or garment decoration training programs",
            ].map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-amber-500 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h2 className="text-lg font-bold text-slate-800 mb-2">Missing a manual?</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            If your machine isn't listed, try searching{" "}
            <a href="https://www.manualslib.com" target="_blank" rel="nofollow noreferrer"
              className="text-amber-600 hover:underline">ManualsLib</a>
            {" "}or{" "}
            <a href="https://www.pinpointinternational.com/manufacturer-manuals.html" target="_blank" rel="nofollow noreferrer"
              className="text-amber-600 hover:underline">PinPoint International's manual archive</a>.
            We're adding new models regularly.
          </p>
        </section>

      </div>
    </main>
  );
}
