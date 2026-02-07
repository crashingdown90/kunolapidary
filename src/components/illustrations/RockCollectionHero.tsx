import React from "react";

interface RockCollectionHeroProps {
  className?: string;
}

const RockCollectionHero: React.FC<RockCollectionHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Display case with organized rock and mineral specimens"
    >
      <defs>
        {/* Background */}
        <radialGradient id="rcoll-bg" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="60%" stopColor="#E8D5C0" />
          <stop offset="100%" stopColor="#D2B48C" />
        </radialGradient>

        {/* Wooden case frame */}
        <linearGradient id="rcoll-frame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="30%" stopColor="#6B5210" />
          <stop offset="70%" stopColor="#5C4033" />
          <stop offset="100%" stopColor="#4A3428" />
        </linearGradient>

        {/* Case interior - dark felt */}
        <linearGradient id="rcoll-felt" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2D1810" />
          <stop offset="100%" stopColor="#1A0E08" />
        </linearGradient>

        {/* Wood grain pattern */}
        <pattern id="rcoll-wood" x="0" y="0" width="45" height="8" patternUnits="userSpaceOnUse">
          <rect width="45" height="8" fill="#6B5210" />
          <path d="M0,2 Q11,0.5 22,2 T45,2" stroke="#5C4033" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M0,5 Q11,3.5 22,5 T45,5" stroke="#5C4033" strokeWidth="0.3" fill="none" opacity="0.2" />
          <path d="M0,7.5 Q11,6 22,7.5 T45,7.5" stroke="#8B6914" strokeWidth="0.3" fill="none" opacity="0.15" />
        </pattern>

        {/* Amethyst gradients */}
        <linearGradient id="rcoll-amethyst" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CE93D8" />
          <stop offset="30%" stopColor="#AB47BC" />
          <stop offset="70%" stopColor="#7B1FA2" />
          <stop offset="100%" stopColor="#4A148C" />
        </linearGradient>
        <linearGradient id="rcoll-amethyst-crystal" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#E1BEE7" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7B1FA2" stopOpacity="0.5" />
        </linearGradient>

        {/* Agate slice gradients */}
        <radialGradient id="rcoll-agate" cx="45%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="20%" stopColor="#D2B48C" />
          <stop offset="35%" stopColor="#8B6914" />
          <stop offset="50%" stopColor="#A0A0A0" />
          <stop offset="65%" stopColor="#D2B48C" />
          <stop offset="80%" stopColor="#5C4033" />
          <stop offset="100%" stopColor="#8B7355" />
        </radialGradient>

        {/* Pyrite gradient (metallic gold) */}
        <linearGradient id="rcoll-pyrite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A817" />
          <stop offset="25%" stopColor="#8B6914" />
          <stop offset="50%" stopColor="#D4A817" />
          <stop offset="75%" stopColor="#6B5210" />
          <stop offset="100%" stopColor="#D4A817" />
        </linearGradient>
        <linearGradient id="rcoll-pyrite-face" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4A817" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8B6914" stopOpacity="0.6" />
        </linearGradient>

        {/* Rose quartz gradient */}
        <radialGradient id="rcoll-rosequartz" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#F8C8D4" />
          <stop offset="40%" stopColor="#F0A0B8" />
          <stop offset="70%" stopColor="#D4768E" />
          <stop offset="100%" stopColor="#C06080" />
        </radialGradient>

        {/* Obsidian gradient */}
        <linearGradient id="rcoll-obsidian" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="30%" stopColor="#1A1A1A" />
          <stop offset="60%" stopColor="#2A2A2A" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>

        {/* Calcite gradient (golden honey) */}
        <linearGradient id="rcoll-calcite" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="30%" stopColor="#FFAB00" />
          <stop offset="70%" stopColor="#D4A817" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <linearGradient id="rcoll-calcite-facet" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FFE082" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#D4A817" stopOpacity="0.4" />
        </linearGradient>

        {/* Label card */}
        <linearGradient id="rcoll-label" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFEF5" />
          <stop offset="100%" stopColor="#F5E6D3" />
        </linearGradient>

        {/* Divider wood */}
        <linearGradient id="rcoll-divider" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5C4033" />
          <stop offset="50%" stopColor="#6B5210" />
          <stop offset="100%" stopColor="#5C4033" />
        </linearGradient>

        {/* Sparkle */}
        <radialGradient id="rcoll-sparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Shadow */}
        <filter id="rcoll-shadow">
          <feDropShadow dx="3" dy="5" stdDeviation="5" floodColor="#2D1810" floodOpacity="0.4" />
        </filter>

        <filter id="rcoll-shadow-sm">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#1A0E08" floodOpacity="0.4" />
        </filter>

        {/* Glow */}
        <filter id="rcoll-glow">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="url(#rcoll-bg)" />

      {/* Subtle background circles */}
      <circle cx="150" cy="100" r="180" fill="#D2B48C" opacity="0.08" />
      <circle cx="650" cy="120" r="200" fill="#8B6914" opacity="0.06" />
      <circle cx="400" cy="400" r="160" fill="#6B8E23" opacity="0.04" />

      {/* ===== DISPLAY CASE / SHADOW BOX ===== */}
      <g filter="url(#rcoll-shadow)">
        {/* Outer frame */}
        <rect x="60" y="30" width="680" height="380" rx="6" fill="url(#rcoll-frame)" />
        <rect x="60" y="30" width="680" height="380" rx="6" fill="url(#rcoll-wood)" opacity="0.35" />

        {/* Frame inner border detail */}
        <rect x="68" y="38" width="664" height="364" rx="4" fill="none" stroke="#8B6914" strokeWidth="1.5" opacity="0.5" />
        <rect x="72" y="42" width="656" height="356" rx="3" fill="none" stroke="#4A3428" strokeWidth="1" opacity="0.3" />

        {/* Interior felt lining */}
        <rect x="76" y="46" width="648" height="348" rx="2" fill="url(#rcoll-felt)" />

        {/* ===== COMPARTMENT DIVIDERS ===== */}
        {/* Vertical dividers (creating 3 columns) */}
        <rect x="290" y="46" width="8" height="348" fill="url(#rcoll-divider)" />
        <line x1="294" y1="46" x2="294" y2="394" stroke="#8B6914" strokeWidth="0.5" opacity="0.3" />

        <rect x="502" y="46" width="8" height="348" fill="url(#rcoll-divider)" />
        <line x1="506" y1="46" x2="506" y2="394" stroke="#8B6914" strokeWidth="0.5" opacity="0.3" />

        {/* Horizontal divider (creating 2 rows) */}
        <rect x="76" y="215" width="648" height="8" fill="url(#rcoll-divider)" />
        <line x1="76" y1="219" x2="724" y2="219" stroke="#8B6914" strokeWidth="0.5" opacity="0.3" />

        {/* ===== TOP ROW ===== */}

        {/* === COMPARTMENT 1: AMETHYST CLUSTER (top-left) === */}
        <g transform="translate(183, 130)">
          {/* Amethyst base rock */}
          <path
            d="M-45,30 Q-40,20 -25,25 Q-10,15 5,22 Q20,18 35,25 Q45,20 50,30 Q40,38 0,42 Q-40,38 -45,30 Z"
            fill="#5C4033"
            stroke="#4A3428"
            strokeWidth="0.5"
          />

          {/* Crystal cluster - multiple points */}
          <polygon points="-30,25 -28,0 -22,25" fill="url(#rcoll-amethyst)" stroke="#6A1B9A" strokeWidth="0.5" />
          <polygon points="-20,22 -17,-15 -12,22" fill="url(#rcoll-amethyst)" stroke="#6A1B9A" strokeWidth="0.5" />
          <polygon points="-10,20 -6,-30 0,20" fill="url(#rcoll-amethyst)" stroke="#6A1B9A" strokeWidth="0.5" />
          <polygon points="0,22 5,-25 12,22" fill="url(#rcoll-amethyst-crystal)" stroke="#6A1B9A" strokeWidth="0.5" />
          <polygon points="10,24 15,-10 22,24" fill="url(#rcoll-amethyst)" stroke="#6A1B9A" strokeWidth="0.5" />
          <polygon points="20,26 24,-5 30,26" fill="url(#rcoll-amethyst-crystal)" stroke="#6A1B9A" strokeWidth="0.5" />
          <polygon points="28,28 32,5 38,28" fill="url(#rcoll-amethyst)" stroke="#6A1B9A" strokeWidth="0.5" opacity="0.8" />

          {/* Crystal facet highlights */}
          <polygon points="-6,-30 -3,-15 0,20 -6,-10" fill="#E1BEE7" opacity="0.3" />
          <polygon points="5,-25 8,-12 12,22 5,-5" fill="#CE93D8" opacity="0.25" />

          {/* Sparkle on tallest crystal */}
          <circle cx="-6" cy="-28" r="2" fill="url(#rcoll-sparkle)" />

          {/* Label card */}
          <g transform="translate(0, 55)">
            <rect x="-30" y="-6" width="60" height="14" rx="1" fill="url(#rcoll-label)" stroke="#D2B48C" strokeWidth="0.3" />
            <text x="0" y="4" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif" fontSize="7" fill="#5C4033">Amethyst</text>
          </g>
        </g>

        {/* === COMPARTMENT 2: BANDED AGATE SLICE (top-center) === */}
        <g transform="translate(400, 130)">
          {/* Agate slice - cross section circle */}
          <ellipse cx="0" cy="0" rx="45" ry="40" fill="url(#rcoll-agate)" stroke="#5C4033" strokeWidth="1" />

          {/* Banding rings */}
          <ellipse cx="-2" cy="2" rx="38" ry="34" fill="none" stroke="#D2B48C" strokeWidth="1.5" opacity="0.5" />
          <ellipse cx="-3" cy="3" rx="30" ry="27" fill="none" stroke="#8B6914" strokeWidth="2" opacity="0.4" />
          <ellipse cx="-4" cy="4" rx="22" ry="20" fill="none" stroke="#A0A0A0" strokeWidth="1.5" opacity="0.35" />
          <ellipse cx="-4" cy="4" rx="15" ry="13" fill="none" stroke="#D2B48C" strokeWidth="1.5" opacity="0.4" />
          <ellipse cx="-4" cy="4" rx="8" ry="7" fill="#E8D5C0" opacity="0.5" />

          {/* Center crystal cavity (druzy) */}
          <ellipse cx="-4" cy="4" rx="5" ry="4" fill="#F5E6D3" opacity="0.7" />
          <circle cx="-5" cy="3" r="1" fill="white" opacity="0.4" />
          <circle cx="-3" cy="5" r="0.8" fill="white" opacity="0.3" />

          {/* Translucent edge glow */}
          <ellipse cx="15" cy="-12" rx="12" ry="8" fill="white" opacity="0.08" transform="rotate(-20)" />

          {/* Label card */}
          <g transform="translate(0, 55)">
            <rect x="-35" y="-6" width="70" height="14" rx="1" fill="url(#rcoll-label)" stroke="#D2B48C" strokeWidth="0.3" />
            <text x="0" y="4" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif" fontSize="7" fill="#5C4033">Banded Agate</text>
          </g>
        </g>

        {/* === COMPARTMENT 3: PYRITE CUBE (top-right) === */}
        <g transform="translate(616, 130)">
          {/* Pyrite cube - isometric view */}
          {/* Top face */}
          <polygon
            points="0,-35 40,-15 0,5 -40,-15"
            fill="url(#rcoll-pyrite)"
            stroke="#6B5210"
            strokeWidth="0.8"
          />
          {/* Left face */}
          <polygon
            points="-40,-15 0,5 0,45 -40,25"
            fill="url(#rcoll-pyrite-face)"
          />
          {/* Right face */}
          <polygon
            points="40,-15 0,5 0,45 40,25"
            fill="#8B6914"
            opacity="0.7"
          />

          {/* Metallic luster details on top */}
          <polygon points="0,-35 20,-25 0,-15 -20,-25" fill="#FFD54F" opacity="0.2" />
          <polygon points="-20,-25 0,-15 -10,-10 -30,-20" fill="#D4A817" opacity="0.15" />

          {/* Striations on faces (characteristic of pyrite) */}
          <line x1="-35" y1="-10" x2="-5" y2="10" stroke="#5C4033" strokeWidth="0.3" opacity="0.3" />
          <line x1="-30" y1="-5" x2="0" y2="15" stroke="#5C4033" strokeWidth="0.3" opacity="0.25" />
          <line x1="-25" y1="0" x2="0" y2="25" stroke="#5C4033" strokeWidth="0.3" opacity="0.2" />

          <line x1="35" y1="-10" x2="5" y2="10" stroke="#6B5210" strokeWidth="0.3" opacity="0.25" />
          <line x1="30" y1="-5" x2="5" y2="18" stroke="#6B5210" strokeWidth="0.3" opacity="0.2" />
          <line x1="25" y1="0" x2="5" y2="25" stroke="#6B5210" strokeWidth="0.3" opacity="0.18" />

          {/* Edge outlines */}
          <line x1="-40" y1="-15" x2="-40" y2="25" stroke="#5C4033" strokeWidth="1" opacity="0.5" />
          <line x1="40" y1="-15" x2="40" y2="25" stroke="#5C4033" strokeWidth="1" opacity="0.5" />
          <line x1="0" y1="5" x2="0" y2="45" stroke="#5C4033" strokeWidth="0.8" opacity="0.4" />
          <line x1="-40" y1="25" x2="0" y2="45" stroke="#5C4033" strokeWidth="1" opacity="0.5" />
          <line x1="40" y1="25" x2="0" y2="45" stroke="#5C4033" strokeWidth="1" opacity="0.5" />

          {/* Metallic sparkle */}
          <circle cx="-10" cy="-22" r="2.5" fill="url(#rcoll-sparkle)" />
          <circle cx="15" cy="-12" r="1.5" fill="url(#rcoll-sparkle)" />

          {/* Label card */}
          <g transform="translate(0, 60)">
            <rect x="-25" y="-6" width="50" height="14" rx="1" fill="url(#rcoll-label)" stroke="#D2B48C" strokeWidth="0.3" />
            <text x="0" y="4" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif" fontSize="7" fill="#5C4033">Pyrite</text>
          </g>
        </g>

        {/* ===== BOTTOM ROW ===== */}

        {/* === COMPARTMENT 4: ROSE QUARTZ (bottom-left) === */}
        <g transform="translate(183, 310)">
          {/* Polished rose quartz - tumbled/cabochon shape */}
          <ellipse cx="0" cy="0" rx="42" ry="32" fill="url(#rcoll-rosequartz)" stroke="#C06080" strokeWidth="0.8" />

          {/* Inner translucency */}
          <ellipse cx="-5" cy="-5" rx="28" ry="20" fill="#F8C8D4" opacity="0.25" />

          {/* Milky veins (characteristic of rose quartz) */}
          <path d="M-25,-10 Q-10,-15 5,-5 Q20,0 30,10" fill="none" stroke="#F8C8D4" strokeWidth="1.5" opacity="0.3" />
          <path d="M-20,5 Q-5,0 10,8 Q22,12 32,5" fill="none" stroke="#F0A0B8" strokeWidth="1" opacity="0.25" />

          {/* Surface highlight */}
          <ellipse cx="-12" cy="-12" rx="14" ry="8" fill="white" opacity="0.15" transform="rotate(-15)" />
          <ellipse cx="-10" cy="-14" rx="6" ry="3.5" fill="white" opacity="0.25" transform="rotate(-15)" />

          {/* Gentle glow */}
          <circle cx="-8" cy="-10" r="2" fill="white" opacity="0.3" />

          {/* Label card */}
          <g transform="translate(0, 48)">
            <rect x="-35" y="-6" width="70" height="14" rx="1" fill="url(#rcoll-label)" stroke="#D2B48C" strokeWidth="0.3" />
            <text x="0" y="4" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif" fontSize="7" fill="#5C4033">Rose Quartz</text>
          </g>
        </g>

        {/* === COMPARTMENT 5: OBSIDIAN (bottom-center) === */}
        <g transform="translate(400, 310)">
          {/* Obsidian - volcanic glass with conchoidal fracture */}
          <path
            d="M-35,-25 L-10,-35 L20,-28 L38,-10 L30,15 L10,28 L-20,25 L-38,8 L-40,-12 Z"
            fill="url(#rcoll-obsidian)"
            stroke="#1A1A1A"
            strokeWidth="0.8"
          />

          {/* Conchoidal fracture surfaces */}
          <path d="M-10,-35 L5,-10 L20,-28" fill="#3A3A3A" opacity="0.6" />
          <path d="M38,-10 L15,5 L30,15" fill="#2A2A2A" opacity="0.5" />
          <path d="M-38,8 L-15,-5 L-20,25" fill="#333333" opacity="0.4" />

          {/* Glassy reflection - characteristic sheen */}
          <path
            d="M-15,-20 Q-5,-25 5,-18 Q10,-12 5,-5"
            fill="white"
            opacity="0.08"
          />
          <ellipse cx="-8" cy="-18" rx="8" ry="5" fill="white" opacity="0.1" transform="rotate(-20)" />

          {/* Sharp edge highlight */}
          <line x1="-10" y1="-35" x2="20" y2="-28" stroke="#555" strokeWidth="0.5" opacity="0.4" />
          <line x1="20" y1="-28" x2="38" y2="-10" stroke="#444" strokeWidth="0.5" opacity="0.3" />

          {/* Subtle rainbow sheen (obsidian can show this) */}
          <ellipse cx="10" cy="5" rx="10" ry="6" fill="#4A148C" opacity="0.06" />
          <ellipse cx="12" cy="8" rx="8" ry="4" fill="#1A237E" opacity="0.05" />

          {/* Label card */}
          <g transform="translate(0, 48)">
            <rect x="-30" y="-6" width="60" height="14" rx="1" fill="url(#rcoll-label)" stroke="#D2B48C" strokeWidth="0.3" />
            <text x="0" y="4" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif" fontSize="7" fill="#5C4033">Obsidian</text>
          </g>
        </g>

        {/* === COMPARTMENT 6: GOLDEN CALCITE (bottom-right) === */}
        <g transform="translate(616, 305)">
          {/* Calcite rhombohedron crystal */}
          {/* Top face */}
          <polygon
            points="0,-35 35,-20 20,0 -15,-15"
            fill="url(#rcoll-calcite)"
            stroke="#8B6914"
            strokeWidth="0.8"
          />
          {/* Front-left face */}
          <polygon
            points="-15,-15 20,0 20,35 -15,20"
            fill="url(#rcoll-calcite-facet)"
          />
          {/* Front-right face */}
          <polygon
            points="20,0 35,-20 35,15 20,35"
            fill="#D4A817"
            opacity="0.6"
          />

          {/* Internal double refraction hint (calcite is birefringent) */}
          <line x1="-5" y1="5" x2="12" y2="18" stroke="#FFE082" strokeWidth="0.5" opacity="0.3" />
          <line x1="-3" y1="7" x2="14" y2="20" stroke="#FFE082" strokeWidth="0.5" opacity="0.25" />

          {/* Edge outlines */}
          <line x1="-15" y1="-15" x2="-15" y2="20" stroke="#8B6914" strokeWidth="0.8" opacity="0.5" />
          <line x1="35" y1="-20" x2="35" y2="15" stroke="#8B6914" strokeWidth="0.8" opacity="0.5" />
          <line x1="-15" y1="20" x2="20" y2="35" stroke="#8B6914" strokeWidth="0.8" opacity="0.5" />
          <line x1="35" y1="15" x2="20" y2="35" stroke="#8B6914" strokeWidth="0.8" opacity="0.5" />

          {/* Transparency/translucency glow */}
          <polygon
            points="0,-35 35,-20 20,0 -15,-15"
            fill="#FFFDE8"
            opacity="0.15"
          />

          {/* Warm internal glow */}
          <ellipse cx="8" cy="8" rx="12" ry="10" fill="#FFD54F" opacity="0.1" />

          {/* Highlight */}
          <ellipse cx="-5" cy="-15" rx="6" ry="3" fill="white" opacity="0.2" transform="rotate(-30)" />
          <circle cx="-3" cy="-18" r="1.5" fill="white" opacity="0.3" />

          {/* Sparkle */}
          <circle cx="5" cy="-30" r="2" fill="url(#rcoll-sparkle)" />

          {/* Label card */}
          <g transform="translate(5, 52)">
            <rect x="-25" y="-6" width="50" height="14" rx="1" fill="url(#rcoll-label)" stroke="#D2B48C" strokeWidth="0.3" />
            <text x="0" y="4" textAnchor="middle" fontFamily="'Georgia', 'Times New Roman', serif" fontSize="7" fill="#5C4033">Calcite</text>
          </g>
        </g>

        {/* ===== SUBTLE COMPARTMENT FLOOR SHADOWS ===== */}
        {/* Top row shadows beneath specimens */}
        <ellipse cx="183" cy="178" rx="40" ry="6" fill="#1A0E08" opacity="0.3" />
        <ellipse cx="400" cy="178" rx="42" ry="6" fill="#1A0E08" opacity="0.25" />
        <ellipse cx="616" cy="178" rx="38" ry="6" fill="#1A0E08" opacity="0.3" />
        {/* Bottom row shadows */}
        <ellipse cx="183" cy="355" rx="38" ry="5" fill="#1A0E08" opacity="0.3" />
        <ellipse cx="400" cy="355" rx="36" ry="5" fill="#1A0E08" opacity="0.25" />
        <ellipse cx="616" cy="355" rx="34" ry="5" fill="#1A0E08" opacity="0.3" />
      </g>

      {/* ===== SUBTLE SPARKLE EFFECTS ===== */}
      <g filter="url(#rcoll-glow)">
        {/* Amethyst sparkle */}
        <circle cx="177" cy="102" r="2.5" fill="url(#rcoll-sparkle)" />
        {/* Pyrite sparkle */}
        <circle cx="606" cy="110" r="3" fill="url(#rcoll-sparkle)" />
        <line x1="606" y1="106" x2="606" y2="114" stroke="white" strokeWidth="0.8" opacity="0.6" />
        <line x1="602" y1="110" x2="610" y2="110" stroke="white" strokeWidth="0.8" opacity="0.6" />
        {/* Calcite sparkle */}
        <circle cx="621" cy="277" r="2" fill="url(#rcoll-sparkle)" />
      </g>

      {/* ===== FRAME CORNER ORNAMENTS ===== */}
      {/* Top-left corner bracket */}
      <g opacity="0.3">
        <path d="M68,38 L68,55 L85,38" fill="none" stroke="#D4A817" strokeWidth="1.5" />
        {/* Top-right */}
        <path d="M732,38 L732,55 L715,38" fill="none" stroke="#D4A817" strokeWidth="1.5" />
        {/* Bottom-left */}
        <path d="M68,402 L68,385 L85,402" fill="none" stroke="#D4A817" strokeWidth="1.5" />
        {/* Bottom-right */}
        <path d="M732,402 L732,385 L715,402" fill="none" stroke="#D4A817" strokeWidth="1.5" />
      </g>

      {/* Decorative borders */}
      <rect x="0" y="0" width="800" height="3" fill="#5C4033" opacity="0.2" />
      <rect x="0" y="447" width="800" height="3" fill="#5C4033" opacity="0.2" />
    </svg>
  );
};

export default RockCollectionHero;
