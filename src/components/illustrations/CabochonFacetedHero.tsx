import React from "react";

interface CabochonFacetedHeroProps {
  className?: string;
}

const CabochonFacetedHero: React.FC<CabochonFacetedHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Side-by-side comparison of a smooth cabochon gem and a faceted gem"
    >
      <defs>
        {/* Background gradient */}
        <radialGradient id="cabfac-bg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="60%" stopColor="#E8D5C0" />
          <stop offset="100%" stopColor="#D2B48C" />
        </radialGradient>

        {/* Left half warm tint */}
        <linearGradient id="cabfac-left-tint" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F5E6D3" stopOpacity="0" />
        </linearGradient>

        {/* Right half cool tint */}
        <linearGradient id="cabfac-right-tint" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8E8F0" stopOpacity="0" />
          <stop offset="100%" stopColor="#E8E8F0" stopOpacity="0.12" />
        </linearGradient>

        {/* Velvet display surface */}
        <linearGradient id="cabfac-velvet" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D2B1F" />
          <stop offset="50%" stopColor="#2C1E14" />
          <stop offset="100%" stopColor="#1A110B" />
        </linearGradient>

        {/* Cabochon body - warm amber/tiger's eye */}
        <radialGradient id="cabfac-cab-body" cx="45%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#E8A832" />
          <stop offset="25%" stopColor="#D4912A" />
          <stop offset="55%" stopColor="#B87520" />
          <stop offset="80%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#6B5210" />
        </radialGradient>

        {/* Cabochon top highlight - dome light */}
        <radialGradient id="cabfac-cab-shine" cx="38%" cy="28%" r="35%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.65" />
          <stop offset="40%" stopColor="#FFE8B0" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#D4912A" stopOpacity="0" />
        </radialGradient>

        {/* Cabochon chatoyancy (tiger's eye silky band) */}
        <linearGradient id="cabfac-cab-band" x1="0%" y1="0%" x2="100%" y2="30%">
          <stop offset="0%" stopColor="#6B5210" stopOpacity="0" />
          <stop offset="30%" stopColor="#E8C868" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#FFE8B0" stopOpacity="0.7" />
          <stop offset="70%" stopColor="#E8C868" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#6B5210" stopOpacity="0" />
        </linearGradient>

        {/* Cabochon edge shadow */}
        <radialGradient id="cabfac-cab-edge" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="#8B6914" stopOpacity="0" />
          <stop offset="100%" stopColor="#5C4033" stopOpacity="0.5" />
        </radialGradient>

        {/* Faceted gem - main body brilliant white/ice */}
        <linearGradient id="cabfac-fac-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#E8E8F0" />
          <stop offset="50%" stopColor="#D0D0E0" />
          <stop offset="75%" stopColor="#E8E8F0" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>

        {/* Faceted gem crown facets */}
        <linearGradient id="cabfac-fac-crown" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0F0FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#C8C8E0" stopOpacity="0.7" />
        </linearGradient>

        {/* Rainbow fire gradients for faceted gem */}
        <linearGradient id="cabfac-fire-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FF1744" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="cabfac-fire-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#82B1FF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2962FF" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="cabfac-fire-green" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#69F0AE" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00C853" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="cabfac-fire-yellow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FFAB00" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="cabfac-fire-violet" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#CE93D8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#AB47BC" stopOpacity="0.1" />
        </linearGradient>

        {/* Sparkle */}
        <radialGradient id="cabfac-sparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Divider gradient */}
        <linearGradient id="cabfac-divider" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B6914" stopOpacity="0" />
          <stop offset="20%" stopColor="#8B6914" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#D2B48C" stopOpacity="0.6" />
          <stop offset="80%" stopColor="#8B6914" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#8B6914" stopOpacity="0" />
        </linearGradient>

        {/* Shadow filters */}
        <filter id="cabfac-shadow">
          <feDropShadow dx="2" dy="4" stdDeviation="5" floodColor="#1A110B" floodOpacity="0.5" />
        </filter>
        <filter id="cabfac-glow">
          <feGaussianBlur stdDeviation="3" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="cabfac-soft-glow">
          <feGaussianBlur stdDeviation="6" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="url(#cabfac-bg)" />

      {/* Subtle ambient light circles */}
      <circle cx="200" cy="180" r="200" fill="#8B6914" opacity="0.06" />
      <circle cx="600" cy="170" r="200" fill="#D2B48C" opacity="0.07" />
      <circle cx="400" cy="80" r="160" fill="#F5E6D3" opacity="0.1" />

      {/* Left half warm tint overlay */}
      <rect x="0" y="0" width="400" height="450" fill="url(#cabfac-left-tint)" />

      {/* Right half cool tint overlay */}
      <rect x="400" y="0" width="400" height="450" fill="url(#cabfac-right-tint)" />

      {/* Display surface - dark velvet tray */}
      <path
        d="M60,210 Q60,190 80,185 L720,185 Q740,190 740,210 L740,410 Q740,430 720,430 L80,430 Q60,430 60,410 Z"
        fill="url(#cabfac-velvet)"
        stroke="#5C4033"
        strokeWidth="2"
      />
      {/* Velvet edge highlight */}
      <path
        d="M80,195 L720,195 L730,210 L70,210 Z"
        fill="#3D2B1F"
        opacity="0.5"
      />

      {/* Subtle velvet texture */}
      <g opacity="0.05">
        <line x1="100" y1="250" x2="700" y2="250" stroke="#F5E6D3" strokeWidth="0.5" />
        <line x1="100" y1="290" x2="700" y2="290" stroke="#F5E6D3" strokeWidth="0.5" />
        <line x1="100" y1="330" x2="700" y2="330" stroke="#F5E6D3" strokeWidth="0.5" />
        <line x1="100" y1="370" x2="700" y2="370" stroke="#F5E6D3" strokeWidth="0.5" />
      </g>

      {/* === CENTER DIVIDER === */}
      <line x1="400" y1="190" x2="400" y2="425" stroke="url(#cabfac-divider)" strokeWidth="1.5" />
      {/* Decorative diamond at divider top */}
      <polygon points="400,195 405,202 400,209 395,202" fill="#D2B48C" opacity="0.5" />

      {/* === LEFT SIDE: CABOCHON GEM === */}
      <g transform="translate(220, 300)" filter="url(#cabfac-shadow)">
        {/* Shadow on velvet */}
        <ellipse cx="5" cy="72" rx="75" ry="16" fill="#0D0907" opacity="0.4" />

        {/* Base of cabochon (flat bottom visible slightly) */}
        <ellipse cx="0" cy="40" rx="72" ry="22" fill="#6B5210" stroke="#5C4033" strokeWidth="0.5" />

        {/* Main cabochon dome - oval shape */}
        <ellipse cx="0" cy="5" rx="70" ry="50" fill="url(#cabfac-cab-body)" stroke="#5C4033" strokeWidth="1" />

        {/* Tiger's eye chatoyancy band - silky light band across */}
        <ellipse cx="0" cy="5" rx="70" ry="50" fill="url(#cabfac-cab-band)" />

        {/* Subtle color banding within the stone */}
        <path
          d="M-55,-10 Q-30,-22 0,-25 Q30,-22 55,-10"
          fill="none"
          stroke="#E8C868"
          strokeWidth="2"
          opacity="0.2"
        />
        <path
          d="M-60,0 Q-30,-8 0,-10 Q30,-8 60,0"
          fill="none"
          stroke="#FFDB6E"
          strokeWidth="1.5"
          opacity="0.25"
        />
        <path
          d="M-55,12 Q-30,5 0,3 Q30,5 55,12"
          fill="none"
          stroke="#E8C868"
          strokeWidth="1.5"
          opacity="0.2"
        />

        {/* Edge darkening for dome depth */}
        <ellipse cx="0" cy="5" rx="70" ry="50" fill="url(#cabfac-cab-edge)" />

        {/* Primary dome highlight - gentle arc of light */}
        <ellipse cx="0" cy="5" rx="70" ry="50" fill="url(#cabfac-cab-shine)" />

        {/* Secondary bright highlight spot */}
        <ellipse cx="-12" cy="-18" rx="18" ry="12" fill="white" opacity="0.25" transform="rotate(-15, -12, -18)" />
        <ellipse cx="-10" cy="-20" rx="10" ry="6" fill="white" opacity="0.4" transform="rotate(-15, -10, -20)" />
        <ellipse cx="-8" cy="-22" rx="5" ry="3" fill="white" opacity="0.55" transform="rotate(-15, -8, -22)" />

        {/* Warm ambient reflection near bottom */}
        <ellipse cx="15" cy="30" rx="20" ry="8" fill="#E8A832" opacity="0.15" transform="rotate(10, 15, 30)" />
      </g>

      {/* "CABOCHON" label */}
      <text
        x="220"
        y="408"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="13"
        fill="#D2B48C"
        opacity="0.7"
        letterSpacing="2"
      >
        CABOCHON
      </text>

      {/* === RIGHT SIDE: FACETED GEM === */}
      <g transform="translate(580, 290)" filter="url(#cabfac-shadow)">
        {/* Shadow on velvet */}
        <ellipse cx="3" cy="78" rx="70" ry="14" fill="#0D0907" opacity="0.35" />

        {/* Faceted brilliant-cut gem from above */}
        {/* Outline / girdle */}
        <polygon
          points="0,-65 28,-58 50,-38 60,-10 55,20 38,45 15,60 0,65 -15,60 -38,45 -55,20 -60,-10 -50,-38 -28,-58"
          fill="url(#cabfac-fac-body)"
          stroke="#B0B0C0"
          strokeWidth="1"
        />

        {/* Crown facets - upper triangular facets */}
        <polygon points="0,-65 28,-58 15,-30 0,-35" fill="#F0F0FF" opacity="0.85" />
        <polygon points="0,-65 -28,-58 -15,-30 0,-35" fill="#E0E0F0" opacity="0.75" />
        <polygon points="28,-58 50,-38 30,-25 15,-30" fill="url(#cabfac-fac-crown)" />
        <polygon points="-28,-58 -50,-38 -30,-25 -15,-30" fill="#D8D8E8" opacity="0.65" />
        <polygon points="50,-38 60,-10 38,-8 30,-25" fill="#E8E8F5" opacity="0.6" />
        <polygon points="-50,-38 -60,-10 -38,-8 -30,-25" fill="#C8C8DD" opacity="0.55" />
        <polygon points="60,-10 55,20 35,10 38,-8" fill="url(#cabfac-fac-crown)" opacity="0.7" />
        <polygon points="-60,-10 -55,20 -35,10 -38,-8" fill="#E0E0F0" opacity="0.5" />

        {/* Pavilion facets - lower portion */}
        <polygon points="55,20 38,45 20,25 35,10" fill="#D0D0E5" opacity="0.45" />
        <polygon points="-55,20 -38,45 -20,25 -35,10" fill="#E8E8F5" opacity="0.4" />
        <polygon points="38,45 15,60 8,35 20,25" fill="#C8C8DD" opacity="0.4" />
        <polygon points="-38,45 -15,60 -8,35 -20,25" fill="#D8D8F0" opacity="0.35" />
        <polygon points="15,60 0,65 0,40 8,35" fill="#E0E0F5" opacity="0.35" />
        <polygon points="-15,60 0,65 0,40 -8,35" fill="#C0C0D8" opacity="0.3" />

        {/* Table facet (center) */}
        <polygon
          points="0,-35 15,-30 30,-25 38,-8 35,10 20,25 8,35 0,40 -8,35 -20,25 -35,10 -38,-8 -30,-25 -15,-30"
          fill="white"
          opacity="0.3"
        />

        {/* Rainbow fire refractions in facets */}
        <polygon points="15,-30 28,-20 20,-15" fill="url(#cabfac-fire-red)" />
        <polygon points="-30,-25 -20,-15 -28,-8" fill="url(#cabfac-fire-blue)" />
        <polygon points="35,5 28,18 38,15" fill="url(#cabfac-fire-green)" />
        <polygon points="-15,-30 -5,-22 -10,-15" fill="url(#cabfac-fire-yellow)" />
        <polygon points="8,25 18,20 15,32" fill="url(#cabfac-fire-violet)" />
        <polygon points="-38,-8 -28,0 -35,8" fill="url(#cabfac-fire-red)" opacity="0.7" />
        <polygon points="5,-25 12,-18 2,-15" fill="url(#cabfac-fire-blue)" opacity="0.6" />
        <polygon points="-20,20 -12,28 -8,18" fill="url(#cabfac-fire-green)" opacity="0.6" />

        {/* Main highlight */}
        <ellipse cx="-10" cy="-28" rx="12" ry="7" fill="white" opacity="0.5" transform="rotate(-10)" />
        <ellipse cx="-8" cy="-30" rx="6" ry="3" fill="white" opacity="0.7" />
      </g>

      {/* Sparkle effects around faceted gem */}
      <g filter="url(#cabfac-glow)">
        {/* Large star sparkle top-right */}
        <g>
          <line x1="625" y1="218" x2="625" y2="238" stroke="white" strokeWidth="1.5" opacity="0.8" />
          <line x1="615" y1="228" x2="635" y2="228" stroke="white" strokeWidth="1.5" opacity="0.8" />
          <line x1="619" y1="222" x2="631" y2="234" stroke="white" strokeWidth="0.8" opacity="0.5" />
          <line x1="631" y1="222" x2="619" y2="234" stroke="white" strokeWidth="0.8" opacity="0.5" />
          <circle cx="625" cy="228" r="3" fill="url(#cabfac-sparkle)" />
        </g>

        {/* Medium sparkle left */}
        <g>
          <line x1="530" y1="252" x2="530" y2="262" stroke="white" strokeWidth="1" opacity="0.6" />
          <line x1="525" y1="257" x2="535" y2="257" stroke="white" strokeWidth="1" opacity="0.6" />
          <circle cx="530" cy="257" r="2" fill="url(#cabfac-sparkle)" />
        </g>

        {/* Small sparkle bottom-right */}
        <circle cx="645" cy="340" r="2.5" fill="url(#cabfac-sparkle)" />

        {/* Tiny colored sparkles (fire dispersion) */}
        <circle cx="605" cy="245" r="2" fill="#FF6B6B" opacity="0.4" />
        <circle cx="560" cy="270" r="1.5" fill="#82B1FF" opacity="0.35" />
        <circle cx="615" cy="310" r="1.5" fill="#69F0AE" opacity="0.3" />
        <circle cx="550" cy="300" r="1.8" fill="#FFD54F" opacity="0.3" />
        <circle cx="630" cy="275" r="1.5" fill="#CE93D8" opacity="0.3" />
      </g>

      {/* Warm glow around cabochon */}
      <g filter="url(#cabfac-soft-glow)">
        <ellipse cx="220" cy="290" rx="50" ry="35" fill="#E8A832" opacity="0.08" />
      </g>

      {/* "FACETED" label */}
      <text
        x="580"
        y="408"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="13"
        fill="#D2B48C"
        opacity="0.7"
        letterSpacing="2"
      >
        FACETED
      </text>

      {/* Decorative top and bottom borders */}
      <rect x="0" y="0" width="800" height="3" fill="#5C4033" opacity="0.2" />
      <rect x="0" y="447" width="800" height="3" fill="#5C4033" opacity="0.2" />
    </svg>
  );
};

export default CabochonFacetedHero;
