import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Single Head vs Multi Head Embroidery Machine — Which Do You Need?",
  description:
    "Single-head vs multi-head embroidery machine: a complete breakdown of cost, production volume, floor space, and which is right for your embroidery business at every stage.",
  alternates: { canonical: "/compare/single-head-vs-multi-head-embroidery-machine" },
  openGraph: {
    title: "Single Head vs Multi Head Embroidery Machine",
    description: "Which machine type is right for your embroidery business? A complete breakdown.",
  },
};

const faqItems = [
  {
    q: "How many heads do I need for a commercial embroidery business?",
    a: "A single-head machine is sufficient for custom one-off orders, sampling, and small runs under 12 pieces. For production embroidery — uniforms, promotional items, caps in bulk — a minimum of 4–6 heads is standard. Most production shops start with a 6-head and add more heads or machines as volume grows.",
  },
  {
    q: "Can a single-head machine produce the same quality as a multi-head?",
    a: "Yes — stitch quality is identical. The machine type affects production throughput, not quality. A single-head Tajima TFMX-C produces the same stitch quality as a multi-head Tajima TEMX-C. The difference is purely how many garments can be embroidered simultaneously.",
  },
  {
    q: "How much does a multi-head embroidery machine cost compared to single-head?",
    a: "New single-head commercial machines range from approximately $8,000 to $25,000 USD. New multi-head machines start around $30,000 for a 4-head and range up to $150,000+ for a 20-head. Used machines are widely available at 30–60% of new prices for both types.",
  },
  {
    q: "What is the minimum order quantity that justifies a multi-head machine?",
    a: "As a rough guideline, if you regularly produce orders of 24+ identical pieces, a multi-head machine becomes economically justifiable. Below that volume, a single-head machine with faster turnaround is usually more efficient. The exact break-even depends on your pricing, hourly costs, and design complexity.",
  },
  {
    q: "Can I embroider different designs on each head of a multi-head machine?",
    a: "No — all heads on a standard multi-head embroidery machine run the same design simultaneously. Each head embroiders an identical copy of the design on a separate garment. For different designs simultaneously, you need separate single-head machines or a machine with independent head control (rare and expensive).",
  },
];

export default function SingleVsMultiPage() {
  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Compare", path: "/compare" },
      { name: "Single Head vs Multi Head", path: "/compare/single-head-vs-multi-head-embroidery-machine" },
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
            <span className="text-slate-300">Single Head vs Multi Head</span>
          </nav>
          <h1 className="text-3xl font-bold">Single Head vs Multi Head Embroidery Machine</h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-sm leading-relaxed">
            The most fundamental machine decision for any commercial embroidery business.
            Here is a complete breakdown of when each type makes sense, the cost difference, and popular models for each.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">

        <section className="overflow-hidden rounded-xl border border-slate-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="px-5 py-3 text-left font-semibold w-44">Category</th>
                <th className="px-5 py-3 text-left font-semibold text-amber-400">Single Head</th>
                <th className="px-5 py-3 text-left font-semibold text-amber-400">Multi Head</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Simultaneous output", "1 garment at a time", "2–20+ garments simultaneously"],
                ["New machine cost", "$8,000 – $25,000", "$30,000 – $150,000+"],
                ["Floor space", "Fits on a table — minimal", "Requires dedicated floor area"],
                ["Setup time per run", "Shorter — 1 hoop to load", "Longer — all heads must be hooped"],
                ["Best order size", "1 – 24 pieces per run", "24+ pieces per run"],
                ["Design flexibility", "Change designs instantly", "All heads run the same design"],
                ["Ideal for", "Custom shops, samples, boutique", "Production shops, uniforms, bulk"],
                ["Learning curve", "Lower — simpler operation", "Higher — more heads to monitor"],
                ["Used market", "Widely available, lower prices", "Widely available, higher prices"],
                ["Popular brands", "Tajima TFMX-C, Barudan BEXS, Happy HCS Voyager, SWF ET", "Tajima TEMX-C, Barudan BEAT, SWF E Multi, Happy HCR"],
              ].map(([cat, single, multi], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <th className="px-5 py-3 text-left font-semibold text-slate-600">{cat}</th>
                  <td className="px-5 py-3 text-slate-700">{single}</td>
                  <td className="px-5 py-3 text-slate-700">{multi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="grid sm:grid-cols-2 gap-6">
          <div className="border border-slate-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Choose single-head if…</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "You are starting an embroidery business and want lower upfront investment",
                "Most orders are custom — different designs per garment, small quantities",
                "You do sample work or prototyping for larger orders",
                "Floor space is limited — apartment, garage, or small studio",
                "You want the flexibility to switch designs multiple times per day",
                "You are testing whether commercial embroidery is viable before scaling",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-amber-500 shrink-0">✓</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-slate-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-3">Choose multi-head if…</h2>
            <ul className="space-y-2 text-sm text-slate-600">
              {[
                "You regularly produce orders of 24+ identical pieces",
                "Your primary business is uniforms, corporate apparel, or bulk sportswear",
                "Cap embroidery is a significant part of your revenue",
                "You need to hit a specific cost-per-piece that requires parallel production",
                "You have the floor space and budget for a production setup",
                "You are taking on contract work from larger brands or distributors",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-amber-500 shrink-0">✓</span><span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4">The Path Most Shops Take</h2>
          <div className="border border-slate-200 rounded-xl p-6 text-sm text-slate-600 space-y-3 leading-relaxed">
            <p>
              The most common pattern for a growing embroidery business: start with one or two single-head machines to keep capital costs low and maintain design flexibility. Once you have consistent orders of 36+ pieces regularly, add your first multi-head machine — typically a 6-head — alongside the existing single-heads rather than replacing them.
            </p>
            <p>
              This hybrid setup is standard in production shops because it gives you the throughput of the multi-head for production runs while retaining single-head machines for custom work, samples, and small orders that would tie up the multi-head inefficiently.
            </p>
            <p>
              Very few shops go from zero directly to a large multi-head machine without first running a single-head. The learning curve, setup processes, and order management required for multi-head production is significantly higher than for single-head operation.
            </p>
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
          <Link href="/category/single-head"
            className="block border border-slate-200 rounded-xl p-5 hover:border-amber-400 hover:bg-amber-50 transition group">
            <h3 className="font-bold text-slate-800 group-hover:text-amber-700">Browse Single-Head Manuals →</h3>
            <p className="text-xs text-slate-500 mt-1">Tajima TFMX-C, Barudan BEXS, Happy HCS Voyager, SWF ET</p>
          </Link>
          <Link href="/category/multi-head"
            className="block border border-slate-200 rounded-xl p-5 hover:border-amber-400 hover:bg-amber-50 transition group">
            <h3 className="font-bold text-slate-800 group-hover:text-amber-700">Browse Multi-Head Manuals →</h3>
            <p className="text-xs text-slate-500 mt-1">Tajima TEMX-C, Barudan BEAT, SWF E Multi, Happy HCR</p>
          </Link>
        </section>

      </div>
    </main>
  );
}
