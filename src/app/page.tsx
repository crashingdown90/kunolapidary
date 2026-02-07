import Link from "next/link";
import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import HeroIllustration from "@/components/illustrations/HeroIllustration";
import AdPlaceholder from "@/components/AdPlaceholder";
import Newsletter from "@/components/Newsletter";
import { generateWebsiteJsonLd, generateOrganizationJsonLd } from "@/lib/seo";

export default function Home() {
  const featuredArticles = articles.slice(0, 3);
  const categories = [
    {
      name: "Lapidary",
      description:
        "Master the art of cutting, shaping, and polishing stones into beautiful gems.",
      icon: "💎",
      color: "bg-accent/10 border-accent/30",
      textColor: "text-accent",
    },
    {
      name: "Gemstones",
      description:
        "Discover the world's most precious and semi-precious gemstones and their properties.",
      icon: "🔮",
      color: "bg-secondary/10 border-secondary/30",
      textColor: "text-secondary",
    },
    {
      name: "Geology",
      description:
        "Explore Earth's geological wonders, from rock formations to mineral deposits.",
      icon: "🌍",
      color: "bg-primary/10 border-primary/30",
      textColor: "text-primary",
    },
  ];

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
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-bg to-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6">
                Welcome to Kuno Lapidary
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
                Unearthing Nature&apos;s{" "}
                <span className="text-secondary">Brilliance</span>, One Stone
                at a Time
              </h1>
              <p className="text-lg text-muted mb-8 leading-relaxed">
                Your trusted guide to the fascinating world of lapidary arts,
                gemstones, and geology. Expert articles, comprehensive guides,
                and in-depth insights for enthusiasts at every level.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-8 py-3.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors duration-300"
                >
                  Explore Articles
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-3.5 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <HeroIllustration className="w-full h-auto" />
            </div>
          </div>
        </div>
        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
              className="fill-bg"
            />
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Explore Our Topics
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Dive deep into the earth sciences with our carefully curated
              content across three core disciplines.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/blog?category=${cat.name}`}
                className={`card-hover block p-8 rounded-2xl border-2 ${cat.color} hover:shadow-lg`}
              >
                <span className="text-4xl mb-4 block">{cat.icon}</span>
                <h3 className={`text-xl font-bold ${cat.textColor} mb-3`}>
                  {cat.name}
                </h3>
                <p className="text-muted leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdPlaceholder format="horizontal" />
      </div>

      {/* Latest Articles Section */}
      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-14">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
                Latest Articles
              </h2>
              <p className="text-muted text-lg">
                Fresh insights from the world beneath our feet.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
            >
              View All Articles
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Why Read Kuno Lapidary Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-cream to-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Why Read Kuno Lapidary?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Content",
                desc: "Well-researched articles written with accuracy and passion for earth sciences.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
              {
                title: "All Skill Levels",
                desc: "From curious beginners to seasoned professionals, there is something for everyone.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: "Free Resources",
                desc: "All our guides, articles, and educational content are completely free to access.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                ),
              },
              {
                title: "Regular Updates",
                desc: "Fresh content published regularly to keep you informed about the latest discoveries.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-white/80 border border-border"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-cream text-primary rounded-xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-text mb-2">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Ad Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <AdPlaceholder format="horizontal" />
      </div>
    </>
  );
}
