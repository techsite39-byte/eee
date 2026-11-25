import React from 'react';
import {
  MapPin,
  Navigation,
  Phone,
  Compass,
} from 'lucide-react';
import { GopuramCrest, KolamDivider, CornerOrnament } from '../common/Ornaments';
import { useLanguage } from '../../i18n/LanguageContext';

export const VenueSection = ({ config }) => {
  const { lang, isTa, t } = useLanguage();

  return (
    <section id="venue" className="relative py-14 sm:py-20 px-3 sm:px-6 lg:px-8 bg-[#FAF6ED] text-[#725D4C]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-14">
          <div className="flex justify-center mb-1.5 sm:mb-2">
            <GopuramCrest className="w-14 h-9 sm:w-16 sm:h-10 text-[#96702D]" />
          </div>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-[#96702D] font-sans font-tamil">
            {t.venue.badge}
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-[#70212B] mt-1.5 sm:mt-2 mb-2 sm:mb-3 font-tamil">
            {t.venue.title}
          </h2>
          <KolamDivider className="max-w-[200px] sm:max-w-xs md:max-w-sm my-2 sm:my-3 text-[#C69A45]" />
          <p className="text-xs sm:text-sm md:text-base text-[#725D4C] font-sans max-w-lg mx-auto px-2 font-tamil">
            {t.venue.subtitle}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">
          {/* Left Column: Venue Details Card */}
          <div className="lg:col-span-5 relative bg-[#FFF9EE] rounded-2xl sm:rounded-3xl border-2 border-[#C69A45]/40 shadow-xl p-4 sm:p-6 md:p-8 flex flex-col justify-between">
            <CornerOrnament position="top-left" className="top-2 left-2 w-6 h-6 sm:w-8 sm:h-8 text-[#C69A45]" />
            <CornerOrnament position="top-right" className="top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 text-[#C69A45]" />

            <div>
              {/* Venue Photograph */}
              <div className="relative h-40 sm:h-48 md:h-56 rounded-xl sm:rounded-2xl overflow-hidden border border-[#C69A45]/30 mb-4 sm:mb-6 shadow-md">
                <img
                  src="/images/venue.jpg"
                  alt={t.venue.mandapamName}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-[#FFF9EE]">
                  <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full bg-[#70212B]/90 border border-[#C69A45]/40 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[#E4CA8E] font-tamil">
                    {t.venue.mandapamBadge}
                  </span>
                </div>
              </div>

              {/* Venue Name */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#70212B] mb-1.5 sm:mb-2 leading-tight font-tamil">
                {t.venue.mandapamName}
              </h3>

              {/* Full Address */}
              <div className="flex items-start gap-2 text-[#725D4C] text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed font-tamil">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#70212B] flex-shrink-0 mt-0.5" />
                <p>{t.venue.fullAddress}</p>
              </div>

              {/* Landmark */}
              <div className="flex items-start gap-2 text-[11px] sm:text-xs text-[#8E7B6C] mt-2 leading-normal font-tamil">
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#96702D] flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#725D4C]">{t.venue.landmarkLabel} </strong>
                  {t.venue.landmark}
                </p>
              </div>
            </div>

            {/* Action Buttons & Contact Info */}
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-[#C69A45]/30">
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <a
                  href={config.venue.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[44px] px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#70212B] text-[#E4CA8E] hover:bg-[#581720] border border-[#C69A45]/50 shadow-md font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer font-tamil"
                >
                  <Navigation className="w-4 h-4 text-[#C69A45] flex-shrink-0" />
                  <span>{t.venue.getDirections}</span>
                </a>

                {config.venue.contactPhone && (
                  <a
                    href={`tel:${config.venue.contactPhone.replace(/\s+/g, '')}`}
                    className="min-h-[44px] px-4 py-2.5 sm:py-3 rounded-full bg-[#FFF9EE] hover:bg-[#FFFDF7] text-[#70212B] border border-[#C69A45]/40 shadow-sm font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors active:scale-95 font-tamil"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#96702D] flex-shrink-0" />
                    <span>{t.venue.callVenue}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7 relative bg-[#FFF9EE] rounded-2xl sm:rounded-3xl border-2 border-[#C69A45]/40 shadow-xl overflow-hidden p-2 flex flex-col">
            <CornerOrnament position="top-right" className="top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 text-[#C69A45] z-10" />

            <div className="relative w-full h-[280px] sm:h-[350px] lg:h-full min-h-[260px] rounded-xl sm:rounded-2xl overflow-hidden border border-[#C69A45]/30 bg-[#FAF6ED]">
              <iframe
                title="Google Maps Location"
                src={config.venue.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
