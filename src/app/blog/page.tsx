import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles, getAllCategories } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import Breadcrumb from "@/components/Breadcrumb";
import AdPlaceholder from "@/components/AdPlaceholder";

export const metadata: Metadata = {
  title: "Blog - Lapidary, Gemstones & Geology Articles",
  description:
    "Browse our collection of expert articles on lapidary arts, gemstone identification, geological sciences, and more. Free educational content for all skill levels.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog - Lapidary, Gemstones & Geology Articles | Kuno Lapidary",
    description:
      "Browse our collection of expert articles on lapidary arts, gemstone identification, and geological sciences.",
    url: "https://kunolapidary.com/blog",
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; q?: string }>;
}) {
  const params = await searchParams;
  const selectedCategory = params.category || "";
  const searchQuery = params.q || "";
  const articles = getAllArticles();
  const categories = getAllCategories();

  const heroArticle = articles[0];
  const remainingArticles = articles.slice(1);

  let filteredArticles = selectedCategory
    ? articles.filter((a) => a.category === selectedCategory)
    : remainingArticles;

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filteredArticles = articles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q)
    );
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#0b0f19] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog" },
            ]}
          />
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-[#020617] border-b border-white/5 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif italic text-white mb-8 tracking-tighter">
            Exploring <span className="text-teal-400">The Earth</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {selectedCategory
              ? `A curated deep-dive into the fascinating world of ${selectedCategory.toLowerCase()}.`
              : "Discover expert guides and in-depth articles about lapidary arts, gemstones, and geology."}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Hero Article - Only shown when no category filter is active */}
        {!selectedCategory && !searchQuery && heroArticle && (
          <div className="mb-24">
            <Link href={`/blog/${heroArticle.slug}`} className="group block relative rounded-[40px] overflow-hidden glass-card border-white/10">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="aspect-[4/3] lg:aspect-square relative overflow-hidden">
                  {heroArticle.heroImage && (
                    <Image
                      src={heroArticle.heroImage}
                      alt={heroArticle.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      priority
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent lg:hidden" />
                </div>
                <div className="p-10 lg:p-20">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="px-4 py-1.5 bg-teal-500/10 text-teal-400 text-[10px] font-bold uppercase tracking-[0.3em] rounded-full border border-teal-500/20">
                      Feature Story
                    </span>
                    <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest italic font-serif">
                      {new Date(heroArticle.publishDate).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 group-hover:text-teal-400 transition-colors leading-[1.1]">
                    {heroArticle.title}
                  </h2>
                  <p className="text-gray-400 text-lg md:text-xl mb-12 line-clamp-3 font-light leading-relaxed">
                    {heroArticle.excerpt}
                  </p>
                  <span className="inline-flex items-center text-teal-400 font-bold text-xs tracking-[0.2em] uppercase group-hover:gap-4 transition-all">
                    Read the Full Story
                    <svg className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Filter */}
            <div className="flex overflow-x-auto gap-3 mb-16 pb-4 scrollbar-hide">
              <Link
                href="/blog"
                className={`flex-none px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${!selectedCategory
                  ? "bg-teal-500 text-[#020617] shadow-[0_10px_30px_rgba(20,184,166,0.3)]"
                  : "bg-white/5 border border-white/5 text-gray-500 hover:text-teal-400 hover:bg-white/10"
                  }`}
              >
                All Articles
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog?category=${cat}`}
                  className={`flex-none px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 ${selectedCategory === cat
                    ? "bg-teal-500 text-[#020617] shadow-[0_10px_30px_rgba(20,184,166,0.3)]"
                    : "bg-white/5 border border-white/5 text-gray-500 hover:text-teal-400 hover:bg-white/10"
                    }`}
                >
                  {cat}
                </Link>
              ))}
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-12">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 glass-card rounded-3xl border-dashed">
                <p className="text-gray-500 text-lg font-light italic">
                  No articles found in this category yet. Check back soon!
                </p>
              </div>
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
                <form action="/blog" method="GET" className="relative">
                  <input
                    type="text"
                    name="q"
                    defaultValue={searchQuery}
                    placeholder="Keywords..."
                    className="w-full bg-white/2 border-b border-white/10 px-0 py-4 text-sm text-white placeholder-gray-600 outline-none transition-all duration-500 focus:border-teal-500 focus:placeholder-transparent"
                  />
                  {selectedCategory && (
                    <input type="hidden" name="category" value={selectedCategory} />
                  )}
                  <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-teal-400 transition-colors"
                    aria-label="Submit search"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
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
                        <Link
                          href={`/blog?category=${cat}`}
                          className="flex items-center justify-between text-gray-400 hover:text-white transition-all duration-500 group"
                        >
                          <span className="font-serif italic text-lg group-hover:text-teal-400">{cat}</span>
                          <span className="text-[10px] text-gray-600 font-bold tabular-nums">
                            {count.toString().padStart(2, '0')}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <AdPlaceholder format="rectangle" />

              {/* About Widget */}
              <div className="pt-8 border-t border-white/5">
                <p className="text-[13px] text-gray-500 leading-relaxed font-light italic">
                  Kuno Lapidary is an independent publication dedicated to the intersection of art, science, and the geological history of our planet.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
