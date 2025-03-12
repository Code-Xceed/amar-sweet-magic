
import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About column */}
          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-display font-bold mb-4 text-rajasthani-yellow">Amar Sweet Home</h2>
            <p className="mb-6 text-background/80">
              Delighting taste buds with authentic Rajasthani sweets since 1975. Our recipes have been passed down for generations, preserving the rich heritage of traditional Indian confections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-rajasthani-yellow transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-rajasthani-yellow transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-rajasthani-yellow transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="animate-fade-in-up [animation-delay:100ms]">
            <h3 className="text-xl font-display font-semibold mb-4 text-rajasthani-yellow">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Sweets', 'Best Sellers', 'Gift Packs', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-background/80 hover:text-rajasthani-yellow transition-colors inline-block py-1 relative before:absolute before:w-0 before:h-px before:bottom-0 before:left-0 before:bg-rajasthani-yellow hover:before:w-full before:transition-all before:duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <h3 className="text-xl font-display font-semibold mb-4 text-rajasthani-yellow">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-rajasthani-yellow" />
                <span className="text-background/80">123 Sweet Lane, Jodhpur Old City, Rajasthan, India - 342001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-rajasthani-yellow" />
                <a href="tel:+919876543210" className="text-background/80 hover:text-rajasthani-yellow transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-rajasthani-yellow" />
                <a href="mailto:info@amarsweethome.com" className="text-background/80 hover:text-rajasthani-yellow transition-colors">
                  info@amarsweethome.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-3 mt-1 text-rajasthani-yellow" />
                <div className="text-background/80">
                  <p>Monday - Saturday: 8:00 AM - 9:00 PM</p>
                  <p>Sunday: 9:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="animate-fade-in-up [animation-delay:300ms]">
            <h3 className="text-xl font-display font-semibold mb-4 text-rajasthani-yellow">Subscribe</h3>
            <p className="mb-4 text-background/80">Stay updated with our latest offerings and seasonal specials.</p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="flex-grow px-4 py-2 bg-background/10 border border-background/20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-rajasthani-yellow/50 text-background"
                  required
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-rajasthani-yellow text-foreground font-medium rounded-r-md hover:bg-rajasthani-yellow/90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-xs text-background/60">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</p>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 text-center text-background/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Amar Sweet Home. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-rajasthani-yellow transition-colors">Privacy Policy</a> | 
            <a href="#" className="hover:text-rajasthani-yellow transition-colors mx-2">Terms of Service</a> | 
            <a href="#" className="hover:text-rajasthani-yellow transition-colors">Shipping & Returns</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
