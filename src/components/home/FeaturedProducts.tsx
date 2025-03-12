
import React from 'react';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Product } from '@/types';

const FeaturedProducts: React.FC = () => {
  // Sample product data
  const featuredProducts: Product[] = [
    {
      id: '5',
      name: 'Kalakand',
      description: 'Creamy milk cake flavored with cardamom and topped with pistachios.',
      price: 520,
      weight: '500g',
      image: 'https://images.unsplash.com/photo-1605197161470-123221bbb104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: 'Milk Sweets',
      isNew: true
    },
    {
      id: '6',
      name: 'Mohan Thal',
      description: 'Traditional Rajasthani dessert made with gram flour, ghee, and sugar syrup.',
      price: 480,
      weight: '450g',
      image: 'https://images.unsplash.com/photo-1589249148049-5c359042a1ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: 'Regional Specialties',
      isPopular: true
    },
    {
      id: '7',
      name: 'Rajasthani Malpua',
      description: 'Sweet pancakes dipped in sugar syrup, garnished with rabri and nuts.',
      price: 420,
      weight: '400g (6 pieces)',
      image: 'https://images.unsplash.com/photo-1631143070457-c1aecc92abbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: 'Traditional Sweets',
      isPopular: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div className="md:w-1/2">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-rajasthani-red uppercase bg-rajasthani-red/10 rounded-full">
                This Season's Specials
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Festive Collection <span className="text-rajasthani-red">2023</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Celebrate the season of joy with our special collection of handcrafted sweets. Perfect for gifting or adding sweetness to your festivities.
            </p>
            <a href="/seasonal" className="inline-flex items-center text-rajasthani-red font-medium hover:underline">
              View All Seasonal Specials <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative h-60 md:h-80 w-full bg-rajasthani-cream rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Festive Sweet Box" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-xl font-display font-bold mb-1">Premium Gift Boxes</h3>
                  <p className="text-sm text-muted-foreground mb-2">Starting from ₹999</p>
                  <a href="/gift-boxes" className="text-sm font-medium text-rajasthani-red hover:underline">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-rajasthani-red text-white py-2 px-4 rounded-md shadow-lg rotate-3 animate-pulse">
              Limited Time Offer!
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="group relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-display font-bold mb-1">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-rajasthani-red font-semibold">₹{product.price}</span>
                <button className="text-sm bg-rajasthani-deep text-white py-1.5 px-4 rounded-md hover:bg-rajasthani-deep/90 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
