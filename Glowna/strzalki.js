// Strzałki
const bannerText = document.getElementById('bannerText');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

let currentIndex = 0;

function showCurrentText() {
    const children = bannerText.children;

    for (let i = 0; i < children.length; i++) {
        if (i === currentIndex) {
            children[i].style.display = 'block';
        } else {
            children[i].style.display = 'none';
        }
    }
}

function scrollLeft() {
    currentIndex = (currentIndex - 1 + bannerText.children.length) % bannerText.children.length;
    showCurrentText();
    bannerText.style.animation = 'none';
    void bannerText.offsetWidth; 
    bannerText.style.animation = null;
}

function scrollRight() {
    currentIndex = (currentIndex + 1) % bannerText.children.length;
    showCurrentText();
    bannerText.style.animation = 'none'; 
    void bannerText.offsetWidth; 
    bannerText.style.animation = null; 
}

scrollLeftBtn.addEventListener('click', scrollLeft);
scrollRightBtn.addEventListener('click', scrollRight);

showCurrentText();
