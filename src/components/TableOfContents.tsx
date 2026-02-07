interface TocItem {
  text: string;
  slug: string;
  level: number;
}

function extractHeadings(content: string): TocItem[] {
  const headingRegex = /^#{2,3}\s+(.+)$/gm;
  const headings: TocItem[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[0].indexOf(" ");
    const text = match[1].trim();
    const slug = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");
    headings.push({ text, slug, level });
  }

  return headings;
}

export default function TableOfContents({ content }: { content: string }) {
  const headings = extractHeadings(content);

  if (headings.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-border p-6">
        <h3 className="text-lg font-bold text-text mb-4">In This Article</h3>
        <p className="text-sm text-muted">
          Scroll through the article for comprehensive coverage of this topic.
        </p>
      </div>
    );
  }

  return (
    <nav className="bg-white rounded-2xl border border-border p-6" aria-label="Table of contents">
      <h3 className="text-lg font-bold text-text mb-4">In This Article</h3>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li key={heading.slug} className={heading.level === 3 ? "ml-4" : ""}>
            <a
              href={`#${heading.slug}`}
              className="text-sm text-primary hover:text-secondary transition-colors leading-snug block py-0.5"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
