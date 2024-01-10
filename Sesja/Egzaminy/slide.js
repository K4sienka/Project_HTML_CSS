/*
$(document).ready(function() {

    $('.hideButton').click(function() {
        $('#note').slideToggle(function(){
            if($('#note').is(':visible')) {
                $('#hideButton').text('Slide panel to hide');
            }   
            else {
                $('#hideButton').text('Slide panel to show');
            }
        }); // slideToggle
    }); // click()
}); // ready
*/

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
                
                if (parentClass === 'termin_1') {
                    button.text('Termin I');
                } else if (parentClass === 'termin_2') {
                    button.text('Termin II');
                } else if (parentClass === 'termin_3') {
                    button.text('Termin III');
                } else {
                    button.text('T');
                }
            }
        });
    });
});
