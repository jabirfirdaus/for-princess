const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const messageEl = document.getElementById('message');
let noClickCount = 0;

// Escape sequences for button movement
noBtn.addEventListener('mouseenter', () => {
    // Only move on desktop (mouse hover)
    if (!isMobileDevice()) {
        moveNoButton();
    }
});

// For mobile and all clicks
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
    noClickCount++;
});

yesBtn.addEventListener('click', () => {
    handleYesClick();
});

function moveNoButton() {
    const randomX = Math.random() * (window.innerWidth - 200);
    const randomY = Math.random() * (window.innerHeight - 100);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '100';
    noBtn.style.transition = 'all 0.3s ease-out';
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function handleYesClick() {
    // Change message
    messageEl.innerHTML = `
        Princess Bilqis Inayatuz Zahwa,<br><br>
        Terima kasih sudah mau memaafkan Andika... 💕<br>
        Andika janji gak akan membuat princess kesal lagi. 😭<br><br>
        I love you so much, princess! ✨💕✨
    `;
    
    // Disable buttons
    yesBtn.disabled = true;
    noBtn.disabled = true;
    yesBtn.style.opacity = '0.6';
    noBtn.style.opacity = '0.6';
    yesBtn.style.cursor = 'default';
    noBtn.style.cursor = 'default';
    
    // Add celebrating animation to yes button
    yesBtn.classList.add('celebrating');
    
    // Create confetti
    createConfetti();
    
    // Change background
    document.body.style.background = 'linear-gradient(135deg, #ffe6f0 0%, #f0e6ff 100%)';
    
    // Update button text
    yesBtn.textContent = 'YEAYY DIMAAFKAN!!! 🎉';
    noBtn.textContent = '(tombol ini udah gak berguna 😄)';
}

function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const confettiPieces = 50;
    const hearts = ['💕', '💖', '💗', '💝', '✨', '🌸'];
    
    for (let i = 0; i < confettiPieces; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti', 'heart');
        
        const isHeart = Math.random() > 0.3;
        if (isHeart) {
            confetti.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        } else {
            confetti.style.background = getRandomColor();
            confetti.style.borderRadius = '50%';
        }
        
        const startX = Math.random() * window.innerWidth;
        const startY = window.innerHeight;
        const endX = startX + (Math.random() - 0.5) * 300;
        const delay = Math.random() * 0.5;
        const duration = 2 + Math.random() * 1;
        
        confetti.style.left = startX + 'px';
        confetti.style.top = startY + 'px';
        confetti.style.animation = `fall ${duration}s linear ${delay}s forwards, spin ${duration}s linear ${delay}s forwards`;
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
}

function getRandomColor() {
    const colors = ['#ff6b9d', '#ffa6c1', '#ff85b3', '#ff94bb', '#ffc1d9'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add CSS animations for confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-${window.innerHeight}px);
        }
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg) translateX(0);
        }
        to {
            transform: rotate(360deg) translateX(${(Math.random() - 0.5) * 100}px);
        }
    }
`;
document.head.appendChild(style);

// Add animation to cats when page loads
window.addEventListener('load', () => {
    const cats = document.querySelectorAll('.cat');
    cats.forEach(cat => {
        cat.style.animation = cat.style.animation || 'wiggle 4s ease-in-out infinite';
    });
});