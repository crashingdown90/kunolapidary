import type { MDXComponents } from "mdx/types";
import { Children } from "react";

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
    info: "bg-blue-50 border-blue-300 text-blue-900",
    warning: "bg-amber-50 border-amber-300 text-amber-900",
    tip: "bg-emerald-50 border-emerald-300 text-emerald-900",
  };

  const icons = {
    info: "💡",
    warning: "⚠️",
    tip: "✅",
  };

  return (
    <div className={`my-6 rounded-lg border-l-4 p-4 ${styles[type]}`}>
      <span className="mr-2">{icons[type]}</span>
      {children}
    </div>
  );
}

export const mdxComponents: MDXComponents = {
  h2: (props) => {
    const id = props.id || slugify(getTextContent(props.children));
    return (
      <h2
        id={id}
        className="mt-10 mb-4 text-2xl font-bold text-text border-b border-cream pb-2 scroll-mt-24"
        {...props}
      />
    );
  },
  h3: (props) => {
    const id = props.id || slugify(getTextContent(props.children));
    return (
      <h3 id={id} className="mt-8 mb-3 text-xl font-semibold text-primary scroll-mt-24" {...props} />
    );
  },
  p: (props) => (
    <p className="mb-4 leading-relaxed text-text-soft" {...props} />
  ),
  ul: (props) => (
    <ul className="mb-6 ml-6 list-disc space-y-2 text-text-soft" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-6 ml-6 list-decimal space-y-2 text-text-soft" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  strong: (props) => <strong className="font-semibold text-text" {...props} />,
  em: (props) => <em className="italic" {...props} />,
  a: (props) => (
    <a
      className="text-secondary underline decoration-light underline-offset-2 hover:text-primary transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-light pl-4 italic text-primary/80"
      {...props}
    />
  ),
  Callout,
};
