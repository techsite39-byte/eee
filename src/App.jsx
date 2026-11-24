import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import eventConfig from './data/eventConfig';
import { galleryConfig } from './data/galleryConfig';
import Navbar from './components/Navbar';
import PalaceDoorGate from './components/PalaceDoorGate';
import FloatingPetals from './components/common/FloatingPetals';
import FloatingMusicButton from './components/FloatingMusicButton';

import HeroSection from './components/sections/HeroSection';
import ScratchBlessingSection from './components/sections/ScratchBlessingSection';
import FamilyInvitationSection from './components/sections/FamilyInvitationSection';
import ScheduleSection from './components/sections/ScheduleSection';
import ChildGallerySection from './components/sections/ChildGallerySection';
import EventDetailsSection from './components/sections/EventDetailsSection';
import VenueSection from './components/sections/VenueSection';
import BlessingsSection from './components/sections/BlessingsSection';
import ThankYouSection from './components/sections/ThankYouSection';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function App() {
  const [lang, setLang] = useState('ta'); // Default to Tamil
  const [isDoorOpen, setIsDoorOpen] = useState(false);
  const [showGate, setShowGate] = useState(true); // Standalone Opening Temple Gate restored

  // Sync document language attribute and title from Reference 2
  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'ta') {
      document.title = `${eventConfig.event.titleTamil} | ${eventConfig.child.nameTamil} | அழைப்பிதழ்`;
    } else {
      document.title = `${eventConfig.event.titleEnglish} | ${eventConfig.child.nameEnglish} | Digital Invitation`;
    }
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#FAF6ED] text-[#725D4C] font-sans selection:bg-gold/30 selection:text-maroon-dark overflow-x-hidden">
      {/* Standalone Opening Screen (Pixel-Accurate Temple Entrance with Dual Buttons & Music) */}
      <PalaceDoorGate
        isOpen={showGate}
        onClose={(chosenLang) => {
          if (chosenLang) setLang(chosenLang);
          setShowGate(false);
          setIsDoorOpen(true);
        }}
        config={eventConfig}
        lang={lang}
      />

      {/* Main Invitation Page — Always rendered underneath so doors reveal the actual content */}
      <div className="relative min-h-screen">
        {/* Floating Traditional Petals */}
        <FloatingPetals count={typeof window !== 'undefined' && window.innerWidth < 640 ? 14 : 22} />

        {/* Top Header Navbar */}
        <Navbar
          lang={lang}
          setLang={setLang}
          config={eventConfig}
          onOpenDoor={() => {
            setShowGate(true);
            setIsDoorOpen(false);
          }}
        />

        {/* Main Page Flow Combining Reference 1 UI and Reference 2 Content */}
        <main>
          {/* Section 1: Hero with Temple Arch & Children Portrait */}
          <HeroSection config={eventConfig} lang={lang} />

          {/* Section 1.5: Interactive Auspicious Scratch Card Moment (Quotes & Blessings) */}
          <ScratchBlessingSection config={eventConfig} lang={lang} />

          {/* Section 2: Family Invitation Card (Parents, Grandparents, Thai Maman) */}
          <FamilyInvitationSection config={eventConfig} lang={lang} />

          {/* Section 3: Ceremony Celebration & Schedule */}
          <ScheduleSection config={eventConfig} lang={lang} />

          {/* Section 4: Scroll-Animated Polaroid Story Gallery */}
          <ChildGallerySection config={eventConfig} lang={lang} />

          {/* Section 5: Auspicious Muhurtham & Event Details (29 Nov 2026, 9:30 AM to 10:30 AM) */}
          <EventDetailsSection config={eventConfig} lang={lang} />

          {/* Section 6: Venue & Interactive Location Map (V.R. Mahal, Thirunagar, Madurai) */}
          <VenueSection config={eventConfig} lang={lang} />

          {/* Section 7: Blessings, RSVP & Family Sign-off (WhatsApp RSVP: 919840123456) */}
          <BlessingsSection config={eventConfig} lang={lang} />

          {/* Section 8: Thank You Jharokha Sunset Page */}
          <ThankYouSection config={eventConfig} lang={lang} />
        </main>

        {/* Floating Circular Audio Equalizer Button */}
        <FloatingMusicButton config={eventConfig} lang={lang} />
      </div>
    </div>
  );
}

export default App;
