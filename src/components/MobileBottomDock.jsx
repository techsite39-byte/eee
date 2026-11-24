import React, { useState, useEffect } from 'react';
import { Navigation, Calendar, Music, VolumeX, MessageCircle } from 'lucide-react';
import soundManager from '../utils/audioPlayer';

export const MobileBottomDock = ({ config, lang }) => {
  const isTa = lang === 'ta';
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return soundManager.addListener((playing) => {
      setIsPlaying(playing);
    });
  }, []);

  const toggleMusic = () => {
    soundManager.toggle(config.audio?.src);
  };

  const handleShare = () => {
    const text = `செவிப் பொன் சேர்ப்பு விழா - ${config.child.nameTamil} | ${config.event.dateFormattedTamil} | ${config.venue.mandapamTamil}, மதுரை.\nஅழைப்பிதழ்: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCalendar = () => {
    const startTime = '20261129T040000Z';
    const endTime = '20261129T083000Z';
    const title = encodeURIComponent(
      `செவிப் பொன் சேர்ப்பு விழா - ${config.child.nameEnglish}`
    );
    const location = encodeURIComponent(`${config.venue.fullAddressEnglish}`);
    window.open(
      `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&location=${location}`,
      '_blank'
    );
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-3 left-0 right-0 z-40 px-3 md:hidden pointer-events-none flex justify-center animate-fadeIn">
      <div className="pointer-events-auto bg-maroon-dark/95 backdrop-blur-lg border border-gold/60 shadow-gold-glow rounded-full px-4 py-2 flex items-center justify-around gap-4 sm:gap-6 text-cream max-w-sm w-full">
        {/* Directions / Map */}
        <a
          href={config.venue.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-gold-soft hover:text-white active:scale-90 transition-transform cursor-pointer"
        >
          <Navigation className="w-4 h-4 text-gold" />
          <span className="text-[10px] font-medium tracking-tight">
            {isTa ? 'வழித்தடம்' : 'Directions'}
          </span>
        </a>

        <div className="w-px h-5 bg-gold/30" />

        {/* Add to Calendar */}
        <button
          onClick={handleCalendar}
          className="flex flex-col items-center gap-0.5 text-gold-soft hover:text-white active:scale-90 transition-transform cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-gold" />
          <span className="text-[10px] font-medium tracking-tight">
            {isTa ? 'காலெண்டர்' : 'Calendar'}
          </span>
        </button>

        <div className="w-px h-5 bg-gold/30" />

        {/* Music Toggle */}
        <button
          onClick={toggleMusic}
          className="flex flex-col items-center gap-0.5 text-gold-soft hover:text-white active:scale-90 transition-transform cursor-pointer"
        >
          {isPlaying ? (
            <div className="flex items-end gap-0.5 h-4 w-4">
              <span className="w-0.5 bg-gold animate-[pulse_0.6s_ease-in-out_infinite] h-full" />
              <span className="w-0.5 bg-gold animate-[pulse_0.9s_ease-in-out_infinite] h-2/3" />
              <span className="w-0.5 bg-gold animate-[pulse_0.4s_ease-in-out_infinite] h-full" />
            </div>
          ) : (
            <VolumeX className="w-4 h-4 text-muted" />
          )}
          <span className="text-[10px] font-medium tracking-tight">
            {isPlaying ? (isTa ? 'இசை ஆன்' : 'Music On') : isTa ? 'இசை ஆஃப்' : 'Muted'}
          </span>
        </button>

        <div className="w-px h-5 bg-gold/30" />

        {/* WhatsApp Share */}
        <button
          onClick={handleShare}
          className="flex flex-col items-center gap-0.5 text-gold-soft hover:text-white active:scale-90 transition-transform cursor-pointer"
        >
          <MessageCircle className="w-4 h-4 text-green-400" />
          <span className="text-[10px] font-medium tracking-tight">
            {isTa ? 'பகிர்க' : 'Share'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default MobileBottomDock;
