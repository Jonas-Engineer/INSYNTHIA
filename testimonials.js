// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize testimonial carousel
    const testimonials = [
        {
            name: "Me Dupont",
            role: "Tax Lawyer",
            quote: "I never imagined I'd generate qualified leads on autopilot. INSYNTHIA gave me the online visibility I always needed — and it never stops.",
            result: "+35 qualified leads in 30 days",
            agents: "Writer, Lead Magnet, Sales Rep",
            avatar: "https://i.pravatar.cc/80?img=1"
        },
        {
            name: "Dr. Sarah Chen",
            role: "Medical Specialist",
            quote: "As a busy doctor, I never had time for content. Now my practice is growing through educational content I didn't even write.",
            result: "40% increase in new patients",
            agents: "Writer, Reviewer, Social Media",
            avatar: "https://i.pravatar.cc/80?img=2"
        },
        {
            name: "James Wilson",
            role: "Financial Advisor",
            quote: "The AI team handles my outreach while I focus on client relationships. It's like having a full-time marketing team.",
            result: "3x higher response rate",
            agents: "Sales Rep, Content Writer, SEO",
            avatar: "https://i.pravatar.cc/80?img=3"
        }
    ];

    let currentTestimonial = 0;
    const carousel = document.querySelector('.testimonial-carousel');
    const slide = document.querySelector('.testimonial-slide');

    function updateTestimonial() {
        const testimonial = testimonials[currentTestimonial];
        slide.innerHTML = `
            <div class="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 mx-auto mb-6 overflow-hidden">
                <img src="${testimonial.avatar}" alt="${testimonial.name}" class="w-full h-full object-cover">
            </div>
            <h3 class="text-xl font-bold mb-2">${testimonial.name}</h3>
            <p class="text-gray-500 mb-4">${testimonial.role}</p>
            <blockquote class="text-gray-700 italic mb-6">"${testimonial.quote}"</blockquote>
            <p class="font-bold text-indigo-600 mb-4">${testimonial.result}</p>
            <p class="text-sm text-gray-500">Powered by AI agents: ${testimonial.agents}</p>
        `;
    }

    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        updateTestimonial();
    }, 5000);

    // Initialize first testimonial
    updateTestimonial();

    // Add animation classes to elements when they come into view
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.grid > div');
        const indicators = document.querySelectorAll('.trust-indicators > div');
        
        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
            
            if (isInViewport) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 * index);
            }
        });

        indicators.forEach((indicator, index) => {
            const rect = indicator.getBoundingClientRect();
            const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
            
            if (isInViewport) {
                setTimeout(() => {
                    indicator.style.opacity = '1';
                    indicator.style.transform = 'scale(1)';
                }, 100 * index);
            }
        });
    };

    // Set initial states for animated elements
    const initAnimations = function() {
        const cards = document.querySelectorAll('.grid > div');
        const indicators = document.querySelectorAll('.trust-indicators > div');
        
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        indicators.forEach(indicator => {
            indicator.style.opacity = '0';
            indicator.style.transform = 'scale(0.9)';
            indicator.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });

        // Trigger first animation
        animateOnScroll();
    };

    // Initialize animations
    initAnimations();

    // Listen for scroll events
    window.addEventListener('scroll', animateOnScroll);
}); 