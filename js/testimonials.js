/**
 * Testimonials Slider
 * Handles the functionality for the testimonials carousel
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Testimonials slider initialized');
    
    // Select elements
    const slider = document.querySelector('.testimonial-slider-container');
    const slides = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    // Check if all required elements exist
    if (!slider || !slides.length || !prevBtn || !nextBtn) {
        console.error('Required elements not found for testimonials slider');
        return;
    }
    
    let currentIndex = 0;
    let slideInterval;
    const slideCount = slides.length;
    
    // Initialize slider
    function initSlider() {
        // Set initial active slide
        updateSlider();
        
        // Start auto slide
        startAutoSlide();
        
        // Pause on hover
        const sliderContainer = document.querySelector('.testimonial-slider');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', pauseSlider);
            sliderContainer.addEventListener('mouseleave', startAutoSlide);
        }
    }
    
    // Update slider position
    function updateSlider() {
        // Update slide position
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update active dot
        updateDots();
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = (index + slideCount) % slideCount;
        updateSlider();
    }
    
    // Next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }
    
    // Previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    }
    
    // Update navigation dots
    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Start auto slide
    function startAutoSlide() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            nextSlide();
        }, 5000);
    }
    
    // Pause auto slide
    function pauseSlider() {
        clearInterval(slideInterval);
    }
    
    // Event Listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoSlide();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoSlide();
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            startAutoSlide();
        });
    });
    
    // Touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        pauseSlider();
    }, { passive: true });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoSlide();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchStartX - touchEndX > swipeThreshold) {
            // Swipe left - next slide
            nextSlide();
        } else if (touchEndX - touchStartX > swipeThreshold) {
            // Swipe right - previous slide
            prevSlide();
        }
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            startAutoSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            startAutoSlide();
        }
    });
    
    // Initialize the slider
    initSlider();
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            updateSlider();
        }, 250);
    });
});
