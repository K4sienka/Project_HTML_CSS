//link do innej strony, otwiera sie w nowej karcie
function redirectToPage(url) {
    window.open(url, '_blank');
}

//link do mapki
document.getElementById('map').addEventListener('click', function() 
{
    window.open('../Glowna/photos/mapka.jpg', '_blank');
});

//przesuwanie po stronie
function scrollToElement(elementId) {
    var element = document.getElementById(elementId);

    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}