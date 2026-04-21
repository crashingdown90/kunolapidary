import { ImageResponse } from "next/og";

export const alt = "Kuno Lapidary - Gemstones, Geology & Lapidary Arts";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2D1810 0%, #5C4033 50%, #8B6914 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Decorative gem shapes */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 60,
            width: 80,
            height: 80,
            background: "rgba(107, 142, 35, 0.3)",
            transform: "rotate(45deg)",
            borderRadius: 8,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 80,
            width: 60,
            height: 60,
            background: "rgba(139, 105, 20, 0.4)",
            transform: "rotate(30deg)",
            borderRadius: 6,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 100,
            right: 150,
            width: 40,
            height: 40,
            background: "rgba(210, 180, 140, 0.25)",
            transform: "rotate(60deg)",
            borderRadius: 4,
            display: "flex",
          }}
        />

        {/* Diamond icon */}
        <div
          style={{
            width: 80,
            height: 80,
            background: "linear-gradient(135deg, #D2B48C, #8B6914)",
            transform: "rotate(45deg)",
            borderRadius: 12,
            marginBottom: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              background: "rgba(255,255,255,0.3)",
              borderRadius: 6,
              display: "flex",
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#F5E6D3",
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          KUNO LAPIDARY
        </div>

        {/* Divider */}
        <div
          style={{
            width: 120,
            height: 3,
            background: "#D2B48C",
            marginTop: 20,
            marginBottom: 20,
            borderRadius: 2,
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "#D2B48C",
            letterSpacing: "0.05em",
            display: "flex",
          }}
        >
          Unearthing Nature&apos;s Brilliance, One Stone at a Time
        </div>

        {/* Categories */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 30,
          }}
        >
          {["Lapidary", "Gemstones", "Geology"].map((cat) => (
            <div
              key={cat}
              style={{
                padding: "8px 20px",
                background: "rgba(245, 230, 211, 0.15)",
                borderRadius: 20,
                color: "#D2B48C",
                fontSize: 16,
                border: "1px solid rgba(210, 180, 140, 0.3)",
                display: "flex",
              }}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            fontSize: 16,
            color: "rgba(210, 180, 140, 0.6)",
            display: "flex",
          }}
        >
          kunolapidary.com
        </div>
      </div>
    ),
    { ...size }
  );
}
