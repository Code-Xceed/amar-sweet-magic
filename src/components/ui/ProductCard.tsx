
import React from 'react';
import { cn } from '@/lib/utils';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  const { name, description, price, image, isNew, isPopular, weight } = product;
  
  return (
    <div 
      className={cn(
        "group relative overflow-hidden rounded-lg border border-border/50 bg-card h-full transition-all duration-300 hover-lift",
        className
      )}
    >
      <div className="aspect-square overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {(isNew || isPopular) && (
        <div className="absolute top-2 left-2 z-20">
          {isNew && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rajasthani-blue text-white mr-2">
              New
            </span>
          )}
          {isPopular && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rajasthani-red text-white">
              Popular
            </span>
          )}
        </div>
      )}
      
      <div className="p-4 sm:p-6">
        <h3 className="text-xl font-display font-semibold mb-2">{name}</h3>
        
        {weight && (
          <p className="text-xs text-muted-foreground mb-2">{weight}</p>
        )}
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-semibold text-rajasthani-red">
            ₹{price.toFixed(2)}
          </span>
          
          <button 
            className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground font-medium text-sm transition-all duration-300 hover:bg-primary/90"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
