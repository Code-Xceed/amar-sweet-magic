
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'primary' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  variant = 'primary', 
  size = 'md',
  className 
}) => {
  const sizeClasses = {
    sm: 'text-lg md:text-xl',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl lg:text-4xl'
  };

  const variantClasses = {
    primary: 'text-rajasthani-deep',
    light: 'text-white',
    dark: 'text-rajasthani-deep'
  };
  
  return (
    <div className={cn(
      "font-display font-bold flex items-center gap-2",
      sizeClasses[size],
      variantClasses[variant],
      className
    )}>
      <div className="relative">
        <div className={cn(
          "relative z-10 flex items-center justify-center rounded-full overflow-hidden",
          size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-10 h-10' : 'w-12 h-12'
        )}>
          <svg 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <circle cx="20" cy="20" r="20" fill={variant === 'light' ? '#FFF8E1' : '#5B1510'} />
            <path d="M20 10C14.48 10 10 14.48 10 20C10 25.52 14.48 30 20 30C25.52 30 30 25.52 30 20C30 14.48 25.52 10 20 10ZM20 28C15.59 28 12 24.41 12 20C12 15.59 15.59 12 20 12C24.41 12 28 15.59 28 20C28 24.41 24.41 28 20 28Z" fill={variant === 'light' ? '#5B1510' : '#D8B787'} />
            <path d="M20 15C17.24 15 15 17.24 15 20C15 22.76 17.24 25 20 25C22.76 25 25 22.76 25 20C25 17.24 22.76 15 20 15Z" fill={variant === 'light' ? '#8A3324' : '#FFF8E1'} />
          </svg>
        </div>
        <div className={cn(
          "absolute inset-0 blur-md opacity-40 rounded-full",
          variant === 'light' ? 'bg-rajasthani-gold' : 'bg-rajasthani-deep'
        )}></div>
      </div>
      <span className={cn(
        "tracking-tight",
        variant === 'primary' && "bg-clip-text text-transparent bg-gradient-to-r from-rajasthani-deep to-rajasthani-rust",
        variant === 'light' && "text-white",
        variant === 'dark' && "text-rajasthani-deep"
      )}>
        Amar Sweet Home
      </span>
    </div>
  );
};

export default Logo;
