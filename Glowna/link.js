//link do innej strony
function redirectToPage(page) {
    window.location.href = page;
}

//przesuwanie po stronie
function scrollToElement(elementId) {
    console.log('Scrolling to element: ' + elementId);
    var element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });

        // Dodaj klasę highlight do podświetlenia i powiększenia elementu
        element.classList.add('highlight');

        // Usuń klasę highlight po pewnym czasie
        setTimeout(function () {
            element.classList.remove('highlight');
        }, 850);
    }
}

function redirectToPage(url) {
    window.location.href = url;
}
