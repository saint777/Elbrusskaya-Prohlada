function startProgressBar(element, delay) {
  $(element).css({
    width: "100%",
    transition: "width " + delay + "ms"
  });
}

function resetProgressBar(elem) {
  $(elem).css({
    width: 0,
    transition: "width 0s"
  });
}

$(document).ready(function(){
    var sliderDelay = $(".slider").data("delay");
    var slider2Delay = $(".slider2").data("delay");

    $('.slider .owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace)  {
          return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
      }).owlCarousel({
        items: 1,
        loop: 1,
        dots: true,
        startPosition: 1,
        autoplay: true,
        autoplayTimeout: sliderDelay,
        onInitialized: function(){
          startProgressBar(".slider .indicator .fill", sliderDelay)
        },
        onTranslate: function(){
          resetProgressBar(".slider .indicator .fill")
        },
        onTranslated: function(){
          startProgressBar(".slider .indicator .fill", sliderDelay)
        }
      });

      $('.slider2 .owl-carousel').on('initialized.owl.carousel changed.owl.carousel', function(e) {
          if (!e.namespace)  {
            return;
          }
          var carousel2 = e.relatedTarget;
          $('.counter').text(carousel2.relative(carousel2.current()) + 1 + '/' + carousel2.items().length);
        }).owlCarousel({
          items: 2,
          loop: 1,
          margin: 20,
          dots: false,
          nav: true,
          autoplay: true,
          autoplayTimeout: slider2Delay,
          navContainer: ".slider2 .customControls .owl-nav",
          onInitialized: function(){
            startProgressBar(".slider2 .customControls .indicator .fill", slider2Delay)
          },
          onTranslate: function(){
            resetProgressBar(".slider2 .customControls .indicator .fill")
          },
          onTranslated: function(){
            startProgressBar(".slider2 .customControls .indicator .fill", slider2Delay)
          }
        });
});
