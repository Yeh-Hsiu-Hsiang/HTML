(function($){
$(function(){
	//definition
	var $slideImage = $('#main'),
		duration = 1000,
		wait = 3000,
		easing = 'swing',
		timeoutId = 0;
		
	//initialize
	$slideImage
		.css({
			position : 'relative',
			overflow : 'hidden'
		})
		.children()
		.css({
			position : 'absolute',
			top:0,
			left:0,
			zIndex:0
		})
		.first()
		.addClass('current')
		.nextAll()
		.fadeTo(0,0)
		.hide();
	
	function slide()
	{
		var $current = $slideImage.children('.current');
		var $next = ($current.next().length != 0) ? $current.next() : $slideImage.children().first();
		
		$current
			.stop(true)
			.css({
				zIndex : 0
			})
			.fadeTo(duration, 0.0, easing);
		
		$next
			.addClass('next')
			.stop(true)
			.show()
			.css({
				zIndex : 10
			})
			.fadeTo(duration, 1.0, easing, function(){
				$current
					.removeClass('current')
					.hide();
				
				$next
					.removeClass('next')
					.addClass('current');
					
				setTimeout(slide, wait);
			});
	}
	
	setTimeout(slide, wait);
	
});
})(jQuery);