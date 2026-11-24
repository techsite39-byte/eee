import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CalendarPlus } from 'lucide-react';
import { GopuramCrest, CornerOrnament, GoldSparkle } from '../common/Ornaments';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const ScheduleSection = ({ config, lang }) => {
  const isTa = lang === 'ta';
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
      timeBadge: isTa ? 'காலை 07:30 மணி முதல்' : 'FROM 7:30 AM ONWARDS',
      title: isTa ? 'மங்கள இசை & கணபதி வழிபாடு' : 'Mangala Isai & Ganapathi Pooja',
      desc: isTa
        ? 'மங்கள நாதஸ்வர இசை முழங்க கணபதி ஹோமம், நவகிரக வழிபாடு மற்றும் வருகை தரும் உறவினர்களுக்கு காலை சிற்றுண்டி உபசரிப்பு.'
        : 'Sacred Vedic prayers, Mangala Nadaswaram recital, and traditional morning breakfast reception.',
      icon: '🪔',
      tag: isTa ? 'மங்களத் தொடக்கம்' : 'Auspicious Beginning',
      bgGrad: 'from-[#4a1219] via-[#581520] to-[#3d0d14]',
      borderCol: 'border-[#C69A45]/45',
    },
    {
      timeBadge: isTa ? config.event.muhurthamTimeTamil : config.event.muhurthamTimeEnglish,
      title: isTa ? `${config.event.titleTamil} (சுப முகூர்த்தம்)` : `${config.event.titleEnglish} (Auspicious Muhurtham)`,
      desc: isTa
        ? 'அன்பு தாய்மாமன் மடியில் செல்வக் குழந்தைகள் அமர்ந்து, உற்றார் உறவினர் ஆசியுடன் மங்கள பொன் கடுக்கன் & குண்டலங்கள் அணிவிக்கும் புனித வைபவம்.'
        : 'The sacred ceremony where the children sit on the maternal uncle’s lap to be adorned with blessed gold earrings amidst Vedic mantras.',
      icon: '✨',
      tag: isTa ? '👑 பிரதான சுப முகூர்த்தம்' : '👑 Sacred Muhurtham',
      highlight: true,
      bgGrad: 'from-[#5a1622] via-[#70212B] to-[#450e17]',
      borderCol: 'border-[#E4CA8E]',
    },
    {
      timeBadge: isTa ? config.event.lunchTimeTamil : config.event.lunchTimeEnglish,
      title: isTa ? 'வாழை இலை மங்கள அறுசுவை விருந்து' : 'Grand Festive Feast',
      desc: isTa
        ? `${config.event.feastDetailsTamil} - சுவையான பாயாசம், பருப்பு வடை, நெய் சாதம், சாம்பார், அவியல் என விருந்தோம்பலுடன் பரிமாறப்படும் மங்கள அறுசுவை விருந்து.`
        : `${config.event.feastDetailsEnglish} - Royal feast served with warmth on fresh plantain leaves featuring traditional sweets, delicacies, and payasam.`,
      icon: '🍃',
      tag: isTa ? 'விருந்தோம்பல்' : 'Festive Feast',
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
        {/* TOP HEADER ROW: Temple Crest, Title & Calendar Badge     */}
        {/* ======================================================== */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#C69A45]/30 pb-8">
          
          {/* Left Title */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e0508]/60 border border-[#C69A45]/40 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E4CA8E] animate-pulse" />
              <span className="text-[9.5px] sm:text-[11px] uppercase tracking-[0.25em] font-serif font-semibold text-[#E4CA8E] font-tamil">
                {isTa ? config.event.tamilYearMonth : 'THE AUSPICIOUS SACRED DAY'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FFFDF7] leading-tight font-tamil">
              <span>{isTa ? 'நிகழ்வுகள் ' : 'Ceremony '}</span>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FFF9EE] via-[#F8EAC9] to-[#E4CA8E] font-normal">
                {isTa ? 'நிரல்' : 'Celebration'}
              </span>
            </h2>

            <p className="text-xs sm:text-sm font-serif italic text-[#E4CA8E]/85 mt-2 font-tamil">
              {isTa ? 'மூன்று மங்கள தருணங்கள் • வாழ்நாள் நல் ஆசிகள்.' : 'Sacred moments. A lifetime of divine blessings.'}
            </p>
          </div>

          {/* Right Date Badge & Add To Calendar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-4 shrink-0">
            {/* 29 November Pill */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#1e0508]/80 border border-[#C69A45]/50 shadow-inner">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#E4CA8E] leading-none">
                29
              </span>
              <div className="h-8 w-px bg-[#C69A45]/40" />
              <div className="text-left text-[10px] sm:text-[11px] uppercase font-sans tracking-widest text-[#E4CA8E]">
                <span className="block font-bold">{isTa ? 'நவம்பர்' : 'NOVEMBER'}</span>
                <span className="block text-[#FFF9EE]/70">{isTa ? 'ஞாயிறு' : 'SUNDAY'}</span>
              </div>
            </div>

            {/* "ADD TO CALENDAR" Pill Button */}
            <button
              onClick={handleAddToCalendar}
              className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#70212B] via-[#8c2a36] to-[#581720] hover:brightness-110 border border-[#E4CA8E]/60 text-[#FFF9EE] text-[10.5px] sm:text-xs font-serif uppercase tracking-wider font-semibold flex items-center gap-2 shadow-lg active:scale-95 transition-all cursor-pointer font-tamil"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-[#E4CA8E]" />
              <span>{isTa ? 'நாட்குறிப்பில் சேர்க்க' : 'Add to Calendar'}</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TIMELINE EVENTS STACK (Royal Silk Cards with Gold Borders)*/}
        {/* ======================================================== */}
        <div className="relative pl-6 sm:pl-10">
          
          {/* Vertical Golden Timeline Line */}
          <div className="absolute top-4 bottom-6 left-2 sm:left-4 w-0.5 bg-gradient-to-b from-[#E4CA8E] via-[#C69A45] to-[#96702D] shadow-[0_0_8px_rgba(228,202,142,0.4)]" />

          <div className="space-y-6 sm:space-y-7">
            {scheduleEvents.map((evt, idx) => (
              <div
                key={idx}
                ref={(el) => (cardsRef.current[idx] = el)}
                className="relative group"
              >
                {/* Left Glowing Diamond Node on Timeline */}
                <div className="absolute -left-6 sm:-left-10 top-7 -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-3.5 h-3.5 rotate-45 border transition-transform duration-300 group-hover:scale-125 ${
                    evt.highlight
                      ? 'bg-[#E4CA8E] border-[#FFF9EE] shadow-[0_0_12px_rgba(228,202,142,0.8)]'
                      : 'bg-[#C69A45] border-[#2e0910] shadow-[0_0_8px_rgba(198,154,69,0.5)]'
                  }`} />
                </div>

                {/* Royal Ceremonial Card */}
                <div
                  className={`relative p-5 sm:p-7 rounded-2xl sm:rounded-3xl border bg-gradient-to-br ${evt.bgGrad} ${evt.borderCol} transition-all duration-300 hover:-translate-y-1 ${
                    evt.highlight
                      ? 'shadow-[0_15px_40px_-10px_rgba(0,0,0,0.6),0_0_30px_rgba(228,202,142,0.25)] border-2'
                      : 'shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:border-[#E4CA8E]/80'
                  }`}
                >
                  <CornerOrnament position="top-left" className="top-2 left-2 w-5 h-5 text-[#E4CA8E]/60" />
                  <CornerOrnament position="bottom-right" className="bottom-2 right-2 w-5 h-5 text-[#E4CA8E]/60" />

                  <div className="flex items-start gap-4 sm:gap-5">
                    
                    {/* Left Circular Sacred Icon Seal */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center shrink-0 text-xl sm:text-2xl transition-transform group-hover:scale-110 ${
                      evt.highlight
                        ? 'border-[#E4CA8E] bg-[#421118] shadow-[0_0_15px_rgba(228,202,142,0.4)]'
                        : 'border-[#C69A45]/60 bg-[#2e0910]/80'
                    }`}>
                      {evt.icon}
                    </div>

                    {/* Right Details */}
                    <div className="flex-1">
                      {/* Top Time Badge & Category Tag */}
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-[10px] sm:text-[11.5px] uppercase tracking-[0.16em] font-serif font-bold text-[#E4CA8E] font-tamil">
                          {evt.timeBadge}
                        </span>
                        <span className={`text-[9px] px-2 py-0.5 rounded-full font-serif font-semibold ${
                          evt.highlight
                            ? 'bg-[#E4CA8E] text-[#421118]'
                            : 'bg-[#C69A45]/20 text-[#E4CA8E] border border-[#C69A45]/30'
                        }`}>
                          {evt.tag}
                        </span>
                      </div>

                      {/* Event Title */}
                      <h3 className="text-lg sm:text-2xl font-serif font-bold text-[#FFFDF7] font-tamil tracking-wide">
                        {evt.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#FFF9EE]/85 font-serif mt-1.5 leading-relaxed font-tamil">
                        {evt.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Closing Family Note */}
        <div className="mt-12 text-center border-t border-[#C69A45]/25 pt-6">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-serif font-semibold text-[#E4CA8E]/80 font-tamil">
            {isTa
              ? `${config.parents.fatherTamil} - ${config.parents.motherTamil} அன்புக் குடும்பத்தினர்`
              : `${config.parents.fatherEnglish} - ${config.parents.motherEnglish} Family`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
