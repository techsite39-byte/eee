import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryConfig } from '../../data/galleryConfig';
import { useLanguage } from '../../i18n/LanguageContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ChildGallerySection = ({ config }) => {
  const { lang, isTa, t } = useLanguage();
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const tilts = [-3, 3, -2, 2.5, -3, 2];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length) return;

    const ctx = gsap.context(() => {
      cards.forEach((card, idx) => {
        gsap.fromTo(
          card,
          {
            y: 70,
            opacity: 0,
            rotation: idx % 2 === 0 ? -6 : 6,
            scale: 0.94,
          },
          {
            y: 0,
            opacity: 1,
            rotation: tilts[idx % tilts.length],
            scale: 1,
            duration: 1.0,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 60%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative py-20 sm:py-28 px-4 sm:px-6 bg-[#3b0d14] text-[#FFF9EE] overflow-hidden"
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#420f17] via-[#350a11] to-[#3b0d14]" />

      <div className="max-w-md sm:max-w-xl mx-auto relative z-10 text-center">
        
        {/* Eyebrow Header */}
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#E4CA8E] mb-2 font-tamil">
          {t.gallery.badge}
        </p>

        {/* Heading: "Little Moments" */}
        <h2 className="text-4xl sm:text-6xl font-serif text-[#FFF9EE] leading-tight mb-2 font-tamil">
          <span>{t.gallery.titlePrefix}</span>
          <span className="italic text-[#E4CA8E] font-normal">{t.gallery.titleHighlight}</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm font-serif italic text-[#E4CA8E]/80 max-w-sm mx-auto mb-12 sm:mb-16 font-tamil">
          {t.gallery.subtitle}
        </p>

        {/* Polaroid Cards Stack with Washi Tape */}
        <div className="space-y-12 sm:space-y-16 flex flex-col items-center">
          {galleryConfig.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="relative w-full max-w-xs sm:max-w-sm bg-[#FAF6EE] text-[#49332D] p-3 sm:p-4 pb-6 sm:pb-8 rounded-lg shadow-[0_20px_45px_rgba(0,0,0,0.6)] transform transition-transform duration-500 hover:scale-102"
              style={{ transform: `rotate(${tilts[idx % tilts.length]}deg)` }}
            >
              {/* Washi Tape at Top Center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#d5c39c]/80 border border-[#bfa879]/50 shadow-sm rotate-[-1deg] backdrop-blur-[1px] z-20 pointer-events-none" />

              {/* Photo Area */}
              <div className="relative w-full h-64 sm:h-80 rounded overflow-hidden bg-black/5 shadow-inner">
                <img
                  src={item.url}
                  alt={isTa ? item.captionTamil : item.captionEnglish}
                  className="w-full h-full object-cover object-center filter saturate-105"
                  loading="lazy"
                />
              </div>

              {/* Polaroid Footer Text */}
              <div className="mt-4 sm:mt-5 text-center px-2">
                <span className="text-[10px] tracking-widest font-mono text-[#8E7B6C] uppercase block mb-1">
                  0{item.id} • {isTa ? item.tagTamil : item.tag}
                </span>
                <p className="font-serif italic text-sm sm:text-base text-[#581720] leading-snug font-tamil">
                  {isTa ? item.captionTamil : item.captionEnglish}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChildGallerySection;
