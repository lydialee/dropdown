var controller = $('#controller'),
	colorBar = $('#choose'),
	stage = $('#showcase')

var observer = {
	subscribers: [],
	subscribe: function(ev, callback) {
		if (typeof this.subscribers[ev] === 'undefined') {
			this.subscribers[ev] = []
		}
		this.subscribers[ev].push(callback)
	},
	publish: function(ev, arg, e) {
		var subscribers = this.subscribers[ev],
			i,
			max = subscribers.length
		for (i = 0; i < max; i ++) {
			subscribers[i](e, arg)
		}
	}
}

var joinOPattern = function(o) {
	for(var i in observer) {
		if(observer.hasOwnProperty(i) && typeof observer[i] === 'function') {
			o[i] = observer[i]			
		}
	}
	o.subscribers = []
}

// usage
var a = {},
	b = {}
joinOPattern(a)
joinOPattern(b)

a.open = function(){
	colorBar.toggle()
	return this
}
a.choose = function(color) {
	this.publish('choose', color)
}
a.init = function() {
	var self = this
	controller.on('click', function() {
		self.open().publish('open')
-	colorBar.on('click', 'li', function() {
		var color = $(this).css('background-color')
		self.choose(color)
	})
}


b.init = function(target){
	target.subscribe('open', function() {
		stage.toggle()
	})
	target.subscribe('choose', function(e, color) {
		stage.css('background-color', color)
	})
}

a.init()
b.init(a)