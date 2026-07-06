import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "SWF vs Happy Embroidery Machine — Side-by-Side Comparison",
  description:
    "SWF vs Happy: comparing two popular mid-range commercial embroidery machine brands on stitch quality, value, model range, and dealer support. Which is the better buy?",
  alternates: { canonical: "/compare/swf-vs-happy" },
  openGraph: {
    title: "SWF vs Happy Embroidery Machine Comparison",
    description: "Mid-range commercial embroidery machines compared: SWF vs Happy.",
  },
};

const faqItems = [
  {
    q: "Is SWF or Happy better for a first commercial embroidery machine?",
    a: "Both are solid first machines. SWF offers more model variety and is typically more cost-competitive on multi-head configurations, making it a strong choice for shops planning to scale into production. Happy's HCS Voyager single-head is one of the most beginner-friendly commercial machines available — quieter, lighter, and easier to learn than most competitors.",
  },
  {
    q: "How does SWF stitch quality compare to Happy?",
    a: "Both produce commercially acceptable stitch quality. Happy has a slight reputation advantage for consistency and quietness on single-head machines. SWF machines can require more attention to tension calibration on the multi-head models but are competitive with Happy at equivalent price points.",
  },
  {
    q: "Which brand has better resale value — SWF or Happy?",
    a: "Happy machines — particularly the HCS Voyager and HCR series — tend to hold resale value slightly better due to brand recognition in the hobbyist and small-business market. SWF multi-head machines have a larger used market volume but slightly lower value retention.",
  },
];

export default function SwfVsHappyPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Compare", path: "/compare" },
      { name: "SWF vs Happy", path: "/compare/swf-vs-happy" },
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
            <span className="text-slate-300">SWF vs Happy</span>
          </nav>
          <h1 className="text-3xl font-bold">SWF vs Happy Embroidery Machine</h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-sm leading-relaxed">
            Two mid-range commercial embroidery brands popular with growing shops and production facilities.
            Here is how they compare on value, quality, and the right use case for each.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        <section className="overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-5 py-3 text-left font-semibold w-40">Category</th>
                <th className="px-5 py-3 text-left font-semibold text-amber-400">SWF</th>
                <th className="px-5 py-3 text-left font-semibold text-amber-400">Happy</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Origin", "South Korea (Sewon Fashion, est. 1984)", "Japan (Happy Industrial Corp.)"],
                ["Price tier", "Mid-range — best value per head", "Mid-range — slight premium over SWF"],
                ["Flagship single-head", "ET Compact / ET Full Size", "HCS Voyager"],
                ["Flagship multi-head", "E Series / K Series", "HCR / HMS series"],
                ["Model range", "Very wide — 18+ configurations", "Moderate — 8 core models"],
                ["Noise level", "Moderate", "Quieter than average — a noted strength"],
                ["Max stitch speed", "Up to 1,200 SPM (K series)", "Up to 1,000 SPM"],
                ["Cap embroidery", "Yes — cap frame attachments available", "Yes — Happy CapFrame system"],
                ["Cylinder arm", "Yes — BT TH Cylinder Type", "Not standard"],
                ["Parts availability", "Good — growing North American support", "Good — Japanese quality supply chain"],
                ["Ideal buyer", "Production shops, value-focused buyers", "Small shops, quiet environments, beginners"],
              ].map(([cat, swf, hap], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <th className="px-5 py-3 text-left font-semibold text-slate-600">{cat}</th>
                  <td className="px-5 py-3 text-slate-700">{swf}</td>
                  <td className="px-5 py-3 text-slate-700">{hap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="grid sm:grid-cols-2 gap-6">
          <div className="border border-slate-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Choose SWF if…</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "You need the best cost-per-head on a multi-head machine",
                "You want a wide range of configurations (cylinder, bridge, dual-function)",
                "You are scaling a production embroidery operation and need volume output",
                "You need a machine faster than 1,000 SPM for high-density designs",
                "Floor space allows a larger machine footprint",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-amber-500 shrink-0">✓</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-slate-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Choose Happy if…</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "Quiet operation matters — shop in a residential area or shared space",
                "You want a beginner-friendly single-head (the HCS Voyager is one of the easiest to learn)",
                "Japanese engineering and quality assurance are important to you",
                "You are buying a single-head and don't need a wide model range",
                "Resale value is a consideration for your investment",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-amber-500 shrink-0">✓</span><span>{item}</span>
                </li>
              ))}
            </ul>
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
          <Link href="/brands/swf"
            className="block border border-slate-200 rounded-xl p-5 hover:border-amber-400 hover:bg-amber-50 transition group">
            <h3 className="font-bold text-slate-800 group-hover:text-amber-700">Browse SWF Manuals →</h3>
            <p className="text-xs text-slate-500 mt-1">E, B, BT, ET, EU, C, K, DM, MA, MAN series</p>
          </Link>
          <Link href="/brands/happy"
            className="block border border-slate-200 rounded-xl p-5 hover:border-amber-400 hover:bg-amber-50 transition group">
            <h3 className="font-bold text-slate-800 group-hover:text-amber-700">Browse Happy Manuals →</h3>
            <p className="text-xs text-slate-500 mt-1">HCS Voyager, HCR, HCD, HCA, HMS series</p>
          </Link>
        </section>

      </div>
    </main>
  );
}
