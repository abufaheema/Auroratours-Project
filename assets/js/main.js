$('document').ready(function () {

    

    // $(window).on('load', function () {
    //     $('.preloader').addClass('loaded')
    // })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('nav').addClass('fixed')
        } else {
            $('nav').removeClass('fixed')
            
        }
    })





    
});