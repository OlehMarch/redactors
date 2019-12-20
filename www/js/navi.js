$(document).ready(function() {
   
    $('#button1 a img').mouseover(function(){$(this).attr('src', 'images/Navi/main button/main_button_active.png');});
    $('#button1 a img').mouseout(function(){$(this).attr('src', 'images/Navi/main button/main_button_basic.png');});
    $('#button1 a img').mousedown(function(){$(this).attr('src', 'images/Navi/main button/main_button_activated.png');});
    $('#button1 a img').mouseup(function(){$(this).attr('src', 'images/Navi/main button/main_button_basic.png');});
    
    $('#menu1lvl').slideUp(0);
    
    $('#m_area1').mouseover(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/active/menu_cd_active.png');});
    $('#m_area1').mouseout(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/menu_basic.png');});
    $('#m_area1').mousedown(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/activated/menu_cd_activated.png');});
    $('#m_area1').mouseup(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/menu_basic.png');});
    
    $('#m_area2').mouseover(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/active/menu_dmax_active.png');});
    $('#m_area2').mouseout(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/menu_basic.png');});
    $('#m_area2').mousedown(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/activated/menu_dmax_activated.png');});
    $('#m_area2').mouseup(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/menu_basic.png');});
    
    $('#m_area3').mouseover(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/active/menu_pp_active.png');});
    $('#m_area3').mouseout(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/menu_basic.png');});
    $('#m_area3').mousedown(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/activated/menu_pp_activated.png');});
    $('#m_area3').mouseup(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/menu_basic.png');});
    
    $('#m_area4').mouseover(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/active/menu_ps_active.png');});
    $('#m_area4').mouseout(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/menu_basic.png');});
    $('#m_area4').mousedown(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/activated/menu_ps_activated.png');});
    $('#m_area4').mouseup(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/menu_basic.png');});
    
    $('#m_area5').mouseover(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/active/menu_ai_active.png');});
    $('#m_area5').mouseout(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/menu_basic.png');});
    $('#m_area5').mousedown(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/activated/menu_ai_activated.png');});
    $('#m_area5').mouseup(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/menu_basic.png');});
    
    $('#m_area6').mouseover(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/active/menu_lr_active.png');});
    $('#m_area6').mouseout(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/menu_basic.png');});
    $('#m_area6').mousedown(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/activated/menu_lr_activated.png');});
    $('#m_area6').mouseup(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/menu_basic.png');});
    
    $('#m_area7').mouseover(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/active/menu_id_active.png');});
    $('#m_area7').mouseout(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/menu_basic.png');});
    $('#m_area7').mousedown(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/activated/menu_id_activated.png');});
    $('#m_area7').mouseup(function(){$('#menu1lvl img').attr('src', 'images/Navi/menu/menu_basic.png');});
    
    $('#les_area2').click(function(){$('#menu1lvl').toggle();$('#menu2lvl').fadeOut();});
    
    $('#menu2lvl').fadeOut(0);
    
    $('#m2_area1').mouseover(function(){$('#menu2lvl img').attr('src', 'images/Navi/menu/2 lvl/active/menu_2lvl_wwt_active.png');});
    $('#m2_area1').mouseout(function(){$('#menu2lvl img').attr('src', 'images/Navi/menu/2 lvl/menu_2lvl_basic.png');});
    $('#m2_area1').mousedown(function(){$('#menu2lvl img').attr('src', 'images/Navi/menu/2 lvl/activated/menu_2lvl_wwt_activated.png');});
    $('#m2_area1').mouseup(function(){$('#menu2lvl img').attr('src', 'images/Navi/menu/2 lvl/menu_2lvl_basic.png');});
    
    $('#m2_area2').mouseover(function(){$('#menu2lvl img').attr('src', 'images/Navi/menu/2 lvl/active/menu_2lvl_wwp_active.png');});
    $('#m2_area2').mouseout(function(){$('#menu2lvl img').attr('src', 'images/Navi/menu/2 lvl/menu_2lvl_basic.png');});
    $('#m2_area2').mousedown(function(){$('#menu2lvl img').attr('src', 'images/Navi/menu/2 lvl/activated/menu_2lvl_wwp_activated.png');});
    $('#m2_area2').mouseup(function(){$('#menu2lvl img').attr('src', 'images/Navi/menu/2 lvl/menu_2lvl_basic.png');});
    
    $('#m2_area3').mouseover(function(){$('#menu2lvl img').attr('src', 'images/Navi/menu/2 lvl/active/menu_2lvl_ef_active.png');});
    $('#m2_area3').mouseout(function(){$('#menu2lvl img').attr('src', 'images/Navi/menu/2 lvl/menu_2lvl_basic.png');});
    $('#m2_area3').mousedown(function(){$('#menu2lvl img').attr('src', 'images/Navi/menu/2 lvl/activated/menu_2lvl_ef_activated.png');});
    $('#m2_area3').mouseup(function(){$('#menu2lvl img').attr('src', 'images/Navi/menu/2 lvl/menu_2lvl_basic.png');});
    
    $('#m_area4b').click(function () {$('#menu2lvl').toggle();});
    
    $('#les_area1').mouseover(function(){$('#button2 a img').attr('src', 'images/Navi/lesson button/lesson_button_active.png');});
    $('#les_area1').mouseout(function(){$('#button2 a img').attr('src', 'images/Navi/lesson button/lesson_button_basic.png');});
    $('#les_area1').mousedown(function(){$('#button2 a img').attr('src', 'images/Navi/lesson button/lesson_button_activated.png');});
    $('#les_area1').mouseup(function(){$('#button2 a img').attr('src', 'images/Navi/lesson button/lesson_button_basic.png');});
    
    $('#button3 a img').mouseover(function(){$(this).attr('src', 'images/Navi/gallery button/gallery_button_active.png');});
    $('#button3 a img').mouseout(function(){$(this).attr('src', 'images/Navi/gallery button/gallery_button_basic.png');});
    $('#button3 a img').mousedown(function(){$(this).attr('src', 'images/Navi/gallery button/gallery_button_activated.png');});
    $('#button3 a img').mouseup(function(){$(this).attr('src', 'images/Navi/gallery button/gallery_button_basic.png');});
    
    $('#button4 a img').mouseover(function(){$(this).attr('src', 'images/Navi/PS Eddition button/ps_eddition_button_active.png');});
    $('#button4 a img').mouseout(function(){$(this).attr('src', 'images/Navi/PS Eddition button/ps_eddition_button_basic.png');});
    $('#button4 a img').mousedown(function(){$(this).attr('src', 'images/Navi/PS Eddition button/ps_eddition_button_activated.png');});
    $('#button4 a img').mouseup(function(){$(this).attr('src', 'images/Navi/PS Eddition button/ps_eddition_button_basic.png');});
    
    $('#header + div').mouseover(function(){$(this).attr('style', 'position:fixed; margin-left:0px;');});
    $('#header + div').mouseout(function(){$(this).attr('style', 'position:fixed; margin-left:-2px;');}); 
});  // конец ready