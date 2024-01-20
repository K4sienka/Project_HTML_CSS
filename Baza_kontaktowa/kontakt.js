function togglePanel(termin) {
    var panel = document.querySelector('.panel');
    var closeButton = document.querySelector('.closeButton');

    // Ukryj wszystkie panele
    document.querySelectorAll('.panel').forEach(function (p) {
        p.style.display = 'none';
    });

    // Ukryj wszystkie kontenery tresc_panelu
    document.querySelectorAll('.tresc_panelu').forEach(function (trescPanelu) {
        trescPanelu.style.display = 'none';
    });

    // Pokaż panel i kontener dla odpowiedniego terminu
    panel.style.display = 'block';
    document.querySelector('.tresc_panelu.' + termin).style.display = 'block';

    // Pokaż guzik "Zamknij panel"
    closeButton.style.display = 'block';
}

function closePanel() {
    var panel = document.querySelector('.panel');
    var closeButton = document.querySelector('.closeButton');

    // Ukryj panel
    panel.style.display = 'none';

    // Ukryj wszystkie kontenery tresc_panelu
    document.querySelectorAll('.tresc_panelu').forEach(function (trescPanelu) {
        trescPanelu.style.display = 'none';
    });

    // Ukryj guzik "Zamknij panel"
    closeButton.style.display = 'none';
}
