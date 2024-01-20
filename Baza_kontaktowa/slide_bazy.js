/*
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
                
                if (parentClass === 'Obiektowe') {
                    button.text('Programowanie obiektowe');
                } else if (parentClass === 'szyfrowanie') {
                    button.text('Szyfrowanie i kompresja danych');
                } else if (parentClass === 'Linux') {
                    button.text('Przetwarzanie danych w systemie Unix');
                } else if (parentClass === 'Sygnaly') {
                    button.text('Teoria sygnałów dyskretnych');
                } else if (parentClass === 'Lab_fiz') {
                    button.text('Laboratorium fizyczne');
                } else if (parentClass === 'Bazy') {
                    button.text('Bazy danych');
                } else if (parentClass === 'Prog_R') {
                    button.text('Programowanie w R i wizualizacja danych');
                } else if (parentClass === 'Techniki_In') {
                    button.text('Techniki internetowe');
                   


                } else if (parentClass === 'Onderka') {
                    button.text('dr Zdzisław Onderka');
                    

                } else if (parentClass === 'Mlynarczuk') {
                    button.text('dr hab. inż. Mariusz Młynarczuk');
                    
                } else if (parentClass === 'Oleksik') {
                    button.text('dr Paweł Oleksik');
                } else if (parentClass === 'Cianciara') {
                    button.text('mgr inż. Aleksander Cianciara');
                    
                } else if (parentClass === 'Lesniak') {
                    button.text('prof. dr hab inż. Andrzej Leśniak');
                } else if (parentClass === 'Dwornik') {
                    button.text('dr inż. Maciej Dwornik');
                    
                } else if (parentClass === 'Trela_Makowej') {
                    button.text('dr inż Agnieszka Trela-Makowej');
                } else if (parentClass === 'Czaplinski') {
                    button.text('dr Wilhelm Czapliński');
                } else if (parentClass === 'Samek') {
                    button.text('dr hab inż. Lucyna Samek');
                   
                } else if (parentClass === 'Lupa') {
                    button.text('dr inż Michał Lupa');
                } else if (parentClass === 'Ciurej') {
                    button.text('mgr inż Maciej Ciurej');
                } else if (parentClass === 'Staszel') {
                    button.text('mgr inż Jakub Staszel');
                    
                } else if (parentClass === 'Chuchro') {
                    button.text('dr inż Monika Chuchro');
                } else if (parentClass === 'Adamek') {
                    button.text('mgr inż Katarzyna Adamek');
                    
                } else if (parentClass === 'Mirek') {
                    button.text('dr Katarzyna Mirek');
                } else {
                    button.text('T');
                }
            }
        });
    });
});
*/

$(document).ready(function() {
    $('.note').hide(); // Ukrycie wszystkich notatek na starcie

    $('.hideButton.main_button').click(function() {
        const note = $(this).closest('.note_slide').find('.note');
        note.slideToggle(function() {
            const button = $(this).closest('.note_slide').find('.hideButton.main_button');
            const lecturerButton = $(this).closest('.note_slide').find('.hideButton.lecturer');

            if ($(this).is(':visible')) {
                button.text('Kliknij, aby zwinąć');
            } else {
                const subject = $(this).closest('.note_slide').find('.hideButton.main_button').text();
                button.text(subject);
                lecturerButton.text('Pokaż prowadzącego');
            }
        });
    });

    $('.hideButton.lecturer').click(function() {
        const note = $(this).closest('.note');
        note.slideToggle(function() {
            const button = $(this).closest('.note').prev('.button').find('.hideButton.main_button');
            const lecturerButton = $(this).closest('.button').find('.hideButton.lecturer');

            if ($(this).is(':visible')) {
                lecturerButton.text('Schowaj prowadzącego');
                button.text('Pokaż przedmiot');
            } else {
                lecturerButton.text('Pokaż prowadzącego');
                const subject = $(this).closest('.note').prev('.button').find('.hideButton.main_button').text();
                button.text(subject);
            }
        });
    });
});


