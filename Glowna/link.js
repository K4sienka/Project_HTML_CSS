function redirectToPage(page) {
    window.location.href = page;
}


function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });

        // Dodaj klasę highlight do podświetlenia i powiększenia elementu
        element.classList.add('highlight');

        // Usuń klasę highlight po pewnym czasie
        setTimeout(function () {
            element.classList.remove('highlight');
        }, 750);
    }
}

function redirectToPage(url) {
    window.location.href = url;
}
