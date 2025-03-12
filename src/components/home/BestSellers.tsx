
import React from 'react';
import { LucideShoppingBag } from 'lucide-react';
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
    <section className="py-20 bg-janta-gradient">
      <div className="section-container">
        <SectionHeading
          pretitle="Customer Favorites"
          title="Our Best Sellers"
          description="Discover our most beloved creations that have been delighting customers for generations. Handcrafted with love and authentic Rajasthani recipes."
        />
        
        <div className="relative pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {bestSellers.map((product, index) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="absolute -bottom-10 -right-10 rotate-12 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" 
              alt="Decorative sweets" 
              className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>
          
          <div className="absolute -bottom-6 left-1/3 -rotate-6 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" 
              alt="Decorative sweets" 
              className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in-up flex flex-col items-center">
          <div className="inline-block p-2 bg-rajasthani-deep/10 rounded-full mb-6">
            <div className="bg-rajasthani-deep text-white p-4 rounded-full">
              <LucideShoppingBag size={24} />
            </div>
          </div>
          <h3 className="text-2xl font-display font-bold mb-4">Explore Our Complete Collection</h3>
          <p className="text-muted-foreground max-w-xl mb-6 mx-auto">
            We have over 100+ varieties of authentic Rajasthani sweets, snacks, and savories that will tantalize your taste buds.
          </p>
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
