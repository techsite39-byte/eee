import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';
import eventConfig from '../data/eventConfig';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Read saved preference from localStorage, default to English ('en')
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('invitation_lang');
        if (saved === 'ta' || saved === 'en') return saved;
      } catch (e) {
        console.warn('localStorage read error:', e);
      }
    }
    return 'en'; // Default language is English
  });

  const setLang = (newLang) => {
    if (newLang !== 'en' && newLang !== 'ta') return;
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('invitation_lang', newLang);
      } catch (e) {
        console.warn('localStorage save error:', e);
      }
    }
  };

  const toggleLang = () => {
    setLang(lang === 'ta' ? 'en' : 'ta');
  };

  const isTa = lang === 'ta';
  const t = translations[lang] || translations.en;

  // Sync document language attribute and browser tab title whenever lang changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      if (isTa) {
        document.title = `${eventConfig.event.titleTamil} | ${eventConfig.child.nameTamil} | அழைப்பிதழ்`;
      } else {
        document.title = `${eventConfig.event.titleEnglish} | ${eventConfig.child.nameEnglish} | Digital Invitation`;
      }
    }
  }, [lang, isTa]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isTa, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
