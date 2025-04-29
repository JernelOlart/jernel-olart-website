document.addEventListener('DOMContentLoaded', function() {
    // Product Filter
    const tabBtns = document.querySelectorAll('.products-tabs .tab-btn');
    const productItems = document.querySelectorAll('.product-item');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            productItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Wishlist Toggle
    const wishlistBtns = document.querySelectorAll('.btn-wishlist');
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            this.innerHTML = this.classList.contains('active') ? '<i class="fas fa-heart"></i>' : '<i class="far fa-heart"></i>';
            
            // Here you would typically update the wishlist in local storage or send to server
        });
    });

    // Add to Cart
    const addToCartBtns = document.querySelectorAll('.product-actions .btn-primary');
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Here you would typically add the product to cart
            // For demonstration, we'll show a notification
            const productTitle = this.closest('.product-item').querySelector('.product-title').textContent;
            alert(`"${productTitle}" ha sido agregado al carrito`);
        });
    });

    // Pagination
    const paginationBtns = document.querySelectorAll('.btn-pagination');
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            paginationBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would typically load the next page of products
            // For demonstration, we'll just scroll to top
            window.scrollTo({
                top: document.querySelector('.products-grid').offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    // Newsletter Form
    const newsletterForm = document.querySelector('.newsletter form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            // Simple validation
            if (emailInput.value === '') {
                alert('Por favor ingresa tu correo electrónico');
                return;
            }
            
            // Here you would typically send the email to your server
            alert(`Gracias por suscribirte con el correo: ${emailInput.value}`);
            emailInput.value = '';
        });
    }
});