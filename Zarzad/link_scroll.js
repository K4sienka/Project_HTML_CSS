//link do innej strony, otwiera sie w nowej karcie
function redirectToPage(url) {
    window.open(url, '_blank');
}

//przewijanie zdjec
/**
  Swiper:
  https://swiperjs.com/
**/
const swiper = new Swiper(".swiperCarousel", {
  slidesPerView: 3,        // Określenie liczby widocznych slajdów na raz
  centeredSlides: true,    // Ustawienie, czy slajdy mają być wyśrodkowane
  spaceBetween: 3,         // Odległość między slajdami
  keyboard: {
    enabled: true,         // Włączenie obsługi klawiatury do nawigacji
  },
  loop: true,               // Ustawienie, czy pokazywać slajdy w pętli
 // pagination: {
 //   el: ".swiper-pagination",  // Określenie elementu dla paginacji (jeśli istnieje)
 // },
  navigation: {
    nextEl: ".swiper-button-next",  // Określenie elementu dla przycisku "Next"
    prevEl: ".swiper-button-prev",  // Określenie elementu dla przycisku "Prev"
  },
// Dodanie dodatkowych opcji dla efektu kółka
loopAdditionalSlides: 1, // Dodatkowe slajdy w pętli, aby zapewnić płynność
loopedSlides: 3, // Ilość slajdów, które mają być kopiowane w pętli
});

// Pobranie wszystkich elementów o klasie "swiper-slide" i dodanie nasłuchiwacza kliknięcia
const slides = document.getElementsByClassName("swiper-slide");
for (const slide of slides) {
  slide.addEventListener("click", () => {
      const { className } = slide;
      // Sprawdzenie, czy klasa zawiera "swiper-slide-next" lub "swiper-slide-prev"
      if (className.includes("swiper-slide-next")) {
          swiper.slideNext();  // Przewinięcie do następnego slajdu
      } else if (className.includes("swiper-slide-prev")) {
          swiper.slidePrev();  // Przewinięcie do poprzedniego slajdu
      }
  });
}

// Funkcja do dostosowywania rozmiaru tekstu, aby dopasować się do dostępnego miejsca
function resizeTextToFit() {
  const quoteEls = document.getElementsByClassName('quote');
  for (const el of quoteEls) {
      el.style.width = el.offsetWidth;
      el.style.height = el.offsetHeight;
  }
  // textFit(quoteEls, { maxFontSize: 14 });  Wykorzystanie biblioteki textFit do dopasowania rozmiaru tekstu
}

// Wywołanie funkcji resizeTextToFit na początku
resizeTextToFit();

// Dodanie nasłuchiwacza zdarzeń dla zmiany rozmiaru okna i ponowne wywołanie resizeTextToFit
addEventListener("resize", (event) => {
  resizeTextToFit();
});

