import LapidaryGuideHero from "@/components/illustrations/LapidaryGuideHero";
import GemstonesHero from "@/components/illustrations/GemstonesHero";
import RockFormationHero from "@/components/illustrations/RockFormationHero";

/**
 * Mapping of article slugs to their hero illustration components.
 * When adding a new blog post with a custom illustration:
 * 1. Create the illustration component in src/components/illustrations/
 * 2. Add the mapping here — both ArticleCard and BlogPostPage will pick it up automatically.
 */
export const articleIllustrations: Record<string, React.ComponentType<{ className?: string }>> = {
  "beginners-guide-to-lapidary": LapidaryGuideHero,
  "most-valuable-gemstones-in-the-world": GemstonesHero,
  "understanding-rock-formation-geological-journey": RockFormationHero,
};
