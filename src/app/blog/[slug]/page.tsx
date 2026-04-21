import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllArticles, getArticleBySlug, getAllSlugs } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import Breadcrumb from "@/components/Breadcrumb";
import CategoryBadge from "@/components/CategoryBadge";
import AdPlaceholder from "@/components/AdPlaceholder";
import { generateArticleJsonLd, generateFAQJsonLd } from "@/lib/seo";
import { articleIllustrations } from "@/lib/illustrations";
import TableOfContents from "@/components/TableOfContents";
import MDXErrorBoundary from "@/components/MDXErrorBoundary";
import FAQSection from "@/components/FAQSection";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
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
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://kunolapidary.com/blog/${article.slug}`,
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author],
      tags: article.tags,
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

  const HeroComponent = articleIllustrations[article.slug];
  const allArticles = getAllArticles();
  const otherArticles = allArticles.filter((a) => a.slug !== article.slug);
  const sameCategoryArticles = otherArticles.filter((a) => a.category === article.category);
  const relatedArticles = sameCategoryArticles.length >= 2
    ? sameCategoryArticles.slice(0, 2)
    : [...sameCategoryArticles, ...otherArticles.filter((a) => a.category !== article.category)].slice(0, 2);

  const jsonLd = generateArticleJsonLd(article);
  const faqJsonLd = article.faq.length > 0 ? generateFAQJsonLd(article.faq) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Breadcrumb */}
      <div className="bg-[#0f172a] border-b border-white/5">
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
            <header className="mb-10 text-center">
              <CategoryBadge category={article.category} size="md" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mt-6 mb-8 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                    KL
                  </div>
                  <span className="font-medium text-text">
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
              <div className="rounded-3xl overflow-hidden mb-12 shadow-[0_0_40px_rgba(20,184,166,0.1)] border border-white/10 glass">
                <HeroComponent className="w-full h-auto max-h-[500px] mx-auto scale-105" />
              </div>
            )}

            {/* Ad before article */}
            <AdPlaceholder format="article" className="mb-8" />

            {/* Article Body */}
            <MDXErrorBoundary>
              <div className="article-content max-w-none">
                <MDXRemote source={article.content} components={mdxComponents} />
              </div>
            </MDXErrorBoundary>

            {/* FAQ Section */}
            <FAQSection items={article.faq} />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-widest">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/5 border border-white/10 text-teal-300 text-sm rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-12 p-8 glass-card rounded-2xl border border-white/10 shadow-lg group">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-purple-500 p-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center text-white text-2xl font-bold">
                    KL
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-xl mb-2">
                    {article.author}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {article.authorBio}
                  </p>
                </div>
              </div>
            </div>

            {/* Ad after article */}
            <AdPlaceholder format="horizontal" className="mt-8" />

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section className="mt-16">
                <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">
                  You May Also Enjoy
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group block p-6 glass-card rounded-2xl border border-white/10 hover:border-teal-500/50 transition-all duration-300"
                    >
                      <CategoryBadge category={related.category} size="sm" />
                      <h3 className="text-xl font-bold text-white mt-4 mb-3 leading-snug group-hover:text-teal-400 transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-gray-400 line-clamp-2">
                        {related.excerpt}
                      </p>
                      <span className="inline-block mt-4 text-sm text-teal-400 font-semibold uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                        Read More &rarr;
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
              {/* Table of Contents */}
              <TableOfContents content={article.content} />

              {/* Ad Placeholder */}
              <AdPlaceholder format="rectangle" />

              {/* Categories Widget */}
              <div className="glass-card rounded-2xl border border-white/10 p-6 shadow-xl">
                <h3 className="text-lg font-bold text-white mb-5 uppercase tracking-wider text-sm border-b border-white/10 pb-3">
                  Explore Topics
                </h3>
                <div className="flex flex-col gap-3">
                  {["Lapidary", "Gemstones", "Geology", "Collecting"].map((cat) => (
                    <Link
                      key={cat}
                      href={`/blog?category=${cat}`}
                      className="text-gray-300 hover:text-teal-400 transition-colors text-base flex items-center group"
                    >
                      <span className="mr-2 text-teal-500 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all">&raquo;</span>
                      <span className="group-hover:ml-1 transition-all">{cat}</span>
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
