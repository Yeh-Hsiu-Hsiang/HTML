// JavaScript Document
var isOpened=true;

$(function(){
    //-----------------
    // 如果圖示被點擊
    //-----------------
    $('.header .logo').mousedown(function(){
        if(isOpened){
            //將導覽列收回
            $(this).parent().stop().animate({marginTop:-80}, {duration:400, easing:'easeOutBounce'});
            $(this).stop().animate({top:40}, {duration:400, easing:'easeOutBounce'});	
			$(this).rotate({angle: 0, animateTo:180});
            isOpened=false;
        }else{
            //將導覽列打開
            $(this).parent().stop().animate({marginTop:0}, {duration:400, easing:'easeOutBounce'});
            $(this).stop().animate({top:20}, {duration:400, easing:'easeOutBounce'});
			$(this).rotate({angle: 180, animateTo:360});
            isOpened=true;	
        }
    });
    //-----------------
});