
// Wait for the entire window to load, including scripts and Lottie animations
window.onload = function() {
    // Selecting the elements
    var cardsButton = document.getElementById('cards-button');
    var spacerBottom = document.querySelector('.spacer.bottom');
    var secretFooter = document.getElementById('secret');

    // Adding click event listener to the cards button
    cardsButton.addEventListener('click', function() {
        spacerBottom.classList.toggle('hidden');
        secretFooter.classList.toggle('visible');
    });
};
