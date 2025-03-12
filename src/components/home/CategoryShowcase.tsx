
import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Category } from '@/types';
import { cn } from '@/lib/utils';

const CategoryShowcase: React.FC = () => {
  // Sample category data
  const categories: Category[] = [
    {
      id: '1',
      name: 'Milk Sweets',
      description: 'Delicious sweets made from freshly condensed milk',
      image: 'https://images.unsplash.com/photo-1566103310532-68e765db7692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      name: 'Dry Fruit Delights',
      description: 'Premium sweets enriched with finest dry fruits',
      image: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      name: 'Festival Specials',
      description: 'Seasonal sweets prepared for festive occasions',
      image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '4',
      name: 'Traditional Ladoos',
      description: 'Round sweet delicacies in various flavors',
      image: 'https://images.unsplash.com/photo-1589249148049-5c359042a1ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '5',
      name: 'Gift Packs',
      description: 'Curated assortments for gifting on special occasions',
      image: 'https://images.unsplash.com/photo-1633933358116-a27b902fad35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '6',
      name: 'Regional Specialties',
      description: 'Authentic sweets from different regions of Rajasthan',
      image: 'https://images.unsplash.com/photo-1631143070457-c1aecc92abbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];
  
  return (
    <section className="py-20">
      <div className="section-container">
        <SectionHeading
          pretitle="Browse By Category"
          title="Explore Our Sweet Collections"
          description="From traditional favorites to seasonal specialties, discover the diverse range of authentic Rajasthani sweets we offer."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <a 
              key={category.id}
              href={`/categories/${category.id}`}
              className="group relative overflow-hidden rounded-xl aspect-[3/2] animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-rajasthani-yellow transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-white/80 mb-4 max-w-sm">
                  {category.description}
                </p>
                <div className="flex items-center text-rajasthani-yellow font-medium text-sm transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="mr-2">Explore Collection</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
