
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define language types
export type Language = 'en' | 'hi';

// Define context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Translations object containing all text in both languages
export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'home': 'Home',
    'about': 'About Us',
    'sweets': 'Our Sweets',
    'categories': 'Categories',
    'gallery': 'Gallery',
    'contact': 'Contact',
    'trackOrder': 'Track Order',
    'since': 'Authentic Rajasthani Sweets Since 1975',
    
    // Special Offers
    'freeShipping': 'Free Shipping',
    'freeShippingDesc': 'On orders above ₹999',
    'giftPacking': 'Special Gift Packing',
    'giftPackingDesc': 'For all occasions',
    'sameDay': 'Same-Day Delivery',
    'sameDayDesc': 'Order before 2 PM',
    
    // Best Sellers
    'customerFavorites': 'Customer Favorites',
    'bestSellers': 'Our Best Sellers',
    'bestSellersDesc': 'Discover our most beloved creations that have been delighting customers for generations. Handcrafted with love and authentic Rajasthani recipes.',
    'exploreCollection': 'Explore Complete Collection',
    'exploreDesc': 'We have over 100+ varieties of authentic Rajasthani sweets, snacks, and savories that will tantalize your taste buds.',
    'viewAllSweets': 'View All Sweets',
    
    // Featured Products
    'seasonSpecials': 'This Season\'s Specials',
    'festiveCollection': 'Festive Collection 2023',
    'festiveDesc': 'Celebrate the season of joy with our special collection of handcrafted sweets. Perfect for gifting or adding sweetness to your festivities.',
    'viewSeasonals': 'View All Seasonal Specials',
    'premiumGiftBoxes': 'Premium Gift Boxes',
    'startingFrom': 'Starting from ₹999',
    'shopNow': 'Shop Now',
    'limitedOffer': 'Limited Time Offer!',
    'addToCart': 'Add to Cart',
    
    // Categories
    'browseCategory': 'Browse By Category',
    'exploreCollections': 'Explore Our Sweet Collections',
    'categoriesDesc': 'From traditional favorites to seasonal specialties, discover the diverse range of authentic Rajasthani sweets we offer.',
    'explore': 'Explore Collection',
    
    // Testimonials
    'customerLove': 'Customer Love',
    'customerSay': 'What Our Customers Say',
    'testimonialDesc': 'At Amar Sweet Home, customer satisfaction is our greatest achievement. Here\'s what some of our valued customers have to say about their experience with us.',
    'readyExperience': 'Ready to Experience our Delicious Sweets?',
    'joinThousands': 'Join thousands of satisfied customers who have made Amar Sweet Home their preferred choice for authentic Rajasthani sweets.',
    'visitStore': 'Visit Our Store',
    
    // Newsletter
    'stayConnected': 'Stay Connected',
    'sweetUpdates': 'Sweet Updates in Your Inbox',
    'newsletterDesc': 'Subscribe to our newsletter for exclusive offers, festival specials, and the latest from Amar Sweet Home.',
    'enterEmail': 'Enter your email address',
    'subscribe': 'Subscribe',
    'thankSubscribe': 'Thank you for subscribing! Sweet updates coming your way.',
    'privacyNotice': 'By subscribing, you agree to receive our newsletter. We respect your privacy and will never share your information.',
    'timelyUpdates': 'Timely Updates',
    'timelyDesc': 'Be the first to know about seasonal specials and limited-time offers.',
    'exclusiveDiscounts': 'Exclusive Discounts',
    'discountsDesc': 'Subscribers get special discounts and early access to new products.',
    'sweetRecipes': 'Sweet Recipes',
    'recipesDesc': 'Get traditional Rajasthani sweet recipes and cooking tips in your inbox.',
    
    // Language
    'switchLanguage': 'हिंदी में देखें',
  },
  hi: {
    // Header
    'home': 'होम',
    'about': 'हमारे बारे में',
    'sweets': 'हमारी मिठाइयाँ',
    'categories': 'श्रेणियाँ',
    'gallery': 'गैलरी',
    'contact': 'संपर्क',
    'trackOrder': 'ऑर्डर ट्रैक करें',
    'since': '1975 से प्रामाणिक राजस्थानी मिठाइयाँ',
    
    // Special Offers
    'freeShipping': 'मुफ्त शिपिंग',
    'freeShippingDesc': '₹999 से अधिक के ऑर्डर पर',
    'giftPacking': 'विशेष उपहार पैकिंग',
    'giftPackingDesc': 'सभी अवसरों के लिए',
    'sameDay': 'उसी दिन डिलीवरी',
    'sameDayDesc': 'दोपहर 2 बजे से पहले ऑर्डर करें',
    
    // Best Sellers
    'customerFavorites': 'ग्राहकों के पसंदीदा',
    'bestSellers': 'हमारे बेस्टसेलर',
    'bestSellersDesc': 'हमारी सबसे प्रिय रचनाओं का अनुभव करें जो पीढ़ियों से ग्राहकों को प्रसन्न कर रही हैं। प्यार और प्रामाणिक राजस्थानी व्यंजनों के साथ हस्तनिर्मित।',
    'exploreCollection': 'पूरा संग्रह देखें',
    'exploreDesc': 'हमारे पास 100+ से अधिक प्रकार की प्रामाणिक राजस्थानी मिठाइयाँ, स्नैक्स और नमकीन हैं जो आपके स्वाद को मंत्रमुग्ध करेंगे।',
    'viewAllSweets': 'सभी मिठाइयाँ देखें',
    
    // Featured Products
    'seasonSpecials': 'इस मौसम के विशेष',
    'festiveCollection': 'त्योहारी संग्रह 2023',
    'festiveDesc': 'हस्तनिर्मित मिठाइयों के हमारे विशेष संग्रह के साथ खुशी के मौसम का जश्न मनाएं। उपहार देने या अपने त्योहारों में मिठास जोड़ने के लिए आदर्श।',
    'viewSeasonals': 'सभी मौसमी विशेष देखें',
    'premiumGiftBoxes': 'प्रीमियम गिफ्ट बॉक्स',
    'startingFrom': '₹999 से शुरू',
    'shopNow': 'अभी खरीदें',
    'limitedOffer': 'सीमित समय का ऑफर!',
    'addToCart': 'कार्ट में जोड़ें',
    
    // Categories
    'browseCategory': 'श्रेणी के अनुसार ब्राउज़ करें',
    'exploreCollections': 'हमारे मिठाई संग्रह का अन्वेषण करें',
    'categoriesDesc': 'पारंपरिक पसंदीदा से लेकर मौसमी विशेषताओं तक, हमारे द्वारा पेश किए जाने वाले प्रामाणिक राजस्थानी मिठाइयों की विविध श्रृंखला का पता लगाएं।',
    'explore': 'संग्रह देखें',
    
    // Testimonials
    'customerLove': 'ग्राहक प्रेम',
    'customerSay': 'हमारे ग्राहक क्या कहते हैं',
    'testimonialDesc': 'अमर स्वीट होम में, ग्राहक संतुष्टि हमारी सबसे बड़ी उपलब्धि है। यहां हमारे कुछ मूल्यवान ग्राहकों का हमारे साथ अनुभव के बारे में कहना है।',
    'readyExperience': 'हमारी स्वादिष्ट मिठाइयों का अनुभव करने के लिए तैयार हैं?',
    'joinThousands': 'हजारों संतुष्ट ग्राहकों में शामिल हों जिन्होंने अमर स्वीट होम को प्रामाणिक राजस्थानी मिठाइयों के लिए अपनी पसंदीदा विकल्प बनाया है।',
    'visitStore': 'हमारे स्टोर पर जाएं',
    
    // Newsletter
    'stayConnected': 'जुड़े रहें',
    'sweetUpdates': 'आपके इनबॉक्स में मीठे अपडेट',
    'newsletterDesc': 'विशेष ऑफर, त्योहार विशेष और अमर स्वीट होम से नवीनतम जानकारी के लिए हमारे न्यूज़लेटर की सदस्यता लें।',
    'enterEmail': 'अपना ईमेल पता दर्ज करें',
    'subscribe': 'सदस्यता लें',
    'thankSubscribe': 'सदस्यता लेने के लिए धन्यवाद! मीठे अपडेट आपके रास्ते में हैं।',
    'privacyNotice': 'सदस्यता लेकर, आप हमारा न्यूज़लेटर प्राप्त करने के लिए सहमत होते हैं। हम आपकी गोपनीयता का सम्मान करते हैं और कभी भी आपकी जानकारी साझा नहीं करेंगे।',
    'timelyUpdates': 'समय पर अपडेट',
    'timelyDesc': 'मौसमी विशेष और सीमित समय के ऑफर के बारे में सबसे पहले जानें।',
    'exclusiveDiscounts': 'विशेष छूट',
    'discountsDesc': 'सदस्यों को विशेष छूट और नए उत्पादों तक पहले पहुंच मिलती है।',
    'sweetRecipes': 'मीठी रेसिपी',
    'recipesDesc': 'अपने इनबॉक्स में पारंपरिक राजस्थानी मिठाई रेसिपी और कुकिंग टिप्स प्राप्त करें।',
    
    // Language
    'switchLanguage': 'View in English',
  }
};

// Create Provider component
export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);
