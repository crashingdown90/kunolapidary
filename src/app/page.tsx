import Link from "next/link";
import { getAllArticles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import HomeHero from "@/components/HomeHero";
import CoreDisciplines from "@/components/CoreDisciplines";
import Newsletter from "@/components/Newsletter";
import { generateWebsiteJsonLd, generateOrganizationJsonLd } from "@/lib/seo";

export default function Home() {
  const articles = getAllArticles();
  const featuredArticles = articles.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteJsonLd()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationJsonLd()),
        }}
      />

      {/* Hero Section */}
      <HomeHero />

      {/* Disciplines Section */}
      <CoreDisciplines />

      {/* Latest Articles Section */}
      <section className="py-32 bg-bg relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif italic text-text mb-6">
                Latest Field Notes
              </h2>
              <p className="text-text-soft text-xl font-light italic">
                Recent discoveries and scholarly updates from our team.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center text-teal-400 font-bold uppercase tracking-[0.2em] text-xs hover:gap-4 transition-all"
            >
              View Full Archive
              <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* Curated Newsletter */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>

      {/* Technical SEO JSON-LD is already handled in Layout */}
    </>
  );
}
