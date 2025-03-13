// Sweets Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Filter functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  const activeFilters = document.querySelector('.active-filters');
  const sortSelect = document.getElementById('sort-select');
  
  // Quick view modal
  const quickViewModal = document.getElementById('quickViewModal');
  const quickViewButtons = document.querySelectorAll('.quick-view-btn');
  const closeModalButton = document.querySelector('.close-modal');
  const modalMainImage = document.getElementById('modalMainImage');
  const modalProductTitle = document.getElementById('modalProductTitle');
  const modalProductWeight = document.getElementById('modalProductWeight');
  const modalProductPrice = document.getElementById('modalProductPrice');
  const modalProductDescription = document.getElementById('modalProductDescription');
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  // Quantity selector
  const decreaseQtyBtn = document.querySelector('.decrease-qty');
  const increaseQtyBtn = document.querySelector('.increase-qty');
  const quantityInput = document.getElementById('productQuantity');
  
  // Variant buttons
  const variantButtons = document.querySelectorAll('.variant-btn');
  
  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const addToCartIconButtons = document.querySelectorAll('.add-to-cart-icon');
  const modalAddToCartButton = document.getElementById('modalAddToCart');
  const cartNotification = document.getElementById('cartNotification');
  const closeNotificationButton = document.querySelector('.close-notification');
  
  // Load more button
  const loadMoreButton = document.querySelector('.load-more-btn');
  
  // Product data (would typically come from a database)
  const productData = {
    'kesar-peda': {
      name: 'Kesar Peda',
      weight: '250g',
      price: 350,
      description: 'Traditional milk-based sweet flavored with saffron and cardamom. Made with pure ghee and milk, this delicacy is perfect for festivals and special occasions.',
      image: 'images/kesar-peda.jpg'
    },
    'rajasthani-ghevar': {
      name: 'Rajasthani Ghevar',
      weight: '500g',
      price: 450,
      description: 'Disc-shaped sweet cake made with flour and soaked in sugar syrup. A traditional Rajasthani delicacy especially popular during festivals like Teej and Raksha Bandhan.',
      image: 'images/rajasthani-ghevar.jpg'
    },
    'besan-ladoo': {
      name: 'Besan Ladoo',
      weight: '500g',
      price: 300,
      description: 'Spherical sweets made from gram flour, ghee, and sugar. These aromatic ladoos are infused with cardamom and garnished with nuts for extra flavor and texture.',
      image: 'images/besan-ladoo.jpg'
    },
    'mawa-kachori': {
      name: 'Mawa Kachori',
      weight: '400g',
      price: 420,
      description: 'Sweet kachori filled with khoya and dry fruits, a Jodhpur specialty. This rich and indulgent treat has a crispy exterior with a melt-in-mouth sweet filling.',
      image: 'images/mawa-kachori.jpg'
    },
    'kalakand': {
      name: 'Kalakand',
      weight: '500g',
      price: 380,
      description: 'Milk cake with a grainy texture, flavored with cardamom and topped with pistachios. This traditional sweet is made by reducing milk with sugar until it forms a solid mass.',
      image: 'images/kalakand.jpg'
    },
    'mohan-bhog': {
      name: 'Mohan Bhog',
      weight: '250g',
      price: 320,
      description: 'Soft and delicate sweet made with milk solids, sugar and flavored with saffron. This melt-in-your-mouth dessert is garnished with silver varq and pistachios.',
      image: 'images/mohan-bhog.jpg'
    },
    'rajbhog': {
      name: 'Raj Bhog',
      weight: '500g',
      price: 480,
      description: 'Large-sized rasgulla stuffed with dry fruits and saffron, a royal delicacy. This luxurious sweet is immersed in sugar syrup and has a soft, spongy texture.',
      image: 'images/rajbhog.jpg'
    },
    'churma-ladoo': {
      name: 'Churma Ladoo',
      weight: '500g',
      price: 350,
      description: 'Traditional Rajasthani sweet made from wheat flour, ghee and jaggery. These rustic ladoos have a unique coarse texture and are rich in flavor with a hint of cardamom.',
      image: 'images/churma-ladoo.jpg'
    }
  };
  
  // Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Update active filters display
      updateActiveFilters(filter);
      
      // Filter products
      filterProducts(filter);
    });
  });
  
  function updateActiveFilters(filter) {
    let filterName = '';
    switch(filter) {
      case 'all':
        filterName = 'All Sweets';
        break;
      case 'milk-sweets':
        filterName = 'Milk Sweets';
        break;
      case 'dry-fruit':
        filterName = 'Dry Fruit Delights';
        break;
      case 'festival':
        filterName = 'Festival Specials';
        break;
      case 'ladoo':
        filterName = 'Traditional Ladoos';
        break;
      case 'regional':
        filterName = 'Regional Specialties';
        break;
      default:
        filterName = 'All Sweets';
    }
    
    activeFilters.innerHTML = `
      <span class="filter-tag">${filterName} <button class="remove-filter"><i class="fas fa-times"></i></button></span>
    `;
    
    // Add event listener to remove filter button
    const removeFilterButton = activeFilters.querySelector('.remove-filter');
    if (removeFilterButton) {
      removeFilterButton.addEventListener('click', function() {
        // Reset to "All" filter
        filterButtons.forEach(btn => {
          if (btn.getAttribute('data-filter') === 'all') {
            btn.click();
          }
        });
      });
    }
  }
  
  function filterProducts(filter) {
    if (filter === 'all') {
      productCards.forEach(card => {
        card.style.display = 'block';
      });
    } else {
      productCards.forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (categories.includes(filter)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  }
  
  // Sorting functionality
  sortSelect.addEventListener('change', function() {
    const sortValue = this.value;
    const productsArray = Array.from(productCards);
    
    productsArray.sort((a, b) => {
      const priceA = parseInt(a.querySelector('.price').textContent.replace('₹', ''));
      const priceB = parseInt(b.querySelector('.price').textContent.replace('₹', ''));
      
      if (sortValue === 'price-low') {
        return priceA - priceB;
      } else if (sortValue === 'price-high') {
        return priceB - priceA;
      } else {
        // For 'popularity' and 'newest', we would typically use backend data
        // For this example, we'll keep the original order
        return 0;
      }
    });
    
    // Re-append sorted cards to container
    const container = document.querySelector('.products-grid');
    productsArray.forEach(card => {
      container.appendChild(card);
    });
  });
  
  // Quick view functionality
  quickViewButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const productId = this.getAttribute('data-product');
      const product = productData[productId];
      
      if (product) {
        modalMainImage.src = product.image;
        modalProductTitle.textContent = product.name;
        modalProductWeight.textContent = product.weight;
        modalProductPrice.textContent = product.price;
        modalProductDescription.textContent = product.description;
        
        // Reset quantity
        quantityInput.value = 1;
        
        // Reset variant selection
        variantButtons.forEach(btn => {
          if (btn.getAttribute('data-weight') === product.weight) {
            btn.classList.add('active');
          } else {
            btn.classList.remove('active');
          }
        });
        
        // Show modal
        quickViewModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Close modal
  closeModalButton.addEventListener('click', function() {
    quickViewModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Close modal when clicking outside content
  quickViewModal.addEventListener('click', function(e) {
    if (e.target === quickViewModal) {
      quickViewModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Thumbnail gallery
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      // Update active thumbnail
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      this.classList.add('active');
      
      // Update main image
      const imgSrc = this.querySelector('img').src;
      modalMainImage.src = imgSrc;
    });
  });
  
  // Quantity selector
  decreaseQtyBtn.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });
  
  increaseQtyBtn.addEventListener('click', function() {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue < 10) {
      quantityInput.value = currentValue + 1;
    }
  });
  
  // Enforce min/max values on manual input
  quantityInput.addEventListener('change', function() {
    let value = parseInt(this.value);
    if (isNaN(value) || value < 1) {
      this.value = 1;
    } else if (value > 10) {
      this.value = 10;
    }
  });
  
  // Variant selection
  variantButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      variantButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Update price and weight
      const price = this.getAttribute('data-price');
      const weight = this.getAttribute('data-weight');
      
      modalProductPrice.textContent = price;
      modalProductWeight.textContent = weight;
    });
  });
  
  // Add to cart functionality
  function addToCart() {
    // In a real implementation, this would add the product to a cart object/database
    // For now, we'll just show the notification
    
    // Update cart count
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = parseInt(cartCount.textContent) + 1;
    
    // Show notification
    cartNotification.classList.add('show');
    
    // Hide notification after 5 seconds
    setTimeout(() => {
      cartNotification.classList.remove('show');
    }, 5000);
  }
  
  // Add to cart buttons
  addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });
  
  addToCartIconButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent triggering quick view
      addToCart();
    });
  });
  
  // Modal add to cart button
  modalAddToCartButton.addEventListener('click', function() {
    addToCart();
    quickViewModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Close notification
  closeNotificationButton.addEventListener('click', function() {
    cartNotification.classList.remove('show');
  });
  
  // Load more functionality
  loadMoreButton.addEventListener('click', function() {
    // In a real implementation, this would load more products from the server
    // For now, we'll just hide the button
    this.textContent = 'Loading...';
    this.disabled = true;
    
    setTimeout(() => {
      this.textContent = 'No More Products';
    }, 1500);
  });
  
  // Initialize the page with the "All" filter
  filterProducts('all');
});
