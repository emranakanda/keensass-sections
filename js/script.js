;(function ($) {
"use strict";

    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });

    $('#container').imagesLoaded( function() {
        $('.gallery-menu').on( 'click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
          });
          
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
        });
      });

      $('.gallery-item').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });


})(jQuery);