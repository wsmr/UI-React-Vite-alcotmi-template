import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
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
    <section id="about" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Alco-TMI, votre partenaire de confiance
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-8">
              <p>
                Depuis notre fondation, nous nous engageons à fournir des solutions industrielles 
                de la plus haute qualité, adaptées aux besoins spécifiques de chaque client. 
                Notre expertise couvre la chaudronnerie, la tuyauterie, la mécanique industrielle 
                et l'entretien, garantissant des résultats fiables et durables.
              </p>
              
              <p>
                Nous sommes fiers de notre équipe qualifiée et de notre approche axée sur 
                l'innovation et la sécurité.
              </p>
            </div>
            
            <Button 
              onClick={() => scrollToSection('services')}
              className="btn-primary group"
            >
              <span>À propos</span>
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* 
                Image placeholder - replace with actual about image
                Expected file: about-image.jpg (800x600, optimized for web)
              */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4"></div>
                    <p className="text-sm">About Image Placeholder</p>
                    <p className="text-xs mt-1">800x600 recommended</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500 rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500 rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

