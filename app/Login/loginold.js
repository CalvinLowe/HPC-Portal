// Events
window.onload = function() {
	console.log("document loaded");

	if (sessionStorage.getItem('isLoggedIn') == null) {
		console.log("sessionStorage for isLoggedIn was null");
		sessionStorage.setItem('isLoggedIn', 'false');
	} else if (sessionStorage.getItem('isLoggedIn') == 'true') {
		// Refresh/redraw/and/or/redirect to page depending on which page we are
		redirectAfterLogin();
	} else {
		// TODO: Check if session_info still exists and change appropriately
	}
}

window.onstorage = function() {
	// handle the onstorage event from isLoggedIn
	console.log(event);
}


// TODO: decide when to recheck/update isLoggedIn sessionStorage
// TODO: can trigger a storage event for for store for a particular key such as isLoggedIn
// TODO: function redirectToPage()..