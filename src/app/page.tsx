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
      description: "Master the art of cutting, shaping, and polishing stones into beautiful gems.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12l5.25 5 2.625-7.5L12 2l2.125 7.5L16.75 17l5.25-5" />
          <path d="M12 2v20" />
          <path d="M7.25 17l4.75 5 4.75-5" />
        </svg>
      ),
      color: "bg-teal-500/10 border-teal-500/20",
      textColor: "text-teal-400",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.2)]",
    },
    {
      name: "Gemstones",
      description: "Discover the world's most precious and semi-precious gemstones and their properties.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      color: "bg-purple-500/10 border-purple-500/20",
      textColor: "text-purple-400",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    },
    {
      name: "Geology",
      description: "Explore Earth's geological wonders, from rock formations to mineral deposits.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 19h20L12 2z" />
          <path d="M12 2v17" />
          <path d="M9 14l3 3 3-3" />
        </svg>
      ),
      color: "bg-blue-500/10 border-blue-500/20",
      textColor: "text-blue-400",
      glowColor: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
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
      <section className="relative overflow-hidden bg-bg">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-sm font-medium rounded-full mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                Welcome to Kuno Lapidary
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-white leading-tight mb-6 tracking-tight">
                Unearthing Nature&apos;s <br />
                <span className="text-gradient">Brilliance</span>, One Stone
                at a Time
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light">
                Your trusted guide to the fascinating world of lapidary arts,
                gemstones, and geology. Expert articles, comprehensive guides,
                and in-depth insights for enthusiasts at every level.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-8 py-3.5 bg-teal-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 hover:bg-teal-400 hover:scale-105 active:scale-95"
                >
                  Explore Articles
                  <svg
                    className="ml-2 w-5 h-5"
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
                  className="glass-card inline-flex items-center px-8 py-3.5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-end perspective-1000">
              <HeroIllustration className="w-full h-auto max-w-lg transform hover:scale-105 transition-transform duration-700 ease-out drop-shadow-[0_0_40px_rgba(139,92,246,0.2)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 md:py-32 relative border-t border-white/5 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
              Explore Our Topics
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">
              Dive deep into the earth sciences with our carefully curated
              content across three core disciplines.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/blog?category=${cat.name}`}
                className={`group glass-card block p-10 rounded-3xl border border-border hover:border-transparent transition-all duration-500 transform hover:-translate-y-2 ${cat.glowColor}`}
              >
                <div className={`inline-flex items-center justify-center p-4 rounded-2xl ${cat.color} ${cat.textColor} mb-6 transition-transform duration-500 group-hover:scale-110`}>
                  {cat.icon}
                </div>
                <h3 className={`text-2xl font-bold ${cat.textColor} mb-4`}>
                  {cat.name}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="glass rounded-2xl overflow-hidden border border-border">
          <AdPlaceholder format="horizontal" />
        </div>
      </div>

      {/* Latest Articles Section */}
      <section className="py-20 md:py-28 bg-bg relative">
        {/* Glow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[30%] h-[50%] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Latest Articles
              </h2>
              <p className="text-gray-400 text-lg font-light">
                Fresh insights from the world beneath our feet.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full border border-primary/30 text-primary font-medium hover:bg-primary hover:text-bg transition-colors shadow-[0_0_15px_rgba(20,184,166,0.1)] hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]"
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
              <div key={article.slug} className="transform transition-all duration-300 hover:-translate-y-2">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-3 bg-primary text-bg font-medium rounded-lg hover:bg-primary-hover transition-colors shadow-[0_0_20px_rgba(20,184,166,0.2)]"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Why Read Kuno Lapidary Section */}
      <section className="py-24 md:py-32 relative border-t border-white/5 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
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
                className="glass-card text-center p-8 rounded-3xl border border-white/5 hover:border-primary/30 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500/10 text-teal-400 rounded-2xl mb-6 shadow-[0_0_15px_rgba(20,184,166,0.15)] group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="glass rounded-2xl overflow-hidden border border-border">
          <AdPlaceholder format="horizontal" />
        </div>
      </div>
    </>
  );
}
