$(document).ready(function () {
    
    $('.owl-carousel').owlCarousel({
        margin:10,
        loop:true,
        responsiveClass:true,
        autoplay:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            500:{
                items:2,
                nav:false
            },
            1000:{
                items:2,
                nav:true,
            }
        }
    });

new WOW().init();

});