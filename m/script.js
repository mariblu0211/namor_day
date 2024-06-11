function navigateToMessages() {
    window.location.href = 'messages.html';
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.getElementById('hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);