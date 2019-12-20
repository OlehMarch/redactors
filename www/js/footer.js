$(document).ready(function() {

    $('#flood').before('<div id="footer"><p>Цей сайт був розроблений у якості дипломного проекту студентом IV-го курсу ДРПБК Марченко О.C.</p><p>У всіх уроках присутні імена чи прізвиська авторів.</p><p>Усі логотипи використовувані на сайті є зареєстрованими торговими марками.</p></div>');
    $('#flood p').css({
        'paddingBottom':'20px',
        'visibility':'hidden'
    });
    $('#footer').css({
        'color':'#777',
        'fontSize':'12px',
        'fontFamily':'Cambria',
        'textAlign':'center'
    });

});  // конец ready