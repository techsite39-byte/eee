import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GopuramCrest, KolamDivider, CornerOrnament, GoldSparkle } from '../common/Ornaments';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const FamilyInvitationSection = ({ config, lang }) => {
  const isTa = lang === 'ta';
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const childrenPlaqueRef = useRef(null);
  const familyCardsRef = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // 1. Header fade-in & glide
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

      // 2. Children Royal Velvet Plaque gentle spring entrance
      if (childrenPlaqueRef.current) {
        gsap.fromTo(
          childrenPlaqueRef.current,
          { opacity: 0, scale: 0.94, y: 25 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.0,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: childrenPlaqueRef.current,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // 3. Staggered reveal of family honor cards
      const cards = familyCardsRef.current.filter(Boolean);
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cards[0],
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="family"
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-3 sm:px-6 lg:px-8 bg-[#FAF6ED] text-[#725D4C] overflow-hidden"
    >
      {/* Background Subtle Warm Radial Glows */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_top,_rgba(198,154,69,0.2)_0%,_transparent_70%)]" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#F5EAD4]/50 to-transparent pointer-events-none" />

      {/* Floating Gold Sparkles in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <GoldSparkle className="absolute top-[8%] left-[6%] sm:left-[12%] w-4 h-4 text-[#C69A45]/70" delay="0s" />
        <GoldSparkle className="absolute top-[18%] right-[8%] sm:right-[14%] w-4 h-4 text-[#C69A45]/60" delay="1.5s" />
        <GoldSparkle className="absolute top-[60%] left-[4%] sm:left-[10%] w-3.5 h-3.5 text-[#C69A45]/50" delay="0.8s" />
        <GoldSparkle className="absolute top-[80%] right-[6%] sm:right-[12%] w-4 h-4 text-[#C69A45]/65" delay="2.2s" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* ======================================================== */}
        {/* SECTION HEADER: Sacred Crest & Auspicious Invocation     */}
        {/* ======================================================== */}
        <div ref={headerRef} className="text-center mb-8 sm:mb-12">
          {/* Temple Gopuram Kalasam Crest */}
          <div className="flex justify-center mb-2">
            <GopuramCrest className="w-14 h-9 sm:w-16 sm:h-10 text-[#C69A45] drop-shadow-xs" />
          </div>

          {/* Divine Blessing Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FFF9EE] border border-[#C69A45]/40 shadow-2xs mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C69A45] animate-pulse" />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#96702D] font-serif font-tamil">
              {isTa ? config.event.kulaDeivamTamil : config.event.kulaDeivamEnglish}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C69A45] animate-pulse" />
          </div>

          {/* Main Royal Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-[2.6rem] font-serif font-bold text-[#70212B] mt-1 mb-2 font-tamil tracking-tight drop-shadow-xs">
            {isTa ? 'அன்புக் குடும்ப அழைப்பிதழ்' : 'Cordially Inviting You & Family'}
          </h2>

          {/* Kolam Divider */}
          <KolamDivider className="max-w-[220px] sm:max-w-xs my-2.5 sm:my-3 text-[#C69A45]" />

          {/* Warm Welcome Message Paragraph */}
          <div className="max-w-2xl mx-auto bg-[#FFFDF7]/80 rounded-2xl p-4 sm:p-5 border border-[#C69A45]/25 shadow-2xs backdrop-blur-2xs">
            <p className="text-xs sm:text-sm md:text-[15px] text-[#725D4C] font-serif leading-relaxed px-1 font-tamil">
              {isTa ? config.event.invitationMessageTamil : config.event.invitationMessageEnglish}
            </p>
          </div>
        </div>

        {/* ======================================================== */}
        {/* CENTRAL ROYAL INVITATION CARD (பத்திரிகை அட்டை)           */}
        {/* Multi-tier gold borders with corner finials & silk lining*/}
        {/* ======================================================== */}
        <div className="relative bg-gradient-to-b from-[#FFFDF7] via-[#FAF4E6] to-[#F7EED8] rounded-2xl sm:rounded-3xl border-2 border-[#C69A45]/60 shadow-[0_20px_60px_-15px_rgba(112,33,43,0.15),0_0_35px_rgba(198,154,69,0.12)] p-4 sm:p-7 md:p-10 text-center">
          
          {/* Inner Inlaid Hairline Gold Border */}
          <div className="absolute inset-2 sm:inset-3 rounded-xl sm:rounded-2xl border border-dashed border-[#C69A45]/35 pointer-events-none" />

          {/* 4 Traditional Gold Corner Finials */}
          <CornerOrnament position="top-left" className="top-2 left-2 sm:top-3 sm:left-3 w-7 h-7 sm:w-10 sm:h-10 text-[#C69A45]" />
          <CornerOrnament position="top-right" className="top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-10 sm:h-10 text-[#C69A45]" />
          <CornerOrnament position="bottom-left" className="bottom-2 left-2 sm:bottom-3 sm:left-3 w-7 h-7 sm:w-10 sm:h-10 text-[#C69A45]" />
          <CornerOrnament position="bottom-right" className="bottom-2 right-2 sm:bottom-3 sm:right-3 w-7 h-7 sm:w-10 sm:h-10 text-[#C69A45]" />

          {/* ====================================================== */}
          {/* 1. CHILDREN'S SACRED HONOR PLAQUE (The Main Focus)     */}
          {/* Royal Velvet Arch Card with Gold Embossed Calligraphy  */}
          {/* ====================================================== */}
          <div
            ref={childrenPlaqueRef}
            className="relative mb-6 sm:mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-[#4a1219] via-[#70212B] to-[#3a0d14] p-5 sm:p-8 text-center text-[#FFF9EE] shadow-lg border border-[#E4CA8E]/40"
          >
            {/* Subtle inner gold vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(228,202,142,0.15)_0%,_transparent_75%)] pointer-events-none" />
            
            {/* Top Ornamental Header */}
            <div className="flex items-center justify-center gap-2 mb-2 text-[#E4CA8E]">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#E4CA8E]" />
              <span className="text-[9.5px] sm:text-xs font-serif uppercase tracking-[0.22em] text-[#F8EAC9] font-medium font-tamil">
                {isTa ? 'செவிப் பொன் சேர்ப்பு விழா காணும் செல்வங்கள்' : 'Auspicious Ear Piercing Ceremony of Our Children'}
              </span>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#E4CA8E]" />
            </div>

            {/* Shimmering Gold Children Names */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF7] via-[#F8EAC9] to-[#E4CA8E] my-1.5 font-tamil tracking-wide drop-shadow-md">
              {isTa ? config.child.nameTamil : config.child.nameEnglish}
            </h3>

            {/* Sacred Gold Kadukkan & Ornaments Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/35 border border-[#C69A45]/40 mt-2 backdrop-blur-xs">
              <span className="text-xs text-[#E4CA8E]">✨</span>
              <span className="text-[10px] sm:text-xs text-[#F8EAC9] font-serif font-medium italic font-tamil">
                {isTa ? config.child.goldOrnamentTamil : config.child.goldOrnamentEnglish}
              </span>
              <span className="text-xs text-[#E4CA8E]">✨</span>
            </div>
          </div>

          {/* ====================================================== */}
          {/* 2. FAMILY HONOR CARDS (Visually Distinct Hierarchy)   */}
          {/* ====================================================== */}
          <div className="space-y-3.5 sm:space-y-4 max-w-2xl mx-auto text-left">
            
            {/* ---------------------------------------------------- */}
            {/* CARD A: அன்புப் பெற்றோர்கள் (Honored Host Parents)    */}
            {/* Full-width prestigious card with gold seal & pillars */}
            {/* ---------------------------------------------------- */}
            <div
              ref={(el) => (familyCardsRef.current[0] = el)}
              className="group relative p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#FFFDF7] via-[#FFF9EE] to-[#FFFDF7] border border-[#C69A45]/50 shadow-xs hover:shadow-md hover:border-[#C69A45] hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Left Accent Gold Border Line */}
              <div className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-gradient-to-b from-[#C69A45] via-[#E4CA8E] to-[#96702D]" />

              <div className="flex items-center justify-between gap-3 pl-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Sacred Kalasam Circular Seal */}
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-b from-[#FFFDF7] to-[#F5ECE0] border border-[#C69A45]/60 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <span className="text-lg sm:text-xl text-[#C69A45]">🪔</span>
                  </div>

                  <div>
                    {/* Role Tag */}
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[9.5px] sm:text-[11px] uppercase tracking-wider font-bold text-[#96702D] font-tamil">
                        {isTa ? config.parents.relationTamil : config.parents.relationEnglish}
                      </span>
                      <span className="text-[10px] text-[#C69A45]">•</span>
                      <span className="text-[9.5px] sm:text-[10.5px] text-[#8E7B6C] font-serif italic">
                        {isTa ? 'விழா ஏற்பாட்டாளர்கள்' : 'Honored Hosts'}
                      </span>
                    </div>

                    {/* Parents Names */}
                    <p className="font-serif font-bold text-[#70212B] text-lg sm:text-xl font-tamil leading-tight tracking-wide">
                      {isTa
                        ? `${config.parents.fatherTamil} & ${config.parents.motherTamil}`
                        : `${config.parents.fatherEnglish} & ${config.parents.motherEnglish}`}
                    </p>

                    {/* Sub-label */}
                    <span className="text-[10.5px] sm:text-xs text-[#8E7B6C] block mt-0.5 font-tamil">
                      {isTa ? '(அன்புத் தந்தை & தாய்)' : '(Beloved Father & Mother)'}
                    </span>
                  </div>
                </div>

                {/* Right Decorative Sparkle */}
                <span className="text-sm text-[#C69A45]/70 pr-1 group-hover:rotate-45 transition-transform">✦</span>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* CARD B: சீர்வரிசை தாய்மாமன் (Maternal Uncle - Crown) */}
            {/* Royal Gold Silk Brocade styling for the sacred role  */}
            {/* ---------------------------------------------------- */}
            <div
              ref={(el) => (familyCardsRef.current[1] = el)}
              className="group relative p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#FFFDF7] via-[#FFF9EE] to-[#FFFDF7] border-2 border-[#C69A45]/75 shadow-xs hover:shadow-md hover:border-[#96702D] hover:-translate-y-0.5 transition-all duration-300"
            >
              {/* Left Accent Maroon Border Line */}
              <div className="absolute left-0 top-3 bottom-3 w-1.5 rounded-r bg-gradient-to-b from-[#70212B] via-[#96702D] to-[#70212B]" />

              <div className="flex items-center justify-between gap-3 pl-2">
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Royal Crown / Traditional Seer Seal */}
                  <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-b from-[#FFFDF7] to-[#F5ECE0] border border-[#C69A45]/70 shadow-2xs flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <span className="text-lg sm:text-xl text-[#70212B]">👑</span>
                  </div>

                  <div>
                    {/* Role Tag with Special Crown Badge */}
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-[9.5px] sm:text-[11px] uppercase tracking-wider font-bold text-[#70212B] font-tamil">
                        {isTa ? config.maternalUncles[0].roleTamil : config.maternalUncles[0].roleEnglish}
                      </span>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#70212B]/10 text-[#70212B] font-serif font-semibold">
                        {isTa ? 'சீர்வரிசை' : 'Ceremonial Honor'}
                      </span>
                    </div>

                    {/* Maternal Uncle Name */}
                    <p className="font-serif font-bold text-[#70212B] text-lg sm:text-xl font-tamil leading-tight tracking-wide">
                      {isTa ? config.maternalUncles[0].nameTamil : config.maternalUncles[0].nameEnglish}
                    </p>

                    {/* Sacred Duty Description */}
                    <p className="text-[10.5px] sm:text-xs text-[#96702D] font-serif italic mt-0.5 font-tamil font-medium">
                      {isTa ? config.maternalUncles[0].descriptionTamil : config.maternalUncles[0].descriptionEnglish}
                    </p>
                  </div>
                </div>

                {/* Right Decorative Diamond */}
                <span className="text-sm text-[#C69A45] pr-1 group-hover:scale-125 transition-transform">✨</span>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* CARDS C & D: முன்னோர்கள் (Grandparents & Lineage)      */}
            {/* Elegant Side-by-Side Twin Royal Heritage Scrolls    */}
            {/* ---------------------------------------------------- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
              {/* Paternal Family & Elders */}
              <div
                ref={(el) => (familyCardsRef.current[2] = el)}
                className="group relative p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFFDF7] to-[#FAF4E6] border border-[#C69A45]/40 hover:border-[#C69A45] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FFF9EE] border border-[#C69A45]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs text-[#C69A45]">🏛️</span>
                  </div>
                  <div>
                    <span className="text-[9.5px] sm:text-[10px] uppercase tracking-wider font-bold text-[#96702D] block font-tamil">
                      {isTa ? config.grandparents.paternalRelationTamil : config.grandparents.paternalRelationEnglish}
                    </span>
                    <p className="font-serif font-bold text-[#70212B] text-sm sm:text-base font-tamil mt-0.5 leading-snug">
                      {isTa ? config.grandparents.paternalTamil : config.grandparents.paternalEnglish}
                    </p>
                    <span className="text-[10px] text-[#8E7B6C] font-serif italic block mt-0.5 font-tamil">
                      {isTa ? 'பெரியோர்கள் திருவருள்' : 'Ancestral Blessings'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Maternal Family & Elders */}
              <div
                ref={(el) => (familyCardsRef.current[3] = el)}
                className="group relative p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFFDF7] to-[#FAF4E6] border border-[#C69A45]/40 hover:border-[#C69A45] shadow-2xs hover:shadow-xs hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FFF9EE] border border-[#C69A45]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs text-[#C69A45]">🌸</span>
                  </div>
                  <div>
                    <span className="text-[9.5px] sm:text-[10px] uppercase tracking-wider font-bold text-[#96702D] block font-tamil">
                      {isTa ? config.grandparents.maternalRelationTamil : config.grandparents.maternalRelationEnglish}
                    </span>
                    <p className="font-serif font-bold text-[#70212B] text-sm sm:text-base font-tamil mt-0.5 leading-snug">
                      {isTa ? config.grandparents.maternalTamil : config.grandparents.maternalEnglish}
                    </p>
                    <span className="text-[10px] text-[#8E7B6C] font-serif italic block mt-0.5 font-tamil">
                      {isTa ? 'பெரியோர்கள் திருவருள்' : 'Ancestral Blessings'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================== */}
          {/* 3. WARM ROYAL CLOSING INVITATION NOTE                  */}
          {/* ====================================================== */}
          <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#C69A45]/40 text-center">
            {/* Namaste / Vanakkam Hands Icon */}
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FFF9EE] border border-[#C69A45]/40 text-sm mb-2 text-[#70212B] shadow-2xs">
              🙏
            </div>
            <p className="text-xs sm:text-sm font-serif italic text-[#70212B] font-tamil font-semibold">
              {isTa ? config.event.closingBlessingTamil : config.event.closingBlessingEnglish}
            </p>
            <p className="text-[11px] sm:text-xs font-serif font-bold text-[#96702D] mt-1.5 tracking-wider uppercase font-tamil">
              {isTa ? config.event.withLoveTamil : config.event.withLoveEnglish}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyInvitationSection;
