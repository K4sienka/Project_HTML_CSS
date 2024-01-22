let clicked = false;
/*// wersja 1
function Zoom(element) {
    if (!clicked) {
        if (element.classList.contains('img_plan_1')) {
            element.classList.add('zoomed_1');
            clicked = true;
        } else if (element.classList.contains('img_plan_2')) {
            element.classList.add('zoomed_2');
            clicked = true;
        }
    } else {
        if (element.classList.contains('img_plan_1')) {
            element.classList.remove('zoomed_1');
        } else if (element.classList.contains('img_plan_2')) {
            element.classList.remove('zoomed_2');
        }
        clicked = false;
    }
}*/



function Zoom(element) {

    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth >= 659) {
            console.log('Funkcja Zoom została wywołana.'); 
            // Sprawdza, czy już kliknięto element
            if (!clicked) {
                // Jeśli nie, sprawdza klasę klikniętego elementu
                if (element.classList.contains('img_plan_1')) {
                    // Dodaje klasę zoomed1 dla klikniętego elementu img_plan_1
                    element.classList.add('zoomed_1');
                    // Wykonuje coś dla klas img_plan_1

                    // Dodatkowe działania dla img_plan_2
                    const imgPlan2 = document.querySelectorAll('.img_plan_2');
                    imgPlan2.forEach((item) => {
                        // Dodaje klasę zoom1_2 dla elementów img_plan_2
                        item.classList.add('zoom1_2');
                        // Wykonuje coś dla klas img_plan_2
                    });
                } else if (element.classList.contains('img_plan_2')) {
                    // Dodaje klasę zoomed2 dla klikniętego elementu img_plan_2
                    element.classList.add('zoomed_2');
                    // Wykonuje coś dla klas img_plan_2

                    // Dodatkowe działania dla img_plan_1
                    const imgPlan1 = document.querySelectorAll('.img_plan_1');
                    imgPlan1.forEach((item) => {
                        // Dodaje klasę zoom2_1 dla elementów img_plan_1
                        item.classList.add('zoom2_1');
                        // Wykonuje coś dla klas img_plan_1
                    });
                }
                clicked = true; // Zmienia flagę na true, żeby zablokować kolejne wywołania
            } else {
                // Usuwa dodane klasy zoomed1 i zoomed2
                const zoomed = document.querySelectorAll('.zoomed_1, .zoomed_2');
                zoomed.forEach((item) => {
                    item.classList.remove('zoomed_1', 'zoomed_2');
                });

                // Usuwa dodane klasy zoom1_2 i zoom2_1
                const zoomClasses = document.querySelectorAll('.zoom1_2, .zoom2_1');
                zoomClasses.forEach((item) => {
                    item.classList.remove('zoom1_2', 'zoom2_1');
                });

                clicked = false; // Zmienia flagę na false, aby można było ponownie wykonać akcje po kliknięciu
            }
    }
}


function przeniesDoKalendarza(id) {
    if (id === "CalendarI") {
        window.location.href = 'https://calendar.google.com/calendar/embed?src=ei85c12akbsqbp5sic7he2thfp35snja%40import.calendar.google.com&ctz=Europe%2FWarsaw'
    } else if (id === "CalendarII") {
        window.location.href = 'https://calendar.google.com/calendar/embed?src=v3c3kqa14n2k22d0dci7m9fukd3jj3q1%40import.calendar.google.com&ctz=Europe%2FWarsaw'
    }else if (id === "CalendarIII") {
        window.location.href = 'https://calendar.google.com/calendar/embed?src=2e1qduidj51rdi75blg45ss75qq6fa4m%40import.calendar.google.com&ctz=Europe%2FWarsaw'
    }else if (id === "CalendarIV") {
        window.location.href = 'https://calendar.google.com/calendar/embed?src=iosr1uqtght46srtu7jlqnkmjk92ubcm%40import.calendar.google.com&ctz=Europe%2FWarsaw'
    }else if (id === "CalendarV") {
        window.location.href = 'https://calendar.google.com/calendar/embed?src=t9h023sot5mquvc5mls27ok0uep488jh%40import.calendar.google.com&ctz=Europe%2FWarsaw'
    }else if (id === "CalendarVI") {
        window.location.href = 'https://calendar.google.com/calendar/embed?src=ksfh7r8cu3kum1reb8vilh72t075gr29%40import.calendar.google.com&ctz=Europe%2FWarsaw'
    }else if (id === "CalendarO") {
        window.location.href = "https://calendar.google.com/calendar/embed?src=3rf6v9gcb3nd3bb1nlp1es3umihm85pc%40import.calendar.google.com&ctz=Europe%2FWarsaw"
    }
    
}

