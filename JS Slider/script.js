let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100 + '%';
    document.querySelector('.slider').style.transform = `translateX(${offset})`;
}

function prevSlide() { showSlide(currentIndex - 1); }
function nextSlide() { showSlide(currentIndex + 1); }