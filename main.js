/**
 * BMM Creations - Main JavaScript File
 * Contains all the interactive features and functionality
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        });
    }

    /**
     * Mobile Menu Toggle
     */
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;

    // Check if elements exist
    if (!hamburger || !mainNav) return;

    // Toggle menu function
    function toggleMenu() {
        console.log('Toggling menu');
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
        body.classList.toggle('mobile-nav-active');
        
        // Update aria-expanded attribute
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
        hamburger.setAttribute('aria-expanded', !isExpanded);
    }

    // Toggle on hamburger click
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Hamburger clicked');
        toggleMenu();
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Nav link clicked');
            if (mainNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mainNav.classList.contains('active') && 
            !mainNav.contains(e.target) && 
            !hamburger.contains(e.target)) {
            console.log('Clicked outside menu');
            if (mainNav.classList.contains('active')) {
                toggleMenu();
            }
        }
    });

    // Close menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mainNav.classList.contains('active')) {
            console.log('Escape key pressed');
            toggleMenu();
        }
    });

    // Sticky Header on Scroll
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize Portfolio Filtering
    const filterButtons = document.querySelectorAll('.portfolio-filter button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const portfolioContainer = document.querySelector('.portfolio-container');
    
    if (filterButtons.length && portfolioItems.length && portfolioContainer) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                
                // Add loading class to container
                portfolioContainer.classList.add('filtering');
                
                // Set a small timeout to allow the loading class to be applied
                setTimeout(() => {
                    // Filter portfolio items
                    portfolioItems.forEach(item => {
                        if (filterValue === 'all' || item.classList.contains(filterValue)) {
                            item.style.display = 'block';
                            item.classList.add('animate__animated', 'animate__fadeIn');
                        } else {
                            item.style.display = 'none';
                        }
                    });
                    
                    // Remove loading class after animation
                    setTimeout(() => {
                        portfolioContainer.classList.remove('filtering');
                    }, 300);
                    
                    // Re-initialize tooltips after filtering
                    initTooltips();
                }, 50);
            });
        });
    }

    // Initialize other components
    initScrollToTop();
    initAOS();
    initTestimonialSlider();
    initTooltips();
    initCounter();
    initLazyLoading();
    initBackToTop();
    initTestimonialsSlider();
});

/**
 * Initialize Scroll to Top Button
 */
function initScrollToTop() {
    const scrollTop = document.querySelector('.scroll-top');
    
    if (scrollTop) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTop.classList.add('active');
            } else {
                scrollTop.classList.remove('active');
            }
        });
        
        scrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/**
 * Initialize AOS (Animate On Scroll)
 */
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
}

/**
 * Initialize Testimonial Slider
 */
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;
    
    if (testimonials.length > 1) {
        // Show first testimonial
        testimonials[0].classList.add('active');
        
        // Auto-rotate testimonials
        setInterval(() => {
            testimonials[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % testimonials.length;
            testimonials[currentIndex].classList.add('active');
        }, 5000);
    }
}

/**
 * Initialize Testimonials Slider
 */
function initTestimonialsSlider() {
    // Check if testimonials slider exists on the page
    if (document.querySelector('.testimonial-slider')) {
        // Create script element for testimonials.js
        const script = document.createElement('script');
        script.src = 'js/testimonials.js';
        script.async = true;
        document.body.appendChild(script);
    }
}

/**
 * Initialize Bootstrap tooltips
 */
function initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

/**
 * Initialize Counter Animation
 */
function initCounter() {
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

/**
 * Initialize Lazy Loading for Images
 */
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

/**
 * Initialize Back to Top Button
 */
function initBackToTop() {
    const backToTop = document.createElement('a');
    backToTop.href = '#';
    backToTop.className = 'scroll-top d-flex align-items-center justify-content-center';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTop);
}

/**
 * Animate Counter
 */
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    const counter = element;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    };
    
    updateCounter();
}
