import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  return (
    <section id="careers" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Carrières
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Joignez-vous à une équipe dynamique et passionnée. Consultez nos offres d'emploi 
          et découvrez les opportunités de carrière chez Alco-TMI.
        </p>
        
        <Button className="btn-primary group">
          <span>Postes offerts</span>
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

export default Careers;

