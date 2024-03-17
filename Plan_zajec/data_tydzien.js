function czyTydzienParzysty() {
    var currentDate = new Date();
    var currentWeek = getISOWeek(currentDate);
    var result = (currentWeek % 2 === 0) ? "parzysty" : "nieparzysty";
    var formattedDate = currentDate.toLocaleDateString('pl-PL', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return `Dzisiaj jest ${formattedDate}, tydzień jest ${result}.`;
}

function getISOWeek(date) {
        const onejan = new Date(date.getFullYear(), 0, 1);
        const daysOffset = 4 - onejan.getDay(); // 
        const firstMonday = new Date(onejan.getFullYear(), 0, 1 + daysOffset); // Oblicza datę pierwszego poniedziałku
        const daysPassed = Math.floor((date - firstMonday) / 86400000); // Oblicza liczbę dni od pierwszego poniedziałku
        const week = Math.floor(daysPassed / 7) + 1; // Oblicza numer tygodnia
    
        return week;
}

function updateResultSpan() {
    var resultSpan = document.getElementById("resultSpan");
    if (resultSpan) {
        resultSpan.textContent = czyTydzienParzysty();
    }
}


document.addEventListener("DOMContentLoaded", function () {
    updateResultSpan();
});