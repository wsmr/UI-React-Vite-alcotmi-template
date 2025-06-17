import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const Members = () => {
  const members = [
    {
      id: 'acq',
      name: 'ACQ',
      logo: 'acq-logo.svg', // Placeholder for member logo
    },
    {
      id: 'cmmtq',
      name: 'CMMTQ',
      logo: 'cmmtq-logo.svg', // Placeholder for member logo
    },
    {
      id: 'paptac',
      name: 'PAPTAC',
      logo: 'paptac-logo.svg', // Placeholder for member logo
    },
    {
      id: 'naval',
      name: 'Naval Québec',
      logo: 'naval-quebec-logo.svg', // Placeholder for member logo
    },
  ];

  return (
    <section className="members-section py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Nous sommes membres de:
          </h2>
        </div>

        {/* Members Display */}
        <div className="relative">
          {/* Desktop View - Show all logos */}
          <div className="hidden md:grid md:grid-cols-4 gap-8 items-center justify-items-center">
            {members.map((member, index) => (
              <div
                key={member.id}
                className="flex items-center justify-center p-4 transition-opacity duration-300 hover:opacity-100 opacity-70"
              >
                {/* 
                  Member logo placeholder - replace with actual member logos
                  Expected files: acq-logo.svg, cmmtq-logo.svg, paptac-logo.svg, naval-quebec-logo.svg
                  Recommended: SVG format, white/transparent background
                */}
                <div className="w-24 h-16 bg-white/20 rounded flex items-center justify-center">
                  <div className="w-16 h-8 bg-white/40 rounded"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile View - Swiper Carousel */}
          <div className="md:hidden">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              centeredSlides={true}
              className="members-swiper"
            >
              {members.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="flex items-center justify-center p-8">
                    <div className="w-32 h-20 bg-white/20 rounded flex items-center justify-center">
                      <div className="w-24 h-12 bg-white/40 rounded"></div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;

