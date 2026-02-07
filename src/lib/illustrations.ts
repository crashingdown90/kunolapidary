import LapidaryGuideHero from "@/components/illustrations/LapidaryGuideHero";
import GemstonesHero from "@/components/illustrations/GemstonesHero";
import RockFormationHero from "@/components/illustrations/RockFormationHero";
import AgateTypesHero from "@/components/illustrations/AgateTypesHero";
import RockTumblingHero from "@/components/illustrations/RockTumblingHero";
import BirthstonesHero from "@/components/illustrations/BirthstonesHero";
import CabochonFacetedHero from "@/components/illustrations/CabochonFacetedHero";
import DiamondComparisonHero from "@/components/illustrations/DiamondComparisonHero";
import LapidaryToolsHero from "@/components/illustrations/LapidaryToolsHero";
import CrystalGrowthHero from "@/components/illustrations/CrystalGrowthHero";
import GemIdentificationHero from "@/components/illustrations/GemIdentificationHero";
import RockCollectionHero from "@/components/illustrations/RockCollectionHero";
import PreciousGemsHero from "@/components/illustrations/PreciousGemsHero";
import QuartzTypesHero from "@/components/illustrations/QuartzTypesHero";
import MohsScaleHero from "@/components/illustrations/MohsScaleHero";

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
  "agate-types-identification-collectors-guide": AgateTypesHero,
  "best-rocks-for-tumbling-beginners-guide": RockTumblingHero,
  "birthstones-by-month-complete-guide": BirthstonesHero,
  "cabochon-vs-faceted-gems-differences-explained": CabochonFacetedHero,
  "diamond-vs-moissanite-vs-lab-grown-comparison": DiamondComparisonHero,
  "essential-lapidary-tools-buying-guide": LapidaryToolsHero,
  "how-crystals-form-science-of-crystal-growth": CrystalGrowthHero,
  "how-to-identify-gemstones-at-home": GemIdentificationHero,
  "how-to-start-a-rock-collection": RockCollectionHero,
  "precious-vs-semi-precious-gemstones-explained": PreciousGemsHero,
  "types-of-quartz-complete-guide": QuartzTypesHero,
  "understanding-the-mohs-hardness-scale": MohsScaleHero,
};
