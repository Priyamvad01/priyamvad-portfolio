import { ImageResponse } from "next/og"

export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #05070b, #111827)",
          color: "#e0f2fe",
          fontFamily: "Arial, sans-serif",
          fontSize: 54,
          fontWeight: 800,
          letterSpacing: -3,
        }}
      >
        PR
      </div>
    ),
    size
  )
}
