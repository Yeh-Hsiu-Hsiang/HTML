$(function() {
    $(".flexslider").flexslider();
});

$(function(){
  $(".header ul li").mouseenter(function(){
    $(this).stop().animate({fontSize:20, marginTop:-5}, {duration:300, easing:'easeOutElastic'});
  })
  $(".header ul li").mouseleave(function(){
    $(this).stop().animate({fontSize:16, marginTop:0}, {duration:300, easing:'easeOutElastic'});
  })
})
