document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navRight = document.querySelector('.nav-right');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            // A simple toggle for mobile (you can expand this with a slide-down menu)
            navRight.classList.toggle('mobile-active');
            
            // Change icon
            const icon = mobileMenuBtn.querySelector('i');
            if (navRight.classList.contains('mobile-active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.5)';
            navbar.style.backgroundColor = 'rgba(31, 33, 37, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.backgroundColor = 'var(--bg-secondary)';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Mockup Search functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            document.querySelector('.search-bar').style.borderColor = 'var(--accent-primary)';
        });
        searchInput.addEventListener('blur', () => {
            document.querySelector('.search-bar').style.borderColor = 'var(--border-color)';
        });
        
        // Shortcut key (/) focus
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
            }
        });
    }

    // Theme Toggle Functionality
    const themeToggleBtn = document.querySelector('.theme-toggle-btn');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const icon = themeToggleBtn.querySelector('i');
            if (document.body.classList.contains('light-theme')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }

    // Ripple effect for the hero download button
    const heroBtn = document.getElementById('heroDownloadBtn');
    if (heroBtn) {
        heroBtn.addEventListener('click', function(e) {
            let ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            let rect = e.target.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    }
});
