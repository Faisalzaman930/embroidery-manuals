interface Props {
  heads?: number | null;
  needles_per_head?: number | null;
  max_speed_spm?: number | null;
  max_embroidery_area?: string | null;
  discontinued?: boolean;
  category: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  "single-head": "Single Head", "multi-head": "Multi Head", "cap": "Cap / Hat",
  "chenille": "Chenille", "combination": "Combination",
  "tubular": "Tubular / Cylinder", "sequin": "Sequin", "other": "Other / Specialty",
};

export default function SpecsTable({ heads, needles_per_head, max_speed_spm, max_embroidery_area, discontinued, category }: Props) {
  const rows: { label: string; value: string }[] = [
    { label: "Machine Type", value: CATEGORY_LABELS[category] ?? category },
    ...(heads != null ? [{ label: "Number of Heads", value: `${heads} head${heads > 1 ? "s" : ""}` }] : []),
    ...(needles_per_head != null ? [{ label: "Needles per Head", value: `${needles_per_head} needles` }] : []),
    ...(needles_per_head != null && heads != null ? [{ label: "Total Needles", value: `${heads * needles_per_head} needles` }] : []),
    ...(max_speed_spm != null ? [{ label: "Max Speed", value: `${max_speed_spm.toLocaleString()} stitches/min` }] : []),
    ...(max_embroidery_area ? [{ label: "Max Embroidery Area", value: max_embroidery_area }] : []),
    { label: "Production Status", value: discontinued ? "Discontinued" : "Current / Active" },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200">
      <table className="w-full text-sm">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
              <th className="px-4 py-3 text-left font-semibold text-slate-600 w-48">{row.label}</th>
              <td className="px-4 py-3 text-slate-800">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
