import Link from "next/link";
import { getAllArticles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import HeroIllustration from "@/components/illustrations/HeroIllustration";
import AdPlaceholder from "@/components/AdPlaceholder";
import Newsletter from "@/components/Newsletter";
import { generateWebsiteJsonLd, generateOrganizationJsonLd } from "@/lib/seo";

export default function Home() {
  const articles = getAllArticles();
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
      glowColor: "group-hover:shadow-[0_0_50px_rgba(20,184,166,0.15)]",
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
      glowColor: "group-hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]",
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
      glowColor: "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]",
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
      <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">
        {/* Ambient Glows */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/10 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-10 backdrop-blur-xl">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-3 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white">Advanced Geological Insights</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-serif italic text-white leading-[1.05] mb-8 tracking-tighter">
                Unearthing <br />
                <span className="text-teal-400">Nature&apos;s Brilliance</span>
              </h1>

              <p className="text-xl text-gray-400 mb-12 leading-relaxed font-light max-w-lg">
                Your premier source for the fascinating intersection of lapidary arts, mineralogy, and earth sciences. Expert guides for the modern collector.
              </p>

              <div className="flex flex-wrap gap-6">
                <Link
                  href="/blog"
                  className="px-10 py-5 bg-teal-500 text-[#020617] font-bold rounded-2xl shadow-[0_20px_40px_rgba(20,184,166,0.3)] transition-all duration-500 hover:scale-105 active:scale-95"
                >
                  Explore Archive
                </Link>
                <Link
                  href="/about"
                  className="px-10 py-5 glass border border-white/10 text-white font-bold rounded-2xl hover:bg-white/5 transition-all duration-500"
                >
                  Our Mission
                </Link>
              </div>
            </div>

            <div className="hidden lg:flex justify-end relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse" />
              <HeroIllustration className="w-full h-auto max-w-xl relative z-10 drop-shadow-[0_0_50px_rgba(20,184,166,0.2)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section className="py-32 relative bg-[#020617] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-6">
                Core Disciplines
              </h2>
              <p className="text-gray-400 text-xl font-light">
                Our content is meticulously organized into three pillars of earth science and artistic mastery.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/blog?category=${cat.name}`}
                className={`group glass-card block p-12 rounded-[40px] border border-white/5 transition-all duration-700 ${cat.glowColor}`}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${cat.color} ${cat.textColor} mb-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6`}>
                  {cat.icon}
                </div>
                <h3 className={`text-3xl font-serif italic ${cat.textColor} mb-6`}>
                  {cat.name}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light text-base">
                  {cat.description}
                </p>
                <div className="mt-10 h-[1px] w-full bg-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-current to-transparent" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-32 bg-bg relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif italic text-white mb-6">
                Latest Field Notes
              </h2>
              <p className="text-gray-500 text-xl font-light italic">
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
