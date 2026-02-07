// Article data is now sourced from MDX files in /content/blog/
// This module re-exports everything from the MDX utility library for backward compatibility

export type { Article, ArticleMeta } from "@/lib/mdx";
export {
  getArticleBySlug,
  getArticlesByCategory,
  getAllCategories,
  getAllSlugs,
} from "@/lib/mdx";
import { getAllArticles } from "@/lib/mdx";

// Re-export articles array for backward compatibility
export const articles = getAllArticles();
