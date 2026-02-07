import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { articles, getArticleBySlug } from "@/data/articles";
import Breadcrumb from "@/components/Breadcrumb";
import CategoryBadge from "@/components/CategoryBadge";
import AdPlaceholder from "@/components/AdPlaceholder";
import { generateArticleJsonLd } from "@/lib/seo";
import LapidaryGuideHero from "@/components/illustrations/LapidaryGuideHero";
import GemstonesHero from "@/components/illustrations/GemstonesHero";
import RockFormationHero from "@/components/illustrations/RockFormationHero";

const heroComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  "beginners-guide-to-lapidary": LapidaryGuideHero,
  "most-valuable-gemstones-in-the-world": GemstonesHero,
  "understanding-rock-formation-geological-journey": RockFormationHero,
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://kunolapidary.com/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author],
      tags: article.tags,
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const HeroComponent = heroComponents[article.slug];
  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  const jsonLd = generateArticleJsonLd(article);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-[#F5E6D3]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: article.title },
            ]}
          />
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Main Article Content */}
          <div className="lg:col-span-3">
            {/* Article Header */}
            <header className="mb-8">
              <CategoryBadge category={article.category} size="md" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D1810] mt-4 mb-6 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#8B7D6B]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#5C4033] flex items-center justify-center text-white text-xs font-bold">
                    KL
                  </div>
                  <span className="font-medium text-[#2D1810]">
                    {article.author}
                  </span>
                </div>
                <span className="hidden sm:inline">|</span>
                <time dateTime={article.publishDate}>
                  {new Date(article.publishDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="hidden sm:inline">|</span>
                <span>{article.readTime}</span>
              </div>
            </header>

            {/* Hero Image */}
            {HeroComponent && (
              <div className="rounded-2xl overflow-hidden mb-10 bg-gradient-to-br from-[#F5E6D3] to-[#E8DDD0] p-8">
                <HeroComponent className="w-full h-auto max-h-96 mx-auto" />
              </div>
            )}

            {/* Ad before article */}
            <AdPlaceholder format="article" className="mb-8" />

            {/* Article Body */}
            <div
              className="article-content max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="mt-10 pt-8 border-t-2 border-[#F5E6D3]">
              <h3 className="text-sm font-semibold text-[#8B7D6B] mb-3 uppercase tracking-wider">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-[#F5E6D3] text-[#5C4033] text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-10 p-6 bg-white rounded-2xl border border-[#E8DDD0]">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-[#5C4033] flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                  KL
                </div>
                <div>
                  <h3 className="font-bold text-[#2D1810] text-lg">
                    {article.author}
                  </h3>
                  <p className="text-[#8B7D6B] text-sm mt-1 leading-relaxed">
                    {article.authorBio}
                  </p>
                </div>
              </div>
            </div>

            {/* Ad after article */}
            <AdPlaceholder format="horizontal" className="mt-8" />

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section className="mt-14">
                <h2 className="text-2xl font-bold text-[#2D1810] mb-8">
                  You May Also Enjoy
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="card-hover block p-6 bg-white rounded-2xl border border-[#E8DDD0]"
                    >
                      <CategoryBadge category={related.category} size="sm" />
                      <h3 className="font-bold text-[#2D1810] mt-3 mb-2 leading-snug">
                        {related.title}
                      </h3>
                      <p className="text-sm text-[#8B7D6B] line-clamp-2">
                        {related.excerpt}
                      </p>
                      <span className="inline-block mt-3 text-sm text-[#5C4033] font-medium">
                        Read More →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents placeholder */}
              <div className="bg-white rounded-2xl border border-[#E8DDD0] p-6">
                <h3 className="text-lg font-bold text-[#2D1810] mb-4">
                  In This Article
                </h3>
                <p className="text-sm text-[#8B7D6B]">
                  Scroll through the article for comprehensive coverage of this
                  topic.
                </p>
              </div>

              {/* Ad Placeholder */}
              <AdPlaceholder format="rectangle" />

              {/* Categories Widget */}
              <div className="bg-white rounded-2xl border border-[#E8DDD0] p-6">
                <h3 className="text-lg font-bold text-[#2D1810] mb-4">
                  Explore Topics
                </h3>
                <div className="flex flex-col gap-2">
                  {["Lapidary", "Gemstones", "Geology"].map((cat) => (
                    <Link
                      key={cat}
                      href={`/blog?category=${cat}`}
                      className="text-[#5C4033] hover:text-[#8B6914] transition-colors text-sm"
                    >
                      → {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
