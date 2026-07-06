import type { MetadataRoute } from "next";
import { publicClient } from "@/lib/supabase";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://embroidery-manuals.vercel.app";

const CATEGORIES = [
  "single-head", "multi-head", "cap", "chenille",
  "combination", "tubular", "sequin", "other",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const db = publicClient();

  const EMBROIDERY_BRANDS = [
    "tajima","barudan","swf","happy","brother-commercial",
    "toyota-industrial","melco","zsk","ricoma","pfaff-industrial",
  ];

  const [{ data: brands }, { data: brandRows }] = await Promise.all([
    db.from("brands").select("slug, created_at").in("slug", EMBROIDERY_BRANDS),
    db.from("brands").select("id").in("slug", EMBROIDERY_BRANDS),
  ]);

  const brandIds = (brandRows ?? []).map((b) => b.id);
  const { data: machines } = await db
    .from("machines")
    .select("slug, created_at")
    .in("brand_id", brandIds);

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE}/`, priority: 1.0, changeFrequency: "weekly", lastModified: new Date() },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${SITE}/category/${c}`,
    priority: 0.7,
    changeFrequency: "weekly" as const,
    lastModified: new Date(),
  }));

  const brandPages: MetadataRoute.Sitemap = (brands ?? []).map((b) => ({
    url: `${SITE}/brands/${b.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
    lastModified: b.created_at ? new Date(b.created_at) : new Date(),
  }));

  const machinePages: MetadataRoute.Sitemap = (machines ?? []).map((m) => ({
    url: `${SITE}/machines/${m.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
    lastModified: m.created_at ? new Date(m.created_at) : new Date(),
  }));

  return [...staticPages, ...categoryPages, ...brandPages, ...machinePages];
}
