// código copiado do site https://owlcarousel2.github.io/OwlCarousel2/demos/basic.html

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})