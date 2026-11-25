import React, { useState, useEffect } from 'react';
import { GoldSparkle } from '../common/Ornaments';
import { useLanguage } from '../../i18n/LanguageContext';

export const HeroSection = ({ config }) => {
  const { lang, isTa, t } = useLanguage();

  // Live Real-Time Countdown to 29 November 2026, 9:30 AM IST
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(config.event.dateISO || '2026-11-29T09:30:00+05:30').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [config.event.dateISO]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start pt-16 sm:pt-20 pb-16 px-3 sm:px-6 bg-[#FAF6ED] text-[#725D4C] overflow-hidden"
    >
      {/* Background Subtle Warm Radial Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_center,_rgba(198,154,69,0.18)_0%,_transparent_75%)]" />

      {/* Floating Gold Sparkle Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <GoldSparkle className="absolute top-[12%] left-[8%] sm:left-[18%] w-4 h-4 text-[#C69A45]/80" delay="0s" />
        <GoldSparkle className="absolute top-[24%] right-[8%] sm:right-[18%] w-4 h-4 text-[#C69A45]/70" delay="1.2s" />
        <GoldSparkle className="absolute top-[48%] left-[6%] sm:left-[16%] w-3.5 h-3.5 text-[#C69A45]/60" delay="0.6s" />
        <GoldSparkle className="absolute top-[72%] right-[6%] sm:right-[16%] w-4 h-4 text-[#C69A45]/75" delay="1.8s" />
      </div>

      {/* ======================================================== */}
      {/* TOP DIVINE INVOCATION BANNER                             */}
      {/* ======================================================== */}
      <div className="w-full max-w-[390px] sm:max-w-[430px] mx-auto mb-2.5 px-3 py-1.5 rounded-full bg-[#FFF9EE]/95 border border-[#C69A45]/45 shadow-xs flex items-center justify-center gap-1.5 z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C69A45] animate-pulse shrink-0" />
        <p className="text-[8.5px] sm:text-[10px] font-semibold text-[#96702D] tracking-[0.12em] uppercase font-serif text-center font-tamil whitespace-nowrap overflow-hidden text-ellipsis">
          {t.hero.divineBanner}
        </p>
        <span className="w-1.5 h-1.5 rounded-full bg-[#C69A45] animate-pulse shrink-0" />
      </div>

      {/* ======================================================== */}
      {/* MAIN INTERACTIVE ARTWORK INVITATION CONTAINER            */}
      {/* (Preserves exact aspect ratio: 869 / 1810 ~ 1 : 2.083)   */}
      {/* ======================================================== */}
      <div className="relative w-full max-w-[420px] sm:max-w-[450px] mx-auto shadow-2xl rounded-2xl overflow-hidden aspect-[869/1810] bg-[#FAF6ED] select-text border border-[#C69A45]/30">
        
        {/* 1. Base Decorative Background Artwork */}
        <img
          src={config.artworkBg || '/sec1.webp'}
          alt="Tamil Ear Piercing Ceremony Invitation Artwork"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* ======================================================== */}
        {/* 2. AUTHENTIC SACRED TEMPLE OIL DIYA FLAME ANIMATION     */}
        {/* (Located at top apex of arch: center x=50%, y=3.4%)      */}
        {/* ======================================================== */}
        <div className="absolute top-[1.4%] left-[46.2%] w-[7.6%] h-[4.5%] pointer-events-none flex items-center justify-center z-20">
          <div className="absolute -inset-2.5 rounded-full bg-[radial-gradient(circle,_rgba(255,200,80,0.55)_0%,_rgba(255,140,20,0.22)_50%,_transparent_75%)] animate-aura" />

          {/* SVG Realistic Teardrop Flame */}
          <svg
            viewBox="0 0 32 48"
            className="w-full h-full animate-flame filter drop-shadow-[0_0_10px_rgba(255,180,30,0.9)]"
          >
            <defs>
              <radialGradient id="diyaFlameGrad" cx="50%" cy="80%" r="65%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="25%" stopColor="#FEF08A" />
                <stop offset="65%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#D97706" />
              </radialGradient>
              <linearGradient id="diyaInnerCore" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="55%" stopColor="#FEF08A" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M16 2 C22 14, 28 24, 28 34 C28 41.7, 22.6 47, 16 47 C9.4 47, 4 41.7, 4 34 C4 24, 10 14, 16 2 Z"
              fill="url(#diyaFlameGrad)"
            />
            <path
              d="M16 12 C19.5 20, 23 27, 23 35 C23 39.5, 19.8 43, 16 43 C12.2 43, 9 39.5, 9 35 C9 27, 12.5 20, 16 12 Z"
              fill="url(#diyaInnerCore)"
            />
          </svg>

          {/* Floating Golden Ember Sparks Rising Up */}
          <div className="absolute -top-1 w-1 h-1 rounded-full bg-yellow-200 animate-ember opacity-80" style={{ '--drift': '5px' }} />
          <div className="absolute -top-2 w-1.5 h-1.5 rounded-full bg-amber-300 animate-ember opacity-70" style={{ '--drift': '-6px', animationDelay: '0.9s' }} />
          <div className="absolute -top-3 w-1 h-1 rounded-full bg-yellow-100 animate-ember opacity-90" style={{ '--drift': '3px', animationDelay: '1.7s' }} />
        </div>

        {/* ======================================================== */}
        {/* 4. HERO CHILD PORTRAIT                                   */}
        {/* ======================================================== */}
        <div className="absolute top-[14.6%] left-[20.7%] w-[58.7%] h-[27.1%] overflow-hidden rounded-t-[200px] pointer-events-none z-10">
          <img
            src={config.child.photoUrl || '/images/child-main.jpg'}
            alt={t.hero.childrenNames}
            className="w-full h-full object-cover object-[center_18%]"
          />
        </div>

        {/* ======================================================== */}
        {/* 5. SAVE THE DATE TEXT                                    */}
        {/* ======================================================== */}
        <div className="absolute top-[42.8%] left-[10%] right-[10%] h-[2.0%] flex items-center justify-center pointer-events-none z-10">
          <p className="text-[9.5px] sm:text-[11px] uppercase tracking-[0.24em] font-serif font-bold text-[#96702D] font-tamil drop-shadow-2xs">
            {t.hero.saveTheDate}
          </p>
        </div>

        {/* ======================================================== */}
        {/* 6. PANEL 1: CHILDREN NAMES & SACRED ORNAMENT SUBTITLE    */}
        {/* ======================================================== */}
        <div className="absolute top-[47.0%] left-[13.5%] right-[13.5%] h-[6.5%] flex flex-col items-center justify-center text-center px-2 pointer-events-auto z-10">
          <h1 className="text-[15px] sm:text-[18px] md:text-[20px] font-serif font-bold text-[#70212B] tracking-wide leading-tight drop-shadow-2xs font-tamil">
            {t.hero.childrenNames}
          </h1>

          <p className="text-[8.5px] sm:text-[9.5px] font-serif italic text-[#725D4C] mt-1 leading-tight font-tamil">
            {t.hero.childrenSubtitle}
          </p>
        </div>

        {/* ======================================================== */}
        {/* 7. PANEL 2: DATE & AUSPICIOUS MUHURTHAM TIMING          */}
        {/* ======================================================== */}
        <div className="absolute top-[57.2%] left-[12%] right-[12%] h-[7.8%] flex flex-col items-center justify-center text-center px-2 pointer-events-auto z-10">
          {/* Row 1: Event Date & Calendar Icon */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full max-w-sm">
            <span className="text-xs sm:text-sm text-[#96702D] shrink-0" aria-hidden="true">📅</span>
            <span className="text-[10px] sm:text-[11.5px] md:text-[12px] font-serif font-bold text-[#70212B] leading-tight font-tamil tracking-wide whitespace-nowrap overflow-hidden text-ellipsis">
              {t.hero.eventDate}
            </span>
          </div>

          {/* Row 2: Muhurtham Time & Clock Icon */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 w-full max-w-sm mt-0.5 sm:mt-1">
            <span className="text-xs sm:text-sm text-[#96702D] shrink-0" aria-hidden="true">⏰</span>
            <span className="text-[9px] sm:text-[10.5px] md:text-[11px] font-serif font-semibold text-[#96702D] leading-tight font-tamil whitespace-nowrap overflow-hidden text-ellipsis">
              {t.hero.muhurthamTime}
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 8. COUNTDOWN CARDS: EQUAL-WIDTH CSS GRID LAYOUT          */}
        {/* ======================================================== */}
        <div className="absolute top-[68.8%] left-[10.5%] right-[10.5%] h-[7.2%] grid grid-cols-4 gap-1.5 sm:gap-2.5 z-10 pointer-events-auto">
          {[
            { label: t.hero.countdown.days, val: timeLeft.days },
            { label: t.hero.countdown.hours, val: timeLeft.hours },
            { label: t.hero.countdown.mins, val: timeLeft.minutes },
            { label: t.hero.countdown.secs, val: timeLeft.seconds },
          ].map((unit, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center w-full h-full group cursor-default"
            >
              <div className="text-[17px] sm:text-[20px] md:text-[22px] font-serif font-bold text-[#70212B] tracking-tight leading-none group-hover:scale-105 transition-transform drop-shadow-2xs">
                {String(unit.val).padStart(2, '0')}
              </div>
              <div className="text-[7px] sm:text-[8px] md:text-[8.5px] font-serif font-bold text-[#96702D] mt-1 tracking-wider uppercase font-tamil">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        {/* ======================================================== */}
        {/* 9. GALLERY: 3 ARTISTIC FRAMES WITH PHOTOS                */}
        {/* ======================================================== */}
        <div className="absolute top-[78.2%] left-[8.5%] right-[8.5%] h-[12.4%] flex items-center justify-center gap-2 sm:gap-2.5 z-10 pointer-events-auto">
          {/* Frame 1: Left Child Photo */}
          <a
            href="#gallery"
            className="flex-1 h-[90%] rounded-xl sm:rounded-2xl overflow-hidden border border-[#C69A45]/60 shadow-md group transition-all duration-300 hover:scale-105 transform -rotate-3 hover:rotate-0 relative block"
            title={t.hero.galleryFrames.childTitle}
          >
            <img
              src="/images/child-1.jpg"
              alt={t.hero.galleryFrames.child}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-x-0 bottom-0 h-6 sm:h-7 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-0.5">
              <span className="text-[7px] sm:text-[8.5px] font-serif font-bold text-[#FFF9EE] tracking-widest uppercase drop-shadow-sm font-tamil">
                {t.hero.galleryFrames.child}
              </span>
            </div>
          </a>

          {/* Frame 2: Center Family Photo */}
          <a
            href="#gallery"
            className="flex-[1.18] h-full rounded-xl sm:rounded-2xl overflow-hidden border-2 border-[#C69A45]/80 shadow-lg group transition-all duration-300 hover:scale-105 z-10 relative block"
            title={t.hero.galleryFrames.familyTitle}
          >
            <img
              src="/images/family-1.jpg"
              alt={t.hero.galleryFrames.family}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-x-0 bottom-0 h-6 sm:h-7 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-0.5">
              <span className="text-[7.5px] sm:text-[9px] font-serif font-bold text-[#FFF9EE] tracking-widest uppercase drop-shadow-sm font-tamil">
                {t.hero.galleryFrames.family}
              </span>
            </div>
          </a>

          {/* Frame 3: Right Ceremony Photo */}
          <a
            href="#gallery"
            className="flex-1 h-[90%] rounded-xl sm:rounded-2xl overflow-hidden border border-[#C69A45]/60 shadow-md group transition-all duration-300 hover:scale-105 transform rotate-3 hover:rotate-0 relative block"
            title={t.hero.galleryFrames.ceremonyTitle}
          >
            <img
              src="/images/ceremony.jpg"
              alt={t.hero.galleryFrames.ceremony}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-x-0 bottom-0 h-6 sm:h-7 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-0.5">
              <span className="text-[7px] sm:text-[8.5px] font-serif font-bold text-[#FFF9EE] tracking-widest uppercase drop-shadow-sm font-tamil">
                {t.hero.galleryFrames.ceremony}
              </span>
            </div>
          </a>
        </div>

        {/* ======================================================== */}
        {/* 10. BOTTOM INVITATION BUTTON                             */}
        {/* ======================================================== */}
        <div className="absolute bottom-[2.5%] left-[8%] right-[8%] h-[5.2%] flex items-center justify-center pointer-events-auto z-20">
          <a
            href="#scratch"
            className="w-full max-w-[320px] h-full rounded-full border border-[#C69A45]/70 bg-[#FFF9EE]/90 hover:bg-[#FFF9EE] shadow-xs flex items-center justify-center gap-2 px-4 text-[#70212B] hover:text-[#96702D] font-serif font-bold text-[10px] sm:text-xs md:text-sm tracking-widest uppercase transition-all duration-300 group cursor-pointer active:scale-95"
          >
            <span className="text-xs text-[#C69A45] group-hover:scale-125 transition-transform">✨</span>
            <span className="font-tamil">{t.hero.viewFull}</span>
            <span className="text-xs text-[#96702D] animate-bounce">↓</span>
          </a>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
