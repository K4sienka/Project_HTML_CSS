//link do innej strony
function redirectToPage(page) {
    window.location.href = page;
}

//przesuwanie po stronie
function scrollToElement(elementId) {
    var element = document.getElementById(elementId);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}