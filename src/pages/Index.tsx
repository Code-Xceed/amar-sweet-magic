
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import BestSellers from '@/components/home/BestSellers';
import CategoryShowcase from '@/components/home/CategoryShowcase';
import StorySection from '@/components/home/StorySection';
import TestimonialSection from '@/components/home/TestimonialSection';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Header />
      <main>
        <Hero />
        <BestSellers />
        <CategoryShowcase />
        <StorySection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
