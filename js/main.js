$(document).ready(function(){

    $('.accordion-item').click(function(){

        console.log($(this).hasClass('open'));

        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).find('.accordion-content').slideUp();
        }
        else {
            $(this).addClass('open');
            $(this).find('.accordion-content').slideDown();
        }
    });
});













// $(document).ready(function(){

//     $('.item').click(function(){
//         $(this).html();
//         $('.p1').toggle(2000);
               
//     });
// });
 //     $('p').css({display: 'inline', transition: '10s'}, 1000);
        // })