var typed = new Typed(".text", {
    strings: ["MERN Stack Developer", "Problem Solver", "Software Developer"], // Note the corrected property name "Strings" to "strings"
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/////
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
let autoSlide;

// Get number of slides visible
function getSlidesPerView() {

    if (window.innerWidth <= 600) {
        return 1;
    }

    if (window.innerWidth <= 900) {
        return 2;
    }

    return 3;
}


// Move slider
function moveSlider() {

    const slidesPerView = getSlidesPerView();

    const slideWidth = 100 / slidesPerView;

    track.style.transform =
        `translateX(-${currentIndex * slideWidth}%)`;
}


// Next slide
function nextSlide() {

    const slidesPerView = getSlidesPerView();

    const maxIndex = slides.length - slidesPerView;

    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        // Go back to beginning
        currentIndex = 0;
    }

    moveSlider();
}


// Previous slide
function previousSlide() {

    const slidesPerView = getSlidesPerView();

    const maxIndex = slides.length - slidesPerView;

    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = maxIndex;
    }

    moveSlider();
}


// Buttons
nextBtn.addEventListener("click", () => {
    nextSlide();
    restartAutoSlide();
});

prevBtn.addEventListener("click", () => {
    previousSlide();
    restartAutoSlide();
});


// Automatic slider
function startAutoSlide() {

    autoSlide = setInterval(() => {
        nextSlide();
    }, 3000);

}


// Restart automatic slider
function restartAutoSlide() {

    clearInterval(autoSlide);

    startAutoSlide();

}


// Start slider
startAutoSlide();


// Reset position when screen size changes
window.addEventListener("resize", () => {

    const slidesPerView = getSlidesPerView();
    const maxIndex = slides.length - slidesPerView;

    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    moveSlider();
});