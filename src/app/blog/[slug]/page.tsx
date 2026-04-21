import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import ReadingProgress from "@/components/ReadingProgress";
import ShareToolkit from "@/components/ShareToolkit";
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

      <ReadingProgress />

      {/* Breadcrumb Section */}
      <div className="bg-[#0f172a] border-b border-white/5 relative z-10">
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

      <article className="min-h-screen bg-bg relative">
        {/* Decorative Background Accent */}
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
          <div className="grid lg:grid-cols-4 gap-12">

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Article Header */}
              <header className="mb-12 text-center md:text-left">
                <div className="flex justify-center md:justify-start">
                  <CategoryBadge category={article.category} size="md" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mt-6 mb-8 leading-tight">
                  {article.title}
                </h1>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                      KL
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-200 leading-none">{article.author}</div>
                      <div className="text-[10px] uppercase tracking-widest text-teal-500 font-bold mt-1">Geology Expert</div>
                    </div>
                  </div>
                  <span className="hidden sm:inline opacity-30">|</span>
                  <time dateTime={article.publishDate} className="font-medium text-gray-300">
                    {new Date(article.publishDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="hidden sm:inline opacity-30">|</span>
                  <span className="font-medium text-gray-300 underline decoration-primary/30 underline-offset-4">{article.readTime}</span>
                </div>

                <div className="mt-8 flex justify-center md:justify-start border-t border-white/5 pt-6">
                  <ShareToolkit title={article.title} slug={slug} />
                </div>
              </header>

              {/* Hero Image Section */}
              {(article.heroImage || HeroComponent) && (
                <div className="rounded-3xl overflow-hidden mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 glass relative group">
                  {article.heroImage ? (
                    <Image
                      src={article.heroImage}
                      alt={article.title}
                      width={1200}
                      height={600}
                      className="w-full h-auto max-h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  ) : HeroComponent && (
                    <div className="p-8 md:p-12 bg-slate-900/50">
                      <HeroComponent className="w-full h-auto max-h-[500px] mx-auto scale-105" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              )}

              {/* Dynamic Content Rendering */}
              <div className="article-body">
                <MDXErrorBoundary>
                  <div className="article-content prose prose-invert prose-teal max-w-none">
                    <MDXRemote source={article.content} components={mdxComponents} />
                  </div>
                </MDXErrorBoundary>
              </div>

              {/* Post-Article Utilities */}
              <div className="mt-16 space-y-12">
                {/* FAQ Section */}
                <FAQSection items={article.faq} />

                {/* Sub-Article Ad */}
                <AdPlaceholder format="article" className="rounded-2xl overflow-hidden" />

                {/* Tags */}
                <div className="pt-8 border-t border-white/5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold block mb-4">Discovery Tags</span>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-white/5 border border-white/10 text-teal-400 text-xs font-bold rounded-full hover:bg-teal-500/10 hover:border-teal-500/50 transition-all duration-300 cursor-pointer uppercase tracking-wider"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Author Credentials Card */}
                <div className="p-8 glass-card rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10" />
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 relative z-10">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-400 to-purple-500 p-[1px] flex-shrink-0 group-hover:rotate-3 transition-transform duration-500">
                      <div className="w-full h-full rounded-2xl bg-[#020617] flex items-center justify-center text-white text-3xl font-black">
                        KL
                      </div>
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="font-bold text-white text-2xl mb-3">
                        About {article.author}
                      </h3>
                      <p className="text-gray-400 text-lg leading-relaxed font-light italic">
                        &quot;{article.authorBio}&quot;
                      </p>
                      <div className="mt-6 flex justify-center sm:justify-start gap-4">
                        <ShareToolkit title={`Read ${article.title} by ${article.author}`} slug={slug} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Content */}
              {relatedArticles.length > 0 && (
                <section className="mt-20 pt-16 border-t border-white/5">
                  <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-primary rounded-full" />
                    Recommended Reading
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {relatedArticles.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="group flex flex-col p-8 glass-card rounded-3xl border border-white/5 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(20,184,166,0.1)]"
                      >
                        <CategoryBadge category={related.category} size="sm" />
                        <h3 className="text-2xl font-bold text-white mt-6 mb-4 leading-tight group-hover:text-primary transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-gray-400 text-base line-clamp-2 font-light">
                          {related.excerpt}
                        </p>
                        <div className="mt-auto pt-6 flex items-center text-primary font-bold text-sm group-hover:gap-3 transition-all">
                          READ ARTICLE <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-24 space-y-10">

                {/* Table of Contents Widget */}
                <TableOfContents content={article.content} />

                {/* Sidebar Ad Unit */}
                <AdPlaceholder format="rectangle" className="rounded-2xl" />

                {/* Quick Navigation Card */}
                <div className="glass-card rounded-3xl border border-white/10 p-8 shadow-2xl">
                  <h3 className="text-xs font-black text-gray-500 mb-6 uppercase tracking-[0.25em] flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Deep Dive
                  </h3>
                  <div className="space-y-4">
                    {["Lapidary", "Gemstones", "Geology", "Collecting"].map((cat) => (
                      <Link
                        key={cat}
                        href={`/blog?category=${cat}`}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 text-gray-400 hover:text-primary transition-all group font-medium"
                      >
                        <span>{cat}</span>
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">&rarr;</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Support Widget */}
                <div className="p-1 glass-card rounded-3xl border border-white/10 shadow-xl bg-gradient-to-br from-white/5 to-transparent">
                  <div className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-bold mb-2">Need Expert Advice?</h4>
                    <p className="text-xs text-gray-400 mb-4">Send us your gemstone questions.</p>
                    <Link href="/contact" className="inline-block w-full py-2 bg-transparent border border-primary/30 text-primary rounded-xl hover:bg-primary hover:text-white transition-all text-xs font-bold">CONTACT US</Link>
                  </div>
                </div>

              </div>
            </aside>

          </div>
        </div>
      </article>
    </>
  );
}
