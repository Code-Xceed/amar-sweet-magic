
import React from 'react';
import { Award, Heart, Utensils } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const StorySection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-rajasthani-cream/20">
      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-rajasthani-pink/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-rajasthani-yellow/10 rounded-full blur-3xl"></div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl animate-fade-in-up">
              <img 
                src="https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Traditional sweet making" 
                className="w-full h-auto rounded-xl object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute top-12 -right-12 md:-right-16 bg-white p-6 rounded-xl shadow-xl max-w-xs animate-fade-in-up [animation-delay:300ms] z-20">
              <div className="flex items-start mb-4">
                <div className="p-3 bg-rajasthani-red/10 rounded-full text-rajasthani-red">
                  <Award size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Award Winning</h4>
                  <p className="text-sm text-muted-foreground">Recognized for quality and taste</p>
                </div>
              </div>
              <div className="border-t border-border/50 pt-4">
                <p className="text-sm italic text-muted-foreground">
                  "Our family recipes have won multiple awards at regional and national levels."
                </p>
              </div>
            </div>
            
            {/* Years badge */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 w-28 h-28 bg-rajasthani-blue rounded-full flex flex-col items-center justify-center text-white animate-fade-in-up [animation-delay:200ms] z-20 shadow-lg">
              <span className="text-3xl font-bold">48+</span>
              <span className="text-xs">Years of</span>
              <span className="text-xs">Excellence</span>
            </div>
            
            {/* Pattern overlay */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full border-8 border-rajasthani-yellow/20 -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full border-8 border-rajasthani-red/20 -z-10"></div>
          </div>
          
          {/* Text Column */}
          <div>
            <SectionHeading
              pretitle="Our Sweet Story"
              title="A Heritage of Taste Since 1975"
              description=""
              centered={false}
              decorativeLine="left"
            />
            
            <div className="space-y-6 text-muted-foreground animate-fade-in-up [animation-delay:100ms]">
              <p>
                Amar Sweet Home was founded in 1975 by Shri Ratan Lal Sharma, who started with a small shop in the heart of old Jodhpur city. With a passion for authentic Rajasthani sweets and unwavering commitment to quality, what began as a modest establishment has evolved into one of the most beloved sweet destinations in Rajasthan.
              </p>
              <p>
                For over four decades, we have preserved the authentic taste of traditional Rajasthani sweets, using recipes passed down through generations. Every sweet we craft tells a story of our rich cultural heritage and the royal legacy of Rajasthan.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="animate-fade-in-up [animation-delay:200ms]">
                <div className="p-3 bg-rajasthani-yellow/10 inline-block rounded-full text-rajasthani-yellow mb-4">
                  <Utensils size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Traditional Recipes</h4>
                <p className="text-sm text-muted-foreground">Authentic methods preserved through generations</p>
              </div>
              
              <div className="animate-fade-in-up [animation-delay:300ms]">
                <div className="p-3 bg-rajasthani-red/10 inline-block rounded-full text-rajasthani-red mb-4">
                  <Heart size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Made with Love</h4>
                <p className="text-sm text-muted-foreground">Handcrafted with passion and attention to detail</p>
              </div>
              
              <div className="animate-fade-in-up [animation-delay:400ms]">
                <div className="p-3 bg-rajasthani-teal/10 inline-block rounded-full text-rajasthani-teal mb-4">
                  <Award size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Premium Quality</h4>
                <p className="text-sm text-muted-foreground">Only the finest ingredients sourced locally</p>
              </div>
            </div>
            
            <div className="mt-10 animate-fade-in-up [animation-delay:500ms]">
              <a href="/about" className="btn-primary">
                Read Our Full Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
