// $(document).ready(function(){
//     $('.carousel.carousel-slider').carousel({
//         fullWidth: true,
//         indicators: true
//       });
//     //   autoplay();
//     //   function autoplay() {
//     //     $('.carousel').carousel('next');
//     //     setTimeout(autoplay, 4500);
//     // }

//     // var carouselAutoplay = setInterval(function() {
//     //     $('.fa-angle-right').click();
//     //   }, 7000);
     
//     //   $('.fa-angle-right').click(function() {
//     //     $('.carousel').carousel('next');
//     //     clearInterval(carouselAutoplay);
//     //     carouselAutoplay = setInterval(function() {
//     //       $('.fa-angle-right').click();
//     //     }, 7000);
//     //   });
//     //   $('.fa-angle-left').click(function() {
//     //     $('.carousel').carousel('prev');
//     //     clearInterval(carouselAutoplay);
//     //     carouselAutoplay = setInterval(function() {
//     //       $('.fa-angle-right').click();
//     //     }, 7000);
//     //   });
//   });

document.addEventListener('DOMContentLoaded', function () {
    var carouselElems = document.querySelector('.carousel.carousel-slider');
        var carouselInstance = M.Carousel.init(carouselElems, {
            fullWidth: true,
            indicators: true
        });
    });
    function moveNextCarousel() {
        var elems = document.querySelector('.carousel.carousel-slider');
        var moveRight = M.Carousel.getInstance(elems);
        moveRight.next(1);
    }
    function movePrevCarousel() {
        var elems = document.querySelector('.carousel.carousel-slider');
        var moveLeft = M.Carousel.getInstance(elems);
        moveLeft.prev(1);
    }