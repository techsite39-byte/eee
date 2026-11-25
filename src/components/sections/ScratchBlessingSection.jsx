import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Eye, ArrowRight, Heart } from 'lucide-react';
import { GopuramCrest, KolamDivider, CornerOrnament, GoldSparkle } from '../common/Ornaments';
import { useLanguage } from '../../i18n/LanguageContext';

export const ScratchBlessingSection = ({ config }) => {
  const { lang, isTa, t } = useLanguage();
  const quotes = config.scratchQuotes || [];
  
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const [isScratching, setIsScratching] = useState(false);

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const lastPointRef = useRef(null);
  const checkThrottleRef = useRef(0);

  const currentQuote = quotes[currentIdx] || quotes[0] || {
    id: 1,
    titleTamil: 'குலதெய்வ திருவருள் வாழ்த்து',
    titleEnglish: 'Divine Grace of Kula Deivam',
    shlokaTamil: '|| ஸ்ரீ குலதெய்வம் துணை || மங்களம் உண்டாகுக ||',
    shlokaEnglish: '|| Om Sri Kula Deivam Namaha || Auspicious Blessings ||',
    meaningTamil: 'செல்வக் குழந்தைகள் கிருஷ்வந்த் & சுபத்ரா நீண்ட ஆயுளும், நிறைந்த ஆரோக்கியமும் பெற்று வாழ்க!',
    meaningEnglish: 'May little Krishwanth & Subhadra be blessed with long life, radiant health, and boundless joy!',
    authorTamil: 'குலதெய்வ ஆசி',
    authorEnglish: 'Divine Heritage Shloka',
  };

  // Draw the royal golden metallic scratch foil on canvas
  const initFoil = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    // Set backing store dimensions scaled by DPR
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    ctx.save();
    ctx.scale(dpr, dpr);
    const w = rect.width;
    const h = rect.height;

    // 1. Rich metallic gold background gradient
    const goldGrad = ctx.createLinearGradient(0, 0, w, h);
    goldGrad.addColorStop(0, '#96702D');
    goldGrad.addColorStop(0.2, '#D4AF37');
    goldGrad.addColorStop(0.4, '#F7E7BE');
    goldGrad.addColorStop(0.6, '#C69A45');
    goldGrad.addColorStop(0.85, '#AA7C28');
    goldGrad.addColorStop(1, '#7C581E');

    ctx.fillStyle = goldGrad;
    ctx.fillRect(0, 0, w, h);

    // 2. Subtle silk pattern overlay (diagonal hatch lines)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    for (let i = -h; i < w + h; i += 14) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i + h, h);
      ctx.stroke();
    }

    // 3. Decorative double gold border inside the canvas
    ctx.strokeStyle = 'rgba(112, 33, 43, 0.35)'; // maroon accent line
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, w - 20, h - 20);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)'; // bright gold accent line
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(15, 15, w - 30, h - 30);
    ctx.setLineDash([]); // reset dash

    // 4. Four corner decorative diamonds
    const drawDiamond = (cx, cy, size) => {
      ctx.fillStyle = '#70212B';
      ctx.beginPath();
      ctx.moveTo(cx, cy - size);
      ctx.lineTo(cx + size, cy);
      ctx.lineTo(cx, cy + size);
      ctx.lineTo(cx - size, cy);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#FFECA8';
      ctx.beginPath();
      ctx.arc(cx, cy, size * 0.35, 0, Math.PI * 2);
      ctx.fill();
    };

    drawDiamond(24, 24, 6);
    drawDiamond(w - 24, 24, 6);
    drawDiamond(24, h - 24, 6);
    drawDiamond(w - 24, h - 24, 6);

    // 5. Central Auspicious Sacred Diya Motif on the Foil
    const centerY = h * 0.40;
    ctx.fillStyle = '#70212B';
    ctx.beginPath();
    ctx.ellipse(w / 2, centerY + 10, 22, 9, 0, 0, Math.PI);
    ctx.fill();

    ctx.strokeStyle = '#FFECA8';
    ctx.lineWidth = 2;
    ctx.stroke();

    const flameGrad = ctx.createRadialGradient(w / 2, centerY - 4, 2, w / 2, centerY - 4, 16);
    flameGrad.addColorStop(0, '#FFFFFF');
    flameGrad.addColorStop(0.4, '#FFE66D');
    flameGrad.addColorStop(0.8, '#FF9F1C');
    flameGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = flameGrad;
    ctx.beginPath();
    ctx.arc(w / 2, centerY - 4, 14, 0, Math.PI * 2);
    ctx.fill();

    // 6. Text: SCRATCH HERE
    ctx.fillStyle = '#5A1622';
    ctx.font = 'bold 16px "Playfair Display", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(t.scratch.foilLabel.toUpperCase(), w / 2, centerY + 42);

    ctx.font = 'italic 11px sans-serif';
    ctx.fillStyle = '#6E4E1B';
    ctx.fillText(t.scratch.scratchPrompt, w / 2, centerY + 62);

    ctx.restore();
    setIsRevealed(false);
    setScratchPercent(0);
  }, [t.scratch.foilLabel, t.scratch.scratchPrompt]);

  useEffect(() => {
    initFoil();
  }, [initFoil, currentIdx, lang]);

  // Scratch stroke handler
  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.x;
    const y = clientY - rect.y;

    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 42; // Generous comfortable scratch brush

    ctx.beginPath();
    if (lastPointRef.current) {
      ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      ctx.arc(x, y, 21, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    lastPointRef.current = { x, y };

    // Throttle percentage calculation for high 60fps performance
    const now = Date.now();
    if (now - checkThrottleRef.current > 120) {
      checkThrottleRef.current = now;
      checkScratchPercentage();
    }
  };

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    // Sample step 16 to keep math ultra-fast
    const step = 16;
    let transparentCount = 0;
    let totalSampled = 0;

    try {
      const imgData = ctx.getImageData(0, 0, w, h);
      const data = imgData.data;

      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          const index = (y * w + x) * 4 + 3; // alpha channel
          if (data[index] < 128) {
            transparentCount++;
          }
          totalSampled++;
        }
      }

      const percent = Math.min(100, Math.round((transparentCount / totalSampled) * 100));
      setScratchPercent(percent);

      // Auto reveal threshold at 45% scratched
      if (percent >= 45 && !isRevealed) {
        revealCompletely();
      }
    } catch (e) {
      console.warn('Scratch check error:', e);
    }
  };

  const revealCompletely = () => {
    setIsRevealed(true);
    setScratchPercent(100);

    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    try {
      confetti({
        particleCount: window.innerWidth < 640 ? 55 : 90,
        spread: 75,
        origin: { y: 0.65 },
        colors: ['#F8EAC9', '#E4CA8E', '#C69A45', '#70212B', '#FFECA8', '#FF9F1C'],
      });
    } catch (e) {
      console.warn('Confetti error:', e);
    }
  };

  // Mouse & Touch event listeners
  const handleMouseDown = (e) => {
    setIsScratching(true);
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      lastPointRef.current = { x: e.clientX - rect.x, y: e.clientY - rect.y };
    }
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isScratching) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsScratching(false);
    lastPointRef.current = null;
  };

  const handleTouchStart = (e) => {
    setIsScratching(true);
    const touch = e.touches[0];
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect && touch) {
      lastPointRef.current = { x: touch.clientX - rect.x, y: touch.clientY - rect.y };
      scratch(touch.clientX, touch.clientY);
    }
  };

  const handleTouchMove = (e) => {
    if (!isScratching) return;
    const touch = e.touches[0];
    if (touch) {
      scratch(touch.clientX, touch.clientY);
    }
  };

  const handleTouchEnd = () => {
    setIsScratching(false);
    lastPointRef.current = null;
  };

  const nextQuote = () => {
    if (quotes.length > 0) {
      setCurrentIdx((prev) => (prev + 1) % quotes.length);
    }
  };

  return (
    <section
      id="scratch"
      className="relative py-14 sm:py-20 px-3 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF6ED] via-[#F4E9D5] to-[#FAF6ED] text-[#725D4C] overflow-hidden"
    >
      <div className="max-w-2xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <div className="flex justify-center mb-2">
          <GopuramCrest className="w-12 h-8 sm:w-14 sm:h-9 text-[#C69A45]" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF9EE] border border-[#C69A45]/40 shadow-2xs mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#96702D]" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-serif font-bold text-[#96702D] font-tamil">
            {t.scratch.badge}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#70212B] mt-1 mb-2 font-tamil tracking-tight">
          {t.scratch.title}
        </h2>

        <KolamDivider className="max-w-[200px] sm:max-w-xs my-2 text-[#C69A45]" />

        <p className="text-xs sm:text-sm text-[#725D4C] font-serif max-w-lg mx-auto px-2 mb-6 font-tamil leading-relaxed">
          {t.scratch.subtitle}
        </p>

        {/* Scratch Card Stage */}
        <div className="relative max-w-md mx-auto">
          {/* Card Frame */}
          <div
            ref={containerRef}
            className="relative w-full h-[260px] sm:h-[300px] rounded-2xl bg-[#FFF9EE] border-2 border-[#C69A45] shadow-xl overflow-hidden select-none"
          >
            {/* Corner Ornaments */}
            <CornerOrnament position="top-left" className="top-2 left-2 w-7 h-7 text-[#C69A45] z-10" />
            <CornerOrnament position="top-right" className="top-2 right-2 w-7 h-7 text-[#C69A45] z-10" />
            <CornerOrnament position="bottom-left" className="bottom-2 left-2 w-7 h-7 text-[#C69A45] z-10" />
            <CornerOrnament position="bottom-right" className="bottom-2 right-2 w-7 h-7 text-[#C69A45] z-10" />

            {/* Hidden Golden Shloka Layer Beneath */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FFFDF7] via-[#FFF8E7] to-[#FCEECB]">
              <div className="w-10 h-10 rounded-full bg-[#70212B]/10 border border-[#C69A45]/40 flex items-center justify-center mb-2 text-[#70212B]">
                <Sparkles className="w-5 h-5 text-[#96702D]" />
              </div>

              <h3 className="text-base sm:text-lg font-serif font-bold text-[#70212B] font-tamil mb-1">
                {isTa
                  ? (currentQuote.badgeTamil || currentQuote.titleTamil || currentQuote.title)
                  : (currentQuote.badgeEnglish || currentQuote.titleEnglish || currentQuote.title)}
              </h3>

              <p className="text-xs sm:text-sm font-serif italic font-semibold text-[#96702D] max-w-xs my-1 font-tamil whitespace-pre-line">
                {isTa
                  ? (currentQuote.verseTamil || currentQuote.shlokaTamil || currentQuote.shloka)
                  : (currentQuote.verseEnglish || currentQuote.shlokaEnglish || currentQuote.shloka)}
              </p>

              <p className="text-xs sm:text-sm font-serif text-[#725D4C] max-w-sm mt-1 leading-relaxed font-tamil">
                "{isTa
                  ? (currentQuote.meaningTamil || currentQuote.meaning)
                  : (currentQuote.meaningEnglish || currentQuote.meaning)}"
              </p>

              <div className="mt-2.5 pt-2 border-t border-[#C69A45]/30 w-44">
                <span className="text-[10px] font-serif uppercase tracking-widest text-[#96702D] font-tamil block">
                  {isTa
                    ? (currentQuote.sourceTamil || currentQuote.authorTamil || 'குலதெய்வ அருள்')
                    : (currentQuote.sourceEnglish || currentQuote.authorEnglish || 'Sacred Benediction')}
                </span>
              </div>
            </div>

            {/* Golden Metallic Scratch Foil Canvas on top */}
            <canvas
              ref={canvasRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              className={`absolute inset-0 w-full h-full cursor-pointer touch-none z-20 transition-opacity duration-500 ${
                isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            />
          </div>

          {/* Interactive Action Bar Below Scratch Card */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 text-xs font-serif">
            {!isRevealed ? (
              <button
                onClick={revealCompletely}
                className="px-4 py-2 rounded-full border border-[#C69A45] bg-[#FFF9EE] hover:bg-[#FFFDF7] text-[#70212B] font-semibold flex items-center gap-1.5 shadow-xs transition-transform active:scale-95 cursor-pointer font-tamil"
              >
                <Eye className="w-3.5 h-3.5 text-[#96702D]" />
                <span>{t.scratch.revealBtn}</span>
              </button>
            ) : (
              <>
                <button
                  onClick={initFoil}
                  className="px-4 py-2 rounded-full border border-[#C69A45] bg-[#FFF9EE] hover:bg-[#FFFDF7] text-[#70212B] font-semibold flex items-center gap-1.5 shadow-xs transition-transform active:scale-95 cursor-pointer font-tamil"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-[#96702D]" />
                  <span>{t.scratch.againBtn}</span>
                </button>

                <button
                  onClick={nextQuote}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-[#70212B] to-[#8C2C38] text-[#FFF9EE] font-semibold flex items-center gap-1.5 shadow-xs hover:brightness-105 transition-transform active:scale-95 cursor-pointer font-tamil"
                >
                  <span>{t.scratch.nextBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E4CA8E]" />
                </button>
              </>
            )}
          </div>

          {/* Progress Indicator */}
          {!isRevealed && scratchPercent > 0 && (
            <p className="text-[11px] text-[#96702D] font-serif font-medium mt-2 font-tamil">
              {scratchPercent}% {t.scratch.percentRevealed}
            </p>
          )}

          {isRevealed && (
            <p className="text-xs text-[#70212B] font-serif font-bold mt-2 animate-fadeIn font-tamil">
              {t.scratch.revealedSuccess}
            </p>
          )}
        </div>

        <p className="text-[11px] text-[#8E7B6C] font-serif italic mt-6 max-w-md mx-auto font-tamil">
          {t.scratch.footerNote}
        </p>
      </div>
    </section>
  );
};

export default ScratchBlessingSection;
