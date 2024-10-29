let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    goToSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    goToSlide(currentSlide - 1);
});

function goToSlide(slideIndex) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (slideIndex + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}
