import { readFileSync } from "fs";
import { resolve } from "path";
try {
  const e = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
  for (const l of e.split("\n")) { const m = l.match(/^([^#=]+)=(.*)/); if (m) process.env[m[1].trim()] = m[2].trim(); }
} catch {}
import { createClient } from "@supabase/supabase-js";
const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, { auth: { persistSession: false } });

const PP = "https://www.pinpointinternational.com/graphics/manuals";
const HE = "https://happyemb.com/files_tech";

type B = { slug: string; name: string; country: string; description: string; website_url: string };
type M = { slug: string; brand_slug: string; model_name: string; category: string; description: string;
  heads?: number; needles_per_head?: number; max_speed_spm?: number; max_embroidery_area?: string;
  discontinued?: boolean; manual_url: string; manual_source: string };

const BRANDS: B[] = [
  { slug:"tajima", name:"Tajima", country:"JP",
    description:"Tajima is Japan's largest embroidery machine manufacturer, known for the TMFX, TFMX, TEMX and TEHX series widely used in commercial embroidery shops worldwide.",
    website_url:"https://www.tajima.com" },
  { slug:"barudan", name:"Barudan", country:"JP",
    description:"Barudan produces high-speed commercial embroidery machines including the BEAT and BEXS series, renowned for stitch quality and reliability in professional embroidery shops.",
    website_url:"https://www.barudanamerica.com" },
  { slug:"swf", name:"SWF", country:"KR",
    description:"SWF (Sewon Fashion) is South Korea's leading embroidery machine brand, offering single-head, multi-head and combination machines for commercial embroidery production.",
    website_url:"https://www.swfusa.com" },
  { slug:"happy", name:"Happy", country:"JP",
    description:"Happy Industrial Corporation manufactures commercial embroidery machines including the HCS Voyager, HCR and HCD series popular with small embroidery businesses and large factories alike.",
    website_url:"https://www.happyemb.com" },
  { slug:"brother-commercial", name:"Brother Commercial", country:"JP",
    description:"Brother's commercial embroidery line includes the BAS programmable sewing / embroidery machines and BES multi-head embroidery systems used in factories and embroidery shops.",
    website_url:"https://www.brother.com" },
  { slug:"toyota-industrial", name:"Toyota Industrial", country:"JP",
    description:"Toyota Industrial Equipment manufactures commercial embroidery machines including the 850, 860 and 9000 series for the industrial embroidery market.",
    website_url:"https://www.toyota-industries.com" },
  { slug:"melco", name:"Melco", country:"US",
    description:"Melco Industries produces the EMT series commercial embroidery machines and the Amaya platform, widely used in custom embroidery shops across North America.",
    website_url:"https://www.melco.com" },
  { slug:"zsk", name:"ZSK", country:"DE",
    description:"ZSK Stickmaschinen is Germany's premier embroidery machine manufacturer, producing multi-head embroidery machines for high-volume apparel and technical embroidery applications.",
    website_url:"https://www.zsk.de" },
  { slug:"ricoma", name:"Ricoma", country:"CN",
    description:"Ricoma offers affordable single and multi-head commercial embroidery machines targeted at startup embroidery businesses and small custom shops.",
    website_url:"https://www.ricoma.com" },
  { slug:"pfaff-industrial", name:"Pfaff Industrial", country:"DE",
    description:"Pfaff Industrial (now part of SVP Worldwide) produced commercial embroidery machines for European factories, known for precision engineering and heavy-duty construction.",
    website_url:"https://www.pfaff.com" },
];

const MACHINES: M[] = [

// ════ TAJIMA ═══════════════════════════════════════════════════════════════

{ slug:"tajima-tme-dc", brand_slug:"tajima", model_name:"TME-DC", category:"multi-head",
  description:"Tajima TME-DC multi-head embroidery machine — one of Tajima's earliest computer-controlled embroidery platforms. The TME (Tajima Multi-head Embroidery) DC series established Tajima's reputation for quality in the commercial embroidery industry during the 1990s.",
  needles_per_head:12, max_speed_spm:850, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TME_DC_1996.06.pdf`, manual_source:"retailer" },

{ slug:"tajima-tme-dcii", brand_slug:"tajima", model_name:"TME-DCII", category:"multi-head",
  description:"Tajima TME-DCII — the updated second-generation DC-series Tajima multi-head embroidery machine. Improved stitch speed and color-change mechanism over the original TME-DC for higher productivity in commercial embroidery shops.",
  needles_per_head:12, max_speed_spm:900, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TME_DCII_1999.02.pdf`, manual_source:"retailer" },

{ slug:"tajima-tme-dciii", brand_slug:"tajima", model_name:"TME-DCIII", category:"multi-head",
  description:"Tajima TME-DCIII — the third-generation DC-series multi-head Tajima. Introduced updated thread tension controls and faster color-change compared to the DCII for more efficient multi-color embroidery production.",
  needles_per_head:12, max_speed_spm:1000, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TME_DCIII_2011.01.pdf`, manual_source:"retailer" },

{ slug:"tajima-tme-hc", brand_slug:"tajima", model_name:"TME-HC", category:"multi-head",
  description:"Tajima TME-HC high-color multi-head embroidery machine with expanded needle count. The HC designation indicates a higher color-count configuration for complex multi-color embroidery designs.",
  needles_per_head:15, max_speed_spm:850, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TME_HC_1993.12.pdf`, manual_source:"retailer" },

{ slug:"tajima-tmfx-iic", brand_slug:"tajima", model_name:"TMFX-IIC", category:"multi-head",
  description:"Tajima TMFX-IIC multi-head embroidery machine — the TMFX (Tajima Multi-head Fine eXecution) IIC model with refined thread delivery for fine detail embroidery. Widely used in commercial embroidery shops through the late 1990s and 2000s.",
  needles_per_head:12, max_speed_spm:1000, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TMFX_IIC_2000.05.pdf`, manual_source:"retailer" },

{ slug:"tajima-tmfx-iiic", brand_slug:"tajima", model_name:"TMFX-IIIC", category:"multi-head",
  description:"Tajima TMFX-IIIC — the three-I-C designation indicates the third-generation TMFX platform with improved stitching consistency and color-change speed. A popular commercial embroidery machine in North American shops.",
  needles_per_head:12, max_speed_spm:1000, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TMFX_IIIC_1999.12.pdf`, manual_source:"retailer" },

{ slug:"tajima-tmex-c101", brand_slug:"tajima", model_name:"TMEX-C101", category:"single-head",
  description:"Tajima TMEX-C101 single-head commercial embroidery machine. The TMEX (Tajima Multi-head Extended) C101 is a compact single-head for sample rooms and small embroidery shops requiring commercial-grade stitch quality.",
  heads:1, needles_per_head:9, max_speed_spm:850,
  manual_url:`${PP}/tajima/Tajima_TMEX_C101.pdf`, manual_source:"retailer" },

{ slug:"tajima-tmex-c901", brand_slug:"tajima", model_name:"TMEX-C901", category:"multi-head",
  description:"Tajima TMEX-C901 multi-head commercial embroidery machine. The 9-head TMEX-C901 delivers high-volume embroidery output for commercial shops and garment factories needing consistent output across many heads.",
  heads:9, needles_per_head:9, max_speed_spm:850, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TMEX_C901_1996.04.pdf`, manual_source:"retailer" },

{ slug:"tajima-tfhx", brand_slug:"tajima", model_name:"TFHX", category:"multi-head",
  description:"Tajima TFHX (Tajima Fine High-speed eXecution) multi-head embroidery machine. The TFHX series prioritizes raw stitch speed for high-volume production embroidery on caps, shirts and fleece garments.",
  needles_per_head:12, max_speed_spm:1200, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TFHX_2001.07.pdf`, manual_source:"retailer" },

{ slug:"tajima-tfhx-iic", brand_slug:"tajima", model_name:"TFHX-IIC", category:"multi-head",
  description:"Tajima TFHX-IIC updated high-speed multi-head embroidery machine. The IIC revision improves thread management and tension control at higher stitch speeds compared to the original TFHX series.",
  needles_per_head:12, max_speed_spm:1200, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TFHX_IIC_2002.02.pdf`, manual_source:"retailer" },

{ slug:"tajima-tfgn", brand_slug:"tajima", model_name:"TFGN", category:"multi-head",
  description:"Tajima TFGN multi-head embroidery machine for general commercial embroidery production. The TFGN series offers a balance of speed and versatility for shops embroidering a range of garment types.",
  needles_per_head:12, max_speed_spm:1000, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TFGN_2007.06.pdf`, manual_source:"retailer" },

{ slug:"tajima-tfmx-c", brand_slug:"tajima", model_name:"TFMX-C", category:"single-head",
  description:"Tajima TFMX-C single-head commercial embroidery machine. The TFMX-C is one of Tajima's most widely sold single-head machines — a standard in embroidery sample rooms, custom shops and trade show embroidery booths.",
  heads:1, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/tajima/Tajima_TFMX_C_SingleHead_2005.01.pdf`, manual_source:"retailer" },

{ slug:"tajima-tfmx-ii", brand_slug:"tajima", model_name:"TFMX-II", category:"multi-head",
  description:"Tajima TFMX-II multi-head embroidery machine — the second-generation TFMX platform for production embroidery shops. Improved drive system and thread monitoring over the original TFMX for fewer thread breaks.",
  needles_per_head:15, max_speed_spm:1000, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TFMX_II_2005.07.pdf`, manual_source:"retailer" },

{ slug:"tajima-tfmx-iic", brand_slug:"tajima", model_name:"TFMX-IIC", category:"multi-head",
  description:"Tajima TFMX-IIC — the second-generation C-control TFMX multi-head embroidery machine. The IIC C-control upgrade brings improved threading, color detection, and network connectivity for modern embroidery shop management.",
  needles_per_head:15, max_speed_spm:1000, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TFMX_IIC_2013.06.pdf`, manual_source:"retailer" },

{ slug:"tajima-tehx-c-single", brand_slug:"tajima", model_name:"TEHX-C (Single Head)", category:"single-head",
  description:"Tajima TEHX-C single-head embroidery machine. The TEHX (Tajima Enhanced High-speed eXecution) C-series single-head is a fast, precise single-head for custom embroidery and sampling.",
  heads:1, needles_per_head:15, max_speed_spm:1200,
  manual_url:`${PP}/tajima/Tajima_TEHX_C_SingleHead_2003.06.pdf`, manual_source:"retailer" },

{ slug:"tajima-tehx-c-multi", brand_slug:"tajima", model_name:"TEHX-C (Multi Head)", category:"multi-head",
  description:"Tajima TEHX-C multi-head embroidery machine. The TEHX-C multi-head delivers the high stitch speed of the TEHX platform across multiple heads for volume production of caps, shirts, and jackets.",
  needles_per_head:15, max_speed_spm:1200,
  manual_url:`${PP}/tajima/Tajima_TEHX_C_MultiHead_2001.10.pdf`, manual_source:"retailer" },

{ slug:"tajima-temx-c-single", brand_slug:"tajima", model_name:"TEMX-C (Single Head)", category:"single-head",
  description:"Tajima TEMX-C single-head commercial embroidery machine. The TEMX (Tajima Enhanced Multi-head eXecution) C single-head is Tajima's flagship single-head machine with advanced thread monitoring and network connectivity.",
  heads:1, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/tajima/Tajima_TEMX_C_SingleHead_2014.04.pdf`, manual_source:"retailer" },

{ slug:"tajima-temx-c-multi", brand_slug:"tajima", model_name:"TEMX-C (Multi Head)", category:"multi-head",
  description:"Tajima TEMX-C multi-head embroidery machine — Tajima's most advanced multi-head production platform. Automated thread-break detection, network pattern loading, and high stitch rates make the TEMX-C the production standard for high-volume embroidery factories.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/tajima/Tajima_TEMX_C_MultiHead_2013.12.pdf`, manual_source:"retailer" },

{ slug:"tajima-tejt-c", brand_slug:"tajima", model_name:"TEJT-C", category:"tubular",
  description:"Tajima TEJT-C jacket-type tubular embroidery machine. The TEJT (Tajima Enhanced Jacket Type) is purpose-built for embroidering finished jacket bodies without disassembly, using a large-clearance tubular arm.",
  needles_per_head:15, max_speed_spm:850,
  manual_url:`${PP}/tajima/Tajima_TEJT_C_2002.07.pdf`, manual_source:"retailer" },

{ slug:"tajima-tmar-k", brand_slug:"tajima", model_name:"TMAR-K", category:"cap",
  description:"Tajima TMAR-K cap embroidery machine attachment system. The TMAR (Tajima Multi Arm Rotary) K enables multi-head Tajima machines to embroider structured caps simultaneously using the rotary cap-frame system.",
  manual_url:`${PP}/tajima/Tajima_TMAR_K_2013.07.pdf`, manual_source:"retailer" },

{ slug:"tajima-tmar-kc", brand_slug:"tajima", model_name:"TMAR-KC", category:"cap",
  description:"Tajima TMAR-KC cap embroidery attachment with C-control integration. The KC version adds compatibility with Tajima's C-control machines for seamless cap embroidery integration in modern Tajima multi-head systems.",
  manual_url:`${PP}/tajima/Tajima_TMAR_KC_2014.03.pdf`, manual_source:"retailer" },

{ slug:"tajima-tmar-kcii", brand_slug:"tajima", model_name:"TMAR-KCII", category:"cap",
  description:"Tajima TMAR-KCII — the second-generation KC cap embroidery system for Tajima multi-head machines. Updated frame drive and sensor system for more consistent cap placement and reduced setup time.",
  manual_url:`${PP}/tajima/Tajima_TMAR_KCII_2015.11.pdf`, manual_source:"retailer" },

{ slug:"tajima-tmbp-sc", brand_slug:"tajima", model_name:"TMBP-SC", category:"multi-head",
  description:"Tajima TMBP-SC border presser multi-head embroidery machine. The TMBP (Tajima Multi-head Border Presser) applies even presser-foot pressure across wide border embroidery designs, preventing fabric slippage on large-field work.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/tajima/Tajima_TMBP_SC_2015.12.pdf`, manual_source:"retailer" },

{ slug:"tajima-tmbr-sc", brand_slug:"tajima", model_name:"TMBR-SC", category:"multi-head",
  description:"Tajima TMBR-SC border roller embroidery machine. The TMBR uses a roller presser instead of a flat foot for smooth material feeding on tubular knit fabrics prone to shifting during large embroidery runs.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/tajima/Tajima_TMBR_SC_2015.12.pdf`, manual_source:"retailer" },

{ slug:"tajima-tmce-s", brand_slug:"tajima", model_name:"TMCE-S", category:"chenille",
  description:"Tajima TMCE-S chenille embroidery machine — one of Tajima's earliest chenille models. The TMCE (Tajima Multi-head Chenille Embroidery) S creates the loop-pile chenille stitch used on varsity letterman jackets and athletic emblems.",
  needles_per_head:2, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TMCE_S_1993.10.pdf`, manual_source:"retailer" },

{ slug:"tajima-tmce-600", brand_slug:"tajima", model_name:"TMCE-600", category:"chenille",
  description:"Tajima TMCE-600 chenille multi-head embroidery machine. A 6-head chenille machine producing the raised loop-pile chenille stitch for varsity jackets, athletic team emblems, and fashion knitwear decoration.",
  heads:6, needles_per_head:2, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TMCE_600_1999.04.pdf`, manual_source:"retailer" },

{ slug:"tajima-tmce-601", brand_slug:"tajima", model_name:"TMCE-601", category:"chenille",
  description:"Tajima TMCE-601 chenille embroidery machine — updated 601 model with improved loop height control. The consistent loop height of the 601 produces more uniform chenille texture on athletic letters and emblems.",
  heads:6, needles_per_head:2, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TMCE_601_1998.07.pdf`, manual_source:"retailer" },

{ slug:"tajima-tmce-602-604", brand_slug:"tajima", model_name:"TMCE-602/604", category:"chenille",
  description:"Tajima TMCE-602/604 chenille embroidery machines. The 602 (2-head) and 604 (4-head) are compact chenille machines for smaller shops producing varsity jackets, letterman emblems, and novelty chenille patches.",
  needles_per_head:2, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TMCE_602_604_2001.03.pdf`, manual_source:"retailer" },

{ slug:"tajima-tmce-mix", brand_slug:"tajima", model_name:"TMCE-MIX", category:"combination",
  description:"Tajima TMCE-MIX combination flat-and-chenille embroidery machine. The MIX can switch between standard flat lockstitch embroidery and chenille loop-pile stitch on the same machine, giving shops maximum design flexibility.",
  needles_per_head:12, discontinued:true,
  manual_url:`${PP}/tajima/Tajima_TMCE_MIX_1999.01.pdf`, manual_source:"retailer" },

{ slug:"tajima-tumx", brand_slug:"tajima", model_name:"TUMX", category:"multi-head",
  description:"Tajima TUMX (Tajima Upright Multi-head eXecution) — a specialized upright-frame multi-head embroidery machine. The upright configuration accommodates garments hung vertically, eliminating the need to fold or flatten items for embroidery.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/tajima/Tajima_TUMX_2015.pdf`, manual_source:"retailer" },

// ════ BARUDAN ══════════════════════════════════════════════════════════════

{ slug:"barudan-beat-802", brand_slug:"barudan", model_name:"BEAT 802", category:"multi-head",
  description:"Barudan BEAT 802 multi-head commercial embroidery machine. The BEAT series is Barudan's flagship line of high-speed production embroidery machines, with the 802 model delivering fast stitch rates for high-volume commercial embroidery.",
  heads:8, needles_per_head:12, max_speed_spm:1000,
  manual_url:`${PP}/barudan/Barudan_BEAT_802_YS.pdf`, manual_source:"retailer" },

{ slug:"barudan-beat-804", brand_slug:"barudan", model_name:"BEAT 804/8", category:"multi-head",
  description:"Barudan BEAT 804/8 multi-head embroidery machine with 8 needles per head. The BEAT 804/8 configuration is designed for shops producing designs using up to 8 thread colors with maximum speed.",
  heads:8, needles_per_head:8, max_speed_spm:1000,
  manual_url:`${PP}/barudan/Barudan_BEAT_804_8_YS.pdf`, manual_source:"retailer" },

{ slug:"barudan-beat-iv", brand_slug:"barudan", model_name:"BEAT IV", category:"multi-head",
  description:"Barudan BEAT IV — the fourth generation of Barudan's BEAT multi-head platform. Introduces updated color-change and thread monitoring technology for improved uptime in production embroidery environments.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/barudan/Barudan_BEAT_IV_YS_T.pdf`, manual_source:"retailer" },

{ slug:"barudan-beat-me-900", brand_slug:"barudan", model_name:"BEAT ME 900", category:"multi-head",
  description:"Barudan BEAT ME 900 — the 900-series BEAT machine with Multi-head Electronic control. The ME designation indicates Barudan's advanced electronic control system for network connectivity and pattern management.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/barudan/Barudan_BEAT%5BME%5D_900_ZN.pdf`, manual_source:"retailer" },

{ slug:"barudan-beat-102", brand_slug:"barudan", model_name:"BEAT 102", category:"single-head",
  description:"Barudan BEAT 102 single-head commercial embroidery machine. A compact single-head Barudan in the BEAT series for custom embroidery shops and sampling departments requiring commercial-grade quality.",
  heads:1, needles_per_head:15, max_speed_spm:850,
  manual_url:`${PP}/barudan/Barudan_BEAT_102_UF.pdf`, manual_source:"retailer" },

{ slug:"barudan-beat-702", brand_slug:"barudan", model_name:"BEAT 702", category:"multi-head",
  description:"Barudan BEAT 702 7-head commercial embroidery machine. A 7-head Barudan BEAT for medium-size production shops, balancing output capacity with floor space requirements.",
  heads:7, needles_per_head:15, max_speed_spm:1000, discontinued:true,
  manual_url:`${PP}/barudan/Barudan_BEAT_702_UF.pdf`, manual_source:"retailer" },

{ slug:"barudan-bexs", brand_slug:"barudan", model_name:"BEXS", category:"single-head",
  description:"Barudan BEXS single-head commercial embroidery machine. The BEXS is Barudan's popular single-head for custom embroidery shops, combining Barudan's commercial build quality in a compact single-head configuration.",
  heads:1, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/barudan/Barudan_BEXS_Z12C_Z15C.pdf`, manual_source:"retailer" },

{ slug:"barudan-bexy", brand_slug:"barudan", model_name:"BEXY", category:"single-head",
  description:"Barudan BEXY single-head commercial embroidery machine. An updated single-head Barudan with extended embroidery area for larger design fields on shirts, jackets, and home textiles.",
  heads:1, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/barudan/Barudan_BEXY_Z12C_Z15C.pdf`, manual_source:"retailer" },

{ slug:"barudan-bevt-cb-elite", brand_slug:"barudan", model_name:"BEVT CB Elite Pro", category:"single-head",
  description:"Barudan BEVT CB Elite Pro single-head embroidery machine. The BEVT CB Elite Pro is Barudan's top-of-line single-head, featuring advanced thread monitoring, large embroidery area, and professional color-change speed.",
  heads:1, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/barudan/Barudan_BEVT_Z9_1501_CB_Elite_Pro.pdf`, manual_source:"retailer" },

{ slug:"barudan-bevy", brand_slug:"barudan", model_name:"BEVY", category:"single-head",
  description:"Barudan BEVY single-head embroidery machine. The BEVY offers a larger embroidery field than the BEXS, making it suited for shops embroidering large back designs on jackets and large field garment designs.",
  heads:1, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/barudan/Barudan_BEVY_Z12C_Z15C.pdf`, manual_source:"retailer" },

{ slug:"barudan-bdymhe", brand_slug:"barudan", model_name:"BDYMHE", category:"multi-head",
  description:"Barudan BDYMHE DY series multi-head high-speed embroidery machine. The DY series represents Barudan's mid-range multi-head production machines for commercial embroidery factories.",
  needles_per_head:15, max_speed_spm:1000, discontinued:true,
  manual_url:`${PP}/barudan/Barudan_BE%5BDY%5DHE_ZQ_C.pdf`, manual_source:"retailer" },

{ slug:"barudan-bnrme-zn", brand_slug:"barudan", model_name:"BNRME/BNSME", category:"multi-head",
  description:"Barudan BNRME/BNSME NR and NS series multi-head embroidery machines with ZN electronic control. The N-series with ME (Multi-head Electronic) control brings network pattern management to Barudan's production embroidery systems.",
  needles_per_head:15, max_speed_spm:1000, discontinued:true,
  manual_url:`${PP}/barudan/Barudan_BE%5BNR_NS%5DME_ZN.pdf`, manual_source:"retailer" },

{ slug:"barudan-bmrme-yn", brand_slug:"barudan", model_name:"BMRME/BMSME/BMXME", category:"multi-head",
  description:"Barudan BMRME/BMSME/BMXME — Barudan MR, MS, and MX series multi-head embroidery machines with YN electronic control. The M-series represents Barudan's high-output multi-head range for commercial embroidery production.",
  needles_per_head:15, max_speed_spm:1000, discontinued:true,
  manual_url:`${PP}/barudan/Barudan_BE%5BMR_MS_MX%5DME_YN.pdf`, manual_source:"retailer" },

{ slug:"barudan-bhjuf", brand_slug:"barudan", model_name:"BHJUF", category:"multi-head",
  description:"Barudan BHJUF HJ series commercial embroidery machine with UF control. A specialized Barudan multi-head embroidery machine for production embroidery applications.",
  needles_per_head:12, discontinued:true,
  manual_url:`${PP}/barudan/Barudan_BE%5BHJ%5D_UF.pdf`, manual_source:"retailer" },

{ slug:"barudan-bjruf", brand_slug:"barudan", model_name:"BJRUF/BSRUF/BXU", category:"multi-head",
  description:"Barudan JR/SR/X series embroidery machines with UF control. The JR, SR, and X series form Barudan's entry to mid-range multi-head commercial embroidery line for garment decorators.",
  needles_per_head:15, discontinued:true,
  manual_url:`${PP}/barudan/Barudan_BE%5BJR_SR_X%5D_UF.pdf`, manual_source:"retailer" },

// ════ SWF ══════════════════════════════════════════════════════════════════

{ slug:"swf-e-single", brand_slug:"swf", model_name:"E Series (Single Head)", category:"single-head",
  description:"SWF E Series single-head commercial embroidery machine. The SWF E series is South Korea's most popular single-head commercial embroidery machine, widely used in custom shops throughout North America and Asia.",
  heads:1, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/swf/SWF_E_Multi_Head.pdf`, manual_source:"retailer" },

{ slug:"swf-e-multi", brand_slug:"swf", model_name:"E Series (Multi Head)", category:"multi-head",
  description:"SWF E Series multi-head embroidery machine. The SWF E multi-head is one of the most cost-competitive production embroidery machines in the industry, popular with embroidery shops scaling from single-head to volume production.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/swf/SWF_E_Multi_Head.pdf`, manual_source:"retailer" },

{ slug:"swf-et-compact", brand_slug:"swf", model_name:"ET Compact (Single Head)", category:"single-head",
  description:"SWF ET Compact single-head embroidery machine. A compact, space-saving single-head SWF for small embroidery shops where floor space is limited but commercial-grade stitch quality is required.",
  heads:1, needles_per_head:15, max_speed_spm:850,
  manual_url:`${PP}/swf/SWF_ET_Compact_Single_Head.pdf`, manual_source:"retailer" },

{ slug:"swf-et-full", brand_slug:"swf", model_name:"ET Full Size (Single Head)", category:"single-head",
  description:"SWF ET Full Size single-head embroidery machine. The full-size ET offers a larger embroidery field for shops regularly doing large back designs, jacket chest designs, and oversized garment embroidery.",
  heads:1, needles_per_head:15, max_speed_spm:850,
  manual_url:`${PP}/swf/SWF_ET_Full_Size_Single_Head.pdf`, manual_source:"retailer" },

{ slug:"swf-eu-bridge", brand_slug:"swf", model_name:"EU Bridge (Single Head)", category:"single-head",
  description:"SWF EU Bridge single-head embroidery machine. The bridge-type configuration gives the EU an extra-large embroidery area for embroidering wide panels, home décor items, and large-format garment designs.",
  heads:1, needles_per_head:15, max_speed_spm:850,
  manual_url:`${PP}/swf/SWF_EU_Bridge_Single_Head.pdf`, manual_source:"retailer" },

{ slug:"swf-bt-compact", brand_slug:"swf", model_name:"BT Compact (Single Head)", category:"single-head",
  description:"SWF BT Compact single-head embroidery machine. The BT Compact offers SWF's trademark reliability in the smallest footprint in their commercial line for space-constrained embroidery operations.",
  heads:1, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/swf/SWF_BT_Compact_Single_Head.pdf`, manual_source:"retailer" },

{ slug:"swf-bt-full", brand_slug:"swf", model_name:"BT Full Size (Single Head)", category:"single-head",
  description:"SWF BT Full Size single-head embroidery machine. The BT Full Size delivers expanded embroidery field capability for shops that regularly embroider large designs across the full front or back of garments.",
  heads:1, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/swf/SWF_BT_Full_Size_Single_Head.pdf`, manual_source:"retailer" },

{ slug:"swf-b-multi", brand_slug:"swf", model_name:"B Series (Multi Head)", category:"multi-head",
  description:"SWF B Series multi-head commercial embroidery machine. An earlier multi-head SWF platform that established the brand's reputation in the North American commercial embroidery market.",
  needles_per_head:15, max_speed_spm:850, discontinued:true,
  manual_url:`${PP}/swf/SWF_B_Multi_Head.pdf`, manual_source:"retailer" },

{ slug:"swf-b-dual", brand_slug:"swf", model_name:"B Dual Function", category:"combination",
  description:"SWF B Dual Function combination embroidery machine. The Dual Function SWF B can switch between standard flat embroidery and specialized stitching modes for maximum shop versatility.",
  heads:1, needles_per_head:15, discontinued:true,
  manual_url:`${PP}/swf/SWF_B_Dual_Function_1X1.pdf`, manual_source:"retailer" },

{ slug:"swf-b-th-cylinder", brand_slug:"swf", model_name:"B TH Cylinder (Multi Head)", category:"tubular",
  description:"SWF B TH Multi Head Cylinder Type embroidery machine. The cylinder-arm configuration allows embroidering on tubular garments — sleeves, socks, and cuffs — without disassembling the garment.",
  needles_per_head:15, discontinued:true,
  manual_url:`${PP}/swf/SWF_B_TH_Multi_Head_Cylinder_Type.pdf`, manual_source:"retailer" },

{ slug:"swf-c-multi", brand_slug:"swf", model_name:"C Series (Multi Head)", category:"multi-head",
  description:"SWF C Series multi-head production embroidery machine. The SWF C series delivers high-speed production embroidery for commercial shops and factories requiring consistent output across multiple heads.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/swf/SWF_C_Multi_Head.pdf`, manual_source:"retailer" },

{ slug:"swf-dm-multi", brand_slug:"swf", model_name:"DM Series (Multi Head)", category:"multi-head",
  description:"SWF DM Series multi-head embroidery machine. The DM series represents SWF's digital-control multi-head platform with improved pattern management and color-change accuracy.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/swf/SWF_DM_Multi_Head.pdf`, manual_source:"retailer" },

{ slug:"swf-hc-dual", brand_slug:"swf", model_name:"HC Dual Function", category:"combination",
  description:"SWF HC Dual Function embroidery machine. The HC Dual combines flat embroidery with additional stitching functions for shops requiring multi-technique decorating capability on a single machine.",
  heads:1, needles_per_head:15,
  manual_url:`${PP}/swf/SWF_HC_Dual_Function.pdf`, manual_source:"retailer" },

{ slug:"swf-k-multi", brand_slug:"swf", model_name:"K Series (Multi Head)", category:"multi-head",
  description:"SWF K Series multi-head embroidery machine. The SWF K series is designed for high-volume contract embroidery operations where consistent quality across many heads and long unattended production runs are essential.",
  needles_per_head:15, max_speed_spm:1200,
  manual_url:`${PP}/swf/SWF_K_Multi_Head.pdf`, manual_source:"retailer" },

{ slug:"swf-ui-bridge", brand_slug:"swf", model_name:"UI Bridge (Multi Head)", category:"multi-head",
  description:"SWF UI Multi Head Bridge Type embroidery machine. The bridge-type multi-head SWF UI accommodates very wide embroidery fields for large-scale designs on home textiles, workwear back panels, and banners.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/swf/SWF_UI_Multi_Head_Bridge_Type.pdf`, manual_source:"retailer" },

{ slug:"swf-ma-6", brand_slug:"swf", model_name:"MA-6", category:"multi-head",
  description:"SWF MA-6 6-head commercial embroidery machine. A compact 6-head SWF for mid-size production shops seeking high output within a smaller footprint than the larger MA and K series machines.",
  heads:6, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/swf/SWF_MA_6.pdf`, manual_source:"retailer" },

{ slug:"swf-man-12", brand_slug:"swf", model_name:"MAN-12", category:"multi-head",
  description:"SWF MAN-12 12-head commercial embroidery machine. The 12-head SWF MAN delivers maximum production capacity for large-volume commercial embroidery contracts on hats, shirts, and apparel.",
  heads:12, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/swf/SWF_MAN_12.pdf`, manual_source:"retailer" },

{ slug:"swf-e-dual", brand_slug:"swf", model_name:"E Dual Function", category:"combination",
  description:"SWF E Dual Function combination embroidery machine. A versatile SWF E-series machine that switches between standard flat embroidery and alternate stitching modes for mixed-production shops.",
  heads:1, needles_per_head:15,
  manual_url:`${PP}/swf/SWF_E_Dual_Function.pdf`, manual_source:"retailer" },

// ════ HAPPY ════════════════════════════════════════════════════════════════

{ slug:"happy-hcs-voyager", brand_slug:"happy", model_name:"HCS Voyager", category:"single-head",
  description:"Happy HCS Voyager single-head commercial embroidery machine. The HCS (Happy Commercial Single-head) Voyager is Happy's best-known single-head, loved for its compact footprint and quiet operation in small custom embroidery shops.",
  heads:1, needles_per_head:12, max_speed_spm:850,
  manual_url:`${PP}/happy/Happy_HCS_1201_30_Voyager.pdf`, manual_source:"retailer" },

{ slug:"happy-hcr", brand_slug:"happy", model_name:"HCR Series", category:"multi-head",
  description:"Happy HCR multi-head commercial embroidery machine. The HCR is Happy's standard production multi-head for commercial embroidery shops, balancing stitch speed and reliability for high-volume garment decoration.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/happy/Happy_HCR.pdf`, manual_source:"retailer" },

{ slug:"happy-hcd-1501", brand_slug:"happy", model_name:"HCD 1501-40", category:"multi-head",
  description:"Happy HCD 1501-40 — a 15-head, 40-needle-total commercial embroidery machine. The HCD (Happy Commercial D-series) 1501-40 is engineered for contract embroidery factories running multi-head production around the clock.",
  heads:15, needles_per_head:12, max_speed_spm:1000,
  manual_url:`${PP}/happy/Happy_HCD_1501_40.pdf`, manual_source:"retailer" },

{ slug:"happy-hca-1201", brand_slug:"happy", model_name:"HCA 1201-40TTC", category:"multi-head",
  description:"Happy HCA 1201-40TTC 12-head commercial embroidery machine with twin-trim and cut. The TTC (Twin Trim Cut) system automatically trims and cuts threads after each color change for cleaner production embroidery.",
  heads:12, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/happy/Happy_HCA1201_40TTC_2005.05.pdf`, manual_source:"retailer" },

{ slug:"happy-hca-1501", brand_slug:"happy", model_name:"HCA 1501-40TTC", category:"multi-head",
  description:"Happy HCA 1501-40TTC 15-head commercial embroidery machine with twin-trim and cut. A high-capacity production embroidery machine for large-volume embroidery factories running 15 heads simultaneously.",
  heads:15, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/happy/Happy_HCA1501_40TTC_2002.05.pdf`, manual_source:"retailer" },

{ slug:"happy-hcb", brand_slug:"happy", model_name:"HCB Series", category:"multi-head",
  description:"Happy HCB multi-head commercial embroidery machine. The HCB (Happy Commercial B-series) is Happy's mid-range production multi-head for embroidery shops growing into volume production.",
  needles_per_head:15, max_speed_spm:850,
  manual_url:`${PP}/happy/Happy_HCB_B.pdf`, manual_source:"retailer" },

{ slug:"happy-hcg-b", brand_slug:"happy", model_name:"HCG-B", category:"multi-head",
  description:"Happy HCG-B multi-head commercial embroidery machine (various configurations). The HCG-B is available in multiple head counts and needle configurations for different production volume requirements.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/happy/Happy_HCG_B_1506B_X1504B_1504B_1502B_2003.07.09.pdf`, manual_source:"retailer" },

{ slug:"happy-hcm", brand_slug:"happy", model_name:"HCM Series", category:"single-head",
  description:"Happy HCM single-head embroidery machine. The HCM (Happy Commercial M-series) is a medium-format single-head for shops needing a larger embroidery field than the HCS Voyager provides.",
  heads:1, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/happy/Happy_HCM.pdf`, manual_source:"retailer" },

{ slug:"happy-hcm-806", brand_slug:"happy", model_name:"HCM 806-36T", category:"multi-head",
  description:"Happy HCM 806-36T 8-head, 36-thread commercial embroidery machine. A high-thread-count production machine offering 36 thread colors across 8 embroidery heads for complex multi-color contract embroidery.",
  heads:8, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/happy/Happy_HCM_806_36T.pdf`, manual_source:"retailer" },

{ slug:"happy-hms-802c", brand_slug:"happy", model_name:"HMS 802C", category:"multi-head",
  description:"Happy HMS 802C 8-head commercial embroidery machine with C-control system. The HMS (Happy Multi-head S-series) with C-control brings network pattern management and automated thread monitoring to Happy's production machines.",
  heads:8, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/happy/Happy_HMS_802C.pdf`, manual_source:"retailer" },

// ════ BROTHER COMMERCIAL ═══════════════════════════════════════════════════

{ slug:"brother-bes-1230ac", brand_slug:"brother-commercial", model_name:"BES-1230AC", category:"multi-head",
  description:"Brother BES-1230AC 12-head 30-needle commercial embroidery machine. The BES (Brother Embroidery System) 1230AC is Brother's flagship production multi-head, combining Japanese engineering with a large 12-head platform.",
  heads:12, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/brother/Brother_BES_1230AC.pdf`, manual_source:"retailer" },

{ slug:"brother-bes-960", brand_slug:"brother-commercial", model_name:"BES-960", category:"multi-head",
  description:"Brother BES-960 9-head 60-needle commercial embroidery machine. A high-needle-count 9-head Brother with 60 total needles for embroidery shops producing highly complex multi-color designs at volume.",
  heads:9, needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/brother/Brother_BES_960.pdf`, manual_source:"retailer" },

{ slug:"brother-bes-916ac", brand_slug:"brother-commercial", model_name:"BES-916AC/1216AC", category:"multi-head",
  description:"Brother BES-916AC/1216AC 9 and 12-head commercial embroidery systems. The AC series adds automatic color-change verification for reduced setup errors in multi-head production embroidery shops.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/brother/Brother_BES_916AC_1216AC.pdf`, manual_source:"retailer" },

{ slug:"brother-bes-940bc", brand_slug:"brother-commercial", model_name:"BES-940BC/941BC", category:"multi-head",
  description:"Brother BES-940BC/941BC commercial embroidery system. The BC series features Brother's advanced bobbin control for consistent lower-thread tension across all heads simultaneously.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/brother/Brother_BES_940BC_941BC_1240BC_1241BC.pdf`, manual_source:"retailer" },

{ slug:"brother-bes-962bc", brand_slug:"brother-commercial", model_name:"BES-962BC/963BC", category:"multi-head",
  description:"Brother BES-962BC/963BC high-density commercial embroidery systems. Updated BC series with expanded needle count and improved bobbin control for denser, more detailed embroidery designs.",
  needles_per_head:15, max_speed_spm:1000,
  manual_url:`${PP}/brother/Brother_BES_962BC_963BC_1262BC_1263BC.pdf`, manual_source:"retailer" },

{ slug:"brother-be-0901e", brand_slug:"brother-commercial", model_name:"BE-0901E/1201B", category:"multi-head",
  description:"Brother BE-0901E/1201B commercial embroidery systems — 9 and 12-head configurations. An entry-level production multi-head from Brother for shops expanding from single-head into volume embroidery production.",
  needles_per_head:15, max_speed_spm:850,
  manual_url:`${PP}/brother/Brother_BE_0901E_AC_1201B_AC.pdf`, manual_source:"retailer" },

{ slug:"brother-be-1204b", brand_slug:"brother-commercial", model_name:"BE-1204B/1206B", category:"multi-head",
  description:"Brother BE-1204B/BC/1204C/BC/1206B/BC commercial embroidery machines. The 1204 and 1206 series expand Brother's multi-head production line with additional head-count options for different production scales.",
  needles_per_head:15, max_speed_spm:850,
  manual_url:`${PP}/brother/Brother_BE_1204B_BC_1204C_BC_1206B_BC.pdf`, manual_source:"retailer" },

{ slug:"brother-bas-311", brand_slug:"brother-commercial", model_name:"BAS-311/326", category:"single-head",
  description:"Brother BAS-311/326 programmable pattern sewing and embroidery machine. The BAS (Brother Advanced Sewing) series combines programmed cycle sewing with embroidery capability for label attachment, pocket welting, and decorative embroidery.",
  heads:1, needles_per_head:1,
  manual_url:`${PP}/brother/Brother_BAS_311_326.pdf`, manual_source:"retailer" },

{ slug:"brother-bas-410", brand_slug:"brother-commercial", model_name:"BAS-410", category:"single-head",
  description:"Brother BAS-410 programmable automatic sewing machine with embroidery capability. An updated BAS platform with expanded pattern library for factories producing garments with complex decorative stitching.",
  heads:1, needles_per_head:1,
  manual_url:`${PP}/brother/Brother_BAS_410.pdf`, manual_source:"retailer" },

{ slug:"brother-bas-423", brand_slug:"brother-commercial", model_name:"BAS-423", category:"single-head",
  description:"Brother BAS-423 programmable sewing and embroidery machine. An advanced BAS with larger pattern memory and faster cycle speed for high-volume garment decoration with complex stitch programs.",
  heads:1, needles_per_head:1,
  manual_url:`${PP}/brother/Brother_BAS_423.pdf`, manual_source:"retailer" },

{ slug:"brother-pr1000", brand_slug:"brother-commercial", model_name:"PR1000", category:"single-head",
  description:"Brother PR1000 10-needle professional embroidery machine. The PR1000 bridges the gap between domestic and commercial — a 10-needle single-head for small embroidery businesses, custom shops, and high-end home embroiderers.",
  heads:1, needles_per_head:10, max_speed_spm:1000,
  manual_url:`${PP}/brother/Brother_PR1000.pdf`, manual_source:"retailer" },

{ slug:"brother-pr650", brand_slug:"brother-commercial", model_name:"PR650/PR650C", category:"single-head",
  description:"Brother PR650/PR650C 6-needle professional embroidery machine. An accessible entry point into Brother's PR professional line with six-needle automatic color change for hobbyist and small business embroiderers.",
  heads:1, needles_per_head:6, max_speed_spm:850,
  manual_url:`${PP}/brother/Brother_PR650_PR650C.pdf`, manual_source:"retailer" },

{ slug:"brother-pr600", brand_slug:"brother-commercial", model_name:"PR600/PR600C", category:"single-head",
  description:"Brother PR600/PR600C 6-needle professional embroidery machine. The PR600 series established Brother's professional embroidery line, delivering 6-needle commercial-grade embroidery for small business and studio use.",
  heads:1, needles_per_head:6, max_speed_spm:850, discontinued:true,
  manual_url:`${PP}/brother/Brother_PR600_PR600C.pdf`, manual_source:"retailer" },

{ slug:"brother-pr600ii", brand_slug:"brother-commercial", model_name:"PR600II/PR620", category:"single-head",
  description:"Brother PR600II/PR620/PR620C 6-needle professional embroidery system. An updated PR600 with improved threading system, larger embroidery field, and enhanced color management.",
  heads:1, needles_per_head:6, max_speed_spm:850, discontinued:true,
  manual_url:`${PP}/brother/Brother_PR600II_PR600IIC_PR620_PR620C.pdf`, manual_source:"retailer" },

// ════ TOYOTA ═══════════════════════════════════════════════════════════════

{ slug:"toyota-850", brand_slug:"toyota-industrial", model_name:"Toyota 850", category:"multi-head",
  description:"Toyota 850 commercial multi-head embroidery machine. Toyota's industrial embroidery division produced the 850-series for commercial garment decoration, applying the same engineering precision used in Toyota's automotive components.",
  needles_per_head:12, max_speed_spm:850, discontinued:true,
  manual_url:`${PP}/toyota/Toyota_850_TelemetryBoard.pdf`, manual_source:"retailer" },

{ slug:"toyota-851", brand_slug:"toyota-industrial", model_name:"Toyota 851", category:"multi-head",
  description:"Toyota 851 commercial embroidery machine — an updated version of the 850 series with improved telemetry and control systems. One of Toyota's later multi-head embroidery machines before exiting the commercial embroidery market.",
  needles_per_head:12, max_speed_spm:850, discontinued:true,
  manual_url:`${PP}/toyota/Toyota_851.pdf`, manual_source:"retailer" },

{ slug:"toyota-860", brand_slug:"toyota-industrial", model_name:"Toyota 860", category:"multi-head",
  description:"Toyota 860 high-speed commercial embroidery machine. The 860 represents Toyota's most capable multi-head embroidery platform, delivering improved stitch rates and control over the 850/851 series.",
  needles_per_head:15, max_speed_spm:1000, discontinued:true,
  manual_url:`${PP}/toyota/Toyota_860.pdf`, manual_source:"retailer" },

{ slug:"toyota-9000", brand_slug:"toyota-industrial", model_name:"Toyota 9000", category:"multi-head",
  description:"Toyota 9000 series commercial embroidery machine. Toyota's 9000 series introduced a new generation of commercial embroidery technology with improved electronic control and network connectivity.",
  needles_per_head:15, max_speed_spm:1000, discontinued:true,
  manual_url:`${PP}/toyota/Toyota_9000.pdf`, manual_source:"retailer" },

{ slug:"toyota-9100", brand_slug:"toyota-industrial", model_name:"Toyota 9100", category:"multi-head",
  description:"Toyota 9100 commercial embroidery machine — Toyota's final-generation commercial embroidery system before the brand exited the embroidery machine market. Features the most advanced Toyota embroidery control system.",
  needles_per_head:15, max_speed_spm:1000, discontinued:true,
  manual_url:`${PP}/toyota/Toyota_9100.pdf`, manual_source:"retailer" },

// ════ MELCO ═══════════════════════════════════════════════════════════════

{ slug:"melco-emt-10-4t", brand_slug:"melco", model_name:"EMT 10-4T", category:"single-head",
  description:"Melco EMT 10-4T 10-needle single-head commercial embroidery machine. Melco's EMT platform is designed specifically for the North American custom embroidery market, with 10 needles and Melco's proprietary software integration.",
  heads:1, needles_per_head:10, max_speed_spm:850,
  manual_url:`${PP}/melco/Melco_EMT_10_4T.pdf.pdf`, manual_source:"retailer" },

{ slug:"melco-emt-10-6t", brand_slug:"melco", model_name:"EMT 10-6T", category:"single-head",
  description:"Melco EMT 10-6T 10-needle single-head commercial embroidery machine with 6-thread auto-change. The 6T designation adds a 6-thread automatic color-change capability to the EMT platform for faster production.",
  heads:1, needles_per_head:10, max_speed_spm:850,
  manual_url:`${PP}/melco/Melco_EMT_10_6T.pdf.pdf`, manual_source:"retailer" },

// ════ ZSK ═════════════════════════════════════════════════════════════════

{ slug:"zsk-sprint-6", brand_slug:"zsk", model_name:"Sprint 6", category:"single-head",
  description:"ZSK Sprint 6 6-head commercial embroidery machine from Germany. The ZSK Sprint series is engineered for high-precision embroidery on technical textiles, military insignia, and premium fashion applications requiring German manufacturing quality.",
  heads:6, needles_per_head:15, max_speed_spm:1000,
  manual_url:"https://www.zsk.de/pdf/download/manual-anwendung/04-optionales_zubehoer_und_spuler_/gb/90003v12-zigzag_cording_device_ep1_2-23-10-2017.pdf", manual_source:"manufacturer" },

{ slug:"zsk-racer-series", brand_slug:"zsk", model_name:"Racer Series", category:"multi-head",
  description:"ZSK Racer Series high-speed multi-head embroidery machine. Germany's fastest multi-head embroidery system for high-volume production of workwear, sportswear, and fashion embroidery requiring precision stitching.",
  needles_per_head:15, max_speed_spm:1200,
  manual_url:"https://www.zsk.de/en/support/downloads/manuals/", manual_source:"manufacturer" },

// ════ RICOMA ══════════════════════════════════════════════════════════════

{ slug:"ricoma-em-1010", brand_slug:"ricoma", model_name:"EM-1010", category:"single-head",
  description:"Ricoma EM-1010 10-needle single-head commercial embroidery machine. Ricoma's most popular entry-level machine for new embroidery business owners, offering 10-needle automatic color change at an accessible price point.",
  heads:1, needles_per_head:10, max_speed_spm:1000,
  manual_url:"https://www.ricoma.com/media/manuals/EM-1010-Instruction-Manual.pdf", manual_source:"manufacturer" },

{ slug:"ricoma-mt-1501", brand_slug:"ricoma", model_name:"MT-1501", category:"multi-head",
  description:"Ricoma MT-1501 15-head single-needle tubular commercial embroidery machine. A production-scale 15-head Ricoma for factories needing high-volume output at a competitive price point versus Japanese brands.",
  heads:15, needles_per_head:1, max_speed_spm:1000,
  manual_url:"https://www.ricoma.com/media/manuals/MT-1501-Instruction-Manual.pdf", manual_source:"manufacturer" },

{ slug:"ricoma-cht-1201", brand_slug:"ricoma", model_name:"CHT-1201", category:"multi-head",
  description:"Ricoma CHT-1201 12-head tubular commercial embroidery machine. A high-capacity 12-head Ricoma offering production volume embroidery at an accessible price for growing embroidery businesses.",
  heads:12, needles_per_head:15, max_speed_spm:1000,
  manual_url:"https://www.ricoma.com/media/manuals/CHT-1201-Instruction-Manual.pdf", manual_source:"manufacturer" },
];

async function run() {
  const brandIds: Record<string, string> = {};

  console.log("── Brands ──");
  for (const br of BRANDS) {
    const { data: existing } = await db.from("brands").select("id").eq("slug", br.slug).single();
    if (existing) { brandIds[br.slug] = existing.id; console.log(`  skip ${br.slug}`); continue; }
    const { data, error } = await db.from("brands").insert({
      slug: br.slug, name: br.name, country: br.country,
      description: br.description, website_url: br.website_url,
    }).select("id").single();
    if (error) console.error(`  ✗ ${br.slug}:`, error.message);
    else { brandIds[br.slug] = data!.id; console.log(`  + ${br.slug}`); }
  }

  console.log("── Machines ──");
  let ok = 0;
  for (const m of MACHINES) {
    const brand_id = brandIds[m.brand_slug];
    if (!brand_id) { console.error(`  ✗ ${m.slug}: brand '${m.brand_slug}' not found`); continue; }
    const { slug, brand_slug: _, ...rest } = m;
    const { error } = await db.from("machines").upsert({ slug, brand_id, ...rest }, { onConflict: "slug" });
    if (error) console.error(`  ✗ ${slug}:`, error.message);
    else { process.stdout.write("."); ok++; }
  }

  const { count } = await db.from("machines").select("*", { count: "exact", head: true });
  console.log(`\n\nDone: ${ok}/${MACHINES.length}. Total in DB: ${count}`);
}
run().catch(e => { console.error(e); process.exit(1); });
