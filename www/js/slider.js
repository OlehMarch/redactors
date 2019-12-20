$(document).ready(function() {
    
    $('#input_slider_1').click(function(){
        $('#img_slider_2 img').fadeOut(500);
        $('#img_slider_3 img').fadeOut(500);
        $('#img_slider_1 img').fadeIn(1500);
        $('#info_line').fadeOut(500);
        $('#info_line').fadeIn(1500);
        $('#p_slider_2 p').fadeOut(500);
        $('#p_slider_3 p').fadeOut(500);
        $('#p_slider_1 p').fadeIn(1500);
    });
    
    $('#input_slider_2').click(function(){
        $('#img_slider_1 img').fadeOut(500);
        $('#img_slider_3 img').fadeOut(500);
        $('#img_slider_2 img').fadeIn(1500);
        $('#info_line').fadeOut(500);
        $('#info_line').fadeIn(1500);
        $('#p_slider_1 p').fadeOut(500);
        $('#p_slider_3 p').fadeOut(500);
        $('#p_slider_2 p').fadeIn(1500);
    });
    
    $('#input_slider_3').click(function(){
        $('#img_slider_2 img').fadeOut(500);
        $('#img_slider_1 img').fadeOut(500);
        $('#img_slider_3 img').fadeIn(1500);
        $('#info_line').fadeOut(500);
        $('#info_line').fadeIn(1500);
        $('#p_slider_2 p').fadeOut(500);
        $('#p_slider_1 p').fadeOut(500);
        $('#p_slider_3 p').fadeIn(1500);
    });
    
});  // конец ready