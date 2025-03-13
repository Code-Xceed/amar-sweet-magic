
// About Page Specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in animations to about page elements
  const animateElements = [
    '.about-image',
    '.about-experience',
    '.about-text',
    '.feature',
    '.mission-text',
    '.mission-image',
    '.team-member',
    '.testimonial'
  ];

  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  // Observe all elements that need animation
  animateElements.forEach(selector => {
    document.querySelectorAll(selector).forEach(element => {
      element.classList.add('animated-element');
      observer.observe(element);
    });
  });

  // Add CSS animation classes
  const style = document.createElement('style');
  style.textContent = `
    .animated-element {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    
    .fade-in {
      opacity: 1;
      transform: translateY(0);
    }
    
    .about-image.fade-in, .mission-image.fade-in {
      transition-delay: 0.2s;
    }
    
    .feature:nth-child(2).fade-in {
      transition-delay: 0.2s;
    }
    
    .feature:nth-child(3).fade-in {
      transition-delay: 0.4s;
    }
    
    .team-member:nth-child(2).fade-in {
      transition-delay: 0.2s;
    }
    
    .team-member:nth-child(3).fade-in {
      transition-delay: 0.4s;
    }
    
    .testimonial:nth-child(2).fade-in {
      transition-delay: 0.2s;
    }
  `;
  document.head.appendChild(style);
});
