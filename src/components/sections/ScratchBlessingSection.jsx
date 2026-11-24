import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Eye, ArrowRight, Heart } from 'lucide-react';
import { GopuramCrest, KolamDivider, CornerOrnament, GoldSparkle } from '../common/Ornaments';

export const ScratchBlessingSection = ({ config, lang }) => {
  const isTa = lang === 'ta';
  const quotes = config.scratchQuotes || [];
  
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const [isScratching, setIsScratching] = useState(false);

  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const lastPointRef = useRef(null);
  const checkThrottleRef = useRef(0);

  const currentQuote = quotes[currentIdx] || quotes[0];

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
    // Diya base
    ctx.ellipse(w / 2, centerY + 10, 22, 9, 0, 0, Math.PI);
    ctx.fill();

    // Diya rim
    ctx.strokeStyle = '#FFECA8';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Diya golden flame
    const flameGrad = ctx.createRadialGradient(w / 2, centerY - 4, 2, w / 2, centerY - 4, 16);
    flameGrad.addColorStop(0, '#FFFFFF');
    flameGrad.addColorStop(0.4, '#FFE66D');
    flameGrad.addColorStop(0.8, '#FF9F1C');
    flameGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = flameGrad;
    ctx.beginPath();
    ctx.arc(w / 2, centerY - 4, 16, 0, Math.PI * 2);
    ctx.fill();

    // 6. Instructional Prompt on Foil
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Top pill badge
    ctx.fillStyle = 'rgba(112, 33, 43, 0.88)';
    const pillW = 200;
    const pillH = 26;
    const pillX = (w - pillW) / 2;
    const pillY = centerY + 32;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(pillX, pillY, pillW, pillH, 13) : ctx.rect(pillX, pillY, pillW, pillH);
    ctx.fill();

    ctx.fillStyle = '#FFF8EA';
    ctx.font = 'bold 11px sans-serif';
    ctx.fillText('✨ SCRATCH HERE • இங்கு சுரண்டவும் ✨', w / 2, pillY + 13);

    // Main Invitation Call to Action
    ctx.fillStyle = '#4A151C';
    ctx.font = 'bold 15px serif';
    ctx.fillText(
      isTa ? 'மங்கள வாழ்த்தைக் காண சுரண்டவும்' : 'Scratch to Reveal Sacred Blessing',
      w / 2,
      centerY + 80
    );

    ctx.fillStyle = '#664E3D';
    ctx.font = '11px sans-serif';
    ctx.fillText(
      isTa ? '👆 விரல் அல்லது மவுஸால் சுரண்டவும்' : '👆 Use finger or mouse to scratch',
      w / 2,
      centerY + 104
    );

    // Decorative stars on foil
    const stars = [
      [w * 0.18, h * 0.25],
      [w * 0.82, h * 0.25],
      [w * 0.15, h * 0.75],
      [w * 0.85, h * 0.75],
      [w * 0.32, h * 0.18],
      [w * 0.68, h * 0.18],
    ];
    ctx.fillStyle = '#FFECA8';
    stars.forEach(([sx, sy]) => {
      ctx.beginPath();
      ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
    setIsRevealed(false);
    setScratchPercent(0);
  }, [isTa]);

  // Re-initialize foil whenever current quote or language changes
  useEffect(() => {
    initFoil();
  }, [currentIdx, initFoil]);

  // Window resize listener to keep canvas sharply aligned
  useEffect(() => {
    const handleResize = () => {
      if (!isRevealed) {
        initFoil();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isRevealed, initFoil]);

  // Trigger celebration and auto-reveal when threshold is passed
  const triggerCelebration = useCallback(() => {
    setIsRevealed(true);
    setScratchPercent(100);

    // Confetti shower with South Indian traditional festival colors
    confetti({
      particleCount: 55,
      spread: 75,
      origin: { y: 0.62 },
      colors: ['#C69A45', '#70212B', '#E4CA8E', '#FFAA00', '#FAF6ED'],
    });

    // Fade out canvas cleanly
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.style.transition = 'opacity 0.6s ease-out';
      canvas.style.opacity = '0';
      setTimeout(() => {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        canvas.style.opacity = '1';
        canvas.style.transition = 'none';
      }, 650);
    }
  }, []);

  // Calculate percentage of cleared foil (throttled)
  const checkScratchPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    // Sample every 16th pixel for super-fast performance
    const step = 16;
    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    let totalSampled = 0;
    let clearedSampled = 0;

    for (let i = 3; i < data.length; i += 4 * step) {
      totalSampled++;
      if (data[i] === 0) {
        clearedSampled++;
      }
    }

    const pct = Math.round((clearedSampled / totalSampled) * 100);
    setScratchPercent(pct);

    if (pct >= 40 && !isRevealed) {
      triggerCelebration();
    }
  }, [isRevealed, triggerCelebration]);

  // Scratch action (erases foil using destination-out)
  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const x = (clientX - rect.left) * dpr;
    const y = (clientY - rect.top) * dpr;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineWidth = 36 * dpr;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (lastPointRef.current) {
      ctx.beginPath();
      ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(x, y, 18 * dpr, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
    lastPointRef.current = { x, y };

    // Throttle percentage check
    const now = Date.now();
    if (now - checkThrottleRef.current > 120) {
      checkThrottleRef.current = now;
      checkScratchPercentage();
    }
  };

  // Mouse handlers
  const handleMouseDown = (e) => {
    setIsScratching(true);
    lastPointRef.current = null;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseMove = (e) => {
    if (!isScratching) return;
    scratch(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    setIsScratching(false);
    lastPointRef.current = null;
    checkScratchPercentage();
  };

  // Touch handlers (prevent page scroll during scratch)
  const handleTouchStart = (e) => {
    if (e.cancelable) e.preventDefault();
    setIsScratching(true);
    lastPointRef.current = null;
    const touch = e.touches[0];
    if (touch) scratch(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e) => {
    if (e.cancelable) e.preventDefault();
    if (!isScratching) return;
    const touch = e.touches[0];
    if (touch) scratch(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    setIsScratching(false);
    lastPointRef.current = null;
    checkScratchPercentage();
  };

  // Instant full reveal
  const handleInstantReveal = () => {
    triggerCelebration();
  };

  // Switch to next quote
  const handleNextQuote = () => {
    const next = (currentIdx + 1) % quotes.length;
    setCurrentIdx(next);
  };

  // Reset scratch card for current quote
  const handleResetCard = () => {
    initFoil();
  };

  return (
    <section
      id="scratch"
      className="relative py-12 sm:py-18 px-3 sm:px-6 lg:px-8 bg-[#FAF6ED] text-[#725D4C] overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_center,_rgba(198,154,69,0.18)_0%,_transparent_65%)]" />

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <GoldSparkle className="absolute top-[12%] left-[8%] sm:left-[16%] w-4 h-4 text-[#C69A45]/70" delay="0s" />
        <GoldSparkle className="absolute top-[22%] right-[10%] sm:right-[18%] w-4 h-4 text-[#C69A45]/60" delay="1.2s" />
        <GoldSparkle className="absolute bottom-[14%] left-[12%] sm:left-[20%] w-3.5 h-3.5 text-[#C69A45]/60" delay="2.4s" />
      </div>

      <div className="w-full max-w-xl mx-auto relative z-10">
        {/* ======================================================== */}
        {/* SECTION HEADER                                           */}
        {/* ======================================================== */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex justify-center mb-2.5">
            <GopuramCrest className="w-11 h-8 text-[#C69A45] drop-shadow-2xs" />
          </div>

          {/* Traditional Pill Header */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C69A45]/40 bg-[#FFF9EE] shadow-2xs mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#96702D]" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.20em] text-[#96702D] font-tamil">
              {isTa ? 'மங்கள ஆசிப் பெட்டகம்' : 'SACRED BLESSINGS MOMENT'}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#96702D]" />
          </div>

          {/* Section Main Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#70212B] tracking-tight font-tamil drop-shadow-2xs">
            {isTa ? 'சுரண்டி அறியும் மங்கள ஆசி' : 'Scratch & Reveal Auspicious Blessings'}
          </h2>

          <KolamDivider className="w-32 my-2 text-[#C69A45]/70" />

          {/* Explanatory Subtitle */}
          <p className="text-xs sm:text-sm text-[#725D4C] max-w-md mx-auto leading-relaxed px-2 font-tamil">
            {isTa
              ? 'எங்கள் இல்லத்துச் செல்வங்கள் R. கிருஷ்வந்த் & R. சுபத்ராவிற்குரிய நல்வாழ்த்தை உங்கள் கைவிரலால் சுரண்டி அறிந்திடுங்கள்.'
              : 'Gently scratch the golden foil below with your finger or mouse to reveal auspicious blessings for our beloved children.'}
          </p>
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE SCRATCH CARD CONTAINER                       */}
        {/* ======================================================== */}
        <div
          ref={containerRef}
          className="relative w-full min-h-[350px] sm:min-h-[370px] rounded-2xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF3E3] to-[#FFF8EA] border-2 border-[#C69A45]/60 shadow-[0_12px_36px_rgba(112,33,43,0.12)] p-4 sm:p-6 overflow-hidden select-none transition-all duration-300"
        >
          {/* Filigree Corner Ornaments on the Frame */}
          <CornerOrnament position="top-left" className="top-1.5 left-1.5 w-6 h-6 text-[#C69A45]" />
          <CornerOrnament position="top-right" className="top-1.5 right-1.5 w-6 h-6 text-[#C69A45]" />
          <CornerOrnament position="bottom-left" className="bottom-1.5 left-1.5 w-6 h-6 text-[#C69A45]" />
          <CornerOrnament position="bottom-right" className="bottom-1.5 right-1.5 w-6 h-6 text-[#C69A45]" />

          {/* Inner Decorative Dashed Border */}
          <div className="absolute inset-2.5 rounded-xl border border-dashed border-[#C69A45]/35 pointer-events-none" />

          {/* -------------------------------------------------------- */}
          {/* UNDERLYING CARD CONTENT (REVEALED TEXT & BLESSING)       */}
          {/* -------------------------------------------------------- */}
          <div className="relative z-10 h-full flex flex-col justify-between items-center text-center py-2 px-1">
            
            {/* Top Category Badge */}
            <div className="flex flex-col items-center gap-1">
              <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-[#70212B]/10 border border-[#70212B]/25 text-[10px] sm:text-xs font-semibold text-[#70212B] font-tamil">
                <span>✨</span>
                <span>{isTa ? currentQuote.badgeTamil : currentQuote.badgeEnglish}</span>
                <span>✨</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#96702D] font-serif font-semibold tracking-wider font-tamil">
                {isTa ? currentQuote.sourceTamil : currentQuote.sourceEnglish}
              </span>
            </div>

            {/* Central Sacred Verse */}
            <div className="my-3 sm:my-4 px-2 max-w-md">
              <p className="text-base sm:text-lg md:text-xl font-serif font-bold text-[#70212B] leading-relaxed whitespace-pre-line font-tamil drop-shadow-2xs">
                {isTa ? currentQuote.verseTamil : currentQuote.verseEnglish}
              </p>

              {/* Meaning / Explanation */}
              <p className="mt-2 text-[11px] sm:text-xs text-[#725D4C] italic leading-normal font-tamil">
                {isTa ? currentQuote.meaningTamil : currentQuote.verseEnglish}
              </p>
            </div>

            {/* Dedicated Children Blessing Banner */}
            <div className="w-full bg-[#70212B]/6 border border-[#C69A45]/40 rounded-xl py-2 px-3 sm:px-4 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1 text-[#96702D]">
                <Heart className="w-3.5 h-3.5 fill-[#C69A45] text-[#C69A45]" />
                <span className="text-[10.5px] sm:text-[11.5px] font-bold uppercase tracking-wider font-tamil">
                  {isTa ? 'குழந்தைகளுக்கான நல்வாழ்த்து' : 'Sacred Benediction'}
                </span>
                <Heart className="w-3.5 h-3.5 fill-[#C69A45] text-[#C69A45]" />
              </div>
              <p className="text-xs sm:text-[13px] font-semibold text-[#70212B] leading-snug font-tamil">
                {isTa ? currentQuote.blessingTamil : currentQuote.blessingEnglish}
              </p>
            </div>

            {/* Bottom Sacred Blessing Inscription */}
            <div className="pt-2 text-[9.5px] sm:text-[10.5px] tracking-[0.16em] uppercase text-[#96702D] font-serif font-semibold">
              {isTa ? '|| ஸ்ரீ குலதெய்வம் துணை • சுபம் ||' : '|| With Divine Kula Deivam Blessings ||'}
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* TOP SCRATCH CANVAS FOIL OVERLAY                          */}
          {/* -------------------------------------------------------- */}
          <canvas
            ref={canvasRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`absolute inset-0 z-20 w-full h-full rounded-2xl touch-none ${
              isRevealed ? 'pointer-events-none' : 'cursor-pointer active:cursor-grabbing'
            }`}
          />
        </div>

        {/* ======================================================== */}
        {/* INTERACTIVE CONTROLS & SCRATCH PROGRESS BAR              */}
        {/* ======================================================== */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 px-1">
          
          {/* Progress / Status Indicator */}
          <div className="flex items-center gap-2 text-xs text-[#725D4C]">
            <span className="font-tamil font-medium">
              {isTa ? 'சுரண்டிய அளவு:' : 'Scratched:'}
            </span>
            <div className="w-24 sm:w-28 h-2.5 rounded-full bg-gold/20 overflow-hidden border border-gold/40">
              <div
                className="h-full bg-gradient-to-r from-[#96702D] to-[#C69A45] transition-all duration-300"
                style={{ width: `${scratchPercent}%` }}
              />
            </div>
            <span className="font-bold text-[#70212B] text-xs">
              {scratchPercent}%
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {!isRevealed ? (
              <button
                onClick={handleInstantReveal}
                className="px-3.5 py-1.5 rounded-full border border-gold/60 bg-[#FFF9EE] hover:bg-gold/20 text-[#70212B] text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-2xs transition-all active:scale-95 cursor-pointer"
                title={isTa ? 'முழு வாழ்த்தையும் உடனே காண்க' : 'Reveal full blessing'}
              >
                <Eye className="w-3.5 h-3.5 text-[#96702D]" />
                <span className="font-tamil">{isTa ? 'உடனே காண்க' : 'Reveal Blessing'}</span>
              </button>
            ) : (
              <button
                onClick={handleResetCard}
                className="px-3.5 py-1.5 rounded-full border border-gold/60 bg-[#FFF9EE] hover:bg-gold/20 text-[#70212B] text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-2xs transition-all active:scale-95 cursor-pointer"
                title={isTa ? 'மீண்டும் சுரண்டுக' : 'Scratch this card again'}
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#96702D]" />
                <span className="font-tamil">{isTa ? 'மீண்டும் சுரண்டுக' : 'Scratch Again'}</span>
              </button>
            )}

            {/* Next Quote Button */}
            <button
              onClick={handleNextQuote}
              className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#70212B] to-[#8C2C38] hover:from-[#5C1B24] hover:to-[#70212B] text-[#FFF9EE] text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-xs transition-all active:scale-95 cursor-pointer"
              title={isTa ? 'அடுத்த மங்கள வாழ்த்துக்கு மாறுக' : 'Cycle to next sacred quote'}
            >
              <span className="font-tamil">{isTa ? 'அடுத்த ஆசி' : 'Next Quote'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Small Bottom Blessing Quote Note */}
        <p className="mt-4 text-center text-[10.5px] sm:text-[11px] text-[#96702D] font-tamil font-medium">
          {isTa
            ? '✨ 4 மங்கள வாழ்த்துப் பாசுரங்கள் இணைக்கப்பட்டுள்ளன • அடுத்த ஆசியை அழுத்தி காண்க ✨'
            : '✨ 4 Auspicious verses included • Click "Next Quote" to discover all blessings ✨'}
        </p>

      </div>
    </section>
  );
};

export default ScratchBlessingSection;
