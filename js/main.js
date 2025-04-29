// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navbar = document.querySelector('.navbar');
    
    mobileMenuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            mobileMenuBtn.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Stats counter animation
    const statItems = document.querySelectorAll('.stat-item .number');
    const statsSection = document.querySelector('.about-section');
    
    function animateStats() {
        const rect = statsSection.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2);
        
        if (isVisible) {
            statItems.forEach(item => {
                const target = parseInt(item.getAttribute('data-count'));
                const speed = 200;
                const count = parseInt(item.textContent);
                const increment = target / speed;
                
                if (count < target) {
                    item.textContent = Math.ceil(count + increment);
                    setTimeout(animateStats, 1);
                } else {
                    item.textContent = target;
                }
            });
            
            // Remove event listener after animation
            window.removeEventListener('scroll', animateStats);
        }
    }
    
    window.addEventListener('scroll', animateStats);
    
    // Initialize stats to 0
    statItems.forEach(item => {
        item.textContent = '0';
    });
});