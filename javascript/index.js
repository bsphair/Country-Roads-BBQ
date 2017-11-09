// document.ready(function(){
//     // Activate Carousel
//     $("#myCarousel").carousel({interval: 500});
//
//     // Enable Carousel Indicators
//     $(".item1").click(function(){
//         $("#myCarousel").carousel(0);
//     });
//   }

var carousel = document.getElementsByClassName("myCarousel");

document.body.ready(function(){
    // Activate Carousel
    carousel.carousel({interval: 500});

    // Enable Carousel Indicators
    $(".item1").click(function(){
      carousel.carousel(0);
    });
    $(".item2").click(function(){
        $carousel.carousel(1);
    });
    $(".item3").click(function(){
        carousel.carousel(2);
    });
    $(".item4").click(function(){
        carousel.carousel(3);
    });

    // Enable Carousel Controls
    $(".left").click(function(){
        carousel.carousel("prev");
    });
    $(".right").click(function(){
        carousel.carousel("next");
    });
});
