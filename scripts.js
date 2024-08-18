
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const checkVisibility = () => {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();
});
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});


$(document).ready(function() {
    $('.hamburger').on('click', function() {
        $('nav ul').toggleClass('active');
    });

    $("#accordion").accordion({
        heightStyle: "content",  // Accordion panels adjust their height based on the content
        active: false,           // No panel is active (open) by default
        collapsible: true,       // Allows all panels to be collapsed
        autoHeight: false        // Deprecated in newer versions; "heightStyle" is preferred
    });

});