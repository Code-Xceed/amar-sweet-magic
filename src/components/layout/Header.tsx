
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Phone, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('sweets'), href: '/sweets' },
    { name: t('categories'), href: '/categories' },
    { name: t('gallery'), href: '/gallery' },
    { name: t('contact'), href: '/contact' }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className={cn(
          "py-1 border-b border-border/50 flex items-center justify-between text-sm",
          isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
        )}>
          <div className="text-muted-foreground">
            <span className="hidden sm:inline">{t('since')}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </a>
            <span className="h-4 w-px bg-border" />
            <a href="/order-tracking" className="hover:text-primary transition-colors">{t('trackOrder')}</a>
            <span className="h-4 w-px bg-border" />
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 hover:text-rajasthani-pink transition-colors"
            >
              <Globe size={14} />
              <span className="text-rajasthani-pink hover:underline">{t('switchLanguage')}</span>
            </button>
          </div>
        </div>
        
        {/* Main navbar */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/" className="mr-8">
              <h1 className="text-2xl md:text-3xl font-display font-bold text-gradient">
                Amar Sweet Home
              </h1>
            </a>
            
            <nav className="hidden lg:flex space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/90 hover:text-primary font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-rajasthani-orange/10 text-rajasthani-orange rounded-full text-sm font-medium hover:bg-rajasthani-orange/20 transition-colors"
            >
              <Globe size={16} />
              <span>{t('switchLanguage')}</span>
            </button>
            
            <a 
              href="/cart" 
              className="relative p-2 text-foreground/80 hover:text-primary transition-colors"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-rajasthani-red text-white text-xs">
                0
              </span>
            </a>
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 lg:hidden text-foreground/80 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "lg:hidden fixed inset-x-0 top-[calc(5rem-1px)] bg-white z-40 border-t border-border/50 overflow-hidden transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "max-h-[calc(100vh-5rem)] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="py-2 text-foreground/90 hover:text-primary font-medium transition-colors duration-200 border-b border-border/30 last:border-b-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 py-3 text-rajasthani-orange font-medium"
            >
              <Globe size={18} />
              {t('switchLanguage')}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
