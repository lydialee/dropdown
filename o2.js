var controllBar = document.getElementById('controller'),
	colorChooser = document.getElementById('choose'),
	lis = document.getElementsByTagName('li'),
	showcase = document.getElementById('showcase'),
	isShown = false,
	_red = 'pink',
	_blue = '#A9D5F4',
	_green = '#baeae7';

// 观察者
var colorBar = {
	dom: colorChooser,
	toggle: function() {
		if (isShown) {
			this.dom.style.display = 'none';
		} else {
			this.dom.style.display = 'block';
		}
		isShown = !isShown;
	}
}

// 被观察click事件
var toggleController = {
	dom: controllBar,
	subscriber: colorBar.toggle,
	click: function() {
		this.subscriber();
	}
}

// 观察者
var stage = {
	dom: showcase,
	changeColor: function(id) {
		dom.style.backgroundColor = parseIdToColor(id);
	}
}

// 被观察click事件
var colorLi = {
	dom: lis = document.getElementsByTagName('li')[0], // Array
	subscriber: stage.changeColor,
	click: function() {
		var id = this.getAttribute('data-id');
		subscriber(id);
	}
}

toggleController.dom.onclick = function() {
	toggleController.click();
}


// for (var k = 0; k < lis.length; k += 1) {
// 	lis[k].onclick = function() {
// 		console.log(1)
// 		this.click();
// 	}	
// }

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