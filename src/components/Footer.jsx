import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Merci pour votre inscription à notre infolettre!');
  };

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

  const socialLinks = [
    { icon: 'linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'facebook', href: '#', label: 'Facebook' },
    { icon: 'youtube', href: '#', label: 'YouTube' },
    { icon: 'instagram', href: '#', label: 'Instagram' },
    { icon: 'tiktok', href: '#', label: 'TikTok' },
  ];

  return (
    <footer id="contact" className="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="mb-6">
                <button 
                  onClick={() => scrollToSection('hero')}
                  className="w-32 h-12 bg-white rounded flex items-center justify-center"
                >
                  <span className="text-red-600 font-bold text-lg">ALCO TMI</span>
                </button>
              </div>

              {/* Address */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Siège social</h3>
                <div className="text-gray-300 leading-relaxed">
                  <p>995, avenue Bombardier</p>
                  <p>Alma (Québec) G8B 6H2</p>
                  <div className="mt-3 space-y-1">
                    <p>
                      T. <a href="tel:418-669-1911" className="text-red-400 hover:text-red-300 transition-colors">418 669-1911</a>
                    </p>
                    <p>
                      C. <a href="mailto:info@alcotmi.com" className="text-red-400 hover:text-red-300 transition-colors">info@alcotmi.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <Button 
                onClick={() => scrollToSection('about')}
                className="btn-primary group"
              >
                <span>Contactez-nous</span>
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4">
                Abonnez-vous à notre infolettre
              </h3>
              
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Notre infolettre vous gardera à<br />
                l'affût de nos nouvelles et sujets d'intérêts.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Courriel"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-red-400 focus:ring-red-400"
                />
                <Button type="submit" className="w-full btn-primary group">
                  <span>ABONNEZ-VOUS MAINTENANT</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>

            {/* Language & Social */}
            <div className="lg:col-span-1">
              {/* Language Switcher */}
              <div className="mb-8">
                <nav>
                  <a href="#" className="text-white hover:text-red-400 transition-colors font-medium">
                    EN
                  </a>
                </nav>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:text-red-400 hover:bg-white/20 transition-all duration-200 hover:scale-110"
                    aria-label={social.label}
                  >
                    <div className="w-5 h-5 bg-current rounded"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <a href="#" className="text-gray-400 hover:text-red-400 text-sm transition-colors">
                Politique de confidentialité et de protection des renseignements personnels
              </a>
            </div>
            
            <div className="text-center md:text-right text-sm text-gray-400">
              © Tous droits réservés - Groupe Alco-TMI // Conception web :{' '}
              <a href="#" className="text-red-400 hover:text-red-300 transition-colors">
                Agence Polka/Arsenal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

