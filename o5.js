var a = {
	init: function() {
		var self = this
		$('#controller').on('click', function() {
			$(self).trigger('open')
		})
		$('#choose').on('click', 'li', function() {
			var color = $(this).css('background-color')
			self.choose(color)
		})
	},
	open: function(){
		$('#choose').toggle()
	},
	choose: function(color) {
		$(this).trigger('choose', [color])
	}
}

var b = {
	init: function(target){
		$(target).on('open', function() {
			$('#showcase').toggle()
		})
		$(target).on('choose', function(e, color) {
			$('#showcase').css('background-color', color)
		})
	}
}

// usage
a.init()
b.init(a)