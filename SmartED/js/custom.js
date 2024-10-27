(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function(){
    $('.preloader').delay(500).slideUp('slow'); // set duration in brackets
  });

  // NAVBAR
  $(".navbar").headroom();

  $('.navbar-collapse a').click(function(){
      $(".navbar-collapse").collapse('hide');
  });

  $('.slick-slideshow').slick({
    autoplay: true,
    infinite: true,
    arrows: false,
    fade: true,
    dots: true,
  });

  $('.slick-testimonial').slick({
    arrows: false,
    dots: true,
  });

  // LinkedIn OAuth Setup
  const linkedInClientID = '86b3p5nmfp0knr';
  const linkedInRedirectURI = 'https://www.linkedin.com/company/smarted-edu/';

  // Function to handle LinkedIn sign-in
  window.handleLinkedInLogin = function() {
      const linkedInAuthURL = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${linkedInClientID}&redirect_uri=${encodeURIComponent(linkedInRedirectURI)}&scope=r_liteprofile%20r_emailaddress`;
      window.location.href = linkedInAuthURL;
  };

  // Function to handle LinkedIn authentication redirect
  function handleLinkedInRedirect() {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');

      if (code) {
          // Redirect to home page on successful login
          window.location.href = 'index.html';
      }
  }

  // Call this function on page load to check for LinkedIn redirect code
  $(document).ready(function() {
      handleLinkedInRedirect();
  });

})(window.jQuery);
