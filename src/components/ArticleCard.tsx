import Link from "next/link";
import CategoryBadge from "@/components/CategoryBadge";
import { articleIllustrations } from "@/lib/illustrations";
import type { Article } from "@/data/articles";

export default function ArticleCard({ article }: { article: Article }) {
  const CoverComponent = articleIllustrations[article.slug];

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 glass-card transition-all duration-500 hover:-translate-y-2 hover:border-teal-500/50 hover:shadow-[0_20px_50px_rgba(20,184,166,0.1)]">
      {/* Cover Image Area */}
      <Link href={`/blog/${article.slug}`} className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0f172a] border-b border-white/5 flex items-center justify-center p-6">
          {CoverComponent ? (
            <CoverComponent className="w-full h-full object-contain" />
          ) : (
            <svg viewBox="0 0 800 450" className="w-full h-full opacity-30">
              <rect width="800" height="450" fill="currentColor" opacity="0.05" />
              <polygon points="400,120 460,240 340,240" fill="currentColor" opacity="0.15" />
              <polygon points="400,160 430,220 370,220" fill="currentColor" opacity="0.1" />
              <circle cx="400" cy="300" r="40" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.12" />
            </svg>
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
          <h2 className="text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-teal-400">
            {article.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-400">
          {article.excerpt}
        </p>

        {/* Meta: Date and Read Time */}
        <div className="mt-6 flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-gray-500">
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
            <span className="text-white/20">|</span>
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
