$(document).ready(function() {
    
    $('#left_button').css({'opacity':'.5'});
    
    $('#right_button').click(function(){
        $('#line_1').attr('style', 'display:none;');
        $('#right_button').animate({'opacity':'.5'});
        $('#left_button').animate({'opacity':'1.0'});
    });
    
    $('#left_button').click(function(){
        $('#line_1').attr('style', 'display:;');
        $('#left_button').animate({'opacity':'.5'});
        $('#right_button').animate({'opacity':'1.0'});
    });
    
    $('#left_button_2').css({'opacity':'.5'});
    
    $('#right_button_2').click(function(){
        $('#line_1_2').attr('style', 'display:none;');
        $('#right_button_2').animate({'opacity':'.5'});
        $('#left_button_2').animate({'opacity':'1.0'});
    });
    
    $('#left_button_2').click(function(){
        $('#line_1_2').attr('style', 'display:;');
        $('#left_button_2').animate({'opacity':'.5'});
        $('#right_button_2').animate({'opacity':'1.0'});
    });
    
    $('#left_button_3').css({'opacity':'.5'});

    $('#right_button_3').click(function(){
        $('#line_1_3').attr('style', 'display:none;');
        $('#right_button_3').animate({'opacity':'.5'});
        $('#left_button_3').animate({'opacity':'1.0'});
    });
    
    $('#left_button_3').click(function(){
        $('#line_1_3').attr('style', 'display:;');
        $('#left_button_3').animate({'opacity':'.5'});
        $('#right_button_3').animate({'opacity':'1.0'});
    });
    
});  // конец ready