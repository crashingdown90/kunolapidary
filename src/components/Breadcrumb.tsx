import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Build JSON-LD structured data for BreadcrumbList schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `https://kunolapidary.com${item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ol className="flex flex-wrap items-center gap-1 text-sm text-[#5C4033]/60">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1">
              {/* Separator */}
              {index > 0 && (
                <span className="mx-1 select-none text-[#D2B48C]" aria-hidden="true">
                  &#8250;
                </span>
              )}

              {/* Breadcrumb item */}
              {isLast || !item.href ? (
                <span
                  className="font-medium text-[#2D1810]"
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-[#5C4033]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
