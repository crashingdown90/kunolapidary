/**
 * AdPlaceholder Component
 *
 * This component renders a placeholder area for advertisements.
 * When ready to integrate Google AdSense, replace the placeholder <div>
 * inside this component with the actual AdSense ad unit code:
 *
 * Example AdSense replacement:
 *   <ins className="adsbygoogle"
 *     style={{ display: "block" }}
 *     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
 *     data-ad-slot="XXXXXXXXXX"
 *     data-ad-format="auto"
 *     data-full-width-responsive="true"
 *   />
 *
 * You will also need to add the AdSense script tag to your layout:
 *   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous" />
 *
 * And call (window.adsbygoogle = window.adsbygoogle || []).push({}) after the component mounts.
 */

interface AdPlaceholderProps {
  format: "horizontal" | "vertical" | "rectangle" | "article";
  className?: string;
}

const formatStyles: Record<AdPlaceholderProps["format"], { width: string; height: string }> = {
  horizontal: { width: "w-full", height: "h-[90px]" },
  vertical: { width: "w-[160px]", height: "h-[600px]" },
  rectangle: { width: "w-[300px]", height: "h-[250px]" },
  article: { width: "w-full", height: "h-[250px]" },
};

export default function AdPlaceholder({ format, className = "" }: AdPlaceholderProps) {
  const styles = formatStyles[format];

  return (
    <aside
      className={`flex items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/5 ${styles.width} ${styles.height} ${className}`}
      aria-label="Advertisement"
      role="complementary"
    >
      <span className="text-[10px] uppercase font-bold tracking-widest text-white/20">
        Advertisement
      </span>
    </aside>
  );
}
