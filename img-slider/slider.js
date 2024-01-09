const slides = document.querySelectorAll('.slide');
let slideIndex = 0
let intervalID = null

document.addEventListener('DOMContentLoaded', intializeSlider)

function intializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide')
        intervalID = setInterval(nextSlide, 3000)
    } 

}

function showSlide() {
    if(slides.length <= slideIndex){
        slideIndex = 0
    } else if (slideIndex < 0){
        slideIndex = slides.length -1
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide')
    })

    slides[slideIndex].classList.add('displaySlide')
}

function nextSlide() {
    // clearInterval(intervalID)
    slideIndex++;
    showSlide()
}

function prevSlide(){
    // clearInterval(intervalID)
    slideIndex--;
    showSlide()
}