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
    document.querySelector('.slider').style.transform = `translateX(${-currentIndex * 100}%)`;
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    updateSlide();
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    updateSlide();
}

function updateSlide() {
    for (let i = 0; i < totalSlides; i++) {
        if (i === currentIndex) {
            document.querySelector('.slider').style.transform = `translateX(${-i * 100}%)`;
        }
    }
}
