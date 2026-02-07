import React from "react";

interface DiamondComparisonHeroProps {
  className?: string;
}

const DiamondComparisonHero: React.FC<DiamondComparisonHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Three brilliant stones compared side by side: natural diamond, moissanite, and lab-grown diamond"
    >
      <defs>
        {/* Background gradient */}
        <radialGradient id="dcomp-bg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="60%" stopColor="#E8D5C0" />
          <stop offset="100%" stopColor="#D2B48C" />
        </radialGradient>

        {/* Dark display surface */}
        <linearGradient id="dcomp-velvet" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D2B1F" />
          <stop offset="50%" stopColor="#2C1E14" />
          <stop offset="100%" stopColor="#1A110B" />
        </linearGradient>

        {/* Natural diamond body */}
        <linearGradient id="dcomp-nat-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#F0F0F8" />
          <stop offset="50%" stopColor="#E0E0EC" />
          <stop offset="75%" stopColor="#F0F0F8" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="dcomp-nat-facet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8F8FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D0D0E0" stopOpacity="0.7" />
        </linearGradient>

        {/* Moissanite body - slightly warmer, more dispersive */}
        <linearGradient id="dcomp-moi-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#F4F0FF" />
          <stop offset="50%" stopColor="#E8E0F0" />
          <stop offset="75%" stopColor="#F4F0FF" />
          <stop offset="100%" stopColor="#FFFFF8" />
        </linearGradient>
        <linearGradient id="dcomp-moi-facet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D8D0E8" stopOpacity="0.7" />
        </linearGradient>

        {/* Lab-grown diamond body - identical to natural */}
        <linearGradient id="dcomp-lab-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#F0F0F8" />
          <stop offset="50%" stopColor="#E0E0EC" />
          <stop offset="75%" stopColor="#F0F0F8" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="dcomp-lab-facet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F8F8FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#D0D0E0" stopOpacity="0.7" />
        </linearGradient>

        {/* Fire/dispersion color patches - subtle for natural diamond */}
        <linearGradient id="dcomp-fire-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FF1744" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="dcomp-fire-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#82B1FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2962FF" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="dcomp-fire-green" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#69F0AE" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00C853" stopOpacity="0.08" />
        </linearGradient>

        {/* Stronger fire for moissanite */}
        <linearGradient id="dcomp-mfire-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FF1744" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="dcomp-mfire-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#82B1FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#2962FF" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="dcomp-mfire-green" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#69F0AE" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#00C853" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="dcomp-mfire-yellow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFAB00" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="dcomp-mfire-violet" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#CE93D8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#AB47BC" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="dcomp-mfire-orange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFAB40" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#FF6D00" stopOpacity="0.15" />
        </linearGradient>

        {/* Lab indicator badge gradient */}
        <linearGradient id="dcomp-badge" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B8E23" />
          <stop offset="100%" stopColor="#4A6316" />
        </linearGradient>

        {/* Sparkle */}
        <radialGradient id="dcomp-sparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Shadow and glow filters */}
        <filter id="dcomp-shadow">
          <feDropShadow dx="2" dy="4" stdDeviation="5" floodColor="#1A110B" floodOpacity="0.5" />
        </filter>
        <filter id="dcomp-glow">
          <feGaussianBlur stdDeviation="2.5" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="dcomp-color-glow">
          <feGaussianBlur stdDeviation="4" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="url(#dcomp-bg)" />

      {/* Subtle ambient light */}
      <circle cx="150" cy="130" r="180" fill="#D2B48C" opacity="0.08" />
      <circle cx="400" cy="120" r="160" fill="#8B6914" opacity="0.05" />
      <circle cx="650" cy="130" r="180" fill="#D2B48C" opacity="0.08" />

      {/* Display surface */}
      <path
        d="M50,200 Q50,180 70,175 L730,175 Q750,180 750,200 L750,400 Q750,420 730,420 L70,420 Q50,420 50,400 Z"
        fill="url(#dcomp-velvet)"
        stroke="#5C4033"
        strokeWidth="2"
      />
      {/* Velvet edge highlight */}
      <path
        d="M70,185 L730,185 L740,200 L60,200 Z"
        fill="#3D2B1F"
        opacity="0.5"
      />

      {/* Subtle separation lines between stones */}
      <line x1="300" y1="200" x2="300" y2="415" stroke="#5C4033" strokeWidth="0.5" opacity="0.3" />
      <line x1="500" y1="200" x2="500" y2="415" stroke="#5C4033" strokeWidth="0.5" opacity="0.3" />

      {/* === STONE 1: NATURAL DIAMOND (left) === */}
      <g transform="translate(175, 280)" filter="url(#dcomp-shadow)">
        {/* Round brilliant-cut stone */}
        <polygon
          points="0,-60 25,-53 45,-35 55,-10 50,18 35,40 15,52 0,56 -15,52 -35,40 -50,18 -55,-10 -45,-35 -25,-53"
          fill="url(#dcomp-nat-body)"
          stroke="#C0C0C8"
          strokeWidth="0.8"
        />

        {/* Crown facets */}
        <polygon points="0,-60 25,-53 12,-28 0,-32" fill="#F5F5FF" opacity="0.85" />
        <polygon points="0,-60 -25,-53 -12,-28 0,-32" fill="#E8E8F5" opacity="0.75" />
        <polygon points="25,-53 45,-35 28,-22 12,-28" fill="url(#dcomp-nat-facet)" />
        <polygon points="-25,-53 -45,-35 -28,-22 -12,-28" fill="#D8D8EA" opacity="0.65" />
        <polygon points="45,-35 55,-10 35,-8 28,-22" fill="#EBEBF8" opacity="0.6" />
        <polygon points="-45,-35 -55,-10 -35,-8 -28,-22" fill="url(#dcomp-nat-facet)" opacity="0.65" />
        <polygon points="55,-10 50,18 32,8 35,-8" fill="#E0E0F0" opacity="0.55" />
        <polygon points="-55,-10 -50,18 -32,8 -35,-8" fill="#EBEBF8" opacity="0.5" />

        {/* Pavilion */}
        <polygon points="50,18 35,40 18,22 32,8" fill="#D8D8E8" opacity="0.45" />
        <polygon points="-50,18 -35,40 -18,22 -32,8" fill="#E5E5F2" opacity="0.4" />
        <polygon points="35,40 15,52 8,32 18,22" fill="#CCCCDD" opacity="0.4" />
        <polygon points="-35,40 -15,52 -8,32 -18,22" fill="#E0E0EE" opacity="0.35" />
        <polygon points="15,52 0,56 0,35 8,32" fill="#D5D5E5" opacity="0.35" />
        <polygon points="-15,52 0,56 0,35 -8,32" fill="#C8C8DA" opacity="0.3" />

        {/* Table */}
        <polygon
          points="0,-32 12,-28 28,-22 35,-8 32,8 18,22 8,32 0,35 -8,32 -18,22 -32,8 -35,-8 -28,-22 -12,-28"
          fill="white"
          opacity="0.3"
        />

        {/* Subtle fire - natural diamond has moderate dispersion */}
        <polygon points="10,-25 20,-18 15,-12" fill="url(#dcomp-fire-red)" />
        <polygon points="-22,-20 -15,-12 -22,-8" fill="url(#dcomp-fire-blue)" />
        <polygon points="28,0 22,10 30,8" fill="url(#dcomp-fire-green)" />
        <polygon points="-8,18 2,22 -2,28" fill="url(#dcomp-fire-red)" opacity="0.7" />
        <polygon points="12,5 18,0 20,8" fill="url(#dcomp-fire-blue)" opacity="0.6" />

        {/* Highlight */}
        <ellipse cx="-8" cy="-26" rx="10" ry="6" fill="white" opacity="0.5" transform="rotate(-10)" />
        <ellipse cx="-6" cy="-28" rx="5" ry="3" fill="white" opacity="0.7" />
      </g>

      {/* Natural diamond sparkles */}
      <g filter="url(#dcomp-glow)">
        <g>
          <line x1="170" y1="215" x2="170" y2="227" stroke="white" strokeWidth="1.2" opacity="0.7" />
          <line x1="164" y1="221" x2="176" y2="221" stroke="white" strokeWidth="1.2" opacity="0.7" />
          <circle cx="170" cy="221" r="2.5" fill="url(#dcomp-sparkle)" />
        </g>
        <circle cx="210" cy="238" r="2" fill="url(#dcomp-sparkle)" />
        <circle cx="145" cy="260" r="1.5" fill="url(#dcomp-sparkle)" />
      </g>

      {/* Natural diamond label */}
      <text
        x="175"
        y="390"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="12"
        fill="#D2B48C"
        opacity="0.75"
        letterSpacing="1"
      >
        NATURAL DIAMOND
      </text>

      {/* === STONE 2: MOISSANITE (center) === */}
      <g transform="translate(400, 280)" filter="url(#dcomp-shadow)">
        {/* Round brilliant - slightly more brilliant appearance */}
        <polygon
          points="0,-60 25,-53 45,-35 55,-10 50,18 35,40 15,52 0,56 -15,52 -35,40 -50,18 -55,-10 -45,-35 -25,-53"
          fill="url(#dcomp-moi-body)"
          stroke="#C0C0C8"
          strokeWidth="0.8"
        />

        {/* Crown facets */}
        <polygon points="0,-60 25,-53 12,-28 0,-32" fill="#F8F5FF" opacity="0.88" />
        <polygon points="0,-60 -25,-53 -12,-28 0,-32" fill="#F0ECF8" opacity="0.78" />
        <polygon points="25,-53 45,-35 28,-22 12,-28" fill="url(#dcomp-moi-facet)" />
        <polygon points="-25,-53 -45,-35 -28,-22 -12,-28" fill="#E0D8ED" opacity="0.68" />
        <polygon points="45,-35 55,-10 35,-8 28,-22" fill="#F0ECFA" opacity="0.63" />
        <polygon points="-45,-35 -55,-10 -35,-8 -28,-22" fill="url(#dcomp-moi-facet)" opacity="0.68" />
        <polygon points="55,-10 50,18 32,8 35,-8" fill="#E8E4F5" opacity="0.58" />
        <polygon points="-55,-10 -50,18 -32,8 -35,-8" fill="#F0ECFA" opacity="0.53" />

        {/* Pavilion */}
        <polygon points="50,18 35,40 18,22 32,8" fill="#E0DCF0" opacity="0.48" />
        <polygon points="-50,18 -35,40 -18,22 -32,8" fill="#ECE8F6" opacity="0.43" />
        <polygon points="35,40 15,52 8,32 18,22" fill="#D5D0E5" opacity="0.43" />
        <polygon points="-35,40 -15,52 -8,32 -18,22" fill="#E5E0F2" opacity="0.38" />
        <polygon points="15,52 0,56 0,35 8,32" fill="#DDD8EC" opacity="0.38" />
        <polygon points="-15,52 0,56 0,35 -8,32" fill="#D0CCE0" opacity="0.33" />

        {/* Table */}
        <polygon
          points="0,-32 12,-28 28,-22 35,-8 32,8 18,22 8,32 0,35 -8,32 -18,22 -32,8 -35,-8 -28,-22 -12,-28"
          fill="white"
          opacity="0.35"
        />

        {/* Strong rainbow fire - moissanite has 2.4x more dispersion than diamond */}
        <polygon points="8,-26 18,-20 13,-14" fill="url(#dcomp-mfire-red)" />
        <polygon points="-20,-22 -14,-14 -22,-10" fill="url(#dcomp-mfire-blue)" />
        <polygon points="25,-2 20,8 28,6" fill="url(#dcomp-mfire-green)" />
        <polygon points="-10,15 0,20 -4,26" fill="url(#dcomp-mfire-orange)" />
        <polygon points="14,3 20,-2 22,6" fill="url(#dcomp-mfire-violet)" />
        <polygon points="-30,-5 -22,2 -28,8" fill="url(#dcomp-mfire-yellow)" />
        <polygon points="5,18 12,14 10,22" fill="url(#dcomp-mfire-red)" />
        <polygon points="-18,8 -10,12 -15,18" fill="url(#dcomp-mfire-green)" />
        <polygon points="30,-15 25,-8 32,-5" fill="url(#dcomp-mfire-blue)" />
        <polygon points="-5,-18 3,-15 -2,-10" fill="url(#dcomp-mfire-yellow)" />

        {/* Extra colorful patches unique to moissanite */}
        <polygon points="15,-15 22,-10 18,-5" fill="url(#dcomp-mfire-orange)" opacity="0.8" />
        <polygon points="-28,-15 -22,-8 -30,-5" fill="url(#dcomp-mfire-violet)" opacity="0.7" />

        {/* Highlight */}
        <ellipse cx="-8" cy="-26" rx="10" ry="6" fill="white" opacity="0.5" transform="rotate(-10)" />
        <ellipse cx="-6" cy="-28" rx="5" ry="3" fill="white" opacity="0.7" />
      </g>

      {/* Moissanite sparkles - more colorful */}
      <g filter="url(#dcomp-color-glow)">
        {/* Big star sparkle */}
        <g>
          <line x1="395" y1="212" x2="395" y2="228" stroke="white" strokeWidth="1.5" opacity="0.85" />
          <line x1="387" y1="220" x2="403" y2="220" stroke="white" strokeWidth="1.5" opacity="0.85" />
          <line x1="390" y1="215" x2="400" y2="225" stroke="white" strokeWidth="0.8" opacity="0.5" />
          <line x1="400" y1="215" x2="390" y2="225" stroke="white" strokeWidth="0.8" opacity="0.5" />
          <circle cx="395" cy="220" r="3" fill="url(#dcomp-sparkle)" />
        </g>
        {/* Colorful sparkle dots */}
        <circle cx="430" cy="235" r="2.5" fill="#FF6B6B" opacity="0.5" />
        <circle cx="365" cy="250" r="2" fill="#82B1FF" opacity="0.5" />
        <circle cx="440" cy="262" r="2" fill="#69F0AE" opacity="0.45" />
        <circle cx="355" cy="270" r="1.8" fill="#FFD54F" opacity="0.45" />
        <circle cx="425" cy="248" r="1.5" fill="#CE93D8" opacity="0.4" />
        <circle cx="375" cy="240" r="2" fill="#FFAB40" opacity="0.4" />
      </g>

      {/* Moissanite label */}
      <text
        x="400"
        y="390"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="12"
        fill="#D2B48C"
        opacity="0.75"
        letterSpacing="1"
      >
        MOISSANITE
      </text>

      {/* === STONE 3: LAB-GROWN DIAMOND (right) === */}
      <g transform="translate(625, 280)" filter="url(#dcomp-shadow)">
        {/* Identical round brilliant to natural diamond */}
        <polygon
          points="0,-60 25,-53 45,-35 55,-10 50,18 35,40 15,52 0,56 -15,52 -35,40 -50,18 -55,-10 -45,-35 -25,-53"
          fill="url(#dcomp-lab-body)"
          stroke="#C0C0C8"
          strokeWidth="0.8"
        />

        {/* Crown facets */}
        <polygon points="0,-60 25,-53 12,-28 0,-32" fill="#F5F5FF" opacity="0.85" />
        <polygon points="0,-60 -25,-53 -12,-28 0,-32" fill="#E8E8F5" opacity="0.75" />
        <polygon points="25,-53 45,-35 28,-22 12,-28" fill="url(#dcomp-lab-facet)" />
        <polygon points="-25,-53 -45,-35 -28,-22 -12,-28" fill="#D8D8EA" opacity="0.65" />
        <polygon points="45,-35 55,-10 35,-8 28,-22" fill="#EBEBF8" opacity="0.6" />
        <polygon points="-45,-35 -55,-10 -35,-8 -28,-22" fill="url(#dcomp-lab-facet)" opacity="0.65" />
        <polygon points="55,-10 50,18 32,8 35,-8" fill="#E0E0F0" opacity="0.55" />
        <polygon points="-55,-10 -50,18 -32,8 -35,-8" fill="#EBEBF8" opacity="0.5" />

        {/* Pavilion */}
        <polygon points="50,18 35,40 18,22 32,8" fill="#D8D8E8" opacity="0.45" />
        <polygon points="-50,18 -35,40 -18,22 -32,8" fill="#E5E5F2" opacity="0.4" />
        <polygon points="35,40 15,52 8,32 18,22" fill="#CCCCDD" opacity="0.4" />
        <polygon points="-35,40 -15,52 -8,32 -18,22" fill="#E0E0EE" opacity="0.35" />
        <polygon points="15,52 0,56 0,35 8,32" fill="#D5D5E5" opacity="0.35" />
        <polygon points="-15,52 0,56 0,35 -8,32" fill="#C8C8DA" opacity="0.3" />

        {/* Table */}
        <polygon
          points="0,-32 12,-28 28,-22 35,-8 32,8 18,22 8,32 0,35 -8,32 -18,22 -32,8 -35,-8 -28,-22 -12,-28"
          fill="white"
          opacity="0.3"
        />

        {/* Same fire as natural diamond */}
        <polygon points="10,-25 20,-18 15,-12" fill="url(#dcomp-fire-red)" />
        <polygon points="-22,-20 -15,-12 -22,-8" fill="url(#dcomp-fire-blue)" />
        <polygon points="28,0 22,10 30,8" fill="url(#dcomp-fire-green)" />
        <polygon points="-8,18 2,22 -2,28" fill="url(#dcomp-fire-red)" opacity="0.7" />
        <polygon points="12,5 18,0 20,8" fill="url(#dcomp-fire-blue)" opacity="0.6" />

        {/* Highlight */}
        <ellipse cx="-8" cy="-26" rx="10" ry="6" fill="white" opacity="0.5" transform="rotate(-10)" />
        <ellipse cx="-6" cy="-28" rx="5" ry="3" fill="white" opacity="0.7" />
      </g>

      {/* Lab diamond sparkles */}
      <g filter="url(#dcomp-glow)">
        <g>
          <line x1="620" y1="215" x2="620" y2="227" stroke="white" strokeWidth="1.2" opacity="0.7" />
          <line x1="614" y1="221" x2="626" y2="221" stroke="white" strokeWidth="1.2" opacity="0.7" />
          <circle cx="620" cy="221" r="2.5" fill="url(#dcomp-sparkle)" />
        </g>
        <circle cx="660" cy="240" r="2" fill="url(#dcomp-sparkle)" />
        <circle cx="595" cy="258" r="1.5" fill="url(#dcomp-sparkle)" />
      </g>

      {/* Lab-grown indicator badge */}
      <g transform="translate(625, 214)">
        <rect x="-16" y="-8" width="32" height="16" rx="3" fill="url(#dcomp-badge)" stroke="#3A4D12" strokeWidth="0.8" />
        <text
          x="0"
          y="4"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="9"
          fontWeight="bold"
          fill="#F5E6D3"
          letterSpacing="1"
        >
          LAB
        </text>
      </g>

      {/* Lab-grown diamond label */}
      <text
        x="625"
        y="390"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="12"
        fill="#D2B48C"
        opacity="0.75"
        letterSpacing="1"
      >
        LAB-GROWN
      </text>

      {/* Decorative top and bottom borders */}
      <rect x="0" y="0" width="800" height="3" fill="#5C4033" opacity="0.2" />
      <rect x="0" y="447" width="800" height="3" fill="#5C4033" opacity="0.2" />
    </svg>
  );
};

export default DiamondComparisonHero;
