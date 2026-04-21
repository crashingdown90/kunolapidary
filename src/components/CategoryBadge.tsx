import Link from "next/link";

interface CategoryBadgeProps {
  category: string;
  size?: "sm" | "md";
}

const categoryStyles: Record<string, { bg: string; text: string; border: string }> = {
  lapidary: { bg: "bg-teal-500/10", text: "text-teal-400", border: "border-teal-500/20" },
  gemstones: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20" },
  geology: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20" },
};

const defaultStyle = { bg: "bg-white/5", text: "text-gray-400", border: "border-white/10" };

export default function CategoryBadge({ category, size = "sm" }: CategoryBadgeProps) {
  const style = categoryStyles[category.toLowerCase()] || defaultStyle;

  const sizeClasses = size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm";

  return (
    <Link
      href={`/blog?category=${encodeURIComponent(category)}`}
      className={`inline-block rounded-full font-bold border transition-all duration-300 hover:scale-105 active:scale-95 ${style.bg} ${style.text} ${style.border} ${sizeClasses}`}
    >
      {category}
    </Link>
  );
}
