var controller = $('#controller'),
	colorBar = $('#choose'),
	stage = $('#showcase');

controller.on('click', function() {
	colorBar.toggle();
})

colorBar.on('click', 'li', function() {
	var color = $(this).css('background-color');
	stage.css('background-color', color);
})