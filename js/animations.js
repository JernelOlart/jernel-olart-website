document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for animations
    const animateElements = document.querySelectorAll('[class*="animate-"]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });
});