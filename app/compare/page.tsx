import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Embroidery Machine Comparisons — Which Brand & Type Is Right for You?",
  description:
    "Side-by-side comparisons of commercial embroidery machine brands and types. Tajima vs Barudan, SWF vs Happy, single-head vs multi-head — find the right machine for your shop.",
  alternates: { canonical: "/compare" },
};

const COMPARISONS = [
  {
    slug: "tajima-vs-barudan",
    title: "Tajima vs Barudan",
    description: "The two dominant Japanese brands in commercial embroidery. Which is right for your shop?",
    tags: ["Premium", "Japanese", "Multi-head"],
  },
  {
    slug: "swf-vs-happy",
    title: "SWF vs Happy",
    description: "Two popular mid-range commercial embroidery brands compared on quality, value, and support.",
    tags: ["Mid-range", "Value", "Single & multi-head"],
  },
  {
    slug: "single-head-vs-multi-head-embroidery-machine",
    title: "Single Head vs Multi Head",
    description: "The fundamental machine-type decision for any embroidery business — production vs flexibility.",
    tags: ["Machine type", "Production", "Startup"],
  },
];

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Compare", path: "/compare" },
      ])} />

      <div className="bg-slate-900 text-white px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            {" / "}
            <span className="text-slate-300">Compare</span>
          </nav>
          <h1 className="text-3xl font-bold">Embroidery Machine Comparisons</h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-sm leading-relaxed">
            Side-by-side breakdowns of the most common brand and machine-type decisions facing commercial embroidery shop owners.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 grid gap-4">
        {COMPARISONS.map((c) => (
          <Link key={c.slug} href={`/compare/${c.slug}`}
            className="block border border-slate-200 rounded-xl p-6 hover:border-amber-400 hover:bg-amber-50 transition group">
            <h2 className="text-xl font-bold text-slate-800 group-hover:text-amber-700">{c.title}</h2>
            <p className="text-slate-500 text-sm mt-1">{c.description}</p>
            <div className="flex gap-2 mt-3">
              {c.tags.map((t) => (
                <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
