import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const News = () => {
  const newsItems = [
    {
      id: 'optimization',
      title: 'Optimisation de nos installations pour mieux vous servir',
      date: '14.05.2025',
      category: 'Construction',
      image: 'news1.jpg', // Placeholder for news image
      excerpt: 'Découvrez les améliorations apportées à nos installations...',
    },
    {
      id: 'partnership',
      title: 'Alco-TMI, partenaire de la soudure au Québec',
      date: '14.05.2025',
      category: 'Événement',
      image: 'news2.jpg', // Placeholder for news image
      excerpt: 'Notre participation aux événements de soudure...',
    },
    {
      id: 'branding',
      title: 'Alco-TMI dévoile sa nouvelle image de marque',
      date: '14.05.2025',
      category: 'Nouvelle',
      image: 'news3.jpg', // Placeholder for news image
      excerpt: 'Présentation de notre nouvelle identité visuelle...',
    },
  ];

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'construction':
        return 'bg-blue-500';
      case 'événement':
        return 'bg-green-500';
      case 'nouvelle':
        return 'bg-purple-500';
      default:
        return 'bg-red-500';
    }
  };

  return (
    <section id="news" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nouvelles
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className="news-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* News Image Placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
                    <p className="text-sm">News Image {index + 1}</p>
                    <p className="text-xs">400x225 recommended</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <span className={`px-2 py-1 text-xs text-white rounded ${getCategoryColor(item.category)}`}>
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors leading-tight">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button className="btn-primary group">
            <span>Toutes les nouvelles</span>
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default News;

