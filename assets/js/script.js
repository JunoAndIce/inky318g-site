
// Disable scrolling
document.body.style.overflow = 'hidden';

setTimeout(async () => {
  // await move();
  // Check if the document's readyState is complete after the move function is done animating
  if (document.readyState == "complete") {
    // hide loader after 2 seconds
    setTimeout(() => {
      const loader = $('#loader_ctn');
      loader.css({
        "transition": "opacity 1s ease-out",
        "opacity": 0
      });

      setTimeout(() => {
        loader.css("display", 'none');

        const mainPage = $('#main_page');
        mainPage.css("display", 'block');

        setTimeout(() => {
          mainPage.css("opacity", 1);
        }, 500);  // This should match the transition duration for opacity

      }, 1000);  // This should match the transition duration for opacity



      document.body.style.overflow = 'auto'; // Enable scrolling again


    }, 5000);


  }
}, 1000); // Replace 1000 with the number of milliseconds you want to delay


window.addEventListener('scroll', function() {
  var arrow = document.getElementById('arrow_ctn');
  if (window.scrollY > 0) {
    // User has scrolled down, hide the arrow
    arrow.style.opacity = '0';
    navbar.classList.add('navbar-visible');
  } else {
    // User has scrolled to the top, show the arrow
    arrow.style.opacity = '1';
    navbar.classList.remove('navbar-visible');
  }
});


// document.addEventListener('DOMContentLoaded', (event) => {
//   const navbar = document.getElementById('navbar');
//   window.addEventListener('scroll', () => {
//     if (window.scrollY > 0) {
//       navbar.classList.add('navbar-visible');
//     } else {
//       navbar.classList.remove('navbar-visible');
//     }
//   });
// });