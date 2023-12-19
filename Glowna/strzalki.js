const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');
const newsItems = document.querySelectorAll('.text-update p');

let currentIndex = 0;

function showCurrentText() {
    newsItems.forEach((item, index) => {
        if (index === currentIndex) {
            item.style.opacity = '1';
        } else {
            item.style.opacity = '0';
        }
    });
}

function scrollLeft() {
    currentIndex = (currentIndex - 1 + newsItems.length) % newsItems.length;
    showCurrentText();
}

function scrollRight() {
    currentIndex = (currentIndex + 1) % newsItems.length;
    showCurrentText();
}

// Initialize the visibility of the first item
showCurrentText();

scrollLeftBtn.addEventListener('click', scrollLeft);
scrollRightBtn.addEventListener('click', scrollRight);
