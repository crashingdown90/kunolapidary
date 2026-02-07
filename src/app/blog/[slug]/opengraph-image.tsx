import { ImageResponse } from "next/og";
import { getArticleBySlug, getAllSlugs } from "@/lib/mdx";

export const alt = "Kuno Lapidary Blog Article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const categoryColors: Record<string, string> = {
  Lapidary: "#6B8E23",
  Gemstones: "#8B6914",
  Geology: "#5C4033",
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function OGImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#2D1810",
            color: "#F5E6D3",
            fontSize: 48,
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Article Not Found
        </div>
      ),
      { ...size }
    );
  }

  const catColor = categoryColors[article.category] || "#5C4033";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 60,
          background: "linear-gradient(150deg, #2D1810 0%, #3D2E24 60%, #5C4033 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top section */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Category badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                padding: "6px 18px",
                background: catColor,
                borderRadius: 20,
                color: "white",
                fontSize: 18,
                fontWeight: 600,
                display: "flex",
              }}
            >
              {article.category}
            </div>
            <div
              style={{
                color: "rgba(210, 180, 140, 0.6)",
                fontSize: 16,
                display: "flex",
              }}
            >
              {article.readTime}
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: "#F5E6D3",
              lineHeight: 1.2,
              display: "flex",
              maxWidth: "90%",
            }}
          >
            {article.title}
          </div>

          {/* Excerpt */}
          <div
            style={{
              fontSize: 20,
              color: "rgba(210, 180, 140, 0.7)",
              lineHeight: 1.5,
              marginTop: 20,
              display: "flex",
              maxWidth: "80%",
            }}
          >
            {article.excerpt.length > 150
              ? article.excerpt.slice(0, 150) + "..."
              : article.excerpt}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(210, 180, 140, 0.2)",
            paddingTop: 24,
          }}
        >
          {/* Logo area */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                background: "linear-gradient(135deg, #D2B48C, #8B6914)",
                transform: "rotate(45deg)",
                borderRadius: 6,
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#F5E6D3",
                letterSpacing: "0.05em",
                display: "flex",
              }}
            >
              KUNO LAPIDARY
            </div>
          </div>

          {/* Author and date */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "rgba(210, 180, 140, 0.5)",
              fontSize: 16,
            }}
          >
            <span style={{ display: "flex" }}>{article.author}</span>
            <span style={{ display: "flex" }}>
              {new Date(article.publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
