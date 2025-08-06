import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Navigation from './components/Navigation';
import Accueil from './components/sections/Accueil';
import NotreHistoire from './components/sections/NotreHistoire';
import InfosPratiques from './components/sections/InfosPratiques';
import Programme from './components/sections/Programme';
import Hebergements from './components/sections/Hebergements';
import Playlist from './components/sections/Playlist';
import Confirmation from './components/sections/Confirmation';
import FAQ from './components/sections/FAQ';
import Remerciements from './components/sections/Remerciements';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

function App() {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const duration = 1000;
    const animationEnd = Date.now() + duration;
    const colors = ['#83ba8c', '#D4AF37', '#e0efe2'];

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      
      if (currentSection !== activeSection && currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="font-body bg-stone-50 text-sage-900">
      <Navigation 
        activeSection={activeSection}
        onNavClick={handleNavClick}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
      
      <main>
        <section id="accueil">
          <AnimatedSection><Accueil /></AnimatedSection>
        </section>
        <section id="notre-histoire">
          <AnimatedSection><NotreHistoire /></AnimatedSection>
        </section>
        <section id="infos-pratiques">
          <AnimatedSection><InfosPratiques /></AnimatedSection>
        </section>
        <section id="programme">
          <AnimatedSection><Programme /></AnimatedSection>
        </section>
        <section id="hebergements">
          <AnimatedSection><Hebergements /></AnimatedSection>
        </section>
        <section id="playlist">
          <AnimatedSection><Playlist /></AnimatedSection>
        </section>
        <section id="confirmation">
          <AnimatedSection><Confirmation /></AnimatedSection>
        </section>
        <section id="faq">
          <AnimatedSection><FAQ /></AnimatedSection>
        </section>
        <section id="remerciements">
          <AnimatedSection><Remerciements /></AnimatedSection>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App