/*let clicked = false;

function Zoom(element) {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (screenWidth >= 659) {
        console.log('Funkcja Zoom została wywołana.');
        // Znajduje element .read_me wewnątrz klikniętego .img_plan
        const readMeElement = element.querySelector('.read_me');
        
        if (element.classList.contains('zoomed')) {
            // Usuwa klasę zoomed, jeśli element był już powiększony
            element.classList.remove('zoomed');
            // Zmienia tekst na "Kliknij w celu powiększenia"
            if (readMeElement) readMeElement.textContent = "Kliknij w celu powiększenia";
        } else {
            // Usuwa klasę zoomed z wszelkich wcześniej powiększonych elementów
            // i przywraca oryginalny tekst
            document.querySelectorAll('.img_plan.zoomed').forEach((zoomedElement) => {
                zoomedElement.classList.remove('zoomed');
                const innerReadMe = zoomedElement.querySelector('.read_me');
                if (innerReadMe) innerReadMe.textContent = "Kliknij w celu powiększenia";
            });
            // Dodaje klasę zoomed do klikniętego elementu
            element.classList.add('zoomed');
            // Zmienia tekst na "Kliknij, żeby pomniejszyć"
            if (readMeElement) readMeElement.textContent = "Kliknij, żeby pomniejszyć";
        }
    }
}
*/

/* DO POPRAWIENIE  */



/*
function Zoom(element) {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // Zakładamy, że ekran mniejszy niż 1024px to urządzenia mobilne (telefony i tablety)
    if (screenWidth < 1024) {
        console.log('Funkcja Zoom została wywołana na urządzeniu mobilnym.');
        
        if (element.classList.contains('mobile-zoomed-on')) {
            // Jeśli element był już powiększony, cofamy zmianę klasy
            element.classList.remove('mobile-zoomed-on');
        } else {
            // Usuwamy klasę mobile-zoomed-on z wszelkich elementów, które były już zmodyfikowane
            document.querySelectorAll('.mobile-zoomed-on').forEach((zoomedElement) => {
                zoomedElement.classList.remove('mobile-zoomed-on');
            });
            // Dodajemy klasę mobile-zoomed-on do klikniętego elementu, aby zaznaczyć jego powiększenie
            element.classList.remove('mobile-zoomed'); // Usuwamy starą klasę, jeśli jest
            element.classList.add('mobile-zoomed-on');
        }
    }
}*/

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

