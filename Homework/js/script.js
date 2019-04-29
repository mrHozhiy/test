$(document).ready(function() {

    $('.main_btna, .main_btn, a[href="#sheldure"]').on('click', function() {
        $(".overlay").fadeIn("slow");
        $(".modal").slideDown();
    });
    
    $(".close").on('click', function() {
        $(".overlay").fadeOut();
        $(".modal").slideUp();
    });

});