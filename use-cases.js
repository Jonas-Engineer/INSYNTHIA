// Testimonial data
const testimonials = [
    {
        name: "Me Lambert",
        role: "Solo Lawyer",
        company: "Lambert & Associates",
        image: "https://i.pravatar.cc/150?img=1",
        quote: "INSYNTHIA has transformed my online presence. I'm now getting regular inquiries from potential clients, and I haven't written a single article myself! The quality of content is exceptional, and it's helped me establish authority in my niche.",
        results: "12 new clients in 3 months"
    },
    {
        name: "Sarah Chen",
        role: "Wealth Manager",
        company: "Chen Financial Advisory",
        image: "https://i.pravatar.cc/150?img=2",
        quote: "The content quality is exceptional. My clients now see me as a true expert in complex financial topics. The automated content strategy has saved me countless hours while maintaining my professional voice.",
        results: "42% increase in qualified leads"
    },
    {
        name: "David Wilson",
        role: "Chartered Accountant",
        company: "Wilson & Co. Accounting",
        image: "https://i.pravatar.cc/150?img=3",
        quote: "My LinkedIn presence has grown exponentially. The automated content strategy is exactly what I needed. I'm now seen as a thought leader in my industry.",
        results: "3K+ monthly LinkedIn views"
    },
    {
        name: "Alex Rivera",
        role: "Tech Solopreneur",
        company: "Rivera Tech Solutions",
        image: "https://i.pravatar.cc/150?img=4",
        quote: "Focusing on my product while INSYNTHIA handles my visibility has been a game-changer for my business. The content resonates perfectly with my target audience.",
        results: "75% increase in site traffic"
    },
    {
        name: "Emma Thompson",
        role: "Business Consultant",
        company: "Thompson Consulting Group",
        image: "https://i.pravatar.cc/150?img=5",
        quote: "The whitepaper strategy brought in high-quality leads that were already pre-qualified and interested in my services. It's like having a full-time marketing team.",
        results: "18 strategy calls booked"
    }
];

// Initialize testimonial carousel
function initializeTestimonialCarousel() {
    const slider = document.querySelector('.testimonial-slider');
    if (!slider) return;

    let currentIndex = 0;

    function updateTestimonial() {
        const testimonial = testimonials[currentIndex];
        slider.innerHTML = `
            <div class="testimonial-slide bg-white rounded-xl shadow-md p-8">
                <div class="flex items-center mb-6">
                    <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full mr-4">
                    <div>
                        <h4 class="font-semibold text-gray-900">${testimonial.name}</h4>
                        <p class="text-gray-600">${testimonial.role} at ${testimonial.company}</p>
                    </div>
                </div>
                <p class="text-gray-600 italic mb-4">"${testimonial.quote}"</p>
                <div class="flex items-center text-sm text-indigo-600">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    ${testimonial.results}
                </div>
            </div>
        `;
    }

    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial();
    }, 5000);

    // Initial testimonial
    updateTestimonial();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeTestimonialCarousel();
}); 