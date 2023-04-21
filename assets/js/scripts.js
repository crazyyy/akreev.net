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
const $ = jQuery
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
$(document).ready(function() {
  var $lightboxModal = $('#lightbox-modal');
  var $lightboxContent = $('.lightbox-content');
  var $lightboxImage = $('#lightbox-image');
  var $downloadLink = $('#download-link');
  var $closeButton = $('#close-button');
  var $prevButton = $('#prev-button');
  var $nextButton = $('#next-button');
  var $lightboxLinks = $('.lightbox-link');
  var currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    var $lightboxLink = $lightboxLinks.eq(currentIndex);
    var fullSize = $lightboxLink.data('full-size');
    var originalLink = $lightboxLink.data('original-link');
    $lightboxImage.attr('src', fullSize);
    $downloadLink.attr('href', originalLink);
    $lightboxModal.show();
  }

  function closeLightbox() {
    $lightboxModal.hide();
  }

  function prevImage() {
    if (currentIndex > 0) {
      currentIndex--;
      openLightbox(currentIndex);
    }
  }

  function nextImage() {
    if (currentIndex < $lightboxLinks.length - 1) {
      currentIndex++;
      openLightbox(currentIndex);
    }
  }

  $lightboxLinks.click(function(event) {
    event.preventDefault();
    var index = $lightboxLinks.index(this);
    openLightbox(index);
  });

  $closeButton.click(function() {
    closeLightbox();
  });

  $(document).keydown(function(event) {
    if (event.keyCode === 27) {
      closeLightbox();
    } else if (event.keyCode === 37) {
      prevImage();
    } else if (event.keyCode === 39) {
      nextImage();
    }
  });

  $lightboxModal.click(function(event) {
    if (event.target === this) {
      closeLightbox();
    }
  });

  $prevButton.click(function() {
    prevImage();
  });

  $nextButton.click(function() {
    nextImage();
  });
});
