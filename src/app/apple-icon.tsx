import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2D1810, #5C4033)",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            background: "linear-gradient(135deg, #D2B48C, #8B6914)",
            transform: "rotate(45deg)",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              background: "rgba(255,255,255,0.35)",
              borderRadius: 6,
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
