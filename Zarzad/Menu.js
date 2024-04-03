document.addEventListener('DOMContentLoaded', function() {
    function Rozwin() {
        const dropdownMenu = document.querySelector('.menu_rozwijane');
        const przycisk = document.querySelector('.przycisk_menu span');
        const isOpen = dropdownMenu.classList.toggle('open');
  
        przycisk.textContent = isOpen ? '×' : '☰';
  
        document.querySelectorAll('.przeswit').forEach(element => {
            element.style.display = isOpen ? 'none' : 'block';
        });
  
        if (isOpen) {
            dropdownMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', handleLinkClick);
            });
        } else {
            dropdownMenu.querySelectorAll('a').forEach(link => {
                link.removeEventListener('click', handleLinkClick);
            });
        }
    }
  
    function handleLinkClick(event) {
        event.stopPropagation();
        Rozwin();
    }
  
    document.querySelector('.przycisk_menu').addEventListener('click', Rozwin);
});


//rozwijanie
if ($(window).width() < 1550) {
    $('.menu').on('click', function (e) {
        if ($(this).next('.podmenu').length > 0) {
            e.preventDefault();

            if (!$(this).data('expanded')) {
                $(this).next('.podmenu').slideDown();
                $(this).data('expanded', true);
            } else {
                $(this).next('.podmenu').slideUp();
                $(this).data('expanded', false);
            }
        }
    });
}
