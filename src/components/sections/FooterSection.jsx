import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { GopuramCrest, KolamDivider } from '../common/Ornaments';

export const FooterSection = ({ config, lang }) => {
  const isTa = lang === 'ta';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-maroon-deep text-cream pt-12 sm:pt-16 pb-24 sm:pb-12 px-3 sm:px-6 overflow-hidden border-t-2 border-gold/40">
      {/* Background Subtle Kolam Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Top Temple Gopuram Crest */}
        <div className="flex justify-center mb-2 sm:mb-3">
          <GopuramCrest className="w-14 h-9 sm:w-16 sm:h-10 text-gold-soft drop-shadow-gold-glow" />
        </div>

        {/* Auspicious Shloka / Mantra */}
        <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-soft font-semibold font-tamil mb-1 px-2">
          {isTa ? 'லோகா சமஸ்தா சுகினோ பவந்து • ஓம் சாந்தி சாந்தி சாந்திஃ' : 'Lokah Samastah Sukhino Bhavantu • Om Shanti'}
        </p>

        {/* Event Title */}
        <h3 className="text-xl sm:text-3xl font-tamil font-bold text-cream mt-1.5 sm:mt-2 mb-1 leading-tight">
          {isTa ? config.ceremony.titleTa : config.ceremony.titleEn}
        </h3>
        <p className="text-xs sm:text-sm text-gold-soft font-serif italic mb-3 sm:mb-4">
          {isTa ? config.child.nameTa : config.child.nameEn}
        </p>

        <KolamDivider className="max-w-[200px] sm:max-w-xs md:max-w-sm my-3 sm:my-4 text-gold-soft/80" />

        {/* "With Love, Our Family" */}
        <div className="my-4 sm:my-6">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-gold/15 border border-gold/40 text-gold-soft text-[11px] sm:text-sm font-semibold tracking-wider">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-gold-soft text-gold-soft" />
            <span>{isTa ? 'அன்புடன், எங்கள் குடும்பத்தினர்' : 'With Love, Our Family'}</span>
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-gold-soft text-gold-soft" />
          </div>
          <p className="text-[11px] sm:text-xs text-cream/70 font-sans mt-1.5 sm:mt-2 px-2">
            {isTa
              ? `${config.family.parents.fatherTa} & ${config.family.parents.motherTa}`
              : `${config.family.parents.fatherEn} & ${config.family.parents.motherEn}`}
          </p>
        </div>

        {/* Back to Top Button */}
        <div className="mt-6 sm:mt-8 mb-4 sm:mb-6">
          <button
            onClick={scrollToTop}
            className="group min-h-[44px] px-5 py-2.5 rounded-full bg-maroon-dark/90 hover:bg-maroon border border-gold/50 text-gold-soft font-semibold text-xs transition-all active:scale-95 shadow-md inline-flex items-center gap-2 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 text-gold group-hover:-translate-y-1 transition-transform" />
            <span>{isTa ? 'மேலே செல்ல' : 'Back to Top'}</span>
          </button>
        </div>

        {/* Bottom Credits & Date */}
        <div className="pt-4 sm:pt-6 border-t border-gold/20 text-[10px] sm:text-xs text-gold-soft/60 font-sans px-2">
          <p>
            {isTa
              ? 'பாரம்பரிய தமிழ் சுப காது குத்து விழா டிஜிட்டல் அழைப்பிதழ்'
              : 'Premium Traditional Tamil Ear Piercing Ceremony Digital Invitation'}
          </p>
          <p className="text-[10px] text-cream/40 mt-1">
            {isTa ? config.ceremony.dateTa : config.ceremony.dateEn} • {isTa ? config.venue.nameTa : config.venue.nameEn}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
