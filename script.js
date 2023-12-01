// wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // call the fadeIn function
    fadeIn();
});

// function to fade in the body
function fadeIn() {
    const body = document.body;
    // set opacity to 1 for a fade-in effect
    body.style.opacity = 1;
}

// initialize slide index and show the slides
var slideIndex = 0;
showSlides(slideIndex);

// function to navigate to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// function to display the slides
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    // reset to the first slide if reached the end
    if (n >= slides.length) {
        slideIndex = 0;
    }

    // go to the last slide if navigating before the first slide
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // display the current slide
    slides[slideIndex].style.display = "block";
}
