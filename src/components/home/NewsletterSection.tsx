
import React, { useState } from 'react';
import SectionHeading from '../ui/SectionHeading';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // This would normally connect to a backend
      console.log('Newsletter signup:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset submission status after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };
  
  return (
    <section className="py-20 bg-rajasthani-cream/50">
      <div className="section-container">
        <SectionHeading
          pretitle="Stay Connected"
          title="Sweet Updates in Your Inbox"
          description="Subscribe to our newsletter for exclusive offers, festival specials, and the latest from Amar Sweet Home."
        />
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-rajasthani-gold/20">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-rajasthani-red/30"
                  required
                />
                <button 
                  type="submit"
                  className="btn-primary bg-rajasthani-red hover:bg-rajasthani-red/90 text-white"
                >
                  Subscribe
                </button>
              </div>
              
              {isSubmitted && (
                <p className="text-rajasthani-green font-medium text-center animate-fade-in">
                  Thank you for subscribing! Sweet updates coming your way.
                </p>
              )}
              
              <p className="text-xs text-muted-foreground text-center pt-2">
                By subscribing, you agree to receive our newsletter. We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="bg-rajasthani-red text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Timely Updates</h3>
              <p className="text-muted-foreground">Be the first to know about seasonal specials and limited-time offers.</p>
            </div>
            
            <div className="animate-fade-in-up [animation-delay:100ms]">
              <div className="bg-rajasthani-orange text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Exclusive Discounts</h3>
              <p className="text-muted-foreground">Subscribers get special discounts and early access to new products.</p>
            </div>
            
            <div className="animate-fade-in-up [animation-delay:200ms]">
              <div className="bg-rajasthani-teal text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Sweet Recipes</h3>
              <p className="text-muted-foreground">Get traditional Rajasthani sweet recipes and cooking tips in your inbox.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
