import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  const projects = [
    {
      id: 'construction-industrie',
      title: 'Construction Industrie lourde',
      image: 'project1.jpg', // Placeholder for project image
      description: 'Projet de construction dans le secteur de l\'industrie lourde',
    },
    {
      id: 'construction-hydro',
      title: 'Construction Secteur Hydro Tuyauterie et mécanique',
      image: 'project2.jpg', // Placeholder for project image
      description: 'Projet de construction dans le secteur hydroélectrique',
    },
    {
      id: 'maintenance-chaudronnerie',
      title: 'Maintenance Chaudronnerie Tuyauterie et mécanique',
      image: 'project3.jpg', // Placeholder for project image
      description: 'Projet de maintenance en chaudronnerie et tuyauterie',
    },
  ];

  return (
    <section id="projects" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos réalisations
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets qui témoignent de notre savoir-faire 
            et de notre engagement envers l'excellence.
          </p>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="projects-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="project-card">
                  {/* 
                    Project image placeholder - replace with actual project images
                    Expected files: project1.jpg, project2.jpg, project3.jpg (600x400, optimized for web)
                  */}
                  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
                        <p className="text-sm">{project.title}</p>
                        <p className="text-xs">600x400 recommended</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 z-10">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button className="btn-primary group">
            <span>Toutes nos réalisations</span>
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      <style jsx>{`
        .projects-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #e5e7eb;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .projects-swiper .swiper-pagination-bullet-active {
          background: #ef4444;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default Projects;

