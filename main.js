// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add animations to elements when they come into view
  const animateOnScroll = function() {
    // Get all agent cards
    const cards = document.querySelectorAll('#agents .grid > div');
    
    // Apply staggered animations to cards
    cards.forEach((card, index) => {
      // Add blur-bg class for hover effect
      card.classList.add('blur-bg');
      
      // Check if card is in viewport
      const rect = card.getBoundingClientRect();
      const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
      
      if (isInViewport) {
        // Add animation with staggered delay
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 100 * index);
      }
    });

    // Animate hero elements
    const heroElements = document.querySelectorAll('#hero h1, #hero p, #hero a');
    heroElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
      
      if (isInViewport) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 100 * index);
      }
    });
  };

  // Initialize animations
  const initAnimations = function() {
    // Set initial states for animated elements
    const cards = document.querySelectorAll('#agents .grid > div');
    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const heroElements = document.querySelectorAll('#hero h1, #hero p, #hero a');
    heroElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Trigger first animation
    animateOnScroll();
  };

  // Mobile menu toggle
  const setupMobileMenu = function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
      });
    }
  };

  // Smooth scroll for anchor links
  const setupSmoothScroll = function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
  };

  // Add hover animations to the agent cards
  const setupCardHover = function() {
    const cards = document.querySelectorAll('#agents .grid > div');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.classList.add('shadow-lg');
      });
      
      card.addEventListener('mouseleave', function() {
        this.classList.remove('shadow-lg');
      });
    });
  };

  // Initialize
  initAnimations();
  setupMobileMenu();
  setupSmoothScroll();
  setupCardHover();

  // Listen for scroll events
  window.addEventListener('scroll', animateOnScroll);
}); 