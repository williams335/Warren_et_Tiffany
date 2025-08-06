import React from 'react';
import AnimatedSection from '../AnimatedSection';
import Countdown from '../Countdown';
import ImageCarousel from '../ImageCarousel';

const Accueil: React.FC = () => {
  const carouselImages = [
    'https://res.cloudinary.com/dvs6yync1/image/upload/v1750007161/IMG-20250605-WA0006_g9w8uk.jpg',
    'https://res.cloudinary.com/dvs6yync1/image/upload/v1750007161/IMG-20250605-WA0008_jjl8ub.jpg',
    'https://res.cloudinary.com/dvs6yync1/image/upload/v1750007161/IMG-20250605-WA0009_x733kk.jpg',
    'https://res.cloudinary.com/dvs6yync1/image/upload/v1750009164/2f486508-7630-429d-9ea4-1ad057147acb_ghvp7b.jpg'
  ];

  return (
    <div className="min-h-screen flex items-center">
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageCarousel images={carouselImages} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="section-container relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl mb-4 text-white drop-shadow-lg">
              <span className="block">Tiffany</span>
              <span className="inline-block mx-4 text-gold-500">&</span>
              <span className="block">Warren</span>
            </h1>
            
            <div className="w-32 h-1 bg-gold-500 mx-auto my-8"></div>
            
            <h2 className="text-2xl md:text-3xl font-light mb-8 font-body text-white drop-shadow-md">
              Nous nous marions !
            </h2>
            
            <div className="text-xl md:text-2xl font-body mb-6 text-white drop-shadow-md">
              <time dateTime="2026-06-06">6 Juin 2026</time>
              <span className="mx-3">•</span>
              <span>Saint-André-sur-Vieux-Jonc, France</span>
            </div>

            <div className="mb-10">
              <Countdown />
            </div>
            
            <p className="text-lg md:text-xl mb-12 text-white drop-shadow-md">
              Nous sommes ravis de partager ce jour spécial avec vous au Domaine du Cuiset. 
              Notre site vous guidera à travers tous les détails de notre célébration.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button 
                onClick={() => {
                  document.getElementById('confirmation')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary-animated"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Confirmer ma présence
              </button>
              
              <button 
                onClick={() => {
                  document.getElementById('infos-pratiques')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-outline border-white text-white hover:bg-white hover:text-sage-800"
              >
                Infos pratiques
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Accueil;