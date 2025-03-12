
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Testimonial } from '@/types';

const TestimonialSection: React.FC = () => {
  // Sample testimonial data
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Arjun Sharma',
      location: 'Jaipur, Rajasthan',
      content: 'The sweets from Amar Sweet Home bring back childhood memories. Their Kesar Peda tastes exactly like what my grandmother used to make. Authentic flavors that are hard to find elsewhere!',
      avatar: 'https://i.pravatar.cc/150?img=32',
      rating: 5
    },
    {
      id: '2',
      name: 'Meera Patel',
      location: 'Mumbai, Maharashtra',
      content: 'I ordered a gift pack for Diwali and was impressed by the beautiful packaging and freshness of the sweets. My relatives were delighted and kept asking where I got such delicious mithais.',
      avatar: 'https://i.pravatar.cc/150?img=25',
      rating: 5
    },
    {
      id: '3',
      name: 'Rahul Mehta',
      location: 'Delhi, NCR',
      content: 'Being away from Rajasthan, I always missed the authentic taste of home. Amar Sweet Home delivers nationwide, and their sweets taste just as fresh as buying them in-store. Highly recommend!',
      avatar: 'https://i.pravatar.cc/150?img=67',
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="section-container">
        <SectionHeading
          pretitle="Customer Love"
          title="What Our Customers Say"
          description="At Amar Sweet Home, customer satisfaction is our greatest achievement. Here's what some of our valued customers have to say about their experience with us."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-border/50 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex text-rajasthani-yellow mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill={i < testimonial.rating ? 'currentColor' : '#e5e7eb'}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-muted-foreground italic mb-6">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center">
                {testimonial.avatar && (
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-rajasthani-red/30"
                  />
                )}
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-center bg-white p-8 md:p-12 rounded-xl shadow-md border border-border/50 max-w-3xl mx-auto animate-fade-in-up [animation-delay:400ms]">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-center">
            Ready to Experience our Delicious Sweets?
          </h3>
          <p className="text-muted-foreground text-center mb-8 max-w-xl">
            Join thousands of satisfied customers who have made Amar Sweet Home their preferred choice for authentic Rajasthani sweets.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/sweets" className="btn-primary">
              Shop Now
            </a>
            <a href="/contact" className="btn-outline">
              Visit Our Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
