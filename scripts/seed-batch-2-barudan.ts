import { readFileSync } from "fs";
import { resolve } from "path";
try {
  const e = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
  for (const l of e.split("\n")) { const m = l.match(/^([^#=]+)=(.*)/); if (m) process.env[m[1].trim()] = m[2].trim(); }
} catch {}
import { createClient } from "@supabase/supabase-js";
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { persistSession: false } });

const PP = "https://www.pinpointinternational.com/graphics/manuals";

async function run() {
const { data: barudan } = await db.from("brands").select("id").eq("slug", "barudan").single();
const brand_id = barudan!.id;

const MACHINES = [
  {
    slug: "barudan-bdshe",
    brand_id,
    model_name: "BDSHE",
    category: "multi-head",
    description: "Barudan BDSHE DS series high-efficiency multi-head embroidery machine. The DS designation indicates Barudan's D-frame single-body construction — a rigid frame design that delivers consistent head-to-head registration across multi-head configurations.",
    needles_per_head: 12,
    discontinued: true,
    manual_url: `${PP}/barudan/Barudan_BE%5BDS%5DHE_ZQ_BS.pdf`,
    manual_source: "retailer",
  },
  {
    slug: "barudan-bdsme",
    brand_id,
    model_name: "BDSME",
    category: "multi-head",
    description: "Barudan BDSME DS series multi-head embroidery machine with ME (Multi-head Electronic) control. The ZN/ZQ electronic control system adds network connectivity and computerized pattern management to the DS frame Barudan.",
    needles_per_head: 12,
    discontinued: true,
    manual_url: `${PP}/barudan/Barudan_BE%5BDS%5DME_%5BZN_ZQ%5D_A.pdf`,
    manual_source: "retailer",
  },
  {
    slug: "barudan-bdthe",
    brand_id,
    model_name: "BDTHE",
    category: "multi-head",
    description: "Barudan BDTHE DT series high-efficiency multi-head embroidery machine. The DT series represents a refined version of Barudan's D-frame multi-head platform with improved drive components for higher sustained stitch speeds.",
    needles_per_head: 12,
    max_speed_spm: 1000,
    discontinued: true,
    manual_url: `${PP}/barudan/Barudan_BE%5BDT%5DHE_ZQ_C01.pdf`,
    manual_source: "retailer",
  },
  {
    slug: "barudan-bdtme-zn",
    brand_id,
    model_name: "BDTME (ZN Control)",
    category: "multi-head",
    description: "Barudan BDTME DT series multi-head embroidery machine with ZN electronic control. The ZN control system brings computerized pattern loading and thread monitoring to Barudan's DT platform.",
    needles_per_head: 12,
    discontinued: true,
    manual_url: `${PP}/barudan/Barudan_BE%5BDT%5D_ZN_101.pdf`,
    manual_source: "retailer",
  },
  {
    slug: "barudan-bdtme-zq",
    brand_id,
    model_name: "BDTME (ZQ Control)",
    category: "multi-head",
    description: "Barudan BDTME DT series multi-head embroidery machine with ZQ electronic control. The ZQ is an updated control system over the ZN with improved operator interface and faster pattern transfer.",
    needles_per_head: 12,
    discontinued: true,
    manual_url: `${PP}/barudan/Barudan_BE%5BDT%5D_ZQ_501.pdf`,
    manual_source: "retailer",
  },
  {
    slug: "barudan-bnyme",
    brand_id,
    model_name: "BNYME/BNBME",
    category: "multi-head",
    description: "Barudan BNYME/BNBME NY and NB series multi-head embroidery machines. The NY and NB series are Barudan's N-frame variant designed for high-speed production runs with the ME electronic control system.",
    needles_per_head: 15,
    max_speed_spm: 1000,
    discontinued: true,
    manual_url: `${PP}/barudan/Barudan_BE%5BNY_NB%5DME_%5BZN_ZQ%5D_A.pdf`,
    manual_source: "retailer",
  },
  {
    slug: "barudan-bnthe",
    brand_id,
    model_name: "BNTHE/BNTME",
    category: "multi-head",
    description: "Barudan BNTHE/BNTME NT series multi-head embroidery machines. The NT series is Barudan's high-efficiency N-frame machine combining the speed advantages of the T-series drive with the N-frame construction.",
    needles_per_head: 15,
    discontinued: true,
    manual_url: `${PP}/barudan/Barudan_BE%5BNT%5D_ZN_ZQ.pdf`,
    manual_source: "retailer",
  },
  {
    slug: "barudan-bexys-xls",
    brand_id,
    model_name: "BEXYS/BEXLS",
    category: "single-head",
    description: "Barudan BEXYS/BEXLS XYS and XLS series single-head embroidery machines. The XYS (extra-wide Y axis) and XLS (extra-large single-head) deliver an expanded embroidery field for shops regularly working with large-format designs on jackets, bags, and home textiles.",
    heads: 1,
    needles_per_head: 15,
    max_speed_spm: 1000,
    manual_url: `${PP}/barudan/Barudan_BE%5BXYS-XLS%5D_CII.pdf`,
    manual_source: "retailer",
  },
];

console.log("── Additional Barudan machines ──");
let ok = 0;
for (const m of MACHINES) {
  const { error } = await db.from("machines").upsert(m, { onConflict: "slug" });
  if (error) console.error(`  ✗ ${m.slug}:`, error.message);
  else { console.log(`  + ${m.slug}`); ok++; }
}
const { count } = await db.from("machines").select("*", { count: "exact", head: true });
console.log(`\nDone: ${ok}/${MACHINES.length}. Total in DB: ${count}`);
}
run().catch(e => { console.error(e); process.exit(1); });
