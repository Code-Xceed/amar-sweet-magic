
import React from 'react';
import { Gift, Truck, Clock } from 'lucide-react';

const SpecialOffers: React.FC = () => {
  return (
    <section className="py-10 bg-rajasthani-deep text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x divide-white/20">
          <div className="flex items-center justify-center p-4">
            <Truck className="w-8 h-8 mr-4 text-rajasthani-orange" />
            <div>
              <h3 className="font-semibold text-lg">Free Shipping</h3>
              <p className="text-white/80 text-sm">On orders above ₹999</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center p-4">
            <Gift className="w-8 h-8 mr-4 text-rajasthani-yellow" />
            <div>
              <h3 className="font-semibold text-lg">Special Gift Packing</h3>
              <p className="text-white/80 text-sm">For all occasions</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center p-4">
            <Clock className="w-8 h-8 mr-4 text-rajasthani-cream" />
            <div>
              <h3 className="font-semibold text-lg">Same-Day Delivery</h3>
              <p className="text-white/80 text-sm">Order before 2 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
