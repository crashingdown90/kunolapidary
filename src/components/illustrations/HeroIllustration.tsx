import React from "react";

interface HeroIllustrationProps {
  className?: string;
}

const HeroIllustration: React.FC<HeroIllustrationProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 675"
      className={className}
      role="img"
      aria-label="Crystals and gemstones emerging from rock formations"
    >
      <defs>
        {/* Sky gradient - warm earth tone sunset */}
        <linearGradient id="hero-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B6914" stopOpacity="0.3" />
          <stop offset="30%" stopColor="#D2B48C" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#F5E6D3" />
          <stop offset="100%" stopColor="#E8D5C0" />
        </linearGradient>

        {/* Warm light from above */}
        <radialGradient id="hero-light" cx="50%" cy="20%" r="60%">
          <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#D2B48C" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#D2B48C" stopOpacity="0" />
        </radialGradient>

        {/* Rock formation gradients */}
        <linearGradient id="hero-rock1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B5B45" />
          <stop offset="40%" stopColor="#5C4033" />
          <stop offset="100%" stopColor="#3D2B1F" />
        </linearGradient>
        <linearGradient id="hero-rock2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7A6B55" />
          <stop offset="50%" stopColor="#5C4033" />
          <stop offset="100%" stopColor="#4A3428" />
        </linearGradient>
        <linearGradient id="hero-rock3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4A3D30" />
          <stop offset="50%" stopColor="#6B5B45" />
          <stop offset="100%" stopColor="#5C4033" />
        </linearGradient>
        <linearGradient id="hero-rock-face" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="100%" stopColor="#5C4033" />
        </linearGradient>

        {/* Crystal gradients - warm amber/golden */}
        <linearGradient id="hero-crystal-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.95" />
          <stop offset="30%" stopColor="#FFAB00" />
          <stop offset="60%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#6B5210" />
        </linearGradient>
        <linearGradient id="hero-crystal-gold2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E1" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#FFD54F" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        {/* Crystal - clear quartz */}
        <linearGradient id="hero-crystal-clear" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="30%" stopColor="#F5E6D3" stopOpacity="0.7" />
          <stop offset="60%" stopColor="#E8D5C0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D2B48C" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="hero-crystal-clear2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#F0E8E0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D2B48C" stopOpacity="0.4" />
        </linearGradient>

        {/* Crystal - green/olivine */}
        <linearGradient id="hero-crystal-green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8BC34A" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#6B8E23" />
          <stop offset="100%" stopColor="#4A6316" />
        </linearGradient>
        <linearGradient id="hero-crystal-green2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C5E1A5" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#6B8E23" />
          <stop offset="100%" stopColor="#3A4D12" />
        </linearGradient>

        {/* Crystal - smoky brown */}
        <linearGradient id="hero-crystal-smoky" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D2B48C" stopOpacity="0.7" />
          <stop offset="40%" stopColor="#8B7355" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#5C4033" stopOpacity="0.5" />
        </linearGradient>

        {/* Crystal - rose/pink */}
        <linearGradient id="hero-crystal-rose" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFCDD2" stopOpacity="0.7" />
          <stop offset="40%" stopColor="#EF9A9A" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#B8705E" stopOpacity="0.5" />
        </linearGradient>

        {/* Sparkle/star burst */}
        <radialGradient id="hero-sparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Ground/earth gradient */}
        <linearGradient id="hero-ground" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B5B45" />
          <stop offset="30%" stopColor="#5C4033" />
          <stop offset="60%" stopColor="#4A3428" />
          <stop offset="100%" stopColor="#3D2B1F" />
        </linearGradient>

        {/* Geode interior */}
        <radialGradient id="hero-geode" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8B6914" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#5C4033" />
          <stop offset="100%" stopColor="#3D2B1F" />
        </radialGradient>

        {/* Filters */}
        <filter id="hero-glow">
          <feGaussianBlur stdDeviation="4" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="hero-soft-glow">
          <feGaussianBlur stdDeviation="8" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="hero-shadow">
          <feDropShadow dx="3" dy="5" stdDeviation="5" floodColor="#2D1F15" floodOpacity="0.4" />
        </filter>
        <filter id="hero-crystal-glow">
          <feGaussianBlur stdDeviation="6" result="glow" />
          <feColorMatrix type="saturate" values="1.5" in="glow" result="saturated" />
          <feMerge>
            <feMergeNode in="saturated" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Rock texture pattern */}
        <pattern id="hero-rock-tex" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="transparent" />
          <circle cx="5" cy="5" r="0.8" fill="#4A3428" opacity="0.2" />
          <circle cx="15" cy="12" r="0.6" fill="#6B5B45" opacity="0.15" />
          <circle cx="10" cy="18" r="0.5" fill="#4A3428" opacity="0.1" />
        </pattern>
      </defs>

      {/* ===== SKY / BACKGROUND ===== */}
      <rect width="1200" height="675" fill="url(#hero-sky)" />

      {/* Warm light source from top center */}
      <ellipse cx="600" cy="100" rx="500" ry="300" fill="url(#hero-light)" />

      {/* Subtle background particles/dust */}
      <g opacity="0.15">
        <circle cx="100" cy="100" r="1.5" fill="#F5E6D3" />
        <circle cx="300" cy="80" r="1" fill="#D2B48C" />
        <circle cx="500" cy="120" r="1.2" fill="#F5E6D3" />
        <circle cx="700" cy="90" r="0.8" fill="#D2B48C" />
        <circle cx="900" cy="110" r="1" fill="#F5E6D3" />
        <circle cx="1100" cy="85" r="1.3" fill="#D2B48C" />
        <circle cx="200" cy="200" r="0.8" fill="#F5E6D3" />
        <circle cx="800" cy="180" r="1" fill="#F5E6D3" />
        <circle cx="1000" cy="160" r="0.7" fill="#D2B48C" />
        <circle cx="150" cy="300" r="0.9" fill="#F5E6D3" />
        <circle cx="1050" cy="250" r="1.1" fill="#D2B48C" />
      </g>

      {/* ===== DISTANT MOUNTAINS/HILLS ===== */}
      <path
        d="M0,350 Q100,280 200,310 Q300,260 400,300 Q500,250 600,290 Q700,260 800,300 Q900,270 1000,310 Q1100,280 1200,320 L1200,400 L0,400 Z"
        fill="#8B7355"
        opacity="0.3"
      />
      <path
        d="M0,380 Q150,320 300,350 Q450,310 600,340 Q750,310 900,340 Q1050,320 1200,360 L1200,420 L0,420 Z"
        fill="#6B5B45"
        opacity="0.4"
      />

      {/* ===== MAIN GROUND / EARTH ===== */}
      <path
        d="M0,420 Q200,400 400,415 Q600,395 800,410 Q1000,400 1200,420 L1200,675 L0,675 Z"
        fill="url(#hero-ground)"
      />
      <path
        d="M0,420 Q200,400 400,415 Q600,395 800,410 Q1000,400 1200,420 L1200,675 L0,675 Z"
        fill="url(#hero-rock-tex)"
        opacity="0.3"
      />

      {/* Ground surface detail - scattered small rocks */}
      <g fill="#4A3428" opacity="0.5">
        <ellipse cx="100" cy="430" rx="8" ry="4" />
        <ellipse cx="250" cy="425" rx="5" ry="3" />
        <ellipse cx="450" cy="422" rx="6" ry="3" />
        <ellipse cx="750" cy="418" rx="7" ry="3" />
        <ellipse cx="950" cy="425" rx="5" ry="3" />
        <ellipse cx="1100" cy="428" rx="6" ry="3" />
      </g>

      {/* ===== LEFT ROCK FORMATION ===== */}
      <g filter="url(#hero-shadow)">
        <path
          d="M50,675 L30,500 L60,420 L100,380 L150,360 L180,370 L200,400 L220,420
             L240,440 L260,500 L250,675 Z"
          fill="url(#hero-rock1)"
        />
        {/* Rock face details */}
        <path d="M60,420 L100,380 L120,420 Z" fill="#7A6B55" opacity="0.4" />
        <path d="M100,380 L150,360 L140,400 L120,420 Z" fill="#6B5B45" opacity="0.3" />
        <path d="M150,360 L180,370 L170,410 L140,400 Z" fill="#5C4033" opacity="0.4" />
        <path d="M30,500 L60,420 L120,420 L100,500 Z" fill="#4A3D30" opacity="0.3" />
        {/* Crack lines */}
        <path d="M80,400 L95,450 L90,520" fill="none" stroke="#3D2B1F" strokeWidth="1" opacity="0.4" />
        <path d="M160,380 L155,430 L170,480" fill="none" stroke="#3D2B1F" strokeWidth="0.8" opacity="0.3" />
      </g>

      {/* ===== RIGHT ROCK FORMATION ===== */}
      <g filter="url(#hero-shadow)">
        <path
          d="M950,675 L940,520 L960,440 L1000,400 L1040,380 L1080,370 L1120,380
             L1150,410 L1170,450 L1180,500 L1180,675 Z"
          fill="url(#hero-rock2)"
        />
        {/* Rock face details */}
        <path d="M960,440 L1000,400 L1020,440 Z" fill="#8B7355" opacity="0.35" />
        <path d="M1000,400 L1040,380 L1030,420 L1020,440 Z" fill="#6B5B45" opacity="0.3" />
        <path d="M1040,380 L1080,370 L1070,410 L1030,420 Z" fill="#7A6B55" opacity="0.35" />
        <path d="M1080,370 L1120,380 L1100,420 L1070,410 Z" fill="#5C4033" opacity="0.4" />
        {/* Crack lines */}
        <path d="M1020,410 L1015,470 L1025,540" fill="none" stroke="#3D2B1F" strokeWidth="1" opacity="0.35" />
        <path d="M1100,400 L1095,450 L1105,510" fill="none" stroke="#3D2B1F" strokeWidth="0.8" opacity="0.3" />
      </g>

      {/* ===== CENTER ROCK FORMATION (main, with crystal cave) ===== */}
      <g filter="url(#hero-shadow)">
        <path
          d="M380,675 L370,520 L390,440 L420,400 L460,370 L520,350 L580,340
             L640,345 L700,360 L740,380 L770,410 L790,450 L800,520 L810,675 Z"
          fill="url(#hero-rock3)"
        />
        {/* Rock face details and shading */}
        <path d="M390,440 L420,400 L480,420 Z" fill="#7A6B55" opacity="0.3" />
        <path d="M420,400 L460,370 L470,410 L480,420 Z" fill="#6B5B45" opacity="0.35" />
        <path d="M580,340 L640,345 L630,390 L590,380 Z" fill="#5C4033" opacity="0.3" />
        <path d="M700,360 L740,380 L720,420 L690,400 Z" fill="#7A6B55" opacity="0.3" />
        <path d="M740,380 L770,410 L750,440 L720,420 Z" fill="#6B5B45" opacity="0.35" />

        {/* Geode/cave opening in center rock */}
        <ellipse cx="590" cy="430" rx="70" ry="50" fill="url(#hero-geode)" />
        <ellipse cx="590" cy="430" rx="60" ry="42" fill="#2D1F15" />

        {/* Crystals lining the geode interior */}
        <g opacity="0.6">
          <polygon points="545,445 548,410 551,445" fill="#8B6914" />
          <polygon points="555,448 559,405 563,448" fill="#D2B48C" />
          <polygon points="565,450 570,400 575,450" fill="#F5E6D3" opacity="0.5" />
          <polygon points="605,450 610,405 615,450" fill="#D2B48C" />
          <polygon points="618,448 622,410 626,448" fill="#8B6914" />
          <polygon points="630,445 634,415 638,445" fill="#6B5B45" />
        </g>
      </g>

      {/* ===== CRYSTAL CLUSTER - LEFT (emerging from left rock) ===== */}
      <g filter="url(#hero-crystal-glow)">
        {/* Large golden crystal */}
        <polygon
          points="160,360 175,220 190,360"
          fill="url(#hero-crystal-gold)"
          stroke="#8B6914"
          strokeWidth="0.5"
        />
        <polygon
          points="160,360 175,220 175,360"
          fill="url(#hero-crystal-gold2)"
          opacity="0.6"
        />
        {/* Facet line */}
        <line x1="175" y1="220" x2="175" y2="360" stroke="#FFAB00" strokeWidth="0.5" opacity="0.5" />

        {/* Medium clear crystal */}
        <polygon
          points="140,375 150,260 160,375"
          fill="url(#hero-crystal-clear)"
          stroke="#D2B48C"
          strokeWidth="0.5"
        />
        <polygon
          points="140,375 150,260 150,375"
          fill="url(#hero-crystal-clear2)"
          opacity="0.5"
        />

        {/* Small green crystal */}
        <polygon
          points="185,370 192,290 199,370"
          fill="url(#hero-crystal-green)"
          stroke="#4A6316"
          strokeWidth="0.5"
        />
        <polygon
          points="185,370 192,290 192,370"
          fill="url(#hero-crystal-green2)"
          opacity="0.5"
        />

        {/* Tiny smoky crystal */}
        <polygon
          points="125,385 130,320 135,385"
          fill="url(#hero-crystal-smoky)"
          stroke="#5C4033"
          strokeWidth="0.5"
        />
      </g>

      {/* ===== CRYSTAL CLUSTER - CENTER (main focal point) ===== */}
      <g filter="url(#hero-crystal-glow)">
        {/* Tallest central crystal - golden/amber */}
        <polygon
          points="570,340 600,140 630,340"
          fill="url(#hero-crystal-gold)"
          stroke="#8B6914"
          strokeWidth="1"
        />
        <polygon
          points="570,340 600,140 600,340"
          fill="url(#hero-crystal-gold2)"
          opacity="0.5"
        />
        {/* Facet details */}
        <polygon points="570,340 600,140 585,250" fill="#FFD54F" opacity="0.2" />
        <line x1="600" y1="140" x2="600" y2="340" stroke="#FFAB00" strokeWidth="0.5" opacity="0.4" />

        {/* Left crystal - clear quartz, tall */}
        <polygon
          points="530,350 555,180 580,350"
          fill="url(#hero-crystal-clear)"
          stroke="#D2B48C"
          strokeWidth="0.8"
        />
        <polygon
          points="530,350 555,180 555,350"
          fill="url(#hero-crystal-clear2)"
          opacity="0.5"
        />
        <polygon points="530,350 555,180 542,280" fill="#FFFFFF" opacity="0.15" />

        {/* Right crystal - green olivine */}
        <polygon
          points="620,345 645,200 670,345"
          fill="url(#hero-crystal-green)"
          stroke="#4A6316"
          strokeWidth="0.8"
        />
        <polygon
          points="620,345 645,200 645,345"
          fill="url(#hero-crystal-green2)"
          opacity="0.5"
        />

        {/* Far left - small smoky quartz */}
        <polygon
          points="505,360 520,270 535,360"
          fill="url(#hero-crystal-smoky)"
          stroke="#5C4033"
          strokeWidth="0.5"
        />

        {/* Far right - small rose quartz */}
        <polygon
          points="680,355 692,280 704,355"
          fill="url(#hero-crystal-rose)"
          stroke="#B8705E"
          strokeWidth="0.5"
        />

        {/* Additional small crystals for density */}
        <polygon
          points="550,355 558,300 566,355"
          fill="url(#hero-crystal-gold)"
          opacity="0.6"
        />
        <polygon
          points="635,350 642,290 649,350"
          fill="url(#hero-crystal-clear)"
          opacity="0.5"
        />
        <polygon
          points="590,345 596,250 602,345"
          fill="url(#hero-crystal-green)"
          opacity="0.5"
        />
      </g>

      {/* ===== CRYSTAL CLUSTER - RIGHT (emerging from right rock) ===== */}
      <g filter="url(#hero-crystal-glow)">
        {/* Large clear crystal */}
        <polygon
          points="1020,380 1040,230 1060,380"
          fill="url(#hero-crystal-clear)"
          stroke="#D2B48C"
          strokeWidth="0.5"
        />
        <polygon
          points="1020,380 1040,230 1040,380"
          fill="url(#hero-crystal-clear2)"
          opacity="0.5"
        />

        {/* Medium golden crystal */}
        <polygon
          points="1050,375 1065,260 1080,375"
          fill="url(#hero-crystal-gold)"
          stroke="#8B6914"
          strokeWidth="0.5"
        />
        <polygon
          points="1050,375 1065,260 1065,375"
          fill="url(#hero-crystal-gold2)"
          opacity="0.5"
        />

        {/* Small green crystal */}
        <polygon
          points="1005,390 1012,320 1019,390"
          fill="url(#hero-crystal-green)"
          stroke="#4A6316"
          strokeWidth="0.5"
        />

        {/* Tiny smoky crystal */}
        <polygon
          points="1085,385 1090,330 1095,385"
          fill="url(#hero-crystal-smoky)"
          stroke="#5C4033"
          strokeWidth="0.5"
        />
      </g>

      {/* ===== SPARKLE / SHINE EFFECTS ===== */}
      <g filter="url(#hero-glow)">
        {/* Major sparkle on center golden crystal tip */}
        <circle cx="600" cy="140" r="8" fill="url(#hero-sparkle)" />
        <line x1="600" y1="128" x2="600" y2="152" stroke="white" strokeWidth="1.5" opacity="0.8" />
        <line x1="588" y1="140" x2="612" y2="140" stroke="white" strokeWidth="1.5" opacity="0.8" />
        <line x1="592" y1="132" x2="608" y2="148" stroke="white" strokeWidth="1" opacity="0.5" />
        <line x1="608" y1="132" x2="592" y2="148" stroke="white" strokeWidth="1" opacity="0.5" />

        {/* Sparkle on left clear crystal */}
        <circle cx="555" cy="180" r="5" fill="url(#hero-sparkle)" />
        <line x1="555" y1="173" x2="555" y2="187" stroke="white" strokeWidth="1" opacity="0.7" />
        <line x1="548" y1="180" x2="562" y2="180" stroke="white" strokeWidth="1" opacity="0.7" />

        {/* Sparkle on right green crystal */}
        <circle cx="645" cy="200" r="4" fill="url(#hero-sparkle)" />
        <line x1="645" y1="194" x2="645" y2="206" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="639" y1="200" x2="651" y2="200" stroke="white" strokeWidth="1" opacity="0.6" />

        {/* Left cluster sparkles */}
        <circle cx="175" cy="220" r="5" fill="url(#hero-sparkle)" />
        <line x1="175" y1="214" x2="175" y2="226" stroke="white" strokeWidth="1" opacity="0.7" />
        <line x1="169" y1="220" x2="181" y2="220" stroke="white" strokeWidth="1" opacity="0.7" />

        <circle cx="150" cy="260" r="3" fill="url(#hero-sparkle)" />

        {/* Right cluster sparkles */}
        <circle cx="1040" cy="230" r="4" fill="url(#hero-sparkle)" />
        <line x1="1040" y1="224" x2="1040" y2="236" stroke="white" strokeWidth="1" opacity="0.6" />
        <line x1="1034" y1="230" x2="1046" y2="230" stroke="white" strokeWidth="1" opacity="0.6" />

        <circle cx="1065" cy="260" r="3" fill="url(#hero-sparkle)" />
      </g>

      {/* Floating sparkle particles in the air */}
      <g filter="url(#hero-soft-glow)" opacity="0.6">
        <circle cx="350" cy="250" r="2" fill="white" />
        <circle cx="480" cy="180" r="1.5" fill="white" />
        <circle cx="720" cy="200" r="1.8" fill="white" />
        <circle cx="850" cy="280" r="1.5" fill="white" />
        <circle cx="300" cy="320" r="1.2" fill="white" />
        <circle cx="900" cy="300" r="1.3" fill="white" />
        <circle cx="430" cy="280" r="1" fill="white" />
        <circle cx="760" cy="260" r="1.2" fill="white" />
        <circle cx="550" cy="300" r="1" fill="#FFD54F" opacity="0.5" />
        <circle cx="650" cy="280" r="1.2" fill="#FFD54F" opacity="0.4" />
      </g>

      {/* ===== SCATTERED SMALL GEMS / MINERAL FRAGMENTS on ground ===== */}
      {/* Small faceted gem - left */}
      <g transform="translate(320, 430)">
        <polygon points="0,-8 6,-3 4,6 -4,6 -6,-3" fill="#8B6914" stroke="#6B5210" strokeWidth="0.5" />
        <polygon points="0,-8 3,-3 0,0 -3,-3" fill="#D2B48C" opacity="0.6" />
        <circle cx="-1" cy="-4" r="1" fill="white" opacity="0.4" />
      </g>

      {/* Small faceted gem - center-left */}
      <g transform="translate(480, 425)">
        <polygon points="0,-6 5,-2 3,5 -3,5 -5,-2" fill="#6B8E23" stroke="#4A6316" strokeWidth="0.5" />
        <polygon points="0,-6 2,-2 0,0 -2,-2" fill="#8BC34A" opacity="0.5" />
      </g>

      {/* Small faceted gem - center-right */}
      <g transform="translate(700, 428)">
        <polygon points="0,-7 5,-3 3,5 -3,5 -5,-3" fill="#D2B48C" stroke="#8B6914" strokeWidth="0.5" />
        <polygon points="0,-7 2,-3 0,0 -2,-3" fill="#F5E6D3" opacity="0.5" />
        <circle cx="0" cy="-4" r="1" fill="white" opacity="0.3" />
      </g>

      {/* Small rough crystal fragment */}
      <g transform="translate(860, 432)">
        <polygon points="0,-5 4,-2 3,4 -3,4 -4,-2" fill="#5C4033" stroke="#4A3428" strokeWidth="0.5" />
      </g>

      {/* ===== SUBTLE FOREGROUND ELEMENTS ===== */}
      {/* Small rocks in foreground */}
      <g opacity="0.6">
        <ellipse cx="80" cy="640" rx="30" ry="15" fill="#4A3428" />
        <ellipse cx="250" cy="650" rx="20" ry="10" fill="#5C4033" />
        <ellipse cx="500" cy="655" rx="25" ry="12" fill="#4A3D30" />
        <ellipse cx="700" cy="645" rx="18" ry="9" fill="#5C4033" />
        <ellipse cx="1000" cy="648" rx="22" ry="11" fill="#4A3428" />
      </g>

      {/* Subtle mineral dust streaks in air */}
      <g opacity="0.1">
        <path d="M200,200 Q400,180 500,220" fill="none" stroke="#D2B48C" strokeWidth="1" />
        <path d="M700,190 Q800,210 1000,200" fill="none" stroke="#D2B48C" strokeWidth="0.8" />
      </g>

      {/* Vignette effect - darkened edges */}
      <rect width="1200" height="675" fill="url(#hero-ground)" opacity="0.1" />
      <rect x="0" y="620" width="1200" height="55" fill="#3D2B1F" opacity="0.3" />

      {/* Top decorative line */}
      <line x1="0" y1="2" x2="1200" y2="2" stroke="#5C4033" strokeWidth="2" opacity="0.2" />
    </svg>
  );
};

export default HeroIllustration;
