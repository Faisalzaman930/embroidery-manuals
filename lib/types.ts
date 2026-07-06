export type MachineCategory =
  | "single-head"
  | "multi-head"
  | "cap"
  | "chenille"
  | "combination"
  | "tubular"
  | "sequin"
  | "other";

export const CATEGORY_LABELS: Record<MachineCategory, string> = {
  "single-head": "Single Head",
  "multi-head": "Multi Head",
  "cap": "Cap / Hat",
  "chenille": "Chenille",
  "combination": "Combination",
  "tubular": "Tubular / Cylinder",
  "sequin": "Sequin",
  "other": "Other / Specialty",
};

export const CATEGORY_DESCRIPTIONS: Record<MachineCategory, string> = {
  "single-head": "One embroidery head for sample rooms, custom shops, and small-run production.",
  "multi-head": "Multiple heads embroider identical designs simultaneously for high-volume production.",
  "cap": "Rotary hook and curved frame for embroidering structured hats and caps.",
  "chenille": "Loop-pile stitch creating the raised, textured chenille look on varsity jackets.",
  "combination": "Switchable between flat embroidery and chenille for maximum versatility.",
  "tubular": "Cylinder-arm configuration for embroidering sleeves, cuffs, and tubular garments.",
  "sequin": "Sequin-feeding device applies decorative sequins in the stitch pattern.",
  "other": "Specialty embroidery machine for unique applications.",
};

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  country: string | null;
  website_url: string | null;
}

export interface Machine {
  id: string;
  brand_id: string;
  brand?: Brand;
  model_name: string;
  slug: string;
  category: MachineCategory;
  description: string | null;
  heads: number | null;
  needles_per_head: number | null;
  max_speed_spm: number | null;
  max_embroidery_area: string | null;
  discontinued: boolean;
  manual_url: string | null;
  manual_source: string | null;
}
