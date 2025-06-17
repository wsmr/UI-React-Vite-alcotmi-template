import React from 'react';

const Services = () => {
  const services = [
    {
      id: 'chaudronnerie',
      title: 'Chaudronnerie',
      description: 'Fabrication sur mesure d\'équipements industriels de haute qualité.',
      icon: 'chaudronnerie-icon.svg', // Placeholder for service icon
    },
    {
      id: 'tuyauterie',
      title: 'Tuyauterie',
      description: 'Solutions complètes pour tous vos besoins en tuyauterie industrielle.',
      icon: 'tuyauterie-icon.svg', // Placeholder for service icon
    },
    {
      id: 'mecanique',
      title: 'Mécanique industrielle',
      description: 'Expertise en mécanique pour optimiser la performance de vos équipements.',
      icon: 'mecanique-icon.svg', // Placeholder for service icon
    },
    {
      id: 'entretien',
      title: 'Entretien industriel',
      description: 'Maintenance préventive et corrective pour assurer la longévité de vos installations.',
      icon: 'entretien-icon.svg', // Placeholder for service icon
    },
    {
      id: 'conception',
      title: 'Conception et ingénierie',
      description: 'Services de conception et d\'ingénierie pour des solutions industrielles innovantes.',
      icon: 'conception-icon.svg', // Placeholder for service icon
    },
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Alco-TMI offre une gamme complète de services industriels pour répondre à tous vos besoins.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon Placeholder */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-500 rounded"></div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <a
                href={`#${service.id}`}
                className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
              >
                En savoir plus
                <svg
                  className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

