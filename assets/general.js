(function() {
    $('.owl-carousel.banner-slider').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        items:1
    });

    $('.owl-carousel-archievers, .owl-carousel-hackathon, .owl-carousel.owl-carousel-partners').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,                
        responsive:{
            0:{
                items:2,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    })

    $('.owl-carousel.hall-of-fame, .owl-carousel.what-you-will-learn, .owl-carousel.team').owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,    
        navigation:false,            
        responsive:{
            0:{
                items:1,
                nav:false
            },
            500:{
                items:1,
                nav:false
            },
            900: {
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false,
                loop:false
            }
        }
    })
})();