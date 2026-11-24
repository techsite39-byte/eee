import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Volume2, VolumeX, Sparkles } from 'lucide-react';
import { GopuramCrest, CornerOrnament } from './common/Ornaments';
import soundManager from '../utils/audioPlayer';

export const EnvelopeModal = ({ isOpen, onClose, config, lang = 'ta' }) => {
  const [opening, setOpening] = useState(false);

  if (!isOpen) return null;

  const handleOpenInvitation = (withSound = true) => {
    setOpening(true);

    if (withSound) {
      soundManager.play(config.audio.src);
    }

    // Traditional gold & floral confetti burst
    confetti({
      particleCount: window.innerWidth < 640 ? 50 : 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C6A15B', '#E3C98D', '#812C32', '#FFFDF7', '#E69500'],
    });

    setTimeout(() => {
      onClose();
    }, 800);
  };

  const isTa = lang === 'ta';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-maroon-deep/90 backdrop-blur-md transition-opacity duration-700 overflow-y-auto">
      {/* Outer Envelope Card */}
      <div
        className={`relative w-full max-w-lg bg-cream rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-gold/60 p-5 sm:p-7 md:p-8 text-center transition-all duration-700 transform my-auto max-h-[92vh] overflow-y-auto ${
          opening ? 'scale-105 opacity-0 -translate-y-8 pointer-events-none' : 'scale-100 opacity-100'
        }`}
      >
        <CornerOrnament position="top-left" className="top-2 left-2 w-6 h-6 sm:w-8 sm:h-8 text-gold" />
        <CornerOrnament position="top-right" className="top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 text-gold" />
        <CornerOrnament position="bottom-left" className="bottom-2 left-2 w-6 h-6 sm:w-8 sm:h-8 text-gold" />
        <CornerOrnament position="bottom-right" className="bottom-2 right-2 w-6 h-6 sm:w-8 sm:h-8 text-gold" />

        {/* Top Auspicious Invocation */}
        <div className="flex justify-center mb-1">
          <GopuramCrest className="w-12 h-8 sm:w-14 sm:h-9 text-gold" />
        </div>
        <p className="text-[11px] sm:text-xs tracking-widest uppercase font-semibold text-gold-deep mb-1 font-tamil">
          {isTa ? config.ceremony.divineInvocationTa : config.ceremony.divineInvocationEn}
        </p>

        {/* Traditional Wax Seal Emblem */}
        <div className="my-3 sm:my-4 flex justify-center">
          <div
            className="relative group cursor-pointer touch-manipulation"
            onClick={() => handleOpenInvitation(true)}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-maroon to-maroon-dark border-3 sm:border-4 border-gold shadow-gold-glow flex items-center justify-center text-gold-soft font-tamil text-2xl sm:text-3xl font-bold transition-transform group-hover:scale-105 active:scale-95">
              ஓம்
            </div>
            <div className="absolute -inset-1 rounded-full border border-gold/40 animate-ping opacity-30 pointer-events-none" />
          </div>
        </div>

        {/* Main Titles */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-maroon-dark mb-1 leading-tight">
          {isTa ? config.ceremony.titleTa : config.ceremony.titleEn}
        </h2>
        <div className="inline-block bg-gold-light/60 border border-gold/40 rounded-full px-3.5 py-1 text-xs sm:text-base font-semibold text-maroon-deep my-1.5 max-w-full truncate">
          {isTa ? config.child.nameTa : config.child.nameEn}
        </div>

        <p className="text-xs sm:text-sm text-ink/75 font-sans mt-1.5 max-w-sm mx-auto leading-relaxed">
          {isTa
            ? 'அன்பான உறவுகளும் நட்புகளும் சூழ எங்கள் குழந்தையின் சுப காது குத்து விழாவிற்கு தங்களை அன்புடன் அழைக்கிறோம்.'
            : 'With the divine blessings of elders and almighty, we cordially invite you to celebrate this auspicious ceremony with us.'}
        </p>

        {/* Date & Muhurtham pill */}
        <div className="my-3 sm:my-4 p-2.5 sm:p-3 rounded-xl bg-ivory border border-gold/30 text-xs sm:text-sm text-ink font-medium">
          <span className="text-maroon font-semibold block mb-0.5">
            {isTa ? config.ceremony.dateTa : config.ceremony.dateEn}
          </span>
          <span className="text-gold-deep text-[11px] sm:text-xs">
            {isTa ? `சுப முகூர்த்தம்: ${config.ceremony.muhurthamTimeTa}` : `Auspicious Muhurtham: ${config.ceremony.muhurthamTimeEn}`}
          </span>
        </div>

        {/* Buttons to open */}
        <div className="flex flex-col sm:flex-row gap-2.5 justify-center items-center mt-4">
          <button
            onClick={() => handleOpenInvitation(true)}
            className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-maroon to-maroon-dark hover:from-maroon-dark hover:to-maroon-deep text-gold-soft font-semibold text-xs sm:text-sm shadow-royal hover:shadow-gold-glow transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
          >
            <Volume2 className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
            <span>{isTa ? 'மங்கள இசையுடன் திறக்க' : 'Open with Music'}</span>
          </button>

          <button
            onClick={() => handleOpenInvitation(false)}
            className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 sm:py-3 rounded-full bg-white/80 hover:bg-white text-muted hover:text-ink text-xs sm:text-sm border border-gold/40 transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <VolumeX className="w-4 h-4 text-muted" />
            <span>{isTa ? 'ஒலியின்றி திறக்க' : 'Open Silently'}</span>
          </button>
        </div>

        <p className="text-[10px] sm:text-[11px] text-muted mt-3 tracking-wide">
          {isTa ? '🎧 சிறந்த அனுபவத்திற்கு ஒலியுடன் காண பரிந்துரைக்கிறோம்' : '🎧 Recommended to experience with divine traditional music'}
        </p>
      </div>
    </div>
  );
};

export default EnvelopeModal;
