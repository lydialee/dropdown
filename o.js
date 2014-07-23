// 取出元素，存到变量
var controllBar = document.getElementById('controller'),
	colorChooser = document.getElementById('choose'),
	showcase = document.getElementById('showcase'),
	isShown = false,
	_red = 'pink',
	_blue = '#A9D5F4',
	_green = '#baeae7';

var publisher = {
	subscribers: [],
	
	// fn是观察者对publish行为的反应（方法）
	subscribe: function(fn) {
		this.subscribers.push(fn);
	},

	// publication是被观察对象的发表内容/要带入观察者反应行为的参数
	publish: function(publication) {
		var subscribers = this.subscribers,
			i,
			max = subscribers.length;

		// 观察者们依次对发表行为做出反应
		for (i = 0; i < max; i += 1) {
			subscribers[i](publication);
		}
	}
}

// 1、点击‘click me’，控制颜色条显示与否
var colorBar = {
	toggle: function() {
		if (isShown) {
			colorChooser.style.display = 'none';
		} else {
			colorChooser.style.display = 'block';
		}
	}
}

// 2、点击颜色条，控制右边方块的颜色
var stage = {
	changeColor: function(id) {
		showcase.style.backgroundColor = parseIdToColor(id);
	}
}

controllBar.onclick = function() {
	this.publish();
}

colorChooser.onclick = function() {
	var id = this.getAttribute('data-id');
	this.publish(id);
}







// 将id转化为颜色值
function parseIdToColor(id) {
	var color;
	switch (id) {
		case 1:
			color = _red;
			break;
		case 2:
			color = _blue;
			break;
		case 3:
			color = _green;
			break;
	}
	return color;
}

function makePublisher(o) {
	var i;
	for (i in publisher) {
		if (publisher.hasOwnProperty(i) && typeof publisher[i] === 'function') {
			o[i] = publisher[i];
		}
	}
	o.subscribers = {any: []};
}