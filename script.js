// ==============================================
// Dark/Light Mode Toggle
// ==============================================

// Check for saved theme preference or default to light mode
const getThemePreference = () => {
    if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Set theme on page load
const setTheme = (theme) => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
};

// Initialize theme
setTheme(getThemePreference());

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');

const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
};

themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);

// ==============================================
// Mobile Menu Toggle
// ==============================================

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    // Toggle icon
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    } else {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// ==============================================
// Smooth Scrolling for Navigation Links
// ==============================================

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        if (targetId === '#') return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navbarHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==============================================
// Navbar Scroll Effect
// ==============================================

const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow when scrolled
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScrollTop = scrollTop;
});

// ==============================================
// Scroll-Triggered Animations
// ==============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Optional: stop observing after animation
            // observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe all elements with fade-in-up class
const fadeInElements = document.querySelectorAll('.fade-in-up');
fadeInElements.forEach(element => {
    observer.observe(element);
});

// ==============================================
// Active Navigation Link Highlighting
// ==============================================

const sections = document.querySelectorAll('section[id]');

const highlightNavigation = () => {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from all links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-accent');
                link.classList.add('text-dark/70', 'dark:text-light/70');
            });

            // Add active class to current section link
            const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.remove('text-dark/70', 'dark:text-light/70');
                activeLink.classList.add('text-accent');
            }
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// ==============================================
// Loading Animation
// ==============================================

window.addEventListener('load', () => {
    // Add loaded class to body for any load-specific animations
    document.body.classList.add('loaded');

    // Trigger initial scroll animations for elements in viewport
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});



// ==============================================
// Typing Effect for Hero Title (Optional Enhancement)
// ==============================================

const heroTitle = document.querySelector('#home h1 .text-accent');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';

    let charIndex = 0;
    const typingSpeed = 100; // milliseconds per character

    const typeWriter = () => {
        if (charIndex < originalText.length) {
            heroTitle.textContent += originalText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
    };

    // Start typing effect after a short delay
    setTimeout(typeWriter, 500);
}

// ==============================================
// Project Card Tilt Effect (Subtle 3D Effect)
// ==============================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==============================================
// Skill Badge Animation on Hover
// ==============================================

const skillBadges = document.querySelectorAll('.skill-category span');

skillBadges.forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'scale(1.1)';
    });

    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'scale(1)';
    });
});

// ==============================================
// Timeline Animation (Staggered Reveal)
// ==============================================

const timelineItems = document.querySelectorAll('#experience .relative.fade-in-up');

// Create a separate observer for timeline items with staggered delays
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

timelineItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
    timelineObserver.observe(item);
});

// ==============================================
// Easter Egg: Console Message
// ==============================================

console.log('%c👋 Hello, Developer!', 'font-size: 20px; color: #06b6d4; font-weight: bold;');
console.log('%cInterested in the code? Check out my GitHub!', 'font-size: 14px; color: #64748b;');
console.log('%c🚀 Built with HTML, CSS, and Vanilla JavaScript', 'font-size: 12px; color: #06b6d4;');

// ==============================================
// Performance Optimization: Debounce Scroll Events
// ==============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedHighlightNav = debounce(highlightNavigation, 100);
window.removeEventListener('scroll', highlightNavigation);
window.addEventListener('scroll', debouncedHighlightNav);

// ==============================================
// Accessibility: Focus Management
// ==============================================

// Add focus visible class for keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-navigation');
});

// ==============================================
// Initialize All Features on DOM Content Loaded
// ==============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website initialized successfully! ✨');

    // Dynamic copyright year
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Initial check for active section
    highlightNavigation();

    // ==============================================
    // Lightbox Gallery
    // ==============================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCurrent = document.getElementById('lightbox-current');
    const lightboxTotal = document.getElementById('lightbox-total');
    const lightboxDotsContainer = document.getElementById('lightbox-dots');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');

    let galleryImages = [];
    let galleryIndex = 0;

    function openLightbox(images, startIndex = 0) {
        galleryImages = images;
        galleryIndex = startIndex;
        lightboxTotal.textContent = images.length;

        // Build dots
        lightboxDotsContainer.innerHTML = '';
        images.forEach((_, i) => {
            const dot = document.createElement('button');
            dot.classList.add('lightbox-dot');
            if (i === startIndex) dot.classList.add('active');
            dot.addEventListener('click', () => showImage(i));
            lightboxDotsContainer.appendChild(dot);
        });

        showImage(startIndex);
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function showImage(index) {
        galleryIndex = index;
        lightboxImg.src = galleryImages[index];
        lightboxCurrent.textContent = index + 1;

        // Update dots
        lightboxDotsContainer.querySelectorAll('.lightbox-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        showImage(galleryIndex === galleryImages.length - 1 ? 0 : galleryIndex + 1);
    }

    function prevImage() {
        showImage(galleryIndex === 0 ? galleryImages.length - 1 : galleryIndex - 1);
    }

    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', prevImage);
    lightboxNext.addEventListener('click', nextImage);

    // Click outside image to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
            closeLightbox();
        }
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });

    // Touch swipe in lightbox
    let lbTouchStartX = 0;
    lightbox.addEventListener('touchstart', (e) => {
        lbTouchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        const diff = lbTouchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? nextImage() : prevImage();
        }
    }, { passive: true });

    // Attach to all gallery triggers
    document.querySelectorAll('.lightbox-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
            const images = JSON.parse(trigger.getAttribute('data-gallery'));
            openLightbox(images);
        });
    });
});
