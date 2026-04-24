"use client";

import { useEffect } from "react";

/**
 * AdPlaceholder Component
 *
 * This component renders a placeholder area for advertisements.
 * It now automatically renders real Google AdSense units if NEXT_PUBLIC_ADSENSE_ID is set.
 */

interface AdPlaceholderProps {
  format: "horizontal" | "vertical" | "rectangle" | "article";
  className?: string;
  adSlot?: string; // Optional: specify unique ad slot ID
}

const formatStyles: Record<AdPlaceholderProps["format"], { width: string; height: string }> = {
  horizontal: { width: "w-full", height: "h-[90px]" },
  vertical: { width: "w-[160px]", height: "h-[600px]" },
  rectangle: { width: "w-[300px]", height: "h-[250px]" },
  article: { width: "w-full", height: "h-[250px]" },
};

export default function AdPlaceholder({ format, className = "", adSlot = "" }: AdPlaceholderProps) {
  const styles = formatStyles[format];
  const adId = process.env.NEXT_PUBLIC_ADSENSE_ID || "ca-pub-9806436984867634";

  useEffect(() => {
    if (adId) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (err) {
        console.error("AdSense initialization error", err);
      }
    }
  }, [adId]);

  if (adId) {
    return (
      <aside className={`overflow-hidden ${styles.width} ${styles.height} ${className}`}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "100%" }}
          data-ad-client={adId}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </aside>
    );
  }

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
