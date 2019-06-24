// JavaScript Document
$(function(){
	var isOpen = false;	//導覽列未開啟
	
	//---------------------------------------
	$('.adver').mouseenter(function(){	// 在 'adver' 的標籤裡，若滑鼠移過
		$(this).stop().animate({height:150}, {duration:1000, easing:'easeOutBounce'});	// animate(動什麼, 怎麼動)
		});	
	$('.adver').mouseleave(function(){
		$(this).stop().animate({height:30}, {duration:300, easing:'easeOutBounce'});	
		});	
		
	//---------------------------------------
	
	$('.navbar li').mouseenter(function(){	
		$(this).stop().animate({marginTop:-5, fontSize:20}, {duration:300, easing:'easeOutBounce'});	
		});	
		
	$('.navbar li').mouseleave(function(){	
		$(this).stop().animate({marginTop:0, fontSize:17}, {duration:300, easing:'easeOutBounce'});	
		});	
		
	$('.header .logo').mousedown(function(){	// 當滑鼠點擊時
		if(isOpen){
			$(this).parent().stop().animate({marginTop:-80}, {duration:100, easing:'easeOutBounce'});
			$(this).stop().rotate({angle: -180, animateTo:0, duration: 600});
			isOpen = false;
		}else{
			$(this).parent().stop().animate({marginTop:0}, {duration:100, easing:'easeOutBounce'});
			$(this).stop().rotate({angle: 0, animateTo:180, duration: 600});
			isOpen = true;
		}
	});	
});