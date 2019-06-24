// JavaScript Document
$(function(){
	$('.adver').mouseenter(function(){	// 在 'adver' 的標籤裡，若滑鼠移過
		$(this).stop().animate({height:150}, {duration:1000, easing:'easeOutBounce'});	// animate(動什麼, 怎麼動)
		});	
	$('.adver').mouseleave(function(){
		$(this).stop().animate({height:30}, {duration:300, easing:'easeOutBounce'});	
		});	
		
	//---------------------------------------
	
	$('.navbar li').mouseenter(function(){	// 在 'adver' 的標籤裡，若滑鼠移過
		$(this).stop().animate({marginTop:-5, fontSize:20}, {duration:300, easing:'easeOutBounce'});	// animate(動什麼, 怎麼動)
		});	
		
	$('.navbar li').mouseleave(function(){	// 在 'adver' 的標籤裡，若滑鼠移過
		$(this).stop().animate({marginTop:0, fontSize:17}, {duration:300, easing:'easeOutBounce'});	
		});	
		
	$('.header .logo').mouseenter(function(){	// 在 'adver' 的標籤裡，若滑鼠移過
		$(this).parent().stop().animate({marginTop:0}, {duration:100, easing:'easeOutBounce'});	
		});	
	
	$('.header').mouseleave(function(){	// 在 'adver' 的標籤裡，若滑鼠移過
		$(this).stop().animate({marginTop:-80}, {duration:100, easing:'easeOutBounce'});	
		});	
});