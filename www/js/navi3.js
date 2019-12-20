$(document).ready(function() {
    var eventObj1 = $('#button1 a img');
    eventObj1.mouseover(function(){$(this).attr('src', '../../images/Navi/main button/main_button_active.png');});
    eventObj1.mouseout(function(){$(this).attr('src', '../../images/Navi/main button/main_button_basic.png');});
    eventObj1.mousedown(function(){$(this).attr('src', '../../images/Navi/main button/main_button_activated.png');});
    eventObj1.mouseup(function(){$(this).attr('src', '../../images/Navi/main button/main_button_basic.png');});
    
    var eventObj2 = $('#button2 a img');
    eventObj2.mouseover(function(){$(this).attr('src', '../../images/Navi/lesson button/lesson_button_active.png');});
    eventObj2.mouseout(function(){$(this).attr('src', '../../images/Navi/lesson button/lesson_button_basic.png');});
    eventObj2.mousedown(function(){$(this).attr('src', '../../images/Navi/lesson button/lesson_button_activated.png');});
    eventObj2.mouseup(function(){$(this).attr('src', '../../images/Navi/lesson button/lesson_button_basic.png');});
    
    var eventObj3 = $('#button3 a img');
    eventObj3.mouseover(function(){$(this).attr('src', '../../images/Navi/gallery button/gallery_button_active.png');});
    eventObj3.mouseout(function(){$(this).attr('src', '../../images/Navi/gallery button/gallery_button_basic.png');});
    eventObj3.mousedown(function(){$(this).attr('src', '../../images/Navi/gallery button/gallery_button_activated.png');});
    eventObj3.mouseup(function(){$(this).attr('src', '../../images/Navi/gallery button/gallery_button_basic.png');});
    
    var eventObj4 = $('#button4 a img');
    eventObj4.mouseover(function(){$(this).attr('src', '../../images/Navi/PS Eddition button/ps_eddition_button_active.png');});
    eventObj4.mouseout(function(){$(this).attr('src', '../../images/Navi/PS Eddition button/ps_eddition_button_basic.png');});
    eventObj4.mousedown(function(){$(this).attr('src', '../../images/Navi/PS Eddition button/ps_eddition_button_activated.png');});
    eventObj4.mouseup(function(){$(this).attr('src', '../../images/Navi/PS Eddition button/ps_eddition_button_basic.png');});
    
    var eventObj5 = $('#header + div');
    eventObj5.mouseover(function(){$(this).attr('style', 'position:fixed; margin-left:0px;');});
    eventObj5.mouseout(function(){$(this).attr('style', 'position:fixed; margin-left:-2px;');});
});  // конец ready