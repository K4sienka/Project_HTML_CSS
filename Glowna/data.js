// JavaScript do aktualizacji daty
document.addEventListener("DOMContentLoaded", function () {
    var currentDateContainer = document.getElementById("currentDateContainer");
    var currentDate = new Date();
    var options = { Weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('pl-PL', options);

    //napis "Dzisiaj mamy:" jak i datę w jednym elemencie span
    currentDateContainer.innerHTML =  "<span>" + "Dzisiaj mamy:\t\t" + formattedDate + "</span>";
});


