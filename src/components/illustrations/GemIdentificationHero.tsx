import React from "react";

interface GemIdentificationHeroProps {
  className?: string;
}

const GemIdentificationHero: React.FC<GemIdentificationHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Gemstone identification tools including loupe, streak plate, and hardness testing kit"
    >
      <defs>
        {/* Background gradient */}
        <radialGradient id="gemid-bg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="60%" stopColor="#E8D5C0" />
          <stop offset="100%" stopColor="#D2B48C" />
        </radialGradient>

        {/* Wooden desk surface */}
        <linearGradient id="gemid-desk" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="30%" stopColor="#7A5B10" />
          <stop offset="70%" stopColor="#6B4E0D" />
          <stop offset="100%" stopColor="#5C4033" />
        </linearGradient>

        {/* Wood grain pattern */}
        <pattern id="gemid-wood" x="0" y="0" width="50" height="10" patternUnits="userSpaceOnUse">
          <rect width="50" height="10" fill="#6B5210" />
          <path d="M0,3 Q12,1 25,3 T50,3" stroke="#5C4033" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M0,6 Q12,4 25,6 T50,6" stroke="#5C4033" strokeWidth="0.3" fill="none" opacity="0.2" />
          <path d="M0,9 Q12,7.5 25,9 T50,9" stroke="#8B6914" strokeWidth="0.3" fill="none" opacity="0.15" />
        </pattern>

        {/* Metal gradients for tools */}
        <linearGradient id="gemid-metal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="30%" stopColor="#A8A8A8" />
          <stop offset="70%" stopColor="#888888" />
          <stop offset="100%" stopColor="#707070" />
        </linearGradient>

        <linearGradient id="gemid-metal-dark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#666666" />
          <stop offset="100%" stopColor="#444444" />
        </linearGradient>

        {/* Gold/brass loupe body */}
        <linearGradient id="gemid-brass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A817" />
          <stop offset="30%" stopColor="#8B6914" />
          <stop offset="70%" stopColor="#6B5210" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>

        {/* Loupe lens */}
        <radialGradient id="gemid-lens" cx="40%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
          <stop offset="40%" stopColor="#D0E8F0" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A0C0D0" stopOpacity="0.1" />
        </radialGradient>

        {/* Streak plate (white porcelain) */}
        <linearGradient id="gemid-porcelain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0F0F0" />
          <stop offset="30%" stopColor="#E8E8E8" />
          <stop offset="70%" stopColor="#D8D8D8" />
          <stop offset="100%" stopColor="#CCCCCC" />
        </linearGradient>

        {/* Flashlight body */}
        <linearGradient id="gemid-flashlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#333333" />
          <stop offset="40%" stopColor="#1A1A1A" />
          <stop offset="100%" stopColor="#111111" />
        </linearGradient>

        {/* Flashlight beam */}
        <radialGradient id="gemid-beam" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#FFFDE8" stopOpacity="0.4" />
          <stop offset="40%" stopColor="#FFF8C4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFF8C4" stopOpacity="0" />
        </radialGradient>

        {/* Mystery stone gradients */}
        <linearGradient id="gemid-stone1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B8E23" />
          <stop offset="50%" stopColor="#4A6316" />
          <stop offset="100%" stopColor="#3A5012" />
        </linearGradient>

        <radialGradient id="gemid-stone2" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#CE93D8" />
          <stop offset="50%" stopColor="#AB47BC" />
          <stop offset="100%" stopColor="#7B1FA2" />
        </radialGradient>

        <linearGradient id="gemid-stone3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A817" />
          <stop offset="50%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#6B5210" />
        </linearGradient>

        {/* Magnified view circle gradient border */}
        <linearGradient id="gemid-mag-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A817" />
          <stop offset="50%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#D4A817" />
        </linearGradient>

        {/* Magnified crystal lattice background */}
        <radialGradient id="gemid-mag-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#E8F0E8" />
          <stop offset="70%" stopColor="#D0E0D0" />
          <stop offset="100%" stopColor="#B8D0B8" />
        </radialGradient>

        {/* Scratch mineral gradients */}
        <linearGradient id="gemid-scratch1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>
        <linearGradient id="gemid-scratch2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#707070" />
        </linearGradient>
        <linearGradient id="gemid-scratch3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF9999" />
          <stop offset="100%" stopColor="#CC6666" />
        </linearGradient>

        {/* Shadow */}
        <filter id="gemid-shadow">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#5C4033" floodOpacity="0.3" />
        </filter>

        <filter id="gemid-shadow-sm">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#5C4033" floodOpacity="0.25" />
        </filter>

        {/* Glow for magnified view */}
        <filter id="gemid-glow">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="url(#gemid-bg)" />

      {/* Soft light circles */}
      <circle cx="200" cy="120" r="200" fill="#D2B48C" opacity="0.08" />
      <circle cx="600" cy="150" r="180" fill="#8B6914" opacity="0.06" />

      {/* Wooden desk surface */}
      <rect x="0" y="210" width="800" height="240" fill="url(#gemid-desk)" />
      <rect x="0" y="210" width="800" height="240" fill="url(#gemid-wood)" opacity="0.4" />
      {/* Desk edge highlights */}
      <line x1="0" y1="210" x2="800" y2="210" stroke="#8B6914" strokeWidth="2.5" opacity="0.6" />
      <line x1="0" y1="213" x2="800" y2="213" stroke="#5C4033" strokeWidth="1" opacity="0.3" />

      {/* ===== JEWELER'S LOUPE (left area) ===== */}
      <g transform="translate(140, 280)" filter="url(#gemid-shadow)">
        {/* Loupe body - folded triplet style */}
        <rect x="-18" y="-12" width="36" height="55" rx="4" fill="url(#gemid-brass)" stroke="#6B5210" strokeWidth="1" />
        {/* Body detail grooves */}
        <line x1="-14" y1="5" x2="14" y2="5" stroke="#6B5210" strokeWidth="0.5" opacity="0.4" />
        <line x1="-14" y1="15" x2="14" y2="15" stroke="#6B5210" strokeWidth="0.5" opacity="0.4" />
        <line x1="-14" y1="25" x2="14" y2="25" stroke="#6B5210" strokeWidth="0.5" opacity="0.4" />
        {/* "10x" marking */}
        <text x="0" y="38" textAnchor="middle" fontFamily="'Arial', sans-serif" fontSize="7" fill="#2D1810" opacity="0.5">10x</text>

        {/* Lens housing extended upward */}
        <rect x="-14" y="-35" width="28" height="25" rx="3" fill="#8B6914" stroke="#6B5210" strokeWidth="0.8" />

        {/* Lens - circular */}
        <circle cx="0" cy="-22" r="15" fill="url(#gemid-lens)" stroke="url(#gemid-brass)" strokeWidth="3" />
        {/* Lens reflection */}
        <ellipse cx="-5" cy="-27" rx="6" ry="3.5" fill="white" opacity="0.25" transform="rotate(-15)" />
        <circle cx="-3" cy="-29" r="1.5" fill="white" opacity="0.35" />
        {/* Inner ring */}
        <circle cx="0" cy="-22" r="12" fill="none" stroke="#D4A817" strokeWidth="0.5" opacity="0.4" />

        {/* Highlight on brass body */}
        <rect x="-15" y="-8" width="5" height="45" rx="2" fill="#D4A817" opacity="0.2" />
      </g>

      {/* ===== STREAK PLATE (center) ===== */}
      <g transform="translate(370, 320)" filter="url(#gemid-shadow)">
        {/* Unglazed porcelain plate - rectangular */}
        <rect x="-75" y="-30" width="150" height="70" rx="3" fill="url(#gemid-porcelain)" stroke="#BBBBBB" strokeWidth="1" />
        {/* Surface texture */}
        <rect x="-70" y="-25" width="140" height="60" rx="2" fill="none" stroke="#E0E0E0" strokeWidth="0.5" opacity="0.5" />

        {/* Colored streak marks on the plate */}
        {/* Green streak */}
        <path d="M-55,-15 Q-35,-18 -15,-12" fill="none" stroke="#6B8E23" strokeWidth="4" opacity="0.7" strokeLinecap="round" />
        <path d="M-50,-12 Q-30,-15 -12,-10" fill="none" stroke="#6B8E23" strokeWidth="2" opacity="0.4" strokeLinecap="round" />

        {/* Purple streak */}
        <path d="M-40,5 Q-15,2 15,8" fill="none" stroke="#7B1FA2" strokeWidth="3.5" opacity="0.6" strokeLinecap="round" />
        <path d="M-35,8 Q-10,5 18,10" fill="none" stroke="#AB47BC" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />

        {/* Golden/brown streak */}
        <path d="M10,-8 Q35,-12 60,-5" fill="none" stroke="#8B6914" strokeWidth="3" opacity="0.65" strokeLinecap="round" />
        <path d="M15,-5 Q38,-9 58,-3" fill="none" stroke="#D4A817" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />

        {/* Reddish streak */}
        <path d="M20,18 Q45,15 65,20" fill="none" stroke="#A0522D" strokeWidth="3" opacity="0.55" strokeLinecap="round" />

        {/* Subtle surface imperfections */}
        <circle cx="-50" cy="20" r="0.8" fill="#C0C0C0" opacity="0.3" />
        <circle cx="30" cy="-20" r="0.6" fill="#C0C0C0" opacity="0.3" />
      </g>

      {/* ===== HARDNESS TESTING MINERALS (right of streak plate) ===== */}
      <g transform="translate(570, 290)" filter="url(#gemid-shadow-sm)">
        {/* Small wooden box/tray */}
        <rect x="-45" y="-15" width="90" height="75" rx="3" fill="#5C4033" stroke="#4A3428" strokeWidth="1" />
        <rect x="-42" y="-12" width="84" height="3" rx="1" fill="#6B5210" opacity="0.4" />

        {/* Hardness testing minerals in box */}
        {/* Mineral 1 - Calcite (white/cream) - Mohs 3 */}
        <rect x="-35" y="0" width="22" height="14" rx="2" fill="url(#gemid-scratch1)" stroke="#C4A476" strokeWidth="0.5" />
        <text x="-24" y="22" textAnchor="middle" fontFamily="'Arial', sans-serif" fontSize="5.5" fill="#D2B48C" opacity="0.7">3</text>

        {/* Mineral 2 - Feldspar (gray) - Mohs 6 */}
        <rect x="-8" y="-2" width="22" height="16" rx="2" fill="url(#gemid-scratch2)" stroke="#606060" strokeWidth="0.5" />
        <text x="3" y="22" textAnchor="middle" fontFamily="'Arial', sans-serif" fontSize="5.5" fill="#D2B48C" opacity="0.7">6</text>

        {/* Mineral 3 - Quartz (pinkish) - Mohs 7 */}
        <rect x="20" y="-1" width="20" height="15" rx="2" fill="url(#gemid-scratch3)" stroke="#AA5555" strokeWidth="0.5" />
        <text x="30" y="22" textAnchor="middle" fontFamily="'Arial', sans-serif" fontSize="5.5" fill="#D2B48C" opacity="0.7">7</text>

        {/* Steel nail (for testing ~5.5 hardness) */}
        <rect x="-38" y="30" width="70" height="4" rx="1" fill="url(#gemid-metal)" stroke="#808080" strokeWidth="0.3" />
        <polygon points="32,30 38,32 32,34" fill="#A0A0A0" />
        <circle cx="-35" cy="32" r="4" fill="#888888" stroke="#707070" strokeWidth="0.5" />
        {/* Nail head detail */}
        <line x1="-37" y1="30" x2="-33" y2="34" stroke="#777" strokeWidth="0.3" opacity="0.4" />

        {/* Label "MOHS KIT" */}
        <text x="0" y="52" textAnchor="middle" fontFamily="'Arial', sans-serif" fontSize="6" fill="#D2B48C" opacity="0.5">MOHS KIT</text>
      </g>

      {/* ===== FLASHLIGHT (upper right area) ===== */}
      <g transform="translate(680, 260)" filter="url(#gemid-shadow)">
        {/* Flashlight body */}
        <rect x="-55" y="-10" width="80" height="20" rx="5" fill="url(#gemid-flashlight)" transform="rotate(-20)" />
        {/* Grip texture */}
        <g transform="rotate(-20)" opacity="0.3">
          <line x1="-35" y1="-8" x2="-35" y2="8" stroke="#444" strokeWidth="1" />
          <line x1="-28" y1="-8" x2="-28" y2="8" stroke="#444" strokeWidth="1" />
          <line x1="-21" y1="-8" x2="-21" y2="8" stroke="#444" strokeWidth="1" />
          <line x1="-14" y1="-8" x2="-14" y2="8" stroke="#444" strokeWidth="1" />
          <line x1="-7" y1="-8" x2="-7" y2="8" stroke="#444" strokeWidth="1" />
        </g>
        {/* Flashlight head */}
        <rect x="22" y="-13" width="18" height="26" rx="3" fill="#2D1810" transform="rotate(-20)" />
        {/* Lens */}
        <ellipse cx="42" cy="-6" rx="5" ry="10" fill="#FFFDE8" opacity="0.4" transform="rotate(-20)" />

        {/* Button */}
        <circle cx="-10" cy="-2" r="3" fill="#333" stroke="#555" strokeWidth="0.5" transform="rotate(-20)" />

        {/* Beam of light on desk */}
        <ellipse cx="75" cy="30" rx="35" ry="18" fill="url(#gemid-beam)" transform="rotate(-20)" opacity="0.6" />
      </g>

      {/* ===== MYSTERY STONES BEING TESTED ===== */}
      {/* Stone 1 - greenish, near streak plate */}
      <g transform="translate(280, 310)" filter="url(#gemid-shadow-sm)">
        <path
          d="M-12,-8 L-4,-14 L8,-10 L14,-2 L10,8 L-2,12 L-12,4 Z"
          fill="url(#gemid-stone1)"
          stroke="#3A5012"
          strokeWidth="0.8"
        />
        <path d="M-4,-14 L2,-4 L8,-10" fill="#5A7A1C" opacity="0.4" />
        <ellipse cx="-2" cy="-4" rx="3" ry="2" fill="#8B9E43" opacity="0.3" />
      </g>

      {/* Stone 2 - purple, near loupe */}
      <g transform="translate(200, 340)" filter="url(#gemid-shadow-sm)">
        <ellipse cx="0" cy="0" rx="14" ry="10" fill="url(#gemid-stone2)" stroke="#5C1890" strokeWidth="0.8" />
        <ellipse cx="-3" cy="-3" rx="5" ry="3" fill="#D4A0E0" opacity="0.3" />
        <circle cx="-2" cy="-4" r="1.5" fill="white" opacity="0.2" />
      </g>

      {/* Stone 3 - golden, in the flashlight beam area */}
      <g transform="translate(710, 330)" filter="url(#gemid-shadow-sm)">
        <path
          d="M-10,-6 L0,-12 L12,-6 L14,6 L4,12 L-8,8 Z"
          fill="url(#gemid-stone3)"
          stroke="#5C4033"
          strokeWidth="0.8"
        />
        <path d="M0,-12 L4,0 L12,-6" fill="#D4A817" opacity="0.4" />
        <ellipse cx="1" cy="-2" rx="3" ry="2" fill="#F5E6D3" opacity="0.3" />
      </g>

      {/* ===== MAGNIFIED VIEW (upper left - like looking through loupe) ===== */}
      <g transform="translate(160, 110)">
        {/* Magnification circle */}
        <circle cx="0" cy="0" r="72" fill="url(#gemid-mag-bg)" stroke="url(#gemid-mag-ring)" strokeWidth="5" />
        {/* Inner ring */}
        <circle cx="0" cy="0" r="68" fill="none" stroke="#6B5210" strokeWidth="1" opacity="0.4" />

        {/* Crystal structure detail visible through loupe */}
        {/* Hexagonal crystal lattice */}
        <g opacity="0.7">
          {/* Central hexagonal crystal */}
          <polygon
            points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15"
            fill="none"
            stroke="#6B8E23"
            strokeWidth="1.5"
          />
          {/* Inner hexagon */}
          <polygon
            points="0,-18 16,-9 16,9 0,18 -16,9 -16,-9"
            fill="#6B8E23"
            opacity="0.15"
            stroke="#6B8E23"
            strokeWidth="1"
          />
          {/* Core */}
          <polygon
            points="0,-8 7,-4 7,4 0,8 -7,4 -7,-4"
            fill="#6B8E23"
            opacity="0.25"
          />

          {/* Lattice connecting lines */}
          <line x1="0" y1="-30" x2="0" y2="-18" stroke="#4A6316" strokeWidth="0.5" />
          <line x1="26" y1="-15" x2="16" y2="-9" stroke="#4A6316" strokeWidth="0.5" />
          <line x1="26" y1="15" x2="16" y2="9" stroke="#4A6316" strokeWidth="0.5" />
          <line x1="0" y1="30" x2="0" y2="18" stroke="#4A6316" strokeWidth="0.5" />
          <line x1="-26" y1="15" x2="-16" y2="9" stroke="#4A6316" strokeWidth="0.5" />
          <line x1="-26" y1="-15" x2="-16" y2="-9" stroke="#4A6316" strokeWidth="0.5" />

          {/* Atomic positions */}
          <circle cx="0" cy="-30" r="3" fill="#6B8E23" opacity="0.6" />
          <circle cx="26" cy="-15" r="3" fill="#6B8E23" opacity="0.6" />
          <circle cx="26" cy="15" r="3" fill="#6B8E23" opacity="0.6" />
          <circle cx="0" cy="30" r="3" fill="#6B8E23" opacity="0.6" />
          <circle cx="-26" cy="15" r="3" fill="#6B8E23" opacity="0.6" />
          <circle cx="-26" cy="-15" r="3" fill="#6B8E23" opacity="0.6" />
          <circle cx="0" cy="0" r="3.5" fill="#8B9E43" opacity="0.7" />

          {/* Secondary bonds */}
          <line x1="0" y1="-30" x2="26" y2="-15" stroke="#6B8E23" strokeWidth="0.5" opacity="0.4" strokeDasharray="2,2" />
          <line x1="26" y1="-15" x2="26" y2="15" stroke="#6B8E23" strokeWidth="0.5" opacity="0.4" strokeDasharray="2,2" />
          <line x1="26" y1="15" x2="0" y2="30" stroke="#6B8E23" strokeWidth="0.5" opacity="0.4" strokeDasharray="2,2" />

          {/* Cleavage plane indicators */}
          <line x1="-40" y1="0" x2="40" y2="0" stroke="#4A6316" strokeWidth="0.3" opacity="0.3" strokeDasharray="4,4" />
          <line x1="-20" y1="-35" x2="20" y2="35" stroke="#4A6316" strokeWidth="0.3" opacity="0.3" strokeDasharray="4,4" />
        </g>

        {/* Inclusion visible under magnification */}
        <circle cx="18" cy="22" r="4" fill="#3A5012" opacity="0.3" />
        <path d="M15,20 Q19,18 22,22" fill="none" stroke="#3A5012" strokeWidth="0.5" opacity="0.4" />

        {/* Small label */}
        <text x="0" y="55" textAnchor="middle" fontFamily="'Arial', sans-serif" fontSize="7" fill="#5C4033" opacity="0.5">10x magnification</text>

        {/* Lens highlight arc */}
        <path d="M-50,-52 Q-30,-65 0,-68" fill="none" stroke="white" strokeWidth="2" opacity="0.2" />
      </g>

      {/* Dashed line connecting loupe to magnified view */}
      <g opacity="0.25">
        <line x1="150" y1="180" x2="142" y2="240" stroke="#8B6914" strokeWidth="1" strokeDasharray="4,4" />
        <line x1="170" y1="180" x2="155" y2="240" stroke="#8B6914" strokeWidth="1" strokeDasharray="4,4" />
      </g>

      {/* ===== TWEEZERS holding a stone ===== */}
      <g transform="translate(470, 250)" filter="url(#gemid-shadow-sm)">
        {/* Tweezer arms */}
        <path d="M-2,-45 L-4,-5 L-1,0" fill="none" stroke="url(#gemid-metal)" strokeWidth="3" strokeLinecap="round" />
        <path d="M2,-45 L4,-5 L1,0" fill="none" stroke="url(#gemid-metal)" strokeWidth="3" strokeLinecap="round" />
        {/* Twezer tips holding stone */}
        <line x1="-1" y1="0" x2="1" y2="0" stroke="#888" strokeWidth="2" />
        {/* Small stone in tweezers */}
        <circle cx="0" cy="2" r="5" fill="#AB47BC" stroke="#7B1FA2" strokeWidth="0.5" />
        <circle cx="-1" cy="0" r="1.5" fill="#CE93D8" opacity="0.5" />
      </g>

      {/* ===== REFERENCE CARD on desk ===== */}
      <g transform="translate(90, 365)" filter="url(#gemid-shadow-sm)">
        <rect x="-30" y="-15" width="60" height="50" rx="2" fill="#FFFEF5" stroke="#D2B48C" strokeWidth="0.5" />
        {/* Lines of text (simplified) */}
        <line x1="-22" y1="-5" x2="22" y2="-5" stroke="#D2B48C" strokeWidth="1" opacity="0.3" />
        <line x1="-22" y1="3" x2="18" y2="3" stroke="#D2B48C" strokeWidth="1" opacity="0.3" />
        <line x1="-22" y1="11" x2="22" y2="11" stroke="#D2B48C" strokeWidth="1" opacity="0.3" />
        <line x1="-22" y1="19" x2="12" y2="19" stroke="#D2B48C" strokeWidth="1" opacity="0.3" />
        <line x1="-22" y1="27" x2="20" y2="27" stroke="#D2B48C" strokeWidth="1" opacity="0.3" />
        <text x="0" y="-5" textAnchor="middle" fontFamily="'Arial', sans-serif" fontSize="5" fill="#5C4033" opacity="0.4">ID NOTES</text>
      </g>

      {/* ===== SMALL SCALE / BALANCE HINT ===== */}
      <g transform="translate(750, 350)" opacity="0.5">
        <rect x="-15" y="-2" width="30" height="4" rx="1" fill="url(#gemid-metal)" />
        <rect x="-2" y="2" width="4" height="20" rx="1" fill="url(#gemid-metal-dark)" />
        <rect x="-8" y="22" width="16" height="3" rx="1" fill="#666" />
        {/* Pans */}
        <path d="M-15,-2 Q-20,6 -12,6 L-18,6 Q-22,6 -15,-2" fill="#888" opacity="0.3" />
        <path d="M15,-2 Q20,6 12,6 L18,6 Q22,6 15,-2" fill="#888" opacity="0.3" />
      </g>

      {/* ===== SCATTERED TOOLS / DETAILS ===== */}
      {/* Small pencil */}
      <g transform="translate(500, 385)" opacity="0.6">
        <rect x="-35" y="-3" width="60" height="6" rx="1" fill="#D4A817" transform="rotate(-8)" />
        <polygon points="-35,-3 -42,0 -35,3" fill="#F5E6D3" transform="rotate(-8)" />
        <rect x="20" y="-3" width="5" height="6" rx="0.5" fill="#CC6666" transform="rotate(-8)" />
      </g>

      {/* Gem cloth / cleaning pad */}
      <g transform="translate(330, 395)" opacity="0.4">
        <rect x="-20" y="-12" width="40" height="24" rx="2" fill="#2D1810" />
        <rect x="-18" y="-10" width="36" height="20" rx="1" fill="#3D2B1F" />
        <text x="0" y="2" textAnchor="middle" fontFamily="'Arial', sans-serif" fontSize="5" fill="#5C4033" opacity="0.5">CLOTH</text>
      </g>

      {/* Decorative borders */}
      <rect x="0" y="0" width="800" height="3" fill="#5C4033" opacity="0.2" />
      <rect x="0" y="447" width="800" height="3" fill="#5C4033" opacity="0.2" />
    </svg>
  );
};

export default GemIdentificationHero;
