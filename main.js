var typed = new Typed(".text", {
    strings: ["Story Writer", "Explorer", "Software Developer"], // Note the corrected property name "Strings" to "strings"
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// JavaScript Slider

const slides = document.querySelector(".slides");
const cards = document.querySelectorAll(".card");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function getVisibleCards() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
}

function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 16; // card width + margin
    slides.style.transform = `translateX(-${index * cardWidth}px)`;
}

next.addEventListener("click", () => {
    const visibleCards = getVisibleCards();

    if (index >= cards.length - visibleCards) {
        index = 0; // After last -> first
    } else {
        index++;
    }

    updateSlider();
});

prev.addEventListener("click", () => {
    const visibleCards = getVisibleCards();

    if (index <= 0) {
        index = cards.length - visibleCards; // Before first -> last
    } else {
        index--;
    }

    updateSlider();
});

window.addEventListener("resize", () => {
    const visibleCards = getVisibleCards();

    if (index > cards.length - visibleCards) {
        index = cards.length - visibleCards;
    }

    updateSlider();
});

updateSlider();

setInterval(() => {
    next.click();
}, 3000); // slide every 3 seconds