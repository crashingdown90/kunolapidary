import React from "react";

interface BirthstonesHeroProps {
  className?: string;
}

const BirthstonesHero: React.FC<BirthstonesHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Circle of twelve colorful birthstone gems representing each month"
    >
      <defs>
        {/* Background */}
        <radialGradient id="birth-bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="60%" stopColor="#E8D5C0" />
          <stop offset="100%" stopColor="#D2B48C" />
        </radialGradient>

        {/* Central circle decoration */}
        <radialGradient id="birth-center" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5E6D3" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#E8D5C0" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D2B48C" stopOpacity="0.1" />
        </radialGradient>

        {/* January - Garnet (deep red) */}
        <radialGradient id="birth-garnet" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#E04050" />
          <stop offset="40%" stopColor="#B01030" />
          <stop offset="100%" stopColor="#6B0015" />
        </radialGradient>

        {/* February - Amethyst (purple) */}
        <radialGradient id="birth-amethyst" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#CE93D8" />
          <stop offset="40%" stopColor="#9C27B0" />
          <stop offset="100%" stopColor="#4A148C" />
        </radialGradient>

        {/* March - Aquamarine (light blue) */}
        <radialGradient id="birth-aquamarine" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#B2EBF2" />
          <stop offset="40%" stopColor="#4DD0E1" />
          <stop offset="100%" stopColor="#00838F" />
        </radialGradient>

        {/* April - Diamond (white/clear) */}
        <radialGradient id="birth-diamond" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#F0F0FF" />
          <stop offset="60%" stopColor="#D8D8F0" />
          <stop offset="100%" stopColor="#C0C0D8" />
        </radialGradient>

        {/* May - Emerald (green) */}
        <radialGradient id="birth-emerald" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#66BB6A" />
          <stop offset="40%" stopColor="#2E7D32" />
          <stop offset="100%" stopColor="#1B5E20" />
        </radialGradient>

        {/* June - Pearl (white/pink) */}
        <radialGradient id="birth-pearl" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="30%" stopColor="#FFF0F5" />
          <stop offset="60%" stopColor="#F8E0E8" />
          <stop offset="100%" stopColor="#E8C8D0" />
        </radialGradient>

        {/* July - Ruby (red) */}
        <radialGradient id="birth-ruby" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FF5252" />
          <stop offset="40%" stopColor="#D50000" />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>

        {/* August - Peridot (yellow-green) */}
        <radialGradient id="birth-peridot" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#C6E04A" />
          <stop offset="40%" stopColor="#8BC34A" />
          <stop offset="100%" stopColor="#558B2F" />
        </radialGradient>

        {/* September - Sapphire (blue) */}
        <radialGradient id="birth-sapphire" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#64B5F6" />
          <stop offset="40%" stopColor="#1565C0" />
          <stop offset="100%" stopColor="#0D47A1" />
        </radialGradient>

        {/* October - Opal (multicolor) */}
        <radialGradient id="birth-opal" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="20%" stopColor="#E8F0FF" />
          <stop offset="40%" stopColor="#F0E0F8" />
          <stop offset="60%" stopColor="#E0F8E8" />
          <stop offset="80%" stopColor="#FFF0E0" />
          <stop offset="100%" stopColor="#E8E0F0" />
        </radialGradient>
        {/* Opal shimmer overlays */}
        <linearGradient id="birth-opal-shimmer" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9999" stopOpacity="0.2" />
          <stop offset="25%" stopColor="#99CCFF" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#99FF99" stopOpacity="0.2" />
          <stop offset="75%" stopColor="#FFCC99" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#CC99FF" stopOpacity="0.2" />
        </linearGradient>

        {/* November - Topaz (golden) */}
        <radialGradient id="birth-topaz" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="40%" stopColor="#FFAB00" />
          <stop offset="100%" stopColor="#8B6914" />
        </radialGradient>

        {/* December - Tanzanite (blue-violet) */}
        <radialGradient id="birth-tanzanite" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#9FA8DA" />
          <stop offset="40%" stopColor="#5C6BC0" />
          <stop offset="100%" stopColor="#283593" />
        </radialGradient>

        {/* Sparkle */}
        <radialGradient id="birth-sparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Gold ring for circle */}
        <linearGradient id="birth-gold-ring" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4A843" />
          <stop offset="30%" stopColor="#8B6914" />
          <stop offset="50%" stopColor="#D4A843" />
          <stop offset="70%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#D4A843" />
        </linearGradient>

        {/* Shadow filter */}
        <filter id="birth-shadow">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#2D1810" floodOpacity="0.35" />
        </filter>
        <filter id="birth-glow">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="birth-gem-glow">
          <feGaussianBlur stdDeviation="3" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="url(#birth-bg)" />

      {/* Soft light circles */}
      <circle cx="400" cy="225" r="250" fill="#8B6914" opacity="0.04" />
      <circle cx="300" cy="150" r="180" fill="#6B8E23" opacity="0.03" />
      <circle cx="550" cy="300" r="200" fill="#D2B48C" opacity="0.06" />

      {/* Central decorative circle (behind gems) */}
      <circle cx="400" cy="225" r="175" fill="none" stroke="url(#birth-gold-ring)" strokeWidth="2" opacity="0.4" />
      <circle cx="400" cy="225" r="160" fill="url(#birth-center)" />
      <circle cx="400" cy="225" r="145" fill="none" stroke="url(#birth-gold-ring)" strokeWidth="1" opacity="0.25" />

      {/* Decorative connecting lines between gem positions */}
      <circle cx="400" cy="225" r="140" fill="none" stroke="#D2B48C" strokeWidth="0.5" opacity="0.4" strokeDasharray="8,6" />

      {/* === 12 BIRTHSTONE GEMS arranged in clock pattern === */}
      {/* Positions: radius 140 from center (400,225), angles at 30-degree increments starting from top (270 degrees) */}

      {/* === 1. JANUARY - GARNET (12 o'clock position = top) === */}
      <g transform="translate(400, 85)" filter="url(#birth-shadow)">
        {/* Faceted round cut */}
        <polygon points="0,-22 12,-16 18,-4 14,10 0,18 -14,10 -18,-4 -12,-16" fill="url(#birth-garnet)" stroke="#6B0015" strokeWidth="0.8" />
        {/* Crown facets */}
        <polygon points="0,-22 12,-16 6,-8 0,-10" fill="#E04050" opacity="0.6" />
        <polygon points="0,-22 -12,-16 -6,-8 0,-10" fill="#C03040" opacity="0.5" />
        <polygon points="12,-16 18,-4 10,-2 6,-8" fill="#B01030" opacity="0.4" />
        <polygon points="-12,-16 -18,-4 -10,-2 -6,-8" fill="#D04050" opacity="0.35" />
        {/* Table */}
        <polygon points="0,-10 6,-8 10,-2 6,4 0,6 -6,4 -10,-2 -6,-8" fill="#6B0015" opacity="0.3" />
        {/* Highlight */}
        <ellipse cx="-3" cy="-10" rx="4" ry="3" fill="white" opacity="0.3" />
        <circle cx="-2" cy="-11" r="1.5" fill="white" opacity="0.4" />
      </g>
      {/* Month number */}
      <text x="400" y="120" textAnchor="middle" fill="#5C4033" fontSize="10" fontFamily="Georgia, serif" opacity="0.65">1</text>

      {/* === 2. FEBRUARY - AMETHYST (1 o'clock) === */}
      <g transform="translate(470, 95)" filter="url(#birth-shadow)">
        <polygon points="0,-20 11,-14 17,-3 13,9 0,16 -13,9 -17,-3 -11,-14" fill="url(#birth-amethyst)" stroke="#4A148C" strokeWidth="0.8" />
        <polygon points="0,-20 11,-14 5,-7 0,-9" fill="#CE93D8" opacity="0.6" />
        <polygon points="0,-20 -11,-14 -5,-7 0,-9" fill="#AB47BC" opacity="0.5" />
        <polygon points="11,-14 17,-3 9,-1 5,-7" fill="#9C27B0" opacity="0.4" />
        <polygon points="-11,-14 -17,-3 -9,-1 -5,-7" fill="#CE93D8" opacity="0.35" />
        <polygon points="0,-9 5,-7 9,-1 5,3 0,5 -5,3 -9,-1 -5,-7" fill="#4A148C" opacity="0.3" />
        <ellipse cx="-3" cy="-9" rx="4" ry="2.5" fill="white" opacity="0.25" />
        <circle cx="-2" cy="-10" r="1.5" fill="white" opacity="0.35" />
      </g>
      <text x="470" y="128" textAnchor="middle" fill="#5C4033" fontSize="10" fontFamily="Georgia, serif" opacity="0.65">2</text>

      {/* === 3. MARCH - AQUAMARINE (2 o'clock) === */}
      <g transform="translate(522, 140)" filter="url(#birth-shadow)">
        {/* Emerald cut rectangle */}
        <polygon points="-14,-18 14,-18 18,-4 14,14 -14,14 -18,-4" fill="url(#birth-aquamarine)" stroke="#00838F" strokeWidth="0.8" />
        <polygon points="-14,-18 14,-18 10,-10 -10,-10" fill="#B2EBF2" opacity="0.5" />
        <polygon points="14,-18 18,-4 12,-2 10,-10" fill="#4DD0E1" opacity="0.4" />
        <polygon points="-14,-18 -18,-4 -12,-2 -10,-10" fill="#80DEEA" opacity="0.35" />
        <polygon points="-10,-10 10,-10 12,-2 10,6 -10,6 -12,-2" fill="#00838F" opacity="0.25" />
        <ellipse cx="-3" cy="-10" rx="5" ry="3" fill="white" opacity="0.25" />
        <circle cx="-2" cy="-11" r="1.5" fill="white" opacity="0.35" />
      </g>
      <text x="522" y="174" textAnchor="middle" fill="#5C4033" fontSize="10" fontFamily="Georgia, serif" opacity="0.65">3</text>

      {/* === 4. APRIL - DIAMOND (3 o'clock = right) === */}
      <g transform="translate(540, 225)" filter="url(#birth-shadow)">
        <polygon points="0,-22 14,-14 18,0 14,14 0,22 -14,14 -18,0 -14,-14" fill="url(#birth-diamond)" stroke="#C0C0D0" strokeWidth="0.8" />
        <polygon points="0,-22 14,-14 7,-6 0,-8" fill="#FFFFFF" opacity="0.7" />
        <polygon points="0,-22 -14,-14 -7,-6 0,-8" fill="#F0F0FF" opacity="0.6" />
        <polygon points="14,-14 18,0 10,0 7,-6" fill="#E8E8F8" opacity="0.5" />
        <polygon points="-14,-14 -18,0 -10,0 -7,-6" fill="#D8D8F0" opacity="0.45" />
        <polygon points="0,-8 7,-6 10,0 7,6 0,8 -7,6 -10,0 -7,-6" fill="white" opacity="0.35" />
        {/* Rainbow refraction */}
        <polygon points="3,-5 7,-3 5,0" fill="#FFB3B3" opacity="0.15" />
        <polygon points="-4,-3 -1,-5 -2,0" fill="#B3D4FF" opacity="0.15" />
        <ellipse cx="-4" cy="-10" rx="4" ry="3" fill="white" opacity="0.5" />
        <circle cx="-3" cy="-11" r="1.5" fill="white" opacity="0.7" />
      </g>
      <text x="540" y="258" textAnchor="middle" fill="#5C4033" fontSize="10" fontFamily="Georgia, serif" opacity="0.65">4</text>

      {/* === 5. MAY - EMERALD (4 o'clock) === */}
      <g transform="translate(522, 310)" filter="url(#birth-shadow)">
        <polygon points="-14,-18 14,-18 18,-2 14,14 -14,14 -18,-2" fill="url(#birth-emerald)" stroke="#1B5E20" strokeWidth="0.8" />
        <polygon points="-14,-18 14,-18 10,-10 -10,-10" fill="#66BB6A" opacity="0.5" />
        <polygon points="14,-18 18,-2 12,0 10,-10" fill="#2E7D32" opacity="0.4" />
        <polygon points="-14,-18 -18,-2 -12,0 -10,-10" fill="#4CAF50" opacity="0.35" />
        <polygon points="-10,-10 10,-10 12,0 10,6 -10,6 -12,0" fill="#1B5E20" opacity="0.25" />
        {/* Garden inclusion */}
        <path d="M-2,0 Q1,-2 4,1" fill="none" stroke="#1B5E20" strokeWidth="0.4" opacity="0.4" />
        <ellipse cx="-3" cy="-10" rx="5" ry="3" fill="white" opacity="0.22" />
        <circle cx="-2" cy="-11" r="1.5" fill="white" opacity="0.3" />
      </g>
      <text x="522" y="340" textAnchor="middle" fill="#5C4033" fontSize="10" fontFamily="Georgia, serif" opacity="0.65">5</text>

      {/* === 6. JUNE - PEARL (5 o'clock) === */}
      <g transform="translate(470, 355)" filter="url(#birth-shadow)">
        {/* Pearl - perfectly round with nacre sheen */}
        <circle cx="0" cy="0" r="18" fill="url(#birth-pearl)" stroke="#E0C8D0" strokeWidth="0.5" />
        {/* Nacre luster bands */}
        <ellipse cx="-2" cy="-2" rx="14" ry="13" fill="none" stroke="#FFF0F5" strokeWidth="1" opacity="0.3" />
        <ellipse cx="-3" cy="-3" rx="10" ry="9" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.25" />
        {/* Pink overtone */}
        <circle cx="4" cy="4" r="8" fill="#FFE0E8" opacity="0.15" />
        {/* Main highlight */}
        <ellipse cx="-5" cy="-7" rx="7" ry="5" fill="white" opacity="0.45" transform="rotate(-20, -5, -7)" />
        <circle cx="-4" cy="-8" r="3" fill="white" opacity="0.55" />
      </g>
      <text x="470" y="388" textAnchor="middle" fill="#5C4033" fontSize="10" fontFamily="Georgia, serif" opacity="0.65">6</text>

      {/* === 7. JULY - RUBY (6 o'clock = bottom) === */}
      <g transform="translate(400, 365)" filter="url(#birth-shadow)">
        <polygon points="0,-22 12,-16 18,-4 14,10 0,18 -14,10 -18,-4 -12,-16" fill="url(#birth-ruby)" stroke="#8B0000" strokeWidth="0.8" />
        <polygon points="0,-22 12,-16 6,-8 0,-10" fill="#FF5252" opacity="0.6" />
        <polygon points="0,-22 -12,-16 -6,-8 0,-10" fill="#E53935" opacity="0.5" />
        <polygon points="12,-16 18,-4 10,-2 6,-8" fill="#D50000" opacity="0.4" />
        <polygon points="-12,-16 -18,-4 -10,-2 -6,-8" fill="#FF5252" opacity="0.35" />
        <polygon points="0,-10 6,-8 10,-2 6,4 0,6 -6,4 -10,-2 -6,-8" fill="#8B0000" opacity="0.3" />
        {/* Star lines (asterism) */}
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#FF8A80" strokeWidth="0.5" opacity="0.25" />
        <line x1="0" y1="-10" x2="0" y2="10" stroke="#FF8A80" strokeWidth="0.5" opacity="0.25" />
        <ellipse cx="-3" cy="-10" rx="4" ry="3" fill="white" opacity="0.3" />
        <circle cx="-2" cy="-11" r="1.5" fill="white" opacity="0.4" />
      </g>
      <text x="400" y="398" textAnchor="middle" fill="#5C4033" fontSize="10" fontFamily="Georgia, serif" opacity="0.65">7</text>

      {/* === 8. AUGUST - PERIDOT (7 o'clock) === */}
      <g transform="translate(330, 355)" filter="url(#birth-shadow)">
        <polygon points="0,-20 11,-14 17,-3 13,9 0,16 -13,9 -17,-3 -11,-14" fill="url(#birth-peridot)" stroke="#558B2F" strokeWidth="0.8" />
        <polygon points="0,-20 11,-14 5,-7 0,-9" fill="#C6E04A" opacity="0.6" />
        <polygon points="0,-20 -11,-14 -5,-7 0,-9" fill="#AED581" opacity="0.5" />
        <polygon points="11,-14 17,-3 9,-1 5,-7" fill="#8BC34A" opacity="0.4" />
        <polygon points="-11,-14 -17,-3 -9,-1 -5,-7" fill="#C6E04A" opacity="0.35" />
        <polygon points="0,-9 5,-7 9,-1 5,3 0,5 -5,3 -9,-1 -5,-7" fill="#558B2F" opacity="0.25" />
        <ellipse cx="-3" cy="-9" rx="4" ry="2.5" fill="white" opacity="0.25" />
        <circle cx="-2" cy="-10" r="1.5" fill="white" opacity="0.35" />
      </g>
      <text x="330" y="388" textAnchor="middle" fill="#5C4033" fontSize="10" fontFamily="Georgia, serif" opacity="0.65">8</text>

      {/* === 9. SEPTEMBER - SAPPHIRE (8 o'clock) === */}
      <g transform="translate(278, 310)" filter="url(#birth-shadow)">
        <polygon points="0,-22 12,-16 18,-4 14,10 0,18 -14,10 -18,-4 -12,-16" fill="url(#birth-sapphire)" stroke="#0D47A1" strokeWidth="0.8" />
        <polygon points="0,-22 12,-16 6,-8 0,-10" fill="#64B5F6" opacity="0.6" />
        <polygon points="0,-22 -12,-16 -6,-8 0,-10" fill="#42A5F5" opacity="0.5" />
        <polygon points="12,-16 18,-4 10,-2 6,-8" fill="#1565C0" opacity="0.4" />
        <polygon points="-12,-16 -18,-4 -10,-2 -6,-8" fill="#64B5F6" opacity="0.35" />
        <polygon points="0,-10 6,-8 10,-2 6,4 0,6 -6,4 -10,-2 -6,-8" fill="#0D47A1" opacity="0.3" />
        <ellipse cx="-3" cy="-10" rx="4" ry="3" fill="white" opacity="0.3" />
        <circle cx="-2" cy="-11" r="1.5" fill="white" opacity="0.4" />
      </g>
      <text x="278" y="340" textAnchor="middle" fill="#5C4033" fontSize="10" fontFamily="Georgia, serif" opacity="0.65">9</text>

      {/* === 10. OCTOBER - OPAL (9 o'clock = left) === */}
      <g transform="translate(260, 225)" filter="url(#birth-shadow)">
        {/* Opal - oval cabochon with play of color */}
        <ellipse cx="0" cy="0" rx="20" ry="17" fill="url(#birth-opal)" stroke="#C8C0D0" strokeWidth="0.8" />
        {/* Color play patches */}
        <ellipse cx="-5" cy="-3" rx="6" ry="4" fill="#FF9999" opacity="0.15" transform="rotate(-10, -5, -3)" />
        <ellipse cx="5" cy="2" rx="7" ry="4" fill="#99CCFF" opacity="0.18" transform="rotate(15, 5, 2)" />
        <ellipse cx="-2" cy="5" rx="5" ry="3" fill="#99FF99" opacity="0.12" transform="rotate(-5, -2, 5)" />
        <ellipse cx="8" cy="-5" rx="5" ry="3" fill="#FFCC99" opacity="0.15" transform="rotate(20, 8, -5)" />
        <ellipse cx="-8" cy="2" rx="4" ry="3" fill="#CC99FF" opacity="0.15" />
        {/* Shimmer overlay */}
        <ellipse cx="0" cy="0" rx="20" ry="17" fill="url(#birth-opal-shimmer)" />
        {/* Highlight */}
        <ellipse cx="-5" cy="-6" rx="7" ry="4" fill="white" opacity="0.35" transform="rotate(-20, -5, -6)" />
        <circle cx="-4" cy="-7" r="2.5" fill="white" opacity="0.45" />
      </g>
      <text x="260" y="258" textAnchor="middle" fill="#5C4033" fontSize="10" fontFamily="Georgia, serif" opacity="0.65">10</text>

      {/* === 11. NOVEMBER - TOPAZ (10 o'clock) === */}
      <g transform="translate(278, 140)" filter="url(#birth-shadow)">
        <polygon points="0,-20 11,-14 17,-3 13,9 0,16 -13,9 -17,-3 -11,-14" fill="url(#birth-topaz)" stroke="#8B6914" strokeWidth="0.8" />
        <polygon points="0,-20 11,-14 5,-7 0,-9" fill="#FFD54F" opacity="0.6" />
        <polygon points="0,-20 -11,-14 -5,-7 0,-9" fill="#FFC107" opacity="0.5" />
        <polygon points="11,-14 17,-3 9,-1 5,-7" fill="#FFAB00" opacity="0.4" />
        <polygon points="-11,-14 -17,-3 -9,-1 -5,-7" fill="#FFD54F" opacity="0.35" />
        <polygon points="0,-9 5,-7 9,-1 5,3 0,5 -5,3 -9,-1 -5,-7" fill="#8B6914" opacity="0.25" />
        <ellipse cx="-3" cy="-9" rx="4" ry="2.5" fill="white" opacity="0.25" />
        <circle cx="-2" cy="-10" r="1.5" fill="white" opacity="0.35" />
      </g>
      <text x="278" y="174" textAnchor="middle" fill="#5C4033" fontSize="10" fontFamily="Georgia, serif" opacity="0.65">11</text>

      {/* === 12. DECEMBER - TANZANITE (11 o'clock) === */}
      <g transform="translate(330, 95)" filter="url(#birth-shadow)">
        <polygon points="0,-20 11,-14 17,-3 13,9 0,16 -13,9 -17,-3 -11,-14" fill="url(#birth-tanzanite)" stroke="#283593" strokeWidth="0.8" />
        <polygon points="0,-20 11,-14 5,-7 0,-9" fill="#9FA8DA" opacity="0.6" />
        <polygon points="0,-20 -11,-14 -5,-7 0,-9" fill="#7986CB" opacity="0.5" />
        <polygon points="11,-14 17,-3 9,-1 5,-7" fill="#5C6BC0" opacity="0.4" />
        <polygon points="-11,-14 -17,-3 -9,-1 -5,-7" fill="#9FA8DA" opacity="0.35" />
        <polygon points="0,-9 5,-7 9,-1 5,3 0,5 -5,3 -9,-1 -5,-7" fill="#283593" opacity="0.3" />
        <ellipse cx="-3" cy="-9" rx="4" ry="2.5" fill="white" opacity="0.25" />
        <circle cx="-2" cy="-10" r="1.5" fill="white" opacity="0.35" />
      </g>
      <text x="330" y="128" textAnchor="middle" fill="#5C4033" fontSize="10" fontFamily="Georgia, serif" opacity="0.65">12</text>

      {/* === SPARKLE EFFECTS === */}
      <g filter="url(#birth-glow)">
        {/* Sparkles near various gems */}
        {/* Diamond sparkle (brightest) */}
        <circle cx="536" cy="214" r="3" fill="url(#birth-sparkle)" />
        <line x1="536" y1="209" x2="536" y2="219" stroke="white" strokeWidth="0.8" opacity="0.7" />
        <line x1="531" y1="214" x2="541" y2="214" stroke="white" strokeWidth="0.8" opacity="0.7" />

        {/* Ruby sparkle */}
        <circle cx="397" cy="354" r="2.5" fill="url(#birth-sparkle)" />
        <line x1="397" y1="350" x2="397" y2="358" stroke="white" strokeWidth="0.7" opacity="0.5" />
        <line x1="393" y1="354" x2="401" y2="354" stroke="white" strokeWidth="0.7" opacity="0.5" />

        {/* Emerald sparkle */}
        <circle cx="519" cy="299" r="2" fill="url(#birth-sparkle)" />

        {/* Sapphire sparkle */}
        <circle cx="275" cy="299" r="2" fill="url(#birth-sparkle)" />

        {/* Topaz sparkle */}
        <circle cx="275" cy="131" r="2" fill="url(#birth-sparkle)" />

        {/* Garnet sparkle */}
        <circle cx="397" cy="74" r="2.5" fill="url(#birth-sparkle)" />
        <line x1="397" y1="70" x2="397" y2="78" stroke="white" strokeWidth="0.6" opacity="0.5" />
        <line x1="393" y1="74" x2="401" y2="74" stroke="white" strokeWidth="0.6" opacity="0.5" />

        {/* Floating sparkles in background */}
        <g>
          <line x1="150" y1="100" x2="154" y2="100" stroke="white" strokeWidth="1" opacity="0.35" />
          <line x1="152" y1="98" x2="152" y2="102" stroke="white" strokeWidth="1" opacity="0.35" />
        </g>
        <g>
          <line x1="650" y1="90" x2="654" y2="90" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="652" y1="88" x2="652" y2="92" stroke="white" strokeWidth="1" opacity="0.3" />
        </g>
        <g>
          <line x1="100" y1="350" x2="105" y2="350" stroke="white" strokeWidth="1" opacity="0.25" />
          <line x1="102.5" y1="347.5" x2="102.5" y2="352.5" stroke="white" strokeWidth="1" opacity="0.25" />
        </g>
        <g>
          <line x1="700" y1="370" x2="704" y2="370" stroke="white" strokeWidth="1" opacity="0.3" />
          <line x1="702" y1="368" x2="702" y2="372" stroke="white" strokeWidth="1" opacity="0.3" />
        </g>
        <g>
          <line x1="180" y1="220" x2="184" y2="220" stroke="white" strokeWidth="1" opacity="0.2" />
          <line x1="182" y1="218" x2="182" y2="222" stroke="white" strokeWidth="1" opacity="0.2" />
        </g>
        <g>
          <line x1="620" y1="230" x2="624" y2="230" stroke="white" strokeWidth="1" opacity="0.2" />
          <line x1="622" y1="228" x2="622" y2="232" stroke="white" strokeWidth="1" opacity="0.2" />
        </g>
      </g>

      {/* Decorative borders */}
      <rect x="0" y="0" width="800" height="3" fill="#5C4033" opacity="0.2" />
      <rect x="0" y="447" width="800" height="3" fill="#5C4033" opacity="0.2" />
    </svg>
  );
};

export default BirthstonesHero;
