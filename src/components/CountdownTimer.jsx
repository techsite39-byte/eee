import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const CountdownTimer = ({ targetDate, lang = 'ta' }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const isTa = lang === 'ta';

  const units = [
    { labelTa: 'நாட்கள்', labelEn: 'Days', value: timeLeft.days },
    { labelTa: 'மணிகள்', labelEn: 'Hours', value: timeLeft.hours },
    { labelTa: 'நிமிடங்கள்', labelEn: 'Mins', value: timeLeft.minutes },
    { labelTa: 'நொடிகள்', labelEn: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto my-3 sm:my-4 px-2">
      <div className="text-center mb-2.5">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF9EE] border border-[#C69A45]/40 text-[10px] sm:text-xs font-semibold text-[#96702D] tracking-[0.16em] uppercase shadow-2xs font-serif">
          <Clock className="w-3 h-3 text-[#C69A45]" />
          <span>{isTa ? 'சுப முகூர்த்தத்திற்கு இன்னும்' : 'COUNTING DOWN TO MUHURTHAM'}</span>
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {units.map((unit, idx) => (
          <div
            key={idx}
            className="relative bg-[#FFF9EE] border border-[#C69A45]/40 rounded-xl p-2.5 sm:p-3 text-center shadow-xs hover:border-[#C69A45] transition-colors group"
          >
            {/* 4 Decorative Golden Corner Dots */}
            <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full bg-[#C69A45]/80" />
            <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#C69A45]/80" />
            <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full bg-[#C69A45]/80" />
            <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full bg-[#C69A45]/80" />

            <div className="text-2xl sm:text-3xl font-serif font-bold text-[#70212B] tracking-tight leading-none group-hover:scale-105 transition-transform">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] sm:text-xs font-sans font-medium text-[#725D4C] mt-1 tracking-wider uppercase truncate">
              {isTa ? unit.labelTa : unit.labelEn}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
