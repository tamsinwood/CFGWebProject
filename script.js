// Search bar
document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded before adding event listeners

    // Get references to the search input and clear button
    var searchInput = document.getElementById('search-input');
    var clearButton = document.getElementById('clear-search');

    // Add an event listener to the clear button
    clearButton.addEventListener('click', function () {
        // Clear the search input value
        searchInput.value = '';

     
        searchInput.focus();
    });
});

// Login Modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "block";
    document.body.style.background = "rgba(0, 0, 0, 0.5)";
}

// Function to close the login modal
function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
    document.body.style.background = "none";
}

// Slideshow section
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    updateDots();
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    updateDots(); // Add this line to update dot styles
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
function updateDots() {
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
    }

    dots[slideIndex - 1].classList.add("active-dot");
}


// Function the prev & next arrows
document.querySelector(".next").addEventListener("click", function() {
    plusSlides(1);
});
