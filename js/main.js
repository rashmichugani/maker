(function(){
	


	$('.js-slider').slider({
		max: 100,
		min: 0,
		change: function(event, ui){
			console.log('stopped',ui.value);
		},
		slide: function(event, ui){
			console.log('sliding', ui.value)
			// $('.js-bubble').css({
			// 	width: ui.value,
			// 	height: 2 * ui.value,
			// 	left: event.pageX
			// })
			$('.js-rect').css({
				width: ui.value,
				height: 2 * ui.value,
				left: event.pageX
			})
		}
	});


	
}).call(this);