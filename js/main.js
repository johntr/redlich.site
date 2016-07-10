$( document ).ready(function(){
    $(".main-side-nav").sideNav();

    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(2) + '"]').offset().top
        }, 500);
        return false;
    });
    
    $('#blog-button').click(function() {
      $('#blog-menu').slideToggle('slow');
    });
});
