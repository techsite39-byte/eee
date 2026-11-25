import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export const ThankYouSection = ({ config }) => {
  const { lang, isTa, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="thankyou"
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#2d090f] text-[#FFF9EE] overflow-hidden border-t border-[#C69A45]/30"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4e131b] via-[#2d090f] to-[#1a0408]" />

      <div className="max-w-2xl mx-auto relative z-10 text-center flex flex-col items-center">
        
        {/* Top Eyebrow */}
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#E4CA8E] mb-2 font-tamil">
          {t.thankYou.badge}
        </p>

        {/* Giant Heading: "Thank You" */}
        <h2 className="text-5xl sm:text-7xl font-serif text-[#FFF9EE] leading-tight mb-2 tracking-wide font-tamil">
          <span>{t.thankYou.titlePrefix}</span>
          <span className="italic text-[#E4CA8E] font-normal">{t.thankYou.titleHighlight}</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans text-[#E4CA8E]/80 max-w-md mx-auto mb-10 sm:mb-12 font-tamil">
          {t.thankYou.subtitle}
        </p>

        {/* ARCHED JHAROKHA WINDOW OVERLOOKING SUNSET */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto my-2">
          
          {/* Side Floating Texts */}
          <div className="hidden sm:block absolute -left-12 top-1/3 -translate-y-1/2 w-24 text-left">
            <p className="text-[10px] uppercase tracking-widest text-[#E4CA8E]/75 font-sans leading-relaxed font-tamil">
              {t.thankYou.sideLeft}
            </p>
          </div>
          <div className="hidden sm:block absolute -right-12 top-1/3 -translate-y-1/2 w-28 text-right">
            <p className="text-xs font-serif italic text-[#E4CA8E] leading-tight font-tamil">
              {t.thankYou.sideRight}
            </p>
            <span className="text-[#C69A45] text-sm block mt-1">♡</span>
          </div>

          {/* Scalloped Palace Arch */}
          <div className="relative p-3 sm:p-4 rounded-t-[140px] sm:rounded-t-[170px] border-2 border-[#C69A45]/60 bg-gradient-to-b from-[#3a0d14] to-[#24060b] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            
            {/* The Scenic Sunset Portrait / View */}
            <div className="relative w-full h-72 sm:h-96 rounded-t-[130px] sm:rounded-t-[160px] overflow-hidden border border-[#C69A45]/40 bg-[#120306]">
              <img
                src={config.child.photoUrl || '/images/family-1.jpg'}
                alt="Family Blessing Moment"
                className="w-full h-full object-cover object-center filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d090f]/90 via-[#c6a15b]/15 to-transparent" />

              {/* Glowing Candles / Lanterns on Stone Ledge */}
              <div className="absolute bottom-3 left-4 flex gap-2">
                <div className="w-2 h-4 bg-orange-300 rounded-full animate-pulse shadow-[0_0_10px_#f59e0b]" />
                <div className="w-1.5 h-3 bg-yellow-200 rounded-full animate-pulse shadow-[0_0_8px_#f59e0b]" />
              </div>
              <div className="absolute bottom-3 right-4 flex gap-2">
                <div className="w-2 h-4 bg-orange-300 rounded-full animate-pulse shadow-[0_0_10px_#f59e0b]" />
              </div>
            </div>

            {/* Bottom Stone Balcony Plinth */}
            <div className="h-4 bg-gradient-to-r from-[#96702D] via-[#C69A45] to-[#96702D] rounded-b shadow-md border-t border-[#E4CA8E]" />
          </div>
        </div>

        {/* Bottom Farewell Blessing Texts */}
        <div className="mt-10 sm:mt-12 space-y-3">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-sans font-semibold text-[#E4CA8E] font-tamil">
            {t.thankYou.closingPrayer}
          </p>

          <p className="text-xs uppercase tracking-[0.3em] font-serif text-[#FFF9EE]/70 font-tamil">
            {t.thankYou.withLove}
          </p>

          <p className="text-lg sm:text-xl font-tamil font-bold text-[#E4CA8E]">
            {t.thankYou.familyNames}
          </p>
        </div>

        {/* Back to Top Button */}
        <div className="mt-8 mb-4">
          <button
            onClick={scrollToTop}
            className="group px-6 py-2.5 rounded-full bg-[#420f17] hover:bg-[#581520] border border-[#C69A45]/50 text-[#E4CA8E] text-xs font-serif uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md font-tamil"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#C69A45] group-hover:-translate-y-1 transition-transform" />
            <span>{t.thankYou.backToTop}</span>
          </button>
        </div>

        {/* Small Bottom Copyright */}
        <div className="pt-6 border-t border-[#C69A45]/20 text-[10px] text-[#E4CA8E]/50 font-sans font-tamil">
          <p>
            {t.thankYou.creditsTitle}
          </p>
          <p className="text-[#E4CA8E]/40 mt-0.5">
            {t.thankYou.creditsLocation}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
