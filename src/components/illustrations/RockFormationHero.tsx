import React from "react";

interface RockFormationHeroProps {
  className?: string;
}

const RockFormationHero: React.FC<RockFormationHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Geological cross-section showing rock strata and formations"
    >
      <defs>
        {/* Sky gradient */}
        <linearGradient id="rock-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C4A882" />
          <stop offset="40%" stopColor="#D2B48C" />
          <stop offset="100%" stopColor="#F5E6D3" />
        </linearGradient>

        {/* Soil/topsoil layer */}
        <linearGradient id="rock-soil" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5C4033" />
          <stop offset="100%" stopColor="#4A3428" />
        </linearGradient>

        {/* Sandstone layer */}
        <linearGradient id="rock-sandstone" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D2B48C" />
          <stop offset="50%" stopColor="#C4A476" />
          <stop offset="100%" stopColor="#B8956A" />
        </linearGradient>

        {/* Shale layer */}
        <linearGradient id="rock-shale" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B6B6B" />
          <stop offset="50%" stopColor="#555555" />
          <stop offset="100%" stopColor="#484848" />
        </linearGradient>

        {/* Limestone layer */}
        <linearGradient id="rock-limestone" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B8B7A" />
          <stop offset="50%" stopColor="#7A7A68" />
          <stop offset="100%" stopColor="#6B6B5A" />
        </linearGradient>

        {/* Basalt / igneous layer */}
        <linearGradient id="rock-basalt" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D3D3D" />
          <stop offset="50%" stopColor="#2D2D2D" />
          <stop offset="100%" stopColor="#1E1E1E" />
        </linearGradient>

        {/* Granite layer */}
        <linearGradient id="rock-granite" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="50%" stopColor="#7A5B10" />
          <stop offset="100%" stopColor="#6B4E0D" />
        </linearGradient>

        {/* Red sandstone / iron rich */}
        <linearGradient id="rock-redsand" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="50%" stopColor="#8B4513" />
          <stop offset="100%" stopColor="#723710" />
        </linearGradient>

        {/* Clay layer */}
        <linearGradient id="rock-clay" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B8E23" />
          <stop offset="50%" stopColor="#5A7A1C" />
          <stop offset="100%" stopColor="#4A6616" />
        </linearGradient>

        {/* Magma gradient at bottom */}
        <linearGradient id="rock-magma" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A3428" />
          <stop offset="40%" stopColor="#3D1C0C" />
          <stop offset="70%" stopColor="#5C1A0A" />
          <stop offset="100%" stopColor="#8B2500" />
        </linearGradient>

        {/* Crystal/mineral vein */}
        <linearGradient id="rock-crystal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F5E6D3" stopOpacity="0.6" />
        </linearGradient>

        {/* Fossil pattern */}
        <pattern id="rock-fossil-pat" x="0" y="0" width="60" height="30" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="15" r="3" fill="none" stroke="#9A9A88" strokeWidth="0.5" opacity="0.3" />
          <path d="M40,10 Q45,8 48,12 Q50,16 45,18" fill="none" stroke="#9A9A88" strokeWidth="0.4" opacity="0.25" />
        </pattern>

        {/* Rock texture patterns */}
        <pattern id="rock-grain-sand" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.5" fill="#C4A476" opacity="0.3" />
          <circle cx="6" cy="5" r="0.4" fill="#B8956A" opacity="0.2" />
          <circle cx="4" cy="7" r="0.3" fill="#D2B48C" opacity="0.25" />
        </pattern>

        <pattern id="rock-grain-shale" x="0" y="0" width="30" height="4" patternUnits="userSpaceOnUse">
          <line x1="0" y1="2" x2="30" y2="2" stroke="#5A5A5A" strokeWidth="0.3" opacity="0.3" />
        </pattern>

        {/* Magma glow */}
        <filter id="rock-magma-glow">
          <feGaussianBlur stdDeviation="3" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Shadow */}
        <filter id="rock-shadow">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#2D1F15" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Sky */}
      <rect width="800" height="120" fill="url(#rock-sky)" />

      {/* Distant hills/mountains in background */}
      <path
        d="M0,120 Q80,70 160,95 Q240,60 320,90 Q400,50 480,85 Q560,55 640,80 Q720,60 800,100 L800,120 Z"
        fill="#B8956A"
        opacity="0.4"
      />
      <path
        d="M0,120 Q100,85 200,105 Q300,80 400,100 Q500,75 600,95 Q700,80 800,110 L800,120 Z"
        fill="#A08060"
        opacity="0.5"
      />

      {/* Surface terrain */}
      <path
        d="M0,120 Q50,115 100,118 Q200,110 300,120 Q400,108 500,118 Q600,112 700,120 Q750,115 800,118 L800,140 L0,140 Z"
        fill="#6B8E23"
        opacity="0.6"
      />
      {/* Grass tufts */}
      <g fill="#6B8E23" opacity="0.7">
        <path d="M50,118 L48,108 L52,110 L54,105 L56,112 L58,118" />
        <path d="M150,116 L148,106 L152,108 L154,104 L156,110 L158,116" />
        <path d="M300,120 L298,110 L302,112 L304,107 L306,113 L308,120" />
        <path d="M500,117 L498,107 L502,109 L504,105 L506,111 L508,117" />
        <path d="M650,118 L648,108 L652,110 L654,106 L656,112 L658,118" />
        <path d="M750,116 L748,106 L752,108 L754,104 L756,110 L758,116" />
      </g>

      {/* ===== CROSS-SECTION CUT LINE ===== */}
      {/* Diagonal cut revealing layers - left side shows surface, right shows cross section */}

      {/* Layer 1: Topsoil */}
      <path
        d="M0,140 L800,140 L800,170 Q700,175 600,168 Q500,178 400,172 Q300,180 200,170 Q100,176 0,172 Z"
        fill="url(#rock-soil)"
      />
      {/* Root-like details in topsoil */}
      <path d="M100,145 Q110,155 105,165" fill="none" stroke="#4A3428" strokeWidth="1" opacity="0.4" />
      <path d="M350,148 Q360,158 355,168" fill="none" stroke="#4A3428" strokeWidth="0.8" opacity="0.3" />
      <path d="M600,143 Q610,153 608,163" fill="none" stroke="#4A3428" strokeWidth="0.8" opacity="0.35" />

      {/* Layer 2: Sandy/alluvial layer */}
      <path
        d="M0,172 Q100,176 200,170 Q300,180 400,172 Q500,178 600,168 Q700,175 800,170
           L800,210 Q700,215 600,208 Q500,218 400,212 Q300,220 200,210 Q100,216 0,212 Z"
        fill="url(#rock-sandstone)"
      />
      <path
        d="M0,172 Q100,176 200,170 Q300,180 400,172 Q500,178 600,168 Q700,175 800,170
           L800,210 Q700,215 600,208 Q500,218 400,212 Q300,220 200,210 Q100,216 0,212 Z"
        fill="url(#rock-grain-sand)"
        opacity="0.5"
      />

      {/* Layer 3: Red sandstone / iron-rich */}
      <path
        d="M0,212 Q100,216 200,210 Q300,220 400,212 Q500,218 600,208 Q700,215 800,210
           L800,248 Q700,252 600,245 Q500,255 400,248 Q300,258 200,248 Q100,254 0,250 Z"
        fill="url(#rock-redsand)"
      />
      {/* Iron oxide spots */}
      <g opacity="0.3">
        <circle cx="120" cy="228" r="3" fill="#CD5C5C" />
        <circle cx="350" cy="232" r="2" fill="#CD5C5C" />
        <circle cx="500" cy="226" r="2.5" fill="#CD5C5C" />
        <circle cx="680" cy="230" r="2" fill="#CD5C5C" />
      </g>

      {/* Layer 4: Shale */}
      <path
        d="M0,250 Q100,254 200,248 Q300,258 400,248 Q500,255 600,245 Q700,252 800,248
           L800,290 Q700,295 600,288 Q500,298 400,290 Q300,300 200,290 Q100,296 0,292 Z"
        fill="url(#rock-shale)"
      />
      <path
        d="M0,250 Q100,254 200,248 Q300,258 400,248 Q500,255 600,245 Q700,252 800,248
           L800,290 Q700,295 600,288 Q500,298 400,290 Q300,300 200,290 Q100,296 0,292 Z"
        fill="url(#rock-grain-shale)"
        opacity="0.5"
      />

      {/* Layer 5: Limestone with fossils */}
      <path
        d="M0,292 Q100,296 200,290 Q300,300 400,290 Q500,298 600,288 Q700,295 800,290
           L800,330 Q700,336 600,328 Q500,340 400,332 Q300,340 200,330 Q100,336 0,332 Z"
        fill="url(#rock-limestone)"
      />
      {/* Fossil overlay */}
      <path
        d="M0,292 Q100,296 200,290 Q300,300 400,290 Q500,298 600,288 Q700,295 800,290
           L800,330 Q700,336 600,328 Q500,340 400,332 Q300,340 200,330 Q100,336 0,332 Z"
        fill="url(#rock-fossil-pat)"
        opacity="0.4"
      />
      {/* Ammonite fossil */}
      <g transform="translate(250, 310)" opacity="0.5">
        <circle cx="0" cy="0" r="10" fill="none" stroke="#A0A090" strokeWidth="1.5" />
        <path d="M0,-10 Q-8,-5 -5,0 Q-2,5 0,3 Q2,1 1,0" fill="none" stroke="#A0A090" strokeWidth="1" />
        <circle cx="1" cy="0" r="2" fill="#A0A090" opacity="0.4" />
      </g>
      {/* Trilobite-like fossil */}
      <g transform="translate(550, 308)" opacity="0.4">
        <ellipse cx="0" cy="0" rx="8" ry="5" fill="none" stroke="#A0A090" strokeWidth="1" />
        <line x1="-6" y1="0" x2="6" y2="0" stroke="#A0A090" strokeWidth="0.5" />
        <line x1="-4" y1="-4" x2="-4" y2="4" stroke="#A0A090" strokeWidth="0.5" />
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#A0A090" strokeWidth="0.5" />
        <line x1="4" y1="-4" x2="4" y2="4" stroke="#A0A090" strokeWidth="0.5" />
      </g>

      {/* Layer 6: Greenish clay / metamorphic */}
      <path
        d="M0,332 Q100,336 200,330 Q300,340 400,332 Q500,340 600,328 Q700,336 800,330
           L800,365 Q700,370 600,362 Q500,372 400,365 Q300,375 200,365 Q100,370 0,367 Z"
        fill="url(#rock-clay)"
      />

      {/* Layer 7: Granite / igneous intrusion */}
      <path
        d="M0,367 Q100,370 200,365 Q300,375 400,365 Q500,372 600,362 Q700,370 800,365
           L800,405 Q700,410 600,402 Q500,412 400,405 Q300,415 200,405 Q100,410 0,407 Z"
        fill="url(#rock-granite)"
      />
      {/* Granite speckle texture */}
      <g opacity="0.3">
        <circle cx="80" cy="385" r="1.5" fill="#F5E6D3" />
        <circle cx="95" cy="390" r="1" fill="#333" />
        <circle cx="110" cy="382" r="1.2" fill="#F5E6D3" />
        <circle cx="200" cy="388" r="1" fill="#333" />
        <circle cx="220" cy="380" r="1.5" fill="#F5E6D3" />
        <circle cx="300" cy="386" r="1" fill="#333" />
        <circle cx="320" cy="392" r="1.2" fill="#F5E6D3" />
        <circle cx="400" cy="383" r="1" fill="#333" />
        <circle cx="430" cy="390" r="1.5" fill="#F5E6D3" />
        <circle cx="500" cy="385" r="1" fill="#333" />
        <circle cx="520" cy="392" r="1.2" fill="#F5E6D3" />
        <circle cx="600" cy="380" r="1" fill="#333" />
        <circle cx="630" cy="388" r="1.5" fill="#F5E6D3" />
        <circle cx="700" cy="385" r="1" fill="#333" />
        <circle cx="730" cy="392" r="1.2" fill="#F5E6D3" />
      </g>

      {/* Layer 8: Basalt / deep rock */}
      <path
        d="M0,407 Q100,410 200,405 Q300,415 400,405 Q500,412 600,402 Q700,410 800,405
           L800,450 L0,450 Z"
        fill="url(#rock-basalt)"
      />

      {/* Deep magma hint at very bottom */}
      <rect x="0" y="440" width="800" height="10" fill="url(#rock-magma)" opacity="0.7" />
      {/* Magma glow spots */}
      <g filter="url(#rock-magma-glow)" opacity="0.4">
        <ellipse cx="200" cy="448" rx="30" ry="5" fill="#FF6600" opacity="0.3" />
        <ellipse cx="500" cy="448" rx="25" ry="4" fill="#FF4400" opacity="0.25" />
        <ellipse cx="700" cy="448" rx="20" ry="4" fill="#FF6600" opacity="0.2" />
      </g>

      {/* === MINERAL VEINS running through layers === */}
      {/* Quartz vein */}
      <path
        d="M180,170 Q190,200 185,230 Q180,260 195,290 Q200,310 190,340"
        fill="none"
        stroke="url(#rock-crystal)"
        strokeWidth="4"
        opacity="0.7"
      />
      <path
        d="M182,175 Q192,205 187,235"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1"
        opacity="0.4"
      />

      {/* Gold vein */}
      <path
        d="M480,250 Q490,270 485,290 Q480,310 490,330 Q495,350 488,370"
        fill="none"
        stroke="#8B6914"
        strokeWidth="3"
        opacity="0.6"
      />
      <path
        d="M482,255 Q492,275 487,295"
        fill="none"
        stroke="#D4A817"
        strokeWidth="1.5"
        opacity="0.5"
      />
      {/* Gold nugget highlights */}
      <circle cx="485" cy="290" r="3" fill="#D4A817" opacity="0.6" />
      <circle cx="490" cy="330" r="2" fill="#D4A817" opacity="0.5" />

      {/* Another mineral vein */}
      <path
        d="M650,210 Q660,240 655,270 Q650,300 660,330"
        fill="none"
        stroke="#6B8E23"
        strokeWidth="2.5"
        opacity="0.5"
      />

      {/* === GEODE / CRYSTAL CAVITY === */}
      <g transform="translate(380, 370)" filter="url(#rock-shadow)">
        {/* Cavity outline */}
        <ellipse cx="0" cy="0" rx="25" ry="18" fill="#1E1E1E" />
        <ellipse cx="0" cy="0" rx="22" ry="15" fill="#2D2D2D" />
        {/* Crystal formations inside */}
        <polygon points="-10,-8 -8,-15 -6,-8" fill="#D2B48C" opacity="0.7" />
        <polygon points="-4,-5 -2,-14 0,-5" fill="#F5E6D3" opacity="0.8" />
        <polygon points="3,-6 5,-13 7,-6" fill="#D2B48C" opacity="0.6" />
        <polygon points="8,-4 10,-10 12,-4" fill="#8B6914" opacity="0.7" />
        <polygon points="-14,-3 -12,-10 -10,-3" fill="#8B6914" opacity="0.5" />
        {/* Crystal sparkles */}
        <circle cx="-2" cy="-12" r="1.5" fill="white" opacity="0.6" />
        <circle cx="5" cy="-11" r="1" fill="white" opacity="0.4" />
      </g>

      {/* === LAYER LABELS (right side) === */}
      <g fontFamily="'Georgia', 'Times New Roman', serif" fontSize="9" fill="#F5E6D3" opacity="0.7">
        <text x="735" y="158" textAnchor="end">Topsoil</text>
        <text x="735" y="195" textAnchor="end">Sandstone</text>
        <text x="735" y="233" textAnchor="end">Red Sandstone</text>
        <text x="735" y="273" textAnchor="end">Shale</text>
        <text x="735" y="313" textAnchor="end">Limestone</text>
        <text x="735" y="352" textAnchor="end">Metamorphic</text>
        <text x="735" y="388" textAnchor="end">Granite</text>
        <text x="735" y="425" textAnchor="end">Basalt</text>
        {/* Label lines */}
        <g stroke="#F5E6D3" strokeWidth="0.5" opacity="0.4">
          <line x1="740" y1="155" x2="790" y2="155" />
          <line x1="740" y1="192" x2="790" y2="192" />
          <line x1="740" y1="230" x2="790" y2="230" />
          <line x1="740" y1="270" x2="790" y2="270" />
          <line x1="740" y1="310" x2="790" y2="310" />
          <line x1="740" y1="349" x2="790" y2="349" />
          <line x1="740" y1="385" x2="790" y2="385" />
          <line x1="740" y1="422" x2="790" y2="422" />
        </g>
      </g>

      {/* Decorative border */}
      <rect x="0" y="0" width="800" height="2" fill="#5C4033" opacity="0.3" />
    </svg>
  );
};

export default RockFormationHero;
