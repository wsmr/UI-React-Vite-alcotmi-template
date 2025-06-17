import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="hero-section flex items-center justify-center">
      {/* Background Video Placeholder */}
      <div className="hero-overlay"></div>
      {/* 
        Video placeholder - replace with actual video file
        Expected file: hero-video.mp4 (1920x1080, optimized for web)
        Fallback image: hero-fallback.jpg
      */}
      <div className="hero-video bg-gradient-to-br from-gray-800 to-gray-900"></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
          Chaudronnerie{' '}
          <span className="text-red-500 mx-2">|</span>{' '}
          Tuyauterie{' '}
          <span className="text-red-500 mx-2">|</span>
          <br className="hidden sm:block" />
          Mécanique industrielle
        </h1>
        
        <div className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p>
            Le Groupe Alco-Tmi est spécialisé en conception, fabrication, installation et entretien 
            d'équipements dans les domaines des appareils sous pression, de la chaudronnerie, 
            de la tuyauterie et de la mécanique pour l'ensemble des secteurs industriels.
          </p>
        </div>
        
        <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={() => scrollToSection('about')}
            className="btn-primary group"
          >
            <span>À propos</span>
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

