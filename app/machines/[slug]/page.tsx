import Link from "next/link";
import { notFound } from "next/navigation";
import { publicClient } from "@/lib/supabase";
import { CATEGORY_LABELS, MachineCategory } from "@/lib/types";
import JsonLd from "@/components/JsonLd";
import SpecsTable from "@/components/SpecsTable";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/seo";
import { getGuidesForCategory } from "@/lib/troubleshooting-data";

export const revalidate = 86400;
export const dynamicParams = true;

export async function generateStaticParams() {
  const { data } = await publicClient().from("machines").select("slug");
  return (data ?? []).map((m) => ({ slug: m.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { data: m } = await publicClient()
    .from("machines").select("model_name, description, category, heads, needles_per_head, max_speed_spm, brand:brands(name, slug)").eq("slug", slug).single();
  if (!m) return {};
  const brand = Array.isArray(m.brand) ? m.brand[0] : m.brand;
  const categoryLabel = CATEGORY_LABELS[m.category as MachineCategory] ?? m.category;
  const specsHint = [
    m.heads ? `${m.heads}-head` : null,
    m.needles_per_head ? `${m.needles_per_head}-needle` : null,
    m.max_speed_spm ? `${m.max_speed_spm.toLocaleString()} SPM` : null,
  ].filter(Boolean).join(", ");

  return {
    title: `${brand?.name ?? ""} ${m.model_name} Manual PDF — Free Download`,
    description: `Download the free ${brand?.name ?? ""} ${m.model_name} ${categoryLabel.toLowerCase()} embroidery machine instruction manual (PDF).${specsHint ? ` Specs: ${specsHint}.` : ""} View in browser or save to your device.`,
    alternates: { canonical: `/machines/${slug}` },
    openGraph: {
      title: `${brand?.name ?? ""} ${m.model_name} Manual PDF — Free Download`,
      description: m.description ?? `Free PDF manual for the ${brand?.name ?? ""} ${m.model_name}.`,
      type: "article",
    },
  };
}

export default async function MachinePage({ params }: Props) {
  const { slug } = await params;
  const db = publicClient();

  const { data: m } = await db
    .from("machines")
    .select("*, brand:brands(*)")
    .eq("slug", slug)
    .single();
  if (!m) notFound();

  const brand = Array.isArray(m.brand) ? m.brand[0] : m.brand;

  const { data: related } = await db
    .from("machines")
    .select("slug, model_name")
    .eq("brand_id", m.brand_id)
    .neq("slug", slug)
    .limit(5);

  const categoryLabel = CATEGORY_LABELS[m.category as MachineCategory] ?? m.category;

  const faqItems = [
    m.heads != null && {
      q: `How many heads does the ${brand?.name} ${m.model_name} have?`,
      a: `The ${brand?.name} ${m.model_name} has ${m.heads} embroidery head${m.heads > 1 ? "s" : ""}.`,
    },
    m.needles_per_head != null && {
      q: `How many needles does the ${brand?.name} ${m.model_name} have?`,
      a: `The ${brand?.name} ${m.model_name} has ${m.needles_per_head} needles per head${m.heads && m.heads > 1 ? `, for a total of ${m.heads * m.needles_per_head} needles across all heads` : ""}.`,
    },
    m.max_speed_spm != null && {
      q: `What is the maximum speed of the ${brand?.name} ${m.model_name}?`,
      a: `The ${brand?.name} ${m.model_name} has a maximum embroidery speed of ${m.max_speed_spm.toLocaleString()} stitches per minute (SPM).`,
    },
    {
      q: `Where can I download the ${brand?.name} ${m.model_name} manual?`,
      a: `You can view and download the free PDF instruction manual for the ${brand?.name} ${m.model_name} directly on this page.`,
    },
    m.discontinued && {
      q: `Is the ${brand?.name} ${m.model_name} discontinued?`,
      a: `Yes, the ${brand?.name} ${m.model_name} has been discontinued. However, its instruction manual is still available as a free PDF download on this page.`,
    },
  ].filter(Boolean) as { q: string; a: string }[];

  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: `${brand?.name} Manuals`, path: `/brands/${brand?.slug}` },
      { name: m.model_name, path: `/machines/${slug}` },
    ]),
    productSchema({
      name: `${brand?.name ?? ""} ${m.model_name}`,
      description: m.description ?? `${brand?.name ?? ""} ${m.model_name} commercial embroidery machine`,
      brand: brand?.name ?? "",
      url: `/machines/${slug}`,
    }),
    ...(faqItems.length > 0 ? [faqSchema(faqItems)] : []),
  ];

  return (
    <main className="min-h-screen bg-white">
      <JsonLd data={schemas} />

      <div className="bg-slate-900 text-white px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            {" / "}
            <Link href={`/brands/${brand?.slug}`} className="hover:text-white transition">{brand?.name} Manuals</Link>
            {" / "}
            <span className="text-slate-300">{m.model_name}</span>
          </nav>
          <h1 className="text-3xl font-bold">{brand?.name} {m.model_name} Manual</h1>
          <div className="flex flex-wrap gap-2 mt-3 text-sm text-slate-300">
            <span className="bg-slate-700 px-2 py-1 rounded">{categoryLabel}</span>
            {m.heads && <span className="bg-slate-700 px-2 py-1 rounded">{m.heads} head{m.heads > 1 ? "s" : ""}</span>}
            {m.needles_per_head && <span className="bg-slate-700 px-2 py-1 rounded">{m.needles_per_head} needles/head</span>}
            {m.max_speed_spm && <span className="bg-slate-700 px-2 py-1 rounded">{m.max_speed_spm.toLocaleString()} SPM</span>}
            {m.discontinued && <span className="bg-red-900 text-red-200 px-2 py-1 rounded">Discontinued</span>}
          </div>
          {m.description && (
            <p className="text-slate-300 mt-4 max-w-3xl text-sm leading-relaxed">{m.description}</p>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-12">

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4">{brand?.name} {m.model_name} Instruction Manual (PDF)</h2>
          {m.manual_url ? (
            <>
              <div className="flex gap-3 mb-4">
                <a href={m.manual_url} target="_blank" rel="noopener noreferrer"
                  className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-5 py-2 rounded-lg text-sm transition">
                  Download PDF ↓
                </a>
                <a href={m.manual_url} target="_blank" rel="noopener noreferrer"
                  className="border border-slate-200 text-slate-600 hover:border-slate-400 px-5 py-2 rounded-lg text-sm transition">
                  Open in new tab ↗
                </a>
              </div>
              <iframe
                src={`https://docs.google.com/viewer?url=${encodeURIComponent(m.manual_url)}&embedded=true`}
                className="w-full border border-slate-200 rounded-xl"
                style={{ height: "80vh", minHeight: 600 }}
                title={`${brand?.name ?? ""} ${m.model_name} Manual`}
                loading="lazy"
              />
            </>
          ) : (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
              Manual PDF not yet available for this model.
            </div>
          )}
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-4">{brand?.name} {m.model_name} Specifications</h2>
          <SpecsTable
            heads={m.heads}
            needles_per_head={m.needles_per_head}
            max_speed_spm={m.max_speed_spm}
            max_embroidery_area={m.max_embroidery_area}
            discontinued={m.discontinued}
            category={m.category}
          />
        </section>

        {faqItems.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-lg p-4">
                  <h3 className="font-semibold text-slate-800 mb-1">{item.q}</h3>
                  <p className="text-slate-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {(() => {
          const guides = getGuidesForCategory(m.category).slice(0, 3);
          return guides.length > 0 ? (
            <section className="border border-slate-200 rounded-xl p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                Common {brand?.name} {m.model_name} Problems
              </h2>
              <p className="text-slate-500 text-sm mb-4">
                Most issues on {categoryLabel.toLowerCase()} machines like the {m.model_name} fall into a few categories.
                See our full step-by-step guides:
              </p>
              <ul className="space-y-2">
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/troubleshooting/${g.slug}`}
                      className="flex items-center gap-2 text-sm text-amber-700 hover:text-amber-500 transition group">
                      <span className="text-amber-400 group-hover:translate-x-0.5 transition-transform">→</span>
                      <span className="font-medium">{g.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/troubleshooting" className="inline-block mt-4 text-xs text-slate-400 hover:text-amber-600 transition">
                Browse all troubleshooting guides →
              </Link>
            </section>
          ) : null;
        })()}

        {(related ?? []).length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-4">More {brand?.name} Manuals</h2>
            <div className="grid gap-2">
              {(related ?? []).map((r) => (
                <Link key={r.slug} href={`/machines/${r.slug}`}
                  className="flex items-center justify-between border border-slate-200 rounded-lg px-4 py-3 hover:border-amber-400 hover:bg-amber-50 transition group">
                  <span className="font-semibold text-slate-800 group-hover:text-amber-700">{brand?.name} {r.model_name}</span>
                  <span className="text-amber-500 text-sm">View PDF →</span>
                </Link>
              ))}
            </div>
            <Link href={`/brands/${brand?.slug}`} className="inline-block mt-3 text-sm text-slate-500 hover:text-amber-600 transition">
              View all {brand?.name} manuals →
            </Link>
          </section>
        )}

      </div>
    </main>
  );
}
