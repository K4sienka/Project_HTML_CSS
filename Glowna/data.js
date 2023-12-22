document.addEventListener("DOMContentLoaded", function () {
    var currentDateContainer = document.getElementById("currentDateContainer");
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('pl-PL', options);

    // Ustaw datę wewnątrz elementu span
    currentDateContainer.innerHTML = formattedDate;
});
