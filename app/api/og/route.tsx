import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Embroidery Machine Manuals";
  const subtitle = searchParams.get("subtitle") ?? "Free PDF Downloads";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          padding: "60px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#f59e0b" }} />
          <span style={{ color: "#f59e0b", fontSize: 18, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>
            EmbroideryMachineManuals
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ color: "#ffffff", fontSize: title.length > 40 ? 52 : 64, fontWeight: 800, lineHeight: 1.1 }}>
            {title}
          </div>
          <div style={{ color: "#94a3b8", fontSize: 28, fontWeight: 400 }}>
            {subtitle}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "#475569", fontSize: 18 }}>Free PDF — view or download</span>
          <div style={{ backgroundColor: "#f59e0b", color: "#000", fontSize: 18, fontWeight: 700, padding: "10px 24px", borderRadius: 8 }}>
            View Manual →
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
