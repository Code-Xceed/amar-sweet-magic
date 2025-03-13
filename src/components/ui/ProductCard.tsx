
import React from 'react';
import { cn } from '@/lib/utils';
import { Product } from '@/types';
import { ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { name, description, price, image, isNew, isPopular, weight } = product;
  const { t } = useLanguage();
  
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg border border-rajasthani-gold/20 bg-white h-full transition-all duration-300 hover-lift",
        className
      )}
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {(isNew || isPopular) && (
          <div className="absolute top-2 left-2 z-20 flex flex-col gap-2">
            {isNew && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rajasthani-blue text-white">
                {t('new')}
              </span>
            )}
            {isPopular && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rajasthani-red text-white">
                {t('bestseller')}
              </span>
            )}
          </div>
        )}
        
        <button 
          aria-label={t('addToCart')}
          className="absolute bottom-4 right-4 z-20 bg-rajasthani-deep text-white p-2 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
        >
          <ShoppingCart size={20} />
        </button>
      </div>
      
      <div className="p-4 sm:p-5">
        <h3 className="text-xl font-display font-semibold mb-1 group-hover:text-rajasthani-deep transition-colors duration-300">{name}</h3>
        
        {weight && (
          <p className="text-xs text-muted-foreground mb-2">{weight}</p>
        )}
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-dashed border-rajasthani-gold/30">
          <span className="text-xl font-bold text-rajasthani-deep">
            ₹{price}
          </span>
          
          <button 
            className="px-3 py-1.5 rounded-md bg-rajasthani-red/10 text-rajasthani-red font-medium text-sm transition-all duration-300 hover:bg-rajasthani-red hover:text-white"
          >
            {t('addToCart')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
