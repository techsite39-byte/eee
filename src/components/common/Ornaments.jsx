import React from 'react';

// Gopuram Temple Kalasam Crest
export const GopuramCrest = ({ className = "w-16 h-12 text-gold" }) => (
  <svg viewBox="0 0 120 80" fill="currentColor" className={className}>
    {/* Central Main Kalasam */}
    <path d="M60 2 L62 10 L68 18 L66 22 L72 32 L70 38 L76 52 L60 62 L44 52 L50 38 L48 32 L54 22 L52 18 L58 10 Z" opacity="0.95" />
    <circle cx="60" cy="5" r="3" fill="#E3C98D" />
    {/* Left Flank Finial */}
    <path d="M38 25 L40 32 L44 38 L42 42 L46 54 L34 60 L28 50 L32 40 L30 35 Z" opacity="0.8" />
    {/* Right Flank Finial */}
    <path d="M82 25 L80 32 L76 38 L78 42 L74 54 L86 60 L92 50 L88 40 L90 35 Z" opacity="0.8" />
    {/* Bottom Base Plinth */}
    <rect x="20" y="62" width="80" height="6" rx="2" fill="currentColor" />
    <rect x="26" y="69" width="68" height="4" rx="1" fill="#A5813F" />
    <circle cx="60" cy="35" r="4" fill="#812C32" />
  </svg>
);

// Traditional Tamil Kolam / Rangoli Divider
export const KolamDivider = ({ className = "w-full max-w-md mx-auto my-6 text-gold" }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold/50 to-gold" />
    <svg viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-8 flex-shrink-0 text-gold">
      {/* Central Lotus & Kolam Motifs */}
      <circle cx="40" cy="20" r="4" fill="#C6A15B" />
      <circle cx="40" cy="20" r="10" strokeDasharray="2 2" />
      <path d="M40 8 C44 14, 44 26, 40 32 C36 26, 36 14, 40 8 Z" fill="#C6A15B" fillOpacity="0.2" />
      <path d="M28 20 C34 16, 46 16, 52 20 C46 24, 34 24, 28 20 Z" fill="#C6A15B" fillOpacity="0.2" />
      {/* Petals */}
      <circle cx="40" cy="8" r="2" fill="currentColor" />
      <circle cx="40" cy="32" r="2" fill="currentColor" />
      <circle cx="28" cy="20" r="2" fill="currentColor" />
      <circle cx="52" cy="20" r="2" fill="currentColor" />
      {/* Swirl flourishes */}
      <path d="M20 20 Q12 10 6 20 Q12 30 20 20" stroke="currentColor" />
      <path d="M60 20 Q68 10 74 20 Q68 30 60 20" stroke="currentColor" />
    </svg>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold/50 to-gold" />
  </div>
);

// Golden Ornamental Filigree Corners for Cards & Frames
export const CornerOrnament = ({ position = "top-left", className = "w-8 h-8 text-gold" }) => {
  const rotationClass = {
    'top-left': '',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90'
  }[position] || '';

  return (
    <div className={`pointer-events-none absolute ${rotationClass} ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
        {/* Outer border lines */}
        <path d="M2 38 L2 8 Q2 2 8 2 L38 2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 34 L6 10 Q6 6 10 6 L34 6" stroke="currentColor" strokeWidth="0.8" opacity="0.6" strokeDasharray="2 2" />
        {/* Floral flourish */}
        <path d="M8 8 C14 8, 18 12, 18 18 C12 18, 8 14, 8 8 Z" fill="currentColor" fillOpacity="0.4" />
        <circle cx="10" cy="10" r="2.5" fill="#C6A15B" />
        <circle cx="22" cy="6" r="1.5" fill="currentColor" />
        <circle cx="6" cy="22" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
};

// Traditional South Indian Brass Kuthu Vilakku (Oil Lamp with Flame)
export const BrassLamp = ({ className = "w-12 h-28 text-gold" }) => (
  <div className={`relative inline-block ${className}`}>
    <svg viewBox="0 0 60 140" fill="none" className="w-full h-full">
      {/* Base Plinth */}
      <path d="M12 135 C12 128, 48 128, 48 135 L52 138 C52 140, 8 140, 8 138 Z" fill="#A5813F" />
      <ellipse cx="30" cy="128" rx="16" ry="4" fill="#C6A15B" />
      {/* Lower Stem Tier */}
      <rect x="27" y="95" width="6" height="30" fill="#876527" />
      <ellipse cx="30" cy="110" rx="9" ry="3" fill="#E3C98D" />
      <ellipse cx="30" cy="95" rx="12" ry="3.5" fill="#C6A15B" />
      {/* Middle Pillar */}
      <rect x="27" y="65" width="6" height="30" fill="#A5813F" />
      <ellipse cx="30" cy="78" rx="8" ry="2.5" fill="#E3C98D" />
      <ellipse cx="30" cy="65" rx="15" ry="4" fill="#C6A15B" />
      {/* Oil Basin (Thattu) */}
      <path d="M10 65 Q30 74 50 65 Q45 58 30 58 Q15 58 10 65 Z" fill="#C6A15B" />
      {/* Top Crown & Finial */}
      <path d="M26 58 L26 48 L34 48 L34 58 Z" fill="#876527" />
      <ellipse cx="30" cy="46" rx="6" ry="2.5" fill="#E3C98D" />
      {/* Annapakshi (Traditional Swan Crest) */}
      <path d="M30 44 C26 38, 25 32, 28 26 C30 22, 33 22, 32 26 C35 22, 38 24, 36 29 C38 32, 34 38, 30 44 Z" fill="#C6A15B" />
      
      {/* Flickering Diya Flame */}
      <g className="animate-pulse">
        {/* Outer Glow */}
        <ellipse cx="30" cy="52" rx="10" ry="14" fill="#FFE885" opacity="0.3" filter="blur(2px)" />
        {/* Main Golden Orange Flame */}
        <path d="M30 57 C25 53, 24 45, 30 33 C36 45, 35 53, 30 57 Z" fill="#E69500" />
        {/* Inner Bright Yellow Core */}
        <path d="M30 55 C27 52, 27 46, 30 37 C33 46, 33 52, 30 55 Z" fill="#FFF275" />
      </g>
    </svg>
  </div>
);

// Traditional Temple Hanging Bell with gentle swing animation
export const TempleBell = ({ className = "w-10 h-24 text-gold" }) => (
  <div className={`relative inline-block origin-top animate-swing ${className}`}>
    <svg viewBox="0 0 50 120" fill="none" className="w-full h-full">
      {/* Hanging Chain Links */}
      <line x1="25" y1="0" x2="25" y2="50" stroke="#A5813F" strokeWidth="2.5" strokeDasharray="3 3" />
      {/* Chain Ring */}
      <circle cx="25" cy="52" r="4" stroke="#C6A15B" strokeWidth="2" fill="none" />
      {/* Bell Cap */}
      <path d="M18 56 C20 54, 30 54, 32 56 L34 62 L16 62 Z" fill="#876527" />
      {/* Bell Body */}
      <path d="M16 62 C16 75, 10 88, 7 96 L43 96 C40 88, 34 75, 34 62 Z" fill="#C6A15B" />
      {/* Bell Rim with Engravings */}
      <ellipse cx="25" cy="96" rx="18" ry="5" fill="#E3C98D" />
      <ellipse cx="25" cy="97" rx="19" ry="4" stroke="#876527" strokeWidth="1.5" fill="none" />
      {/* Clapper / Tongue */}
      <line x1="25" y1="96" x2="25" y2="108" stroke="#641F29" strokeWidth="3" />
      <circle cx="25" cy="110" r="4" fill="#C6A15B" />
    </svg>
  </div>
);

// Hanging Toranam (Traditional Mango leaves & Marigold Flowers Garland)
export const Toranam = () => (
  <div className="w-full overflow-hidden pointer-events-none select-none z-20 flex justify-center">
    <svg viewBox="0 0 1200 65" className="w-full max-w-7xl h-auto" fill="none" preserveAspectRatio="none">
      {/* Main Hanging Swag Rope */}
      <path d="M0 8 Q150 25 300 8 Q450 25 600 8 Q750 25 900 8 Q1050 25 1200 8" stroke="#876527" strokeWidth="2" fill="none" />
      
      {/* Repeated Mango Leaf & Jasmine/Marigold drops across 8 nodes */}
      {[75, 150, 225, 300, 375, 450, 525, 600, 675, 750, 825, 900, 975, 1050, 1125].map((x, i) => (
        <g key={i} transform={`translate(${x}, 12)`}>
          {/* Mango Leaf */}
          <path d="M0 0 C-6 12, -8 24, 0 38 C8 24, 6 12, 0 0 Z" fill="#2E6B38" />
          <path d="M0 0 L0 34" stroke="#1F4926" strokeWidth="0.8" />
          {/* Marigold Flower Ball */}
          <circle cx="0" cy="5" r="4.5" fill="#E69500" />
          <circle cx="0" cy="5" r="3" fill="#FFE885" />
          {/* Hanging Jasmine Drop */}
          <circle cx="0" cy="42" r="2.5" fill="#FFFDF7" stroke="#E3C98D" strokeWidth="0.5" />
          <circle cx="0" cy="47" r="2.5" fill="#FFFDF7" stroke="#E3C98D" strokeWidth="0.5" />
          <circle cx="0" cy="52" r="3" fill="#E69500" />
        </g>
      ))}
    </svg>
  </div>
);

// Auspicious Ganesha / Om Stamp Emblem
export const VinayagarEmblem = ({ className = "w-16 h-16" }) => (
  <div className={`relative flex items-center justify-center rounded-full border-2 border-gold/60 bg-maroon-dark/80 p-2 shadow-gold-glow ${className}`}>
    <div className="text-center font-tamil font-bold text-gold-soft text-xl leading-none select-none">
      ஓம்
    </div>
  </div>
);

// Sacred Auspicious Brass Lamp (Agal Deepam / Kamakshi Vilakku) Above Arch
export const ArchCrownDeepam = ({ className = "w-20 h-20" }) => (
  <div className={`relative flex flex-col items-center justify-center ${className}`}>
    {/* Divine Warm Pulsing Aura Glow Behind the Lamp */}
    <div className="absolute -top-4 w-24 h-24 rounded-full bg-gradient-to-t from-orange-400/40 via-yellow-300/40 to-transparent blur-md pointer-events-none animate-aura" />

    <svg viewBox="0 0 100 95" fill="none" className="w-full h-full relative z-10 overflow-visible drop-shadow-[0_4px_12px_rgba(230,149,0,0.35)]">
      {/* Auspicious Radiant Rays */}
      <g className="opacity-70 animate-pulse-slow">
        <line x1="50" y1="10" x2="50" y2="0" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="36" y1="14" x2="28" y2="6" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="64" y1="14" x2="72" y2="6" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="26" y1="24" x2="16" y2="20" stroke="#F59E0B" strokeWidth="1" strokeLinecap="round" />
        <line x1="74" y1="24" x2="84" y2="20" stroke="#F59E0B" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* Lifelike Flickering Sacred Diya Flame */}
      <g className="animate-flame origin-bottom">
        {/* Soft Flame Halo */}
        <ellipse cx="50" cy="22" rx="15" ry="18" fill="url(#deepamFlameAura)" opacity="0.6" filter="blur(3px)" />
        {/* Outer Radiant Amber Flame */}
        <path d="M50 6 C41 18, 38 27, 50 36 C62 27, 59 18, 50 6 Z" fill="url(#deepamOuterFlame)" />
        {/* Middle Golden Flame */}
        <path d="M50 12 C44 20, 42 27, 50 34 C58 27, 56 20, 50 12 Z" fill="#FCD34D" />
        {/* Inner White-Hot Core */}
        <path d="M50 18 C47 24, 46 29, 50 33 C54 29, 53 24, 50 18 Z" fill="#FFFDF7" />
      </g>

      {/* Traditional Brass Diya Basin / Agal Bowl */}
      {/* Wick Rim */}
      <ellipse cx="50" cy="38" rx="24" ry="6" fill="#E3C98D" stroke="#A5813F" strokeWidth="1" />
      <ellipse cx="50" cy="37" rx="20" ry="4" fill="#C6A15B" />

      {/* Ornate Sculpted Brass Bowl Body */}
      <path d="M26 38 C28 54, 72 54, 74 38 Z" fill="url(#deepamBrassGrad)" stroke="#876527" strokeWidth="1.2" />
      
      {/* Traditional Filigree Engravings */}
      <path d="M34 42 Q50 51 66 42" stroke="#876527" strokeWidth="1" fill="none" opacity="0.85" />
      <circle cx="50" cy="46" r="2.5" fill="#812C32" />
      <circle cx="42" cy="44" r="1.5" fill="#FFFDF7" opacity="0.8" />
      <circle cx="58" cy="44" r="1.5" fill="#FFFDF7" opacity="0.8" />

      {/* Kalasam Stem / Neck */}
      <path d="M45 52 L43 60 L57 60 L55 52 Z" fill="#A5813F" stroke="#876527" strokeWidth="0.8" />
      <ellipse cx="50" cy="60" rx="9" ry="2.5" fill="#E3C98D" />

      {/* Multi-tier Lotus Base Plinth */}
      <path d="M37 62 C37 70, 63 70, 63 62 Z" fill="#C6A15B" />
      <rect x="32" y="68" width="36" height="4.5" rx="2" fill="#A5813F" />
      <rect x="27" y="73" width="46" height="5.5" rx="2.5" fill="#876527" />
      <rect x="20" y="79" width="60" height="6" rx="3" fill="url(#deepamBrassGrad)" stroke="#876527" strokeWidth="0.8" />

      {/* Auspicious Ruby Gems on Plinth */}
      <circle cx="50" cy="82" r="2.5" fill="#812C32" />
      <circle cx="34" cy="82" r="1.5" fill="#E3C98D" />
      <circle cx="66" cy="82" r="1.5" fill="#E3C98D" />

      {/* Gradients */}
      <defs>
        <radialGradient id="deepamFlameAura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#EA580C" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="deepamOuterFlame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EA580C" />
          <stop offset="45%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
        <linearGradient id="deepamBrassGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="35%" stopColor="#E3C98D" />
          <stop offset="70%" stopColor="#C6A15B" />
          <stop offset="90%" stopColor="#A5813F" />
          <stop offset="100%" stopColor="#6B4F1A" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Traditional Temple Hanging Bell with Golden Chain and Pendulum Swing
export const TempleHangingBell = ({ side = 'left', className = "w-7 h-20" }) => (
  <div className={`relative inline-block origin-top ${side === 'left' ? 'animate-bell-swing-left' : 'animate-bell-swing-right'} ${className}`}>
    <svg viewBox="0 0 40 105" fill="none" className="w-full h-full drop-shadow-[0_4px_6px_rgba(74,22,30,0.15)]">
      {/* Golden Chain Links */}
      <line x1="20" y1="0" x2="20" y2="48" stroke="#A5813F" strokeWidth="2.5" strokeDasharray="4 2" />
      <circle cx="20" cy="50" r="3.5" stroke="#C6A15B" strokeWidth="1.5" fill="none" />

      {/* Bell Cap */}
      <path d="M13 54 C15 51, 25 51, 27 54 L30 60 L10 60 Z" fill="#876527" />

      {/* Bell Flared Body */}
      <path d="M10 60 C10 73, 5 84, 3 92 L37 92 C35 84, 30 73, 30 60 Z" fill="url(#bellMetalGrad)" stroke="#876527" strokeWidth="0.8" />

      {/* Bell Engraved Rim */}
      <ellipse cx="20" cy="92" rx="17" ry="4.5" fill="#E3C98D" stroke="#A5813F" strokeWidth="1" />
      <ellipse cx="20" cy="93" rx="18" ry="3.5" stroke="#876527" strokeWidth="1" fill="none" />

      {/* Clapper / Tongue */}
      <line x1="20" y1="92" x2="20" y2="102" stroke="#641F29" strokeWidth="2.5" />
      <circle cx="20" cy="103" r="3.5" fill="#C6A15B" stroke="#876527" strokeWidth="0.8" />

      <defs>
        <linearGradient id="bellMetalGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF2D6" />
          <stop offset="40%" stopColor="#E3C98D" />
          <stop offset="70%" stopColor="#C6A15B" />
          <stop offset="100%" stopColor="#876527" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Cascading South Indian Jasmine & Rose Flower Garland (மல்லிகைப் பூ மாலை)
export const CascadingJasmineGarland = ({ side = 'left', className = "" }) => (
  <div className={`flex flex-col items-center pointer-events-none select-none origin-top ${side === 'left' ? 'animate-garland-sway' : 'animate-garland-sway-delayed'} ${className}`}>
    {/* Hanging Loop */}
    <div className="w-1.5 h-3 bg-gold-dark rounded-t-sm" />
    
    {/* Flowers string */}
    <div className="flex flex-col items-center -space-y-0.5">
      {[...Array(14)].map((_, i) => (
        <div key={i} className="flex flex-col items-center">
          {i % 4 === 2 ? (
            // Auspicious Red Rose Bloom
            <div className="relative my-0.5 z-10">
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-red-600 to-maroon-dark shadow-sm border border-red-800/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
              </div>
            </div>
          ) : (
            // Fragrant Jasmine Flower Ball
            <div className="relative z-0">
              <div className="w-3 h-3 rounded-full bg-gradient-to-b from-white via-[#FFFDF7] to-[#F5E8C7] border border-gold/30 shadow-[0_1px_2px_rgba(0,0,0,0.06)]" />
              <div className="w-1 h-1 rounded-full bg-gold/50 mx-auto -mt-1 opacity-70" />
            </div>
          )}
        </div>
      ))}
      
      {/* Bottom Brass Tassel / Ghungroo Bell */}
      <div className="pt-1 flex flex-col items-center">
        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-b from-gold-soft via-gold to-gold-dark shadow-sm border border-gold-deep flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-maroon-dark" />
        </div>
      </div>
    </div>
  </div>
);

// Concentric Arched Halo Curves (Thiruvachi Mandapam Lines matching Reference 1)
export const TempleArchHalo = ({ className = "" }) => (
  <svg viewBox="0 0 400 240" fill="none" className={`pointer-events-none ${className}`}>
    {/* Outer Dotted Arch Curve */}
    <path
      d="M20 230 C20 100, 380 100, 380 230"
      stroke="#C6A15B"
      strokeWidth="1.2"
      strokeDasharray="4 4"
      opacity="0.5"
    />
    {/* Middle Continuous Golden Arch */}
    <path
      d="M38 230 C38 115, 362 115, 362 230"
      stroke="#C6A15B"
      strokeWidth="1"
      opacity="0.75"
    />
    {/* Inner Delicate Line */}
    <path
      d="M56 230 C56 130, 344 130, 344 230"
      stroke="#E3C98D"
      strokeWidth="0.8"
      strokeDasharray="2 3"
      opacity="0.6"
    />

    {/* Traditional Lotus Petal Halo Accents */}
    {[0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85].map((t, idx) => {
      // Calculate radial points along top arch
      const angle = Math.PI * (1 - t);
      const cx = 200 + 175 * Math.cos(angle);
      const cy = 230 - 120 * Math.sin(angle);
      return (
        <circle
          key={idx}
          cx={cx}
          cy={cy}
          r="2.5"
          fill="#C6A15B"
          opacity="0.85"
        />
      );
    })}
  </svg>
);

// Shimmering Golden Star Particle
export const GoldSparkle = ({ className = "w-4 h-4 text-gold", delay = "0s" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ animationDelay: delay }}
    className={`animate-sparkle pointer-events-none ${className}`}
  >
    <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
  </svg>
);
