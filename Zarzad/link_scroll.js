//link do innej strony, otwiera sie w nowej karcie
function redirectToPage(url) {
    window.open(url, '_blank');
}

//przesuwanie po stronie
function scrollToElement(elementId) {
    var element = document.getElementById(elementId);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}