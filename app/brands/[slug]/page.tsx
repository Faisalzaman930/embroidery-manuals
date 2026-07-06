import Link from "next/link";
import { notFound } from "next/navigation";
import { publicClient } from "@/lib/supabase";
import { CATEGORY_LABELS, MachineCategory } from "@/lib/types";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, organizationSchema } from "@/lib/seo";

export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
  const { data } = await publicClient().from("brands").select("slug");
  return (data ?? []).map((b) => ({ slug: b.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { data: brand } = await publicClient().from("brands").select("name, description").eq("slug", slug).single();
  if (!brand) return {};
  return {
    title: `${brand.name} Embroidery Machine Manuals — Free PDF Downloads`,
    description: `Download free instruction and service manuals for all ${brand.name} commercial embroidery machines. Browse every ${brand.name} model with PDF manuals available.`,
    alternates: { canonical: `/brands/${slug}` },
    openGraph: {
      title: `${brand.name} Embroidery Machine Manuals`,
      description: `Free PDF manuals for all ${brand.name} embroidery machines.`,
    },
  };
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const db = publicClient();
  const { data: brand } = await db.from("brands").select("*").eq("slug", slug).single();
  if (!brand) notFound();

  const { data: machines } = await db
    .from("machines")
    .select("id, slug, model_name, category, heads, needles_per_head, max_speed_spm, discontinued")
    .eq("brand_id", brand.id)
    .order("model_name");

  const byCategory = (machines ?? []).reduce<Record<string, typeof machines>>((acc, m) => {
    if (!m) return acc;
    (acc[m.category] ??= []).push(m);
    return acc;
  }, {});

  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: `${brand.name} Manuals`, path: `/brands/${slug}` },
    ]),
    ...(brand.website_url ? [organizationSchema({
      name: brand.name,
      url: brand.website_url,
      description: brand.description ?? `${brand.name} commercial embroidery machine manufacturer.`,
      country: brand.country ?? "",
    })] : []),
  ];

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={schemas} />

      <div className="bg-slate-900 text-white px-4 py-14">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            {" / "}
            <span className="text-slate-300">{brand.name} Manuals</span>
          </nav>
          <h1 className="text-3xl font-bold">{brand.name} Embroidery Machine Manuals</h1>
          {brand.country && <p className="text-slate-400 mt-1 text-sm">{brand.country}</p>}
          {brand.description && <p className="text-slate-300 mt-3 max-w-2xl text-sm leading-relaxed">{brand.description}</p>}
          <p className="text-amber-400 text-sm mt-4">{(machines ?? []).length} manuals available — free PDF download</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {Object.entries(byCategory).map(([cat, ms]) => (
          <section key={cat}>
            <h2 className="text-lg font-bold text-slate-700 mb-4 pb-2 border-b border-slate-100">
              {CATEGORY_LABELS[cat as MachineCategory] ?? cat} Machines
            </h2>
            <div className="grid gap-3">
              {(ms ?? []).map((m) => m && (
                <Link key={m.slug} href={`/machines/${m.slug}`}
                  className="flex items-center justify-between border border-slate-200 rounded-lg px-4 py-3 hover:border-amber-400 hover:bg-amber-50 transition group">
                  <div>
                    <span className="font-semibold text-slate-800 group-hover:text-amber-700">{brand.name} {m.model_name}</span>
                    {m.discontinued && <span className="ml-2 text-xs text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">Discontinued</span>}
                    <div className="text-xs text-slate-500 mt-0.5 space-x-3">
                      {m.heads && <span>{m.heads} head{m.heads > 1 ? "s" : ""}</span>}
                      {m.needles_per_head && <span>{m.needles_per_head} needles/head</span>}
                      {m.max_speed_spm && <span>{m.max_speed_spm.toLocaleString()} SPM</span>}
                    </div>
                  </div>
                  <span className="text-amber-500 text-sm font-medium">View PDF →</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
