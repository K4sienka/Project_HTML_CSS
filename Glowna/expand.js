//Mozliwosc w FAQ zeby rozwinac tylko jedno pytanie
document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.tab input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
            checkboxes.forEach((otherCheckbox) => {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        });
    });
});


//menu na mniejsze ekrany
document.addEventListener('DOMContentLoaded', function() {
    function Rozwin() {
        const dropdownMenu = document.querySelector('.menu_rozwijane');
        const przycisk = document.querySelector('.przycisk_menu span');
        const isOpen = dropdownMenu.classList.toggle('open');
  
        przycisk.textContent = isOpen ? '×' : '☰';
  
        document.querySelectorAll('.przeswit').forEach(element => {
            element.style.display = isOpen ? 'none' : 'block';
        });
  
        if (isOpen) {
            dropdownMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', handleLinkClick);
            });
        } else {
            dropdownMenu.querySelectorAll('a').forEach(link => {
                link.removeEventListener('click', handleLinkClick);
            });
        }
    }
  
    function handleLinkClick(event) {
        event.stopPropagation();
        Rozwin();
    }
  
    document.querySelector('.przycisk_menu').addEventListener('click', Rozwin);
});


//dla rozwijania menu
if ($(window).width() < 1550) {
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