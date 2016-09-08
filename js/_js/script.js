/*(function () {
    var selector = $('[include]')
        , selectorvl = selector.attr('include');
    selector.load(selectorvl);
})();*/
var addingC;
$(document).ready(function(){
  /*scroll specifice aliment animation*/
  function fullappere(o,r,t){var i=$(window).height(),n=$(window).scrollTop(),s=$(o),e=s.offset().top,l=s.height(),a=n+i>=e,f=!(n-l>=e),w=a&&f;if(!w)return!1;var p=-($(window).scrollTop()/r-t);$(o).css({transform:"translateY("+p+"%)"})}
  /* smooth scroll*/
  $(function(){$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);if(t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length)return $("html, body").animate({scrollTop:t.offset().top},1e3),!1}})});
  $('body').append('<div class="scrolltop">&lt;</div>');
$(document).on('scroll', function() {
    if ($(this).scrollTop() > 10) {
        $('.scrolltop').show();
    } else {
        $('.scrolltop').hide();
    }
})
$('.scrolltop').click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
})
$('.scrolltop').draggable();
$('.category').click(function() {
    $('.popup-cat').toggleClass('popup-click');
    $(this).toggleClass('active');
})
$('.mobile-nav').click(function() {
    $(this).toggleClass('open-anim');
    $('#mobile-nav-model').slideToggle()
})
addingC = function(sele, addclass) {
    $(sele + ':eq(1)').addClass(addclass)
}
 /* this animation Man home page*/
 $(window).on('scroll resize',function (){
   fullappere('.s2-item2:eq(0)',18,55);
   fullappere('.s2-item1:eq(1)',25,55);
   fullappere('.s4-item1:eq(0)',35,55);
 });
});
