// Po załadowaniu całego dokumentu HTML wykonaj następujące instrukcje
document.addEventListener("DOMContentLoaded", function () {
  // Pobierz referencję do kontenera dla kropek (dots) i do elementu tekstu do przewijania (bannerText)
  const dotsContainer = document.getElementById("dots");
  const scrollText = document.getElementById("bannerText");

  // Dla każdego dziecka elementu bannerText utwórz kropkę, dodaj do kontenera i dodaj nasłuchiwanie na kliknięcie
  for (let i = 0; i < scrollText.children.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
  }

  // Zmienna śledząca aktualny indeks dziecka w bannerText
  let currentIndex = 0;

  // Funkcja do przewijania w lewo
  window.scrollLeft2 = function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = scrollText.children.length - 1;
    }
    scrollToChild(currentIndex);
  };

  // Funkcja do przewijania w prawo
  window.scrollRight = function () {
    if (currentIndex < scrollText.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    scrollToChild(currentIndex);
  };

  // Flaga określająca, czy aktualne przewijanie jest spowodowane strzałkami
  let isArrowScroll = false;

  // Nasłuchiwacz na zdarzenie scroll na elemencie bannerText
  scrollText.addEventListener("scroll", function () {
    if (isArrowScroll) {
      // Oblicz indeks dziecka na podstawie przewinięcia
      const childIndex = Math.round(scrollText.scrollTop / scrollText.children[0].offsetHeight);
      currentIndex = childIndex;
      updateDots(); // Aktualizuj wyświetlane kropki
    }
  });

  // Funkcja przewijająca do konkretnego dziecka
  function scrollToChild(index) {
    currentIndex = index;
    updateDots(); // Aktualizuj wyświetlane kropki
    const child = scrollText.children[index];
    // Użyj smooth scroll do przewinięcia do odpowiedniego dziecka
    scrollText.scrollTo({
      top: child.offsetTop,
      behavior: "smooth",
    });
  }

  // Funkcja aktualizująca wyświetlane kropki
  function updateDots() {
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  // Nasłuchiwacz na zdarzenie naciśnięcia klawisza strzałki górnej lub strzałki dolnej
  window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      isArrowScroll = true; // Ustaw flagę na true, gdy przewijasz strzałkami
    }
  });

  // Nasłuchiwacz na zdarzenie scrollend na elemencie bannerText
  scrollText.addEventListener("scrollend", function () {
    isArrowScroll = false; // Ustaw flagę na false, gdy przewinięcie strzałkami zakończy się
  });

  updateDots(); // Aktualizuj wyświetlane kropki na początku
});
