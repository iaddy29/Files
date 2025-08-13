// Love reasons data
const loveReasons = [
    "Your beautiful smile that lights up my world",
    "The way you laugh at my silly jokes",
    "Your kind and caring heart",
    "How you make everything better just by being there",
    "Your intelligence and amazing conversations",
    "The way you support my dreams",
    "Your gorgeous eyes that I get lost in",
    "How you make ordinary moments extraordinary",
    "Your perfect hugs that feel like home",
    "The way you love me unconditionally"
];

// Updated photo data with properly encoded URLs and fallback handling
const photoData = [
    {
        url: "https://raw.githubusercontent.com/iaddy29/Files/main/IMG-20250813-WA0010.jpg",
        caption: "Perfect moments together",
        title: "Beautiful Day"
    },
    {
        url: "https://raw.githubusercontent.com/iaddy29/Files/main/IMG-20250813-WA0011.jpg",
        caption: "Adventures and laughter",
        title: "Fun Times"
    },
    {
        url: "https://raw.githubusercontent.com/iaddy29/Files/main/IMG-20250813-WA0012.jpg",
        caption: "Sweet memories we made",
        title: "Cherished Moments"
    },
    {
        url: "https://raw.githubusercontent.com/iaddy29/Files/main/IMG-20250813-WA0013.jpg",
        caption: "Love in every frame",
        title: "Pure Joy"
    },
    {
        url: "https://raw.githubusercontent.com/iaddy29/Files/main/IMG-20250813-WA0014.jpg",
        caption: "Our beautiful journey",
        title: "Together Always"
    },
    {
        url: "https://raw.githubusercontent.com/iaddy29/Files/main/IMG-20250813-WA0015.jpg",
        caption: "Smiles that light up my world",
        title: "Happiness"
    },
    {
        url: "https://raw.githubusercontent.com/iaddy29/Files/main/IMG-20250813-WA0016.jpg",
        caption: "Making every moment count",
        title: "Precious Times"
    },
    {
        url: "https://raw.githubusercontent.com/iaddy29/Files/main/IMG-20250813-WA0017.jpg",
        caption: "Love captured forever",
        title: "Eternal Love"
    },
    {
        url: "https://raw.githubusercontent.com/iaddy29/Files/main/IMG-20250813-WA0025.jpg",
        caption: "Special celebrations together",
        title: "Milestone Moments"
    },
    {
        url: "https://raw.githubusercontent.com/iaddy29/Files/main/WhatsApp%20Image%202025-08-13%20at%2019.31.58_123c7e45.jpg",
        caption: "Our beautiful bond",
        title: "Perfect Day"
    },
    {
        url: "https://raw.githubusercontent.com/iaddy29/Files/main/WhatsApp%20Image%202025-08-13%20at%2019.31.58_6deb0472.jpg", 
        caption: "Adventures and discoveries",
        title: "Exploring Together"
    },
    {
        url: "https://raw.githubusercontent.com/iaddy29/Files/main/WhatsApp%20Image%202025-08-13%20at%2019.31.58_f48a94c7.jpg",
        caption: "Every moment is special with you",
        title: "Sweet Memories"
    },
    {
        url: "https://raw.githubusercontent.com/iaddy29/Files/main/WhatsApp%20Image%202025-08-13%20at%2019.31.59_1bdf295e.jpg",
        caption: "Creating memories that last forever",
        title: "Forever Moments"
    },
    {
        url: "https://raw.githubusercontent.com/iaddy29/Files/main/WhatsApp%20Image%202025-08-13%20at%2019.31.59_c7563c0d%20(1).jpg",
        caption: "Love in every single moment",
        title: "Pure Love"
    }
];

let currentPhotoIndex = 0;
let reasonsVisible = 3;

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initFloatingHearts();
    initSmoothScrolling();
    initScrollAnimations();
    initReasonsSection();
    initSurpriseReveal();
    initLoveNoteForm();
    initParallaxEffects();
    initMemoryCardHovers();
    initPhotoLightbox();
    initPhotoNavigation();
    initImageLoading();
    setTimeout(initTypingEffect, 2000);
    initScrollProgress();
});

// Create floating hearts animation
function initFloatingHearts() {
    const heartsContainer = document.getElementById('floating-hearts');
    if (!heartsContainer) return;
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '♡';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.2;
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 8000);
    }
    
    setInterval(createHeart, 800);
    
    for (let i = 0; i < 5; i++) {
        setTimeout(createHeart, i * 200);
    }
}

// Smooth scrolling for navigation
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const loveMessage = document.querySelector('#love-message');
            if (loveMessage) {
                loveMessage.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
}

// Initialize scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                if (entry.target.classList.contains('timeline-item')) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateX(0)';
                    }, 100);
                }
                
                if (entry.target.classList.contains('memory-card')) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
    
    document.querySelectorAll('.memory-card').forEach(card => {
        observer.observe(card);
    });
    
    document.querySelectorAll('.section-title').forEach(title => {
        observer.observe(title);
    });
}

// Enhanced image loading with better error handling and retry logic
function initImageLoading() {
    const images = document.querySelectorAll('.memory-image img');
    
    images.forEach((img, index) => {
        const loadingDiv = img.nextElementSibling;
        const memoryCard = img.closest('.memory-card');
        let retryCount = 0;
        const maxRetries = 2;
        
        function attemptLoad() {
            // Add random parameter to bypass potential caching issues
            const originalSrc = photoData[index].url;
            const timestamp = new Date().getTime();
            img.src = `${originalSrc}?t=${timestamp}`;
            
            console.log(`Attempting to load image ${index + 1}:`, img.src);
        }
        
        function handleImageLoad() {
            console.log('Image loaded successfully:', img.src);
            img.classList.add('loaded');
            if (loadingDiv && loadingDiv.classList.contains('memory-loading')) {
                loadingDiv.style.opacity = '0';
                setTimeout(() => {
                    loadingDiv.style.display = 'none';
                }, 300);
            }
        }
        
        function handleImageError() {
            console.log(`Failed to load image ${index + 1}, retry ${retryCount + 1}/${maxRetries}:`, img.src);
            
            if (retryCount < maxRetries) {
                retryCount++;
                setTimeout(() => {
                    attemptLoad();
                }, 1000 * retryCount); // Progressive delay
            } else {
                // Final fallback - show beautiful placeholder
                console.log(`All retries failed for image ${index + 1}, showing placeholder`);
                img.style.display = 'none';
                
                if (loadingDiv) {
                    loadingDiv.innerHTML = `
                        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: linear-gradient(135deg, var(--color-bg-1), var(--color-bg-3)); color: var(--color-text);">
                            <div style="font-size: 3rem; margin-bottom: 1rem; color: var(--color-primary); animation: pulse-heart 2s ease-in-out infinite;">💕</div>
                            <h4 style="margin: 0 0 0.5rem 0; color: var(--color-text); font-family: 'Playfair Display', serif;">${photoData[index].title}</h4>
                            <p style="margin: 0; color: var(--color-text-secondary); text-align: center; padding: 0 1rem; font-size: 0.9rem;">${photoData[index].caption}</p>
                        </div>
                    `;
                    loadingDiv.style.opacity = '1';
                    loadingDiv.style.background = 'linear-gradient(135deg, var(--color-bg-1), var(--color-bg-3))';
                }
                
                // Make the card still interactive
                if (memoryCard) {
                    memoryCard.style.cursor = 'pointer';
                    memoryCard.addEventListener('click', () => {
                        // Show a special message when clicking placeholder
                        createHeartMessage(memoryCard, "This memory lives in our hearts ❤️");
                    });
                }
            }
        }
        
        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageError);
        
        // Initial load attempt
        attemptLoad();
        
        // Force check if already loaded
        if (img.complete) {
            if (img.naturalHeight !== 0) {
                handleImageLoad();
            } else {
                handleImageError();
            }
        }
    });
}

// Create a heart message for placeholder interactions
function createHeartMessage(element, message) {
    const rect = element.getBoundingClientRect();
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        left: ${rect.left + rect.width / 2}px;
        top: ${rect.top + rect.height / 2}px;
        transform: translate(-50%, -50%);
        background: var(--color-primary);
        color: var(--color-btn-primary-text);
        padding: 12px 20px;
        border-radius: 20px;
        font-size: 14px;
        font-weight: 500;
        z-index: 9999;
        pointer-events: none;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
        transition: all 0.3s ease;
    `;
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 100);
    
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 2000);
}

// Initialize photo lightbox functionality
function initPhotoLightbox() {
    const lightbox = document.getElementById('photo-lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    if (!lightbox || !lightboxImage) {
        console.log('Lightbox elements not found');
        return;
    }
    
    document.querySelectorAll('.view-photo-btn').forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openLightbox(index);
        });
    });
    
    document.querySelectorAll('.memory-card').forEach((card, index) => {
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.view-photo-btn')) {
                openLightbox(index);
            }
        });
    });
    
    function openLightbox(photoIndex) {
        currentPhotoIndex = photoIndex;
        const photo = photoData[photoIndex];
        
        if (lightboxImage) {
            lightboxImage.src = photo.url;
            lightboxImage.onerror = function() {
                // If lightbox image fails, show placeholder
                this.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.style.cssText = `
                    width: 600px;
                    height: 400px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, var(--color-bg-1), var(--color-bg-3));
                    color: var(--color-text);
                    border-radius: 8px;
                `;
                placeholder.innerHTML = `
                    <div style="font-size: 4rem; margin-bottom: 1rem; color: var(--color-primary);">💕</div>
                    <h3 style="margin: 0 0 0.5rem 0; color: var(--color-text);">${photo.title}</h3>
                    <p style="margin: 0; color: var(--color-text-secondary); text-align: center;">${photo.caption}</p>
                `;
                this.parentNode.appendChild(placeholder);
            };
        }
        if (lightboxTitle) lightboxTitle.textContent = photo.title;
        if (lightboxCaption) lightboxCaption.textContent = photo.caption;
        
        if (lightbox) {
            lightbox.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            createLightboxHearts();
        }
    }
    
    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }
    
    function showPrevPhoto() {
        currentPhotoIndex = (currentPhotoIndex - 1 + photoData.length) % photoData.length;
        const photo = photoData[currentPhotoIndex];
        if (lightboxImage) lightboxImage.src = photo.url;
        if (lightboxTitle) lightboxTitle.textContent = photo.title;
        if (lightboxCaption) lightboxCaption.textContent = photo.caption;
    }
    
    function showNextPhoto() {
        currentPhotoIndex = (currentPhotoIndex + 1) % photoData.length;
        const photo = photoData[currentPhotoIndex];
        if (lightboxImage) lightboxImage.src = photo.url;
        if (lightboxTitle) lightboxTitle.textContent = photo.title;
        if (lightboxCaption) lightboxCaption.textContent = photo.caption;
    }
    
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', showPrevPhoto);
    if (lightboxNext) lightboxNext.addEventListener('click', showNextPhoto);
    
    const backdrop = document.querySelector('.lightbox-backdrop');
    if (backdrop) backdrop.addEventListener('click', closeLightbox);
    
    document.addEventListener('keydown', (e) => {
        if (lightbox && !lightbox.classList.contains('hidden')) {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    showPrevPhoto();
                    break;
                case 'ArrowRight':
                    showNextPhoto();
                    break;
            }
        }
    });
}

// Initialize photo navigation controls for all 14 photos
function initPhotoNavigation() {
    const prevBtn = document.getElementById('prev-photo');
    const nextBtn = document.getElementById('next-photo');
    const indicators = document.querySelectorAll('.indicator');
    
    if (!prevBtn || !nextBtn) {
        console.log('Photo navigation buttons not found');
        return;
    }
    
    function updateActiveIndicator(index) {
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }
    
    function highlightCurrentPhoto(index) {
        const memoryCards = document.querySelectorAll('.memory-card');
        memoryCards.forEach((card, i) => {
            if (i === index) {
                card.style.transform = 'translateY(-10px) scale(1.05)';
                card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => {
                    card.style.transform = 'translateY(0) scale(1)';
                    card.style.boxShadow = '';
                }, 1000);
            }
        });
        updateActiveIndicator(index);
    }
    
    prevBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex - 1 + photoData.length) % photoData.length;
        highlightCurrentPhoto(currentPhotoIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        currentPhotoIndex = (currentPhotoIndex + 1) % photoData.length;
        highlightCurrentPhoto(currentPhotoIndex);
    });
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentPhotoIndex = index;
            highlightCurrentPhoto(currentPhotoIndex);
        });
    });
    
    // Auto-advance photos every 12 seconds
    setInterval(() => {
        currentPhotoIndex = (currentPhotoIndex + 1) % photoData.length;
        highlightCurrentPhoto(currentPhotoIndex);
    }, 12000);
}

// Create heart burst effect for lightbox
function createLightboxHearts() {
    const lightboxContainer = document.querySelector('.lightbox-container');
    if (!lightboxContainer) return;
    
    const rect = lightboxContainer.getBoundingClientRect();
    
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = (rect.left + rect.width / 2) + 'px';
        heart.style.top = (rect.top + rect.height / 2) + 'px';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '10000';
        heart.style.opacity = '1';
        
        document.body.appendChild(heart);
        
        const angle = (i / 12) * Math.PI * 2;
        const distance = Math.random() * 200 + 100;
        const endX = (rect.left + rect.width / 2) + Math.cos(angle) * distance;
        const endY = (rect.top + rect.height / 2) + Math.sin(angle) * distance;
        
        setTimeout(() => {
            heart.style.transition = 'all 1.5s ease-out';
            heart.style.left = endX + 'px';
            heart.style.top = endY + 'px';
            heart.style.opacity = '0';
            heart.style.transform = 'scale(0.5) rotate(360deg)';
        }, 100);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 1700);
    }
}

// Initialize the reasons section
function initReasonsSection() {
    const reasonsGrid = document.getElementById('reasons-grid');
    const showMoreBtn = document.getElementById('show-more-reasons');
    
    if (!reasonsGrid || !showMoreBtn) {
        console.log('Reasons section elements not found');
        return;
    }
    
    reasonsVisible = 3;
    
    function createReasonCard(reason, delay = 0) {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.style.animationDelay = delay + 's';
        card.innerHTML = `
            <div class="reason-icon">
                <i class="fas fa-heart"></i>
            </div>
            <p>${reason}</p>
        `;
        
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 150);
            createMiniHeartBurst(this);
        });
        
        return card;
    }
    
    function showInitialReasons() {
        reasonsGrid.innerHTML = '';
        reasonsVisible = 0;
        
        for (let i = 0; i < Math.min(3, loveReasons.length); i++) {
            const card = createReasonCard(loveReasons[i], i * 0.2);
            reasonsGrid.appendChild(card);
            reasonsVisible++;
        }
    }
    
    function showMoreReasons() {
        const remainingReasons = loveReasons.length - reasonsVisible;
        const reasonsToShow = Math.min(3, remainingReasons);
        
        if (reasonsToShow <= 0) return;
        
        showMoreBtn.innerHTML = '<i class="fas fa-heart"></i> Adding more love...';
        showMoreBtn.disabled = true;
        
        setTimeout(() => {
            for (let i = 0; i < reasonsToShow; i++) {
                if (reasonsVisible < loveReasons.length) {
                    const card = createReasonCard(loveReasons[reasonsVisible], i * 0.1);
                    reasonsGrid.appendChild(card);
                    reasonsVisible++;
                }
            }
            
            if (reasonsVisible >= loveReasons.length) {
                showMoreBtn.innerHTML = '<i class="fas fa-heart"></i> All my love for you! ❤️';
                showMoreBtn.style.background = 'var(--color-success)';
                
                setTimeout(() => {
                    const specialMessage = document.createElement('div');
                    specialMessage.className = 'reason-card';
                    specialMessage.style.gridColumn = '1 / -1';
                    specialMessage.style.background = 'var(--color-primary)';
                    specialMessage.style.color = 'var(--color-btn-primary-text)';
                    specialMessage.style.border = 'none';
                    specialMessage.innerHTML = `
                        <div class="reason-icon">
                            <i class="fas fa-infinity"></i>
                        </div>
                        <p style="font-size: 1.2rem; font-weight: 600;">And infinitely more reasons that words can't express... ∞</p>
                    `;
                    reasonsGrid.appendChild(specialMessage);
                }, 500);
            } else {
                showMoreBtn.innerHTML = '<i class="fas fa-heart"></i> Show More Love';
                showMoreBtn.disabled = false;
            }
        }, 1000);
    }
    
    showInitialReasons();
    showMoreBtn.addEventListener('click', showMoreReasons);
}

// Create mini heart burst for reason cards
function createMiniHeartBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 6; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '♡';
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.color = 'var(--color-primary)';
        heart.style.fontSize = (Math.random() * 8 + 12) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.opacity = '1';
        
        document.body.appendChild(heart);
        
        const angle = (i / 6) * Math.PI * 2;
        const distance = Math.random() * 80 + 40;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        setTimeout(() => {
            heart.style.transition = 'all 0.8s ease-out';
            heart.style.left = endX + 'px';
            heart.style.top = endY + 'px';
            heart.style.opacity = '0';
            heart.style.transform = 'scale(0.5) rotate(180deg)';
        }, 50);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 900);
    }
}

// Initialize surprise reveal functionality
function initSurpriseReveal() {
    const surpriseBox = document.getElementById('surprise-box');
    const surpriseClosed = document.getElementById('surprise-closed');
    const surpriseOpened = document.getElementById('surprise-opened');
    
    if (!surpriseBox || !surpriseClosed || !surpriseOpened) {
        console.log('Surprise elements not found');
        return;
    }
    
    surpriseBox.addEventListener('click', function(e) {
        if (surpriseOpened.classList.contains('hidden')) {
            this.style.pointerEvents = 'none';
            this.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                surpriseClosed.style.opacity = '0';
                surpriseClosed.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    surpriseClosed.style.display = 'none';
                    surpriseOpened.classList.remove('hidden');
                    surpriseOpened.style.opacity = '0';
                    surpriseOpened.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        surpriseOpened.style.transition = 'all 0.6s ease';
                        surpriseOpened.style.opacity = '1';
                        surpriseOpened.style.transform = 'translateY(0)';
                        createHeartBurst();
                    }, 100);
                }, 300);
                
                this.style.transform = 'scale(1)';
            }, 150);
        }
    });
}

// Create heart burst effect for surprise reveal
function createHeartBurst() {
    const surpriseBox = document.getElementById('surprise-box');
    if (!surpriseBox) return;
    
    const rect = surpriseBox.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '♡';
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.color = 'var(--color-primary)';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.opacity = '1';
        
        const angle = (i / 15) * Math.PI * 2;
        const distance = Math.random() * 150 + 50;
        const endX = centerX + Math.cos(angle) * distance;
        const endY = centerY + Math.sin(angle) * distance;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.transition = 'all 1s ease-out';
            heart.style.left = endX + 'px';
            heart.style.top = endY + 'px';
            heart.style.opacity = '0';
            heart.style.transform = 'scale(0.5) rotate(180deg)';
        }, 100);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 1200);
    }
}

// Initialize love note form
function initLoveNoteForm() {
    const form = document.getElementById('love-note-form');
    const messageInput = document.getElementById('note-message');
    const nameInput = document.getElementById('note-name');
    const submitBtn = document.querySelector('.btn-submit');
    
    if (!form || !messageInput || !nameInput || !submitBtn) {
        console.log('Form elements not found');
        return;
    }
    
    // Focus effects
    [messageInput, nameInput].forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = 'var(--color-primary)';
            this.style.boxShadow = '0 0 0 3px rgba(var(--color-teal-500-rgb), 0.2)';
        });
        input.addEventListener('blur', function() {
            this.style.borderColor = 'var(--color-border)';
            this.style.boxShadow = 'none';
        });
    });
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const message = messageInput.value.trim();
        const name = nameInput.value.trim();
        
        if (message && name) {
            submitBtn.innerHTML = '<i class="fas fa-heart"></i> Sending Love...';
            submitBtn.style.background = 'var(--color-warning)';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Love Sent! ❤️';
                submitBtn.style.background = 'var(--color-success)';
                createSuccessHearts(submitBtn);
                
                setTimeout(() => {
                    messageInput.value = '';
                    nameInput.value = '';
                    submitBtn.innerHTML = '<i class="fas fa-heart"></i> Send Love';
                    submitBtn.style.background = 'var(--color-primary)';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1000);
        } else {
            submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please fill both fields';
            submitBtn.style.background = 'var(--color-error)';
            
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-heart"></i> Send Love';
                submitBtn.style.background = 'var(--color-primary)';
            }, 2000);
        }
    });
}

// Create success hearts animation
function createSuccessHearts(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = centerX + 'px';
        heart.style.top = centerY + 'px';
        heart.style.fontSize = '20px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.opacity = '1';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.style.transition = 'all 1s ease-out';
            heart.style.transform = `translateY(-100px) translateX(${(Math.random() - 0.5) * 100}px) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 1200);
    }
}

// Initialize parallax effects
function initParallaxEffects() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-content');
        
        parallaxElements.forEach(element => {
            const rate = scrolled * -0.1;
            element.style.transform = `translateY(${rate}px)`;
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Initialize memory card hover effects
function initMemoryCardHovers() {
    const memoryCards = document.querySelectorAll('.memory-card');
    
    memoryCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            createSparkles(this);
        });
        
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.view-photo-btn')) {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-8px) scale(1.02)';
                }, 150);
            }
        });
    });
}

// Create sparkle effects for memory cards
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
        sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';
        sparkle.style.fontSize = '12px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1000';
        sparkle.style.opacity = '1';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.style.transition = 'all 0.8s ease-out';
            sparkle.style.transform = 'translateY(-30px) scale(0)';
            sparkle.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 900);
    }
}

// Add typing effect to hero subtitle
function initTypingEffect() {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        const text = subtitle.textContent;
        subtitle.textContent = '';
        subtitle.style.borderRight = '2px solid var(--color-text)';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                subtitle.style.borderRight = 'none';
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
}

// Add scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--color-primary), var(--color-primary-hover));
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Add mouse movement effects to floating hearts
document.addEventListener('mousemove', function(e) {
    const hearts = document.querySelectorAll('.floating-heart');
    hearts.forEach((heart, index) => {
        const rect = heart.getBoundingClientRect();
        const heartCenterX = rect.left + rect.width / 2;
        const heartCenterY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - heartCenterX;
        const deltaY = e.clientY - heartCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 100) {
            const force = (100 - distance) / 100;
            const moveX = (deltaX / distance) * force * 20;
            const moveY = (deltaY / distance) * force * 20;
            
            heart.style.transform += ` translate(${-moveX}px, ${-moveY}px)`;
        }
    });
});

// Easter egg - Konami code for extra hearts
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.length === konamiSequence.length) {
        let match = true;
        for (let i = 0; i < konamiSequence.length; i++) {
            if (konamiCode[i] !== konamiSequence[i]) {
                match = false;
                break;
            }
        }
        
        if (match) {
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.innerHTML = '💖';
                    heart.style.position = 'fixed';
                    heart.style.left = Math.random() * window.innerWidth + 'px';
                    heart.style.top = '-50px';
                    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
                    heart.style.pointerEvents = 'none';
                    heart.style.zIndex = '9999';
                    heart.style.animation = 'float-up 3s linear forwards';
                    
                    document.body.appendChild(heart);
                    
                    setTimeout(() => {
                        if (heart.parentNode) {
                            heart.parentNode.removeChild(heart);
                        }
                    }, 3000);
                }, i * 100);
            }
            
            konamiCode = [];
        }
    }
});