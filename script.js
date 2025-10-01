document.addEventListener('DOMContentLoaded', function() {
    const typingPhrases = [
        "Hello, I'm Indah",
        "Web Developer",
        "Frontend Developer",
        "Backend Enthusiast",
        "UI/UX Designer",
        "Crafting Beautiful Interfaces"
    ];
    const subText = "Transforming ideas into impactful digital experiences"
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;
    
    function typeEffect() {
        const currentPhrase = typingPhrases[phraseIndex];
        const typingElement = document.getElementById("typing");
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isPaused = true;
            setTimeout(() => {
                isDeleting = true;
                typeEffect();
            }, 2500);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % typingPhrases.length;
            setTimeout(typeEffect, 700);
        } else {
            const speed = isDeleting ? 30 : 100;
            setTimeout(typeEffect, isPaused ? speed / 2 : speed);
            isPaused = false;
        }
    }
    
    function typeSubText() {
        let i = 0;
        const subElement = document.getElementById("typing-sub");
        
        function typeChar() {
            if (i < subText.length) {
                subElement.innerHTML += subText.charAt(i);
                i++;
                setTimeout(typeChar, 20 + Math.random() * 30);
            }
        }
        
        setTimeout(typeChar, 3000);
    }
    
    setTimeout(() => {
        typeEffect();
        typeSubText();
    }, 1500);
    
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('open');
        this.classList.toggle('active');
        this.querySelector('svg').classList.toggle('rotate-90');
    });
    
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('open');
            menuButton.classList.remove('active');
            menuButton.querySelector('svg').classList.remove('rotate-90');
        });
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPos = target.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -60px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                if (entry.target.id === 'skills') {
                    animateSkills();
                }
                if (entry.target.id === 'projects') {
                    animateProjects();
                }
                if (entry.target.id === 'services') {
                    animateServices();
                }
                if (entry.target.id === 'testimonials') {
                    animateTestimonials();
                }
                if (entry.target.id === 'contact') {
                    animateContact();
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    function animateSkills() {
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach((card, index) => {
            const bar = card.querySelector('.bg-blue-500, .bg-blue-400, .bg-yellow-400, .bg-cyan-500, .bg-purple-500, .bg-pink-500, .bg-green-500, .bg-blue-600, .bg-emerald-500, .bg-blue-700, .bg-gray-800, .bg-red-500');
            const targetWidth = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.transition = 'width 2s cubic-bezier(0.16, 1, 0.3, 1)';
                bar.style.width = targetWidth;
            }, index * 150);
        });
    }
    
    function animateProjects() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
                card.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
            }, index * 300);
        });
    }
    
    function animateServices() {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
                card.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
            }, index * 250);
        });
    }
    
    function animateTestimonials() {
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        testimonialCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
                card.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
            }, index * 200);
        });
    }
    
    function animateContact() {
        const contactElements = document.querySelectorAll('#contact .reveal-left, #contact .reveal-right');
        contactElements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateX(0)';
                el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
            }, index * 300);
        });
    }
    
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
            backToTop.classList.remove('opacity-0', 'invisible');
        } else {
            backToTop.classList.remove('visible');
            backToTop.classList.add('opacity-0', 'invisible');
        }
    });
    
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            setTimeout(() => {
                submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent!';
                createConfetti();
                setTimeout(() => {
                    submitBtn.innerHTML = 'Send Message';
                    submitBtn.disabled = false;
                    this.reset();
                }, 3000);
            }, 2000);
        });
    }
    
    function createConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.style.position = 'fixed';
        confettiContainer.style.top = '0';
        confettiContainer.style.left = '0';
        confettiContainer.style.width = '100%';
        confettiContainer.style.height = '100%';
        confettiContainer.style.pointerEvents = 'none';
        confettiContainer.style.zIndex = '3000';
        document.body.appendChild(confettiContainer);
        
        const colors = ['#dee1e5ff', '#60a5fa', '#93c5fd', '#bfdbfe', '#dbeafe', '#fefcbf'];
        
        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = Math.random() * 15 + 8 + 'px';
            confetti.style.height = Math.random() * 15 + 8 + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '10%';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-30px';
            confetti.style.opacity = '0';
            
            const animation = confetti.animate([
                { opacity: 0, transform: 'translateY(0) rotate(0deg)', top: '-30px' },
                { opacity: 1, transform: 'translateY(0) rotate(0deg)', offset: 0.1 },
                { opacity: 1, transform: `translateY(${window.innerHeight + 150}px) rotate(${Math.random() * 1080}deg)` }
            ], {
                duration: 3000 + Math.random() * 4000,
                easing: 'cubic-bezier(0.1, 1, 0.3, 1)'
            });
            
            confettiContainer.appendChild(confetti);
            
            animation.onfinish = () => {
                confetti.remove();
                if (confettiContainer.children.length === 0) {
                    confettiContainer.remove();
                }
            };
        }
    }
    
    function spawnParticles() {
        const hero = document.querySelector('#home');
        if (!hero) return;
        const particleContainer = document.createElement('div');
        particleContainer.className = 'particles';
        hero.appendChild(particleContainer);
        
        const particleCount = 70;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 8 + 4;
            const posX = Math.random() * 100;
            const delay = Math.random() * 7;
            const duration = 7 + Math.random() * 15;
            const opacity = Math.random() * 0.5 + 0.3;
            
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${posX}%`;
            particle.style.animationDelay = `${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.opacity = opacity;
            
            particleContainer.appendChild(particle);
        }
    }
    
    spawnParticles();
    
    const profileImages = document.querySelectorAll('.profile-img');
    profileImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1) rotate(8deg)';
            img.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        });
        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    document.querySelectorAll('.glow-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1500);
        });
    });
    
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('#home');
        if (hero) {
            const scrollPos = window.scrollY;
            const bg = hero.querySelector('img');
            if (bg) {
                bg.style.transform = `translateY(${scrollPos * 0.7}px) scale(1.15)`;
                bg.style.transition = 'transform 0.1s linear';
            }
        }
    });
    
    const nav = document.querySelector('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > lastScroll && currentScroll > 120) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        lastScroll = currentScroll;
        nav.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    });
});



