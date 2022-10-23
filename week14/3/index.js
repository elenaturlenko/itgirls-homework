let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    goToSlide(currentSlide+1);
}
 
function previousSlide() {
    goToSlide(currentSlide-1);
}
 
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    slides[currentSlide].className = 'slide showing';
}

let next = document.getElementById('next');
let previous = document.getElementById('previous');
 
next.onclick = function() {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
};