
function goToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const currentPosition = window.scrollY; // bieżąca pozycja przewijania strony
        let offset = 35; // wartość domyślna
        if (window.innerWidth < 661 & window.innerWidth > 481) {
            offset = 300; // wartość dla mniejszej szerokości okna
        }
        if (window.innerWidth < 700 & window.innerWidth > 660) {
            offset = 320; // wartość dla mniejszej szerokości okna
        }
        if (window.innerWidth < 769 & window.innerWidth > 699) {
            offset = 300; // wartość dla mniejszej szerokości okna
        }
        if (window.innerWidth < 806 & window.innerWidth > 768) {
            offset = 310; // wartość dla mniejszej szerokości okna
        }
        if (window.innerWidth < 881 & window.innerWidth >  805) {
            offset = 290; // wartość dla mniejszej szerokości okna
        }
        if (window.innerWidth < 921 & window.innerWidth >  880) {
            offset = 275; // wartość dla mniejszej szerokości okna
        }
        if (window.innerWidth < 1101 & window.innerWidth >  920) {
            offset = 260; // wartość dla mniejszej szerokości okna
        }
        if (window.innerWidth < 1341 & window.innerWidth >  1000) {
            offset = 225; // wartość dla mniejszej szerokości okna
        }
         if (window.innerWidth < 480) {
            offset = 185; // wartość dla mniejszej szerokości okna
        }
        const targetPosition = section.offsetTop - offset; // docelowa pozycja przewijania strony
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  }