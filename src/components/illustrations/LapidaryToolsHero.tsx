import React from "react";

interface LapidaryToolsHeroProps {
  className?: string;
}

const LapidaryToolsHero: React.FC<LapidaryToolsHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Essential lapidary tools including saw, grinding wheel, polishing supplies, and loupe"
    >
      <defs>
        {/* Background gradient */}
        <linearGradient id="tools-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="50%" stopColor="#E8D5C0" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>

        {/* Workbench surface */}
        <linearGradient id="tools-bench" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="40%" stopColor="#6B5210" />
          <stop offset="100%" stopColor="#5C4033" />
        </linearGradient>

        {/* Wood grain pattern */}
        <pattern id="tools-wood" x="0" y="0" width="40" height="8" patternUnits="userSpaceOnUse">
          <rect width="40" height="8" fill="#6B5210" />
          <path d="M0,2 Q10,0 20,2 T40,2" stroke="#5C4033" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M0,5 Q10,3 20,5 T40,5" stroke="#5C4033" strokeWidth="0.3" fill="none" opacity="0.2" />
          <path d="M0,7 Q10,6 20,7 T40,7" stroke="#8B6914" strokeWidth="0.3" fill="none" opacity="0.15" />
        </pattern>

        {/* Metal gradient - steel tools */}
        <linearGradient id="tools-metal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D0D0D0" />
          <stop offset="20%" stopColor="#B8B8B8" />
          <stop offset="50%" stopColor="#A0A0A0" />
          <stop offset="80%" stopColor="#B8B8B8" />
          <stop offset="100%" stopColor="#909090" />
        </linearGradient>
        <linearGradient id="tools-metal-dark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#888888" />
          <stop offset="100%" stopColor="#555555" />
        </linearGradient>

        {/* Saw blade metallic gradient */}
        <radialGradient id="tools-saw" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="40%" stopColor="#A8A8A8" />
          <stop offset="70%" stopColor="#909090" />
          <stop offset="90%" stopColor="#787878" />
          <stop offset="100%" stopColor="#666666" />
        </radialGradient>
        <linearGradient id="tools-saw-shine" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#E0E0E0" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A0A0A0" stopOpacity="0" />
        </linearGradient>

        {/* Dop wax gradient */}
        <linearGradient id="tools-wax" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B4513" />
          <stop offset="50%" stopColor="#6B3410" />
          <stop offset="100%" stopColor="#5C2D0E" />
        </linearGradient>

        {/* Dop stick metal */}
        <linearGradient id="tools-dop" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="30%" stopColor="#A8A8A8" />
          <stop offset="70%" stopColor="#B8B8B8" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </linearGradient>

        {/* Stone on dop */}
        <radialGradient id="tools-dop-stone" cx="45%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#6B8E23" />
          <stop offset="50%" stopColor="#4A6316" />
          <stop offset="100%" stopColor="#3A4D12" />
        </radialGradient>

        {/* Polishing compound containers */}
        <linearGradient id="tools-container1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D2B48C" />
          <stop offset="50%" stopColor="#B89D6E" />
          <stop offset="100%" stopColor="#A08050" />
        </linearGradient>
        <linearGradient id="tools-container2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8D5C0" />
          <stop offset="50%" stopColor="#D2B48C" />
          <stop offset="100%" stopColor="#B89D6E" />
        </linearGradient>
        <linearGradient id="tools-compound-green" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#6B8E23" />
          <stop offset="100%" stopColor="#4A6316" />
        </linearGradient>
        <linearGradient id="tools-compound-white" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E0E0E0" />
        </linearGradient>

        {/* Loupe gradients */}
        <linearGradient id="tools-loupe-rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2D1810" />
          <stop offset="30%" stopColor="#3D2518" />
          <stop offset="70%" stopColor="#2D1810" />
          <stop offset="100%" stopColor="#1A0E08" />
        </linearGradient>
        <radialGradient id="tools-lens" cx="40%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#E8F0F8" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#D0E0F0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#B0C8E0" stopOpacity="0.15" />
        </radialGradient>

        {/* Goggles gradients */}
        <linearGradient id="tools-goggle-frame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5C4033" />
          <stop offset="50%" stopColor="#3D2B1F" />
          <stop offset="100%" stopColor="#2D1810" />
        </linearGradient>
        <linearGradient id="tools-goggle-lens" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#D8E8F0" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#B0C8D8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#90A8B8" stopOpacity="0.3" />
        </linearGradient>

        {/* Raw stone gradients */}
        <linearGradient id="tools-raw1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B07040" />
          <stop offset="50%" stopColor="#8B5E38" />
          <stop offset="100%" stopColor="#6B4828" />
        </linearGradient>
        <linearGradient id="tools-raw2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A080C0" />
          <stop offset="50%" stopColor="#7B5EA0" />
          <stop offset="100%" stopColor="#5A3D80" />
        </linearGradient>
        <linearGradient id="tools-raw3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#48A0A0" />
          <stop offset="50%" stopColor="#307878" />
          <stop offset="100%" stopColor="#205858" />
        </linearGradient>

        {/* Sparkle */}
        <radialGradient id="tools-sparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Filters */}
        <filter id="tools-shadow">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#5C4033" floodOpacity="0.35" />
        </filter>
        <filter id="tools-shadow-soft">
          <feDropShadow dx="1" dy="2" stdDeviation="4" floodColor="#2D1810" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="url(#tools-bg)" />

      {/* Subtle background atmosphere */}
      <circle cx="120" cy="80" r="130" fill="#D2B48C" opacity="0.12" />
      <circle cx="680" cy="100" r="140" fill="#8B6914" opacity="0.08" />
      <circle cx="400" cy="60" r="160" fill="#F5E6D3" opacity="0.1" />

      {/* Workbench surface */}
      <rect x="0" y="240" width="800" height="210" fill="url(#tools-bench)" />
      <rect x="0" y="240" width="800" height="210" fill="url(#tools-wood)" opacity="0.4" />
      {/* Bench edge highlight */}
      <line x1="0" y1="240" x2="800" y2="240" stroke="#8B6914" strokeWidth="2" opacity="0.6" />
      <line x1="0" y1="242" x2="800" y2="242" stroke="#5C4033" strokeWidth="1" opacity="0.4" />

      {/* === TRIM SAW BLADE (left side, leaning against back) === */}
      <g transform="translate(130, 240)" filter="url(#tools-shadow)">
        {/* Blade - circular disk */}
        <circle cx="0" cy="-65" r="80" fill="url(#tools-saw)" stroke="#606060" strokeWidth="1.5" />
        {/* Saw blade shine overlay */}
        <circle cx="0" cy="-65" r="80" fill="url(#tools-saw-shine)" />
        {/* Center arbor hole */}
        <circle cx="0" cy="-65" r="10" fill="#5C4033" stroke="#888" strokeWidth="1.5" />
        <circle cx="0" cy="-65" r="5" fill="#707070" />

        {/* Concentric rings on blade surface */}
        <circle cx="0" cy="-65" r="65" fill="none" stroke="#B0B0B0" strokeWidth="0.3" opacity="0.4" />
        <circle cx="0" cy="-65" r="50" fill="none" stroke="#A0A0A0" strokeWidth="0.3" opacity="0.35" />
        <circle cx="0" cy="-65" r="35" fill="none" stroke="#B0B0B0" strokeWidth="0.3" opacity="0.3" />
        <circle cx="0" cy="-65" r="20" fill="none" stroke="#A0A0A0" strokeWidth="0.3" opacity="0.25" />

        {/* Teeth on edge (subtle notches around circumference) */}
        <g opacity="0.35">
          <line x1="80" y1="-65" x2="77" y2="-65" stroke="#555" strokeWidth="1" />
          <line x1="-80" y1="-65" x2="-77" y2="-65" stroke="#555" strokeWidth="1" />
          <line x1="0" y1="15" x2="0" y2="12" stroke="#555" strokeWidth="1" />
          <line x1="0" y1="-145" x2="0" y2="-142" stroke="#555" strokeWidth="1" />
          <line x1="57" y1="-8" x2="55" y2="-10" stroke="#555" strokeWidth="1" />
          <line x1="-57" y1="-8" x2="-55" y2="-10" stroke="#555" strokeWidth="1" />
          <line x1="57" y1="-122" x2="55" y2="-120" stroke="#555" strokeWidth="1" />
          <line x1="-57" y1="-122" x2="-55" y2="-120" stroke="#555" strokeWidth="1" />
          <line x1="77" y1="-35" x2="74" y2="-36" stroke="#555" strokeWidth="1" />
          <line x1="77" y1="-95" x2="74" y2="-94" stroke="#555" strokeWidth="1" />
          <line x1="-77" y1="-35" x2="-74" y2="-36" stroke="#555" strokeWidth="1" />
          <line x1="-77" y1="-95" x2="-74" y2="-94" stroke="#555" strokeWidth="1" />
          <line x1="40" y1="5" x2="38" y2="3" stroke="#555" strokeWidth="1" />
          <line x1="-40" y1="5" x2="-38" y2="3" stroke="#555" strokeWidth="1" />
          <line x1="40" y1="-135" x2="38" y2="-133" stroke="#555" strokeWidth="1" />
          <line x1="-40" y1="-135" x2="-38" y2="-133" stroke="#555" strokeWidth="1" />
        </g>

        {/* Highlight arc on blade */}
        <path
          d="M-40,-125 Q-10,-140 30,-130"
          fill="none"
          stroke="white"
          strokeWidth="2"
          opacity="0.15"
        />
        <path
          d="M-35,-120 Q-5,-133 25,-125"
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity="0.1"
        />
      </g>

      {/* === DOP STICK WITH STONE (center-left) === */}
      <g transform="translate(310, 295)" filter="url(#tools-shadow)">
        {/* Dop stick - metal rod */}
        <rect x="-4" y="-5" width="8" height="100" rx="2" fill="url(#tools-dop)" />
        {/* Stick highlight */}
        <rect x="-2" y="-5" width="2" height="100" rx="0.5" fill="#D8D8D8" opacity="0.3" />

        {/* Dop wax (brown blob connecting stone to stick) */}
        <ellipse cx="0" cy="-8" rx="10" ry="7" fill="url(#tools-wax)" />
        <ellipse cx="-2" cy="-10" rx="4" ry="2.5" fill="#A0602A" opacity="0.3" />

        {/* Stone on dop - partially shaped cabochon */}
        <ellipse cx="0" cy="-22" rx="14" ry="12" fill="url(#tools-dop-stone)" stroke="#3A4D12" strokeWidth="0.8" />
        {/* Stone highlight */}
        <ellipse cx="-3" cy="-26" rx="5" ry="3" fill="#8BB840" opacity="0.4" />
        <ellipse cx="-2" cy="-27" rx="2.5" ry="1.5" fill="white" opacity="0.25" />

        {/* Stick bottom end */}
        <ellipse cx="0" cy="95" rx="4" ry="1.5" fill="#909090" />
      </g>

      {/* === POLISHING COMPOUND CONTAINERS (center) === */}
      <g transform="translate(440, 310)" filter="url(#tools-shadow)">
        {/* Container 1 - round tin, green compound (cerium oxide) */}
        <ellipse cx="0" cy="35" rx="30" ry="8" fill="#5C4033" opacity="0.3" />
        <rect x="-28" y="5" width="56" height="30" rx="3" fill="url(#tools-container1)" stroke="#8B6914" strokeWidth="0.8" />
        <ellipse cx="0" cy="5" rx="28" ry="10" fill="url(#tools-container1)" stroke="#8B6914" strokeWidth="0.8" />
        {/* Green compound visible inside */}
        <ellipse cx="0" cy="5" rx="22" ry="7" fill="url(#tools-compound-green)" />
        <ellipse cx="-4" cy="3" rx="8" ry="3" fill="#8BB840" opacity="0.3" />
        {/* Label area on side */}
        <rect x="-18" y="12" width="36" height="14" rx="1" fill="#F5E6D3" opacity="0.5" />
        <text x="0" y="23" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="6" fill="#5C4033" opacity="0.6">
          CERIUM
        </text>

        {/* Container 2 - smaller, white compound (diamond paste), offset */}
        <g transform="translate(55, 5)">
          <ellipse cx="0" cy="30" rx="22" ry="6" fill="#5C4033" opacity="0.25" />
          <rect x="-20" y="5" width="40" height="25" rx="2" fill="url(#tools-container2)" stroke="#D2B48C" strokeWidth="0.8" />
          <ellipse cx="0" cy="5" rx="20" ry="8" fill="url(#tools-container2)" stroke="#D2B48C" strokeWidth="0.8" />
          {/* White compound */}
          <ellipse cx="0" cy="5" rx="15" ry="5.5" fill="url(#tools-compound-white)" />
          <ellipse cx="-3" cy="3" rx="6" ry="2.5" fill="white" opacity="0.4" />
          {/* Label */}
          <rect x="-13" y="10" width="26" height="12" rx="1" fill="#F5E6D3" opacity="0.5" />
          <text x="0" y="20" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5.5" fill="#5C4033" opacity="0.6">
            DIAMOND
          </text>
        </g>
      </g>

      {/* === HAND LOUPE / MAGNIFYING GLASS (right-center) === */}
      <g transform="translate(615, 285)" filter="url(#tools-shadow)">
        {/* Loupe body / housing - folding triplet type */}
        <rect x="-18" y="-2" width="36" height="48" rx="4" fill="url(#tools-loupe-rim)" stroke="#1A0E08" strokeWidth="0.8" />
        {/* Housing detail lines */}
        <line x1="-14" y1="8" x2="14" y2="8" stroke="#3D2518" strokeWidth="0.5" opacity="0.5" />
        <line x1="-14" y1="36" x2="14" y2="36" stroke="#3D2518" strokeWidth="0.5" opacity="0.5" />

        {/* Lens - circular, swung out from housing */}
        <g transform="translate(0, -30)">
          {/* Lens rim */}
          <circle cx="0" cy="0" r="22" fill="url(#tools-loupe-rim)" stroke="#1A0E08" strokeWidth="1" />
          {/* Lens glass */}
          <circle cx="0" cy="0" r="18" fill="url(#tools-lens)" stroke="#2D1810" strokeWidth="0.5" />
          {/* Lens reflection */}
          <ellipse cx="-5" cy="-6" rx="8" ry="5" fill="white" opacity="0.2" transform="rotate(-20, -5, -6)" />
          <ellipse cx="-4" cy="-7" rx="4" ry="2.5" fill="white" opacity="0.3" transform="rotate(-20, -4, -7)" />
          {/* Magnified view hint through lens */}
          <circle cx="2" cy="3" r="6" fill="none" stroke="#D2B48C" strokeWidth="1" opacity="0.15" />
          <circle cx="2" cy="3" r="3" fill="none" stroke="#D2B48C" strokeWidth="0.5" opacity="0.1" />
        </g>

        {/* Pivot hinge */}
        <circle cx="0" cy="0" r="3" fill="#2D1810" stroke="#1A0E08" strokeWidth="0.5" />
      </g>

      {/* === SAFETY GOGGLES (back, draped) === */}
      <g transform="translate(540, 250)" filter="url(#tools-shadow-soft)">
        {/* Strap */}
        <path
          d="M-65,5 Q-55,-8 -40,-10 L40,-10 Q55,-8 65,5"
          fill="none"
          stroke="url(#tools-goggle-frame)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Strap continuation behind */}
        <path
          d="M-65,5 Q-75,18 -70,30"
          fill="none"
          stroke="#3D2B1F"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M65,5 Q75,18 70,30"
          fill="none"
          stroke="#3D2B1F"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Left lens housing */}
        <ellipse cx="-25" cy="-5" rx="25" ry="20" fill="url(#tools-goggle-frame)" stroke="#1A0E08" strokeWidth="1" />
        <ellipse cx="-25" cy="-5" rx="20" ry="16" fill="url(#tools-goggle-lens)" />
        {/* Left lens reflection */}
        <ellipse cx="-30" cy="-10" rx="7" ry="4" fill="white" opacity="0.15" transform="rotate(-15, -30, -10)" />

        {/* Bridge / nose piece */}
        <rect x="-6" y="-12" width="12" height="10" rx="2" fill="#3D2B1F" />

        {/* Right lens housing */}
        <ellipse cx="25" cy="-5" rx="25" ry="20" fill="url(#tools-goggle-frame)" stroke="#1A0E08" strokeWidth="1" />
        <ellipse cx="25" cy="-5" rx="20" ry="16" fill="url(#tools-goggle-lens)" />
        {/* Right lens reflection */}
        <ellipse cx="20" cy="-10" rx="7" ry="4" fill="white" opacity="0.15" transform="rotate(-15, 20, -10)" />
      </g>

      {/* === RAW STONE SPECIMENS (far right) === */}
      <g transform="translate(700, 310)" filter="url(#tools-shadow)">
        {/* Stone 1 - large irregular chunk (agate/jasper) */}
        <path
          d="M-25,-30 L-5,-42 L18,-35 L30,-18 L25,5 L10,18 L-15,15 L-30,-5 Z"
          fill="url(#tools-raw1)"
          stroke="#5A3820"
          strokeWidth="1"
        />
        {/* Rough texture faces */}
        <path d="M-5,-42 L8,-22 L18,-35" fill="#C08858" opacity="0.4" />
        <path d="M30,-18 L15,-5 L25,5" fill="#6B4828" opacity="0.35" />
        <path d="M-30,-5 L-12,-2 L-15,15" fill="#B07040" opacity="0.3" />
        {/* Crystal vein */}
        <path d="M-15,-15 L0,-20 L12,-8 L5,8" fill="none" stroke="#F5E6D3" strokeWidth="1.5" opacity="0.45" />

        {/* Stone 2 - medium amethyst chunk */}
        <g transform="translate(-40, 15)">
          <path
            d="M-12,-18 L5,-22 L18,-12 L15,5 L2,14 L-15,8 Z"
            fill="url(#tools-raw2)"
            stroke="#4A2D68"
            strokeWidth="0.8"
          />
          <path d="M5,-22 L10,-8 L18,-12" fill="#B090D0" opacity="0.35" />
          {/* Crystal face glint */}
          <path d="M-5,-10 L5,-8 L3,0" fill="#C0A0E0" opacity="0.25" />
        </g>

        {/* Stone 3 - small turquoise-like piece */}
        <g transform="translate(15, 22)">
          <path
            d="M-10,-10 L4,-14 L14,-5 L10,8 L-4,12 L-12,2 Z"
            fill="url(#tools-raw3)"
            stroke="#1A4040"
            strokeWidth="0.8"
          />
          {/* Matrix veining */}
          <path d="M-5,-5 L2,0 L-2,6" fill="none" stroke="#1A4040" strokeWidth="0.8" opacity="0.4" />
          <path d="M4,-8 L6,-2 L10,2" fill="none" stroke="#1A4040" strokeWidth="0.5" opacity="0.3" />
        </g>
      </g>

      {/* === SCATTERED DETAILS === */}

      {/* Small polishing pad/cloth near center */}
      <g transform="translate(370, 370)">
        <path
          d="M-25,-8 L25,-10 L28,8 L-22,10 Z"
          fill="#E8D5C0"
          stroke="#D2B48C"
          strokeWidth="0.5"
          opacity="0.7"
        />
        <path
          d="M-22,10 L-18,14 L32,12 L28,8 Z"
          fill="#D2B48C"
          opacity="0.5"
        />
      </g>

      {/* Water droplets / coolant splashes near saw */}
      <g opacity="0.25">
        <ellipse cx="170" cy="262" rx="4" ry="2" fill="#87CEEB" />
        <ellipse cx="155" cy="268" rx="2.5" ry="1.5" fill="#87CEEB" />
        <ellipse cx="190" cy="258" rx="3" ry="1.5" fill="#ADD8E6" />
        <ellipse cx="110" cy="272" rx="2" ry="1" fill="#87CEEB" />
      </g>

      {/* Fine dust particles */}
      <g opacity="0.3">
        <circle cx="280" cy="290" r="0.8" fill="#D2B48C" />
        <circle cx="295" cy="285" r="1" fill="#F5E6D3" />
        <circle cx="340" cy="295" r="0.7" fill="#D2B48C" />
        <circle cx="420" cy="280" r="0.9" fill="#F5E6D3" />
        <circle cx="455" cy="290" r="0.6" fill="#8B6914" />
        <circle cx="500" cy="285" r="0.8" fill="#D2B48C" />
        <circle cx="580" cy="275" r="1" fill="#F5E6D3" />
        <circle cx="650" cy="282" r="0.7" fill="#D2B48C" />
      </g>

      {/* Metallic sparkle on saw blade */}
      <g>
        <circle cx="155" cy="148" r="2.5" fill="url(#tools-sparkle)" />
        <circle cx="108" cy="180" r="1.5" fill="url(#tools-sparkle)" />
      </g>

      {/* Highlight sparkle on loupe lens */}
      <circle cx="611" cy="248" r="2" fill="url(#tools-sparkle)" />

      {/* Decorative top border */}
      <rect x="0" y="0" width="800" height="4" fill="#5C4033" opacity="0.3" />
    </svg>
  );
};

export default LapidaryToolsHero;
