import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export const ThankYouSection = ({ config, lang }) => {
  const isTa = lang === 'ta';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="thankyou"
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#2d090f] text-cream overflow-hidden border-t border-gold/30"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#4e131b] via-[#2d090f] to-[#1a0408]" />

      <div className="max-w-2xl mx-auto relative z-10 text-center flex flex-col items-center">
        
        {/* Top Eyebrow from Reference 2 */}
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] font-sans font-semibold text-gold-soft mb-2">
          {isTa ? 'நன்றியுணர்வும் அன்பும் நிறைந்த இதயங்களுடன்' : 'WITH GRATEFUL HEARTS'}
        </p>

        {/* Giant Heading: "Thank You" (White + Italic Gold Script) */}
        <h2 className="text-5xl sm:text-7xl font-serif text-cream leading-tight mb-2 tracking-wide">
          <span>{isTa ? 'மனமார்ந்த ' : 'Thank '}</span>
          <span className="italic text-gold-soft font-normal">{isTa ? 'நன்றி' : 'You'}</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans text-gold-soft/80 max-w-md mx-auto mb-10 sm:mb-12">
          {isTa
            ? 'ஒவ்வொரு சிரிப்பிற்கும், அன்பான வாழ்த்துகளுக்கும், இனிய நினைவுகளுக்கும்'
            : 'FOR EVERY SMILE, EVERY BLESSING, AND EVERY BEAUTIFUL MEMORY'}
        </p>

        {/* ARCHED JHAROKHA WINDOW OVERLOOKING SUNSET (Image 5 Reference) */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto my-2">
          
          {/* Side Floating Texts */}
          <div className="hidden sm:block absolute -left-12 top-1/3 -translate-y-1/2 w-24 text-left">
            <p className="text-[10px] uppercase tracking-widest text-gold-soft/75 font-sans leading-relaxed">
              CHERISHED MEMORIES. BOUNDLESS LOVE.
            </p>
          </div>
          <div className="hidden sm:block absolute -right-12 top-1/3 -translate-y-1/2 w-28 text-right">
            <p className="text-xs font-serif italic text-gold-soft leading-tight">
              Thank you for being a part of our joy.
            </p>
            <span className="text-gold text-sm block mt-1">♡</span>
          </div>

          {/* Scalloped Palace Arch */}
          <div className="relative p-3 sm:p-4 rounded-t-[140px] sm:rounded-t-[170px] border-2 border-gold/60 bg-gradient-to-b from-[#3a0d14] to-[#24060b] shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            
            {/* The Scenic Sunset Portrait / View */}
            <div className="relative w-full h-72 sm:h-96 rounded-t-[130px] sm:rounded-t-[160px] overflow-hidden border border-gold/40 bg-[#120306]">
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
            <div className="h-4 bg-gradient-to-r from-gold-deep via-gold to-gold-deep rounded-b shadow-md border-t border-gold-light" />
          </div>
        </div>

        {/* Bottom Farewell Blessing Texts from Reference 2 */}
        <div className="mt-10 sm:mt-12 space-y-3">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.22em] font-sans font-semibold text-gold-soft">
            {isTa
              ? 'மீண்டும் சந்திக்கும் வரை, உங்கள் பிரார்த்தனைகளில் எங்களை நினைவில் வையுங்கள்.'
              : 'UNTIL WE MEET AGAIN, KEEP US IN YOUR PRAYERS.'}
          </p>

          <p className="text-xs uppercase tracking-[0.3em] font-serif text-cream/70">
            {isTa ? config.event.withLoveTamil : config.event.withLoveEnglish}
          </p>

          <p className="text-lg sm:text-xl font-tamil font-bold text-gold-light">
            {isTa
              ? `${config.parents.fatherTamil} & ${config.parents.motherTamil} குடும்பத்தினர்`
              : `${config.parents.fatherEnglish} & ${config.parents.motherEnglish} Family`}
          </p>
        </div>

        {/* Back to Top Button */}
        <div className="mt-8 mb-4">
          <button
            onClick={scrollToTop}
            className="group px-6 py-2.5 rounded-full bg-[#420f17] hover:bg-[#581520] border border-gold/50 text-gold-soft text-xs font-serif uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md"
          >
            <ArrowUp className="w-3.5 h-3.5 text-gold group-hover:-translate-y-1 transition-transform" />
            <span>{isTa ? 'மேலே செல்ல' : 'Back to Top'}</span>
          </button>
        </div>

        {/* Small Bottom Copyright */}
        <div className="pt-6 border-t border-gold/20 text-[10px] text-gold-soft/50 font-sans">
          <p>
            {isTa ? config.event.titleTamil : config.event.titleEnglish} • {isTa ? config.child.nameTamil : config.child.nameEnglish}
          </p>
          <p className="text-gold-soft/40 mt-0.5">
            {isTa ? config.venue.mandapamTamil : config.venue.mandapamEnglish}, {isTa ? config.venue.cityTamil : config.venue.cityEnglish}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
