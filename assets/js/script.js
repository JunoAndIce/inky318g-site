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
      }, 1000); // This should match the transition duration
      const mainPage = $('#main_page');
      mainPage.css("opacity", 1);
      document.body.style.overflow = 'auto'; // Enable scrolling again
    }, 5000);
  }
}, 1000); // Replace 1000 with the number of milliseconds you want to delay