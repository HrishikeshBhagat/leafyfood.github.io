function msg(){ 
    alert("Thanks for your kind feedback & visiting LeafyFood");  
    }
    document.getElementById('menuhead1').click (()=>{
    console.log('you have clicked the menu heading');
    location.href = 'https://www.youtube.com/'
});

function preloaderFadeOutInit(){
    $('.preloader').fadeOut('slow');
    $('body').attr('id','');
    }
    // Window load function
    jQuery(window).on('load', function () {
    (function ($) {
    preloaderFadeOutInit();
    })(jQuery);
    });