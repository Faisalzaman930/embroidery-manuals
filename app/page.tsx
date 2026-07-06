import Link from "next/link";
import { publicClient } from "@/lib/supabase";
import { CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, MachineCategory } from "@/lib/types";
import JsonLd from "@/components/JsonLd";
import { websiteSchema } from "@/lib/seo";

export const revalidate = 3600;

export default async function Home() {
  const db = publicClient();
  const [{ data: brands }, { count }] = await Promise.all([
    db.from("brands").select("id, name, slug, country, description").order("name"),
    db.from("machines").select("*", { count: "exact", head: true }),
  ]);

  const categories = Object.entries(CATEGORY_LABELS) as [MachineCategory, string][];

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={websiteSchema()} />
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white px-4 py-20 text-center">
        <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Free PDF Downloads</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Embroidery Machine Manuals
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
          Instruction and service manuals for Tajima, Barudan, SWF, Happy, Brother, Toyota and more — {count ?? "—"} manuals, free to view and download.
        </p>
        <Link href="#brands" className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3 rounded-lg transition">
          Browse Brands →
        </Link>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Browse by Machine Type</h2>
        <p className="text-slate-500 mb-8 text-sm">Single-head, multi-head, chenille, cap, combination and more.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(([slug, label]) => (
            <Link key={slug} href={`/category/${slug}`}
              className="border border-slate-200 rounded-xl p-4 hover:border-amber-400 hover:shadow-sm transition group">
              <div className="font-semibold text-slate-800 group-hover:text-amber-600 mb-1">{label}</div>
              <p className="text-xs text-slate-500 leading-snug">{CATEGORY_DESCRIPTIONS[slug]}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="brands" className="bg-slate-50 py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Brands</h2>
          <p className="text-slate-500 mb-8 text-sm">{(brands ?? []).length} brands indexed.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {(brands ?? []).map((b) => (
              <Link key={b.slug} href={`/brands/${b.slug}`}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-amber-400 hover:shadow-md transition">
                <div className="font-bold text-slate-800">{b.name}</div>
                {b.country && <div className="text-xs text-slate-400 mt-1">{b.country}</div>}
                {b.description && <p className="text-xs text-slate-500 mt-2 line-clamp-2">{b.description}</p>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-slate-400 text-xs">
        Embroidery Machine Manuals — free PDF viewer for commercial embroidery equipment.
        All manuals are the property of their respective manufacturers.
      </footer>
    </main>
  );
}
