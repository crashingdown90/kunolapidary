import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #5C4033, #8B6914)",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            background: "linear-gradient(135deg, #D2B48C, #F5E6D3)",
            transform: "rotate(45deg)",
            borderRadius: 2,
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
