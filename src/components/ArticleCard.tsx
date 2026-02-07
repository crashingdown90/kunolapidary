import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import CategoryBadge from "@/components/CategoryBadge";

export interface ArticleCardProps {
  /** Pass an article object with all fields */
  article?: {
    title: string;
    excerpt: string;
    slug: string;
    category: string;
    coverImage: string | ReactNode;
    publishDate: string;
    readTime: string;
  };
  /** Or pass individual props */
  title?: string;
  excerpt?: string;
  slug?: string;
  category?: string;
  coverImage?: string | ReactNode;
  publishDate?: string;
  readTime?: string;
}

export default function ArticleCard(props: ArticleCardProps) {
  const title = props.article?.title ?? props.title ?? "";
  const excerpt = props.article?.excerpt ?? props.excerpt ?? "";
  const slug = props.article?.slug ?? props.slug ?? "";
  const category = props.article?.category ?? props.category ?? "";
  const coverImage = props.article?.coverImage ?? props.coverImage;
  const publishDate = props.article?.publishDate ?? props.publishDate ?? "";
  const readTime = props.article?.readTime ?? props.readTime ?? "";

  return (
    <article className="group overflow-hidden rounded-xl border border-[#D2B48C]/30 bg-[#F5E6D3]/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Cover Image Area */}
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#D2B48C]/20">
          {typeof coverImage === "string" ? (
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            coverImage
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        {/* Category Badge */}
        {category && (
          <div className="mb-3">
            <CategoryBadge category={category} size="sm" />
          </div>
        )}

        {/* Title */}
        <Link href={`/blog/${slug}`}>
          <h2 className="text-lg font-semibold leading-snug text-[#2D1810] transition-colors duration-200 group-hover:text-[#5C4033]">
            {title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#5C4033]/70">
          {excerpt}
        </p>

        {/* Meta: Date and Read Time */}
        <div className="mt-4 flex items-center gap-3 text-xs text-[#5C4033]/50">
          {publishDate && (
            <time dateTime={publishDate} className="flex items-center gap-1">
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
              {publishDate}
            </time>
          )}
          {publishDate && readTime && (
            <span className="text-[#D2B48C]">&middot;</span>
          )}
          {readTime && (
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
              {readTime}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
