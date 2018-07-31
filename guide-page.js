            $(document).ready(function() {
    /* Navigation smooth scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top-30
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Change menu background on scrolling */
    $(document).scroll(function() {
        if ($(document).scrollTop() > 100) {
            $("nav").addClass("navbar-scrolled");
        } else {
            $("nav").removeClass("navbar-scrolled");
        }
    });
});
