
// Amar Sweet Home - Main JavaScript File

// DOM Elements
const header = document.getElementById('header');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const languageToggle = document.getElementById('languageToggle');
const desktopLanguageToggle = document.getElementById('desktopLanguageToggle');
const mobileLanguageToggle = document.getElementById('mobileLanguageToggle');
const newsletterForm = document.getElementById('newsletterForm');
const successMessage = document.getElementById('successMessage');
const currentYearElement = document.getElementById('currentYear');

// Update current year in footer
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// Sticky Header
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
  
  lastScrollTop = scrollTop;
});

// Mobile Menu Toggle
if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = '';
    }
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (event) => {
  if (mobileMenu && mobileMenu.classList.contains('active')) {
    if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }
});

// Handle language toggle
const translations = {
  english: {
    // Header
    'switchToHindi': 'Switch to Hindi',
    'trackOrder': 'Track Order',
    // Hero Section
    'authentic': 'Authentic Rajasthani Sweets',
    'experience': 'Experience the <span class="text-gradient">Royal</span> Taste of Rajasthan',
    'hero-description': 'Handcrafted with love and tradition, our sweets bring the authentic flavors of Rajasthan to your doorstep. Made with premium ingredients and age-old recipes passed down through generations.',
    'explore-sweets': 'Explore Our Sweets',
    'our-story': 'Our Sweet Story',
    'happy-customers': 'Happy Customers',
    'years-excellence': 'Years of Excellence',
    'traditional-sweets': 'Traditional Rajasthani Sweets',
    'premium-ingredients': 'Made with authentic recipes and premium ingredients',
    'review-text': 'Rated 4.9 from 2k+ reviews',
    // Special Offers
    'free-shipping': 'Free Shipping',
    'free-shipping-desc': 'On orders over ₹500 within the city',
    'gift-packing': 'Gift Packing',
    'gift-packing-desc': 'Complimentary festive packaging',
    'same-day': 'Same Day Delivery',
    'same-day-desc': 'Order before 2 PM for same day delivery',
    // Best Sellers
    'customer-favorites': 'Customer Favorites',
    'best-sellers': 'Our Best Sellers',
    'best-sellers-desc': 'Discover our most popular sweets that have won the hearts of our customers over generations.',
    'bestseller': 'Bestseller',
    'new': 'New',
    'kesar-peda': 'Kesar Peda',
    'kesar-peda-desc': 'Rich milk fudge infused with saffron and cardamom, garnished with pistachios.',
    'rajasthani-ghevar': 'Rajasthani Ghevar',
    'rajasthani-ghevar-desc': 'Disc-shaped sweet cake made with flour and soaked in sugar syrup, topped with rabri.',
    'besan-ladoo': 'Besan Ladoo',
    'besan-ladoo-desc': 'Spherical sweets made from roasted gram flour, ghee, and sugar with cardamom flavor.',
    'mawa-kachori': 'Mawa Kachori',
    'mawa-kachori-desc': 'Deep-fried pastry filled with sweetened khoya and dry fruits, soaked in syrup.',
    'kalakand': 'Kalakand',
    'kalakand-desc': 'Creamy milk cake flavored with cardamom and topped with pistachios.',
    'mohan-bhog': 'Mohan Bhog',
    'mohan-bhog-desc': 'Soft and spongy sweet made from milk solids, flavored with cardamom.',
    'rajbhog': 'Rajbhog',
    'rajbhog-desc': 'Large saffron-flavored rasgullas stuffed with dry fruits and aromatic spices.',
    'churma-ladoo': 'Churma Ladoo',
    'churma-ladoo-desc': 'Traditional Rajasthani sweet made from coarsely ground wheat, ghee, and jaggery.',
    'add-to-cart': 'Add to Cart',
    'explore-collection': 'Explore Our Collection',
    'explore-desc': 'Discover more of our authentic Rajasthani sweets made with traditional recipes passed down through generations.',
    'view-all-sweets': 'View All Sweets',
    // Category Showcase
    'browse-category': 'Browse by Category',
    'explore-collections': 'Explore Our Collections',
    'categories-desc': 'Discover our wide range of authentic Rajasthani sweets categorized for your convenience.',
    'milk-sweets': 'Milk Sweets',
    'milk-sweets-desc': 'Delicious sweets made from pure milk and traditional recipes.',
    'dry-fruit-delights': 'Dry Fruit Delights',
    'dry-fruit-desc': 'Premium sweets enriched with high-quality dry fruits and nuts.',
    'festival-specials': 'Festival Specials',
    'festival-specials-desc': 'Seasonal delicacies prepared specially for festive occasions.',
    'traditional-ladoos': 'Traditional Ladoos',
    'traditional-ladoos-desc': 'Various types of spherical sweets with unique flavors and ingredients.',
    'gift-packs': 'Gift Packs',
    'gift-packs-desc': 'Beautifully packaged assortments perfect for gifting on special occasions.',
    'regional-specialties': 'Regional Specialties',
    'regional-specialties-desc': 'Unique sweets specific to different regions of Rajasthan.',
    'explore': 'Explore',
    // Story Section
    'our-sweet-story': 'Our Sweet Story',
    'heritage': 'A Heritage of Taste Since 1975',
    'story-para-1': 'Amar Sweet Home was founded in 1975 by Shri Ratan Lal Sharma, who started with a small shop in the heart of old Jodhpur city. With a passion for authentic Rajasthani sweets and unwavering commitment to quality, what began as a modest establishment has evolved into one of the most beloved sweet destinations in Rajasthan.',
    'story-para-2': 'For over four decades, we have preserved the authentic taste of traditional Rajasthani sweets, using recipes passed down through generations. Every sweet we craft tells a story of our rich cultural heritage and the royal legacy of Rajasthan.',
    'traditional-recipes': 'Traditional Recipes',
    'traditional-recipes-desc': 'Authentic methods preserved through generations',
    'made-with-love': 'Made with Love',
    'made-with-love-desc': 'Handcrafted with passion and attention to detail',
    'premium-quality': 'Premium Quality',
    'premium-quality-desc': 'Only the finest ingredients sourced locally',
    'read-full-story': 'Read Our Full Story',
    // Newsletter
    'stay-connected': 'Stay Connected',
    'sweet-updates': 'Sweet Updates in Your Inbox',
    'newsletter-desc': 'Subscribe to our newsletter for exclusive offers, festival specials, and the latest from Amar Sweet Home.',
    'subscribe': 'Subscribe',
    'thank-you': 'Thank you for subscribing! Sweet updates coming your way.',
    'privacy-note': 'By subscribing, you agree to receive our newsletter. We respect your privacy and will never share your information.',
    'timely-updates': 'Timely Updates',
    'timely-updates-desc': 'Be the first to know about seasonal specials and limited-time offers.',
    'exclusive-discounts': 'Exclusive Discounts',
    'exclusive-discounts-desc': 'Subscribers get special discounts and early access to new products.',
    'sweet-recipes': 'Sweet Recipes',
    'sweet-recipes-desc': 'Get traditional Rajasthani sweet recipes and cooking tips in your inbox.',
    // Footer
    'quick-links': 'Quick Links',
    'home': 'Home',
    'about-us': 'About Us',
    'our-sweets': 'Our Sweets',
    'contact-us': 'Contact Us',
    'footer-subscribe-text': 'Stay updated with our latest offerings and seasonal specials.',
    'subscribe-note': 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.',
    'privacy-policy': 'Privacy Policy',
    'terms': 'Terms of Service',
    'shipping': 'Shipping & Returns'
  },
  hindi: {
    // Header
    'switchToHindi': 'अंग्रेज़ी में बदलें',
    'trackOrder': 'ऑर्डर ट्रैक करें',
    // Hero Section
    'authentic': 'प्रामाणिक राजस्थानी मिठाइयाँ',
    'experience': 'राजस्थान के <span class="text-gradient">शाही</span> स्वाद का अनुभव करें',
    'hero-description': 'प्यार और परंपरा के साथ हस्तनिर्मित, हमारी मिठाइयाँ राजस्थान के प्रामाणिक स्वाद को आपके घर तक पहुंचाती हैं। उत्कृष्ट सामग्री और पीढ़ियों से चली आ रही पुरानी रेसिपी से बनाई गई।',
    'explore-sweets': 'हमारी मिठाइयाँ देखें',
    'our-story': 'हमारी मिठी कहानी',
    'happy-customers': 'खुश ग्राहक',
    'years-excellence': 'उत्कृष्टता के वर्ष',
    'traditional-sweets': 'पारंपरिक राजस्थानी मिठाइयाँ',
    'premium-ingredients': 'प्रामाणिक रेसिपी और उत्कृष्ट सामग्री से बनाई गई',
    'review-text': '2000+ समीक्षाओं से 4.9 रेटिंग',
    // Special Offers
    'free-shipping': 'मुफ्त शिपिंग',
    'free-shipping-desc': 'शहर के भीतर ₹500 से अधिक के ऑर्डर पर',
    'gift-packing': 'गिफ्ट पैकिंग',
    'gift-packing-desc': 'मुफ्त त्योहारी पैकेजिंग',
    'same-day': 'उसी दिन डिलीवरी',
    'same-day-desc': 'उसी दिन डिलीवरी के लिए दोपहर 2 बजे से पहले ऑर्डर करें',
    // Best Sellers
    'customer-favorites': 'ग्राहकों के पसंदीदा',
    'best-sellers': 'हमारे बेस्ट सेलर्स',
    'best-sellers-desc': 'हमारी सबसे लोकप्रिय मिठाइयों की खोज करें जिन्होंने पीढ़ियों से हमारे ग्राहकों का दिल जीता है।',
    'bestseller': 'बेस्टसेलर',
    'new': 'नया',
    'kesar-peda': 'केसर पेड़ा',
    'kesar-peda-desc': 'केसर और इलायची से सुगंधित दूध का हलवा, पिस्ता से सजाया हुआ।',
    'rajasthani-ghevar': 'राजस्थानी घेवर',
    'rajasthani-ghevar-desc': 'आटे से बनी डिस्क आकार की मिठाई, चाशनी में भिगोई हुई, रबड़ी के साथ परोसी जाती है।',
    'besan-ladoo': 'बेसन लड्डू',
    'besan-ladoo-desc': 'भुने हुए बेसन, घी और शक्कर से बने गोलाकार मिठाई, इलायची के स्वाद के साथ।',
    'mawa-kachori': 'मावा कचोरी',
    'mawa-kachori-desc': 'मीठे खोये और सूखे मेवों से भरी, चाशनी में भिगोई हुई, तली हुई पेस्ट्री।',
    'kalakand': 'कलाकंद',
    'kalakand-desc': 'इलायची के स्वाद वाला क्रीमी दूध केक, पिस्ता से सजाया हुआ।',
    'mohan-bhog': 'मोहन भोग',
    'mohan-bhog-desc': 'दूध के ठोस पदार्थों से बनी नरम और स्पंजी मिठाई, इलायची के स्वाद के साथ।',
    'rajbhog': 'राजभोग',
    'rajbhog-desc': 'सूखे मेवों और सुगंधित मसालों से भरे केसर के स्वाद वाले बड़े रसगुल्ले।',
    'churma-ladoo': 'चूरमा लड्डू',
    'churma-ladoo-desc': 'मोटे पिसे हुए गेहूं, घी और गुड़ से बनी पारंपरिक राजस्थानी मिठाई।',
    'add-to-cart': 'कार्ट में डालें',
    'explore-collection': 'हमारा संग्रह देखें',
    'explore-desc': 'पीढ़ियों से चली आ रही पारंपरिक रेसिपी से बनी हमारी प्रामाणिक राजस्थानी मिठाइयों के बारे में और जानें।',
    'view-all-sweets': 'सभी मिठाइयाँ देखें',
    // Category Showcase
    'browse-category': 'श्रेणी के अनुसार ब्राउज़ करें',
    'explore-collections': 'हमारे संग्रह का अन्वेषण करें',
    'categories-desc': 'आपकी सुविधा के लिए वर्गीकृत हमारी विस्तृत श्रृंखला की प्रामाणिक राजस्थानी मिठाइयों का पता लगाएं।',
    'milk-sweets': 'दूध की मिठाइयाँ',
    'milk-sweets-desc': 'शुद्ध दूध और पारंपरिक रेसिपी से बनी स्वादिष्ट मिठाइयाँ।',
    'dry-fruit-delights': 'ड्राई फ्रूट डिलाइट्स',
    'dry-fruit-desc': 'उच्च गुणवत्ता वाले सूखे मेवों और नट्स से समृद्ध प्रीमियम मिठाइयाँ।',
    'festival-specials': 'त्योहार विशेष',
    'festival-specials-desc': 'त्योहारी अवसरों के लिए विशेष रूप से तैयार मौसमी व्यंजन।',
    'traditional-ladoos': 'पारंपरिक लड्डू',
    'traditional-ladoos-desc': 'अनूठे स्वाद और सामग्री के साथ विभिन्न प्रकार के गोलाकार मिठाइयाँ।',
    'gift-packs': 'गिफ्ट पैक',
    'gift-packs-desc': 'विशेष अवसरों पर उपहार देने के लिए बेहतरीन पैकेज किए गए मिठाई संग्रह।',
    'regional-specialties': 'क्षेत्रीय विशेषताएं',
    'regional-specialties-desc': 'राजस्थान के विभिन्न क्षेत्रों की अनूठी मिठाइयाँ।',
    'explore': 'एक्सप्लोर',
    // Story Section
    'our-sweet-story': 'हमारी मीठी कहानी',
    'heritage': '1975 से स्वाद की विरासत',
    'story-para-1': 'अमर स्वीट होम की स्थापना 1975 में श्री रतन लाल शर्मा द्वारा की गई थी, जिन्होंने पुराने जोधपुर शहर के केंद्र में एक छोटी सी दुकान के साथ शुरुआत की थी। प्रामाणिक राजस्थानी मिठाइयों के लिए जुनून और गुणवत्ता के प्रति अटूट प्रतिबद्धता के साथ, जो एक मामूली प्रतिष्ठान के रूप में शुरू हुआ था, वह राजस्थान के सबसे प्रिय मिठाई स्थलों में से एक में विकसित हो गया है।',
    'story-para-2': 'चार दशकों से अधिक समय से, हमने पारंपरिक राजस्थानी मिठाइयों के प्रामाणिक स्वाद को संरक्षित किया है, पीढ़ियों से चली आ रही रेसिपी का उपयोग करते हुए। हम जो हर मिठाई बनाते हैं वह हमारी समृद्ध सांस्कृतिक विरासत और राजस्थान की शाही विरासत की कहानी बताती है।',
    'traditional-recipes': 'पारंपरिक व्यंजन',
    'traditional-recipes-desc': 'पीढ़ियों से संरक्षित प्रामाणिक विधियां',
    'made-with-love': 'प्यार से बनाया गया',
    'made-with-love-desc': 'जुनून और विवरण पर ध्यान देने के साथ हस्तनिर्मित',
    'premium-quality': 'प्रीमियम क्वालिटी',
    'premium-quality-desc': 'केवल स्थानीय स्तर पर सोर्स की गई सर्वोत्तम सामग्री',
    'read-full-story': 'हमारी पूरी कहानी पढ़ें',
    // Newsletter
    'stay-connected': 'जुड़े रहें',
    'sweet-updates': 'अपने इनबॉक्स में मीठे अपडेट्स',
    'newsletter-desc': 'एक्सक्लूसिव ऑफर, फेस्टिवल स्पेशल और अमर स्वीट होम के लेटेस्ट अपडेट्स के लिए हमारे न्यूज़लेटर की सदस्यता लें।',
    'subscribe': 'सब्सक्राइब',
    'thank-you': 'सब्सक्राइब करने के लिए धन्यवाद! मीठे अपडेट्स आपके पास आ रहे हैं।',
    'privacy-note': 'सब्सक्राइब करके, आप हमारा न्यूज़लेटर प्राप्त करने के लिए सहमत होते हैं। हम आपकी गोपनीयता का सम्मान करते हैं और कभी भी आपकी जानकारी साझा नहीं करेंगे।',
    'timely-updates': 'समय पर अपडेट',
    'timely-updates-desc': 'मौसमी विशेष और सीमित समय के ऑफर के बारे में सबसे पहले जानें।',
    'exclusive-discounts': 'एक्सक्लूसिव डिस्काउंट',
    'exclusive-discounts-desc': 'सब्सक्राइबर्स को विशेष छूट और नए उत्पादों तक जल्दी पहुंच मिलती है।',
    'sweet-recipes': 'मिठाई रेसिपी',
    'sweet-recipes-desc': 'अपने इनबॉक्स में पारंपरिक राजस्थानी मिठाई रेसिपी और कुकिंग टिप्स पाएं।',
    // Footer
    'quick-links': 'त्वरित लिंक्स',
    'home': 'होम',
    'about-us': 'हमारे बारे में',
    'our-sweets': 'हमारी मिठाइयाँ',
    'contact-us': 'संपर्क करें',
    'footer-subscribe-text': 'हमारी नवीनतम पेशकशों और मौसमी विशेषताओं के अपडेट प्राप्त करें।',
    'subscribe-note': 'सब्सक्राइब करके, आप हमारी गोपनीयता नीति से सहमत होते हैं और हमारी कंपनी से अपडेट प्राप्त करने के लिए सहमति देते हैं।',
    'privacy-policy': 'गोपनीयता नीति',
    'terms': 'सेवा की शर्तें',
    'shipping': 'शिपिंग और रिटर्न'
  }
};

let currentLanguage = 'english';

// Function to translate the website
function translateWebsite(language) {
  const elements = document.querySelectorAll('[data-lang-key]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-lang-key');
    if (translations[language][key]) {
      if (key === 'experience' || key === 'hero-description') {
        element.innerHTML = translations[language][key];
      } else {
        element.textContent = translations[language][key];
      }
    }
  });
  
  // Update language toggle text
  const allLangToggles = [languageToggle, desktopLanguageToggle, mobileLanguageToggle];
  allLangToggles.forEach(toggle => {
    if (toggle) {
      const langTextElement = toggle.querySelector('.language-text');
      if (langTextElement) {
        langTextElement.textContent = translations[language]['switchToHindi'];
      }
    }
  });
}

// Handle language toggle click
function setupLanguageToggle(toggle) {
  if (toggle) {
    toggle.addEventListener('click', () => {
      currentLanguage = currentLanguage === 'english' ? 'hindi' : 'english';
      translateWebsite(currentLanguage);
    });
  }
}

// Setup all language toggles
setupLanguageToggle(languageToggle);
setupLanguageToggle(desktopLanguageToggle);
setupLanguageToggle(mobileLanguageToggle);

// Newsletter Form Submission
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('emailInput');
    
    if (emailInput && emailInput.value) {
      // Simulate form submission - in a real website, this would be an API call
      setTimeout(() => {
        emailInput.value = '';
        if (successMessage) {
          successMessage.classList.remove('hidden');
          
          // Hide the message after 5 seconds
          setTimeout(() => {
            successMessage.classList.add('hidden');
          }, 5000);
        }
      }, 1000);
    }
  });
}

// Add to cart functionality
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart, .add-to-cart-btn');
  const cartCount = document.querySelector('.cart-count');
  let cartItems = 0;
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartItems++;
      if (cartCount) {
        cartCount.textContent = cartItems;
      }
      
      // Optional: Animate the cart icon
      const cartIcon = document.querySelector('.cart-icon');
      if (cartIcon) {
        cartIcon.classList.add('animate__animated', 'animate__rubberBand');
        setTimeout(() => {
          cartIcon.classList.remove('animate__animated', 'animate__rubberBand');
        }, 1000);
      }
    });
  });
});

// Initialize the website with English language on load
document.addEventListener('DOMContentLoaded', () => {
  translateWebsite('english');
});

// Initialize any image sliders or carousels if needed
// This is a placeholder for future implementation

// Create placeholder for the images pattern background
if (document.querySelector('.background-pattern')) {
  // This would typically be an SVG or image pattern
  // For now, we're using a CSS background in styles.css
}

