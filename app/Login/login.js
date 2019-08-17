let isLoggedIn = false;

window.onload = function() {
	console.log("document loaded");

	if (sessionStorage.getItem('isLoggedIn') == null) {
		console.log("sessionStorage for isLoggedIn was null");
		sessionStorage.setItem('isLoggedIn', 'false');
	} else if (sessionStorage.getItem('isLoggedIn') == 'true') {
		// Refresh/redraw/and/or/redirect to page depending on which page we are
		redirectAfterLogin();
	}
}

window.onstorage = function() {
	console.log(event);
}

function redirectAfterLogin() {
	console.log("redirectAfterLogin called");
	setTimeout(function() {
		window.location = "Dashboard/dashboard.html"
	}, 2000);
}

// TODO: decide when to recheck/update isLoggedIn sessionStorage
// TODO: can trigger a storage event for for store for a particular key such as isLoggedIn

// TODO: function redirectToPage()..

let login = document.getElementById('login');
let logout = document.getElementById('logout');

attach(document.getElementById('login'), 'click', handleLoginButtonClick);
attach(document.getElementById('logout'), 'click', handleLogoutButtonClick);

function handleLoginButtonClick(e) {
	loginRequest();
}

function loginRequest() {
	var xhr = new XMLHttpRequest();
	xhr.onload = handleXHROnload;
	xhr.open('GET', 'https://hpcportal.rcc.uq.edu.au/client/api/session_info');
	xhr.responseType = 'json';
	xhr.send();
}

function handleXHROnload() {
	if (this.status >= 200 && this.status < 300) {
		console.log('The request succeeded.');
		isLoggedIn = (this.response.has_oauth_access_token == "true");
		doUserLogin();
	} else {
		console.log('The request failed.');
	}
}

function doUserLogin() {
	if (isLoggedIn == true) {
		console.log("Login was true");
		console.log(isLoggedIn);
		toggleLoginShow();
		redirectAfterLogin()
	}
	else {
		console.log("Login wasn't true");
		console.log(isLoggedIn);
	}
}

function handleLogoutButtonClick(e) {
	// Check if logged out then do the rest and the redirect
	toggleLoginShow();
}

function toggleLoginShow() {
	console.log("toggleLoginShow called");
	login.classList.toggle("login--hidden");
	logout.classList.toggle("logout--hidden");
}