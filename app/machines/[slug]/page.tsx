import Link from "next/link";
import { notFound } from "next/navigation";
import { publicClient } from "@/lib/supabase";
import { CATEGORY_LABELS, MachineCategory } from "@/lib/types";

export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const { data: m } = await publicClient()
    .from("machines").select("model_name, description, brand:brands(name)").eq("slug", slug).single();
  if (!m) return {};
  const brand = Array.isArray(m.brand) ? m.brand[0] : m.brand;
  return {
    title: `${brand?.name ?? ""} ${m.model_name} Instruction Manual PDF`,
    description: m.description ?? `Free PDF instruction manual for the ${brand?.name ?? ""} ${m.model_name} commercial embroidery machine.`,
  };
}

export default async function MachinePage({ params }: Props) {
  const { slug } = await params;
  const { data: m } = await publicClient()
    .from("machines")
    .select("*, brand:brands(*)")
    .eq("slug", slug)
    .single();
  if (!m) notFound();

  const brand = Array.isArray(m.brand) ? m.brand[0] : m.brand;

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-slate-900 text-white px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <Link href={`/brands/${brand?.slug}`} className="text-slate-400 hover:text-white text-sm mb-4 inline-block">
            ← {brand?.name} Manuals
          </Link>
          <h1 className="text-3xl font-bold">{brand?.name} {m.model_name} Manual</h1>
          <div className="flex flex-wrap gap-3 mt-3 text-sm text-slate-300">
            <span className="bg-slate-700 px-2 py-1 rounded">{CATEGORY_LABELS[m.category as MachineCategory] ?? m.category}</span>
            {m.heads && <span className="bg-slate-700 px-2 py-1 rounded">{m.heads} head{m.heads > 1 ? "s" : ""}</span>}
            {m.needles_per_head && <span className="bg-slate-700 px-2 py-1 rounded">{m.needles_per_head} needles/head</span>}
            {m.max_speed_spm && <span className="bg-slate-700 px-2 py-1 rounded">{m.max_speed_spm.toLocaleString()} SPM</span>}
            {m.max_embroidery_area && <span className="bg-slate-700 px-2 py-1 rounded">{m.max_embroidery_area}</span>}
            {m.discontinued && <span className="bg-red-900 text-red-200 px-2 py-1 rounded">Discontinued</span>}
          </div>
          {m.description && (
            <p className="text-slate-300 mt-4 max-w-3xl text-sm leading-relaxed">{m.description}</p>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
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
              src={m.manual_url}
              className="w-full border border-slate-200 rounded-xl"
              style={{ height: "80vh", minHeight: 600 }}
              title={`${brand?.name ?? ""} ${m.model_name} Manual`}
            />
          </>
        ) : (
          <div className="text-slate-500 py-20 text-center">Manual PDF not yet available.</div>
        )}
      </div>
    </main>
  );
}
