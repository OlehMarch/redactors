$(document).ready(function() {
    
    $('acronym img').mouseover(function(){$(this).attr('src', 'images/ps_edditions/instructions/button/button_for_instruct_active.png');});
    $('acronym img').mouseout(function(){$(this).attr('src', 'images/ps_edditions/instructions/button/button_for_instruct_basic.png');});
    $('acronym img').mousedown(function(){$(this).attr('src', 'images/ps_edditions/instructions/button/button_for_instruct_activated.png');});
    
    $('#instruct_change1 img').mouseup(function(){
        $(this).attr('src', 'images/ps_edditions/instructions/button/button_for_instruct_basic.png');
        $('#left p[align = center]').html('<span class="txtSecondHeader">Встановлення градієнту</span>');
        $('#p1').html('<span>Для того, щоб встановити градієнт до Photoshop Вам потрібно зайти до меню "Зображення-->Набори-->Управління наборами"</span>');
        $('#p2').html('<span>У наступному вікні, котре відкриється після натискання "Управління наборами", натискаємо на трикутник, який знаходиться біля напису "Тип набора". Обираємо у вспливаючому вікні пункт "Градієнти", та натискаємо "Завантажити".</span>');
        $('#img1').html('<img src="images/ps_edditions/instructions/instruction for gradients/instruction_img_2.jpg" width="330" height="216">');
        $('#p3').html('<span>Знаходимо потрібний файл з градієнтами та завантажуємо його.</span>');
        $('#img2').html('<img" src="images/ps_edditions/instructions/instruction for gradients/instruction_img_3.jpg" width="330" height="184">');
        $('#p4').html('<span>Бачимо, що набір нових градієнтів вже завантажився. Натискаємо "Готово".</span>');
        $('#img3').html('<img src="images/ps_edditions/instructions/instruction for gradients/instruction_img_4.jpg" width="330" height="214">');
        $('#p5').html('<span>Градієнти встановлені.</span>');
        $('#img4').html('<img src="images/ps_edditions/instructions/instruction for gradients/instruction_img_5.png" width="330" height="170">');
        $('#instruct_change1').attr('style', 'display:none;');
        $('#instruct_change2').attr('style', '');
    });
    
    $('#instruct_change2 img').mouseup(function(){
        $(this).attr('src', 'images/ps_edditions/instructions/button/button_for_instruct_basic.png');
        $('#left p[align = center]').html('<span class="txtSecondHeader">Встановлення кисті</span>');
        $('#p1').html('<span>Для того, щоб встановити кисті до Photoshop Вам потрібно зайти до меню "Зображення-->Набори-->Управління наборами"</span>');
        $('#p2').html('<span>У наступному вікні, котре відкриється після натискання "Управління наборами", натискаємо на трикутник, який знаходиться біля напису "Тип набора". Обираємо у вспливаючому вікні пункт "Кисті", та натискаємо "Завантажити".</span>');
        $('#img1').html('<img src="images/ps_edditions/instructions/instruction for brushes/instruction_img_2.jpg" width="330" height="217">');
        $('#p3').html('<span>Знаходимо потрібний файл з кистями та завантажуємо їх.</span>');
        $('#img2').html('<img src="images/ps_edditions/instructions/instruction for brushes/instruction_img_3.jpg" width="330" height="185">');
        $('#p4').html('<span>Бачимо, що набір нових пензлів вже завантажився. Натискаємо "Готово".</span>');
        $('#img3').html('<img src="images/ps_edditions/instructions/instruction for brushes/instruction_img_4.jpg" width="330" height="215">');
        $('#p5').html('<span>Кисті встановлені.</span>');
        $('#img4').html('<img src="images/ps_edditions/instructions/instruction for brushes/instruction_img_5.jpg" width="330" height="376">');
        $('#instruct_change2').attr('style', 'display:none;');
        $('#instruct_change1').attr('style', '');
    });
    
});  // конец ready