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

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function slickSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };

    slickSlide('.catalog-item__link');
    slickSlide('.catalog-item__back');
});