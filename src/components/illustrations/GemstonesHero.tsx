import React from "react";

interface GemstonesHeroProps {
  className?: string;
}

const GemstonesHero: React.FC<GemstonesHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Collection of beautiful gemstones including diamonds, rubies, emeralds, and sapphires"
    >
      <defs>
        {/* Background */}
        <radialGradient id="gems-bg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#F5E6D3" />
          <stop offset="60%" stopColor="#E8D5C0" />
          <stop offset="100%" stopColor="#D2B48C" />
        </radialGradient>

        {/* Velvet display surface */}
        <linearGradient id="gems-velvet" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3D2B1F" />
          <stop offset="50%" stopColor="#2C1E14" />
          <stop offset="100%" stopColor="#1A110B" />
        </linearGradient>

        {/* Diamond gradients */}
        <linearGradient id="gems-diamond" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="25%" stopColor="#E8E8F0" />
          <stop offset="50%" stopColor="#D0D0E0" />
          <stop offset="75%" stopColor="#E8E8F0" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <linearGradient id="gems-diamond-facet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0F0FF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#C8C8E0" stopOpacity="0.7" />
        </linearGradient>

        {/* Ruby gradients */}
        <linearGradient id="gems-ruby" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF1744" />
          <stop offset="30%" stopColor="#D50000" />
          <stop offset="70%" stopColor="#B71C1C" />
          <stop offset="100%" stopColor="#880E0E" />
        </linearGradient>
        <linearGradient id="gems-ruby-shine" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D50000" stopOpacity="0.3" />
        </linearGradient>

        {/* Emerald gradients */}
        <linearGradient id="gems-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E676" />
          <stop offset="30%" stopColor="#00C853" />
          <stop offset="70%" stopColor="#2E7D32" />
          <stop offset="100%" stopColor="#1B5E20" />
        </linearGradient>
        <linearGradient id="gems-emerald-shine" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#69F0AE" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#2E7D32" stopOpacity="0.3" />
        </linearGradient>

        {/* Sapphire gradients */}
        <linearGradient id="gems-sapphire" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#448AFF" />
          <stop offset="30%" stopColor="#2962FF" />
          <stop offset="70%" stopColor="#1A237E" />
          <stop offset="100%" stopColor="#0D1B60" />
        </linearGradient>
        <linearGradient id="gems-sapphire-shine" x1="20%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#82B1FF" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2962FF" stopOpacity="0.3" />
        </linearGradient>

        {/* Amber / Topaz gradients */}
        <linearGradient id="gems-amber" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD54F" />
          <stop offset="30%" stopColor="#FFAB00" />
          <stop offset="70%" stopColor="#8B6914" />
          <stop offset="100%" stopColor="#6B5210" />
        </linearGradient>

        {/* Amethyst gradient */}
        <linearGradient id="gems-amethyst" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CE93D8" />
          <stop offset="30%" stopColor="#AB47BC" />
          <stop offset="70%" stopColor="#7B1FA2" />
          <stop offset="100%" stopColor="#4A148C" />
        </linearGradient>

        {/* Sparkle */}
        <radialGradient id="gems-sparkle" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Shadow filters */}
        <filter id="gems-shadow">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#1A110B" floodOpacity="0.5" />
        </filter>
        <filter id="gems-glow-white">
          <feGaussianBlur stdDeviation="2" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="gems-glow-color">
          <feGaussianBlur stdDeviation="4" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="450" fill="url(#gems-bg)" />

      {/* Soft light circles in background */}
      <circle cx="200" cy="150" r="200" fill="#8B6914" opacity="0.05" />
      <circle cx="600" cy="200" r="250" fill="#6B8E23" opacity="0.04" />
      <circle cx="400" cy="100" r="180" fill="#D2B48C" opacity="0.08" />

      {/* Display surface - dark velvet-like tray */}
      <path
        d="M80,200 Q80,180 100,175 L700,175 Q720,180 720,200 L720,400 Q720,420 700,420 L100,420 Q80,420 80,400 Z"
        fill="url(#gems-velvet)"
        stroke="#5C4033"
        strokeWidth="2"
      />
      {/* Velvet texture subtle highlight */}
      <path
        d="M100,185 L700,185 L710,200 L90,200 Z"
        fill="#3D2B1F"
        opacity="0.5"
      />

      {/* === LARGE DIAMOND (center) === */}
      <g transform="translate(400, 280)" filter="url(#gems-shadow)">
        {/* Brilliant cut diamond - front view */}
        <polygon
          points="0,-70 40,-45 55,-10 45,30 0,55 -45,30 -55,-10 -40,-45"
          fill="url(#gems-diamond)"
          stroke="#C0C0C8"
          strokeWidth="1"
        />
        {/* Crown facets */}
        <polygon points="0,-70 40,-45 20,-30 0,-35" fill="#E8E8FF" opacity="0.8" />
        <polygon points="0,-70 -40,-45 -20,-30 0,-35" fill="#D0D0E8" opacity="0.7" />
        <polygon points="40,-45 55,-10 28,-15 20,-30" fill="url(#gems-diamond-facet)" />
        <polygon points="-40,-45 -55,-10 -28,-15 -20,-30" fill="#C8C8E0" opacity="0.6" />
        {/* Pavilion facets */}
        <polygon points="55,-10 45,30 20,5 28,-15" fill="#E0E0F0" opacity="0.5" />
        <polygon points="-55,-10 -45,30 -20,5 -28,-15" fill="#D8D8E8" opacity="0.45" />
        <polygon points="45,30 0,55 0,5 20,5" fill="#C8C8E0" opacity="0.4" />
        <polygon points="-45,30 0,55 0,5 -20,5" fill="#E0E0F0" opacity="0.35" />
        {/* Table */}
        <polygon
          points="0,-35 20,-30 28,-15 20,5 0,5 -20,5 -28,-15 -20,-30"
          fill="white"
          opacity="0.4"
        />
        {/* Rainbow refraction */}
        <polygon points="10,-25 20,-20 15,-10" fill="#FFB3B3" opacity="0.2" />
        <polygon points="-5,-20 5,-18 2,-10" fill="#B3D4FF" opacity="0.2" />
        <polygon points="-15,-15 -8,-18 -10,-8" fill="#B3FFB3" opacity="0.15" />
        {/* Shine */}
        <ellipse cx="-8" cy="-30" rx="8" ry="5" fill="white" opacity="0.6" />
        <circle cx="-5" cy="-32" r="3" fill="white" opacity="0.8" />
      </g>

      {/* Diamond sparkles */}
      <g filter="url(#gems-glow-white)">
        <circle cx="392" cy="220" r="4" fill="url(#gems-sparkle)" />
        <line x1="392" y1="214" x2="392" y2="226" stroke="white" strokeWidth="1" opacity="0.8" />
        <line x1="386" y1="220" x2="398" y2="220" stroke="white" strokeWidth="1" opacity="0.8" />
        <circle cx="440" cy="240" r="3" fill="url(#gems-sparkle)" />
        <circle cx="360" cy="250" r="2.5" fill="url(#gems-sparkle)" />
      </g>

      {/* === RUBY (left of center) === */}
      <g transform="translate(220, 310)" filter="url(#gems-shadow)">
        {/* Oval cabochon ruby */}
        <ellipse cx="0" cy="0" rx="42" ry="35" fill="url(#gems-ruby)" stroke="#880E0E" strokeWidth="1" />
        {/* Facets for cushion cut */}
        <ellipse cx="0" cy="0" rx="30" ry="24" fill="none" stroke="#FF1744" strokeWidth="0.5" opacity="0.4" />
        <path d="M-30,-10 L-15,-25 L0,-28 L15,-25 L30,-10" fill="url(#gems-ruby-shine)" opacity="0.5" />
        {/* Inner glow */}
        <ellipse cx="-5" cy="-8" rx="15" ry="10" fill="#FF6B6B" opacity="0.3" />
        {/* Star effect (asterism) */}
        <line x1="-25" y1="0" x2="25" y2="0" stroke="#FF8A80" strokeWidth="0.8" opacity="0.3" />
        <line x1="0" y1="-25" x2="0" y2="25" stroke="#FF8A80" strokeWidth="0.8" opacity="0.3" />
        <line x1="-20" y1="-18" x2="20" y2="18" stroke="#FF8A80" strokeWidth="0.6" opacity="0.2" />
        <line x1="20" y1="-18" x2="-20" y2="18" stroke="#FF8A80" strokeWidth="0.6" opacity="0.2" />
        {/* Highlight */}
        <ellipse cx="-8" cy="-10" rx="8" ry="5" fill="white" opacity="0.3" transform="rotate(-20)" />
      </g>

      {/* === EMERALD (right of center) === */}
      <g transform="translate(580, 300)" filter="url(#gems-shadow)">
        {/* Emerald cut (step cut rectangle) */}
        <polygon
          points="0,-45 35,-35 40,-5 35,25 0,35 -35,25 -40,-5 -35,-35"
          fill="url(#gems-emerald)"
          stroke="#1B5E20"
          strokeWidth="1"
        />
        {/* Step-cut facets (parallel lines) */}
        <polygon points="0,-45 35,-35 25,-25 0,-30 -25,-25 -35,-35" fill="url(#gems-emerald-shine)" opacity="0.5" />
        <polygon points="0,-30 25,-25 20,-15 0,-18 -20,-15 -25,-25" fill="#00E676" opacity="0.3" />
        <polygon points="0,-18 20,-15 18,0 0,-3 -18,0 -20,-15" fill="#00C853" opacity="0.2" />
        {/* Center table */}
        <polygon points="0,-18 20,-15 18,0 15,15 0,20 -15,15 -18,0 -20,-15" fill="#2E7D32" opacity="0.3" />
        {/* Garden inclusions (jardins - characteristic of emeralds) */}
        <path d="M-5,5 Q0,0 5,8 Q8,12 3,10" fill="none" stroke="#1B5E20" strokeWidth="0.5" opacity="0.4" />
        <path d="M10,-8 Q12,-5 8,-2" fill="none" stroke="#1B5E20" strokeWidth="0.3" opacity="0.3" />
        {/* Highlight */}
        <ellipse cx="-8" cy="-22" rx="10" ry="5" fill="white" opacity="0.25" transform="rotate(-10)" />
        <circle cx="-5" cy="-24" r="2" fill="white" opacity="0.4" />
      </g>

      {/* === SAPPHIRE (far left) === */}
      <g transform="translate(130, 330)" filter="url(#gems-shadow)">
        {/* Oval brilliant sapphire */}
        <ellipse cx="0" cy="0" rx="32" ry="28" fill="url(#gems-sapphire)" stroke="#0D1B60" strokeWidth="1" />
        {/* Facets */}
        <polygon points="0,-28 20,-18 12,-5 0,-8" fill="url(#gems-sapphire-shine)" opacity="0.6" />
        <polygon points="0,-28 -20,-18 -12,-5 0,-8" fill="#448AFF" opacity="0.4" />
        <polygon points="20,-18 32,0 15,5 12,-5" fill="#2962FF" opacity="0.35" />
        <polygon points="-20,-18 -32,0 -15,5 -12,-5" fill="#1A237E" opacity="0.3" />
        <polygon points="32,0 20,18 10,8 15,5" fill="#448AFF" opacity="0.25" />
        <polygon points="-32,0 -20,18 -10,8 -15,5" fill="#2962FF" opacity="0.3" />
        <polygon points="20,18 0,28 0,8 10,8" fill="#1A237E" opacity="0.25" />
        <polygon points="-20,18 0,28 0,8 -10,8" fill="#2962FF" opacity="0.2" />
        {/* Center */}
        <ellipse cx="0" cy="0" rx="14" ry="10" fill="#82B1FF" opacity="0.2" />
        {/* Highlight */}
        <ellipse cx="-5" cy="-12" rx="7" ry="4" fill="white" opacity="0.35" transform="rotate(-15)" />
      </g>

      {/* === AMBER/TOPAZ (between diamond and emerald) === */}
      <g transform="translate(500, 340)" filter="url(#gems-shadow)">
        {/* Pear/teardrop shape */}
        <path
          d="M0,-30 Q25,-15 20,10 Q15,25 0,32 Q-15,25 -20,10 Q-25,-15 0,-30 Z"
          fill="url(#gems-amber)"
          stroke="#6B5210"
          strokeWidth="1"
        />
        {/* Facets */}
        <path d="M0,-30 Q12,-15 10,-5 L0,-8 L-10,-5 Q-12,-15 0,-30" fill="#FFD54F" opacity="0.5" />
        <path d="M10,-5 Q18,0 20,10 L8,8 Z" fill="#FFAB00" opacity="0.4" />
        <path d="M-10,-5 Q-18,0 -20,10 L-8,8 Z" fill="#8B6914" opacity="0.35" />
        <path d="M20,10 Q15,25 0,32 L0,8 L8,8 Z" fill="#6B5210" opacity="0.3" />
        <path d="M-20,10 Q-15,25 0,32 L0,8 L-8,8 Z" fill="#FFAB00" opacity="0.25" />
        {/* Warm glow */}
        <ellipse cx="-3" cy="-12" rx="5" ry="4" fill="#FFF8E1" opacity="0.4" />
        {/* Inclusion */}
        <circle cx="3" cy="5" r="1.5" fill="#6B5210" opacity="0.2" />
      </g>

      {/* === AMETHYST (far right) === */}
      <g transform="translate(680, 330)" filter="url(#gems-shadow)">
        {/* Trillion/triangular cut */}
        <polygon
          points="0,-30 30,20 -30,20"
          fill="url(#gems-amethyst)"
          stroke="#4A148C"
          strokeWidth="1"
        />
        {/* Facets */}
        <polygon points="0,-30 15,-5 0,0" fill="#CE93D8" opacity="0.5" />
        <polygon points="0,-30 -15,-5 0,0" fill="#AB47BC" opacity="0.4" />
        <polygon points="15,-5 30,20 5,10 0,0" fill="#7B1FA2" opacity="0.35" />
        <polygon points="-15,-5 -30,20 -5,10 0,0" fill="#CE93D8" opacity="0.3" />
        <polygon points="30,20 -30,20 -5,10 5,10" fill="#4A148C" opacity="0.3" />
        {/* Highlight */}
        <ellipse cx="-3" cy="-12" rx="5" ry="4" fill="white" opacity="0.3" transform="rotate(-10)" />
      </g>

      {/* === SMALL ACCENT GEMS scattered around === */}
      {/* Small round peridot */}
      <g transform="translate(310, 370)">
        <circle cx="0" cy="0" r="12" fill="#8BC34A" stroke="#558B2F" strokeWidth="0.8" />
        <circle cx="-3" cy="-4" r="4" fill="#C5E1A5" opacity="0.5" />
        <circle cx="-2" cy="-5" r="1.5" fill="white" opacity="0.4" />
      </g>

      {/* Small garnet */}
      <g transform="translate(470, 380)">
        <circle cx="0" cy="0" r="10" fill="#C62828" stroke="#8E0000" strokeWidth="0.8" />
        <circle cx="-2" cy="-3" r="3" fill="#EF5350" opacity="0.4" />
        <circle cx="-1" cy="-4" r="1" fill="white" opacity="0.3" />
      </g>

      {/* Small citrine */}
      <g transform="translate(350, 390)">
        <polygon points="0,-10 8,-4 6,8 -6,8 -8,-4" fill="#FFC107" stroke="#F57F17" strokeWidth="0.5" />
        <polygon points="0,-10 4,-4 0,-2 -4,-4" fill="#FFE082" opacity="0.5" />
      </g>

      {/* Small tanzanite */}
      <g transform="translate(620, 380)">
        <ellipse cx="0" cy="0" rx="9" ry="11" fill="#5C6BC0" stroke="#283593" strokeWidth="0.7" />
        <ellipse cx="-2" cy="-3" rx="3" ry="4" fill="#9FA8DA" opacity="0.4" />
      </g>

      {/* === SPARKLE EFFECTS throughout === */}
      <g filter="url(#gems-glow-white)">
        {/* On ruby */}
        <circle cx="212" cy="298" r="3" fill="url(#gems-sparkle)" />
        {/* On emerald */}
        <circle cx="572" cy="278" r="3" fill="url(#gems-sparkle)" />
        {/* On sapphire */}
        <circle cx="124" cy="318" r="2.5" fill="url(#gems-sparkle)" />
        {/* On amethyst */}
        <circle cx="676" cy="312" r="2.5" fill="url(#gems-sparkle)" />
        {/* Floating sparkles */}
        <g>
          <line x1="160" y1="210" x2="164" y2="210" stroke="white" strokeWidth="1" opacity="0.5" />
          <line x1="162" y1="208" x2="162" y2="212" stroke="white" strokeWidth="1" opacity="0.5" />
        </g>
        <g>
          <line x1="640" y1="220" x2="644" y2="220" stroke="white" strokeWidth="1" opacity="0.4" />
          <line x1="642" y1="218" x2="642" y2="222" stroke="white" strokeWidth="1" opacity="0.4" />
        </g>
        <g>
          <line x1="300" y1="200" x2="305" y2="200" stroke="white" strokeWidth="1.2" opacity="0.5" />
          <line x1="302.5" y1="197.5" x2="302.5" y2="202.5" stroke="white" strokeWidth="1.2" opacity="0.5" />
        </g>
        <g>
          <line x1="520" y1="230" x2="524" y2="230" stroke="white" strokeWidth="1" opacity="0.4" />
          <line x1="522" y1="228" x2="522" y2="232" stroke="white" strokeWidth="1" opacity="0.4" />
        </g>
      </g>

      {/* Decorative top and bottom borders */}
      <rect x="0" y="0" width="800" height="3" fill="#5C4033" opacity="0.2" />
      <rect x="0" y="447" width="800" height="3" fill="#5C4033" opacity="0.2" />
    </svg>
  );
};

export default GemstonesHero;
