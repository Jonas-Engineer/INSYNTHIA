// Navigation menu template
const navigationTemplate = `
    <nav class="fixed w-full bg-white bg-opacity-70 backdrop-blur-lg z-50 py-4 px-6 flex justify-between items-center shadow-sm">
        <div class="font-bold text-xl text-indigo-600">INSYNTHIA</div>
        <div class="hidden md:flex space-x-6">
            <a href="index.html" class="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#" class="hover:text-indigo-600 transition-colors">Features</a>
            <a href="use-cases.html" class="hover:text-indigo-600 transition-colors">Use Cases</a>
            <a href="pricing.html" class="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="about.html" class="hover:text-indigo-600 transition-colors">About</a>
            <a href="testimonials.html" class="hover:text-indigo-600 transition-colors">Testimonials</a>
        </div>
        <div class="flex items-center space-x-4">
            <a href="#" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-md btn">
                Start now
            </a>
            <button class="menu-toggle md:hidden flex flex-col space-y-1">
                <span class="block w-6 h-0.5 bg-gray-800"></span>
                <span class="block w-6 h-0.5 bg-gray-800"></span>
                <span class="block w-6 h-0.5 bg-gray-800"></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col">
        <div class="flex justify-between items-center mb-8">
            <div class="font-bold text-xl text-indigo-600">INSYNTHIA</div>
            <button class="menu-toggle flex flex-col space-y-1">
                <span class="block w-6 h-0.5 bg-gray-800 transform rotate-45 translate-y-1.5"></span>
                <span class="block w-6 h-0.5 bg-gray-800 opacity-0"></span>
                <span class="block w-6 h-0.5 bg-gray-800 transform -rotate-45 -translate-y-1.5"></span>
            </button>
        </div>
        <div class="flex flex-col space-y-4">
            <a href="index.html" class="hover:text-indigo-600 transition-colors py-2">Home</a>
            <a href="#" class="hover:text-indigo-600 transition-colors py-2">Features</a>
            <a href="use-cases.html" class="hover:text-indigo-600 transition-colors py-2">Use Cases</a>
            <a href="pricing.html" class="hover:text-indigo-600 transition-colors py-2">Pricing</a>
            <a href="about.html" class="hover:text-indigo-600 transition-colors py-2">About</a>
            <a href="testimonials.html" class="hover:text-indigo-600 transition-colors py-2">Testimonials</a>
        </div>
        <div class="mt-auto">
            <a href="#" class="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-md w-full block text-center">
                Start now
            </a>
        </div>
    </div>
`;

// Function to initialize navigation
function initializeNavigation() {
    // Remove any existing navigation
    const existingNav = document.querySelector('nav');
    const existingMobileMenu = document.querySelector('.mobile-menu');
    if (existingNav) existingNav.remove();
    if (existingMobileMenu) existingMobileMenu.remove();

    // Insert new navigation
    document.body.insertAdjacentHTML('afterbegin', navigationTemplate);

    // Setup mobile menu toggle
    const menuToggle = document.querySelectorAll('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.forEach(toggle => {
            toggle.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
            });
        });
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeNavigation); 