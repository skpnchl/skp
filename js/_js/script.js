/*(function () {
    var selector = $('[include]')
        , selectorvl = selector.attr('include');
    selector.load(selectorvl);
})();*/
var addingC;
$(document).ready(function(){

  /* smooth scroll*/
  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


/*top scroller*/

  $('body').append('<div class="scrolltop">&lt;</div>');
  $(document).on('scroll',function () {
    if($(this).scrollTop() > 10){
      $('.scrolltop').show();
    }else{
      $('.scrolltop').hide();
    }
  })

  $('.scrolltop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  })
  $('.scrolltop').draggable();
/*end*/

  $('.category').click(function () {
      $('.popup-cat').toggleClass('popup-click');
      $(this).toggleClass('active');
  })

  $('.mobile-nav').click(function(){
    $(this).toggleClass('open-anim');
    $('#mobile-nav-model').slideToggle()
  })

  addingC = function (sele,addclass) {
    $(sele).addClass(addclass)
  }


});
