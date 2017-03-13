//  JavaScript

(function($) {
    "use strict"; // Start of use strict

    $(window).load(function() {

        $(".loader").fadeOut("slow");
        })

    //Lazy Loading Modal Content
   $('.portfolio-modal').on("show.bs.modal", function(){
        $(this).find(".lazy").each(function() {
            $(this).attr('src', $(this).attr('data-src-lazy'));
        });
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });



    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict


