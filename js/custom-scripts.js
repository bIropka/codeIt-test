$(document).ready(function () {

    /** slider **/
    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        initialSlide: 0,
        fade: true,
        speed: 1000,
        infinite: true,
        pauseOnHover: false,
        pauseOnDotsHover: true
    });
    /** end of slider **/

    /** modal window **/
    $('.get-callback').click(function () {
        $('.window-callback').fadeIn();
    });

    $('.window-callback').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.form-callback')).length) $('.window-callback').fadeOut();
        if ($target.hasClass('close-marker')) $('.window-callback').fadeOut();
    });
    /** end of modal window **/

});