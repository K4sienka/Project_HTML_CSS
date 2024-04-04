//Kropki w aktualnościach
document.addEventListener("DOMContentLoaded", function () {
  const dotsContainer = document.getElementById("dots");
  const scrollText = document.getElementById("bannerText");

  for (let i = 0; i < scrollText.children.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);
  }

  let currentIndex = 0;

  window.scrollLeft2 = function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = scrollText.children.length - 1;
    }
    scrollToChild(currentIndex);
  };

  window.scrollRight = function () {
    if (currentIndex < scrollText.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    scrollToChild(currentIndex);
  };

  let isArrowScroll = false;

  scrollText.addEventListener("scroll", function () {
    if (isArrowScroll) {
   
      const childIndex = Math.round(scrollText.scrollTop / scrollText.children[0].offsetHeight);
      currentIndex = childIndex;
      updateDots();
    }
  });

  function scrollToChild(index) {
    currentIndex = index;
    updateDots();
    const child = scrollText.children[index];

    scrollText.scrollTo({
      top: child.offsetTop,
      behavior: "smooth",
    });
  }

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

  window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      isArrowScroll = true;
    }
  });

  scrollText.addEventListener("scrollend", function () {
    isArrowScroll = false; 
  });

  updateDots();
});
