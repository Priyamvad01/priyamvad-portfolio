import { ImageResponse } from "next/og"

import { siteProfile } from "@/constants/site"

export const alt = "Priyamvad Ranjan engineering portfolio"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 18% 18%, rgba(125, 211, 252, 0.22), transparent 32%), radial-gradient(circle at 82% 10%, rgba(59, 130, 246, 0.16), transparent 30%), linear-gradient(135deg, #05070b 0%, #0b111d 54%, #111827 100%)",
          color: "white",
          padding: 72,
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#bae6fd",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.18)",
              background: "rgba(255,255,255,0.08)",
              fontWeight: 700,
              letterSpacing: 0,
            }}
          >
            PR
          </div>
          Engineering Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>
            {siteProfile.name}
          </div>
          <div
            style={{
              width: 860,
              color: "#cbd5e1",
              fontSize: 36,
              lineHeight: 1.25,
            }}
          >
            Backend systems, AI-integrated workflows, cloud deployment, and
            modern engineering projects.
          </div>
        </div>
        <div
          style={{
            color: "#e2e8f0",
            fontSize: 26,
            display: "flex",
            gap: 18,
          }}
        >
          <span>FastAPI</span>
          <span>Docker</span>
          <span>AWS</span>
          <span>CI/CD</span>
          <span>AI Systems</span>
        </div>
      </div>
    ),
    size
  )
}
