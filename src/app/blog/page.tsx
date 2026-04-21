import { Metadata } from "next";
import Link from "next/link";
import { articles, getAllCategories } from "@/data/articles";
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
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const selectedCategory = params.category || "";
  const categories = getAllCategories();

  const filteredArticles = selectedCategory
    ? articles.filter((a) => a.category === selectedCategory)
    : articles;

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#0f172a] border-b border-white/5">
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
      <section className="bg-[#020617] border-b border-white/5 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mb-6">
            {selectedCategory ? `${selectedCategory} Articles` : "Exploring The Earth"}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            {selectedCategory
              ? `Explore our curated collection of ${selectedCategory.toLowerCase()} articles and guides.`
              : "Discover expert guides, in-depth articles, and educational content about lapidary arts, gemstones, and geology."}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                href="/blog"
                className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${!selectedCategory
                    ? "bg-teal-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] scale-105"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:text-teal-400 hover:border-teal-500/30"
                  }`}
              >
                All Articles
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog?category=${cat}`}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${selectedCategory === cat
                      ? "bg-teal-500 text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] scale-105"
                      : "bg-white/5 border border-white/10 text-gray-400 hover:text-teal-400 hover:border-teal-500/30"
                    }`}
                >
                  {cat}
                </Link>
              ))}
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-8">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted text-lg">
                  No articles found in this category yet. Check back soon!
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Categories Widget */}
              <div className="glass-card rounded-2xl border border-white/10 p-6 shadow-xl">
                <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-xs border-b border-white/10 pb-4">
                  Categories
                </h3>
                <ul className="space-y-4">
                  {categories.map((cat) => {
                    const count = articles.filter(
                      (a) => a.category === cat
                    ).length;
                    return (
                      <li key={cat}>
                        <Link
                          href={`/blog?category=${cat}`}
                          className="flex items-center justify-between text-gray-400 hover:text-teal-400 transition-all duration-300 group"
                        >
                          <span className="group-hover:ml-1 transition-all">{cat}</span>
                          <span className="text-[10px] bg-white/5 border border-white/10 text-gray-500 px-2.5 py-1 rounded-full font-bold uppercase tracking-tighter">
                            {count}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Ad Placeholder */}
              <AdPlaceholder format="rectangle" />

              {/* About Widget */}
              <div className="glass-card rounded-2xl border border-white/10 p-8 shadow-xl">
                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-widest text-xs border-b border-white/10 pb-4">
                  About Kuno Lapidary
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Your trusted source for lapidary arts, gemstone knowledge, and
                  geological sciences. We bring you expert-written content for
                  enthusiasts at every level.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
