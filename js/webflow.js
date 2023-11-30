
document.addEventListener('DOMContentLoaded', function() {
    var cardsButton = document.getElementById('cards-button');
    var spacerBottom = document.querySelector('.spacer.bottom');
    var secretFooter = document.getElementById('secret');

    if (cardsButton) {
        cardsButton.addEventListener('click', function() {
            spacerBottom.classList.toggle('hidden');
            secretFooter.classList.toggle('visible');
        });
    }
});
