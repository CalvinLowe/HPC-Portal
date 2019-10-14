import requestAccessToken from '../RequestAPI/RequestAPI.js';

let listFilesBookmarksVM = new Vue({
	el: '.bookmarks__container',
	data: {
		bookmarks: ''
	},
	async created() {
		this.bookmarks = await requestAccessToken.requestAccessibleLocation();
	},
});