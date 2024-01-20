document.addEventListener("DOMContentLoaded", function() {
    const dotsContainer = document.getElementById("dots");
    const scrollText = document.getElementById("bannerText");

    // Dodaj kropki dla każdego dziecka w scrollText
    for (let i = 0; i < scrollText.children.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dotsContainer.appendChild(dot);
        dot.addEventListener("click", function() {
            scrollToChild(i);
        });
    }

    // Dodaj obsługę przewijania strzałkami
    let currentIndex = 0;

    window.scrollLeft = function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = scrollText.children.length - 1;
        }
        scrollToChild(currentIndex);
    };
    
    window.scrollRight = function() {
        if (currentIndex < scrollText.children.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        scrollToChild(currentIndex);
    };

    // Dodaj nasłuchiwacz na scrollText, aby automatycznie aktualizować kropki tylko podczas użycia strzałek
    let isArrowScroll = false;
    scrollText.addEventListener("scroll", function() {
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
            behavior: "smooth"
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

    // Ustaw flagę isArrowScroll na true tylko podczas użycia strzałek
    window.addEventListener("keydown", function(event) {
        if (event.key === "ArrowUp" || event.key === "ArrowDown") {
            isArrowScroll = true;
        }
    });

    // Resetuj flagę isArrowScroll na false po zakończeniu przewijania
    scrollText.addEventListener("scrollend", function() {
        isArrowScroll = false;
    });

    // Podświetl pierwszą kropkę po załadowaniu strony
    updateDots();
});
