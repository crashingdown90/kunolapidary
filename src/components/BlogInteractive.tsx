"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArticleCard from "@/components/ArticleCard";
import type { Article } from "@/data/articles";
import { useRouter, useSearchParams } from "next/navigation";

export default function BlogInteractive({
  articles,
  categories,
}: {
  articles: Article[];
  categories: string[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const initialCategory = searchParams.get("category") || "";
  const initialQuery = searchParams.get("q") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // Sync state to URL without full page reload
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategory) params.set("category", selectedCategory);
    if (searchQuery) params.set("q", searchQuery);
    
    const newUrl = params.toString() ? `/blog?${params.toString()}` : "/blog";
    router.replace(newUrl, { scroll: false });
  }, [selectedCategory, searchQuery, router]);

  const filteredArticles = useMemo(() => {
    let result = articles;

    if (selectedCategory) {
      result = result.filter((a) => a.category === selectedCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q)
      );
    }

    return result;
  }, [articles, selectedCategory, searchQuery]);

  return (
    <div className="grid lg:grid-cols-4 gap-16">
      {/* Main Content */}
      <div className="lg:col-span-3">
        {/* Category Filter */}
        <div className="flex overflow-x-auto gap-3 mb-12 pb-4 scrollbar-hide">
          <button
            onClick={() => setSelectedCategory("")}
            className={`flex-none px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
              !selectedCategory
                ? "bg-teal-500 text-[#020617] shadow-[0_10px_30px_rgba(20,184,166,0.3)]"
                : "bg-white/5 border border-white/5 text-gray-500 hover:text-teal-400 hover:bg-white/10"
            }`}
          >
            All Articles
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`flex-none px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${
                selectedCategory === cat
                  ? "bg-teal-500 text-[#020617] shadow-[0_10px_30px_rgba(20,184,166,0.3)]"
                  : "bg-white/5 border border-white/5 text-gray-500 hover:text-teal-400 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Results Info */}
        <div className="mb-8 text-gray-400 text-sm font-light flex items-center justify-between">
          <span>
            Showing <strong className="text-teal-400">{filteredArticles.length}</strong> result(s)
          </span>
          {(selectedCategory || searchQuery) && (
            <button 
              onClick={() => { setSelectedCategory(""); setSearchQuery(""); }}
              className="text-xs uppercase tracking-widest text-gray-500 hover:text-teal-400 transition-colors"
            >
              Clear Filters &times;
            </button>
          )}
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <motion.div layout className="grid md:grid-cols-2 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={article.slug}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20 glass-card rounded-3xl border-dashed"
          >
            <div className="text-6xl mb-6">🔍</div>
            <p className="text-gray-300 text-xl font-serif italic mb-2">
              No field notes found.
            </p>
            <p className="text-gray-500 text-sm font-light">
              Try adjusting your search keywords or selecting a different category.
            </p>
          </motion.div>
        )}
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="sticky top-28 space-y-12">
          {/* Search Widget */}
          <div className="relative group">
            <h3 className="text-[10px] font-bold text-gray-500 mb-6 uppercase tracking-[0.3em]">
              Search Archive
            </h3>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Keywords..."
                className="w-full bg-white/2 border-b border-white/10 px-0 py-4 text-sm text-white placeholder-gray-600 outline-none transition-all duration-500 focus:border-teal-500 focus:placeholder-transparent"
              />
              <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 group-focus-within:text-teal-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Categories Widget */}
          <div className="space-y-6">
            <h3 className="text-[10px] font-bold text-gray-500 mb-8 uppercase tracking-[0.3em]">
              Curated Topics
            </h3>
            <ul className="space-y-6">
              {categories.map((cat) => {
                const count = articles.filter(
                  (a) => a.category === cat
                ).length;
                return (
                  <li key={cat}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full flex items-center justify-between transition-all duration-500 group ${
                        selectedCategory === cat ? "text-teal-400" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <span className="font-serif italic text-lg">{cat}</span>
                      <span className={`text-[10px] font-bold tabular-nums ${
                        selectedCategory === cat ? "text-teal-500" : "text-gray-600"
                      }`}>
                        {count.toString().padStart(2, '0')}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* About Widget */}
          <div className="pt-8 border-t border-white/5">
            <p className="text-[13px] text-gray-500 leading-relaxed font-light italic">
              Kuno Lapidary is an independent publication dedicated to the intersection of art, science, and the geological history of our planet.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
