const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slides = Array.from(track.children);

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

// Reaguj na zmianę rozmiaru ekranu
window.addEventListener('resize', updateCarousel);

// Początkowe ustawienie
updateCarousel();