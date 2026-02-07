import React from "react";

interface AgateTypesHeroProps {
  className?: string;
}

const AgateTypesHero: React.FC<AgateTypesHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Various agate cross-sections showing colorful banding patterns"
    >
      <defs>
        {/* Background */}
        <radialGradient id="agate-bg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="60%" stopColor="#E8D5C0" />
          <stop offset="100%" stopColor="#D2B48C" />
        </radialGradient>

        {/* Velvet display surface */}
        <linearGradient id="agate-velvet" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D2B1F" />
          <stop offset="50%" stopColor="#2C1E14" />
          <stop offset="100%" stopColor="#1A110B" />
        </linearGradient>

        {/* Blue lace agate bands */}
        <radialGradient id="agate-bluelace-outer" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="15%" stopColor="#B3D9E8" />
          <stop offset="25%" stopColor="#E8F0F5" />
          <stop offset="35%" stopColor="#8ABDD6" />
          <stop offset="45%" stopColor="#D0E5F0" />
          <stop offset="55%" stopColor="#6FA8C9" />
          <stop offset="65%" stopColor="#C5DCE8" />
          <stop offset="75%" stopColor="#5A97BD" />
          <stop offset="85%" stopColor="#AACFE0" />
          <stop offset="100%" stopColor="#4A87AD" />
        </radialGradient>

        {/* Moss agate base */}
        <radialGradient id="agate-moss-base" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F0F5F0" />
          <stop offset="30%" stopColor="#E8F0E8" />
          <stop offset="60%" stopColor="#D8E8D8" />
          <stop offset="100%" stopColor="#C0D8C0" />
        </radialGradient>

        {/* Fire agate bands */}
        <radialGradient id="agate-fire" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#FFE0A0" />
          <stop offset="12%" stopColor="#FF6B00" />
          <stop offset="22%" stopColor="#FFD700" />
          <stop offset="32%" stopColor="#CC3300" />
          <stop offset="42%" stopColor="#FF8C00" />
          <stop offset="52%" stopColor="#8B2500" />
          <stop offset="62%" stopColor="#FFB347" />
          <stop offset="72%" stopColor="#A0400A" />
          <stop offset="82%" stopColor="#FF6600" />
          <stop offset="92%" stopColor="#6B1A00" />
          <stop offset="100%" stopColor="#4A1200" />
        </radialGradient>
        <radialGradient id="agate-fire-glow" cx="40%" cy="35%" r="40%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FF6600" stopOpacity="0" />
        </radialGradient>

        {/* Banded agate bands */}
        <radialGradient id="agate-banded" cx="48%" cy="48%" r="52%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="12%" stopColor="#D2B48C" />
          <stop offset="22%" stopColor="#E8D5C0" />
          <stop offset="32%" stopColor="#8B6914" />
          <stop offset="42%" stopColor="#D2B48C" />
          <stop offset="52%" stopColor="#5C4033" />
          <stop offset="62%" stopColor="#C4A06A" />
          <stop offset="72%" stopColor="#3D2B1F" />
          <stop offset="82%" stopColor="#A0845A" />
          <stop offset="92%" stopColor="#2D1810" />
          <stop offset="100%" stopColor="#1A110B" />
        </radialGradient>

        {/* Sparkle */}
        <radialGradient id="agate-sparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Shadows and effects */}
        <filter id="agate-shadow">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#1A110B" floodOpacity="0.5" />
        </filter>
        <filter id="agate-glow">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Clip paths for agate slices */}
        <clipPath id="agate-clip-bluelace">
          <ellipse cx="160" cy="280" rx="90" ry="85" />
        </clipPath>
        <clipPath id="agate-clip-moss">
          <circle cx="380" cy="270" r="80" />
        </clipPath>
        <clipPath id="agate-clip-fire">
          <ellipse cx="570" cy="290" rx="85" ry="78" />
        </clipPath>
        <clipPath id="agate-clip-banded">
          <ellipse cx="720" cy="310" rx="60" ry="65" />
        </clipPath>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="url(#agate-bg)" />

      {/* Soft light circles in background */}
      <circle cx="200" cy="120" r="180" fill="#8B6914" opacity="0.05" />
      <circle cx="600" cy="150" r="220" fill="#6B8E23" opacity="0.04" />
      <circle cx="400" cy="80" r="160" fill="#D2B48C" opacity="0.08" />

      {/* Display surface - dark velvet tray */}
      <path
        d="M40,180 Q40,160 60,155 L740,155 Q760,160 760,180 L760,420 Q760,440 740,440 L60,440 Q40,440 40,420 Z"
        fill="url(#agate-velvet)"
        stroke="#5C4033"
        strokeWidth="2"
      />
      {/* Velvet texture highlight */}
      <path
        d="M60,165 L740,165 L750,180 L50,180 Z"
        fill="#3D2B1F"
        opacity="0.5"
      />

      {/* === BLUE LACE AGATE (leftmost) === */}
      <g filter="url(#agate-shadow)">
        {/* Outer rim (rough edge) */}
        <ellipse cx="160" cy="280" rx="92" ry="87" fill="#8899AA" stroke="#667788" strokeWidth="1.5" />
        <ellipse cx="160" cy="280" rx="92" ry="87" fill="#778899" opacity="0.3" />

        {/* Polished face with concentric bands */}
        <g clipPath="url(#agate-clip-bluelace)">
          <ellipse cx="160" cy="280" rx="90" ry="85" fill="url(#agate-bluelace-outer)" />

          {/* Additional fine banding lines */}
          <ellipse cx="158" cy="278" rx="78" ry="74" fill="none" stroke="#B3D9E8" strokeWidth="2" opacity="0.6" />
          <ellipse cx="158" cy="278" rx="70" ry="66" fill="none" stroke="#E8F0F5" strokeWidth="3" opacity="0.5" />
          <ellipse cx="158" cy="278" rx="62" ry="58" fill="none" stroke="#8ABDD6" strokeWidth="2" opacity="0.6" />
          <ellipse cx="158" cy="278" rx="54" ry="50" fill="none" stroke="#D0E5F0" strokeWidth="2.5" opacity="0.5" />
          <ellipse cx="158" cy="278" rx="46" ry="42" fill="none" stroke="#6FA8C9" strokeWidth="2" opacity="0.5" />
          <ellipse cx="158" cy="278" rx="38" ry="35" fill="none" stroke="#C5DCE8" strokeWidth="1.5" opacity="0.6" />
          <ellipse cx="158" cy="278" rx="30" ry="27" fill="none" stroke="#5A97BD" strokeWidth="2" opacity="0.5" />
          <ellipse cx="157" cy="277" rx="22" ry="19" fill="none" stroke="#AACFE0" strokeWidth="2" opacity="0.5" />
          <ellipse cx="157" cy="277" rx="14" ry="12" fill="#B3D9E8" opacity="0.7" />

          {/* Druzy center cavity */}
          <ellipse cx="157" cy="277" rx="10" ry="8" fill="#4A87AD" opacity="0.4" />
          <circle cx="154" cy="275" r="1.5" fill="white" opacity="0.5" />
          <circle cx="159" cy="279" r="1" fill="white" opacity="0.4" />
          <circle cx="156" cy="280" r="1.2" fill="#E8F0F5" opacity="0.5" />
        </g>

        {/* Surface shine */}
        <ellipse cx="140" cy="255" rx="25" ry="12" fill="white" opacity="0.12" transform="rotate(-20, 140, 255)" />
        <ellipse cx="135" cy="252" rx="8" ry="4" fill="white" opacity="0.2" transform="rotate(-20, 135, 252)" />
      </g>

      {/* === MOSS AGATE (center-left) === */}
      <g filter="url(#agate-shadow)">
        {/* Outer rim */}
        <circle cx="380" cy="270" r="83" fill="#9A9A8A" stroke="#7A7A6A" strokeWidth="1.5" />

        {/* Polished translucent base */}
        <g clipPath="url(#agate-clip-moss)">
          <circle cx="380" cy="270" r="80" fill="url(#agate-moss-base)" />

          {/* Subtle banding underneath */}
          <circle cx="378" cy="268" r="70" fill="none" stroke="#D0DCD0" strokeWidth="3" opacity="0.3" />
          <circle cx="378" cy="268" r="55" fill="none" stroke="#C5D8C5" strokeWidth="2" opacity="0.25" />

          {/* Dendritic moss-like inclusions */}
          {/* Large moss cluster 1 */}
          <g opacity="0.75">
            <path d="M355,250 Q360,240 365,250 Q370,255 375,248 Q378,242 382,248" fill="none" stroke="#2E5A1E" strokeWidth="2" strokeLinecap="round" />
            <path d="M365,250 Q362,260 358,265 Q355,270 360,275" fill="none" stroke="#3A6B28" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M375,248 Q380,256 378,264 Q376,270 380,278" fill="none" stroke="#2E5A1E" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M358,265 L352,268 M358,265 L362,270" fill="none" stroke="#4A7A38" strokeWidth="1" strokeLinecap="round" />
            <path d="M378,264 L384,260 M378,264 L374,268" fill="none" stroke="#4A7A38" strokeWidth="1" strokeLinecap="round" />
          </g>

          {/* Moss cluster 2 */}
          <g opacity="0.65">
            <path d="M390,280 Q395,270 400,278 Q405,285 410,275" fill="none" stroke="#1E4A12" strokeWidth="2" strokeLinecap="round" />
            <path d="M400,278 Q402,288 398,295 Q395,300 400,305" fill="none" stroke="#2E5A1E" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M398,295 L394,292 M398,295 L402,298" fill="none" stroke="#3A6B28" strokeWidth="1" strokeLinecap="round" />
          </g>

          {/* Moss cluster 3 */}
          <g opacity="0.55">
            <path d="M345,285 Q350,278 355,286 Q358,290 362,285" fill="none" stroke="#2E5A1E" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M355,286 Q353,294 350,298" fill="none" stroke="#3A6B28" strokeWidth="1.2" strokeLinecap="round" />
          </g>

          {/* Scattered small moss dots */}
          <circle cx="370" cy="258" r="2" fill="#3A6B28" opacity="0.5" />
          <circle cx="392" cy="262" r="1.5" fill="#2E5A1E" opacity="0.4" />
          <circle cx="405" cy="290" r="1.8" fill="#4A7A38" opacity="0.45" />
          <circle cx="360" cy="300" r="1.3" fill="#2E5A1E" opacity="0.35" />
          <circle cx="385" cy="310" r="2" fill="#3A6B28" opacity="0.4" />

          {/* Tiny mineral specks */}
          <circle cx="375" cy="245" r="0.8" fill="#8B6914" opacity="0.3" />
          <circle cx="395" cy="255" r="0.6" fill="#8B6914" opacity="0.25" />
          <circle cx="365" cy="312" r="0.7" fill="#D2B48C" opacity="0.3" />
        </g>

        {/* Surface shine */}
        <ellipse cx="362" cy="248" rx="22" ry="10" fill="white" opacity="0.1" transform="rotate(-15, 362, 248)" />
        <ellipse cx="358" cy="245" rx="7" ry="3.5" fill="white" opacity="0.18" transform="rotate(-15, 358, 245)" />
      </g>

      {/* === FIRE AGATE (center-right) === */}
      <g filter="url(#agate-shadow)">
        {/* Outer rim */}
        <ellipse cx="570" cy="290" rx="88" ry="81" fill="#6B4030" stroke="#5A3020" strokeWidth="1.5" />
        <ellipse cx="570" cy="290" rx="88" ry="81" fill="#4A2A1A" opacity="0.3" />

        {/* Polished face with fire banding */}
        <g clipPath="url(#agate-clip-fire)">
          <ellipse cx="570" cy="290" rx="85" ry="78" fill="url(#agate-fire)" />

          {/* Iridescent shimmer layers */}
          <ellipse cx="568" cy="288" rx="72" ry="66" fill="none" stroke="#FFD700" strokeWidth="2.5" opacity="0.4" />
          <ellipse cx="568" cy="288" rx="63" ry="57" fill="none" stroke="#FF8C00" strokeWidth="3" opacity="0.35" />
          <ellipse cx="567" cy="287" rx="54" ry="49" fill="none" stroke="#FFB347" strokeWidth="2" opacity="0.4" />
          <ellipse cx="567" cy="287" rx="45" ry="41" fill="none" stroke="#CC3300" strokeWidth="2.5" opacity="0.35" />
          <ellipse cx="566" cy="286" rx="36" ry="33" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.45" />
          <ellipse cx="566" cy="286" rx="28" ry="25" fill="none" stroke="#FF6600" strokeWidth="2" opacity="0.4" />
          <ellipse cx="565" cy="285" rx="20" ry="18" fill="#FFB347" opacity="0.5" />

          {/* Botryoidal (bubbly) texture typical of fire agate */}
          <circle cx="555" cy="275" r="12" fill="#FFD700" opacity="0.15" />
          <circle cx="575" cy="285" r="10" fill="#FF8C00" opacity="0.12" />
          <circle cx="560" cy="300" r="14" fill="#FFB347" opacity="0.1" />
          <circle cx="580" cy="270" r="8" fill="#FFCC00" opacity="0.15" />

          {/* Fire glow hotspot */}
          <ellipse cx="560" cy="280" rx="30" ry="25" fill="url(#agate-fire-glow)" />

          {/* Inner golden core */}
          <ellipse cx="565" cy="285" rx="12" ry="10" fill="#FFD700" opacity="0.3" />
          <ellipse cx="563" cy="283" rx="6" ry="5" fill="#FFF8DC" opacity="0.35" />
        </g>

        {/* Surface reflections */}
        <ellipse cx="548" cy="265" rx="20" ry="10" fill="white" opacity="0.1" transform="rotate(-25, 548, 265)" />
        <ellipse cx="544" cy="262" rx="7" ry="3.5" fill="white" opacity="0.18" transform="rotate(-25, 544, 262)" />
      </g>

      {/* === BANDED AGATE (far right, slightly smaller) === */}
      <g filter="url(#agate-shadow)">
        {/* Outer rim */}
        <ellipse cx="720" cy="310" rx="63" ry="68" fill="#5A4A3A" stroke="#4A3A2A" strokeWidth="1.5" />

        {/* Polished face with earth-tone banding */}
        <g clipPath="url(#agate-clip-banded)">
          <ellipse cx="720" cy="310" rx="60" ry="65" fill="url(#agate-banded)" />

          {/* Fine band lines */}
          <ellipse cx="719" cy="309" rx="54" ry="59" fill="none" stroke="#D2B48C" strokeWidth="2" opacity="0.4" />
          <ellipse cx="719" cy="309" rx="48" ry="52" fill="none" stroke="#E8D5C0" strokeWidth="1.5" opacity="0.35" />
          <ellipse cx="718" cy="308" rx="42" ry="46" fill="none" stroke="#8B6914" strokeWidth="2" opacity="0.4" />
          <ellipse cx="718" cy="308" rx="36" ry="40" fill="none" stroke="#F5E6D3" strokeWidth="1.5" opacity="0.35" />
          <ellipse cx="717" cy="307" rx="30" ry="33" fill="none" stroke="#5C4033" strokeWidth="2.5" opacity="0.4" />
          <ellipse cx="717" cy="307" rx="24" ry="26" fill="none" stroke="#D2B48C" strokeWidth="1.5" opacity="0.45" />
          <ellipse cx="716" cy="306" rx="18" ry="20" fill="none" stroke="#3D2B1F" strokeWidth="2" opacity="0.35" />
          <ellipse cx="716" cy="306" rx="12" ry="13" fill="#E8D5C0" opacity="0.5" />

          {/* Quartz crystal center */}
          <ellipse cx="716" cy="306" rx="7" ry="8" fill="#F5E6D3" opacity="0.6" />
          <circle cx="714" cy="304" r="1.5" fill="white" opacity="0.4" />
          <circle cx="718" cy="308" r="1" fill="white" opacity="0.3" />
        </g>

        {/* Surface shine */}
        <ellipse cx="706" cy="290" rx="16" ry="8" fill="white" opacity="0.1" transform="rotate(-15, 706, 290)" />
        <ellipse cx="703" cy="288" rx="5" ry="3" fill="white" opacity="0.17" transform="rotate(-15, 703, 288)" />
      </g>

      {/* === LABELS === */}
      {/* Blue Lace label */}
      <text x="160" y="195" textAnchor="middle" fill="#F5E6D3" fontSize="12" fontFamily="Georgia, serif" opacity="0.8">
        Blue Lace
      </text>

      {/* Moss Agate label */}
      <text x="380" y="185" textAnchor="middle" fill="#F5E6D3" fontSize="12" fontFamily="Georgia, serif" opacity="0.8">
        Moss
      </text>

      {/* Fire Agate label */}
      <text x="570" y="200" textAnchor="middle" fill="#F5E6D3" fontSize="12" fontFamily="Georgia, serif" opacity="0.8">
        Fire
      </text>

      {/* Banded Agate label */}
      <text x="720" y="235" textAnchor="middle" fill="#F5E6D3" fontSize="12" fontFamily="Georgia, serif" opacity="0.8">
        Banded
      </text>

      {/* === SPARKLE EFFECTS === */}
      <g filter="url(#agate-glow)">
        {/* On blue lace */}
        <circle cx="135" cy="252" r="3" fill="url(#agate-sparkle)" />
        {/* On moss agate */}
        <circle cx="358" cy="245" r="2.5" fill="url(#agate-sparkle)" />
        {/* On fire agate */}
        <circle cx="544" cy="262" r="3.5" fill="url(#agate-sparkle)" />
        <circle cx="580" cy="275" r="2" fill="url(#agate-sparkle)" />
        {/* On banded */}
        <circle cx="703" cy="288" r="2.5" fill="url(#agate-sparkle)" />

        {/* Ambient sparkles on velvet */}
        <g>
          <line x1="280" y1="400" x2="284" y2="400" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="282" y1="398" x2="282" y2="402" stroke="white" strokeWidth="1" opacity="0.3" />
        </g>
        <g>
          <line x1="480" y1="390" x2="484" y2="390" stroke="white" strokeWidth="1" opacity="0.25" />
          <line x1="482" y1="388" x2="482" y2="392" stroke="white" strokeWidth="1" opacity="0.25" />
        </g>
        <g>
          <line x1="660" y1="410" x2="664" y2="410" stroke="white" strokeWidth="1" opacity="0.2" />
          <line x1="662" y1="408" x2="662" y2="412" stroke="white" strokeWidth="1" opacity="0.2" />
        </g>
      </g>

      {/* Decorative top and bottom borders */}
      <rect x="0" y="0" width="800" height="3" fill="#5C4033" opacity="0.2" />
      <rect x="0" y="447" width="800" height="3" fill="#5C4033" opacity="0.2" />
    </svg>
  );
};

export default AgateTypesHero;
