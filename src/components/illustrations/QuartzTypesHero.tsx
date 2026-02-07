import React from "react";

interface QuartzTypesHeroProps {
  className?: string;
}

const QuartzTypesHero: React.FC<QuartzTypesHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Collection of quartz varieties including amethyst, citrine, rose quartz, and agate"
    >
      <defs>
        {/* Background gradient - cream to light brown */}
        <linearGradient id="qtype-bg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="50%" stopColor="#E8D5C0" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>

        {/* Display surface */}
        <linearGradient id="qtype-surface" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D2B1F" />
          <stop offset="50%" stopColor="#2C1E14" />
          <stop offset="100%" stopColor="#1A110B" />
        </linearGradient>

        {/* Shelf divider */}
        <linearGradient id="qtype-shelf" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D2B48C" />
          <stop offset="50%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#5C4033" />
        </linearGradient>

        {/* Amethyst gradient (purple crystal cluster) */}
        <linearGradient id="qtype-amethyst" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CE93D8" />
          <stop offset="30%" stopColor="#AB47BC" />
          <stop offset="70%" stopColor="#7B1FA2" />
          <stop offset="100%" stopColor="#4A148C" />
        </linearGradient>
        <linearGradient id="qtype-amethyst-light" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E1BEE7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#9C27B0" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="qtype-amethyst-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7B1FA2" />
          <stop offset="100%" stopColor="#38006B" />
        </linearGradient>

        {/* Citrine gradient (golden yellow) */}
        <linearGradient id="qtype-citrine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="30%" stopColor="#FFAB00" />
          <stop offset="70%" stopColor="#FF8F00" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="qtype-citrine-shine" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E1" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFAB00" stopOpacity="0.2" />
        </linearGradient>

        {/* Rose quartz gradient (soft pink) */}
        <radialGradient id="qtype-rosequartz" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FCE4EC" />
          <stop offset="30%" stopColor="#F8BBD0" />
          <stop offset="70%" stopColor="#F48FB1" />
          <stop offset="100%" stopColor="#EC407A" />
        </radialGradient>
        <radialGradient id="qtype-rosequartz-sheen" cx="30%" cy="25%" r="40%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#F8BBD0" stopOpacity="0" />
        </radialGradient>

        {/* Clear rock crystal gradient */}
        <linearGradient id="qtype-clear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#F0F0F5" />
          <stop offset="50%" stopColor="#E0E0E8" />
          <stop offset="75%" stopColor="#F0F0F5" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="qtype-clear-facet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D0D0DD" stopOpacity="0.5" />
        </linearGradient>

        {/* Smoky quartz gradient */}
        <linearGradient id="qtype-smoky" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A1887F" />
          <stop offset="30%" stopColor="#795548" />
          <stop offset="70%" stopColor="#5D4037" />
          <stop offset="100%" stopColor="#3E2723" />
        </linearGradient>
        <linearGradient id="qtype-smoky-shine" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#BCAAA4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#5D4037" stopOpacity="0.2" />
        </linearGradient>

        {/* Agate banded gradient */}
        <linearGradient id="qtype-agate-band1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EFEBE9" />
          <stop offset="100%" stopColor="#D7CCC8" />
        </linearGradient>
        <linearGradient id="qtype-agate-band2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#A1887F" />
          <stop offset="100%" stopColor="#8D6E63" />
        </linearGradient>
        <linearGradient id="qtype-agate-band3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5D4037" />
          <stop offset="100%" stopColor="#4E342E" />
        </linearGradient>
        <linearGradient id="qtype-agate-band4" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#BCAAA4" />
          <stop offset="100%" stopColor="#A1887F" />
        </linearGradient>

        {/* Jasper gradient (deep red) */}
        <radialGradient id="qtype-jasper" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#D32F2F" />
          <stop offset="40%" stopColor="#C62828" />
          <stop offset="70%" stopColor="#B71C1C" />
          <stop offset="100%" stopColor="#8B1A1A" />
        </radialGradient>

        {/* Chalcedony gradient (soft blue) */}
        <radialGradient id="qtype-chalcedony" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#B3E5FC" />
          <stop offset="30%" stopColor="#81D4FA" />
          <stop offset="70%" stopColor="#4FC3F7" />
          <stop offset="100%" stopColor="#29B6F6" />
        </radialGradient>
        <radialGradient id="qtype-chalcedony-sheen" cx="30%" cy="25%" r="40%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#81D4FA" stopOpacity="0" />
        </radialGradient>

        {/* Sparkle */}
        <radialGradient id="qtype-sparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Filters */}
        <filter id="qtype-shadow">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#1A110B" floodOpacity="0.5" />
        </filter>
        <filter id="qtype-soft-shadow">
          <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="#1A110B" floodOpacity="0.35" />
        </filter>
        <filter id="qtype-glow-white">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Clip for agate slice (circle) */}
        <clipPath id="qtype-agate-clip">
          <ellipse cx="0" cy="0" rx="38" ry="36" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="url(#qtype-bg)" />

      {/* Soft ambient circles */}
      <circle cx="150" cy="100" r="180" fill="#8B6914" opacity="0.04" />
      <circle cx="650" cy="120" r="200" fill="#6B8E23" opacity="0.03" />
      <circle cx="400" cy="200" r="250" fill="#D2B48C" opacity="0.06" />

      {/* Section label: Macrocrystalline */}
      <text x="400" y="38" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fill="#5C4033" opacity="0.5" fontStyle="italic">Macrocrystalline Quartz</text>

      {/* Upper display surface for macrocrystalline varieties */}
      <path
        d="M50,260 Q50,240 70,235 L730,235 Q750,240 750,260 L750,280 Q750,290 730,290 L70,290 Q50,290 50,280 Z"
        fill="url(#qtype-surface)"
        stroke="#5C4033"
        strokeWidth="1.5"
      />
      <path d="M70,245 L730,245 L740,258 L60,258 Z" fill="#3D2B1F" opacity="0.4" />

      {/* === MACROCRYSTALLINE: Upper row === */}

      {/* Amethyst Crystal Cluster */}
      <g transform="translate(130, 180)" filter="url(#qtype-shadow)">
        {/* Base rock matrix */}
        <path d="M-40,55 L-35,40 L-20,42 L0,38 L20,40 L35,42 L40,55 Z" fill="#5D4037" />
        <path d="M-35,50 L-30,40 L-15,42 L5,38 L20,40 L30,42 L35,50 Z" fill="#795548" opacity="0.5" />

        {/* Crystal 1 - tall center */}
        <polygon points="0,-50 12,-5 8,38 -8,38 -12,-5" fill="url(#qtype-amethyst)" stroke="#4A148C" strokeWidth="0.5" />
        <polygon points="0,-50 12,-5 0,-8" fill="url(#qtype-amethyst-light)" />
        <polygon points="0,-50 -12,-5 0,-8" fill="url(#qtype-amethyst-dark)" opacity="0.7" />
        {/* Crystal termination facets */}
        <polygon points="0,-50 6,-42 0,-38 -6,-42" fill="#E1BEE7" opacity="0.4" />

        {/* Crystal 2 - left leaning */}
        <polygon points="-18,-30 -8,-2 -14,40 -26,40 -28,-2" fill="url(#qtype-amethyst)" stroke="#4A148C" strokeWidth="0.5" />
        <polygon points="-18,-30 -8,-2 -18,-5" fill="url(#qtype-amethyst-light)" opacity="0.8" />
        <polygon points="-18,-30 -28,-2 -18,-5" fill="#6A1B9A" opacity="0.6" />

        {/* Crystal 3 - right leaning */}
        <polygon points="15,-35 25,0 20,40 10,40 8,0" fill="url(#qtype-amethyst)" stroke="#4A148C" strokeWidth="0.5" />
        <polygon points="15,-35 25,0 15,-3" fill="#CE93D8" opacity="0.5" />
        <polygon points="15,-35 8,0 15,-3" fill="#7B1FA2" opacity="0.7" />

        {/* Crystal 4 - small left */}
        <polygon points="-30,-12 -22,10 -26,40 -34,40 -35,10" fill="#9C27B0" stroke="#4A148C" strokeWidth="0.5" opacity="0.8" />

        {/* Crystal 5 - small right */}
        <polygon points="28,-15 35,8 32,40 24,40 22,8" fill="#AB47BC" stroke="#4A148C" strokeWidth="0.5" opacity="0.8" />

        {/* Highlight on main crystal */}
        <line x1="-2" y1="-45" x2="-2" y2="0" stroke="#E1BEE7" strokeWidth="1.5" opacity="0.3" />
      </g>
      {/* Label */}
      <text x="130" y="275" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fill="#F5E6D3" opacity="0.7">Amethyst</text>

      {/* Citrine Point */}
      <g transform="translate(280, 190)" filter="url(#qtype-shadow)">
        {/* Main crystal point */}
        <polygon
          points="0,-55 18,-8 15,45 -15,45 -18,-8"
          fill="url(#qtype-citrine)"
          stroke="#8B6914"
          strokeWidth="0.7"
        />
        {/* Light facet */}
        <polygon points="0,-55 18,-8 0,-12" fill="url(#qtype-citrine-shine)" />
        {/* Dark facet */}
        <polygon points="0,-55 -18,-8 0,-12" fill="#FF8F00" opacity="0.6" />
        {/* Termination facets */}
        <polygon points="0,-55 8,-46 0,-40 -8,-46" fill="#FFF8E1" opacity="0.4" />
        {/* Inner glow */}
        <ellipse cx="-3" cy="-20" rx="4" ry="8" fill="#FFF8E1" opacity="0.2" />
        {/* Warm highlight */}
        <line x1="-2" y1="-48" x2="-2" y2="5" stroke="#FFF8E1" strokeWidth="1.5" opacity="0.25" />
      </g>
      <text x="280" y="275" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fill="#F5E6D3" opacity="0.7">Citrine</text>

      {/* Rose Quartz Sphere */}
      <g transform="translate(415, 200)" filter="url(#qtype-shadow)">
        <circle cx="0" cy="0" r="38" fill="url(#qtype-rosequartz)" stroke="#EC407A" strokeWidth="0.5" />
        {/* Translucent sheen */}
        <circle cx="0" cy="0" r="38" fill="url(#qtype-rosequartz-sheen)" />
        {/* Asterism (star effect - some rose quartz has this) */}
        <line x1="-20" y1="0" x2="20" y2="0" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.15" />
        <line x1="0" y1="-20" x2="0" y2="20" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.15" />
        <line x1="-14" y1="-14" x2="14" y2="14" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.1" />
        <line x1="14" y1="-14" x2="-14" y2="14" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.1" />
        {/* Main highlight */}
        <ellipse cx="-10" cy="-12" rx="12" ry="8" fill="white" opacity="0.35" transform="rotate(-20)" />
        <circle cx="-8" cy="-14" r="4" fill="white" opacity="0.5" />
        {/* Rim light */}
        <path d="M-30,-22 Q-38,0 -30,22" fill="none" stroke="white" strokeWidth="1" opacity="0.1" />
      </g>
      <text x="415" y="275" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fill="#F5E6D3" opacity="0.7">Rose Quartz</text>

      {/* Clear Rock Crystal */}
      <g transform="translate(545, 185)" filter="url(#qtype-shadow)">
        {/* Hexagonal prism crystal */}
        <polygon
          points="0,-60 15,-50 18,-5 15,48 0,50 -15,48 -18,-5 -15,-50"
          fill="url(#qtype-clear)"
          stroke="#C0C0C8"
          strokeWidth="0.7"
          opacity="0.85"
        />
        {/* Facets - front face */}
        <polygon points="0,-60 15,-50 18,-5 0,-8" fill="url(#qtype-clear-facet)" opacity="0.7" />
        {/* Facets - side face */}
        <polygon points="0,-60 -15,-50 -18,-5 0,-8" fill="#D8D8E0" opacity="0.5" />
        {/* Termination */}
        <polygon points="0,-60 8,-52 0,-45 -8,-52" fill="white" opacity="0.5" />
        {/* Internal reflections / rainbow */}
        <polygon points="4,-30 10,-25 8,-15" fill="#FFB3B3" opacity="0.1" />
        <polygon points="-2,-20 4,-18 2,-10" fill="#B3D4FF" opacity="0.1" />
        <polygon points="-6,-15 -2,-18 -3,-8" fill="#B3FFB3" opacity="0.08" />
        {/* Striation lines (growth lines) */}
        <line x1="-12" y1="10" x2="12" y2="10" stroke="#C8C8D0" strokeWidth="0.3" opacity="0.4" />
        <line x1="-11" y1="20" x2="11" y2="20" stroke="#C8C8D0" strokeWidth="0.3" opacity="0.35" />
        <line x1="-10" y1="30" x2="10" y2="30" stroke="#C8C8D0" strokeWidth="0.3" opacity="0.3" />
        {/* Highlight */}
        <line x1="-3" y1="-52" x2="-3" y2="10" stroke="white" strokeWidth="2" opacity="0.2" />
        <ellipse cx="-5" cy="-35" rx="4" ry="3" fill="white" opacity="0.5" />
      </g>
      <text x="545" y="275" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fill="#F5E6D3" opacity="0.7">Rock Crystal</text>

      {/* Smoky Quartz */}
      <g transform="translate(680, 190)" filter="url(#qtype-shadow)">
        <polygon
          points="0,-50 14,-40 16,-5 14,45 0,48 -14,45 -16,-5 -14,-40"
          fill="url(#qtype-smoky)"
          stroke="#3E2723"
          strokeWidth="0.7"
        />
        <polygon points="0,-50 14,-40 0,-10" fill="url(#qtype-smoky-shine)" />
        <polygon points="0,-50 -14,-40 0,-10" fill="#5D4037" opacity="0.7" />
        {/* Termination */}
        <polygon points="0,-50 7,-43 0,-38 -7,-43" fill="#A1887F" opacity="0.5" />
        {/* Smoky internal zones */}
        <ellipse cx="0" cy="5" rx="8" ry="15" fill="#3E2723" opacity="0.2" />
        <ellipse cx="0" cy="20" rx="7" ry="10" fill="#4E342E" opacity="0.15" />
        {/* Highlight */}
        <line x1="-2" y1="-44" x2="-2" y2="5" stroke="#BCAAA4" strokeWidth="1.5" opacity="0.2" />
        <ellipse cx="-4" cy="-30" rx="3" ry="2" fill="white" opacity="0.25" />
      </g>
      <text x="680" y="275" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fill="#F5E6D3" opacity="0.7">Smoky Quartz</text>

      {/* === Wooden shelf divider === */}
      <rect x="40" y="295" width="720" height="8" rx="2" fill="url(#qtype-shelf)" />
      <rect x="40" y="296" width="720" height="2" fill="#E8D5C0" opacity="0.2" />

      {/* Section label: Microcrystalline / Cryptocrystalline */}
      <text x="400" y="320" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fill="#5C4033" opacity="0.5" fontStyle="italic">Microcrystalline Quartz</text>

      {/* Lower display surface */}
      <path
        d="M50,430 Q50,415 70,410 L730,410 Q750,415 750,430 L750,445 Q750,450 730,450 L70,450 Q50,450 50,445 Z"
        fill="url(#qtype-surface)"
        stroke="#5C4033"
        strokeWidth="1"
      />

      {/* === MICROCRYSTALLINE: Lower row === */}

      {/* Banded Agate Slice */}
      <g transform="translate(220, 375)" filter="url(#qtype-soft-shadow)">
        {/* Outer edge (rough geode edge) */}
        <ellipse cx="0" cy="0" rx="42" ry="40" fill="#795548" stroke="#5D4037" strokeWidth="1" />
        {/* Polished interior */}
        <g clipPath="url(#qtype-agate-clip)">
          {/* Concentric bands */}
          <ellipse cx="0" cy="0" rx="38" ry="36" fill="url(#qtype-agate-band1)" />
          <ellipse cx="1" cy="-1" rx="33" ry="31" fill="url(#qtype-agate-band2)" />
          <ellipse cx="1" cy="-1" rx="28" ry="26" fill="url(#qtype-agate-band4)" />
          <ellipse cx="2" cy="-2" rx="23" ry="21" fill="url(#qtype-agate-band3)" />
          <ellipse cx="2" cy="-2" rx="18" ry="16" fill="url(#qtype-agate-band1)" />
          <ellipse cx="2" cy="-2" rx="13" ry="11" fill="url(#qtype-agate-band2)" />
          <ellipse cx="3" cy="-3" rx="8" ry="7" fill="#EFEBE9" />
          {/* Center - druzy quartz crystals */}
          <ellipse cx="3" cy="-3" rx="4" ry="3.5" fill="#E0E0E0" />
          <circle cx="2" cy="-4" r="1" fill="white" opacity="0.6" />
          <circle cx="4" cy="-2" r="0.8" fill="white" opacity="0.5" />
          <circle cx="3" cy="-3" r="0.6" fill="white" opacity="0.7" />
        </g>
        {/* Surface polish shine */}
        <ellipse cx="-8" cy="-10" rx="10" ry="6" fill="white" opacity="0.15" transform="rotate(-15)" />
      </g>
      <text x="220" y="428" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fill="#F5E6D3" opacity="0.7">Agate</text>

      {/* Red Jasper Cabochon */}
      <g transform="translate(410, 378)" filter="url(#qtype-soft-shadow)">
        {/* Cabochon shape (dome) */}
        <ellipse cx="0" cy="3" rx="32" ry="8" fill="#3E2723" opacity="0.4" />
        <ellipse cx="0" cy="0" rx="32" ry="24" fill="url(#qtype-jasper)" stroke="#8B1A1A" strokeWidth="0.8" />
        {/* Natural inclusions/patterns */}
        <path d="M-10,5 Q-5,0 2,6 Q8,10 15,4" fill="none" stroke="#8B1A1A" strokeWidth="0.5" opacity="0.4" />
        <path d="M-15,-5 Q-8,-10 0,-4 Q5,0 12,-3" fill="none" stroke="#6D1414" strokeWidth="0.4" opacity="0.3" />
        {/* Subtle mottled texture dots */}
        <circle cx="-8" cy="-5" r="2" fill="#6D1414" opacity="0.2" />
        <circle cx="10" cy="3" r="3" fill="#C62828" opacity="0.15" />
        <circle cx="-3" cy="8" r="2.5" fill="#6D1414" opacity="0.15" />
        {/* Waxy luster highlight */}
        <ellipse cx="-6" cy="-8" rx="10" ry="6" fill="white" opacity="0.2" transform="rotate(-15)" />
        <ellipse cx="-4" cy="-9" rx="5" ry="3" fill="white" opacity="0.15" />
      </g>
      <text x="410" y="428" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fill="#F5E6D3" opacity="0.7">Red Jasper</text>

      {/* Blue Chalcedony */}
      <g transform="translate(590, 375)" filter="url(#qtype-soft-shadow)">
        {/* Cabochon / polished freeform */}
        <ellipse cx="0" cy="0" rx="30" ry="25" fill="url(#qtype-chalcedony)" stroke="#29B6F6" strokeWidth="0.5" />
        <ellipse cx="0" cy="0" rx="30" ry="25" fill="url(#qtype-chalcedony-sheen)" />
        {/* Translucent depth effect */}
        <ellipse cx="2" cy="2" rx="20" ry="16" fill="#4FC3F7" opacity="0.15" />
        <ellipse cx="3" cy="3" rx="12" ry="9" fill="#81D4FA" opacity="0.1" />
        {/* Waxy luster */}
        <ellipse cx="-6" cy="-8" rx="9" ry="5" fill="white" opacity="0.3" transform="rotate(-20)" />
        <circle cx="-4" cy="-9" r="3" fill="white" opacity="0.35" />
      </g>
      <text x="590" y="428" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fill="#F5E6D3" opacity="0.7">Chalcedony</text>

      {/* === SPARKLE EFFECTS === */}
      <g filter="url(#qtype-glow-white)">
        {/* On amethyst tips */}
        <circle cx="130" cy="128" r="3" fill="url(#qtype-sparkle)" />
        <line x1="130" y1="123" x2="130" y2="133" stroke="white" strokeWidth="1" opacity="0.8" />
        <line x1="125" y1="128" x2="135" y2="128" stroke="white" strokeWidth="1" opacity="0.8" />

        <circle cx="112" cy="150" r="2" fill="url(#qtype-sparkle)" />
        <circle cx="145" cy="145" r="2" fill="url(#qtype-sparkle)" />

        {/* On citrine tip */}
        <circle cx="280" cy="133" r="3" fill="url(#qtype-sparkle)" />
        <line x1="280" y1="128" x2="280" y2="138" stroke="white" strokeWidth="1" opacity="0.7" />
        <line x1="275" y1="133" x2="285" y2="133" stroke="white" strokeWidth="1" opacity="0.7" />

        {/* On rose quartz */}
        <circle cx="405" cy="186" r="2.5" fill="url(#qtype-sparkle)" />

        {/* On rock crystal */}
        <circle cx="540" cy="125" r="3" fill="url(#qtype-sparkle)" />
        <line x1="540" y1="120" x2="540" y2="130" stroke="white" strokeWidth="1" opacity="0.8" />
        <line x1="535" y1="125" x2="545" y2="125" stroke="white" strokeWidth="1" opacity="0.8" />

        <circle cx="548" cy="140" r="2" fill="url(#qtype-sparkle)" />

        {/* On smoky quartz */}
        <circle cx="676" cy="140" r="2" fill="url(#qtype-sparkle)" />

        {/* On agate druzy center */}
        <circle cx="223" cy="372" r="1.5" fill="url(#qtype-sparkle)" />

        {/* Floating sparkles in background */}
        <g>
          <line x1="350" y1="80" x2="354" y2="80" stroke="white" strokeWidth="1" opacity="0.4" />
          <line x1="352" y1="78" x2="352" y2="82" stroke="white" strokeWidth="1" opacity="0.4" />
        </g>
        <g>
          <line x1="480" y1="100" x2="484" y2="100" stroke="white" strokeWidth="1" opacity="0.35" />
          <line x1="482" y1="98" x2="482" y2="102" stroke="white" strokeWidth="1" opacity="0.35" />
        </g>
        <g>
          <line x1="720" y1="90" x2="724" y2="90" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="722" y1="88" x2="722" y2="92" stroke="white" strokeWidth="1" opacity="0.3" />
        </g>
        <g>
          <line x1="80" y1="70" x2="85" y2="70" stroke="white" strokeWidth="1.2" opacity="0.35" />
          <line x1="82.5" y1="67.5" x2="82.5" y2="72.5" stroke="white" strokeWidth="1.2" opacity="0.35" />
        </g>
      </g>

      {/* SiO2 formula watermark */}
      <text x="760" y="30" textAnchor="end" fontFamily="Georgia, serif" fontSize="12" fill="#5C4033" opacity="0.2">SiO&#x2082;</text>

      {/* Decorative borders */}
      <rect x="0" y="0" width="800" height="3" fill="#5C4033" opacity="0.2" />
      <rect x="0" y="447" width="800" height="3" fill="#5C4033" opacity="0.2" />
    </svg>
  );
};

export default QuartzTypesHero;
