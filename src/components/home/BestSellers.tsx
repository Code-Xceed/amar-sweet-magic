
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import ProductCard from '../ui/ProductCard';
import { Product } from '@/types';

const BestSellers: React.FC = () => {
  // Sample product data
  const bestSellers: Product[] = [
    {
      id: '1',
      name: 'Kesar Peda',
      description: 'Traditional milk-based sweet flavored with saffron and cardamom.',
      price: 450,
      weight: '500g',
      image: 'https://images.unsplash.com/photo-1615280825886-fa817c0a06cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: 'Milk Sweets',
      isPopular: true
    },
    {
      id: '2',
      name: 'Rajasthani Ghevar',
      description: 'Disc-shaped sweet cake made with flour and soaked in sugar syrup.',
      price: 550,
      weight: '400g',
      image: 'https://images.unsplash.com/photo-1588953936825-80353cc069af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: 'Festival Specials',
      isNew: true
    },
    {
      id: '3',
      name: 'Besan Ladoo',
      description: 'Spherical sweets made from gram flour, ghee, and sugar.',
      price: 400,
      weight: '500g',
      image: 'https://images.unsplash.com/photo-1589249148049-5c359042a1ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: 'Ladoo Varieties',
      isPopular: true
    },
    {
      id: '4',
      name: 'Mawa Kachori',
      description: 'Sweet kachori filled with khoya and dry fruits, a Jodhpur specialty.',
      price: 600,
      weight: '350g',
      image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: 'Regional Specialties',
      isPopular: true
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="section-container">
        <SectionHeading
          pretitle="Customer Favorites"
          title="Our Best Sellers"
          description="Discover our most beloved creations that have been delighting customers for generations."
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {bestSellers.map((product, index) => (
            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-fade-in-up">
          <a 
            href="/sweets" 
            className="btn-primary"
          >
            View All Sweets
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
