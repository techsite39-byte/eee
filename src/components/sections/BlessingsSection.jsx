import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Send,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Heart,
} from 'lucide-react';
import {
  GopuramCrest,
  KolamDivider,
  CornerOrnament,
  GoldSparkle,
} from '../common/Ornaments';
import { useLanguage } from '../../i18n/LanguageContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const BlessingsSection = ({ config }) => {
  const { lang, isTa, t } = useLanguage();
  const [guestName, setGuestName] = useState('');
  const [guestWish, setGuestWish] = useState('');
  const [guestCount, setGuestCount] = useState('2');
  const [submittedWishes, setSubmittedWishes] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  // Sync initial sample wishes with active language
  useEffect(() => {
    if (t.blessings?.sampleWishes) {
      setSubmittedWishes(t.blessings.sampleWishes);
    }
  }, [t.blessings]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, y: 35, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  const handleSubmitWish = (e) => {
    e.preventDefault();
    if (!guestName.trim() || !guestWish.trim()) return;

    const newWish = {
      name: guestName.trim(),
      message: guestWish.trim(),
      time: isTa ? 'சற்றுமுன்' : 'Just now',
    };

    setSubmittedWishes([newWish, ...submittedWishes]);
    setGuestName('');
    setGuestWish('');
    setShowSuccess(true);

    confetti({
      particleCount: window.innerWidth < 640 ? 45 : 75,
      spread: 65,
      origin: { y: 0.7 },
      colors: ['#E4CA8E', '#C69A45', '#70212B', '#FFF9EE', '#F59E0B'],
    });

    setTimeout(() => setShowSuccess(false), 4500);
  };

  const handleWhatsAppRSVP = () => {
    const baseMsg = isTa ? config.rsvp.prefilledMessageTamil : config.rsvp.prefilledMessageEnglish;
    const fullMsg = `${baseMsg} ${guestCount} ${isTa ? 'பேர்' : 'guests'}.\n${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?phone=${config.rsvp.whatsappNumber}&text=${encodeURIComponent(fullMsg)}`, '_blank');
  };

  return (
    <section
      id="blessings"
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-3 sm:px-6 lg:px-8 bg-[#FAF6ED] text-[#725D4C] overflow-hidden"
    >
      {/* Background Subtle Warm Radial Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_center,_rgba(198,154,69,0.18)_0%,_transparent_75%)]" />

      {/* Floating Gold Sparkle Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <GoldSparkle className="absolute top-[8%] left-[8%] w-4 h-4 text-[#C69A45]/70" delay="0s" />
        <GoldSparkle className="absolute top-[22%] right-[8%] w-4 h-4 text-[#C69A45]/60" delay="1.5s" />
        <GoldSparkle className="absolute top-[68%] left-[6%] w-3.5 h-3.5 text-[#C69A45]/50" delay="2.0s" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER: Gopuram Crest, Title & Kolam             */}
        {/* ======================================================== */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center mb-2">
            <GopuramCrest className="w-14 h-9 sm:w-16 sm:h-10 text-[#C69A45] drop-shadow-xs" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9EE] border border-[#C69A45]/40 shadow-2xs mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C69A45] animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-serif font-semibold text-[#96702D] font-tamil">
              {t.blessings.badge}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C69A45] animate-pulse" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-[2.6rem] font-serif font-bold text-[#70212B] mt-1 mb-2 font-tamil tracking-tight drop-shadow-xs">
            {t.blessings.title}
          </h2>

          <KolamDivider className="max-w-[200px] sm:max-w-xs my-2.5 sm:my-3 text-[#C69A45]" />

          <p className="text-xs sm:text-sm font-serif italic text-[#725D4C] max-w-lg mx-auto px-2 font-tamil">
            {t.blessings.subtitle}
          </p>
        </div>

        {/* ======================================================== */}
        {/* 1. ROYAL VELVET CLOSING BANNER & WHATSAPP RSVP           */}
        {/* ======================================================== */}
        <div className="relative bg-gradient-to-br from-[#4a1219] via-[#70212B] to-[#3a0d14] text-[#FFF9EE] rounded-2xl sm:rounded-3xl border-2 border-[#E4CA8E] shadow-[0_15px_40px_-10px_rgba(112,33,43,0.35),0_0_30px_rgba(228,202,142,0.18)] p-6 sm:p-9 md:p-12 text-center mb-10 sm:mb-14">
          <CornerOrnament position="top-left" className="top-2 left-2 sm:top-3 sm:left-3 w-7 h-7 sm:w-9 sm:h-9 text-[#E4CA8E]/80" />
          <CornerOrnament position="top-right" className="top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 text-[#E4CA8E]/80" />
          <CornerOrnament position="bottom-left" className="bottom-2 left-2 sm:bottom-3 sm:left-3 w-7 h-7 sm:w-9 sm:h-9 text-[#E4CA8E]/80" />
          <CornerOrnament position="bottom-right" className="bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-9 sm:h-9 text-[#E4CA8E]/80" />

          {/* Central Sacred Om Seal */}
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2e0910] border-2 border-[#E4CA8E] flex items-center justify-center font-tamil font-bold text-[#E4CA8E] text-xl sm:text-2xl shadow-[0_0_15px_rgba(228,202,142,0.4)]">
              {isTa ? 'ஓம்' : 'ॐ'}
            </div>
          </div>

          {/* Primary Closing Quote */}
          <blockquote className="text-base sm:text-xl md:text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF7] via-[#F8EAC9] to-[#E4CA8E] leading-relaxed max-w-2xl mx-auto my-3 px-2 font-tamil">
            "{isTa ? config.event.closingBlessingTamil : config.event.closingBlessingEnglish}"
          </blockquote>

          <p className="text-[11px] sm:text-xs text-[#E4CA8E]/85 font-serif italic max-w-lg mx-auto mb-4 font-tamil">
            {t.blessings.rsvpNote}
          </p>

          <div className="inline-block h-px w-20 sm:w-24 bg-gradient-to-r from-transparent via-[#E4CA8E] to-transparent mb-4" />

          {/* Family Sign-off */}
          <div className="text-center">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#E4CA8E]/80 mb-1 font-serif font-tamil">
              {t.thankYou.withLove}
            </p>
            <p className="text-lg sm:text-xl font-serif font-bold text-[#FFFDF7] font-tamil">
              {t.thankYou.familyNames}
            </p>
          </div>

          {/* WhatsApp RSVP Button */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="flex items-center gap-2 bg-black/40 rounded-full px-3.5 py-1.5 border border-[#C69A45]/50 text-xs text-[#E4CA8E]">
              <span className="font-tamil">{t.blessings.guestCountLabel}:</span>
              <select
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="bg-transparent text-[#FFF9EE] font-bold focus:outline-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                  <option key={num} value={num} className="bg-[#4a1219] text-[#FFF9EE]">
                    {num} {isTa ? 'பேர்' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleWhatsAppRSVP}
              className="w-full sm:w-auto min-h-[46px] px-6 py-2.5 sm:py-3 rounded-full bg-[#1b5e20] hover:bg-[#2e7d32] text-white font-serif font-bold text-xs sm:text-sm border border-emerald-400/50 shadow-md inline-flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer font-tamil"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>{t.blessings.whatsappRsvpBtn}</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. SACRED GUESTBOOK SCROLL (மங்கள வாழ்த்து மடல்)          */}
        {/* ======================================================== */}
        <div
          ref={cardRef}
          className="relative bg-gradient-to-b from-[#FFFDF7] via-[#FAF4E6] to-[#F7EED8] rounded-2xl sm:rounded-3xl border-2 border-[#C69A45]/50 shadow-[0_15px_40px_rgba(198,154,69,0.12)] p-5 sm:p-7 md:p-9"
        >
          <CornerOrnament position="top-left" className="top-2 left-2 w-6 h-6 text-[#C69A45]/70" />
          <CornerOrnament position="top-right" className="top-2 right-2 w-6 h-6 text-[#C69A45]/70" />

          {/* Form Header */}
          <div className="flex items-center gap-2 mb-4 text-[#70212B]">
            <Sparkles className="w-5 h-5 text-[#C69A45] shrink-0" />
            <h3 className="text-base sm:text-xl font-serif font-bold font-tamil">
              {t.blessings.title}
            </h3>
          </div>

          {/* Quick Blessing Chips */}
          <div className="mb-4">
            <span className="text-[10px] sm:text-[11px] font-serif font-semibold text-[#96702D] block mb-2 font-tamil">
              {t.blessings.quickWishesLabel}
            </span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {t.blessings.quickWishes.map((msg, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setGuestWish(msg)}
                  className="px-2.5 sm:px-3 py-1 rounded-full bg-[#FFF9EE] hover:bg-[#FAF0D7] border border-[#C69A45]/40 text-[#70212B] text-[10px] sm:text-xs font-serif font-medium transition-all active:scale-95 cursor-pointer font-tamil shadow-2xs hover:border-[#C69A45]"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          {/* Guest Wish Form */}
          <form onSubmit={handleSubmitWish} className="space-y-3.5">
            <div>
              <input
                type="text"
                placeholder={t.blessings.namePlaceholder}
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#C69A45]/40 text-[#70212B] placeholder:text-[#8E7B6C]/70 text-sm focus:outline-none focus:border-[#C69A45] focus:ring-2 focus:ring-[#C69A45]/20 font-serif font-tamil shadow-inner transition-all"
              />
            </div>

            <div>
              <textarea
                rows="3"
                placeholder={t.blessings.msgPlaceholder}
                value={guestWish}
                onChange={(e) => setGuestWish(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-[#FFFDF7] border border-[#C69A45]/40 text-[#70212B] placeholder:text-[#8E7B6C]/70 text-sm focus:outline-none focus:border-[#C69A45] focus:ring-2 focus:ring-[#C69A45]/20 font-serif font-tamil shadow-inner transition-all"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
              <button
                type="submit"
                className="min-h-[46px] px-7 py-3 rounded-full bg-gradient-to-r from-[#70212B] via-[#8c2a36] to-[#581720] hover:brightness-110 text-[#FFF9EE] font-serif font-bold text-xs sm:text-sm shadow-md border border-[#E4CA8E]/50 flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer font-tamil"
              >
                <Send className="w-4 h-4 text-[#E4CA8E]" />
                <span>{t.blessings.sendBtn}</span>
              </button>

              {showSuccess && (
                <div className="flex items-center justify-center gap-2 text-xs font-serif font-semibold text-emerald-800 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-300 animate-fadeIn font-tamil">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.blessings.successMsg}</span>
                </div>
              )}
            </div>
          </form>

          {/* Recent Wishes Feed */}
          {submittedWishes.length > 0 && (
            <div className="mt-8 pt-6 border-t border-[#C69A45]/30 space-y-3">
              <span className="text-[10px] sm:text-xs uppercase tracking-widest font-serif font-bold text-[#96702D] block mb-2 font-tamil">
                {t.blessings.recentTitle}
              </span>
              {submittedWishes.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#FFFDF7] border border-[#C69A45]/35 shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-[#70212B] fill-[#70212B]" />
                      <span className="font-serif font-bold text-[#70212B] text-xs sm:text-sm font-tamil">{item.name}</span>
                    </div>
                    <span className="text-[10px] text-[#8E7B6C] font-mono">{item.time}</span>
                  </div>
                  <p className="text-[#725D4C] italic font-serif leading-relaxed text-xs sm:text-sm font-tamil pl-5">
                    "{item.message}"
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlessingsSection;
