var controllBar = document.getElementById('controller'),
	colorChooser = document.getElementById('choose'),
	lis = document.getElementsByTagName('li'),
	showcase = document.getElementById('showcase'),
	isShown = false,
	_red = 'pink',
	_blue = '#A9D5F4',
	_green = '#baeae7';

controllBar.onclick = function() {
	if (isShown) {
		colorChooser.style.display = 'none';
	} else {
		colorChooser.style.display = 'block';
	}
	isShown = !isShown;
}

for (var k = 0; k < lis.length; k += 1) {
	lis[k].onclick = function() {
		var id = this.getAttribute('data-id');
		showcase.style.backgroundColor = parseIdToColor(id);
		// console.log(showcase.style.backgroundColor)
	}	
}






// 将id转化为颜色值
function parseIdToColor(id) {
	var color;
	switch (id) {
		case '1':
			color = _red
			break;
		case '2':
			color = _blue
			break;
		case '3':
			color = _green
			break;
	}
	console.log(color);
	return color;
}