
// Get the button element
const backToTopBtn = document.getElementById("back-to-top-button");


// Show or hide the button based on scroll position
window.onscroll = function() {
    if ( document.documentElement.scrollTop > 800 ) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
}


// Scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', function () {
    const popupContainer = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const veil = document.getElementById('veil');
    const popupTriggers = document.querySelectorAll('main img');

    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const imageUrl = this.src;
            openPopup(imageUrl);
        });
    });

    function openPopup( imageUrl ) {
        popupImage.src = imageUrl;
        popupContainer.style.display = 'block';
        veil.style.display = 'block';
        document.body.classList.add('blocked-scroll');
    }

    function closePopup() {
        popupContainer.style.display = 'none';
        veil.style.display = 'none';
        document.body.classList.remove('blocked-scroll');
    }

    veil.addEventListener('click', closePopup);
    popupImage.addEventListener('click', closePopup);
});
