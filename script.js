$(document).ready(function(){
    $('.slider').slick();
    
$('.arrow-prev').click(function(){
    $('.slider').slick('slickPrev');
});
    
$('.arrow-next').click(function(){w
    $('.slider').slick('slickNext');
});
    
$(document).keydown(function(e) {
    if (e.keyCode == 37) {
        $('.slider').slick('slickPrev');
    } else if (e.keyCode == 39) {
        $('.slider').slick('slickNext');
    }
    });
});
  