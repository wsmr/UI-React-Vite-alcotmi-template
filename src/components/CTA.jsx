import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
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
    <section className="cta-section py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Prêt à démarrer votre projet avec Alco-TMI ?
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir 
          comment nous pouvons vous aider à atteindre vos objectifs.
        </p>
        
        <Button 
          onClick={() => scrollToSection('contact')}
          className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold group"
        >
          <span>Contactez-nous</span>
          <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

export default CTA;

