let clicked = false;

function Zoom(element) {
    if (!clicked) {
        element.classList.add('zoomed');
        clicked = true;
    } else {
        element.classList.remove('zoomed');
        clicked = false;
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
        window.location.href = "#"
    }
    
}