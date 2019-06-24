// JavaScript Document
$(function(){
  var Open = false;

  //---------------------------
  $('.adver').mouseenter(function(){
    $(this).stop().animate({height:200}, {duration:1000, easing:'easeOutBounce'});
  })
  $('.adver').mouseleave(function(){
    $(this).stop().animate({height:50}, {duration:300, easing:'easeOutBounce'});
  })

  //----------------------------

  $('.navbar li').mouseenter(function(){
    $(this).stop().animate({marginTop:-5, fontSize:22}, {duration:300, easing:'easeOutBounce'});
  })
  $('.navbar li').mouseleave(function(){
    $(this).stop().animate({marginTop:0, fontSize:18}, {duration:300, easing:'easeOutBounce'});
  })

  //----------------------------

  $('.header .cake').mousedown(function(){
    if(Open){
      $(this).parent().stop().animate({marginTop:-100}, {duration:100, easing:'easeOutBounce'});
      Open = false;
    }else{
      $(this).parent().stop().animate({marginTop:0}, {duration:100, easing:'easeOutBounce'});
      Open = true;
    }

  })

})
