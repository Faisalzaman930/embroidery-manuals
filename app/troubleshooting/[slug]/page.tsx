import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, getGuideBySlug } from "@/lib/troubleshooting-data";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/seo";

export const revalidate = false;

export async function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} — Step-by-Step Fix`,
    description: `${guide.intro.slice(0, 155)}`,
    alternates: { canonical: `/troubleshooting/${slug}` },
    openGraph: {
      title: guide.title,
      description: guide.symptom,
    },
  };
}

const CATEGORY_LABELS: Record<string, string> = {
  all: "All embroidery machines",
  "single-head": "Single-head machines",
  "multi-head": "Multi-head machines",
  cap: "Cap / hat embroidery",
  chenille: "Chenille machines",
  combination: "Combination machines",
  tubular: "Tubular machines",
};

export default async function TroubleshootingGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = GUIDES.filter((g) => guide.related.includes(g.slug));

  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Troubleshooting", path: "/troubleshooting" },
      { name: guide.title, path: `/troubleshooting/${slug}` },
    ]),
    ...(guide.faq.length > 0 ? [faqSchema(guide.faq)] : []),
  ];

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={schemas} />

      <div className="bg-slate-900 text-white px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            {" / "}
            <Link href="/troubleshooting" className="hover:text-white transition">Troubleshooting</Link>
            {" / "}
            <span className="text-slate-300">{guide.title}</span>
          </nav>
          <h1 className="text-3xl font-bold">{guide.title}</h1>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {guide.applies_to.map((t) => (
              <span key={t} className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                {CATEGORY_LABELS[t] ?? t}
              </span>
            ))}
          </div>
          <p className="text-slate-300 mt-4 max-w-2xl text-sm leading-relaxed">{guide.intro}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-5">Why This Happens — Common Causes</h2>
          <div className="space-y-4">
            {guide.causes.map((c, i) => (
              <div key={i} className="border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-800 mb-1">
                  <span className="text-amber-500 mr-2">{i + 1}.</span>{c.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-5">How to Fix It — Step by Step</h2>
          <div className="space-y-4">
            {guide.fixes.map((f, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-8 h-8 bg-amber-500 text-black rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div className="border border-slate-200 rounded-xl p-4 flex-1">
                  <h3 className="font-bold text-slate-800 mb-1">{f.action}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {guide.faq.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-5">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {guide.faq.map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-5">
                  <h3 className="font-bold text-slate-800 mb-1">{item.q}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Related Guides</h2>
            <div className="grid gap-3">
              {related.map((r) => (
                <Link key={r.slug} href={`/troubleshooting/${r.slug}`}
                  className="flex items-center justify-between border border-slate-200 rounded-lg px-4 py-3 hover:border-amber-400 hover:bg-amber-50 transition group">
                  <div>
                    <span className="font-semibold text-slate-800 group-hover:text-amber-700">{r.title}</span>
                    <p className="text-xs text-slate-500 mt-0.5">{r.symptom}</p>
                  </div>
                  <span className="text-amber-500 text-sm shrink-0">Read →</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h2 className="font-bold text-slate-800 mb-2">Need the machine manual?</h2>
          <p className="text-slate-600 text-sm mb-3">
            Service procedures like hook timing and encoder adjustment require referring to your specific machine's service manual.
          </p>
          <Link href="/" className="text-amber-600 hover:underline text-sm font-medium">
            Browse all embroidery machine manuals →
          </Link>
        </section>

      </div>
    </main>
  );
}
