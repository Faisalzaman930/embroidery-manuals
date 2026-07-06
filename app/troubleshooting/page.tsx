import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/lib/troubleshooting-data";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Embroidery Machine Troubleshooting Guides — Fix Common Problems",
  description:
    "Step-by-step guides for the most common commercial embroidery machine problems — thread breaking, skipped stitches, misregistration, color-change failures, homing errors, and more.",
  alternates: { canonical: "/troubleshooting" },
  openGraph: {
    title: "Embroidery Machine Troubleshooting Guides",
    description: "Fix the most common commercial embroidery machine problems with step-by-step guides.",
  },
};

const CATEGORY_BADGES: Record<string, string> = {
  all: "All machines",
  "single-head": "Single head",
  "multi-head": "Multi head",
  cap: "Cap machines",
  chenille: "Chenille",
};

export default function TroubleshootingHubPage() {
  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Troubleshooting", path: "/troubleshooting" },
      ])} />

      <div className="bg-slate-900 text-white px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            {" / "}
            <span className="text-slate-300">Troubleshooting</span>
          </nav>
          <h1 className="text-3xl font-bold">Embroidery Machine Troubleshooting</h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-sm leading-relaxed">
            Step-by-step guides for the most common commercial embroidery machine problems.
            Each guide covers causes, fixes, and FAQs for Tajima, Barudan, SWF, Happy, Brother, and all major brands.
          </p>
          <p className="text-amber-400 text-sm mt-4">{GUIDES.length} guides available</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid gap-4">
          {GUIDES.map((g) => (
            <Link key={g.slug} href={`/troubleshooting/${g.slug}`}
              className="block border border-slate-200 rounded-xl p-5 hover:border-amber-400 hover:bg-amber-50 transition group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-bold text-slate-800 group-hover:text-amber-700 text-lg">{g.title}</h2>
                  <p className="text-slate-500 text-sm mt-1">{g.symptom}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {g.applies_to.map((t) => (
                      <span key={t} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                        {CATEGORY_BADGES[t] ?? t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-amber-500 shrink-0 text-sm font-medium mt-1">Read guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
