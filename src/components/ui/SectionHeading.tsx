
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  pretitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  decorativeLine?: 'left' | 'right' | 'both' | 'none';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  pretitle,
  title,
  description,
  centered = true,
  className,
  titleClassName,
  descriptionClassName,
  decorativeLine = 'both',
}) => {
  return (
    <div 
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      {pretitle && (
        <div className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full animate-fade-in-up">
          {pretitle}
        </div>
      )}
      
      <h2 
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4",
          decorativeLine !== 'none' && "decorative-line",
          decorativeLine === 'left' && "decorative-line-left",
          decorativeLine === 'right' && "decorative-line-right", 
          decorativeLine === 'both' && "decorative-line-both",
          centered && "inline-block",
          "animate-fade-in-up [animation-delay:100ms]",
          titleClassName
        )}
      >
        {title}
      </h2>
      
      {description && (
        <p 
          className={cn(
            "text-muted-foreground max-w-2xl",
            centered && "mx-auto",
            "animate-fade-in-up [animation-delay:200ms]",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
