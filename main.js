// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize animations
  const initAnimations = function() {
    // Set initial states for animated elements
    const cards = document.querySelectorAll('#agents .grid > div:not(nav *)');
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

  // Add animations to elements when they come into view
  const animateOnScroll = function() {
    // Get all agent cards
    const cards = document.querySelectorAll('#agents .grid > div:not(nav *)');
    
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

  // Initialize all functions
  initAnimations();
  setupMobileMenu();
  setupSmoothScroll();
  initializeNavLinks();
  
  // Mobile menu toggle
  const setupMobileMenu = function() {
    const menuToggle = document.querySelectorAll('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
      menuToggle.forEach(toggle => {
        toggle.addEventListener('click', function() {
          mobileMenu.classList.toggle('active');
          // Ensure all navigation links are visible when toggling
          const navLinks = document.querySelectorAll('nav a, .mobile-menu a');
          navLinks.forEach(link => {
            link.style.removeProperty('display');
            link.style.removeProperty('visibility');
            link.style.removeProperty('opacity');
          });
        });
      });
    }
  };

  // Initialize navigation links
  function initializeNavLinks() {
    const navLinks = document.querySelectorAll('nav a, .mobile-menu a');
    navLinks.forEach(link => {
      // Remove any inline styles that might affect visibility
      link.style.removeProperty('display');
      link.style.removeProperty('visibility');
      link.style.removeProperty('opacity');
      
      // Add click handler to ensure menu items stay visible after navigation
      link.addEventListener('click', function() {
        const allLinks = document.querySelectorAll('nav a, .mobile-menu a');
        allLinks.forEach(l => {
          l.style.removeProperty('display');
          l.style.removeProperty('visibility');
          l.style.removeProperty('opacity');
        });
      });
    });
  }

  // Smooth scroll for anchor links
  const setupSmoothScroll = function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        // Only prevent default for internal anchor links
        if (this.getAttribute('href').startsWith('#')) {
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
        }
      });
    });
  };

  // Add hover animations to the agent cards
  const setupCardHover = function() {
    const cards = document.querySelectorAll('#agents .grid > div:not(nav *)');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.classList.add('shadow-lg');
      });
      
      card.addEventListener('mouseleave', function() {
        this.classList.remove('shadow-lg');
      });
    });
  };

  // Listen for scroll events
  window.addEventListener('scroll', animateOnScroll);
}); 