
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-rajasthani-cream to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 diagonal-lines-pattern"></div>
      
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-rajasthani-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 -left-24 w-80 h-80 bg-rajasthani-pink/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rajasthani-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 py-12">
        {/* Text content */}
        <div className="lg:w-1/2 z-10">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium tracking-wide text-rajasthani-red bg-rajasthani-red/10 rounded-full animate-fade-in-up">
            Authentic Rajasthani Sweets
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in-up [animation-delay:100ms]">
            Experience the <span className="text-gradient">Royal</span> Taste of Rajasthan
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl animate-fade-in-up [animation-delay:200ms]">
            Handcrafted with love and tradition, our sweets bring the authentic flavors of Rajasthan to your doorstep. Made with premium ingredients and age-old recipes passed down through generations.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:300ms]">
            <a href="/sweets" className="btn-primary">
              Explore Our Sweets
            </a>
            <a href="/about" className="btn-outline">
              Our Sweet Story
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-8 animate-fade-in-up [animation-delay:400ms]">
            <div className="flex items-center">
              <div className="bg-rajasthani-red text-white p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-muted-foreground">Happy Customers</p>
                <p className="font-semibold text-xl">10,000+</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-rajasthani-teal text-white p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="ml-4">
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
                <p className="font-semibold text-xl">Since 1975</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image collage */}
        <div className="lg:w-1/2 relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-rajasthani-gold/20 to-rajasthani-orange/20 rounded-xl blur"></div>
            
            <div className="relative bg-white rounded-xl overflow-hidden shadow-2xl animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1605197161470-123221bbb104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Assortment of Rajasthani sweets" 
                className="w-full h-auto aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-display font-bold mb-2">Traditional Rajasthani Sweets</h3>
                <p className="text-white/80">Made with authentic recipes and premium ingredients</p>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white p-2 rounded-lg shadow-xl rotate-6 animate-float animate-fade-in-up [animation-delay:600ms]">
              <img 
                src="https://images.unsplash.com/photo-1615280825886-fa817c0a06cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                alt="Rajasthani ladoo" 
                className="w-full h-full object-cover rounded"
              />
            </div>
            
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-white p-2 rounded-lg shadow-xl -rotate-3 animate-float [animation-delay:300ms] animate-fade-in-up [animation-delay:700ms]">
              <img 
                src="https://images.unsplash.com/photo-1588953936825-80353cc069af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                alt="Traditional barfi" 
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          
          <div className="absolute -bottom-12 right-12 py-4 px-6 bg-white rounded-lg shadow-xl animate-fade-in-up [animation-delay:800ms]">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${20 + i}`} 
                      alt="Customer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex text-rajasthani-yellow">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Rated 4.9 from 2k+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
