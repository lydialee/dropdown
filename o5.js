var controller = $('#controller'),
	colorBar = $('#choose'),
	stage = $('#showcase');

var a = {
	init: function() {
		var self = this
		controller.on('click', function() {
			$(self).trigger('open');
		})
		colorBar.on('click', 'li', function() {
			var color = $(this).css('background-color')
			self.choose(color)
		})
	},
	open: function(){
		colorBar.toggle()
	},
	choose: function(color) {
		$(this).trigger('choose', color)
	}
}

var b = {
	init: function(target){
		$(target).on('open', function() {
			stage.toggle()
		})
		$(target).on('choose', function(e, color) {
			stage.css('background-color', color)
		})
	}
}

// usage
a.init()
b.init(a)