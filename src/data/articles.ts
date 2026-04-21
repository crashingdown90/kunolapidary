// Article data is now sourced from MDX files in /content/blog/
// This module re-exports everything from the MDX utility library for backward compatibility

import {
  getAllArticles,
  getArticleBySlug,
  getArticlesByCategory,
  getAllCategories,
  getAllSlugs,
} from "@/lib/mdx";

export type { Article, ArticleMeta } from "@/lib/mdx";
export {
  getAllArticles,
  getArticleBySlug,
  getArticlesByCategory,
  getAllCategories,
  getAllSlugs,
};

// Note: Avoid using this top-level constant in Server Components!
export const articles = getAllArticles();
