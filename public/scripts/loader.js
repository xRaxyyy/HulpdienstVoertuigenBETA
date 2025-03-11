<<<<<<< HEAD
window.onload = function() {
  // Set the duration for the loader to stay visible (e.g., 2 seconds)
  setTimeout(function() {
      // Select the loader element
      const loader = document.querySelector('#showbox-holder');
=======
window.onload = function () {
  // Update the scrollbar immediately when the page loads
  if (typeof window.updateScrollbar === 'function') {
      window.updateScrollbar();
  }

  // Set the duration for the loader to stay visible (e.g., 1 second)
  setTimeout(function () {
      const loader = document.querySelector('#showbox-holder');

>>>>>>> 68db654 (Initial commit)
      // Add the fade-out class to trigger the animation
      loader.classList.add('fade-out');

      // Remove the overflow: hidden style from the html element
      document.documentElement.style.overflow = '';

<<<<<<< HEAD
      // Optionally, set the display to 'none' after the fade-out is complete
      setTimeout(function() {
          loader.style.display = 'none';
      }, 600); // This matches the fade-out duration
  }, 1000); // 2000ms = 2 seconds
};
=======
      // Hide the loader after the fade-out animation is complete
      setTimeout(function () {
          loader.style.display = 'none';
      }, 600); // Matches the fade-out duration
  }, 1000); // 1000ms = 1 second
};
>>>>>>> 68db654 (Initial commit)
