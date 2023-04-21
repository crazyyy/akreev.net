// Avoid `console` errors in browsers that lack a console.
(function() {
  const noop = function() {};
  const methods = [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'markTimeline',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeline',
    'timelineEnd',
    'timeStamp',
    'trace',
    'warn'
  ];
  const console = window.console || {};

  for (const method of methods) {
    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

if (typeof jQuery === 'undefined') {
  console.warn("jQuery hasn't loaded");
} else {
  console.log(`jQuery ${jQuery.fn.jquery} has loaded`);
}

// Place any jQuery/helper plugins in here.

// Slow scroll back to top
// Select the back-to-top link
const backToTopButton = document.querySelector('.back-to-top a');

// Add a click event listener to the link
backToTopButton.addEventListener('click', function(e) {
  // Prevent default link behavior
  e.preventDefault();

  // Get the current scroll position
  const start = window.pageYOffset;

  // Calculate the distance to scroll
  const distance = 0 - start;

  // Set the animation duration (in milliseconds)
  const duration = 1000;

  // Define the start time of the animation
  let startTime = null;

  // Define the animation function
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const scroll = easeInOutQuad(timeElapsed, start, distance, duration);
    window.scrollTo(0, scroll);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  // Define the easing function (for a smooth scroll animation)
  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  // Call the animation function
  requestAnimationFrame(animation);
});

// home page show/hide images by click on header nav
const projectCovers = document.querySelectorAll('.project-cover');
const categories = ['#psd', '#png', '#jpg'];

document.querySelectorAll('.headnav a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    const href = link.getAttribute('href');
    const categoryType = href.substring(1);
    if (categories.includes(href)) {
      event.preventDefault();
      event.stopPropagation();
      console.log(categoryType);
      projectCovers.forEach((projectCover) => {
        const category = projectCover.getAttribute('data-category');
        projectCover.style.display = category && category.includes(categoryType.toUpperCase()) ? 'block' : 'none';
      });
    }
  });
});

// collection page show lightbox
// please write a code to show lightbox on pure JS:
// - when click on IMG with class "img-lightbox" create new modal window with maxium 80% of height and width of user window and show image from main IMG attribute "data-full-size"
// - at the bottom of modal window shown text "Original image: " + attribute "data-original-link" from original IMG
// - close modal windows on presing "ESC" keyboard button or "close" button on modal window or click outside modal window

// const imgLightboxElems = document.querySelectorAll('.img-lightbox');
// const modalElem = document.querySelector('.img-modal');
// const lightboxImgElem = document.querySelector('.lightbox-img');
// const originalLinkElem = document.querySelector('.original-link');

// imgLightboxElems.forEach(imgLightboxElem => {
//   imgLightboxElem.addEventListener('click', function(event) {
//     event.preventDefault();
//     event.stopPropagation();

//     // Show the modal
//     modalElem.classList.add('show');

//     // Set the full-size image and the original link in the modal
//     lightboxImgElem.src = imgLightboxElem.dataset.fullSize;
//     originalLinkElem.textContent = `Original image: ${imgLightboxElem.dataset.originalLink}`;

// modalElem.addEventListener('click', function(event) {
//   if (event.target === this || event.target.classList.contains('close-btn')) {
//     // Hide the modal when the user clicks outside the image or the "close" button
//     modalElem.classList.remove('show');
//   }
// });

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'Escape') {
//     // Hide the modal when the user presses the "ESC" key
//     modalElem.classList.remove('show');
//   }
// });

//   });
// });
