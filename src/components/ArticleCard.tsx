"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CategoryBadge from "@/components/CategoryBadge";
import { articleIllustrations } from "@/lib/illustrations";
import type { Article } from "@/data/articles";

export default function ArticleCard({ article }: { article: Article }) {
  const CoverComponent = articleIllustrations[article.slug];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="group overflow-hidden rounded-[32px] glass-card flex flex-col h-full"
    >
      {/* Cover Image Area */}
      <Link href={`/blog/${article.slug}`} className="block relative aspect-[4/3] overflow-hidden">
        {article.heroImage ? (
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        ) : CoverComponent ? (
          <CoverComponent className="w-full h-full object-contain p-8" />
        ) : (
          <div className="w-full h-full bg-[#0f172a] opacity-20" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Link>

      {/* Content */}
      <div className="p-8 flex flex-col flex-1">
        {/* Category & Date */}
        <div className="flex items-center justify-between mb-6">
          {article.category && (
            <CategoryBadge category={article.category} size="sm" />
          )}
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 italic font-serif">
            {new Date(article.publishDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
          </span>
        </div>

        {/* Title */}
        <Link href={`/blog/${article.slug}`} className="flex-1">
          <h2 className="text-2xl font-serif text-white leading-tight mb-4 group-hover:text-teal-400 transition-colors duration-500">
            {article.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-400 font-light mb-8">
          {article.excerpt}
        </p>

        {/* Action & Read Time */}
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <Link
            href={`/blog/${article.slug}`}
            className="text-[10px] font-bold uppercase tracking-widest text-teal-400 flex items-center gap-2 group/btn"
          >
            Read Story
            <svg className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <span className="text-[9px] font-bold text-gray-600 uppercase tracking-tighter">
            {article.readTime}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
