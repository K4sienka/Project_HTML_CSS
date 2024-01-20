//dla menu
if ($(window).width() < 1340) {
    $('.menu').on('click', function (e) {
        // Sprawdź, czy element posiada podmenu
        if ($(this).next('.podmenu').length > 0) {
            e.preventDefault(); // Zapobiegnij domyślnej akcji kliknięcia

            // Sprawdź, czy podmenu jest aktualnie schowane
            if (!$(this).data('expanded')) {
                // Jeśli schowane, to rozwinięcie
                $(this).next('.podmenu').slideDown();
                $(this).data('expanded', true);
            } else {
                // Jeśli rozwinięte, to zwiniecie
                $(this).next('.podmenu').slideUp();
                $(this).data('expanded', false);
            }
        }
    });
}

