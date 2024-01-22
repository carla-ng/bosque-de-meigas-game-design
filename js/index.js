
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

    // Images popup
    const popupContainer = document.getElementById('popup');
    const popupImage = document.getElementById('popup-image');
    const veil = document.getElementById('veil');
    const popupTriggers = document.querySelectorAll('main img');

    // Open popup triggers
    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const imageUrl = this.src;
            openPopup(imageUrl);
        });
    });


    // Open popup
    function openPopup( imageUrl ) {
        popupImage.src = imageUrl;
        popupContainer.style.display = 'block';
        veil.style.display = 'block';
        document.body.classList.add('blocked-scroll');
    }


    // Close popup
    function closePopup() {
        popupContainer.style.display = 'none';
        veil.style.display = 'none';
        document.body.classList.remove('blocked-scroll');
    }


    //Close popups eventListeners
    veil.addEventListener('click', closePopup);
    popupImage.addEventListener('click', closePopup);


/*
    // Get all the links in the navigation
  const navLinks = document.querySelectorAll('nav ul li a');

  // Add an event listener to the window scroll event
  window.addEventListener('scroll', function () {
    // Loop through each section and check if it's in the viewport
    for (const link of navLinks) {
      const sectionId = link.getAttribute('href').substring(1);
      const section = document.getElementById(sectionId);

      if (isElementInViewport(section)) {
        // If the section is in the viewport, add the "underlined" class to the corresponding link
        link.classList.add('underlined');
      } else {
        // If not, remove the "underlined" class
        link.classList.remove('underlined');
      }
    }
  });

  // Function to check if an element is in the viewport
  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  */
});

