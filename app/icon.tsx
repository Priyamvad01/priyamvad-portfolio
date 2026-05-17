import { ImageResponse } from "next/og"

export const size = {
  width: 512,
  height: 512,
}
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 18%, rgba(125, 211, 252, 0.3), transparent 34%), linear-gradient(135deg, #05070b, #111827)",
          color: "#e0f2fe",
          fontFamily: "Arial, sans-serif",
          fontSize: 142,
          fontWeight: 800,
          letterSpacing: -8,
        }}
      >
        PR
      </div>
    ),
    size
  )
}
