$(function(){
	// 幫 a.gotop 加上 click 事件
	$('a.gotop').click(function(){
		// 讓捲軸用動畫的方式移動到 0 的位置
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 0
		}, 300);

		return false;
	});

	$('a.origin').click(function(){
		// 讓捲軸用動畫的方式移動到 0 的位置
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 620
		}, 600);

		return false;
	});

	$('a.course').click(function(){
		// 讓捲軸用動畫的方式移動到 0 的位置
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 1170
		}, 600);

		return false;
	});

	$('a.movie').click(function(){
		// 讓捲軸用動畫的方式移動到 0 的位置
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
		$body.animate({
			scrollTop: 3300
		}, 600);

		return false;
	});
});
