$('.owl-carousel1').owlCarousel({ 
    autoplay:true,
    autoplayTimeout: 10500,
    autoplaySpeed: 1300,
    nav: true,
    navSpeed: 1000,
    loop: true,
    responsive:{
                0:{
                    items:1
                },
            }
        });
        

$('.owl-carousel2').owlCarousel({ 
    autoplay:true,
    autoplayTimeout: 4500,
    autoplaySpeed: 2300,
    loop: true,
    responsive:{
                        0:{
                            items:3
                        },
                        1200:{
                            items:8
                        }
                    }
                });
                