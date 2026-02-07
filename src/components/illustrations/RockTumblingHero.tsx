import React from "react";

interface RockTumblingHeroProps {
  className?: string;
}

const RockTumblingHero: React.FC<RockTumblingHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Rock tumbler barrel with rough and polished stones"
    >
      <defs>
        {/* Background gradient */}
        <linearGradient id="tumble-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="50%" stopColor="#E8D5C0" />
          <stop offset="100%" stopColor="#D2B48C" />
        </linearGradient>

        {/* Workbench surface */}
        <linearGradient id="tumble-bench" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8B6914" />
          <stop offset="40%" stopColor="#6B5210" />
          <stop offset="100%" stopColor="#5C4033" />
        </linearGradient>

        {/* Metal barrel gradient */}
        <linearGradient id="tumble-barrel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A0A0A0" />
          <stop offset="20%" stopColor="#C8C8C8" />
          <stop offset="40%" stopColor="#909090" />
          <stop offset="60%" stopColor="#B0B0B0" />
          <stop offset="80%" stopColor="#888888" />
          <stop offset="100%" stopColor="#707070" />
        </linearGradient>

        {/* Barrel end cap gradient */}
        <radialGradient id="tumble-cap" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B0B0B0" />
          <stop offset="50%" stopColor="#909090" />
          <stop offset="100%" stopColor="#686868" />
        </radialGradient>

        {/* Motor/base gradient */}
        <linearGradient id="tumble-motor" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#555555" />
          <stop offset="50%" stopColor="#3A3A3A" />
          <stop offset="100%" stopColor="#2A2A2A" />
        </linearGradient>

        {/* Rubber barrel liner */}
        <linearGradient id="tumble-rubber" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3A3A3A" />
          <stop offset="50%" stopColor="#2D2D2D" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>

        {/* Frame metal */}
        <linearGradient id="tumble-frame" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#888888" />
          <stop offset="50%" stopColor="#A0A0A0" />
          <stop offset="100%" stopColor="#777777" />
        </linearGradient>

        {/* Rough stone gradients */}
        <linearGradient id="tumble-rough1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B7355" />
          <stop offset="50%" stopColor="#6B5B45" />
          <stop offset="100%" stopColor="#5C4033" />
        </linearGradient>
        <linearGradient id="tumble-rough2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7A6A5A" />
          <stop offset="100%" stopColor="#5A4A3A" />
        </linearGradient>
        <linearGradient id="tumble-rough3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A0825A" />
          <stop offset="100%" stopColor="#6B5530" />
        </linearGradient>
        <linearGradient id="tumble-rough4" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B6B5B" />
          <stop offset="100%" stopColor="#4A4A3A" />
        </linearGradient>

        {/* Semi-polished stone gradient */}
        <linearGradient id="tumble-semi1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B09070" />
          <stop offset="50%" stopColor="#907050" />
          <stop offset="100%" stopColor="#7A6040" />
        </linearGradient>
        <linearGradient id="tumble-semi2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8AAA7A" />
          <stop offset="100%" stopColor="#5A7A4A" />
        </linearGradient>

        {/* Polished stone gradients */}
        <radialGradient id="tumble-polish1" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#E8C8A0" />
          <stop offset="40%" stopColor="#C8A878" />
          <stop offset="100%" stopColor="#8B6914" />
        </radialGradient>
        <radialGradient id="tumble-polish2" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#90D880" />
          <stop offset="40%" stopColor="#6BAA58" />
          <stop offset="100%" stopColor="#3A6B28" />
        </radialGradient>
        <radialGradient id="tumble-polish3" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#E8A090" />
          <stop offset="40%" stopColor="#C87868" />
          <stop offset="100%" stopColor="#8B4030" />
        </radialGradient>
        <radialGradient id="tumble-polish4" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#A0B8E8" />
          <stop offset="40%" stopColor="#7890C0" />
          <stop offset="100%" stopColor="#4A6090" />
        </radialGradient>
        <radialGradient id="tumble-polish5" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#F0E0D0" />
          <stop offset="40%" stopColor="#D8C8B0" />
          <stop offset="100%" stopColor="#B0A088" />
        </radialGradient>

        {/* Sparkle */}
        <radialGradient id="tumble-sparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Wood grain pattern */}
        <pattern id="tumble-wood" x="0" y="0" width="40" height="8" patternUnits="userSpaceOnUse">
          <rect width="40" height="8" fill="#6B5210" />
          <path d="M0,2 Q10,0 20,2 T40,2" stroke="#5C4033" strokeWidth="0.5" fill="none" opacity="0.3" />
          <path d="M0,5 Q10,3 20,5 T40,5" stroke="#5C4033" strokeWidth="0.3" fill="none" opacity="0.2" />
          <path d="M0,7 Q10,6 20,7 T40,7" stroke="#8B6914" strokeWidth="0.3" fill="none" opacity="0.15" />
        </pattern>

        {/* Shadow filter */}
        <filter id="tumble-shadow">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#2D1810" floodOpacity="0.4" />
        </filter>

        {/* Glow for polished stones */}
        <filter id="tumble-glow">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Arrow gradient */}
        <linearGradient id="tumble-arrow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B6914" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#8B6914" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8B6914" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="url(#tumble-bg)" />

      {/* Subtle background texture */}
      <circle cx="150" cy="100" r="160" fill="#D2B48C" opacity="0.12" />
      <circle cx="650" cy="80" r="200" fill="#8B6914" opacity="0.06" />
      <circle cx="400" cy="380" r="150" fill="#6B8E23" opacity="0.05" />

      {/* Workbench surface */}
      <rect x="0" y="310" width="800" height="140" fill="url(#tumble-bench)" />
      <rect x="0" y="310" width="800" height="140" fill="url(#tumble-wood)" opacity="0.35" />
      <line x1="0" y1="310" x2="800" y2="310" stroke="#8B6914" strokeWidth="2" opacity="0.6" />
      <line x1="0" y1="312" x2="800" y2="312" stroke="#5C4033" strokeWidth="1" opacity="0.4" />

      {/* === ROCK TUMBLER (left side) === */}
      <g transform="translate(200, 230)" filter="url(#tumble-shadow)">
        {/* Motor base */}
        <rect x="-90" y="55" width="180" height="30" rx="4" fill="url(#tumble-motor)" />
        <rect x="-85" y="57" width="170" height="3" rx="1" fill="#666" opacity="0.4" />
        {/* Power switch */}
        <rect x="60" y="62" width="15" height="10" rx="2" fill="#444" stroke="#555" strokeWidth="0.5" />
        <circle cx="67" cy="67" r="3" fill="#6B8E23" opacity="0.8" />
        <circle cx="67" cy="67" r="1.5" fill="#8BC34A" opacity="0.9" />
        {/* Power cord hint */}
        <path d="M90,72 Q100,72 105,78 Q110,85 120,85" fill="none" stroke="#333" strokeWidth="2.5" strokeLinecap="round" />

        {/* Support frame / roller bars */}
        {/* Left upright */}
        <rect x="-80" y="-10" width="12" height="68" rx="2" fill="url(#tumble-frame)" />
        {/* Right upright */}
        <rect x="68" y="-10" width="12" height="68" rx="2" fill="url(#tumble-frame)" />

        {/* Roller bars (two horizontal) */}
        <ellipse cx="0" cy="42" rx="82" ry="8" fill="url(#tumble-frame)" stroke="#666" strokeWidth="0.5" />
        <ellipse cx="0" cy="42" rx="82" ry="5" fill="#999" opacity="0.2" />

        {/* Barrel */}
        {/* Barrel body */}
        <rect x="-70" y="-55" width="140" height="85" rx="42" fill="url(#tumble-rubber)" stroke="#222" strokeWidth="1.5" />
        {/* Metal band straps */}
        <rect x="-72" y="-20" width="144" height="5" rx="1" fill="url(#tumble-barrel)" opacity="0.8" />
        <rect x="-72" y="5" width="144" height="5" rx="1" fill="url(#tumble-barrel)" opacity="0.8" />
        {/* Barrel lid top */}
        <ellipse cx="0" cy="-55" rx="55" ry="12" fill="url(#tumble-cap)" stroke="#666" strokeWidth="1" />
        {/* Barrel lid bottom */}
        <ellipse cx="0" cy="30" rx="55" ry="12" fill="url(#tumble-cap)" stroke="#666" strokeWidth="1" />
        {/* Lid fastener */}
        <rect x="-5" y="-68" width="10" height="8" rx="2" fill="#999" stroke="#777" strokeWidth="0.5" />
        <circle cx="0" cy="-64" r="2" fill="#BBB" />

        {/* Barrel surface details */}
        <line x1="-60" y1="-42" x2="-60" y2="18" stroke="#444" strokeWidth="0.5" opacity="0.3" />
        <line x1="-40" y1="-50" x2="-40" y2="26" stroke="#444" strokeWidth="0.5" opacity="0.2" />
        <line x1="0" y1="-55" x2="0" y2="30" stroke="#444" strokeWidth="0.5" opacity="0.15" />
        <line x1="40" y1="-50" x2="40" y2="26" stroke="#444" strokeWidth="0.5" opacity="0.2" />
        <line x1="60" y1="-42" x2="60" y2="18" stroke="#444" strokeWidth="0.5" opacity="0.3" />

        {/* Barrel highlight */}
        <rect x="-65" y="-48" width="20" height="80" rx="10" fill="white" opacity="0.06" />

        {/* Rotation arrows */}
        <path d="M-80,-12 Q-95,-12 -95,0 Q-95,12 -80,12" fill="none" stroke="#8B6914" strokeWidth="2" opacity="0.5" strokeDasharray="4,3" />
        <polygon points="-80,8 -80,16 -72,12" fill="#8B6914" opacity="0.5" />
        <path d="M80,-12 Q95,-12 95,0 Q95,12 80,12" fill="none" stroke="#8B6914" strokeWidth="2" opacity="0.5" strokeDasharray="4,3" />
        <polygon points="80,8 80,16 72,12" fill="#8B6914" opacity="0.5" />

        {/* Vibration lines */}
        <line x1="-85" y1="80" x2="-78" y2="76" stroke="#8B6914" strokeWidth="1" opacity="0.3" />
        <line x1="-90" y1="85" x2="-82" y2="80" stroke="#8B6914" strokeWidth="1" opacity="0.2" />
        <line x1="85" y1="80" x2="78" y2="76" stroke="#8B6914" strokeWidth="1" opacity="0.3" />
        <line x1="90" y1="85" x2="82" y2="80" stroke="#8B6914" strokeWidth="1" opacity="0.2" />
      </g>

      {/* === PROGRESSION ARROW === */}
      <g opacity="0.5">
        <path d="M370,250 L430,250" stroke="#8B6914" strokeWidth="2.5" strokeDasharray="6,4" />
        <polygon points="430,244 445,250 430,256" fill="#8B6914" />
      </g>

      {/* === ROUGH STONES (center area) === */}
      <g transform="translate(470, 260)" filter="url(#tumble-shadow)">
        {/* Shadow beneath */}
        <ellipse cx="15" cy="50" rx="55" ry="10" fill="#5C4033" opacity="0.3" />

        {/* Rough stone 1 - large angular */}
        <path d="M-20,-30 L5,-42 L25,-28 L30,-5 L18,15 L-10,18 L-25,5 Z" fill="url(#tumble-rough1)" stroke="#4A3828" strokeWidth="1" />
        <path d="M5,-42 L15,-20 L25,-28" fill="#7A6448" opacity="0.5" />
        <path d="M30,-5 L12,0 L18,15" fill="#5C4033" opacity="0.4" />

        {/* Rough stone 2 */}
        <path d="M30,-15 L50,-25 L65,-12 L58,8 L38,12 Z" fill="url(#tumble-rough2)" stroke="#4A3A2A" strokeWidth="1" />
        <path d="M50,-25 L55,-8 L65,-12" fill="#6A5A4A" opacity="0.4" />

        {/* Rough stone 3 - small */}
        <path d="M-5,10 L10,2 L22,12 L15,25 L0,22 Z" fill="url(#tumble-rough3)" stroke="#5A4520" strokeWidth="1" />

        {/* Rough stone 4 */}
        <path d="M35,5 L52,0 L60,15 L50,28 L35,22 Z" fill="url(#tumble-rough4)" stroke="#3A3A2A" strokeWidth="1" />

        {/* Rough texture dots */}
        <circle cx="5" cy="-15" r="1" fill="#8B7355" opacity="0.5" />
        <circle cx="15" cy="-5" r="0.8" fill="#6B5B45" opacity="0.4" />
        <circle cx="45" cy="-8" r="0.9" fill="#7A6A5A" opacity="0.4" />
      </g>

      {/* === SECOND ARROW === */}
      <g opacity="0.5">
        <path d="M555,260 L615,260" stroke="#8B6914" strokeWidth="2.5" strokeDasharray="6,4" />
        <polygon points="615,254 630,260 615,266" fill="#8B6914" />
      </g>

      {/* === POLISHED TUMBLED STONES (right side) === */}
      <g transform="translate(680, 255)" filter="url(#tumble-shadow)">
        {/* Shadow beneath */}
        <ellipse cx="5" cy="55" rx="70" ry="12" fill="#5C4033" opacity="0.3" />

        {/* Polished stone 1 - golden/tan oval */}
        <ellipse cx="-25" cy="-15" rx="20" ry="16" fill="url(#tumble-polish1)" stroke="#8B6914" strokeWidth="0.8" />
        <ellipse cx="-30" cy="-20" rx="8" ry="5" fill="white" opacity="0.25" transform="rotate(-20, -30, -20)" />
        <circle cx="-28" cy="-22" r="2.5" fill="white" opacity="0.35" />

        {/* Polished stone 2 - green oval */}
        <ellipse cx="20" cy="-20" rx="17" ry="14" fill="url(#tumble-polish2)" stroke="#3A6B28" strokeWidth="0.8" />
        <ellipse cx="16" cy="-25" rx="6" ry="4" fill="white" opacity="0.2" transform="rotate(-15, 16, -25)" />
        <circle cx="14" cy="-26" r="2" fill="white" opacity="0.3" />

        {/* Polished stone 3 - reddish round */}
        <ellipse cx="-5" cy="10" rx="18" ry="15" fill="url(#tumble-polish3)" stroke="#6B3020" strokeWidth="0.8" />
        <ellipse cx="-10" cy="4" rx="7" ry="4" fill="white" opacity="0.2" transform="rotate(-25, -10, 4)" />
        <circle cx="-8" cy="3" r="2" fill="white" opacity="0.3" />

        {/* Polished stone 4 - blue oval */}
        <ellipse cx="35" cy="8" rx="16" ry="13" fill="url(#tumble-polish4)" stroke="#3A5070" strokeWidth="0.8" />
        <ellipse cx="30" cy="2" rx="6" ry="3.5" fill="white" opacity="0.22" transform="rotate(-20, 30, 2)" />
        <circle cx="29" cy="1" r="2" fill="white" opacity="0.3" />

        {/* Polished stone 5 - white/cream round */}
        <ellipse cx="5" cy="30" rx="15" ry="13" fill="url(#tumble-polish5)" stroke="#A09080" strokeWidth="0.8" />
        <ellipse cx="0" cy="24" rx="6" ry="3" fill="white" opacity="0.2" transform="rotate(-15, 0, 24)" />
        <circle cx="-1" cy="23" r="2" fill="white" opacity="0.3" />

        {/* Polished stone 6 - small golden */}
        <ellipse cx="40" cy="30" rx="12" ry="10" fill="url(#tumble-polish1)" stroke="#8B6914" strokeWidth="0.8" />
        <ellipse cx="37" cy="26" rx="4" ry="2.5" fill="white" opacity="0.2" />

        {/* Sparkle effects on polished stones */}
        <g filter="url(#tumble-glow)">
          <circle cx="-28" cy="-22" r="3" fill="url(#tumble-sparkle)" />
          <line x1="-28" y1="-27" x2="-28" y2="-17" stroke="white" strokeWidth="0.8" opacity="0.6" />
          <line x1="-33" y1="-22" x2="-23" y2="-22" stroke="white" strokeWidth="0.8" opacity="0.6" />

          <circle cx="14" cy="-26" r="2.5" fill="url(#tumble-sparkle)" />
          <line x1="14" y1="-30" x2="14" y2="-22" stroke="white" strokeWidth="0.7" opacity="0.5" />
          <line x1="10" y1="-26" x2="18" y2="-26" stroke="white" strokeWidth="0.7" opacity="0.5" />

          <circle cx="-8" cy="3" r="2.5" fill="url(#tumble-sparkle)" />
          <line x1="-8" y1="-1" x2="-8" y2="7" stroke="white" strokeWidth="0.7" opacity="0.5" />
          <line x1="-12" y1="3" x2="-4" y2="3" stroke="white" strokeWidth="0.7" opacity="0.5" />

          <circle cx="29" cy="1" r="2" fill="url(#tumble-sparkle)" />
          <circle cx="-1" cy="23" r="2" fill="url(#tumble-sparkle)" />

          {/* Extra sparkle flares */}
          <circle cx="50" cy="-10" r="2" fill="url(#tumble-sparkle)" />
          <line x1="50" y1="-14" x2="50" y2="-6" stroke="white" strokeWidth="0.6" opacity="0.4" />
          <line x1="46" y1="-10" x2="54" y2="-10" stroke="white" strokeWidth="0.6" opacity="0.4" />

          <circle cx="-40" cy="5" r="1.5" fill="url(#tumble-sparkle)" />
          <line x1="-40" y1="2" x2="-40" y2="8" stroke="white" strokeWidth="0.5" opacity="0.3" />
          <line x1="-43" y1="5" x2="-37" y2="5" stroke="white" strokeWidth="0.5" opacity="0.3" />
        </g>
      </g>

      {/* === STAGE LABELS === */}
      <text x="200" y="140" textAnchor="middle" fill="#5C4033" fontSize="14" fontFamily="Georgia, serif" opacity="0.7">
        Stage 1: Tumbling
      </text>
      <text x="485" y="200" textAnchor="middle" fill="#5C4033" fontSize="13" fontFamily="Georgia, serif" opacity="0.6">
        Rough
      </text>
      <text x="685" y="195" textAnchor="middle" fill="#5C4033" fontSize="13" fontFamily="Georgia, serif" opacity="0.6">
        Polished
      </text>

      {/* === SCATTERED GRIT PARTICLES on bench === */}
      <g opacity="0.4">
        <circle cx="350" cy="340" r="1" fill="#999" />
        <circle cx="365" cy="345" r="0.7" fill="#888" />
        <circle cx="380" cy="338" r="0.9" fill="#AAA" />
        <circle cx="420" cy="342" r="0.6" fill="#999" />
        <circle cx="440" cy="335" r="1.1" fill="#888" />
        <circle cx="500" cy="340" r="0.8" fill="#AAA" />
        <circle cx="520" cy="348" r="0.7" fill="#999" />
        <circle cx="560" cy="338" r="0.9" fill="#888" />
        <circle cx="600" cy="345" r="0.6" fill="#AAA" />
      </g>

      {/* Decorative top border */}
      <rect x="0" y="0" width="800" height="3" fill="#5C4033" opacity="0.2" />
      <rect x="0" y="447" width="800" height="3" fill="#5C4033" opacity="0.2" />
    </svg>
  );
};

export default RockTumblingHero;
