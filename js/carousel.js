document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    const heroSlider = document.querySelector('.hero-slider');
    const heroSlides = document.querySelectorAll('.hero-slider .slide');
    const heroDots = document.querySelectorAll('.hero .slider-controls .dot');
    let heroCurrentIndex = 0;
    
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDots = document.querySelectorAll('.testimonials .slider-controls .dot');
    let testimonialCurrentIndex = 0;
    
    // Function to show slide
    function showSlide(slides, index, dots) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    // Hero Slider Navigation
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            heroCurrentIndex = index;
            showSlide(heroSlides, heroCurrentIndex, heroDots);
        });
    });
    
    // Testimonial Slider Navigation
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            testimonialCurrentIndex = index;
            showSlide(testimonials, testimonialCurrentIndex, testimonialDots);
        });
    });
    
    // Auto Slide for Hero
    function autoSlide() {
        heroCurrentIndex = (heroCurrentIndex + 1) % heroSlides.length;
        showSlide(heroSlides, heroCurrentIndex, heroDots);
    }
    
    // Auto Slide for Testimonials
    function autoTestimonial() {
        testimonialCurrentIndex = (testimonialCurrentIndex + 1) % testimonials.length;
        showSlide(testimonials, testimonialCurrentIndex, testimonialDots);
    }
    
    // Set intervals
    let heroInterval = setInterval(autoSlide, 5000);
    let testimonialInterval = setInterval(autoTestimonial, 7000);
    
    // Pause on hover
    heroSlider.addEventListener('mouseenter', () => {
        clearInterval(heroInterval);
    });
    
    heroSlider.addEventListener('mouseleave', () => {
        heroInterval = setInterval(autoSlide, 5000);
    });
    
    testimonialSlider.addEventListener('mouseenter', () => {
        clearInterval(testimonialInterval);
    });
    
    testimonialSlider.addEventListener('mouseleave', () => {
        testimonialInterval = setInterval(autoTestimonial, 7000);
    });
});