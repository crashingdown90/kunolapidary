import React from "react";

interface CrystalGrowthHeroProps {
  className?: string;
}

const CrystalGrowthHero: React.FC<CrystalGrowthHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Stages of crystal growth from seed to fully formed crystal"
    >
      <defs>
        {/* Cave/geode background */}
        <radialGradient id="cgrow-bg" cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#3D2B1F" />
          <stop offset="50%" stopColor="#2D1810" />
          <stop offset="100%" stopColor="#1A0E08" />
        </radialGradient>

        {/* Subtle light source from above */}
        <radialGradient id="cgrow-light" cx="50%" cy="15%" r="55%">
          <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.12" />
          <stop offset="60%" stopColor="#D2B48C" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#2D1810" stopOpacity="0" />
        </radialGradient>

        {/* Rocky cave wall */}
        <linearGradient id="cgrow-cave-top" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1A0E08" />
          <stop offset="40%" stopColor="#2D1810" />
          <stop offset="100%" stopColor="#3D2B1F" />
        </linearGradient>

        <linearGradient id="cgrow-cave-floor" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D2B1F" />
          <stop offset="50%" stopColor="#2D1810" />
          <stop offset="100%" stopColor="#1A0E08" />
        </linearGradient>

        {/* Seed crystal - small molecular cluster */}
        <radialGradient id="cgrow-seed" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#D2B48C" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#8B6914" stopOpacity="0.5" />
        </radialGradient>

        {/* Growing crystal */}
        <linearGradient id="cgrow-mid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="25%" stopColor="#E8D5C0" />
          <stop offset="60%" stopColor="#D2B48C" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        <linearGradient id="cgrow-mid-facet" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D2B48C" stopOpacity="0.4" />
        </linearGradient>

        {/* Fully formed crystal - quartz-like */}
        <linearGradient id="cgrow-quartz" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="20%" stopColor="#F5E6D3" />
          <stop offset="50%" stopColor="#E8D5C0" />
          <stop offset="80%" stopColor="#D2B48C" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        <linearGradient id="cgrow-quartz-left" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8B6914" stopOpacity="0.5" />
        </linearGradient>

        <linearGradient id="cgrow-quartz-right" x1="100%" y1="0%" x2="0%" y2="80%">
          <stop offset="0%" stopColor="#E8D5C0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#5C4033" stopOpacity="0.5" />
        </linearGradient>

        <linearGradient id="cgrow-quartz-front" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="40%" stopColor="#F5E6D3" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D2B48C" stopOpacity="0.3" />
        </linearGradient>

        {/* Lattice pattern for growing crystal */}
        <pattern id="cgrow-lattice" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="16" y2="0" stroke="#F5E6D3" strokeWidth="0.3" opacity="0.2" />
          <line x1="0" y1="8" x2="16" y2="8" stroke="#F5E6D3" strokeWidth="0.3" opacity="0.2" />
          <line x1="0" y1="0" x2="0" y2="16" stroke="#F5E6D3" strokeWidth="0.3" opacity="0.2" />
          <line x1="8" y1="0" x2="8" y2="16" stroke="#F5E6D3" strokeWidth="0.3" opacity="0.2" />
          <circle cx="0" cy="0" r="1" fill="#F5E6D3" opacity="0.15" />
          <circle cx="8" cy="0" r="1" fill="#F5E6D3" opacity="0.15" />
          <circle cx="0" cy="8" r="1" fill="#F5E6D3" opacity="0.15" />
          <circle cx="8" cy="8" r="1" fill="#F5E6D3" opacity="0.15" />
        </pattern>

        {/* Molecular bond pattern */}
        <pattern id="cgrow-molecule" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="2" fill="#F5E6D3" opacity="0.12" />
          <circle cx="20" cy="4" r="2" fill="#F5E6D3" opacity="0.12" />
          <circle cx="12" cy="16" r="2" fill="#F5E6D3" opacity="0.12" />
          <line x1="4" y1="4" x2="20" y2="4" stroke="#F5E6D3" strokeWidth="0.4" opacity="0.1" />
          <line x1="4" y1="4" x2="12" y2="16" stroke="#F5E6D3" strokeWidth="0.4" opacity="0.1" />
          <line x1="20" y1="4" x2="12" y2="16" stroke="#F5E6D3" strokeWidth="0.4" opacity="0.1" />
        </pattern>

        {/* Sparkle */}
        <radialGradient id="cgrow-sparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Arrow gradient */}
        <linearGradient id="cgrow-arrow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B6914" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#D2B48C" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8B6914" stopOpacity="0.3" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="cgrow-glow">
          <feGaussianBlur stdDeviation="4" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="cgrow-glow-sm">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Shadow */}
        <filter id="cgrow-shadow">
          <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#1A0E08" floodOpacity="0.6" />
        </filter>
      </defs>

      {/* Dark cave background */}
      <rect width="800" height="450" fill="url(#cgrow-bg)" />

      {/* Overhead light source */}
      <rect width="800" height="450" fill="url(#cgrow-light)" />

      {/* Molecular lattice faintly in the background */}
      <rect width="800" height="450" fill="url(#cgrow-molecule)" opacity="0.5" />

      {/* Cave ceiling stalactites */}
      <path
        d="M0,0 L0,60 Q40,70 60,45 Q80,65 100,50 Q130,80 150,55 Q170,75 200,48 Q230,70 260,42 Q290,68 310,50 Q340,72 370,38 Q400,65 430,45 Q460,70 490,52 Q520,78 550,42 Q580,68 610,50 Q640,80 670,48 Q700,72 730,55 Q760,75 780,40 L800,65 L800,0 Z"
        fill="url(#cgrow-cave-top)"
      />
      {/* Stalactite tips */}
      <path
        d="M60,45 L58,70 L62,70 Z"
        fill="#2D1810"
        opacity="0.7"
      />
      <path
        d="M200,48 L197,78 L203,78 Z"
        fill="#2D1810"
        opacity="0.6"
      />
      <path
        d="M370,38 L367,72 L373,72 Z"
        fill="#2D1810"
        opacity="0.7"
      />
      <path
        d="M550,42 L547,75 L553,75 Z"
        fill="#2D1810"
        opacity="0.65"
      />
      <path
        d="M730,55 L727,82 L733,82 Z"
        fill="#2D1810"
        opacity="0.6"
      />

      {/* Rocky cave walls texture - left */}
      <path
        d="M0,60 Q15,120 10,200 Q5,280 0,350 L0,450 L30,450 Q25,380 35,300 Q28,220 40,140 Q30,80 20,60 Z"
        fill="#2D1810"
        opacity="0.6"
      />
      {/* Rocky cave walls texture - right */}
      <path
        d="M800,65 Q785,130 790,210 Q795,290 800,360 L800,450 L770,450 Q775,380 765,310 Q772,230 760,150 Q770,90 780,65 Z"
        fill="#2D1810"
        opacity="0.6"
      />

      {/* Cave floor */}
      <path
        d="M0,360 Q60,345 120,358 Q180,340 250,355 Q320,338 400,350 Q480,336 550,355 Q620,340 680,358 Q740,342 800,355 L800,450 L0,450 Z"
        fill="url(#cgrow-cave-floor)"
      />
      {/* Floor texture - rocks */}
      <ellipse cx="80" cy="390" rx="25" ry="10" fill="#3D2B1F" opacity="0.5" />
      <ellipse cx="250" cy="400" rx="18" ry="7" fill="#3D2B1F" opacity="0.4" />
      <ellipse cx="550" cy="395" rx="22" ry="9" fill="#3D2B1F" opacity="0.45" />
      <ellipse cx="720" cy="385" rx="20" ry="8" fill="#3D2B1F" opacity="0.5" />

      {/* ===== STAGE 1: SEED CRYSTAL / MOLECULAR CLUSTER (left) ===== */}
      <g transform="translate(150, 280)" filter="url(#cgrow-shadow)">
        {/* Base rock where seed sits */}
        <path
          d="M-40,30 Q-35,15 -20,20 Q-10,10 0,18 Q10,12 20,20 Q35,15 40,30 Q30,38 0,40 Q-30,38 -40,30 Z"
          fill="#3D2B1F"
          stroke="#5C4033"
          strokeWidth="0.5"
        />

        {/* Molecular structure visualization - atoms and bonds */}
        {/* Central atom */}
        <circle cx="0" cy="0" r="5" fill="url(#cgrow-seed)" stroke="#D2B48C" strokeWidth="0.8" />
        {/* Surrounding atoms */}
        <circle cx="-12" cy="-8" r="4" fill="url(#cgrow-seed)" stroke="#D2B48C" strokeWidth="0.6" />
        <circle cx="10" cy="-12" r="4" fill="url(#cgrow-seed)" stroke="#D2B48C" strokeWidth="0.6" />
        <circle cx="14" cy="5" r="3.5" fill="url(#cgrow-seed)" stroke="#D2B48C" strokeWidth="0.6" />
        <circle cx="-8" cy="10" r="3.5" fill="url(#cgrow-seed)" stroke="#D2B48C" strokeWidth="0.6" />
        <circle cx="-18" cy="2" r="3" fill="url(#cgrow-seed)" stroke="#D2B48C" strokeWidth="0.5" />
        <circle cx="5" cy="14" r="3" fill="url(#cgrow-seed)" stroke="#D2B48C" strokeWidth="0.5" />
        <circle cx="-5" cy="-18" r="3" fill="url(#cgrow-seed)" stroke="#D2B48C" strokeWidth="0.5" />
        <circle cx="20" cy="-5" r="2.5" fill="url(#cgrow-seed)" stroke="#D2B48C" strokeWidth="0.5" />

        {/* Bonds between atoms */}
        <line x1="0" y1="0" x2="-12" y2="-8" stroke="#D2B48C" strokeWidth="1" opacity="0.5" />
        <line x1="0" y1="0" x2="10" y2="-12" stroke="#D2B48C" strokeWidth="1" opacity="0.5" />
        <line x1="0" y1="0" x2="14" y2="5" stroke="#D2B48C" strokeWidth="1" opacity="0.5" />
        <line x1="0" y1="0" x2="-8" y2="10" stroke="#D2B48C" strokeWidth="1" opacity="0.5" />
        <line x1="-12" y1="-8" x2="-18" y2="2" stroke="#D2B48C" strokeWidth="0.8" opacity="0.4" />
        <line x1="-12" y1="-8" x2="-5" y2="-18" stroke="#D2B48C" strokeWidth="0.8" opacity="0.4" />
        <line x1="10" y1="-12" x2="20" y2="-5" stroke="#D2B48C" strokeWidth="0.8" opacity="0.4" />
        <line x1="10" y1="-12" x2="-5" y2="-18" stroke="#D2B48C" strokeWidth="0.8" opacity="0.4" />
        <line x1="14" y1="5" x2="20" y2="-5" stroke="#D2B48C" strokeWidth="0.8" opacity="0.4" />
        <line x1="-8" y1="10" x2="5" y2="14" stroke="#D2B48C" strokeWidth="0.8" opacity="0.4" />
        <line x1="-8" y1="10" x2="-18" y2="2" stroke="#D2B48C" strokeWidth="0.8" opacity="0.4" />

        {/* Tiny sparkle on seed */}
        <circle cx="-3" cy="-5" r="1.5" fill="white" opacity="0.5" />
      </g>

      {/* Stage 1 label */}
      <text
        x="150"
        y="345"
        textAnchor="middle"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="11"
        fill="#D2B48C"
        opacity="0.7"
      >
        Seed Crystal
      </text>

      {/* ===== TRANSITION ARROW 1 ===== */}
      <g opacity="0.5">
        <line x1="235" y1="265" x2="295" y2="255" stroke="url(#cgrow-arrow)" strokeWidth="2" />
        <polygon points="295,250 305,255 295,260" fill="#D2B48C" opacity="0.5" />
        {/* Tiny floating atoms migrating */}
        <circle cx="250" cy="252" r="1.5" fill="#F5E6D3" opacity="0.4" />
        <circle cx="265" cy="260" r="1.2" fill="#F5E6D3" opacity="0.3" />
        <circle cx="280" cy="248" r="1" fill="#F5E6D3" opacity="0.35" />
      </g>

      {/* ===== STAGE 2: GROWING CRYSTAL WITH LATTICE (center) ===== */}
      <g transform="translate(400, 240)" filter="url(#cgrow-shadow)">
        {/* Base rock */}
        <path
          d="M-55,60 Q-45,40 -30,48 Q-15,35 0,45 Q15,35 30,48 Q45,40 55,60 Q40,68 0,72 Q-40,68 -55,60 Z"
          fill="#3D2B1F"
          stroke="#5C4033"
          strokeWidth="0.5"
        />

        {/* Growing hexagonal crystal - main body */}
        <polygon
          points="0,-75 25,-60 25,-10 0,5 -25,-10 -25,-60"
          fill="url(#cgrow-mid)"
          stroke="#8B6914"
          strokeWidth="1"
        />
        {/* Left face */}
        <polygon
          points="-25,-60 0,-75 0,5 -25,-10"
          fill="url(#cgrow-mid-facet)"
          opacity="0.7"
        />
        {/* Right face */}
        <polygon
          points="25,-60 0,-75 0,5 25,-10"
          fill="#D2B48C"
          opacity="0.5"
        />
        {/* Top termination forming - incomplete */}
        <polygon
          points="0,-75 15,-68 25,-60"
          fill="#F5E6D3"
          opacity="0.6"
        />
        <polygon
          points="0,-75 -15,-68 -25,-60"
          fill="#E8D5C0"
          opacity="0.55"
        />

        {/* Visible lattice structure overlay */}
        <clipPath id="cgrow-crystal-clip">
          <polygon points="0,-75 25,-60 25,-10 0,5 -25,-10 -25,-60" />
        </clipPath>
        <rect
          x="-30"
          y="-80"
          width="60"
          height="90"
          fill="url(#cgrow-lattice)"
          clipPath="url(#cgrow-crystal-clip)"
          opacity="0.6"
        />

        {/* Growth lines showing layered deposition */}
        <line x1="-20" y1="-45" x2="20" y2="-45" stroke="#F5E6D3" strokeWidth="0.4" opacity="0.3" />
        <line x1="-22" y1="-30" x2="22" y2="-30" stroke="#F5E6D3" strokeWidth="0.4" opacity="0.25" />
        <line x1="-24" y1="-15" x2="24" y2="-15" stroke="#F5E6D3" strokeWidth="0.4" opacity="0.2" />

        {/* Secondary smaller crystal growing alongside */}
        <polygon
          points="30,-25 42,-18 42,10 30,17 22,10 22,-18"
          fill="url(#cgrow-mid)"
          stroke="#8B6914"
          strokeWidth="0.8"
          opacity="0.7"
        />

        {/* Atoms approaching to join - dashed circles */}
        <circle cx="-35" cy="-50" r="2" fill="#F5E6D3" opacity="0.4" />
        <circle cx="-40" cy="-35" r="1.5" fill="#F5E6D3" opacity="0.3" />
        <circle cx="35" cy="-45" r="2" fill="#F5E6D3" opacity="0.35" />
        <circle cx="-30" cy="-65" r="1.5" fill="#F5E6D3" opacity="0.3" />
        <circle cx="30" cy="-55" r="1.8" fill="#F5E6D3" opacity="0.25" />
        {/* Dashed approach lines */}
        <line x1="-35" y1="-50" x2="-25" y2="-48" stroke="#D2B48C" strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2" />
        <line x1="35" y1="-45" x2="25" y2="-43" stroke="#D2B48C" strokeWidth="0.5" opacity="0.3" strokeDasharray="2,2" />

        {/* Highlight on crystal */}
        <ellipse cx="-8" cy="-45" rx="5" ry="8" fill="white" opacity="0.2" transform="rotate(-5)" />
      </g>

      {/* Stage 2 label */}
      <text
        x="400"
        y="340"
        textAnchor="middle"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="11"
        fill="#D2B48C"
        opacity="0.7"
      >
        Growth Phase
      </text>

      {/* ===== TRANSITION ARROW 2 ===== */}
      <g opacity="0.5">
        <line x1="475" y1="245" x2="535" y2="230" stroke="url(#cgrow-arrow)" strokeWidth="2" />
        <polygon points="535,225 545,230 535,235" fill="#D2B48C" opacity="0.5" />
        <circle cx="495" cy="235" r="1.5" fill="#F5E6D3" opacity="0.35" />
        <circle cx="510" cy="240" r="1.2" fill="#F5E6D3" opacity="0.3" />
        <circle cx="525" cy="228" r="1" fill="#F5E6D3" opacity="0.3" />
      </g>

      {/* ===== STAGE 3: FULLY FORMED HEXAGONAL QUARTZ CRYSTAL (right) ===== */}
      <g transform="translate(650, 200)" filter="url(#cgrow-shadow)">
        {/* Base rock / matrix */}
        <path
          d="M-70,95 Q-55,70 -35,80 Q-15,60 5,75 Q25,62 40,80 Q60,70 70,95 Q50,108 0,112 Q-50,108 -70,95 Z"
          fill="#3D2B1F"
          stroke="#5C4033"
          strokeWidth="0.8"
        />
        {/* Rock texture */}
        <path d="M-50,85 Q-40,78 -30,85" fill="none" stroke="#5C4033" strokeWidth="0.5" opacity="0.4" />
        <path d="M20,78 Q30,72 40,82" fill="none" stroke="#5C4033" strokeWidth="0.5" opacity="0.4" />

        {/* Main large hexagonal quartz crystal */}
        {/* Front-left face */}
        <polygon
          points="0,-120 -30,-100 -30,-15 0,5"
          fill="url(#cgrow-quartz-left)"
        />
        {/* Front-right face */}
        <polygon
          points="0,-120 30,-100 30,-15 0,5"
          fill="url(#cgrow-quartz-right)"
        />
        {/* Front center face */}
        <polygon
          points="-30,-100 -30,-15 0,5 30,-15 30,-100 0,-120"
          fill="url(#cgrow-quartz-front)"
          opacity="0.3"
        />

        {/* Hexagonal termination facets at top */}
        <polygon
          points="0,-120 -18,-112 -30,-100"
          fill="#F5E6D3"
          opacity="0.7"
        />
        <polygon
          points="0,-120 18,-112 30,-100"
          fill="#E8D5C0"
          opacity="0.6"
        />
        <polygon
          points="0,-120 -18,-112 -8,-118"
          fill="white"
          opacity="0.4"
        />
        <polygon
          points="0,-120 18,-112 8,-118"
          fill="#D2B48C"
          opacity="0.5"
        />
        {/* Secondary termination facets */}
        <polygon
          points="-18,-112 -30,-100 -28,-105"
          fill="#D2B48C"
          opacity="0.45"
        />
        <polygon
          points="18,-112 30,-100 28,-105"
          fill="#8B6914"
          opacity="0.4"
        />

        {/* Internal striations / phantom lines (characteristic of quartz) */}
        <line x1="-25" y1="-85" x2="25" y2="-85" stroke="#F5E6D3" strokeWidth="0.3" opacity="0.2" />
        <line x1="-27" y1="-65" x2="27" y2="-65" stroke="#F5E6D3" strokeWidth="0.3" opacity="0.18" />
        <line x1="-28" y1="-45" x2="28" y2="-45" stroke="#F5E6D3" strokeWidth="0.3" opacity="0.15" />
        <line x1="-29" y1="-25" x2="29" y2="-25" stroke="#F5E6D3" strokeWidth="0.3" opacity="0.12" />

        {/* Edge highlights */}
        <line x1="0" y1="-120" x2="0" y2="5" stroke="#F5E6D3" strokeWidth="0.8" opacity="0.3" />
        <line x1="-30" y1="-100" x2="-30" y2="-15" stroke="#F5E6D3" strokeWidth="0.5" opacity="0.2" />
        <line x1="30" y1="-100" x2="30" y2="-15" stroke="#8B6914" strokeWidth="0.5" opacity="0.2" />

        {/* Brilliant highlight / window */}
        <ellipse cx="-10" cy="-80" rx="8" ry="14" fill="white" opacity="0.2" transform="rotate(-5)" />
        <ellipse cx="-8" cy="-85" rx="4" ry="7" fill="white" opacity="0.3" transform="rotate(-5)" />
        <circle cx="-6" cy="-90" r="2" fill="white" opacity="0.5" />

        {/* Secondary crystal growing from base */}
        <polygon
          points="35,-50 50,-40 50,-5 35,5 28,-5 28,-40"
          fill="url(#cgrow-quartz)"
          stroke="#8B6914"
          strokeWidth="0.5"
          opacity="0.7"
        />
        {/* Termination on secondary */}
        <polygon
          points="35,-50 42,-45 50,-40"
          fill="#F5E6D3"
          opacity="0.5"
        />

        {/* Third small crystal */}
        <polygon
          points="-38,-40 -28,-32 -28,-8 -38,0 -44,-8 -44,-32"
          fill="url(#cgrow-quartz)"
          stroke="#8B6914"
          strokeWidth="0.5"
          opacity="0.6"
        />
        <polygon
          points="-38,-40 -33,-36 -28,-32"
          fill="#E8D5C0"
          opacity="0.4"
        />

        {/* Crystal outline stroke */}
        <polygon
          points="0,-120 -30,-100 -30,-15 0,5 30,-15 30,-100"
          fill="none"
          stroke="#8B6914"
          strokeWidth="1.2"
          opacity="0.6"
        />
      </g>

      {/* Stage 3 label */}
      <text
        x="650"
        y="340"
        textAnchor="middle"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontSize="11"
        fill="#D2B48C"
        opacity="0.7"
      >
        Mature Crystal
      </text>

      {/* ===== SPARKLE EFFECTS on final crystal ===== */}
      <g filter="url(#cgrow-glow)">
        {/* Main sparkle at top */}
        <circle cx="650" cy="82" r="5" fill="url(#cgrow-sparkle)" />
        <line x1="650" y1="74" x2="650" y2="90" stroke="white" strokeWidth="1.2" opacity="0.8" />
        <line x1="642" y1="82" x2="658" y2="82" stroke="white" strokeWidth="1.2" opacity="0.8" />
        <line x1="644" y1="76" x2="656" y2="88" stroke="white" strokeWidth="0.6" opacity="0.4" />
        <line x1="656" y1="76" x2="644" y2="88" stroke="white" strokeWidth="0.6" opacity="0.4" />
      </g>
      <g filter="url(#cgrow-glow-sm)">
        {/* Secondary sparkles */}
        <circle cx="672" cy="115" r="3" fill="url(#cgrow-sparkle)" />
        <line x1="672" y1="111" x2="672" y2="119" stroke="white" strokeWidth="0.8" opacity="0.6" />
        <line x1="668" y1="115" x2="676" y2="115" stroke="white" strokeWidth="0.8" opacity="0.6" />

        <circle cx="620" cy="135" r="2.5" fill="url(#cgrow-sparkle)" />
        <circle cx="690" cy="155" r="2" fill="url(#cgrow-sparkle)" />
        <circle cx="640" cy="170" r="2" fill="url(#cgrow-sparkle)" />
      </g>

      {/* ===== SCIENTIFIC LATTICE DETAIL in background ===== */}
      {/* Faint hexagonal crystal system diagram - upper right */}
      <g transform="translate(720, 80)" opacity="0.12">
        <polygon
          points="0,-25 22,-12.5 22,12.5 0,25 -22,12.5 -22,-12.5"
          fill="none"
          stroke="#F5E6D3"
          strokeWidth="1"
        />
        <line x1="0" y1="-25" x2="0" y2="25" stroke="#F5E6D3" strokeWidth="0.5" />
        <line x1="-22" y1="-12.5" x2="22" y2="12.5" stroke="#F5E6D3" strokeWidth="0.5" />
        <line x1="22" y1="-12.5" x2="-22" y2="12.5" stroke="#F5E6D3" strokeWidth="0.5" />
        <circle cx="0" cy="-25" r="2" fill="#F5E6D3" />
        <circle cx="22" cy="-12.5" r="2" fill="#F5E6D3" />
        <circle cx="22" cy="12.5" r="2" fill="#F5E6D3" />
        <circle cx="0" cy="25" r="2" fill="#F5E6D3" />
        <circle cx="-22" cy="12.5" r="2" fill="#F5E6D3" />
        <circle cx="-22" cy="-12.5" r="2" fill="#F5E6D3" />
        <circle cx="0" cy="0" r="2" fill="#D2B48C" />
      </g>

      {/* Faint unit cell diagram - upper left */}
      <g transform="translate(80, 90)" opacity="0.1">
        <rect x="-15" y="-15" width="30" height="30" fill="none" stroke="#F5E6D3" strokeWidth="0.8" />
        <rect x="-10" y="-10" width="20" height="20" fill="none" stroke="#D2B48C" strokeWidth="0.5" />
        <circle cx="-15" cy="-15" r="2.5" fill="#F5E6D3" />
        <circle cx="15" cy="-15" r="2.5" fill="#F5E6D3" />
        <circle cx="15" cy="15" r="2.5" fill="#F5E6D3" />
        <circle cx="-15" cy="15" r="2.5" fill="#F5E6D3" />
        <circle cx="0" cy="0" r="2" fill="#D2B48C" />
      </g>

      {/* ===== AMBIENT MINERAL GLOW in cave ===== */}
      {/* Small mineral deposits on cave walls */}
      <g opacity="0.4">
        <circle cx="25" cy="180" r="3" fill="#8B6914" />
        <circle cx="30" cy="175" r="2" fill="#D2B48C" />
        <circle cx="18" cy="185" r="1.5" fill="#6B8E23" />
      </g>
      <g opacity="0.35">
        <circle cx="775" cy="200" r="2.5" fill="#8B6914" />
        <circle cx="780" cy="195" r="1.5" fill="#D2B48C" />
        <circle cx="770" cy="205" r="2" fill="#6B8E23" />
      </g>

      {/* Small geode opening in cave floor */}
      <g transform="translate(100, 375)" opacity="0.5">
        <ellipse cx="0" cy="0" rx="15" ry="8" fill="#1A0E08" />
        <ellipse cx="0" cy="0" rx="12" ry="6" fill="#2D1810" />
        <polygon points="-6,-3 -5,-7 -4,-3" fill="#D2B48C" opacity="0.6" />
        <polygon points="-1,-2 0,-6 1,-2" fill="#F5E6D3" opacity="0.7" />
        <polygon points="4,-3 5,-6 6,-3" fill="#8B6914" opacity="0.5" />
      </g>

      {/* Decorative borders */}
      <rect x="0" y="0" width="800" height="2" fill="#5C4033" opacity="0.3" />
      <rect x="0" y="448" width="800" height="2" fill="#5C4033" opacity="0.3" />
    </svg>
  );
};

export default CrystalGrowthHero;
