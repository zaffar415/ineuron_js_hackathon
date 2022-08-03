(function() {
    

    $('.owl-carousel.banner-slider').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        items:1
    });

    $('.owl-carousel-archievers, .owl-carousel-hackathon').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,                
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:false,
                loop:false
            }
        }
    })

    $(".owl-carousel.owl-carousel-partners").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,                
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:3,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:9,
                nav:false,
            }
        }
    })

    $('.owl-carousel.team').owlCarousel({
        loop:true,
        margin:50,
        responsiveClass:true,    
        navigation:false,            
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            500:{
                items:2,
                nav:false
            },
            900: {
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
            }
        }
    });

    $(".loader").hide();
    $("body").removeClass("loading");
})();