import React, { useState, useEffect } from 'react';
import { Music } from 'lucide-react';
import soundManager from '../utils/audioPlayer';
import { useLanguage } from '../i18n/LanguageContext';

export const FloatingMusicButton = ({ config }) => {
  const { isTa, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return soundManager.addListener((playing) => {
      setIsPlaying(playing);
    });
  }, []);

  const toggleMusic = () => {
    soundManager.toggle(config.audio?.src || '/music.mpeg');
  };

  return (
    <div
      className="fixed z-50 pointer-events-auto transition-transform"
      style={{
        bottom: 'max(24px, calc(24px + env(safe-area-inset-bottom, 0px)))',
        right: 'max(16px, calc(16px + env(safe-area-inset-right, 0px)))',
      }}
    >
      <button
        onClick={toggleMusic}
        className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-[#C69A45] shadow-[0_6px_22px_rgba(112,33,43,0.32)] flex items-center justify-center transition-all transform hover:scale-105 active:scale-95 cursor-pointer group ${
          isPlaying
            ? 'bg-gradient-to-br from-[#70212B] via-[#8C2C38] to-[#5C1B24] text-[#E4CA8E]'
            : 'bg-[#FFF9EE] text-[#70212B] hover:bg-[#FAF6ED]'
        }`}
        title={isPlaying ? t.music.pauseTitle : t.music.playTitle}
        aria-label={isPlaying ? t.music.pauseTitle : t.music.playTitle}
      >
        {/* Rotating Music-Wave Aura Rings when playing */}
        {isPlaying && (
          <>
            <span className="absolute -inset-2 rounded-full border border-[#C69A45]/35 animate-spin [animation-duration:9s] pointer-events-none" />
            <span className="absolute -inset-1 rounded-full border border-dashed border-[#C69A45]/60 animate-spin [animation-duration:14s] [animation-direction:reverse] pointer-events-none" />
          </>
        )}

        {/* Central Audio Equalizer / Music Icon */}
        {isPlaying ? (
          <div className="flex items-end gap-0.5 h-4 w-4 sm:h-5 sm:w-5">
            <span className="w-1 h-full bg-[#E4CA8E] rounded-full animate-audio-equalizer" />
            <span className="w-1 h-3/5 bg-[#E4CA8E] rounded-full animate-audio-equalizer [animation-delay:120ms]" />
            <span className="w-1 h-4/5 bg-[#E4CA8E] rounded-full animate-audio-equalizer [animation-delay:240ms]" />
            <span className="w-1 h-2/5 bg-[#E4CA8E] rounded-full animate-audio-equalizer [animation-delay:360ms]" />
          </div>
        ) : (
          <Music className="w-5 h-5 sm:w-6 sm:h-6 text-[#96702D] group-hover:scale-110 transition-transform" />
        )}
      </button>
    </div>
  );
};

export default FloatingMusicButton;
