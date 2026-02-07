import Link from "next/link";
import CategoryBadge from "@/components/CategoryBadge";
import { articleIllustrations } from "@/lib/illustrations";
import type { Article } from "@/data/articles";

export default function ArticleCard({ article }: { article: Article }) {
  const CoverComponent = articleIllustrations[article.slug];

  return (
    <article className="group overflow-hidden rounded-xl border border-light/30 bg-cream/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Cover Image Area */}
      <Link href={`/blog/${article.slug}`} className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-cream to-border flex items-center justify-center p-4">
          {CoverComponent ? (
            <CoverComponent className="w-full h-full object-contain" />
          ) : (
            <div className="text-light text-sm">No image</div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        {/* Category Badge */}
        {article.category && (
          <div className="mb-3">
            <CategoryBadge category={article.category} size="sm" />
          </div>
        )}

        {/* Title */}
        <Link href={`/blog/${article.slug}`}>
          <h2 className="text-lg font-semibold leading-snug text-text transition-colors duration-200 group-hover:text-primary">
            {article.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-primary/70">
          {article.excerpt}
        </p>

        {/* Meta: Date and Read Time */}
        <div className="mt-4 flex items-center gap-3 text-xs text-primary/50">
          {article.publishDate && (
            <time dateTime={article.publishDate} className="flex items-center gap-1">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              {new Date(article.publishDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          )}
          {article.publishDate && article.readTime && (
            <span className="text-light">·</span>
          )}
          {article.readTime && (
            <span className="flex items-center gap-1">
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {article.readTime}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
