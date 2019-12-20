$(document).ready(function() {
    /*if ($('#header img[src = images/header2_en.png]')) {
        var langChange1 =  $('#area1');
        langChange1.mouseover(function(){$('#langChange').attr('src', 'images/Language change/language_change_en_active.png');});
        langChange1.mouseout(function(){$('#langChange').attr('src', 'images/Language change/language_change_en_active.png');});
        var langChange2 =  $('#area2');
        langChange2.mouseover(function(){$('#langChange').attr('src', 'images/Language change/language_change_ua_active.png');});
        langChange2.mouseout(function(){$('#langChange').attr('src', 'images/Language change/language_change_en_active.png');});
    }*/
    
        var langChange1 =  $('#area1');
        langChange1.mouseover(function(){$('#langChange').attr('src', 'images/Language change/language_change_en_active.png');});
        langChange1.mouseout(function(){$('#langChange').attr('src', 'images/Language change/language_change_ua_active.png');});
        var langChange2 =  $('#area2');
        langChange2.mouseover(function(){$('#langChange').attr('src', 'images/Language change/language_change_ua_active.png');});
        langChange2.mouseout(function(){$('#langChange').attr('src', 'images/Language change/language_change_ua_active.png');});
});  // конец ready