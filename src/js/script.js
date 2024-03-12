$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1500,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../src/icons/chevron-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../src/icons/chevron-right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});