import React from "react";

interface PreciousGemsHeroProps {
  className?: string;
}

const PreciousGemsHero: React.FC<PreciousGemsHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Precious and semi-precious gemstones arranged to show their diversity"
    >
      <defs>
        {/* Background gradient */}
        <radialGradient id="prec-bg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="60%" stopColor="#E8D5C0" />
          <stop offset="100%" stopColor="#D2B48C" />
        </radialGradient>

        {/* Velvet display surface */}
        <linearGradient id="prec-velvet" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D2B1F" />
          <stop offset="50%" stopColor="#2C1E14" />
          <stop offset="100%" stopColor="#1A110B" />
        </linearGradient>

        {/* Pedestal gradient */}
        <linearGradient id="prec-pedestal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D2B48C" />
          <stop offset="40%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#5C4033" />
        </linearGradient>
        <linearGradient id="prec-pedestal-top" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8D5C0" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>

        {/* Diamond gradients */}
        <linearGradient id="prec-diamond" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#E8E8F0" />
          <stop offset="50%" stopColor="#D0D0E0" />
          <stop offset="75%" stopColor="#E8E8F0" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="prec-diamond-facet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0F0FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#C8C8E0" stopOpacity="0.7" />
        </linearGradient>

        {/* Ruby gradient */}
        <linearGradient id="prec-ruby" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1744" />
          <stop offset="30%" stopColor="#D50000" />
          <stop offset="70%" stopColor="#B71C1C" />
          <stop offset="100%" stopColor="#880E0E" />
        </linearGradient>
        <linearGradient id="prec-ruby-shine" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D50000" stopOpacity="0.3" />
        </linearGradient>

        {/* Sapphire gradient */}
        <linearGradient id="prec-sapphire" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#448AFF" />
          <stop offset="30%" stopColor="#2962FF" />
          <stop offset="70%" stopColor="#1A237E" />
          <stop offset="100%" stopColor="#0D1B60" />
        </linearGradient>
        <linearGradient id="prec-sapphire-shine" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#82B1FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2962FF" stopOpacity="0.3" />
        </linearGradient>

        {/* Emerald gradient */}
        <linearGradient id="prec-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="30%" stopColor="#00C853" />
          <stop offset="70%" stopColor="#2E7D32" />
          <stop offset="100%" stopColor="#1B5E20" />
        </linearGradient>
        <linearGradient id="prec-emerald-shine" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#69F0AE" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#2E7D32" stopOpacity="0.3" />
        </linearGradient>

        {/* Alexandrite gradient (color-change effect: teal to purple) */}
        <linearGradient id="prec-alexandrite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00897B" />
          <stop offset="35%" stopColor="#26A69A" />
          <stop offset="65%" stopColor="#7B1FA2" />
          <stop offset="100%" stopColor="#4A148C" />
        </linearGradient>
        <linearGradient id="prec-alexandrite-shine" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#80CBC4" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#CE93D8" stopOpacity="0.4" />
        </linearGradient>

        {/* Paraiba tourmaline gradient (neon blue-green) */}
        <linearGradient id="prec-paraiba" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5FF" />
          <stop offset="30%" stopColor="#00BCD4" />
          <stop offset="70%" stopColor="#00838F" />
          <stop offset="100%" stopColor="#006064" />
        </linearGradient>
        <radialGradient id="prec-paraiba-glow" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#84FFFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00BCD4" stopOpacity="0" />
        </radialGradient>

        {/* Opal gradient (play of color) */}
        <linearGradient id="prec-opal-base" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F5F5" />
          <stop offset="50%" stopColor="#E8E0D8" />
          <stop offset="100%" stopColor="#F0EAE2" />
        </linearGradient>
        <linearGradient id="prec-opal-fire1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.4" />
          <stop offset="30%" stopColor="#FFD54F" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#69F0AE" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#448AFF" stopOpacity="0.3" />
        </linearGradient>

        {/* Tanzanite gradient (violet-blue) */}
        <linearGradient id="prec-tanzanite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C4DFF" />
          <stop offset="30%" stopColor="#651FFF" />
          <stop offset="70%" stopColor="#4527A0" />
          <stop offset="100%" stopColor="#311B92" />
        </linearGradient>
        <linearGradient id="prec-tanzanite-shine" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#B388FF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#651FFF" stopOpacity="0.3" />
        </linearGradient>

        {/* Sparkle */}
        <radialGradient id="prec-sparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Shadow and glow filters */}
        <filter id="prec-shadow">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#1A110B" floodOpacity="0.5" />
        </filter>
        <filter id="prec-glow-white">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="prec-glow-neon">
          <feGaussianBlur stdDeviation="5" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="prec-soft-shadow">
          <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="#1A110B" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="url(#prec-bg)" />

      {/* Soft ambient light circles */}
      <circle cx="200" cy="120" r="200" fill="#8B6914" opacity="0.04" />
      <circle cx="600" cy="150" r="220" fill="#6B8E23" opacity="0.03" />
      <circle cx="400" cy="80" r="180" fill="#D2B48C" opacity="0.06" />

      {/* Dividing line / subtle visual separator */}
      <line x1="400" y1="100" x2="400" y2="430" stroke="#5C4033" strokeWidth="1" opacity="0.12" strokeDasharray="4 6" />

      {/* === LEFT SIDE: "Precious" Stones on elevated pedestal === */}

      {/* Label: "Precious" */}
      <text x="200" y="60" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fill="#5C4033" opacity="0.7" fontStyle="italic">&ldquo;Precious&rdquo;</text>

      {/* Pedestal structure */}
      <path
        d="M60,250 L340,250 L330,400 Q330,420 310,420 L90,420 Q70,420 70,400 Z"
        fill="url(#prec-pedestal)"
        stroke="#5C4033"
        strokeWidth="1.5"
      />
      {/* Pedestal top surface */}
      <ellipse cx="200" cy="250" rx="142" ry="18" fill="url(#prec-pedestal-top)" stroke="#8B6914" strokeWidth="1" />
      {/* Pedestal highlight */}
      <ellipse cx="200" cy="248" rx="120" ry="10" fill="#F5E6D3" opacity="0.15" />

      {/* Velvet pad on pedestal */}
      <ellipse cx="200" cy="245" rx="110" ry="12" fill="url(#prec-velvet)" />

      {/* Diamond on pedestal */}
      <g transform="translate(130, 210)" filter="url(#prec-shadow)">
        <polygon
          points="0,-42 24,-27 33,-6 27,18 0,33 -27,18 -33,-6 -24,-27"
          fill="url(#prec-diamond)"
          stroke="#C0C0C8"
          strokeWidth="1"
        />
        <polygon points="0,-42 24,-27 12,-18 0,-21" fill="#E8E8FF" opacity="0.8" />
        <polygon points="0,-42 -24,-27 -12,-18 0,-21" fill="#D0D0E8" opacity="0.7" />
        <polygon points="24,-27 33,-6 17,-9 12,-18" fill="url(#prec-diamond-facet)" />
        <polygon points="-24,-27 -33,-6 -17,-9 -12,-18" fill="#C8C8E0" opacity="0.6" />
        <polygon points="33,-6 27,18 12,3 17,-9" fill="#E0E0F0" opacity="0.5" />
        <polygon points="-33,-6 -27,18 -12,3 -17,-9" fill="#D8D8E8" opacity="0.45" />
        <polygon points="27,18 0,33 0,3 12,3" fill="#C8C8E0" opacity="0.4" />
        <polygon points="-27,18 0,33 0,3 -12,3" fill="#E0E0F0" opacity="0.35" />
        {/* Table facet */}
        <polygon
          points="0,-21 12,-18 17,-9 12,3 0,3 -12,3 -17,-9 -12,-18"
          fill="white"
          opacity="0.35"
        />
        {/* Rainbow refraction */}
        <polygon points="6,-15 12,-12 9,-6" fill="#FFB3B3" opacity="0.2" />
        <polygon points="-3,-12 3,-11 1,-6" fill="#B3D4FF" opacity="0.2" />
        <polygon points="-9,-9 -5,-11 -6,-5" fill="#B3FFB3" opacity="0.15" />
        {/* Shine */}
        <ellipse cx="-5" cy="-18" rx="5" ry="3" fill="white" opacity="0.6" />
        <circle cx="-3" cy="-19" r="2" fill="white" opacity="0.8" />
      </g>

      {/* Ruby on pedestal */}
      <g transform="translate(210, 215)" filter="url(#prec-shadow)">
        <ellipse cx="0" cy="0" rx="28" ry="23" fill="url(#prec-ruby)" stroke="#880E0E" strokeWidth="1" />
        <ellipse cx="0" cy="0" rx="20" ry="16" fill="none" stroke="#FF1744" strokeWidth="0.5" opacity="0.4" />
        <path d="M-20,-7 L-10,-17 L0,-19 L10,-17 L20,-7" fill="url(#prec-ruby-shine)" opacity="0.5" />
        <ellipse cx="-3" cy="-5" rx="10" ry="7" fill="#FF6B6B" opacity="0.25" />
        <ellipse cx="-5" cy="-7" rx="5" ry="3" fill="white" opacity="0.3" transform="rotate(-20)" />
      </g>

      {/* Sapphire on pedestal */}
      <g transform="translate(275, 210)" filter="url(#prec-shadow)">
        <ellipse cx="0" cy="0" rx="24" ry="21" fill="url(#prec-sapphire)" stroke="#0D1B60" strokeWidth="1" />
        <polygon points="0,-21 14,-13 9,-4 0,-6" fill="url(#prec-sapphire-shine)" opacity="0.6" />
        <polygon points="0,-21 -14,-13 -9,-4 0,-6" fill="#448AFF" opacity="0.4" />
        <polygon points="14,-13 24,0 11,4 9,-4" fill="#2962FF" opacity="0.35" />
        <polygon points="-14,-13 -24,0 -11,4 -9,-4" fill="#1A237E" opacity="0.3" />
        <polygon points="24,0 14,14 7,6 11,4" fill="#448AFF" opacity="0.25" />
        <polygon points="-24,0 -14,14 -7,6 -11,4" fill="#2962FF" opacity="0.3" />
        <ellipse cx="-4" cy="-9" rx="5" ry="3" fill="white" opacity="0.35" transform="rotate(-15)" />
      </g>

      {/* Emerald on pedestal */}
      <g transform="translate(170, 195)" filter="url(#prec-shadow)">
        <polygon
          points="0,-28 22,-22 25,-3 22,16 0,22 -22,16 -25,-3 -22,-22"
          fill="url(#prec-emerald)"
          stroke="#1B5E20"
          strokeWidth="1"
        />
        <polygon points="0,-28 22,-22 16,-16 0,-19 -16,-16 -22,-22" fill="url(#prec-emerald-shine)" opacity="0.5" />
        <polygon points="0,-19 16,-16 13,-8 0,-11 -13,-8 -16,-16" fill="#00E676" opacity="0.3" />
        <polygon points="0,-11 13,-8 12,2 0,-2 -12,2 -13,-8" fill="#00C853" opacity="0.2" />
        {/* Garden inclusions */}
        <path d="M-3,3 Q1,0 3,5 Q5,8 2,7" fill="none" stroke="#1B5E20" strokeWidth="0.4" opacity="0.4" />
        <ellipse cx="-5" cy="-14" rx="6" ry="3" fill="white" opacity="0.25" transform="rotate(-10)" />
      </g>

      {/* === RIGHT SIDE: "Semi-Precious" Stones at same level (no pedestal) === */}

      {/* Label: "Semi-Precious" with question mark */}
      <text x="600" y="60" textAnchor="middle" fontFamily="Georgia, serif" fontSize="18" fill="#5C4033" opacity="0.7" fontStyle="italic">&ldquo;Semi-Precious&rdquo;?</text>

      {/* Display surface for right side - same level, dark velvet */}
      <path
        d="M430,300 Q430,280 450,275 L750,275 Q770,280 770,300 L770,420 Q770,430 750,430 L450,430 Q430,430 430,420 Z"
        fill="url(#prec-velvet)"
        stroke="#5C4033"
        strokeWidth="1.5"
      />
      <path
        d="M450,285 L750,285 L760,300 L440,300 Z"
        fill="#3D2B1F"
        opacity="0.4"
      />

      {/* Alexandrite (color-change gem) */}
      <g transform="translate(500, 350)" filter="url(#prec-shadow)">
        <ellipse cx="0" cy="0" rx="30" ry="25" fill="url(#prec-alexandrite)" stroke="#004D40" strokeWidth="1" />
        <ellipse cx="0" cy="-2" rx="22" ry="17" fill="none" stroke="#26A69A" strokeWidth="0.5" opacity="0.4" />
        <path d="M-18,-8 L-8,-18 L0,-20 L8,-18 L18,-8" fill="url(#prec-alexandrite-shine)" opacity="0.5" />
        {/* Color-change shimmer zones */}
        <ellipse cx="-8" cy="-3" rx="12" ry="10" fill="#00897B" opacity="0.3" />
        <ellipse cx="8" cy="2" rx="12" ry="10" fill="#7B1FA2" opacity="0.25" />
        <ellipse cx="-4" cy="-8" rx="5" ry="3" fill="white" opacity="0.3" transform="rotate(-15)" />
        {/* Subtle color-change arrows/label effect */}
        <circle cx="0" cy="0" r="5" fill="#80CBC4" opacity="0.15" />
      </g>

      {/* Paraiba Tourmaline (neon glow) */}
      <g transform="translate(590, 360)" filter="url(#prec-soft-shadow)">
        {/* Neon outer glow */}
        <ellipse cx="0" cy="0" rx="34" ry="29" fill="#00E5FF" opacity="0.08" filter="url(#prec-glow-neon)" />
        <ellipse cx="0" cy="0" rx="27" ry="22" fill="url(#prec-paraiba)" stroke="#006064" strokeWidth="1" />
        <ellipse cx="0" cy="0" rx="27" ry="22" fill="url(#prec-paraiba-glow)" />
        {/* Facets */}
        <polygon points="0,-22 16,-14 10,-5 0,-7" fill="#84FFFF" opacity="0.4" />
        <polygon points="0,-22 -16,-14 -10,-5 0,-7" fill="#00BCD4" opacity="0.35" />
        <polygon points="16,-14 27,0 13,3 10,-5" fill="#00838F" opacity="0.3" />
        <polygon points="-16,-14 -27,0 -13,3 -10,-5" fill="#00E5FF" opacity="0.25" />
        {/* Electric glow highlight */}
        <ellipse cx="-5" cy="-9" rx="6" ry="3" fill="white" opacity="0.45" transform="rotate(-10)" />
        <circle cx="-3" cy="-10" r="2" fill="white" opacity="0.6" />
      </g>

      {/* Opal (play of color) */}
      <g transform="translate(680, 350)" filter="url(#prec-shadow)">
        <ellipse cx="0" cy="0" rx="28" ry="22" fill="url(#prec-opal-base)" stroke="#BDB9B2" strokeWidth="1" />
        {/* Play of color patches */}
        <ellipse cx="0" cy="0" rx="28" ry="22" fill="url(#prec-opal-fire1)" />
        <ellipse cx="-8" cy="-4" rx="8" ry="5" fill="#FF6B6B" opacity="0.25" transform="rotate(10)" />
        <ellipse cx="6" cy="2" rx="7" ry="5" fill="#448AFF" opacity="0.2" transform="rotate(-15)" />
        <ellipse cx="-2" cy="6" rx="9" ry="4" fill="#69F0AE" opacity="0.22" transform="rotate(5)" />
        <ellipse cx="10" cy="-6" rx="6" ry="4" fill="#FFD54F" opacity="0.25" transform="rotate(-5)" />
        <ellipse cx="-12" cy="3" rx="5" ry="3" fill="#CE93D8" opacity="0.2" />
        {/* Pearlescent sheen */}
        <ellipse cx="-5" cy="-8" rx="8" ry="4" fill="white" opacity="0.35" transform="rotate(-20)" />
        <circle cx="-3" cy="-9" r="2" fill="white" opacity="0.5" />
      </g>

      {/* Tanzanite */}
      <g transform="translate(540, 395)" filter="url(#prec-shadow)">
        <polygon
          points="0,-26 22,-16 26,2 20,18 0,24 -20,18 -26,2 -22,-16"
          fill="url(#prec-tanzanite)"
          stroke="#311B92"
          strokeWidth="1"
        />
        <polygon points="0,-26 22,-16 14,-10 0,-13 -14,-10 -22,-16" fill="url(#prec-tanzanite-shine)" opacity="0.5" />
        <polygon points="0,-13 14,-10 11,-3 0,-5 -11,-3 -14,-10" fill="#7C4DFF" opacity="0.3" />
        {/* Trichroism shimmer */}
        <ellipse cx="-6" cy="-2" rx="8" ry="6" fill="#7C4DFF" opacity="0.2" />
        <ellipse cx="5" cy="3" rx="7" ry="5" fill="#304FFE" opacity="0.15" />
        <ellipse cx="-4" cy="-10" rx="5" ry="3" fill="white" opacity="0.3" transform="rotate(-10)" />
      </g>

      {/* === Comparison indicator: subtle "equals" or "balance" visual === */}
      {/* Balance scale icon at top center */}
      <g transform="translate(400, 90)" opacity="0.35">
        <line x1="0" y1="-15" x2="0" y2="15" stroke="#5C4033" strokeWidth="2" />
        <line x1="-30" y1="-12" x2="30" y2="-12" stroke="#5C4033" strokeWidth="2" />
        {/* Left pan */}
        <line x1="-30" y1="-12" x2="-35" y2="0" stroke="#5C4033" strokeWidth="1.5" />
        <path d="M-45,0 Q-35,6 -25,0" fill="none" stroke="#5C4033" strokeWidth="1.5" />
        {/* Right pan */}
        <line x1="30" y1="-12" x2="35" y2="0" stroke="#5C4033" strokeWidth="1.5" />
        <path d="M25,0 Q35,6 45,0" fill="none" stroke="#5C4033" strokeWidth="1.5" />
        {/* Triangle base */}
        <polygon points="-6,15 6,15 0,8" fill="#5C4033" />
      </g>

      {/* === SPARKLE EFFECTS === */}
      <g filter="url(#prec-glow-white)">
        {/* On diamond */}
        <circle cx="125" cy="175" r="3" fill="url(#prec-sparkle)" />
        <line x1="125" y1="170" x2="125" y2="180" stroke="white" strokeWidth="1" opacity="0.8" />
        <line x1="120" y1="175" x2="130" y2="175" stroke="white" strokeWidth="1" opacity="0.8" />

        {/* On ruby */}
        <circle cx="205" cy="205" r="2.5" fill="url(#prec-sparkle)" />

        {/* On emerald */}
        <circle cx="163" cy="180" r="2.5" fill="url(#prec-sparkle)" />

        {/* On sapphire */}
        <circle cx="270" cy="199" r="2.5" fill="url(#prec-sparkle)" />

        {/* On alexandrite */}
        <circle cx="493" cy="338" r="2.5" fill="url(#prec-sparkle)" />

        {/* On paraiba */}
        <circle cx="585" cy="348" r="3" fill="url(#prec-sparkle)" />
        <line x1="585" y1="343" x2="585" y2="353" stroke="white" strokeWidth="1" opacity="0.7" />
        <line x1="580" y1="348" x2="590" y2="348" stroke="white" strokeWidth="1" opacity="0.7" />

        {/* On opal */}
        <circle cx="675" cy="340" r="2" fill="url(#prec-sparkle)" />

        {/* On tanzanite */}
        <circle cx="536" cy="382" r="2.5" fill="url(#prec-sparkle)" />

        {/* Floating sparkles */}
        <g>
          <line x1="340" y1="160" x2="344" y2="160" stroke="white" strokeWidth="1" opacity="0.4" />
          <line x1="342" y1="158" x2="342" y2="162" stroke="white" strokeWidth="1" opacity="0.4" />
        </g>
        <g>
          <line x1="460" y1="180" x2="464" y2="180" stroke="white" strokeWidth="1" opacity="0.35" />
          <line x1="462" y1="178" x2="462" y2="182" stroke="white" strokeWidth="1" opacity="0.35" />
        </g>
        <g>
          <line x1="700" y1="260" x2="705" y2="260" stroke="white" strokeWidth="1.2" opacity="0.4" />
          <line x1="702.5" y1="257.5" x2="702.5" y2="262.5" stroke="white" strokeWidth="1.2" opacity="0.4" />
        </g>
      </g>

      {/* Subtle gem name labels */}
      <g fontFamily="Georgia, serif" fontSize="10" fill="#F5E6D3" opacity="0.6">
        {/* Left side labels */}
        <text x="130" y="247" textAnchor="middle">Diamond</text>
        <text x="210" y="247" textAnchor="middle">Ruby</text>
        <text x="170" y="227" textAnchor="middle">Emerald</text>
        <text x="275" y="240" textAnchor="middle">Sapphire</text>

        {/* Right side labels */}
        <text x="500" y="385" textAnchor="middle">Alexandrite</text>
        <text x="590" y="392" textAnchor="middle">Paraiba</text>
        <text x="680" y="382" textAnchor="middle">Opal</text>
        <text x="540" y="428" textAnchor="middle">Tanzanite</text>
      </g>

      {/* Top and bottom border accents */}
      <rect x="0" y="0" width="800" height="3" fill="#5C4033" opacity="0.2" />
      <rect x="0" y="447" width="800" height="3" fill="#5C4033" opacity="0.2" />
    </svg>
  );
};

export default PreciousGemsHero;
