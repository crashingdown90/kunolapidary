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
          background: "linear-gradient(135deg, #14b8a6, #8b5cf6)",
          borderRadius: 36,
        }}
      >
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 9 12 22 22 9 12 2" />
          <polyline points="2 9 12 15 22 9" />
          <polyline points="12 2 12 15" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
