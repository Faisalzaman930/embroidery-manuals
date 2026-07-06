import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Tajima vs Barudan Embroidery Machine — Which Should You Buy?",
  description:
    "Tajima vs Barudan: an honest side-by-side comparison of the two most popular Japanese commercial embroidery machine brands. Models, stitch quality, support, and who each is best for.",
  alternates: { canonical: "/compare/tajima-vs-barudan" },
  openGraph: {
    title: "Tajima vs Barudan Embroidery Machine",
    description: "An honest side-by-side comparison for commercial embroidery shop owners.",
  },
};

const faqItems = [
  {
    q: "Is Tajima better than Barudan?",
    a: "Neither is objectively better — they are both premium Japanese machines with decades of commercial embroidery heritage. Tajima has the larger global distribution network and wider model range. Barudan is favored by many experienced operators for its stitch quality at high speed. The right choice depends on your local dealer support, production volume, and the specific models available in your market.",
  },
  {
    q: "Which is more expensive, Tajima or Barudan?",
    a: "Both brands are in the premium tier and price comparably for similar head counts and configurations. New 6-head machines from either brand typically range from $50,000 to $90,000 USD depending on configuration and dealer. Used machines from both brands hold their value well.",
  },
  {
    q: "Which brand is easier to find parts for?",
    a: "Tajima has the larger global parts distribution network due to its market size advantage. Most commercial embroidery parts suppliers stock Tajima-compatible parts. Barudan parts are widely available in North America but may be harder to source in some international markets.",
  },
  {
    q: "Can I use the same embroidery designs on both Tajima and Barudan machines?",
    a: "Yes — both machines run standard embroidery file formats including DST, EXP, JEF, and most common formats. Designs digitized for one brand will run on the other without modification in most cases.",
  },
];

export default function TajimaVsBarudanPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Compare", path: "/compare" },
      { name: "Tajima vs Barudan", path: "/compare/tajima-vs-barudan" },
    ]),
    faqSchema(faqItems),
  ];

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={schemas} />

      <div className="bg-slate-900 text-white px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            {" / "}
            <Link href="/compare" className="hover:text-white transition">Compare</Link>
            {" / "}
            <span className="text-slate-300">Tajima vs Barudan</span>
          </nav>
          <h1 className="text-3xl font-bold">Tajima vs Barudan Embroidery Machine</h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-sm leading-relaxed">
            Both are premium Japanese commercial embroidery machine brands with decades of production heritage.
            Here is an honest breakdown of how they differ and which is the better choice for your shop.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        <section className="overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-5 py-3 text-left font-semibold w-40">Category</th>
                <th className="px-5 py-3 text-left font-semibold text-amber-400">Tajima</th>
                <th className="px-5 py-3 text-left font-semibold text-amber-400">Barudan</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Founded", "1944, Nagoya Japan", "1955, Nagoya Japan"],
                ["Market position", "Largest embroidery machine maker globally", "Premium tier, strong in North America"],
                ["Flagship multi-head", "TEMX-C series", "BEAT 802 / BEAT ME 900"],
                ["Flagship single-head", "TFMX-C", "BEXS / BEVT CB Elite Pro"],
                ["Chenille capability", "Yes — TMCE series", "No dedicated chenille line"],
                ["Cap embroidery", "TMAR-K / TMAR-KC rotary system", "Cap frame attachment system"],
                ["Max stitch speed", "Up to 1,200 SPM", "Up to 1,000 SPM"],
                ["Parts availability", "Excellent — widest global network", "Very good — especially North America"],
                ["Dealer network", "Largest in the industry", "Strong in NA, Europe, select markets"],
                ["Known for", "Reliability, range, ecosystem", "Stitch quality, build, consistency"],
                ["Price tier", "Premium", "Premium"],
              ].map(([cat, taj, bar], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <th className="px-5 py-3 text-left font-semibold text-slate-600">{cat}</th>
                  <td className="px-5 py-3 text-slate-700">{taj}</td>
                  <td className="px-5 py-3 text-slate-700">{bar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="grid sm:grid-cols-2 gap-6">
          <div className="border border-slate-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Choose Tajima if…</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "You are buying your first commercial embroidery machine and want the widest service network",
                "You need chenille capability alongside standard embroidery",
                "You want the largest selection of new and used machines on the market",
                "Replacement parts availability is a top priority for your operation",
                "You run a multi-head shop and want maximum head-count flexibility",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-amber-500 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-slate-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Choose Barudan if…</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "Stitch quality at high production speeds is your primary concern",
                "You have access to a strong Barudan dealer in your area",
                "You are buying a used machine and the BEAT series is locally available",
                "You prefer a simpler, more direct operator interface",
                "You are in North America where Barudan has deep dealer penetration",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-amber-500 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4">Tajima Models vs Barudan Equivalents</h2>
          <div className="overflow-hidden rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">Category</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">Tajima model</th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-600">Barudan equivalent</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Multi-head production", "TEMX-C (6–20 head)", "BEAT ME 900 (6–20 head)"],
                  ["Multi-head standard", "TFMX-IIC (4–12 head)", "BEAT 802 / BEAT IV"],
                  ["Single-head commercial", "TFMX-C", "BEXS / BEXY"],
                  ["Single-head large field", "TEMX-C single", "BEVT CB Elite Pro / BEVY"],
                  ["Cap embroidery system", "TMAR-KC / TMAR-KCII", "Barudan cap frame system"],
                ].map(([cat, taj, bar], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-4 py-3 text-slate-600 font-medium">{cat}</td>
                    <td className="px-4 py-3 text-slate-700">
                      <Link href={`/brands/tajima`} className="text-amber-600 hover:underline">{taj}</Link>
                    </td>
                    <td className="px-4 py-3 text-slate-700">
                      <Link href={`/brands/barudan`} className="text-amber-600 hover:underline">{bar}</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-800 mb-1">{item.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid sm:grid-cols-2 gap-4">
          <Link href="/brands/tajima"
            className="block border border-slate-200 rounded-xl p-5 hover:border-amber-400 hover:bg-amber-50 transition group">
            <h3 className="font-bold text-slate-800 group-hover:text-amber-700">Browse Tajima Manuals →</h3>
            <p className="text-xs text-slate-500 mt-1">TEMX-C, TFMX-C, TEHX, TMCE and more</p>
          </Link>
          <Link href="/brands/barudan"
            className="block border border-slate-200 rounded-xl p-5 hover:border-amber-400 hover:bg-amber-50 transition group">
            <h3 className="font-bold text-slate-800 group-hover:text-amber-700">Browse Barudan Manuals →</h3>
            <p className="text-xs text-slate-500 mt-1">BEAT series, BEXS, BEXY, BEVT and more</p>
          </Link>
        </section>

      </div>
    </main>
  );
}
