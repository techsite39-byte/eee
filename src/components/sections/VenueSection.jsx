import React from 'react';
import {
  MapPin,
  Navigation,
  Phone,
  Compass,
} from 'lucide-react';
import { GopuramCrest, KolamDivider, CornerOrnament } from '../common/Ornaments';

export const VenueSection = ({ config, lang }) => {
  const isTa = lang === 'ta';

  return (
    <section id="venue" className="relative py-14 sm:py-20 px-3 sm:px-6 lg:px-8 bg-ivory text-ink">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-14">
          <div className="flex justify-center mb-1.5 sm:mb-2">
            <GopuramCrest className="w-14 h-9 sm:w-16 sm:h-10 text-gold-deep" />
          </div>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-gold-deep font-sans">
            {isTa ? 'சுப மண்டப அமைவிடம்' : 'Venue & Directions'}
          </span>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-serif font-bold text-maroon-dark mt-1.5 sm:mt-2 mb-2 sm:mb-3">
            {isTa ? 'மண்டபம் மற்றும் வழித்தடம்' : 'Ceremony Venue & Map'}
          </h2>
          <KolamDivider className="max-w-[200px] sm:max-w-xs md:max-w-sm my-2 sm:my-3 text-gold" />
          <p className="text-xs sm:text-sm md:text-base text-ink/80 font-sans max-w-lg mx-auto px-2">
            {isTa
              ? `${config.venue.mandapamTamil} - தங்களை குடும்பத்துடன் அன்புடன் வரவேற்கிறோம்.`
              : 'Detailed venue location, Google map navigation, and travel assistance.'}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">
          {/* Left Column: Venue Details Card */}
          <div className="lg:col-span-5 relative bg-cream rounded-2xl sm:rounded-3xl border-2 border-gold/40 shadow-royal p-4 sm:p-6 md:p-8 flex flex-col justify-between">
            <CornerOrnament position="top-left" className="top-2 left-2 w-6 h-6 sm:w-8 sm:h-8 text-gold" />
            <CornerOrnament position="top-right" className="top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 text-gold" />

            <div>
              {/* Venue Photograph */}
              <div className="relative h-40 sm:h-48 md:h-56 rounded-xl sm:rounded-2xl overflow-hidden border border-gold/30 mb-4 sm:mb-6 shadow-md">
                <img
                  src="/images/venue.jpg"
                  alt={isTa ? config.venue.mandapamTamil : config.venue.mandapamEnglish}
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-cream">
                  <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full bg-maroon/90 border border-gold/40 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-gold-soft">
                    {isTa ? 'திருக்கோயில் திருமண மண்டபம்' : 'Temple Ceremony Mandapam'}
                  </span>
                </div>
              </div>

              {/* Venue Name from Reference 2 */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-maroon-dark mb-1.5 sm:mb-2 leading-tight">
                {isTa ? config.venue.mandapamTamil : config.venue.mandapamEnglish}
              </h3>

              {/* Full Address from Reference 2 */}
              <div className="flex items-start gap-2 text-ink/80 text-xs sm:text-sm mt-2 sm:mt-3 leading-relaxed">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-maroon flex-shrink-0 mt-0.5" />
                <p>{isTa ? config.venue.fullAddressTamil : config.venue.fullAddressEnglish}</p>
              </div>

              {/* Landmark from Reference 2 */}
              <div className="flex items-start gap-2 text-[11px] sm:text-xs text-muted mt-2 leading-normal">
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-deep flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-ink/85">{isTa ? 'அடையாளம்: ' : 'Landmark: '}</strong>
                  {isTa ? config.venue.landmarkTamil : config.venue.landmarkEnglish}
                </p>
              </div>
            </div>

            {/* Action Buttons & Contact Info */}
            <div className="mt-5 sm:mt-6 pt-4 sm:pt-6 border-t border-gold/30">
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <a
                  href={config.venue.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-h-[44px] px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-maroon text-gold-soft hover:bg-maroon-dark border border-gold/50 shadow-md font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{isTa ? 'கூகுள் மேப் வழித்தடம்' : 'Get Directions'}</span>
                </a>

                {config.venue.contactPhone && (
                  <a
                    href={`tel:${config.venue.contactPhone.replace(/\s+/g, '')}`}
                    className="min-h-[44px] px-4 py-2.5 sm:py-3 rounded-full bg-cream hover:bg-white text-maroon border border-gold/40 shadow-sm font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-deep flex-shrink-0" />
                    <span>{isTa ? 'தொடர்புக்கு' : 'Call Venue'}</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed from Reference 2 */}
          <div className="lg:col-span-7 relative bg-cream rounded-2xl sm:rounded-3xl border-2 border-gold/40 shadow-royal overflow-hidden p-2 flex flex-col">
            <CornerOrnament position="top-right" className="top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 text-gold z-10" />

            <div className="relative w-full h-[280px] sm:h-[350px] lg:h-full min-h-[260px] rounded-xl sm:rounded-2xl overflow-hidden border border-gold/30 bg-ivory">
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

              <div className="absolute top-2.5 left-2.5 bg-cream/95 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gold/40 text-[11px] sm:text-xs font-semibold text-maroon flex items-center gap-1.5 shadow-md max-w-[85%] truncate">
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-maroon flex-shrink-0" />
                <span className="truncate">{isTa ? config.venue.mandapamTamil : config.venue.mandapamEnglish}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
