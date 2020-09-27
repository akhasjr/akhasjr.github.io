(function($) {
  "use strict";

  // Animation on Scroll
  AOS.init({
    duration: 1200,
    easing: "ease-in-out",
    once: true
  });


  // Counter Up Numbers
  jQuery(document).ready(function($) {
      $('.counter').counterUp({
          delay: 10,
          time: 2000,
      });
  });


  // Back to Top Button Scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').hide().click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });



  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.navbar-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
      }
      
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }

    });
  });


  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, 'easeInOutExpo', function(){
          window.location.hash = hash;
        });
      }
    });
  });


})(jQuery);