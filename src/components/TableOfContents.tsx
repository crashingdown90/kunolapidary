"use client";

import { useEffect, useState } from "react";

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
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66% 0px" } // trigger when heading is somewhat near top
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return (
      <div className="glass-card rounded-2xl border border-white/10 p-8 shadow-xl">
        <h3 className="text-xs font-black text-gray-500 mb-4 uppercase tracking-[0.25em]">In This Article</h3>
        <p className="text-sm text-gray-400 leading-relaxed font-light">
          Dive deep into the sections below for a comprehensive geological analysis.
        </p>
      </div>
    );
  }

  return (
    <nav className="glass-card rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden" aria-label="Table of contents">
      <div className="absolute top-0 right-0 w-16 h-16 bg-teal-500/5 rounded-full blur-xl -mr-8 -mt-8" />

      <h3 className="text-xs font-black text-gray-500 mb-6 uppercase tracking-[0.25em] flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
        In This Article
      </h3>
      <ul className="space-y-4">
        {headings.map((heading) => (
          <li key={heading.slug} className={heading.level === 3 ? "ml-4" : ""}>
            <a
              href={`#${heading.slug}`}
              className={`text-sm transition-all duration-300 leading-snug block py-0.5 border-l-2 ${
                activeId === heading.slug
                  ? "text-teal-400 border-teal-500 pl-3 font-bold"
                  : "text-gray-300 border-transparent hover:text-teal-400 hover:border-teal-500/30 hover:pl-3"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
