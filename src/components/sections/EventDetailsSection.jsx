import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Calendar,
  Clock,
  MapPin,
  Check,
  Copy,
  CalendarPlus,
  Navigation,
} from 'lucide-react';
import { GopuramCrest, KolamDivider, CornerOrnament, GoldSparkle } from '../common/Ornaments';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const EventDetailsSection = ({ config, lang }) => {
  const isTa = lang === 'ta';
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      const cards = cardsRef.current.filter(Boolean);
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cards[0],
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  const handleCopyAddress = () => {
    const textToCopy = `${config.venue.mandapamEnglish}\n${config.venue.fullAddressEnglish}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleAddToCalendar = () => {
    const startTime = '20261129T040000Z'; // 9:30 AM IST in UTC (04:00Z)
    const endTime = '20261129T083000Z'; // 2:00 PM IST in UTC (08:30Z)
    const title = encodeURIComponent(
      `செவிப் பொன் சேர்ப்பு விழா - ${config.child.nameEnglish}`
    );
    const details = encodeURIComponent(
      `Traditional Ear Piercing Ceremony of ${config.child.nameEnglish}.\nMuhurtham: ${config.event.muhurthamTimeEnglish}\nVenue: ${config.venue.fullAddressEnglish}`
    );
    const location = encodeURIComponent(`${config.venue.fullAddressEnglish}`);
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;

    window.open(googleCalUrl, '_blank');
  };

  return (
    <section
      id="event-details"
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-3 sm:px-6 lg:px-8 bg-[#FAF6ED] text-[#725D4C] overflow-hidden"
    >
      {/* Background Subtle Warm Radial Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_center,_rgba(198,154,69,0.18)_0%,_transparent_75%)]" />

      {/* Floating Gold Sparkle Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <GoldSparkle className="absolute top-[12%] left-[8%] w-4 h-4 text-[#C69A45]/70" delay="0s" />
        <GoldSparkle className="absolute top-[20%] right-[8%] w-4 h-4 text-[#C69A45]/60" delay="1.2s" />
        <GoldSparkle className="absolute top-[70%] left-[6%] w-3.5 h-3.5 text-[#C69A45]/50" delay="1.8s" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER: Gopuram Crest, Title & Kolam             */}
        {/* ======================================================== */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center mb-2">
            <GopuramCrest className="w-14 h-9 sm:w-16 sm:h-10 text-[#C69A45] drop-shadow-xs" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF9EE] border border-[#C69A45]/40 shadow-2xs mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C69A45] animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-serif font-semibold text-[#96702D] font-tamil">
              {isTa ? 'மங்கள விழா விவரங்கள்' : 'Auspicious Ceremony Details'}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C69A45] animate-pulse" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-[2.6rem] font-serif font-bold text-[#70212B] mt-1 mb-2 font-tamil tracking-tight drop-shadow-xs">
            {isTa ? 'சுப முகூர்த்தம் & நன்னாள்' : 'Date, Muhurtham & Venue'}
          </h2>

          <KolamDivider className="max-w-[200px] sm:max-w-xs my-2.5 sm:my-3 text-[#C69A45]" />

          <p className="text-xs sm:text-sm md:text-base text-[#725D4C] font-serif max-w-xl mx-auto px-2 font-tamil leading-relaxed">
            {isTa
              ? `${config.event.kulaDeivamTamil} • ${config.event.subtitleTamil}`
              : 'Detailed schedule of the sacred muhurtham timings and venue location.'}
          </p>
        </div>

        {/* ======================================================== */}
        {/* 3 HIGHLIGHT CARDS: Date, Muhurtham (Center King), Venue  */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
          
          {/* ------------------------------------------------------ */}
          {/* CARD 1: AUSPICIOUS DATE (சுப நன்னாள்)                  */}
          {/* ------------------------------------------------------ */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="group relative bg-gradient-to-b from-[#FFFDF7] via-[#FAF4E6] to-[#F7EED8] rounded-2xl sm:rounded-3xl border-2 border-[#C69A45]/50 p-6 sm:p-7 text-center shadow-[0_10px_30px_rgba(198,154,69,0.12)] hover:shadow-lg hover:border-[#C69A45] hover:-translate-y-1 transition-all duration-300"
          >
            <CornerOrnament position="top-left" className="top-2 left-2 w-6 h-6 text-[#C69A45]/70" />
            <CornerOrnament position="top-right" className="top-2 right-2 w-6 h-6 text-[#C69A45]/70" />

            {/* Circular Calendar Seal */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3.5 rounded-full bg-[#FFF9EE] border border-[#C69A45]/60 flex items-center justify-center text-[#70212B] shadow-2xs group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6 text-[#70212B]" />
            </div>

            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-serif font-bold text-[#96702D] block mb-1 font-tamil">
              {isTa ? 'சுப நன்னாள்' : 'Auspicious Date'}
            </span>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#70212B] my-1 leading-tight font-tamil">
              {isTa ? config.event.dateFormattedTamil : config.event.dateFormattedEnglish}
            </h3>

            <p className="text-[11px] sm:text-xs text-[#8E7B6C] font-serif italic mt-1.5 font-tamil">
              {isTa ? config.event.tamilYearMonth : 'Sunday, 29th November 2026'}
            </p>
          </div>

          {/* ------------------------------------------------------ */}
          {/* CARD 2: SACRED MUHURTHAM (Center Highlight Plaque)     */}
          {/* ------------------------------------------------------ */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="group relative bg-gradient-to-br from-[#4a1219] via-[#70212B] to-[#3a0d14] text-[#FFF9EE] rounded-2xl sm:rounded-3xl border-2 border-[#E4CA8E] p-6 sm:p-8 text-center shadow-[0_15px_40px_-10px_rgba(112,33,43,0.4),0_0_25px_rgba(228,202,142,0.2)] md:-translate-y-2 hover:-translate-y-3 transition-all duration-300"
          >
            <CornerOrnament position="top-left" className="top-2 left-2 w-6 h-6 text-[#E4CA8E]/80" />
            <CornerOrnament position="top-right" className="top-2 right-2 w-6 h-6 text-[#E4CA8E]/80" />

            {/* Glowing Golden Clock Seal */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3.5 rounded-full bg-[#3d0d14] border border-[#E4CA8E] flex items-center justify-center text-[#E4CA8E] shadow-[0_0_15px_rgba(228,202,142,0.4)] group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-[#E4CA8E]" />
            </div>

            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-serif font-bold text-[#E4CA8E] block mb-1 font-tamil">
              {isTa ? 'சுப முகூர்த்த நேரம்' : 'Auspicious Muhurtham'}
            </span>

            <h3 className="text-xl sm:text-2xl md:text-[1.65rem] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF7] via-[#F8EAC9] to-[#E4CA8E] my-1 leading-tight font-tamil drop-shadow-sm">
              {isTa ? config.event.muhurthamTimeTamil : config.event.muhurthamTimeEnglish}
            </h3>

            {/* Auspicious Lagnam Badge */}
            <div className="inline-block px-3.5 py-1 rounded-full bg-black/40 border border-[#C69A45]/50 text-[10.5px] sm:text-xs font-serif font-semibold text-[#F8EAC9] mt-3 font-tamil">
              {isTa ? config.event.muhurthamLagnamTamil : config.event.muhurthamLagnamEnglish}
            </div>
          </div>

          {/* ------------------------------------------------------ */}
          {/* CARD 3: VENUE & MANDAPAM (சுப மண்டபம்)                 */}
          {/* ------------------------------------------------------ */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="group relative bg-gradient-to-b from-[#FFFDF7] via-[#FAF4E6] to-[#F7EED8] rounded-2xl sm:rounded-3xl border-2 border-[#C69A45]/50 p-6 sm:p-7 text-center shadow-[0_10px_30px_rgba(198,154,69,0.12)] hover:shadow-lg hover:border-[#C69A45] hover:-translate-y-1 transition-all duration-300"
          >
            <CornerOrnament position="top-left" className="top-2 left-2 w-6 h-6 text-[#C69A45]/70" />
            <CornerOrnament position="top-right" className="top-2 right-2 w-6 h-6 text-[#C69A45]/70" />

            {/* Circular Location Seal */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3.5 rounded-full bg-[#FFF9EE] border border-[#C69A45]/60 flex items-center justify-center text-[#70212B] shadow-2xs group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 text-[#70212B]" />
            </div>

            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-serif font-bold text-[#96702D] block mb-1 font-tamil">
              {isTa ? 'சுப மண்டபம்' : 'Venue'}
            </span>

            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#70212B] my-1 leading-tight font-tamil">
              {isTa ? config.venue.mandapamTamil : config.venue.mandapamEnglish}
            </h3>

            <p className="text-[11px] sm:text-xs text-[#8E7B6C] font-serif mt-1.5 font-tamil leading-relaxed">
              {isTa ? config.venue.fullAddressTamil : config.venue.fullAddressEnglish}
            </p>
          </div>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE ACTION BUTTONS                               */}
        {/* ======================================================== */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-lg mx-auto">
          {/* Add to Google Calendar */}
          <button
            onClick={handleAddToCalendar}
            className="w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-full bg-gradient-to-r from-[#70212B] via-[#8c2a36] to-[#581720] hover:brightness-110 text-[#FFF9EE] border border-[#E4CA8E]/60 shadow-md font-serif font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer font-tamil"
          >
            <CalendarPlus className="w-4 h-4 text-[#E4CA8E]" />
            <span>{isTa ? 'கூகுள் காலெண்டரில் சேர்க்க' : 'Add to Google Calendar'}</span>
          </button>

          {/* Copy Address */}
          <button
            onClick={handleCopyAddress}
            className="w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-full bg-[#FFFDF7] hover:bg-[#FFF9EE] text-[#70212B] border border-[#C69A45]/60 shadow-md font-serif font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer font-tamil"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-600" />
                <span className="text-green-700">{isTa ? 'முகவரி நகலெடுக்கப்பட்டது!' : 'Address Copied!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#C69A45]" />
                <span>{isTa ? 'முழு முகவரி நகலெடுக்க' : 'Copy Full Address'}</span>
              </>
            )}
          </button>

          {/* Open Google Maps */}
          <a
            href={config.venue.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[46px] px-6 py-3 rounded-full bg-[#FFFDF7] hover:bg-[#FFF9EE] text-[#96702D] border border-[#C69A45]/60 shadow-md font-serif font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer font-tamil"
          >
            <Navigation className="w-4 h-4 text-[#C69A45]" />
            <span>{isTa ? 'வரைபடம் காண்க' : 'Open in Maps'}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
