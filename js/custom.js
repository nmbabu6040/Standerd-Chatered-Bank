
$('.whatSlider').owlCarousel({
    loop: true,
    margin: 30,
    items: 5,
    dots: false,
    nav:true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    autoplay: true,
    smartSpeed:500,
    autoplayTimeout: 4000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 5,

        }
    }
})
