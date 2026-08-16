import { ImageResponse } from "next/og";

export const alt = "Mogan Studio — WordPress and WooCommerce Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f7f7f5", color: "#111", padding: "70px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "0.16em" }}>MOGAN STUDIO</div>
      <div style={{ display: "flex", flexDirection: "column" }}><div style={{ maxWidth: 920, fontSize: 74, lineHeight: 1, letterSpacing: "-0.045em", fontWeight: 700 }}>Fast, reliable websites for growing businesses.</div><div style={{ marginTop: 35, fontSize: 24, color: "#666" }}>WordPress · WooCommerce · Custom web development</div></div>
      <div style={{ fontSize: 20, color: "#666" }}>Gandomi, Developer</div>
    </div>,
    size,
  );
}
