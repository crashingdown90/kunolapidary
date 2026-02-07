import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { width: 160, height: 48 },
  md: { width: 240, height: 72 },
  lg: { width: 360, height: 108 },
};

const Logo: React.FC<LogoProps> = ({ className, size = "md" }) => {
  const { width, height } = sizeMap[size];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360 108"
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Kuno Lapidary logo"
    >
      <defs>
        {/* Gem facet gradients */}
        <linearGradient id="logo-gem-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D2B48C" />
          <stop offset="50%" stopColor="#F5E6D3" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>
        <linearGradient id="logo-gem-left" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#5C4033" />
        </linearGradient>
        <linearGradient id="logo-gem-right" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#6B8E23" />
        </linearGradient>
        <linearGradient id="logo-gem-center" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="40%" stopColor="#D2B48C" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="logo-gem-facet1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D2B48C" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8B6914" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="logo-gem-facet2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#5C4033" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="logo-gem-facet3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#6B8E23" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8B6914" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="logo-gem-shine" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
        <filter id="logo-gem-glow">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Brilliant-cut gem from top view - centered at (54, 54) */}
      <g transform="translate(54, 54)" filter="url(#logo-gem-glow)">
        {/* Outer octagonal girdle */}
        <polygon
          points="0,-38 27,-27 38,0 27,27 0,38 -27,27 -38,0 -27,-27"
          fill="url(#logo-gem-left)"
          stroke="#5C4033"
          strokeWidth="1"
        />

        {/* Star facets - upper left */}
        <polygon points="0,-38 -27,-27 -14,-14" fill="#8B6914" opacity="0.85" />
        {/* Star facets - upper right */}
        <polygon points="0,-38 27,-27 14,-14" fill="#D2B48C" opacity="0.9" />
        {/* Star facets - right upper */}
        <polygon points="27,-27 38,0 14,-14" fill="url(#logo-gem-facet1)" />
        {/* Star facets - right lower */}
        <polygon points="38,0 27,27 14,14" fill="#6B8E23" opacity="0.6" />
        {/* Star facets - lower right */}
        <polygon points="27,27 0,38 14,14" fill="#8B6914" opacity="0.7" />
        {/* Star facets - lower left */}
        <polygon points="0,38 -27,27 -14,14" fill="url(#logo-gem-facet2)" />
        {/* Star facets - left lower */}
        <polygon points="-27,27 -38,0 -14,14" fill="#5C4033" opacity="0.75" />
        {/* Star facets - left upper */}
        <polygon points="-38,0 -27,-27 -14,-14" fill="url(#logo-gem-facet3)" />

        {/* Bezel facets (kite-shaped) connecting girdle to table */}
        <polygon points="0,-38 14,-14 0,-16 -14,-14" fill="#F5E6D3" opacity="0.7" />
        <polygon points="38,0 14,-14 16,0 14,14" fill="#D2B48C" opacity="0.65" />
        <polygon points="0,38 14,14 0,16 -14,14" fill="#8B6914" opacity="0.6" />
        <polygon points="-38,0 -14,-14 -16,0 -14,14" fill="#6B8E23" opacity="0.55" />

        {/* Table facet (center octagon) */}
        <polygon
          points="0,-16 14,-14 16,0 14,14 0,16 -14,14 -16,0 -14,-14"
          fill="url(#logo-gem-center)"
          stroke="#D2B48C"
          strokeWidth="0.5"
          opacity="0.9"
        />

        {/* Internal facet lines for detail */}
        <line x1="0" y1="-16" x2="0" y2="-38" stroke="#5C4033" strokeWidth="0.4" opacity="0.5" />
        <line x1="14" y1="-14" x2="27" y2="-27" stroke="#5C4033" strokeWidth="0.4" opacity="0.5" />
        <line x1="16" y1="0" x2="38" y2="0" stroke="#5C4033" strokeWidth="0.4" opacity="0.5" />
        <line x1="14" y1="14" x2="27" y2="27" stroke="#5C4033" strokeWidth="0.4" opacity="0.5" />
        <line x1="0" y1="16" x2="0" y2="38" stroke="#5C4033" strokeWidth="0.4" opacity="0.5" />
        <line x1="-14" y1="14" x2="-27" y2="27" stroke="#5C4033" strokeWidth="0.4" opacity="0.5" />
        <line x1="-16" y1="0" x2="-38" y2="0" stroke="#5C4033" strokeWidth="0.4" opacity="0.5" />
        <line x1="-14" y1="-14" x2="-27" y2="-27" stroke="#5C4033" strokeWidth="0.4" opacity="0.5" />

        {/* Sparkle/shine highlight */}
        <polygon
          points="0,-16 14,-14 6,-6"
          fill="url(#logo-gem-shine)"
        />
        <circle cx="-4" cy="-10" r="2" fill="white" opacity="0.5" />
        <circle cx="-3" cy="-8" r="1" fill="white" opacity="0.7" />
      </g>

      {/* Text: KUNO */}
      <text
        x="108"
        y="48"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="42"
        fontWeight="bold"
        fill="#5C4033"
        letterSpacing="6"
      >
        KUNO
      </text>

      {/* Text: LAPIDARY */}
      <text
        x="108"
        y="78"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="22"
        fontWeight="normal"
        fill="#8B6914"
        letterSpacing="8"
      >
        LAPIDARY
      </text>

      {/* Subtle decorative line */}
      <line
        x1="108"
        y1="84"
        x2="310"
        y2="84"
        stroke="#D2B48C"
        strokeWidth="0.75"
        opacity="0.6"
      />

      {/* Small tagline */}
      <text
        x="108"
        y="98"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="9"
        fontWeight="normal"
        fill="#8B6914"
        letterSpacing="3"
        opacity="0.7"
      >
        GEMS · GEOLOGY · CRAFT
      </text>
    </svg>
  );
};

export default Logo;
