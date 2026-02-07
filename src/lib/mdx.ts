import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content/blog");

export interface ArticleMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  coverImage: string;
  author: string;
  authorBio: string;
  publishDate: string;
  lastModified: string;
  readTime: string;
  tags: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(contentDirectory).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    return getArticleBySlug(slug)!;
  });

  return articles
    .filter(Boolean)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getArticleBySlug(slug: string): Article | undefined {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    excerpt: data.excerpt,
    category: data.category,
    coverImage: data.coverImage || "",
    author: data.author,
    authorBio: data.authorBio,
    publishDate: data.publishDate,
    lastModified: data.lastModified || data.publishDate,
    readTime: data.readTime,
    tags: data.tags || [],
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    keywords: data.keywords || [],
    content,
  };
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((article) => article.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(getAllArticles().map((article) => article.category))];
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDirectory)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
