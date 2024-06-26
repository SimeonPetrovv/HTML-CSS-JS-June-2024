document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('console-text').style.display = 'none';
        document.getElementById('animated-text').style.opacity = '1';
    }, 3000); // Показва анимационния текст след 3 секунди
});

document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    if (username) {
        document.getElementById('animated-text').innerHTML = `<span style="color: rgb(255, 255, 255);">Welcome, ${username}!</span>`;
    }
});

window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        footer.classList.remove('hidden');
    } else {
        footer.classList.add('hidden');
    }
});