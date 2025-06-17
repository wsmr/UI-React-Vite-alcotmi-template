import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const socialLinks = [
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'facebook', href: '#', label: 'Facebook' },
    { icon: 'youtube', href: '#', label: 'YouTube' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'tiktok', href: '#', label: 'TikTok' },
  ];

  const services = [
    { name: 'Chaudronnerie', id: 'chaudronnerie' },
    { name: 'Tuyauterie', id: 'tuyauterie' },
    { name: 'Mécanique industrielle', id: 'mecanique' },
    { name: 'Entretien industriel', id: 'entretien' },
    { name: 'Conception et ingénierie', id: 'conception' },
  ];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="flex items-center"
            >
              {/* Logo placeholder - replace with actual logo */}
              <div className="w-32 h-12 bg-white rounded flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">ALCO TMI</span>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-red-400 transition-colors font-medium"
            >
              À propos
            </button>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-white hover:text-red-400 transition-colors font-medium">
                Services
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-64 bg-black/95 rounded-lg shadow-lg transition-all duration-300 ${
                isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <div className="py-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => scrollToSection('services')}
                      className="block w-full text-left px-4 py-2 text-white hover:text-red-400 hover:bg-white/10 transition-colors"
                    >
                      {service.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-white hover:text-red-400 transition-colors font-medium"
            >
              Réalisations
            </button>
            
            <button 
              onClick={() => scrollToSection('careers')}
              className="text-white hover:text-red-400 transition-colors font-medium"
            >
              Carrières
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-red-400 transition-colors font-medium"
            >
              Contact
            </button>
            
            <a href="#" className="text-white hover:text-red-400 transition-colors font-medium">
              English
            </a>
          </nav>

          {/* Social Links */}
          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.icon}
                href={social.href}
                className="text-white hover:text-red-400 transition-colors"
                aria-label={social.label}
              >
                <div className="w-5 h-5 bg-white/20 rounded"></div>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-400"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 rounded-lg mt-2">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-white hover:text-red-400"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-white hover:text-red-400"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 text-white hover:text-red-400"
              >
                Réalisations
              </button>
              <button 
                onClick={() => scrollToSection('careers')}
                className="block w-full text-left px-3 py-2 text-white hover:text-red-400"
              >
                Carrières
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-white hover:text-red-400"
              >
                Contact
              </button>
              <a href="#" className="block px-3 py-2 text-white hover:text-red-400">
                English
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

