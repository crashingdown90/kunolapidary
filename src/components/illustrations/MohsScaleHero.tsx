import React from "react";

interface MohsScaleHeroProps {
  className?: string;
}

const MohsScaleHero: React.FC<MohsScaleHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Visual representation of the Mohs hardness scale from talc to diamond"
    >
      <defs>
        {/* Background gradient: soft left to hard right */}
        <linearGradient id="mohs-bg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="30%" stopColor="#E8D5C0" />
          <stop offset="60%" stopColor="#D2B48C" />
          <stop offset="85%" stopColor="#8B6914" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#5C4033" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="mohs-bg-vert" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.5" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        {/* Scale bar gradient */}
        <linearGradient id="mohs-bar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8D5C0" />
          <stop offset="20%" stopColor="#D2B48C" />
          <stop offset="50%" stopColor="#8B6914" />
          <stop offset="80%" stopColor="#5C4033" />
          <stop offset="100%" stopColor="#2D1810" />
        </linearGradient>
        <linearGradient id="mohs-bar-top" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#8B6914" stopOpacity="0.2" />
        </linearGradient>

        {/* Talc (1) - soft white/green */}
        <linearGradient id="mohs-talc" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="50%" stopColor="#E8E8E0" />
          <stop offset="100%" stopColor="#C8C8B8" />
        </linearGradient>

        {/* Gypsum (2) - translucent */}
        <linearGradient id="mohs-gypsum" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#F0EDE8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E0D8D0" stopOpacity="0.7" />
        </linearGradient>

        {/* Calcite (3) - warm white */}
        <linearGradient id="mohs-calcite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E1" />
          <stop offset="50%" stopColor="#F5E6D3" />
          <stop offset="100%" stopColor="#E8D5C0" />
        </linearGradient>

        {/* Fluorite (4) - purple/green */}
        <linearGradient id="mohs-fluorite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CE93D8" />
          <stop offset="40%" stopColor="#9C27B0" />
          <stop offset="70%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>

        {/* Apatite (5) - blue-green */}
        <linearGradient id="mohs-apatite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#80DEEA" />
          <stop offset="50%" stopColor="#26C6DA" />
          <stop offset="100%" stopColor="#00838F" />
        </linearGradient>

        {/* Feldspar/Orthoclase (6) - peachy tan */}
        <linearGradient id="mohs-feldspar" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFCCBC" />
          <stop offset="50%" stopColor="#FF8A65" />
          <stop offset="100%" stopColor="#D84315" />
        </linearGradient>

        {/* Quartz (7) - clear crystal */}
        <linearGradient id="mohs-quartz" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#F0F0F5" />
          <stop offset="50%" stopColor="#E0E0E8" />
          <stop offset="75%" stopColor="#F0F0F5" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="mohs-quartz-facet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D0D0DD" stopOpacity="0.4" />
        </linearGradient>

        {/* Topaz (8) - golden blue */}
        <linearGradient id="mohs-topaz" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#81D4FA" />
          <stop offset="40%" stopColor="#4FC3F7" />
          <stop offset="70%" stopColor="#FFB74D" />
          <stop offset="100%" stopColor="#FF9800" />
        </linearGradient>

        {/* Corundum (9) - ruby red and sapphire blue */}
        <linearGradient id="mohs-ruby" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1744" />
          <stop offset="40%" stopColor="#D50000" />
          <stop offset="100%" stopColor="#880E0E" />
        </linearGradient>
        <linearGradient id="mohs-sapphire" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#448AFF" />
          <stop offset="40%" stopColor="#2962FF" />
          <stop offset="100%" stopColor="#0D1B60" />
        </linearGradient>

        {/* Diamond (10) - brilliant */}
        <linearGradient id="mohs-diamond" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="20%" stopColor="#E8E8F0" />
          <stop offset="40%" stopColor="#F8F8FF" />
          <stop offset="60%" stopColor="#D8D8E8" />
          <stop offset="80%" stopColor="#F0F0FF" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="mohs-diamond-facet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0F0FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#C8C8E0" stopOpacity="0.6" />
        </linearGradient>

        {/* Sparkle */}
        <radialGradient id="mohs-sparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Filters */}
        <filter id="mohs-shadow">
          <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#1A110B" floodOpacity="0.45" />
        </filter>
        <filter id="mohs-soft-shadow">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#1A110B" floodOpacity="0.3" />
        </filter>
        <filter id="mohs-glow-white">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="mohs-diamond-glow">
          <feGaussianBlur stdDeviation="4" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="url(#mohs-bg)" />
      <rect width="800" height="450" fill="url(#mohs-bg-vert)" />

      {/* Subtle ambient circles */}
      <circle cx="100" cy="200" r="150" fill="#6B8E23" opacity="0.03" />
      <circle cx="400" cy="150" r="200" fill="#D2B48C" opacity="0.05" />
      <circle cx="720" cy="180" r="160" fill="#8B6914" opacity="0.04" />

      {/* Title */}
      <text x="400" y="38" textAnchor="middle" fontFamily="Georgia, serif" fontSize="20" fill="#2D1810" opacity="0.7">Mohs Scale of Mineral Hardness</text>

      {/* Hardness direction arrow */}
      <g opacity="0.3">
        <line x1="60" y1="65" x2="740" y2="65" stroke="#5C4033" strokeWidth="1.5" />
        <polygon points="740,65 730,60 730,70" fill="#5C4033" />
        <text x="60" y="60" fontFamily="Georgia, serif" fontSize="10" fill="#5C4033">Softer</text>
        <text x="740" y="60" textAnchor="end" fontFamily="Georgia, serif" fontSize="10" fill="#5C4033">Harder</text>
      </g>

      {/* === SCALE BAR === */}
      <rect x="40" y="340" width="720" height="18" rx="4" fill="url(#mohs-bar)" stroke="#5C4033" strokeWidth="1" />
      <rect x="40" y="340" width="720" height="6" rx="2" fill="url(#mohs-bar-top)" />

      {/* Scale divisions and number labels */}
      {/* Each mineral gets ~72px of width across the 720px bar, starting at x=40 */}

      {/* === 1: TALC === */}
      <g>
        <line x1="76" y1="335" x2="76" y2="365" stroke="#5C4033" strokeWidth="1" opacity="0.5" />
        <text x="76" y="385" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontWeight="bold" fill="#5C4033">1</text>
        <text x="76" y="400" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="#5C4033" opacity="0.7">Talc</text>

        {/* Talc mineral - soft flaky mass */}
        <g transform="translate(76, 240)" filter="url(#mohs-soft-shadow)">
          <ellipse cx="0" cy="0" rx="22" ry="16" fill="url(#mohs-talc)" stroke="#C8C8B8" strokeWidth="0.5" />
          {/* Layered flaky texture */}
          <path d="M-15,-5 Q-5,-10 10,-6 Q15,-3 12,2" fill="none" stroke="#D0D0C0" strokeWidth="0.5" opacity="0.6" />
          <path d="M-12,0 Q0,-4 8,0 Q12,3 8,5" fill="none" stroke="#D0D0C0" strokeWidth="0.5" opacity="0.5" />
          <path d="M-10,5 Q2,2 10,5" fill="none" stroke="#D0D0C0" strokeWidth="0.5" opacity="0.4" />
          {/* Pearly sheen */}
          <ellipse cx="-4" cy="-4" rx="8" ry="5" fill="white" opacity="0.3" transform="rotate(-10)" />
        </g>
      </g>

      {/* === 2: GYPSUM === */}
      <g>
        <line x1="148" y1="335" x2="148" y2="365" stroke="#5C4033" strokeWidth="1" opacity="0.5" />
        <text x="148" y="385" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontWeight="bold" fill="#5C4033">2</text>
        <text x="148" y="400" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="#5C4033" opacity="0.7">Gypsum</text>

        {/* Gypsum - translucent selenite blade */}
        <g transform="translate(148, 230)" filter="url(#mohs-soft-shadow)">
          <polygon
            points="0,-28 10,-22 12,5 10,25 0,30 -10,25 -12,5 -10,-22"
            fill="url(#mohs-gypsum)"
            stroke="#D0C8C0"
            strokeWidth="0.5"
          />
          {/* Translucent inner glow */}
          <polygon
            points="0,-22 7,-18 8,5 7,20 0,23 -7,20 -8,5 -7,-18"
            fill="white"
            opacity="0.2"
          />
          {/* Cleavage lines */}
          <line x1="-6" y1="-15" x2="-6" y2="18" stroke="#E0D8D0" strokeWidth="0.3" opacity="0.5" />
          <line x1="0" y1="-20" x2="0" y2="22" stroke="#E0D8D0" strokeWidth="0.3" opacity="0.4" />
          <line x1="6" y1="-15" x2="6" y2="18" stroke="#E0D8D0" strokeWidth="0.3" opacity="0.3" />
          <ellipse cx="-2" cy="-10" rx="4" ry="3" fill="white" opacity="0.35" />
        </g>
      </g>

      {/* === 3: CALCITE === */}
      <g>
        <line x1="220" y1="335" x2="220" y2="365" stroke="#5C4033" strokeWidth="1" opacity="0.5" />
        <text x="220" y="385" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontWeight="bold" fill="#5C4033">3</text>
        <text x="220" y="400" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="#5C4033" opacity="0.7">Calcite</text>

        {/* Calcite rhombohedron */}
        <g transform="translate(220, 235)" filter="url(#mohs-soft-shadow)">
          <polygon
            points="0,-22 18,-12 18,10 0,22 -18,10 -18,-12"
            fill="url(#mohs-calcite)"
            stroke="#D2B48C"
            strokeWidth="0.7"
          />
          {/* Top face */}
          <polygon points="0,-22 18,-12 6,-6 -12,-14" fill="#FFF8E1" opacity="0.5" />
          {/* Side face light */}
          <polygon points="18,-12 18,10 6,16 6,-6" fill="#F5E6D3" opacity="0.4" />
          {/* Side face dark */}
          <polygon points="0,-22 -12,-14 -18,-12 -18,10 0,22 6,16 6,-6 -12,-14" fill="#E8D5C0" opacity="0.3" />
          <ellipse cx="-2" cy="-10" rx="5" ry="3" fill="white" opacity="0.25" />
        </g>
      </g>

      {/* === 4: FLUORITE === */}
      <g>
        <line x1="292" y1="335" x2="292" y2="365" stroke="#5C4033" strokeWidth="1" opacity="0.5" />
        <text x="292" y="385" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontWeight="bold" fill="#5C4033">4</text>
        <text x="292" y="400" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="#5C4033" opacity="0.7">Fluorite</text>

        {/* Fluorite octahedron */}
        <g transform="translate(292, 235)" filter="url(#mohs-soft-shadow)">
          {/* Cube-like shape */}
          <polygon
            points="0,-24 20,-8 20,12 0,24 -20,12 -20,-8"
            fill="url(#mohs-fluorite)"
            stroke="#2E7D32"
            strokeWidth="0.7"
          />
          {/* Facets */}
          <polygon points="0,-24 20,-8 0,-2" fill="#CE93D8" opacity="0.5" />
          <polygon points="0,-24 -20,-8 0,-2" fill="#9C27B0" opacity="0.4" />
          <polygon points="20,-8 20,12 8,6 0,-2" fill="#4CAF50" opacity="0.35" />
          <polygon points="-20,-8 -20,12 -8,6 0,-2" fill="#2E7D32" opacity="0.3" />
          <ellipse cx="-4" cy="-10" rx="4" ry="3" fill="white" opacity="0.25" />
        </g>
      </g>

      {/* === 5: APATITE === */}
      <g>
        <line x1="364" y1="335" x2="364" y2="365" stroke="#5C4033" strokeWidth="1" opacity="0.5" />
        <text x="364" y="385" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontWeight="bold" fill="#5C4033">5</text>
        <text x="364" y="400" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="#5C4033" opacity="0.7">Apatite</text>

        {/* Apatite hexagonal crystal */}
        <g transform="translate(364, 230)" filter="url(#mohs-soft-shadow)">
          <polygon
            points="0,-28 14,-20 14,18 0,26 -14,18 -14,-20"
            fill="url(#mohs-apatite)"
            stroke="#00838F"
            strokeWidth="0.7"
          />
          {/* Crystal faces */}
          <polygon points="0,-28 14,-20 0,-14" fill="#80DEEA" opacity="0.6" />
          <polygon points="0,-28 -14,-20 0,-14" fill="#26C6DA" opacity="0.5" />
          <polygon points="14,-20 14,18 4,12 0,-14" fill="#00838F" opacity="0.4" />
          <polygon points="-14,-20 -14,18 -4,12 0,-14" fill="#26C6DA" opacity="0.35" />
          {/* Vitreous luster highlight */}
          <ellipse cx="-3" cy="-14" rx="4" ry="3" fill="white" opacity="0.3" />
        </g>
      </g>

      {/* === 6: FELDSPAR (Orthoclase) === */}
      <g>
        <line x1="436" y1="335" x2="436" y2="365" stroke="#5C4033" strokeWidth="1" opacity="0.5" />
        <text x="436" y="385" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontWeight="bold" fill="#5C4033">6</text>
        <text x="436" y="400" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="#5C4033" opacity="0.7">Feldspar</text>

        {/* Orthoclase feldspar - blocky crystal */}
        <g transform="translate(436, 235)" filter="url(#mohs-soft-shadow)">
          <polygon
            points="-16,-22 12,-22 20,-10 16,20 -12,22 -22,8"
            fill="url(#mohs-feldspar)"
            stroke="#D84315"
            strokeWidth="0.7"
          />
          {/* Cleavage face */}
          <polygon points="-16,-22 12,-22 8,-8 -12,-10" fill="#FFCCBC" opacity="0.5" />
          <polygon points="12,-22 20,-10 10,8 8,-8" fill="#FF8A65" opacity="0.4" />
          {/* Twinning plane */}
          <line x1="-2" y1="-22" x2="2" y2="22" stroke="#BF360C" strokeWidth="0.5" opacity="0.3" />
          <ellipse cx="-4" cy="-12" rx="5" ry="3" fill="white" opacity="0.2" />
        </g>
      </g>

      {/* === 7: QUARTZ - Emphasized === */}
      <g>
        <line x1="508" y1="335" x2="508" y2="365" stroke="#5C4033" strokeWidth="1" opacity="0.5" />
        <text x="508" y="385" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontWeight="bold" fill="#5C4033">7</text>
        <text x="508" y="400" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="#5C4033" opacity="0.7">Quartz</text>

        {/* Quartz crystal - larger and more detailed */}
        <g transform="translate(508, 210)" filter="url(#mohs-shadow)">
          <polygon
            points="0,-55 16,-42 18,-5 16,48 0,52 -16,48 -18,-5 -16,-42"
            fill="url(#mohs-quartz)"
            stroke="#C0C0C8"
            strokeWidth="0.7"
          />
          {/* Facets */}
          <polygon points="0,-55 16,-42 0,-15" fill="url(#mohs-quartz-facet)" opacity="0.7" />
          <polygon points="0,-55 -16,-42 0,-15" fill="#D8D8E0" opacity="0.5" />
          <polygon points="16,-42 18,-5 6,-8 0,-15" fill="#E8E8F0" opacity="0.4" />
          <polygon points="-16,-42 -18,-5 -6,-8 0,-15" fill="#D0D0DD" opacity="0.35" />
          {/* Termination */}
          <polygon points="0,-55 8,-48 0,-42 -8,-48" fill="white" opacity="0.5" />
          {/* Growth striations */}
          <line x1="-12" y1="10" x2="12" y2="10" stroke="#C8C8D0" strokeWidth="0.3" opacity="0.4" />
          <line x1="-11" y1="20" x2="11" y2="20" stroke="#C8C8D0" strokeWidth="0.3" opacity="0.35" />
          <line x1="-10" y1="30" x2="10" y2="30" stroke="#C8C8D0" strokeWidth="0.3" opacity="0.3" />
          {/* Rainbow refraction */}
          <polygon points="3,-28 9,-24 7,-16" fill="#FFB3B3" opacity="0.1" />
          <polygon points="-2,-20 3,-18 1,-10" fill="#B3D4FF" opacity="0.1" />
          {/* Highlight */}
          <line x1="-3" y1="-48" x2="-3" y2="5" stroke="white" strokeWidth="2" opacity="0.2" />
          <ellipse cx="-4" cy="-32" rx="4" ry="3" fill="white" opacity="0.45" />
        </g>

        {/* Sparkle on quartz */}
        <g filter="url(#mohs-glow-white)">
          <circle cx="504" cy="155" r="3.5" fill="url(#mohs-sparkle)" />
          <line x1="504" y1="149" x2="504" y2="161" stroke="white" strokeWidth="1" opacity="0.8" />
          <line x1="498" y1="155" x2="510" y2="155" stroke="white" strokeWidth="1" opacity="0.8" />
        </g>
      </g>

      {/* === 8: TOPAZ === */}
      <g>
        <line x1="580" y1="335" x2="580" y2="365" stroke="#5C4033" strokeWidth="1" opacity="0.5" />
        <text x="580" y="385" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontWeight="bold" fill="#2D1810">8</text>
        <text x="580" y="400" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="#2D1810" opacity="0.7">Topaz</text>

        {/* Topaz crystal */}
        <g transform="translate(580, 220)" filter="url(#mohs-shadow)">
          <polygon
            points="0,-40 14,-32 16,-5 14,38 0,42 -14,38 -16,-5 -14,-32"
            fill="url(#mohs-topaz)"
            stroke="#E65100"
            strokeWidth="0.7"
          />
          <polygon points="0,-40 14,-32 0,-12" fill="#81D4FA" opacity="0.5" />
          <polygon points="0,-40 -14,-32 0,-12" fill="#4FC3F7" opacity="0.4" />
          <polygon points="14,-32 16,-5 5,-8 0,-12" fill="#FFB74D" opacity="0.35" />
          <polygon points="-14,-32 -16,-5 -5,-8 0,-12" fill="#FF9800" opacity="0.3" />
          <polygon points="0,-40 7,-35 0,-30 -7,-35" fill="white" opacity="0.4" />
          <ellipse cx="-3" cy="-22" rx="4" ry="3" fill="white" opacity="0.3" />
        </g>
      </g>

      {/* === 9: CORUNDUM (Ruby + Sapphire) === */}
      <g>
        <line x1="652" y1="335" x2="652" y2="365" stroke="#5C4033" strokeWidth="1" opacity="0.5" />
        <text x="652" y="385" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontWeight="bold" fill="#2D1810">9</text>
        <text x="652" y="400" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="#2D1810" opacity="0.7">Corundum</text>

        {/* Ruby (left half) */}
        <g transform="translate(640, 235)" filter="url(#mohs-shadow)">
          <ellipse cx="0" cy="0" rx="18" ry="15" fill="url(#mohs-ruby)" stroke="#880E0E" strokeWidth="0.7" />
          <ellipse cx="0" cy="0" rx="13" ry="10" fill="none" stroke="#FF1744" strokeWidth="0.3" opacity="0.4" />
          <path d="M-12,-5 L-6,-12 L0,-13 L6,-12 L12,-5" fill="#FF6B6B" opacity="0.35" />
          <ellipse cx="-3" cy="-5" rx="5" ry="3" fill="white" opacity="0.25" transform="rotate(-15)" />
        </g>

        {/* Sapphire (right half, slightly overlapping) */}
        <g transform="translate(666, 225)" filter="url(#mohs-shadow)">
          <ellipse cx="0" cy="0" rx="16" ry="14" fill="url(#mohs-sapphire)" stroke="#0D1B60" strokeWidth="0.7" />
          <polygon points="0,-14 10,-8 6,-3 0,-4" fill="#82B1FF" opacity="0.4" />
          <polygon points="0,-14 -10,-8 -6,-3 0,-4" fill="#448AFF" opacity="0.35" />
          <ellipse cx="-3" cy="-5" rx="4" ry="2.5" fill="white" opacity="0.3" transform="rotate(-10)" />
        </g>

        {/* Small label under the pair */}
        <text x="640" y="265" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7" fill="#5C4033" opacity="0.5">Ruby</text>
        <text x="666" y="252" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7" fill="#5C4033" opacity="0.5">Sapphire</text>
      </g>

      {/* === 10: DIAMOND - Grand finale === */}
      <g>
        <line x1="724" y1="335" x2="724" y2="365" stroke="#5C4033" strokeWidth="1" opacity="0.5" />
        <text x="724" y="385" textAnchor="middle" fontFamily="Georgia, serif" fontSize="16" fontWeight="bold" fill="#2D1810">10</text>
        <text x="724" y="400" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="#2D1810" opacity="0.7">Diamond</text>

        {/* Diamond - brilliant cut, larger */}
        <g transform="translate(724, 220)" filter="url(#mohs-shadow)">
          {/* Main shape */}
          <polygon
            points="0,-52 30,-33 40,-8 33,22 0,40 -33,22 -40,-8 -30,-33"
            fill="url(#mohs-diamond)"
            stroke="#C0C0C8"
            strokeWidth="0.8"
          />
          {/* Crown facets */}
          <polygon points="0,-52 30,-33 15,-22 0,-26" fill="#E8E8FF" opacity="0.8" />
          <polygon points="0,-52 -30,-33 -15,-22 0,-26" fill="#D0D0E8" opacity="0.7" />
          <polygon points="30,-33 40,-8 20,-11 15,-22" fill="url(#mohs-diamond-facet)" />
          <polygon points="-30,-33 -40,-8 -20,-11 -15,-22" fill="#C8C8E0" opacity="0.6" />
          {/* Pavilion facets */}
          <polygon points="40,-8 33,22 15,4 20,-11" fill="#E0E0F0" opacity="0.5" />
          <polygon points="-40,-8 -33,22 -15,4 -20,-11" fill="#D8D8E8" opacity="0.45" />
          <polygon points="33,22 0,40 0,4 15,4" fill="#C8C8E0" opacity="0.4" />
          <polygon points="-33,22 0,40 0,4 -15,4" fill="#E0E0F0" opacity="0.35" />
          {/* Table */}
          <polygon
            points="0,-26 15,-22 20,-11 15,4 0,4 -15,4 -20,-11 -15,-22"
            fill="white"
            opacity="0.35"
          />
          {/* Rainbow fire */}
          <polygon points="8,-18 14,-15 11,-8" fill="#FFB3B3" opacity="0.2" />
          <polygon points="-3,-15 4,-13 2,-7" fill="#B3D4FF" opacity="0.2" />
          <polygon points="-10,-12 -5,-14 -7,-6" fill="#B3FFB3" opacity="0.15" />
          <polygon points="5,0 10,-3 8,5" fill="#FFFFB3" opacity="0.12" />
          <polygon points="-12,-5 -8,-8 -9,0" fill="#D4B3FF" opacity="0.12" />
          {/* Brilliant shine */}
          <ellipse cx="-6" cy="-22" rx="6" ry="4" fill="white" opacity="0.6" />
          <circle cx="-4" cy="-23" r="2.5" fill="white" opacity="0.8" />
        </g>

        {/* Diamond sparkles - multiple bursts */}
        <g filter="url(#mohs-diamond-glow)">
          <circle cx="718" cy="170" r="4" fill="url(#mohs-sparkle)" />
          <line x1="718" y1="163" x2="718" y2="177" stroke="white" strokeWidth="1.2" opacity="0.9" />
          <line x1="711" y1="170" x2="725" y2="170" stroke="white" strokeWidth="1.2" opacity="0.9" />
          <line x1="713" y1="165" x2="723" y2="175" stroke="white" strokeWidth="0.8" opacity="0.5" />
          <line x1="723" y1="165" x2="713" y2="175" stroke="white" strokeWidth="0.8" opacity="0.5" />

          <circle cx="750" cy="195" r="3" fill="url(#mohs-sparkle)" />
          <line x1="750" y1="190" x2="750" y2="200" stroke="white" strokeWidth="1" opacity="0.7" />
          <line x1="745" y1="195" x2="755" y2="195" stroke="white" strokeWidth="1" opacity="0.7" />

          <circle cx="698" cy="185" r="2.5" fill="url(#mohs-sparkle)" />

          <circle cx="735" cy="245" r="2" fill="url(#mohs-sparkle)" />
        </g>
      </g>

      {/* === Additional sparkles along the harder end === */}
      <g filter="url(#mohs-glow-white)">
        {/* On corundum */}
        <circle cx="636" cy="225" r="2" fill="url(#mohs-sparkle)" />
        <circle cx="663" cy="215" r="2" fill="url(#mohs-sparkle)" />

        {/* On topaz */}
        <circle cx="576" cy="180" r="2" fill="url(#mohs-sparkle)" />

        {/* Scattered ambient sparkles */}
        <g>
          <line x1="100" y1="130" x2="104" y2="130" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="102" y1="128" x2="102" y2="132" stroke="white" strokeWidth="1" opacity="0.3" />
        </g>
        <g>
          <line x1="320" y1="110" x2="324" y2="110" stroke="white" strokeWidth="1" opacity="0.25" />
          <line x1="322" y1="108" x2="322" y2="112" stroke="white" strokeWidth="1" opacity="0.25" />
        </g>
      </g>

      {/* Scratch-test note at bottom */}
      <text x="400" y="432" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill="#5C4033" opacity="0.4" fontStyle="italic">Each mineral can scratch those below it on the scale</text>

      {/* Decorative borders */}
      <rect x="0" y="0" width="800" height="3" fill="#5C4033" opacity="0.2" />
      <rect x="0" y="447" width="800" height="3" fill="#5C4033" opacity="0.2" />
    </svg>
  );
};

export default MohsScaleHero;
