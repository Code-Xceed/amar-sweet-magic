
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import BestSellers from '@/components/home/BestSellers';
import CategoryShowcase from '@/components/home/CategoryShowcase';
import StorySection from '@/components/home/StorySection';
import TestimonialSection from '@/components/home/TestimonialSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import SpecialOffers from '@/components/home/SpecialOffers';
import { LanguageProvider } from '@/contexts/LanguageContext';

const Index = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen relative">
        <Header />
        <main>
          <Hero />
          <SpecialOffers />
          <BestSellers />
          <FeaturedProducts />
          <CategoryShowcase />
          <StorySection />
          <TestimonialSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
