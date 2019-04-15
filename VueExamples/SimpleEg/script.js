var app = new Vue({
	el: "#app",
	data: {
		message: "Hello Vue!"
	}
})

var app2 = new Vue({
	el: "#app2",
	data: {
		message: "You loaded this page on " + new Date().toLocaleString()
	}
})

var app3 = new Vue({
	el: "#app3",
	data: {
		seen: true
	}
}) 

var app4 = new Vue({
	el: "#app4",
	data: {
		todos: [
			{ text: 'Learn JavaScript' },
			{ text: 'Learn Vue' },
			{ text: 'Build something awesome' }
		]
	}
})

var app5 = new Vue({
	el: "#app5",
	data: {
		message: "Hello Vue.js!"
	},
	methods: {
		reverseMessage: function () {
			this.message = this.message.split('').reverse().join('')
		}
	}
})

var app6 = new Vue({
	el: "#app6",
	data: {
		message: 'Hello Vue!'
	}
})

// Computed Properties
var vm = new Vue({
	el: '#example',
	data: {
		message: 'Hello'
	},
	computed: {
		//a computed getter
		reversedMessage: function () {
			// 'this' points to the vm instances
			return this.message.split('').reverse().join('')
		}
	}
})

