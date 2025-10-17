const flowers = ['🌸', '🏵️', '🌺', '🌻', '🌼', '🌷', '🌹', '🪻'];

function createFlower() {
    const isEmoji = Math.random() > 0.4; // 60% emoji, 40% cánh SVG
    const flower = document.createElement('div');
    flower.classList.add(isEmoji ? 'flower' : 'petal-fall');
    if (!isEmoji) {
        flower.classList.add(Math.random() > 0.5 ? 'alt' : '');
    }
    flower.innerText = isEmoji ? flowers[Math.floor(Math.random() * flowers.length)] : '';
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = (Math.random() * 4 + 4) + 's';
    flower.style.fontSize = isEmoji ? (Math.random() * 10 + 15) + 'px' : '';
    flower.style.width = !isEmoji ? (Math.random() * 10 + 10) + 'px' : '';
    flower.style.height = !isEmoji ? (Math.random() * 15 + 20) + 'px' : '';
    flower.style.animationDelay = (Math.random() * 2) + 's';
    document.querySelector('.flower-falling-container').appendChild(flower);
    setTimeout(() => flower.remove(), 7000);
}

setInterval(createFlower, 150);

window.addEventListener('load', () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
});
