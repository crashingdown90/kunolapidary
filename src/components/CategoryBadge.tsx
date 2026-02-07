import Link from "next/link";

interface CategoryBadgeProps {
  category: string;
  size?: "sm" | "md";
}

const categoryStyles: Record<string, { bg: string; text: string }> = {
  lapidary: { bg: "bg-[#6B8E23]", text: "text-white" },
  gemstones: { bg: "bg-[#8B6914]", text: "text-white" },
  geology: { bg: "bg-[#5C4033]", text: "text-[#F5E6D3]" },
};

const defaultStyle = { bg: "bg-[#D2B48C]", text: "text-[#2D1810]" };

export default function CategoryBadge({ category, size = "sm" }: CategoryBadgeProps) {
  const style = categoryStyles[category.toLowerCase()] || defaultStyle;

  const sizeClasses = size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm";

  return (
    <Link
      href={`/blog?category=${encodeURIComponent(category)}`}
      className={`inline-block rounded-full font-medium transition-opacity duration-200 hover:opacity-85 ${style.bg} ${style.text} ${sizeClasses}`}
    >
      {category}
    </Link>
  );
}
