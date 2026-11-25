import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

export const Navbar = ({ config, onOpenDoor }) => {
  const { lang, toggleLang, isTa, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t.nav.home },
    { href: '#scratch', label: t.nav.scratch },
    { href: '#family', label: t.nav.family },
    { href: '#schedule', label: t.nav.schedule },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#event-details', label: t.nav.muhurtham },
    { href: '#venue', label: t.nav.venue },
    { href: '#blessings', label: t.nav.blessings },
    { href: '#thankyou', label: t.nav.thankyou },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF6ED]/95 backdrop-blur-md shadow-xs border-b border-[#C69A45]/35 py-2'
          : 'bg-[#FAF6ED]/90 backdrop-blur-xs shadow-2xs border-b border-[#C69A45]/20 py-2.5 sm:py-3'
      }`}
      style={{
        paddingTop: 'max(0.5rem, env(safe-area-inset-top, 0px))',
      }}
    >
      <div className="w-full max-w-2xl sm:max-w-4xl mx-auto px-3 sm:px-6 flex items-center justify-between">
        
        {/* Left: Small circular family logo with decorative gold border */}
        <a href="#hero" className="flex items-center group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C69A45]/70 bg-[#FFF9EE] shadow-xs flex items-center justify-center text-[#70212B] font-tamil font-bold text-xs sm:text-sm group-hover:scale-105 transition-transform">
            <span>{t.nav.logoText}</span>
          </div>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1 rounded-full text-xs font-medium tracking-wide text-[#725D4C] hover:text-[#70212B] hover:bg-[#C69A45]/15 transition-all font-tamil"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Language Selector & Hamburger Menu */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Selector with Globe Icon */}
          <button
            onClick={toggleLang}
            className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-[#C69A45]/60 bg-[#FFF9EE]/90 hover:bg-[#FFF9EE] text-[#70212B] text-xs font-medium tracking-wide flex items-center gap-1.5 shadow-2xs transition-all cursor-pointer active:scale-95"
            title={t.nav.toggleLangTitle}
            aria-label={t.nav.toggleLangTitle}
          >
            <Globe className="w-3.5 h-3.5 text-[#96702D]" />
            <span className={isTa ? 'font-sans' : 'font-tamil'}>{t.nav.toggleLangLabel}</span>
          </button>

          {/* Hamburger Menu with Gold Circular Border */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#C69A45]/60 bg-[#FFF9EE]/90 hover:bg-[#FFF9EE] text-[#70212B] flex items-center justify-center shadow-2xs transition-colors cursor-pointer active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Slide-Down Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="bg-[#FAF6ED] border-b border-[#C69A45]/40 shadow-xl px-4 pt-3 pb-6 text-[#725D4C] animate-fadeIn">
          <div className="max-w-md mx-auto flex flex-col gap-1 divide-y divide-[#C69A45]/15">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm font-medium hover:bg-[#C69A45]/15 hover:text-[#70212B] transition-colors font-tamil"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="max-w-md mx-auto mt-4 pt-3 border-t border-[#C69A45]/30 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenDoor) onOpenDoor();
              }}
              className="text-xs font-serif font-bold text-[#70212B] hover:text-[#96702D] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>🏛️</span>
              <span className="font-tamil">{t.nav.backToDoor}</span>
            </button>
            <span className="text-[10px] text-[#96702D] tracking-wider uppercase font-serif">
              {config.opening.eventDate}
            </span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
