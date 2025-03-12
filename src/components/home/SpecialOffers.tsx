
import React from 'react';
import { Gift, Truck, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SpecialOffers: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 bg-gradient-to-r from-rajasthani-deep to-rajasthani-maroon text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-white/20">
          <div className="flex items-center justify-center p-4 hover:bg-white/10 transition-colors rounded-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-rajasthani-orange/20 rounded-full blur-md"></div>
              <div className="relative">
                <Truck className="w-10 h-10 mr-4 text-rajasthani-yellow filter drop-shadow-gold" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-rajasthani-cream">{t('freeShipping')}</h3>
              <p className="text-white/80 text-sm">{t('freeShippingDesc')}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center p-4 hover:bg-white/10 transition-colors rounded-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-rajasthani-yellow/20 rounded-full blur-md"></div>
              <div className="relative">
                <Gift className="w-10 h-10 mr-4 text-rajasthani-gold filter drop-shadow-gold" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-rajasthani-cream">{t('giftPacking')}</h3>
              <p className="text-white/80 text-sm">{t('giftPackingDesc')}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center p-4 hover:bg-white/10 transition-colors rounded-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-rajasthani-cream/20 rounded-full blur-md"></div>
              <div className="relative">
                <Clock className="w-10 h-10 mr-4 text-rajasthani-pink filter drop-shadow-gold" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-rajasthani-cream">{t('sameDay')}</h3>
              <p className="text-white/80 text-sm">{t('sameDayDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
