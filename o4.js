var isShown = false;

function Publisher(params) {
	this.event = params.event
	this.delegate = params.delegate
	this.trigger = params.trigger
	this.dom = $(params.dom)
	this.subscribers = []
	this.init()
}

Publisher.prototype = {
	init: function() {
		var self = this
		this.dom.on(this.event, this.delegate || '', function() {
			self.dom.trigger(self.trigger, this)
		})
	},
	subscribe: function(observer, oper) {
		this.subscribers.push(observer)
		this.dom.on(this.trigger, observer[oper])
	}
}

var p1 = new Publisher({
	event: 'click',
	trigger: 'triggerP1',
	dom: '#controller'	
})

var p2 = new Publisher({
	event: 'click',
	delegate: 'li',
	trigger: 'triggerP2',
	dom: '#choose'
})

var o1 = {
	dom: $('#choose'),
	toggle: function() {
		isShown ? o1.dom.hide() : o1.dom.show()
		isShown = !isShown
	}	
}

var o2 = {
	dom: $('#showcase'),
	show: function() {
		isShown ? o2.dom.show() : o2.dom.hide()
	},
	changeColor: function(event, dom) {
		var color = $(dom).css('background-color')
		o2.dom.css('background-color', color)
	}
}

p1.subscribe(o1, 'toggle')
p1.subscribe(o2, 'show')
p2.subscribe(o2, 'changeColor')