import React from "react";

interface LapidaryGuideHeroProps {
  className?: string;
}

const LapidaryGuideHero: React.FC<LapidaryGuideHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Lapidary guide illustration showing gem cutting and polishing tools"
    >
      <defs>
        {/* Background gradient */}
        <linearGradient id="lap-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="50%" stopColor="#E8D5C0" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>

        {/* Workbench surface */}
        <linearGradient id="lap-bench" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="40%" stopColor="#6B5210" />
          <stop offset="100%" stopColor="#5C4033" />
        </linearGradient>

        {/* Metal gradients for tools */}
        <linearGradient id="lap-metal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="30%" stopColor="#A8A8A8" />
          <stop offset="70%" stopColor="#888888" />
          <stop offset="100%" stopColor="#707070" />
        </linearGradient>
        <linearGradient id="lap-metal-dark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#888888" />
          <stop offset="100%" stopColor="#555555" />
        </linearGradient>

        {/* Cutting wheel gradient */}
        <radialGradient id="lap-wheel" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#999999" />
          <stop offset="60%" stopColor="#777777" />
          <stop offset="85%" stopColor="#666666" />
          <stop offset="100%" stopColor="#555555" />
        </radialGradient>

        {/* Gem being polished */}
        <linearGradient id="lap-gem-polish" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D2B48C" />
          <stop offset="30%" stopColor="#F5E6D3" />
          <stop offset="60%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>

        {/* Raw stone gradients */}
        <linearGradient id="lap-raw1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="50%" stopColor="#6B5B45" />
          <stop offset="100%" stopColor="#5C4033" />
        </linearGradient>
        <linearGradient id="lap-raw2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B8E23" />
          <stop offset="50%" stopColor="#4A6316" />
          <stop offset="100%" stopColor="#3A4D12" />
        </linearGradient>
        <linearGradient id="lap-raw3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#A0522D" />
          <stop offset="100%" stopColor="#6B3A20" />
        </linearGradient>

        {/* Sparkle effect */}
        <radialGradient id="lap-sparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Wood grain pattern */}
        <pattern id="lap-wood" x="0" y="0" width="40" height="8" patternUnits="userSpaceOnUse">
          <rect width="40" height="8" fill="#6B5210" />
          <path d="M0,2 Q10,0 20,2 T40,2" stroke="#5C4033" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M0,5 Q10,3 20,5 T40,5" stroke="#5C4033" strokeWidth="0.3" fill="none" opacity="0.2" />
          <path d="M0,7 Q10,6 20,7 T40,7" stroke="#8B6914" strokeWidth="0.3" fill="none" opacity="0.15" />
        </pattern>

        {/* Polishing dust */}
        <filter id="lap-dust">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feComposite operator="in" in="gray" in2="SourceGraphic" />
        </filter>

        {/* Shadow filter */}
        <filter id="lap-shadow">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#5C4033" floodOpacity="0.3" />
        </filter>

        {/* Glow for polished gem */}
        <filter id="lap-glow">
          <feGaussianBlur stdDeviation="3" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="url(#lap-bg)" />

      {/* Subtle background texture circles */}
      <circle cx="100" cy="80" r="120" fill="#D2B48C" opacity="0.15" />
      <circle cx="650" cy="100" r="150" fill="#8B6914" opacity="0.08" />
      <circle cx="400" cy="400" r="180" fill="#6B8E23" opacity="0.06" />

      {/* Workbench surface */}
      <rect x="0" y="260" width="800" height="190" fill="url(#lap-bench)" />
      <rect x="0" y="260" width="800" height="190" fill="url(#lap-wood)" opacity="0.4" />
      {/* Bench edge highlight */}
      <line x1="0" y1="260" x2="800" y2="260" stroke="#8B6914" strokeWidth="2" opacity="0.6" />
      <line x1="0" y1="262" x2="800" y2="262" stroke="#5C4033" strokeWidth="1" opacity="0.4" />

      {/* === CUTTING WHEEL (center-left) === */}
      <g transform="translate(250, 230)" filter="url(#lap-shadow)">
        {/* Machine base */}
        <rect x="-50" y="50" width="100" height="40" rx="3" fill="url(#lap-metal-dark)" />
        <rect x="-45" y="52" width="90" height="4" rx="1" fill="#999" opacity="0.3" />

        {/* Support arm */}
        <rect x="-8" y="-10" width="16" height="65" rx="2" fill="url(#lap-metal)" />

        {/* Cutting wheel */}
        <ellipse cx="0" cy="-10" rx="70" ry="70" fill="url(#lap-wheel)" stroke="#555" strokeWidth="2" />
        {/* Wheel texture rings */}
        <ellipse cx="0" cy="-10" rx="60" ry="60" fill="none" stroke="#666" strokeWidth="0.5" opacity="0.5" />
        <ellipse cx="0" cy="-10" rx="50" ry="50" fill="none" stroke="#888" strokeWidth="0.5" opacity="0.4" />
        <ellipse cx="0" cy="-10" rx="40" ry="40" fill="none" stroke="#666" strokeWidth="0.5" opacity="0.3" />
        <ellipse cx="0" cy="-10" rx="30" ry="30" fill="none" stroke="#888" strokeWidth="0.5" opacity="0.3" />
        <ellipse cx="0" cy="-10" rx="20" ry="20" fill="none" stroke="#666" strokeWidth="0.5" opacity="0.4" />
        {/* Center hub */}
        <circle cx="0" cy="-10" r="8" fill="#444" stroke="#333" strokeWidth="1" />
        <circle cx="0" cy="-10" r="3" fill="#555" />

        {/* Motion lines suggesting rotation */}
        <path d="M65,-10 Q68,-25 60,-35" stroke="#999" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="3,3" />
        <path d="M-65,-10 Q-68,5 -60,15" stroke="#999" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="3,3" />

        {/* Sparks from cutting */}
        <line x1="50" y1="-55" x2="58" y2="-68" stroke="#F5E6D3" strokeWidth="1.5" opacity="0.7" />
        <line x1="55" y1="-50" x2="66" y2="-60" stroke="#D2B48C" strokeWidth="1" opacity="0.6" />
        <line x1="45" y1="-58" x2="50" y2="-72" stroke="#FFFFFF" strokeWidth="1" opacity="0.5" />
        <circle cx="58" cy="-68" r="2" fill="url(#lap-sparkle)" />
        <circle cx="66" cy="-60" r="1.5" fill="url(#lap-sparkle)" />
      </g>

      {/* === POLISHED GEM (center) === */}
      <g transform="translate(450, 240)" filter="url(#lap-glow)">
        {/* Polishing pad beneath */}
        <ellipse cx="0" cy="48" rx="55" ry="12" fill="#5C4033" opacity="0.6" />
        <ellipse cx="0" cy="46" rx="50" ry="10" fill="#6B5B45" />

        {/* Faceted gem - oval brilliant cut side view */}
        <polygon
          points="0,-40 25,-28 35,-5 25,20 0,35 -25,20 -35,-5 -25,-28"
          fill="url(#lap-gem-polish)"
          stroke="#8B6914"
          strokeWidth="1.5"
        />
        {/* Gem facets */}
        <polygon points="0,-40 25,-28 10,-12 0,-15" fill="#F5E6D3" opacity="0.7" />
        <polygon points="0,-40 -25,-28 -10,-12 0,-15" fill="#D2B48C" opacity="0.6" />
        <polygon points="25,-28 35,-5 15,-5 10,-12" fill="#8B6914" opacity="0.5" />
        <polygon points="-25,-28 -35,-5 -15,-5 -10,-12" fill="#6B8E23" opacity="0.4" />
        <polygon points="35,-5 25,20 15,5 15,-5" fill="#D2B48C" opacity="0.55" />
        <polygon points="-35,-5 -25,20 -15,5 -15,-5" fill="#8B6914" opacity="0.45" />
        <polygon points="25,20 0,35 0,10 15,5" fill="#5C4033" opacity="0.4" />
        <polygon points="-25,20 0,35 0,10 -15,5" fill="#8B6914" opacity="0.35" />
        {/* Center table */}
        <polygon points="0,-15 10,-12 15,-5 15,5 0,10 -15,5 -15,-5 -10,-12" fill="#F5E6D3" opacity="0.5" />

        {/* Shine highlights */}
        <ellipse cx="-5" cy="-18" rx="6" ry="4" fill="white" opacity="0.4" />
        <circle cx="-2" cy="-20" r="2" fill="white" opacity="0.6" />

        {/* Sparkle stars around gem */}
        <g opacity="0.7">
          <line x1="42" y1="-20" x2="50" y2="-20" stroke="#F5E6D3" strokeWidth="1.5" />
          <line x1="46" y1="-24" x2="46" y2="-16" stroke="#F5E6D3" strokeWidth="1.5" />
          <line x1="-42" y1="-30" x2="-48" y2="-30" stroke="#D2B48C" strokeWidth="1" />
          <line x1="-45" y1="-33" x2="-45" y2="-27" stroke="#D2B48C" strokeWidth="1" />
          <line x1="30" y1="-48" x2="34" y2="-48" stroke="#FFFFFF" strokeWidth="1" />
          <line x1="32" y1="-50" x2="32" y2="-46" stroke="#FFFFFF" strokeWidth="1" />
        </g>
      </g>

      {/* === RAW STONES (right side) === */}
      <g transform="translate(640, 290)" filter="url(#lap-shadow)">
        {/* Shadow beneath stones */}
        <ellipse cx="10" cy="55" rx="80" ry="15" fill="#5C4033" opacity="0.3" />

        {/* Raw stone 1 - large irregular */}
        <path
          d="M-30,-20 L-10,-40 L20,-35 L40,-15 L35,10 L15,30 L-15,25 L-35,5 Z"
          fill="url(#lap-raw1)"
          stroke="#4A3828"
          strokeWidth="1"
        />
        {/* Rough texture on stone 1 */}
        <path d="M-10,-40 L5,-20 L20,-35" fill="#7A6448" opacity="0.5" />
        <path d="M40,-15 L20,-5 L35,10" fill="#5C4033" opacity="0.4" />
        <path d="M-35,5 L-15,0 L-15,25" fill="#8B7355" opacity="0.3" />

        {/* Raw stone 2 - smaller, greenish */}
        <path
          d="M50,-5 L65,-20 L85,-10 L80,15 L60,20 L45,10 Z"
          fill="url(#lap-raw2)"
          stroke="#3A4D12"
          strokeWidth="1"
        />
        <path d="M65,-20 L72,-5 L85,-10" fill="#5A7618" opacity="0.4" />

        {/* Raw stone 3 - small reddish */}
        <path
          d="M20,15 L35,5 L50,15 L45,30 L25,32 Z"
          fill="url(#lap-raw3)"
          stroke="#5A2D17"
          strokeWidth="1"
        />

        {/* Crystal vein visible in stone 1 */}
        <path
          d="M-20,-10 L-5,-15 L10,0 L5,15"
          fill="none"
          stroke="#D2B48C"
          strokeWidth="2"
          opacity="0.6"
        />
        <path
          d="M-18,-8 L-3,-13 L12,2"
          fill="none"
          stroke="#F5E6D3"
          strokeWidth="1"
          opacity="0.4"
        />
      </g>

      {/* === POLISHING TOOLS (left side) === */}
      <g transform="translate(80, 300)" filter="url(#lap-shadow)">
        {/* Hand file / flat lap stick */}
        <rect x="0" y="-10" width="80" height="12" rx="2" fill="url(#lap-metal)" transform="rotate(-15)" />
        <rect x="65" y="-10" width="30" height="12" rx="2" fill="#5C4033" transform="rotate(-15)" />
        {/* File texture */}
        <g transform="rotate(-15)" opacity="0.3">
          <line x1="10" y1="-8" x2="10" y2="0" stroke="#666" strokeWidth="0.5" />
          <line x1="18" y1="-8" x2="18" y2="0" stroke="#666" strokeWidth="0.5" />
          <line x1="26" y1="-8" x2="26" y2="0" stroke="#666" strokeWidth="0.5" />
          <line x1="34" y1="-8" x2="34" y2="0" stroke="#666" strokeWidth="0.5" />
          <line x1="42" y1="-8" x2="42" y2="0" stroke="#666" strokeWidth="0.5" />
          <line x1="50" y1="-8" x2="50" y2="0" stroke="#666" strokeWidth="0.5" />
          <line x1="58" y1="-8" x2="58" y2="0" stroke="#666" strokeWidth="0.5" />
        </g>
      </g>

      {/* Small loupe / magnifying lens */}
      <g transform="translate(130, 280)" filter="url(#lap-shadow)">
        <circle cx="0" cy="0" r="18" fill="none" stroke="#8B6914" strokeWidth="4" />
        <circle cx="0" cy="0" r="16" fill="#D2E8F0" opacity="0.3" />
        {/* Lens reflection */}
        <ellipse cx="-5" cy="-5" rx="6" ry="4" fill="white" opacity="0.3" transform="rotate(-30)" />
        {/* Handle */}
        <rect x="13" y="10" width="8" height="30" rx="2" fill="#5C4033" transform="rotate(40, 13, 10)" />
      </g>

      {/* === DECORATIVE ELEMENTS === */}
      {/* Scattered gem dust / powder */}
      <g opacity="0.4">
        <circle cx="380" cy="310" r="1" fill="#D2B48C" />
        <circle cx="395" cy="315" r="0.8" fill="#F5E6D3" />
        <circle cx="410" cy="308" r="1.2" fill="#D2B48C" />
        <circle cx="420" cy="318" r="0.6" fill="#8B6914" />
        <circle cx="400" cy="320" r="0.9" fill="#F5E6D3" />
        <circle cx="435" cy="312" r="1" fill="#D2B48C" />
        <circle cx="445" cy="305" r="0.7" fill="#D2B48C" />
        <circle cx="460" cy="315" r="1.1" fill="#F5E6D3" />
        <circle cx="385" cy="325" r="0.8" fill="#8B6914" />
        <circle cx="425" cy="322" r="0.6" fill="#D2B48C" />
      </g>

      {/* Water droplets near cutting wheel */}
      <g opacity="0.3">
        <ellipse cx="290" cy="300" rx="3" ry="2" fill="#87CEEB" />
        <ellipse cx="275" cy="308" rx="2" ry="1.5" fill="#87CEEB" />
        <ellipse cx="310" cy="295" rx="2.5" ry="1.5" fill="#ADD8E6" />
      </g>

      {/* Title area - decorative banner at top */}
      <rect x="0" y="0" width="800" height="4" fill="#5C4033" opacity="0.3" />
    </svg>
  );
};

export default LapidaryGuideHero;
