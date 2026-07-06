import { readFileSync } from "fs";
import { resolve } from "path";
try {
  const e = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
  for (const l of e.split("\n")) { const m = l.match(/^([^#=]+)=(.*)/); if (m) process.env[m[1].trim()] = m[2].trim(); }
} catch {}
import { createClient } from "@supabase/supabase-js";
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { persistSession: false } });

const PP = "https://www.pinpointinternational.com/graphics/manuals";

// slug → correct URL (verified from live PinPoint page)
const FIXES: Record<string, string> = {
  // Tajima — fix wrong filenames
  "tajima-tme-dcii":        `${PP}/tajima/Tajima_TME_DCII_1999.02.pdf`,
  "tajima-tfhx-iic":        `${PP}/tajima/Tajima_TFHX_IIC_2002.02.pdf`,
  "tajima-tfmx-iic":        `${PP}/tajima/Tajima_TFMX_IIC_2013.06.pdf`,
  "tajima-tehx-c-single":   `${PP}/tajima/Tajima_TEHX_C_SingleHead_2003.06.pdf`,
  "tajima-temx-c-single":   `${PP}/tajima/Tajima_TEMX_C_SingleHead_2014.04.pdf`,
  "tajima-temx-c-multi":    `${PP}/tajima/Tajima_TEMX_C_MultiHead_2013.12.pdf`,
  "tajima-tmfx-iiic":       `${PP}/tajima/Tajima_TMFX_IIIC_1999.12.pdf`,
  "tajima-tmce-602-604":    `${PP}/tajima/Tajima_TMCE_602_604_2001.03.pdf`,

  // Barudan — fix BEAT 802 wrong suffix
  "barudan-beat-802":       `${PP}/barudan/Barudan_BEAT_802_UG.pdf`,
  "barudan-bdymhe":         `${PP}/barudan/Barudan_BE%5BDY%5DHE_ZQ_C.pdf`,
  "barudan-bnrme-zn":       `${PP}/barudan/Barudan_BE%5BNR_NS%5DME_ZN.pdf`,
  "barudan-bmrme-yn":       `${PP}/barudan/Barudan_BE%5BMR_MS_MX%5DME_YN.pdf`,
  "barudan-bhjuf":          `${PP}/barudan/Barudan_BE%5BHJ%5D_UF.pdf`,
  "barudan-bjruf":          `${PP}/barudan/Barudan_BE%5BJR_SR_X%5D_UF.pdf`,

  // SWF — fix K Dual (has a space in filename)
  "swf-k-dual":             `${PP}/swf/SWF_K_%20Dual_Function.pdf`,
};

async function run() {
  let fixed = 0;
  for (const [slug, url] of Object.entries(FIXES)) {
    const { error } = await db.from("machines").update({ manual_url: url }).eq("slug", slug);
    if (error) console.error(`✗ ${slug}:`, error.message);
    else { process.stdout.write(`✓ ${slug}\n`); fixed++; }
  }
  console.log(`\nFixed ${fixed}/${Object.keys(FIXES).length} URLs`);
}
run().catch(e => { console.error(e); process.exit(1); });
