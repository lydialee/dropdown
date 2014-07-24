var isShown = false;

var publisher1 = {
	dom: $('#controller'),
	subscribers: [],
	subscribe: function(fn) {
		this.subscribers.push(fn)
	},
	publish: function() {
		var subscribers = publisher1.subscribers
		for (var i = 0; i < subscribers.length; i++) {
			subscribers[i]()
		}
	}
}

var observer1 = {
	dom: $('#choose'),
	toggle: function() {
		isShown ? observer1.dom.hide() : observer1.dom.show()
		isShown = !isShown
	}
}

var publisher2 = {
	dom: $('#choose'),
	subscribers: [],
	subscribe: function(fn) {
		this.subscribers.push(fn)
	},
	publish: function() {
		var subscribers = publisher2.subscribers
		for (var i = 0; i < subscribers.length; i++) {
			var color = $(this).css('background-color')
			subscribers[i](color)
		}
	}
}

var observer2 = {
	dom: $('#showcase'),
	show: function() {
		isShown ? observer2.dom.show() : observer2.dom.hide()
	},
	changeColor: function(color) {
		observer2.dom.css('background-color', color)
	}
}


publisher1.subscribe(observer1.toggle)
publisher1.subscribe(observer2.show)
publisher1.dom.on('click', publisher1.publish)

publisher2.subscribe(observer2.changeColor)
publisher2.dom.on('click', 'li', publisher2.publish)