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
      <div className="bg-cream/50">
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
      <section className="bg-gradient-to-b from-cream/50 to-bg py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4">
            {selectedCategory ? `${selectedCategory} Articles` : "All Articles"}
          </h1>
          <p className="text-lg text-muted max-w-2xl">
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
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/blog"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !selectedCategory
                    ? "bg-primary text-white"
                    : "bg-cream text-primary hover:bg-border"
                }`}
              >
                All
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/blog?category=${cat}`}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-primary text-white"
                      : "bg-cream text-primary hover:bg-border"
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
              <div className="bg-white rounded-2xl border border-border p-6">
                <h3 className="text-lg font-bold text-text mb-4">
                  Categories
                </h3>
                <ul className="space-y-3">
                  {categories.map((cat) => {
                    const count = articles.filter(
                      (a) => a.category === cat
                    ).length;
                    return (
                      <li key={cat}>
                        <Link
                          href={`/blog?category=${cat}`}
                          className="flex items-center justify-between text-primary hover:text-secondary transition-colors"
                        >
                          <span>{cat}</span>
                          <span className="text-xs bg-cream text-muted px-2 py-1 rounded-full">
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
              <div className="bg-white rounded-2xl border border-border p-6">
                <h3 className="text-lg font-bold text-text mb-3">
                  About Kuno Lapidary
                </h3>
                <p className="text-sm text-muted leading-relaxed">
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
