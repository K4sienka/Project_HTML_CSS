//otwieranie w nowej karcie
function redirectToPage(url) {
    window.open(url, '_blank');
}

//przesuwanie po stronie
function scrollToElement(elementId) {
  var element = document.getElementById(elementId);

  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
}


//karuzela
/**
  Swiper:
  https://swiperjs.com/
**/
const swiper = new Swiper(".swiperCarousel", {
  slidesPerView: 3,        
  centeredSlides: true,    
  spaceBetween: 3,       
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
function togglePerson(personId) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("person");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(personId).style.display = "block";
  event.currentTarget.className += " active";
}
function togglePerson(personId) {
  var person = document.getElementById(personId);
  
  person.classList.toggle("active");
}





