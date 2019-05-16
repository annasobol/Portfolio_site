$(document).ready(function () {
    $('.header').on('click', '.menu-button', function () {
        $(this).toggleClass('active');
        $('.navigation-wrapper').fadeToggle(200);
    })
});