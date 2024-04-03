//karuzela
/**
  Swiper:
  https://swiperjs.com/
**/
const swiper = new Swiper(".swiperCarousel", {
  slidesPerView: 3,        
  centeredSlides: true,    
  spaceBetween: 1,       
  keyboard: {
    enabled: true,       
  },
  loop: true,             
  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev",  
  },
loopAdditionalSlides: 1,
loopedSlides: 3, 


breakpoints: {
  480: {
    spaceBetween: 20
  },
  640: {
    spaceBetween: 30
  }
}
});

const slides = document.getElementsByClassName("swiper-slide");
for (const slide of slides) {
  slide.addEventListener("click", () => {
      const { className } = slide;
      if (className.includes("swiper-slide-next")) {
          swiper.slideNext();
      } else if (className.includes("swiper-slide-prev")) {
          swiper.slidePrev();
      }
  });
}

function resizeTextToFit() {
  const quoteEls = document.getElementsByClassName('quote');
  for (const el of quoteEls) {
      el.style.width = el.offsetWidth;
      el.style.height = el.offsetHeight;
  }
}
resizeTextToFit();

addEventListener("resize", (event) => {
  resizeTextToFit();
});




//dziekanat
function togglePerson(personId, event) {
  var person = document.getElementById(personId);
  var button = event.currentTarget; // Aktualnie kliknięty przycisk
  
  // Sprawdzenie, czy element jest już aktywny
  if (person.classList.contains("active")) {
    person.classList.remove("active"); // Jeśli tak, usuń klasę 'active', co ukryje element
    button.classList.remove("activeButton"); // i usuń klasę zmieniającą wygląd przycisku
  } else {
    person.classList.add("active"); // W przeciwnym razie dodaj klasę 'active', co pokaże element
    button.classList.add("activeButton"); // i dodaj klasę zmieniającą wygląd przycisku
  }
}









