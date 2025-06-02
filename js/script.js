document.addEventListener('DOMContentLoaded', function() {
    // Create additional interactive elements
    createFloatingParticles();
    addMouseFollowEffect();
    addClickEffects();
    
    // Typewriter effect for subtitle
    typewriterEffect();
});

function createFloatingParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'floating-particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;
    document.body.appendChild(particlesContainer);
    
    // Create floating particles
    for (let i = 0; i < 20; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 3px;
        height: 3px;
        background: #00ff88;
        border-radius: 50%;
        opacity: ${Math.random() * 0.5 + 0.2};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float-particle ${Math.random() * 10 + 5}s linear infinite;
    `;
    container.appendChild(particle);
    
    // Remove and recreate particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.remove();
            createParticle(container);
        }
    }, (Math.random() * 10 + 5) * 1000);
}

function addMouseFollowEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-glow';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(0,255,136,0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 999;
        mix-blend-mode: screen;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = (e.clientX - 10) + 'px';
        cursor.style.top = (e.clientY - 10) + 'px';
    });
}

function addClickEffects() {
    document.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(0,255,136,0.4);
            transform: translate(-50%, -50%);
            animation: ripple-effect 0.6s ease-out;
            pointer-events: none;
            z-index: 1000;
        `;
        document.body.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
}

function typewriterEffect() {
    const subtitle = document.querySelector('.subtitle');
    const originalText = subtitle.textContent;
    subtitle.textContent = '';
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < originalText.length) {
            subtitle.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
            // Restart after delay
            setTimeout(() => {
                subtitle.textContent = '';
                i = 0;
                const restartInterval = setInterval(() => {
                    if (i < originalText.length) {
                        subtitle.textContent += originalText.charAt(i);
                        i++;
                    } else {
                        clearInterval(restartInterval);
                    }
                }, 100);
            }, 3000);
        }
    }, 100);
}

// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
    
    @keyframes ripple-effect {
        to {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);