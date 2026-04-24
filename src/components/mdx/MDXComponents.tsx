import type { MDXComponents } from "mdx/types";
import { Children } from "react";
import Image from "next/image";
import Link from "next/link";

function getTextContent(children: React.ReactNode): string {
  return Children.toArray(children)
    .map((child) => {
      if (typeof child === "string") return child;
      if (typeof child === "number") return String(child);
      if (typeof child === "object" && child !== null && "props" in child) {
        return getTextContent((child as React.ReactElement<{ children?: React.ReactNode }>).props.children);
      }
      return "";
    })
    .join("");
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function Callout({ type = "info", children }: { type?: "info" | "warning" | "tip"; children: React.ReactNode }) {
  const styles = {
    info: "glass border-blue-500/30 text-blue-200 shadow-[0_0_15px_rgba(59,130,246,0.1)]",
    warning: "glass border-amber-500/30 text-amber-200 shadow-[0_0_15px_rgba(245,158,11,0.1)]",
    tip: "glass border-teal-500/30 text-teal-200 shadow-[0_0_15px_rgba(20,184,166,0.1)]",
  };

  const icons = {
    info: "💡",
    warning: "⚠️",
    tip: "✅",
  };

  return (
    <div className={`my-6 rounded-xl border-l-4 p-5 ${styles[type]}`}>
      <span className="mr-3 text-lg">{icons[type]}</span>
      <span className="leading-relaxed opacity-90">{children}</span>
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  h2: (props) => {
    const id = props.id || slugify(getTextContent(props.children));
    return (
      <h2
        id={id}
        className="mt-12 mb-5 text-3xl font-bold bg-gradient-to-r from-teal-300 to-purple-400 bg-clip-text text-transparent border-b border-white/10 pb-3 scroll-mt-24"
        {...props}
      />
    );
  },
  h3: (props) => {
    const id = props.id || slugify(getTextContent(props.children));
    return (
      <h3 id={id} className="mt-8 mb-3 text-2xl font-semibold text-teal-400 scroll-mt-24" {...props} />
    );
  },
  p: (props) => (
    <p className="mb-5 leading-relaxed text-gray-300 text-lg" {...props} />
  ),
  ul: (props) => (
    <ul className="mb-6 ml-6 list-disc space-y-3 text-gray-300 text-lg marker:text-teal-500" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-6 ml-6 list-decimal space-y-3 text-gray-300 text-lg marker:text-teal-500 font-medium" {...props} />
  ),
  li: (props) => <li className="leading-relaxed pl-2" {...props} />,
  strong: (props) => <strong className="font-bold text-teal-100" {...props} />,
  em: (props) => <em className="italic text-purple-200" {...props} />,
  a: ({ href, children, ...props }) => {
    const isInternal = href?.startsWith("/") || href?.startsWith("#");
    const className = "text-teal-400 underline decoration-teal-400/30 underline-offset-4 hover:text-teal-300 transition-colors";
    
    if (isInternal) {
      return (
        <Link href={href!} className={className} {...props}>
          {children}
        </Link>
      );
    }
    
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  },
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-4 border-purple-500/50 pl-6 py-2 italic text-purple-200 bg-white/5 rounded-r-xl"
      {...props}
    />
  ),
  img: ({ src, alt, ...props }) => {
    if (!src) return null;
    return (
      <span className="relative block my-8 overflow-hidden rounded-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] aspect-video group">
        <Image 
          src={src} 
          alt={alt || "Article graphic"} 
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover group-hover:scale-105 transition-transform duration-700" 
          {...props} 
        />
      </span>
    );
  },
  Callout,
};
