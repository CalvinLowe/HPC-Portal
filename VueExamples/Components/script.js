Vue.component('button-counter', {
	data: function () {
		return {
			count: 0
		}
	},
	template: '<button v-on:click="count++">You clicked me {{ count }} times. </button>'
})

var ex1 = new Vue({ el: '#ex1' })

Vue.component('blog-post', {
	props: ['post'],
	template: `
		<div class="blog-post">
			<h3>{{ title }}</h3>
			<div v-html="post.content"></div>
		</div>
	`
})

var blog = new Vue({
	el: "#blog",
	data: {
		posts: [
			{ id: 1, title: 'My journey with Vue' },
			{ id: 2, title: 'Blogging with Vue' },
			{ id: 3, title: 'Why Vue is so fun' },
		]
	}
})