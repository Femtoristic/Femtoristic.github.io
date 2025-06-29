// Mobile Menu Functionality

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileClose = document.getElementById('mobileClose');
    const mobileNavBtns = document.querySelectorAll('.mobile-nav-btn');
    const mobileLangBtns = document.querySelectorAll('.mobile-lang-btn');
    const mobileThemeBtns = document.querySelectorAll('.mobile-theme-btn');
    const header = document.querySelector('.header');

    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileMenuToggle.classList.toggle('active');
        mobileNavOverlay.classList.toggle('active');
        document.body.style.overflow = mobileNavOverlay.classList.contains('active') ? 'hidden' : '';
        if (mobileNavOverlay.classList.contains('active')) {
            header.classList.add('menu-open');
        } else {
            header.classList.remove('menu-open');
        }
    }

    // Close mobile menu with promise
    function closeMobileMenu() {
        return new Promise((resolve) => {
            mobileMenuToggle.classList.remove('active');
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = '';
            header.classList.remove('menu-open');
            
            // Wait for the transition to complete
            setTimeout(resolve, 350); // Slightly longer than CSS transition
        });
    }

    // Event listeners
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    mobileClose.addEventListener('click', closeMobileMenu);

    // Close menu when clicking outside
    mobileNavOverlay.addEventListener('click', function(e) {
        if (e.target === mobileNavOverlay) {
            closeMobileMenu();
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Mobile navigation buttons
    mobileNavBtns.forEach(btn => {
        btn.addEventListener('click', async function() {
            // Remove active class from all buttons
            mobileNavBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the section to scroll to
            const section = this.getAttribute('data-section');
            if (section) {
                const targetSection = document.getElementById(section);
                if (targetSection) {
                    // Close mobile menu and wait for it to complete
                    await closeMobileMenu();
                    
                    // Calculate the target position with header offset
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    // Use window.scrollTo for more reliable scrolling
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Fallback: ensure we reach the target position
                    setTimeout(() => {
                        const currentPosition = window.pageYOffset;
                        const positionDifference = Math.abs(currentPosition - targetPosition);
                        
                        // If we're more than 50px away from target, force scroll
                        if (positionDifference > 50) {
                            window.scrollTo({
                                top: targetPosition,
                                behavior: 'instant'
                            });
                        }
                    }, 1000);
                    
                    // Special offset for testimonials (Referenzen)
                    if (section === 'testimonials') {
                        setTimeout(() => {
                            window.scrollBy({ 
                                top: -90, 
                                left: 0, 
                                behavior: 'instant' 
                            });
                        }, 600); // Increased delay to ensure smooth scroll completes
                    }
                }
            }
        });
    });

    // Mobile language switcher
    mobileLangBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            // Finde den entsprechenden Desktop-Button und löse einen Klick aus
            const desktopBtn = document.querySelector('.lang-btn[data-lang="' + lang + '"]');
            if (desktopBtn) {
                desktopBtn.click();
            }
            // Synchronisiere die active-Klasse bei den mobilen Buttons
            mobileLangBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Mobile theme switcher
    mobileThemeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            // Remove active class from all theme buttons
            mobileThemeBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Trigger theme change (if theme-switcher.js is loaded)
            if (window.changeTheme) {
                window.changeTheme(theme);
            } else {
                // Fallback: mimic theme-switcher.js logic
                document.documentElement.removeAttribute('data-theme');
                if (theme !== 'modern') {
                    document.documentElement.setAttribute('data-theme', theme);
                }
                localStorage.setItem('preferred-theme', theme);
            }
            // Also update desktop theme buttons
            const desktopThemeBtns = document.querySelectorAll('.theme-btn');
            desktopThemeBtns.forEach(desktopBtn => {
                if (desktopBtn.getAttribute('data-theme') === theme) {
                    desktopBtn.classList.add('active');
                } else {
                    desktopBtn.classList.remove('active');
                }
            });
        });
    });

    // Sync desktop and mobile navigation states
    function syncNavigationStates() {
        const desktopNavBtns = document.querySelectorAll('.desktop-nav .nav-btn');
        const activeSection = getCurrentActiveSection();
        
        // Update desktop navigation
        desktopNavBtns.forEach(btn => {
            const section = btn.getAttribute('data-section');
            if (section === activeSection) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update mobile navigation
        mobileNavBtns.forEach(btn => {
            const section = btn.getAttribute('data-section');
            if (section === activeSection) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // Get current active section based on scroll position
    function getCurrentActiveSection() {
        const sections = ['services', 'portfolio', 'testimonials', 'blog', 'resources'];
        const scrollPosition = window.scrollY + 100; // Offset for header
        
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
                return sections[i];
            }
        }
        
        return 'services'; // Default
    }

    // Update navigation on scroll
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(syncNavigationStates, 100);
    });

    // Initial sync
    syncNavigationStates();
}); 