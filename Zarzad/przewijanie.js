document.addEventListener('DOMContentLoaded', function() {
    const karuzela = document.querySelector('.karuzela');
    const leftArrow = document.getElementById('left');
    const rightArrow = document.getElementById('right');

    // Przewijanie w lewo
    leftArrow.addEventListener('click', function() {
        karuzela.scrollBy({
            left: -karuzela.offsetWidth,
            behavior: 'smooth'
        });
    });

    // Przewijanie w prawo
    rightArrow.addEventListener('click', function() {
        karuzela.scrollBy({
            left: karuzela.offsetWidth,
            behavior: 'smooth'
        });
    });
});