import type { MDXComponents } from "mdx/types";

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
  h2: (props) => (
    <h2
      className="mt-10 mb-4 text-2xl font-bold text-[#2D1810] border-b border-[#F5E6D3] pb-2"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-[#5C4033]" {...props} />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed text-[#3D2E24]" {...props} />
  ),
  ul: (props) => (
    <ul className="mb-6 ml-6 list-disc space-y-2 text-[#3D2E24]" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-6 ml-6 list-decimal space-y-2 text-[#3D2E24]" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  strong: (props) => <strong className="font-semibold text-[#2D1810]" {...props} />,
  em: (props) => <em className="italic" {...props} />,
  a: (props) => (
    <a
      className="text-[#8B6914] underline decoration-[#D2B48C] underline-offset-2 hover:text-[#5C4033] transition-colors"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-[#D2B48C] pl-4 italic text-[#5C4033]/80"
      {...props}
    />
  ),
  Callout,
};
