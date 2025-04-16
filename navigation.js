// Navigation menu template
const navigationTemplate = `
    <nav class="fixed w-full bg-white bg-opacity-70 backdrop-blur-lg z-50 py-4 px-6 flex justify-between items-center shadow-sm">
        <div class="font-bold text-xl text-indigo-600">INSYNTHIA</div>
        <div class="hidden md:flex space-x-6">
            <a href="https://jonas-engineer.github.io/INSYNTHIA/index.html" class="hover:text-indigo-600 transition-colors">Home</a>
            <a href="https://jonas-engineer.github.io/INSYNTHIA/use-cases.html" class="hover:text-indigo-600 transition-colors">Use Cases</a>
            <a href="https://jonas-engineer.github.io/INSYNTHIA/pricing.html" class="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="https://jonas-engineer.github.io/INSYNTHIA/about.html" class="hover:text-indigo-600 transition-colors">About</a>
            <a href="https://jonas-engineer.github.io/INSYNTHIA/testimonials.html" class="hover:text-indigo-600 transition-colors">Testimonials</a>
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
    <div class="mobile-menu fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col transform translate-x-full transition-transform duration-300">
        <div class="flex justify-between items-center mb-8">
            <div class="font-bold text-xl text-indigo-600">INSYNTHIA</div>
            <button class="menu-toggle flex flex-col space-y-1">
                <span class="block w-6 h-0.5 bg-gray-800 transform rotate-45 translate-y-1.5"></span>
                <span class="block w-6 h-0.5 bg-gray-800 opacity-0"></span>
                <span class="block w-6 h-0.5 bg-gray-800 transform -rotate-45 -translate-y-1.5"></span>
            </button>
        </div>
        <div class="flex flex-col space-y-4">
            <a href="https://jonas-engineer.github.io/INSYNTHIA/index.html" class="hover:text-indigo-600 transition-colors py-2">Home</a>
            <a href="https://jonas-engineer.github.io/INSYNTHIA/use-cases.html" class="hover:text-indigo-600 transition-colors py-2">Use Cases</a>
            <a href="https://jonas-engineer.github.io/INSYNTHIA/pricing.html" class="hover:text-indigo-600 transition-colors py-2">Pricing</a>
            <a href="https://jonas-engineer.github.io/INSYNTHIA/about.html" class="hover:text-indigo-600 transition-colors py-2">About</a>
            <a href="https://jonas-engineer.github.io/INSYNTHIA/testimonials.html" class="hover:text-indigo-600 transition-colors py-2">Testimonials</a>
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
    try {
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
                    mobileMenu.classList.toggle('translate-x-full');
                });
            });
        }

        // Add click event listeners to all navigation links
        const navLinks = document.querySelectorAll('nav a, .mobile-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Only prevent default for the "Start now" button
                if (href === '#') {
                    e.preventDefault();
                    return;
                }
                
                // For all other links, let them navigate normally
                // The links now use absolute URLs, so they will work from any page
            });
        });
    } catch (error) {
        console.error('Error initializing navigation:', error);
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeNavigation);

// Also initialize after a short delay to ensure all scripts are loaded
setTimeout(initializeNavigation, 100); 