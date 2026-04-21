// ===========================
// CUSTOM CURSOR
// ===========================

const cursor = document.querySelector('.cursor');
const cursorDot = document.querySelector('.cursor-dot');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    
    cursorDot.style.left = x + 'px';
    cursorDot.style.top = y + 'px';
    
    cursor.classList.add('active');
    cursorDot.classList.add('active');
});

document.addEventListener('mouseleave', () => {
    cursor.classList.remove('active');
    cursorDot.classList.remove('active');
});

// Add cursor pointer effect on hover of clickable elements
document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'BUTTON' || 
        e.target.tagName === 'A' || 
        e.target.classList.contains('service-card') ||
        e.target.classList.contains('portfolio-card') ||
        e.target.closest('button') ||
        e.target.closest('a')) {
        cursor.style.scale = '1.5';
        cursorDot.style.scale = '0';
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'BUTTON' || 
        e.target.tagName === 'A' || 
        e.target.classList.contains('service-card') ||
        e.target.classList.contains('portfolio-card') ||
        e.target.closest('button') ||
        e.target.closest('a')) {
        cursor.style.scale = '1';
        cursorDot.style.scale = '1';
    }
});

// ===========================
// MOBILE MENU TOGGLE
// ===========================

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate menu toggle lines
    const spans = menuToggle.querySelectorAll('span');
    spans[0].style.transform = navLinks.classList.contains('active') 
        ? 'rotate(45deg) translateY(10px)' 
        : '';
    spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navLinks.classList.contains('active') 
        ? 'rotate(-45deg) translateY(-10px)' 
        : '';
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.querySelectorAll('span').forEach(span => {
            span.style.transform = '';
            span.style.opacity = '1';
        });
    });
});

// ===========================
// SMOOTH SCROLL FOR LINKS
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// SCROLL ANIMATIONS
// ===========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.querySelectorAll('.service-card, .portfolio-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    observer.observe(el);
});

// ===========================
// NAVBAR SHADOW ON SCROLL
// ===========================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 20px rgba(212, 175, 55, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ===========================
// MODAL FUNCTIONALITY
// ===========================

function openModal(projectId) {
    const modal = document.getElementById(projectId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(projectId) {
    const modal = document.getElementById(projectId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.show').forEach(modal => {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    }
});

// ===========================
// SKILL BARS ANIMATION
// ===========================

const skillBars = document.querySelectorAll('.skill-fill');
let skillsAnimated = false;

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !skillsAnimated) {
            skillsAnimated = true;
            animateSkillBars();
            skillsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

function animateSkillBars() {
    skillBars.forEach((bar, index) => {
        const width = bar.style.width || '0%';
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            bar.style.width = width;
        }, index * 100);
    });
}

// ===========================
// FORM HANDLING
// ===========================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;
        
        // Validate
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Create mailto link
        const mailtoLink = `mailto:ramlalsaranoffical@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Send email
        window.location.href = mailtoLink;
        
        // Show success message
        showNotification('Thank you! Your message has been sent.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        border-radius: 8px;
        font-weight: 500;
        z-index: 3000;
        animation: slideInUp 0.3s ease-out;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutDown 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ===========================
// PARALLAX EFFECT
// ===========================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.5 + (index * 0.1);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===========================
// COUNTER ANIMATION
// ===========================

let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            statsAnimated = true;
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroSection = document.querySelector('.hero-stats');
if (heroSection) {
    statsObserver.observe(heroSection);
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;
        
        const updateCount = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + '+';
                clearInterval(updateCount);
            } else {
                counter.textContent = Math.floor(current) + '+';
            }
        }, 20);
    });
}

// ===========================
// PAGE LOAD ANIMATION
// ===========================

window.addEventListener('load', () => {
    // Add fade-in animation to page
    document.body.style.animation = 'fadeInBody 0.6s ease-out';
});

// ===========================
// WORD CAROUSEL EFFECT
// ===========================

const wordCarousel = document.querySelector('.word-carousel');
if (wordCarousel) {
    const words = wordCarousel.querySelectorAll('span');
    let currentWord = 0;
    
    // Note: The main animation is handled in CSS, this is just for reference
    // The CSS keyframes handle the word rotation automatically
}

// ===========================
// ACTIVE NAV LINK ON SCROLL
// ===========================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link:not(.cta-nav)');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '';
        link.style.borderBottom = '';
        
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.style.color = 'var(--accent-gold)';
        }
    });
});

// ===========================
// TOUCH SUPPORT FOR MOBILE
// ===========================

let touchStartX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    
    // Handle swipe gestures if needed
    if (touchEndX < touchStartX - 50) {
        // Swiped left
    } else if (touchEndX > touchStartX + 50) {
        // Swiped right
    }
});

// ===========================
// LAZY LOADING SUPPORT
// ===========================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Debounce function
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

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===========================
// PERFORMANCE OPTIMIZATION
// ===========================

// Optimize scroll event with debouncing
window.addEventListener('scroll', debounce(() => {
    // Performance-critical scroll code here
}, 50));

// ===========================
// ACCESSIBILITY FEATURES
// ===========================

// Add keyboard navigation for modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        const activeModal = document.querySelector('.modal.show');
        if (activeModal) {
            const focusableElements = activeModal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                }
            } else {
                if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                }
            }
        }
    }
});

// ===========================
// INITIALIZATION
// ===========================

// Initialize AOS-like scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Check for elements that need animations
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
    
    console.log('Portfolio website initialized successfully!');
});

// ===========================
// CONSOLE MESSAGE
// ===========================

console.log(
    '%cWelcome to Ram Saran\'s Portfolio!',
    'color: #d4af37; font-size: 20px; font-weight: bold;'
);
console.log(
    '%cFull Stack Developer | Modern Web Solutions',
    'color: #b0b8d4; font-size: 14px;'
);
console.log(
    '%cLet\'s connect! Email: ramlalsaranoffical@gmail.com',
    'color: #10b981; font-size: 12px;'
);
