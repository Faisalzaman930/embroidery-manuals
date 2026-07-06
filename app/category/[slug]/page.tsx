import Link from "next/link";
import { notFound } from "next/navigation";
import { publicClient } from "@/lib/supabase";
import { CATEGORY_LABELS, CATEGORY_DESCRIPTIONS, MachineCategory } from "@/lib/types";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
  return Object.keys(CATEGORY_LABELS).map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const label = CATEGORY_LABELS[slug as MachineCategory];
  if (!label) return {};
  return {
    title: `${label} Embroidery Machine Manuals — Free PDF Downloads`,
    description: `Free instruction manuals for ${label.toLowerCase()} commercial embroidery machines. ${CATEGORY_DESCRIPTIONS[slug as MachineCategory]} Browse and download PDFs for all brands.`,
    alternates: { canonical: `/category/${slug}` },
    openGraph: {
      title: `${label} Embroidery Machine Manuals`,
      description: CATEGORY_DESCRIPTIONS[slug as MachineCategory],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const label = CATEGORY_LABELS[slug as MachineCategory];
  if (!label) notFound();

  const { data: machines } = await publicClient()
    .from("machines")
    .select("slug, model_name, heads, needles_per_head, max_speed_spm, brand:brands(name, slug)")
    .eq("category", slug)
    .order("model_name");

  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: `${label} Manuals`, path: `/category/${slug}` },
    ]),
  ];

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={schemas} />

      <div className="bg-slate-900 text-white px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            {" / "}
            <span className="text-slate-300">{label} Manuals</span>
          </nav>
          <h1 className="text-3xl font-bold">{label} Embroidery Machine Manuals</h1>
          <p className="text-slate-300 mt-2 max-w-2xl text-sm leading-relaxed">{CATEGORY_DESCRIPTIONS[slug as MachineCategory]}</p>
          <p className="text-amber-400 text-sm mt-4">{(machines ?? []).length} manuals — free PDF download</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid gap-3">
          {(machines ?? []).map((m) => {
            const brand = Array.isArray(m.brand) ? m.brand[0] : m.brand;
            return (
              <Link key={m.slug} href={`/machines/${m.slug}`}
                className="flex items-center justify-between border border-slate-200 rounded-lg px-4 py-3 hover:border-amber-400 hover:bg-amber-50 transition group">
                <div>
                  <span className="font-semibold text-slate-800 group-hover:text-amber-700">
                    {brand?.name} {m.model_name}
                  </span>
                  <div className="text-xs text-slate-500 mt-0.5 space-x-3">
                    {m.heads && <span>{m.heads} head{m.heads > 1 ? "s" : ""}</span>}
                    {m.needles_per_head && <span>{m.needles_per_head} needles/head</span>}
                    {m.max_speed_spm && <span>{m.max_speed_spm.toLocaleString()} SPM</span>}
                  </div>
                </div>
                <span className="text-amber-500 text-sm font-medium">View PDF →</span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
