
import React from 'react';
import { LucideShoppingBag } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import ProductCard from '../ui/ProductCard';
import { Product } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from '../ui/Logo';

const BestSellers: React.FC = () => {
  const { t } = useLanguage();
  
  // Extended product data with more sweets
  const bestSellers: Product[] = [
    {
      id: '1',
      name: t('kesarPeda'),
      description: t('kesarPedaDesc'),
      price: 450,
      weight: '500g',
      image: 'https://images.unsplash.com/photo-1615280825886-fa817c0a06cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: t('milkSweets'),
      isPopular: true
    },
    {
      id: '2',
      name: t('rajasthaniGhevar'),
      description: t('rajasthaniGhevarDesc'),
      price: 550,
      weight: '400g',
      image: 'https://images.unsplash.com/photo-1588953936825-80353cc069af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: t('festivalSpecials'),
      isNew: true
    },
    {
      id: '3',
      name: t('besanLadoo'),
      description: t('besanLadooDesc'),
      price: 400,
      weight: '500g',
      image: 'https://images.unsplash.com/photo-1589249148049-5c359042a1ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: t('ladooVarieties'),
      isPopular: true
    },
    {
      id: '4',
      name: t('mawaKachori'),
      description: t('mawaKachoriDesc'),
      price: 600,
      weight: '350g',
      image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: t('regionalSpecialties'),
      isPopular: true
    },
    {
      id: '5',
      name: t('kalakand'),
      description: t('kalakandDesc'),
      price: 520,
      weight: '450g',
      image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: t('milkSweets'),
      isNew: true
    },
    {
      id: '6',
      name: t('mohanBhog'),
      description: t('mohanBhogDesc'),
      price: 480,
      weight: '500g',
      image: 'https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: t('milkSweets'),
      isPopular: true
    },
    {
      id: '7',
      name: t('rajbhog'),
      description: t('rajbhogDesc'),
      price: 580,
      weight: '500g',
      image: 'https://images.unsplash.com/photo-1615484477778-ca3b77940c25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: t('milkSweets'),
      isNew: true
    },
    {
      id: '8',
      name: t('churmaLadoo'),
      description: t('churmaLadooDesc'),
      price: 420,
      weight: '450g',
      image: 'https://images.unsplash.com/photo-1613929905911-29b25841430b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      category: t('regionalSpecialties'),
      isPopular: true
    }
  ];

  return (
    <section className="py-20 bg-janta-gradient">
      <div className="section-container">
        <div className="flex flex-col items-center mb-12">
          <Logo variant="primary" size="sm" className="mb-6" />
          <SectionHeading
            pretitle={t('customerFavorites')}
            title={t('bestSellers')}
            description={t('bestSellersDesc')}
          />
        </div>
        
        <div className="relative pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {bestSellers.slice(0, 8).map((product, index) => (
              <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="absolute -bottom-10 -right-10 rotate-12 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" 
              alt="Decorative sweets" 
              className="w-28 h-28 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>
          
          <div className="absolute -bottom-6 left-1/3 -rotate-6 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" 
              alt="Decorative sweets" 
              className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>
        </div>
        
        <div className="mt-16 text-center animate-fade-in-up flex flex-col items-center">
          <div className="inline-block p-2 bg-rajasthani-deep/10 rounded-full mb-6">
            <div className="bg-rajasthani-deep text-white p-4 rounded-full">
              <LucideShoppingBag size={24} />
            </div>
          </div>
          <h3 className="text-2xl font-display font-bold mb-4">{t('exploreCollection')}</h3>
          <p className="text-muted-foreground max-w-xl mb-6 mx-auto">
            {t('exploreDesc')}
          </p>
          <a 
            href="/sweets" 
            className="btn-primary"
          >
            {t('viewAllSweets')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
