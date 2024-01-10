
$(document).ready(function() {
    $('.note').hide(); // Ukrycie wszystkich notatek na starcie

    $('.hideButton').click(function() {
        const note = $(this).parent().prev('.note');
        note.slideToggle(function() {
            const button = $(this).next('.button').find('.hideButton');
            const parentClass = $(this).parent().attr('class').split(' ')[0]; // Pobranie pierwszej klasy rodzica
            
            if ($(this).is(':visible')) {
                button.text('Kliknij żeby zwinąć');
            } else {
                
                if (parentClass === 'Teoria_sygnałów_dyskretnych') {
                    button.text('Teoria sygnałów dyskretnych');
                } else if (parentClass === 'Bazy_danych') {
                    button.text('Bazy danych');
                } else if (parentClass === 'Programowanie_o') {
                    button.text('Programowanie Obiektowe');
                } else {
                    button.text('T');
                }
            }
        });
    });
});



