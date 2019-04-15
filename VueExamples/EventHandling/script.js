var example1 = new Vue({
	el: '#example1',
	data: {
		counter: 0
	}
})

var example2 = new Vue({
	el: '#example2',
	data: {
		name: 'Vue.js'
	},
	// define methods under the 'methods' object
	methods: {
		greet: function (event) {
			// 'this' inside methods points to the Vue instance
			alert('Hello ' + this.name + '!')
			// the 'event is the native DOM event
			if (event) {
				alert(event.target.tagName)
			}
		}
	}
})

// you can invole methods in JavaScript too
//example2.greet() // ==> 'Hello Vue.js!'

var example3 = new Vue({
	el: '#example3',
	methods: {
		say: function (message) {
			alert(message)
		}
	}
})