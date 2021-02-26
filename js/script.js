$(document).ready(function() {
//burger menu
    $('.header__burger').click(function(event) {

        $('.header__burger, .header__nav').toggleClass('active');
        $('body').toggleClass('scroll-lock');

    });

    $('.header__nav-list a').click(function(event) {

        $('.header__burger, .header__nav').removeClass('active');

    });
//portfolio slider
    $('.slider__slide').click(function(event) {

        $('.slider__preview').children().removeClass('active')
        $(this).addClass('active');
        
        let slideIndex = $(this).index();
        $('.slider__nav').children().removeClass('active');
        $('.slider__nav span').eq(slideIndex).addClass('active');

        $('.slider__main').empty();
        $('.slider__main').append(this.cloneNode(true));

    });
//slider prev btn
    $('.slider__left').click(function(event) {

        if ($('.slider__preview .active').is(':first-of-type')) {
            $('.slider__preview .active, .slider__nav span.active').removeClass('active').siblings(':last-of-type').addClass('active');
        } else {
            $('.slider__preview .active, .slider__nav span.active').removeClass('active').prev().addClass('active');
        }
        
        $('.slider__main').empty();
        $('.slider__preview .active').clone().appendTo('.slider__main');
    });
//slider next btn
    $('.slider__right').click(function(event) {

        if ($('.slider__preview .active').is(':last-of-type')) {
            $('.slider__preview .active, .slider__nav span.active').removeClass('active').siblings(':first-of-type').addClass('active');
        } else {
            $('.slider__preview .active, .slider__nav span.active').removeClass('active').next().addClass('active');
        }
        
        $('.slider__main').empty();
        $('.slider__preview .active').clone().appendTo('.slider__main');

    });
//responses slider
    $('.responses__left').click(function(event) {

        if ($('.responses__slider .active').is(':first-of-type')) {
            $('.responses__slider .active, .responses__nav span.active').removeClass('active').siblings(':last-of-type').addClass('active');
        } else {
            $('.responses__slider .active, .responses__nav span.active').removeClass('active').prev().addClass('active');
        }
    });

    $('.responses__right').click(function(event) {

        if ($('.responses__slider div.active').is(':last-of-type')) {
            $('.responses__slider div.active, .responses__nav span.active').removeClass('active').siblings(':first-of-type').addClass('active');
        } else {
            $('.responses__slider div.active, .responses__nav span.active').removeClass('active').next().addClass('active');
        }
    });
});