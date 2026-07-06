import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const OLD = "https://www.pinpointinternational.com/graphics/manuals";
const NEW = "https://www.pinpointinternational.com/mm5/graphics/manuals";

async function run() {
  // Fetch all machines with the broken URL prefix
  const { data, error } = await supabase
    .from("machines")
    .select("id, model_name, manual_url")
    .like("manual_url", `%pinpointinternational.com/graphics/manuals%`);

  if (error) { console.error(error); process.exit(1); }

  const toFix = (data ?? []).filter((m) => m.manual_url);
  console.log(`Found ${toFix.length} machines with broken PinPoint URLs`);

  let fixed = 0;
  let errors = 0;

  for (const machine of toFix) {
    let url: string = machine.manual_url!;

    // Fix 1: add mm5/ to path
    url = url.replace(OLD, NEW);

    // Fix 2: remove Melco double-extension .pdf.pdf → .pdf
    if (url.endsWith(".pdf.pdf")) {
      url = url.slice(0, -4); // strip the last .pdf
    }

    const { error: updateErr } = await supabase
      .from("machines")
      .update({ manual_url: url })
      .eq("id", machine.id);

    if (updateErr) {
      console.error(`  ✗ ${machine.model_name}:`, updateErr.message);
      errors++;
    } else {
      fixed++;
      if (fixed % 100 === 0) console.log(`  ${fixed}/${toFix.length} updated...`);
    }
  }

  console.log(`\nDone. Fixed: ${fixed}, Errors: ${errors}`);

  // Quick verification
  const { count } = await supabase
    .from("machines")
    .select("*", { count: "exact", head: true })
    .like("manual_url", "%/mm5/graphics/manuals%");
  console.log(`Verified: ${count} machines now have /mm5/ URLs`);
}

run().catch(console.error);
