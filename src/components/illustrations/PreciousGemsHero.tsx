import React from "react";

interface PreciousGemsHeroProps {
  className?: string;
}

const PreciousGemsHero: React.FC<PreciousGemsHeroProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 450"
      className={className}
      role="img"
      aria-label="Precious and semi-precious gemstones arranged in a modern sleek design"
    >
      <defs>
        {/* Modern Dark Backgrounds */}
        <radialGradient id="pg-bg" cx="50%" cy="50%" r="75%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="60%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>

        <linearGradient id="pg-glow-primary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0f766e" stopOpacity="0.1" />
        </linearGradient>

        <linearGradient id="pg-glow-secondary" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.1" />
        </linearGradient>

        {/* Glow Filters */}
        <filter id="pg-neon-cyan">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="pg-neon-purple">
          <feGaussianBlur stdDeviation="12" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="pg-drop-shadow">
          <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#000" floodOpacity="0.8" />
        </filter>
      </defs>

      {/* Background space */}
      <rect width="800" height="450" fill="url(#pg-bg)" />

      {/* Abstract Glowing Orbs (Background ambient lighting) */}
      <circle cx="200" cy="225" r="150" fill="#14b8a6" opacity="0.15" filter="url(#pg-neon-cyan)" />
      <circle cx="600" cy="225" r="150" fill="#8b5cf6" opacity="0.15" filter="url(#pg-neon-purple)" />

      {/* Grid lines to make it look technical/modern */}
      <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1">
        <line x1="400" y1="0" x2="400" y2="450" strokeDasharray="5,5" />
        <line x1="0" y1="225" x2="800" y2="225" strokeDasharray="5,5" />
      </g>

      {/* Left side: "Precious" Gem (Emerald style) */}
      <g transform="translate(140, 140)" filter="url(#pg-drop-shadow)">
        <text x="60" y="-30" fill="#14b8a6" fontSize="24" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4" textAnchor="middle" filter="url(#pg-neon-cyan)">PRECIOUS</text>
        <path
          d="M20 0 L100 0 L120 40 L60 140 L0 40 Z"
          fill="rgba(20, 184, 166, 0.1)"
          stroke="#14b8a6"
          strokeWidth="3"
          filter="url(#pg-neon-cyan)"
        />
        <path d="M20 0 L60 40 L100 0 M0 40 L120 40 M60 40 L60 140" stroke="#14b8a6" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M20 0 L0 40 L60 140 Z" fill="url(#pg-glow-primary)" opacity="0.4" />
      </g>

      {/* Right side: "Semi-Precious" Gem (Amethyst style) */}
      <g transform="translate(540, 140)" filter="url(#pg-drop-shadow)">
        <text x="60" y="-30" fill="#8b5cf6" fontSize="24" fontWeight="bold" fontFamily="sans-serif" letterSpacing="4" textAnchor="middle" filter="url(#pg-neon-purple)">SEMI-PRECIOUS</text>
        <path
          d="M0 40 L60 0 L120 40 L60 140 Z"
          fill="rgba(139, 92, 246, 0.1)"
          stroke="#8b5cf6"
          strokeWidth="3"
          filter="url(#pg-neon-purple)"
        />
        <path d="M60 0 L60 140 M0 40 L120 40 M30 20 L60 40 L90 20 M30 90 L60 40 L90 90" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M60 0 L120 40 L60 140 Z" fill="url(#pg-glow-secondary)" opacity="0.4" />
      </g>

      {/* Center versus graphic */}
      <g transform="translate(400, 225)">
        <circle cx="0" cy="0" r="30" fill="#0f172a" stroke="#475569" strokeWidth="2" filter="url(#pg-drop-shadow)" />
        <text x="0" y="7" fill="#cbd5e1" fontSize="20" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">VS</text>
      </g>

      {/* Floating particles */}
      <g fill="#ffffff" opacity="0.6">
        <circle cx="100" cy="100" r="2" />
        <circle cx="300" cy="350" r="3" />
        <circle cx="700" cy="80" r="1.5" />
        <circle cx="500" cy="400" r="2" />
      </g>
    </svg>
  );
};

export default PreciousGemsHero;
