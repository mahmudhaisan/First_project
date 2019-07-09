



// sticky header
$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = $("#header-top").height();
        ($(window).scrollTop() > navHeight+200) ? $('#header-menu-content').addClass('goToTop')
         : $('#header-menu-content').removeClass('goToTop');
    });
});
// sticky header

// fade out
$("#aaa").hover(function(){

    $(this).find("img").fadeOut();

}, function() {

    $(this).find("img").fadeIn();

});


// fade out
