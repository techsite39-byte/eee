import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { gsap } from 'gsap';
import { Globe, Music } from 'lucide-react';
import soundManager from '../utils/audioPlayer';
import { useLanguage } from '../i18n/LanguageContext';

export const PalaceDoorGate = ({ isOpen, onClose, config }) => {
  const { lang, setLang, toggleLang, isTa, t } = useLanguage();
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);

  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const textContentRef = useRef(null);
  const openBtnRef = useRef(null);

  const op = config.opening || {};

  // Lock body scroll while opening screen is active
  useEffect(() => {
    if (isOpen && !opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, opened]);

  if (!isOpen || opened) return null;

  // Real GSAP Timeline for opening the temple doors horizontally
  const handleOpenInvitation = (chosenLang, event) => {
    if (opening) return; // Prevent double clicks
    setOpening(true);

    if (chosenLang && (chosenLang === 'en' || chosenLang === 'ta')) {
      setLang(chosenLang);
    }

    try {
      soundManager.play(op.audioSrc || config.audio?.src || '/music.mpeg');
    } catch (e) {
      console.warn('Audio play error:', e);
    }

    // Celebratory golden & rose flower petals burst
    try {
      confetti({
        particleCount: typeof window !== 'undefined' && window.innerWidth < 640 ? 70 : 120,
        spread: 90,
        origin: { y: 0.65 },
        colors: ['#F8EAC9', '#E4CA8E', '#C69A45', '#70212B', '#FFF9EE', '#E69500'],
      });
    } catch (e) {
      console.warn('Confetti error:', e);
    }

    const clickedEl = event?.currentTarget || openBtnRef.current;

    const tl = gsap.timeline({
      onComplete: () => {
        setOpened(true);
        document.body.style.overflow = 'auto';
        if (onClose) onClose(chosenLang || lang);
      },
    });

    // Step 1: Button receives a subtle gold glow
    if (clickedEl) {
      tl.to(clickedEl, {
        boxShadow: '0 0 35px rgba(228, 202, 142, 0.95), 0 0 15px rgba(255, 249, 238, 0.8)',
        scale: 1.03,
        duration: 0.22,
        ease: 'power2.out',
      });
    }

    // Step 2: Button and central text smoothly fade out
    tl.to(textContentRef.current, {
      opacity: 0,
      y: -15,
      duration: 0.3,
      ease: 'power2.in',
    })
    // Step 3: Temple doors animate open from center toward left and right horizontally
    .to(
      leftDoorRef.current,
      {
        xPercent: -105,
        rotateY: -70,
        duration: 1.2,
        ease: 'power3.inOut',
      },
      '-=0.1'
    )
    .to(
      rightDoorRef.current,
      {
        xPercent: 105,
        rotateY: 70,
        duration: 1.2,
        ease: 'power3.inOut',
      },
      '<'
    )
    // Step 4: Background container transitions to reveal main invitation directly
    .to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
      },
      '-=0.3'
    );

    // Safety timeout: guaranteed transition even on slow devices
    setTimeout(() => {
      setOpened(true);
      document.body.style.overflow = 'auto';
      if (onClose) onClose(chosenLang || lang);
    }, 1800);
  };

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-black/90 select-none ${
        opening ? 'pointer-events-none' : ''
      }`}
      style={{
        paddingTop: 'env(safe-area-inset-top, 0px)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      {/* Centered Mobile/Desktop Composition Stage matching splash.webp aspect ratio (887 / 1774 = 1:2) */}
      <div className="relative w-full h-full max-w-[480px] mx-auto flex items-center justify-center [perspective:1400px] overflow-hidden shadow-2xl">
        
        {/* ======================================================== */}
        {/* SPLASH DOOR PANELS (Splits /splash.webp into Left & Right)*/}
        {/* ======================================================== */}
        {/* Left Half of splash.webp (Animates to Left: xPercent: -105) */}
        <div
          ref={leftDoorRef}
          className="absolute top-0 bottom-0 left-0 w-1/2 h-full origin-left overflow-hidden z-20 shadow-md"
          style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
          <img
            src="/splash.webp"
            alt="Temple Entrance Splash Left"
            className="absolute top-0 left-0 h-full w-[200%] max-w-none object-cover object-left filter brightness-95"
          />
          {/* Subtle shading overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/25 pointer-events-none" />
        </div>

        {/* Right Half of splash.webp (Animates to Right: xPercent: 105) */}
        <div
          ref={rightDoorRef}
          className="absolute top-0 bottom-0 right-0 w-1/2 h-full origin-right overflow-hidden z-20 shadow-md"
          style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
        >
          <img
            src="/splash.webp"
            alt="Temple Entrance Splash Right"
            className="absolute top-0 right-0 h-full w-[200%] max-w-none object-cover object-right filter brightness-95"
          />
          {/* Subtle shading overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/35 via-transparent to-black/25 pointer-events-none" />
        </div>

        {/* Atmospheric Lantern & Lamp Warm Glows */}
        <div className="absolute top-[16%] left-[8%] w-12 h-12 rounded-full bg-orange-400/35 blur-md pointer-events-none animate-pulse-slow z-25" />
        <div className="absolute top-[16%] right-[8%] w-12 h-12 rounded-full bg-orange-400/35 blur-md pointer-events-none animate-pulse-slow z-25" />
        <div className="absolute bottom-[13%] left-[10%] w-14 h-14 rounded-full bg-amber-400/40 blur-md pointer-events-none animate-aura z-25" />
        <div className="absolute bottom-[13%] right-[10%] w-14 h-14 rounded-full bg-amber-400/40 blur-md pointer-events-none animate-aura z-25" />

        {/* Floating Golden Particles */}
        <div className="absolute inset-0 pointer-events-none z-25 overflow-hidden">
          <div className="absolute top-[34%] left-[22%] w-1.5 h-1.5 rounded-full bg-gold-soft animate-ping opacity-75" />
          <div className="absolute top-[46%] right-[22%] w-2 h-2 rounded-full bg-gold animate-pulse opacity-85" />
          <div className="absolute top-[26%] right-[32%] w-1 h-1 rounded-full bg-gold-light animate-ping opacity-60" />
        </div>

        {/* ======================================================== */}
        {/* PURE HTML/SVG TEXT & CONTROLS (100% SHARP & BILINGUAL)   */}
        {/* ======================================================== */}
        <div
          ref={textContentRef}
          className={`absolute inset-0 z-30 flex flex-col items-center justify-between py-6 sm:py-8 px-4 text-center ${
            opening ? 'pointer-events-none' : ''
          }`}
        >
          {/* ====================================================== */}
          {/* 1. TOP HEADER: Monogram Logo & Functional Language Toggle */}
          {/* ====================================================== */}
          <div className="w-full flex items-center justify-between px-2 pt-1 sm:pt-2 z-40">
            {/* Circular gold-bordered family monogram logo */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#C69A45]/85 bg-gradient-to-b from-[#3a1a12]/95 to-[#1f0d07]/95 shadow-[0_4px_15px_rgba(0,0,0,0.6)] flex items-center justify-center">
              <span className="font-serif font-bold text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9EE] via-[#E4CA8E] to-[#C69A45] tracking-wider drop-shadow-sm font-tamil">
                {t.opening.logoInitials}
              </span>
            </div>

            {/* Top Language Toggle Button (Functional Toggle with Globe Icon) */}
            <button
              onClick={toggleLang}
              className="px-3 sm:px-3.5 py-1.5 rounded-full border border-[#C69A45]/80 bg-[#2e120a]/90 hover:bg-[#3a1a12] text-[#E4CA8E] hover:text-[#FFF9EE] text-xs font-serif font-medium tracking-wide flex items-center gap-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.5)] transition-all cursor-pointer active:scale-95"
              title={t.opening.toggleLangTitle}
              aria-label={t.opening.toggleLangTitle}
            >
              <Globe className="w-3.5 h-3.5 text-[#E4CA8E]" />
              <span className={isTa ? 'font-sans' : 'font-tamil'}>{t.opening.toggleLangLabel}</span>
            </button>
          </div>

          {/* Central Logo Ornament on Gate */}
          <div className="flex flex-col items-center -mt-2">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#C69A45]/85 bg-gradient-to-b from-[#3a1a12]/95 to-[#1f0d07]/95 shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(228,202,142,0.3)_inset] flex items-center justify-center">
              <span className="font-serif font-bold text-base sm:text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9EE] via-[#E4CA8E] to-[#C69A45] tracking-wider drop-shadow-sm font-tamil">
                {t.opening.logoInitials}
              </span>
            </div>
            {/* Thin vertical decorative gold line */}
            <div className="w-px h-4 sm:h-5 bg-gradient-to-b from-[#C69A45] via-[#E4CA8E] to-transparent my-1" />
            <div className="flex items-center gap-1 text-[#E4CA8E] text-[10px]">
              <span>◇</span>
              <span className="text-xs">✦</span>
              <span>◇</span>
            </div>
          </div>

          {/* ====================================================== */}
          {/* 2. MAIN INVITATION TEXT OVER TEMPLE DOORWAY            */}
          {/* ====================================================== */}
          <div className="flex flex-col items-center my-auto px-2 max-w-sm">
            
            {/* Divine Invocation */}
            <div className="flex items-center justify-center gap-2 mb-2 sm:mb-2.5">
              <div className="w-8 sm:w-10 h-px bg-gradient-to-r from-transparent to-[#C69A45]/70" />
              <p className="text-[10px] sm:text-xs font-serif tracking-[0.25em] uppercase text-[#E4CA8E] font-medium drop-shadow-sm font-tamil">
                {t.opening.divineInvocation}
              </p>
              <div className="w-8 sm:w-10 h-px bg-gradient-to-l from-transparent to-[#C69A45]/70" />
            </div>

            {/* Ceremony Title */}
            <h1 className="text-2xl sm:text-3xl md:text-[2.2rem] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFF9EE] via-[#F8EAC9] to-[#C69A45] tracking-[0.05em] my-1 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] leading-tight font-tamil">
              {t.opening.ceremonyTitle}
            </h1>

            {/* Occasion Tagline */}
            <p className="font-serif italic text-xs sm:text-sm md:text-base text-[#E4CA8E]/90 drop-shadow-sm mt-0.5 font-tamil">
              {t.opening.occasionTagline}
            </p>

            {/* Children Names */}
            <div className="my-2.5 sm:my-3 px-4 py-1.5 rounded-full bg-black/50 border border-[#C69A45]/45 backdrop-blur-xs shadow-md">
              <p className="font-serif font-bold text-xs sm:text-sm md:text-base text-[#FFF9EE] tracking-wide font-tamil">
                {t.opening.childrenNames}
              </p>
            </div>

            {/* Event Date */}
            <div>
              <p className="font-serif text-lg sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#F8EAC9] via-[#FFF9EE] to-[#E4CA8E] tracking-[0.28em] font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                {t.opening.eventDate}
              </p>
            </div>
          </div>

          {/* ====================================================== */}
          {/* 3. BUTTONS: OPEN INVITATION & DIRECT ACTION            */}
          {/* ====================================================== */}
          <div className="flex flex-col items-center gap-2.5 pb-2 sm:pb-3 w-full max-w-[280px] sm:max-w-[300px]">
            
            {/* Primary Action Button: Open in current language */}
            <button
              ref={openBtnRef}
              onClick={(e) => handleOpenInvitation(lang, e)}
              className="group relative w-full py-3 px-6 rounded-full bg-gradient-to-r from-[#F8EAC9] via-[#E4CA8E] to-[#C69A45] text-[#421118] font-serif font-bold text-xs sm:text-sm tracking-[0.18em] uppercase shadow-[0_10px_25px_rgba(0,0,0,0.6),0_0_20px_rgba(228,202,142,0.4)] hover:shadow-[0_12px_30px_rgba(228,202,142,0.6)] hover:brightness-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 border border-white/70 cursor-pointer"
            >
              <span className="text-[10px] text-[#70212B] group-hover:rotate-45 transition-transform duration-300">✦</span>
              <span className={`drop-shadow-xs ${isTa ? 'font-tamil text-[13px] tracking-wider' : ''}`}>
                {t.opening.buttonOpenAction}
              </span>
              <span className="text-[10px] text-[#70212B] group-hover:rotate-45 transition-transform duration-300">✦</span>
            </button>

            {/* Secondary Action Button: Direct One-Click Open in Alternate Language */}
            <button
              onClick={(e) => {
                const altLang = isTa ? 'en' : 'ta';
                handleOpenInvitation(altLang, e);
              }}
              className="group relative w-full py-2 px-5 rounded-full border border-[#C69A45]/70 bg-[#2e120a]/85 hover:bg-[#3a1a12] text-[#E4CA8E] font-serif font-semibold text-xs tracking-wider shadow-sm active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-tamil"
            >
              <span className="text-[10px] text-[#C69A45]">◇</span>
              <span>
                {isTa ? 'Open in English' : 'அழைப்பிதழைத் திறக்கவும் (தமிழ்)'}
              </span>
              <span className="text-[10px] text-[#C69A45]">◇</span>
            </button>

            {/* Sacred Music Label with Music note */}
            <div className="flex items-center gap-1.5 text-[10px] text-[#E4CA8E]/80 tracking-widest uppercase font-serif mt-0.5">
              <Music className="w-3 h-3 text-[#E4CA8E] animate-pulse" />
              <span className="font-tamil">{t.opening.musicLabel}</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PalaceDoorGate;
