import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CalendarPlus } from 'lucide-react';
import { GopuramCrest, CornerOrnament, GoldSparkle } from '../common/Ornaments';
import { useLanguage } from '../../i18n/LanguageContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ScheduleSection = ({ config }) => {
  const { lang, isTa, t } = useLanguage();
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
        cards.forEach((card, idx) => {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 40,
              scale: 0.96,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              delay: idx * 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  const handleAddToCalendar = () => {
    const startTime = '20261129T040000Z'; // 9:30 AM IST in UTC (04:00Z)
    const endTime = '20261129T083000Z'; // 2:00 PM IST in UTC (08:30Z)
    const title = encodeURIComponent(
      `செவிப் பொன் சேர்ப்பு விழா - ${config.child.nameEnglish}`
    );
    const details = encodeURIComponent(
      `Traditional Ear Piercing Ceremony of ${config.child.nameEnglish}.\nMuhurtham: ${config.event.muhurthamTimeEnglish}\nFeast: ${config.event.feastDetailsEnglish}\nVenue: ${config.venue.fullAddressEnglish}`
    );
    const location = encodeURIComponent(`${config.venue.fullAddressEnglish}`);
    const googleCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;

    window.open(googleCalUrl, '_blank');
  };

  const scheduleEvents = [
    {
      ...t.schedule.events[0],
      icon: '🪔',
      bgGrad: 'from-[#4a1219] via-[#581520] to-[#3d0d14]',
      borderCol: 'border-[#C69A45]/45',
    },
    {
      ...t.schedule.events[1],
      icon: '✨',
      highlight: true,
      bgGrad: 'from-[#5a1622] via-[#70212B] to-[#450e17]',
      borderCol: 'border-[#E4CA8E]',
    },
    {
      ...t.schedule.events[2],
      icon: '🍃',
      bgGrad: 'from-[#4a1219] via-[#581520] to-[#3d0d14]',
      borderCol: 'border-[#C69A45]/45',
    },
  ];

  return (
    <section
      id="schedule"
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#2e0910] via-[#3a0d14] to-[#25060c] text-[#FFF9EE] overflow-hidden"
    >
      {/* Background Subtle Traditional Kolam Watermark */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-[radial-gradient(#C69A45_1.5px,transparent_1.5px)] [background-size:28px_28px]" />

      {/* Floating Gold Sparkle Stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <GoldSparkle className="absolute top-[10%] left-[8%] w-4 h-4 text-[#E4CA8E]/70" delay="0s" />
        <GoldSparkle className="absolute top-[25%] right-[8%] w-4 h-4 text-[#E4CA8E]/60" delay="1.4s" />
        <GoldSparkle className="absolute top-[75%] left-[6%] w-3.5 h-3.5 text-[#E4CA8E]/50" delay="2.1s" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER: Gopuram Crest & Sacred Titles            */}
        {/* ======================================================== */}
        <div ref={headerRef} className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center mb-2">
            <GopuramCrest className="w-14 h-9 sm:w-16 sm:h-10 text-[#E4CA8E] drop-shadow-md" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#E4CA8E]/40 backdrop-blur-xs mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E4CA8E] animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#E4CA8E] font-medium font-serif font-tamil">
              {t.schedule.badge}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E4CA8E] animate-pulse" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF7] via-[#F8EAC9] to-[#E4CA8E] mt-1 mb-2 font-tamil tracking-tight drop-shadow-sm">
            {t.schedule.title}
          </h2>

          <p className="text-xs sm:text-sm font-serif italic text-[#E4CA8E]/85 max-w-lg mx-auto px-2 font-tamil">
            {t.schedule.subtitle}
          </p>

          {/* Quick Date Ribbon & Add to Calendar Pill */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <div className="px-4 py-1.5 rounded-full bg-black/40 border border-[#C69A45]/40 text-[#F8EAC9] text-xs font-serif font-bold tracking-widest uppercase">
              {t.schedule.dateDay}
            </div>

            <button
              onClick={handleAddToCalendar}
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#C69A45] to-[#96702D] hover:brightness-110 text-[#25060c] font-serif font-bold text-xs tracking-wider flex items-center gap-1.5 shadow-md active:scale-95 transition-all cursor-pointer font-tamil"
            >
              <CalendarPlus className="w-3.5 h-3.5" />
              <span>{t.schedule.addToCalendar}</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TIMELINE EVENT CARDS                                     */}
        {/* ======================================================== */}
        <div className="space-y-4 sm:space-y-6">
          {scheduleEvents.map((evt, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`relative rounded-2xl p-5 sm:p-7 bg-gradient-to-r ${evt.bgGrad} border ${evt.borderCol} shadow-xl overflow-hidden transition-all duration-300 hover:scale-[1.01]`}
            >
              <CornerOrnament position="top-left" className="top-2 left-2 w-6 h-6 text-[#E4CA8E]/70" />
              <CornerOrnament position="bottom-right" className="bottom-2 right-2 w-6 h-6 text-[#E4CA8E]/70" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">{evt.icon}</span>
                  <span className="text-xs sm:text-sm font-bold text-[#E4CA8E] tracking-wider font-tamil uppercase">
                    {evt.timeBadge}
                  </span>
                </div>

                <span className="self-start sm:self-auto text-[10px] sm:text-xs font-serif font-semibold px-2.5 py-0.5 rounded-full bg-white/10 text-[#F8EAC9] border border-[#E4CA8E]/30 font-tamil">
                  {evt.tag}
                </span>
              </div>

              <h3 className="text-lg sm:text-2xl font-serif font-bold text-[#FFFDF7] mb-1 font-tamil leading-snug">
                {evt.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#F8EAC9]/85 font-serif leading-relaxed font-tamil">
                {evt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
