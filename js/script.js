$(document).ready(function () {
    $('.header').on('click', '.menu-button', function () {
        $(this).toggleClass('active');
        $('.navigation-wrapper').fadeToggle(200);
    })

 //    $('.navigation-wrapper a').click(function(){
 //    $('.menu-button').animate({
 //        scrollTop: $( $.attr(this, 'href') ).offset().top
 //    }, 500);
 //    return false;
	// });

    $('.navigation-wrapper a').click(function(){
        $('.menu-button').removeClass('active');
        $('.navigation-wrapper').fadeOut(200);
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });


});