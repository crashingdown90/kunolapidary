import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles, getAllCategories } from "@/data/articles";
import Breadcrumb from "@/components/Breadcrumb";
import BlogInteractive from "@/components/BlogInteractive";

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

export default async function BlogPage() {
  const articles = getAllArticles();
  const categories = getAllCategories();

  // We can pick a hero article (the most recent one)
  const heroArticle = articles[0];
  // The rest of the articles go to the interactive component
  const remainingArticles = articles.slice(1);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-light/30 border-b border-border">
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
      <section className="bg-light/30 border-b border-border py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif italic text-white mb-8 tracking-tighter">
            Exploring <span className="text-teal-400">The Earth</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Discover expert guides and in-depth articles about lapidary arts, gemstones, and geology.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Hero Article */}
        {heroArticle && (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent lg:hidden" />
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

        <BlogInteractive articles={remainingArticles} categories={categories} />
      </div>
    </>
  );
}
