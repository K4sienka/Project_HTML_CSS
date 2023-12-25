document.addEventListener("DOMContentLoaded", function () {
    var currentDateContainer = document.getElementById("currentDateContainer");
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('pl-PL', options);

    // Ustaw datę wewnątrz elementu span
    currentDateContainer.innerHTML = formattedDate;
});


//
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