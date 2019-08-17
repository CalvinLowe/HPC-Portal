let isLoggedIn = false;

let login = document.getElementById('login');
let logout = document.getElementById('logout');

attach(document.getElementById('login'), 'click', handleLoginButtonClick);
attach(document.getElementById('logout'), 'click', handleLogoutButtonClick);

function handleLoginButtonClick(e) {
	loginRequest();
}

// Need to wait for page https://hpcportal.rcc.uq.edu.au/client/login?service=hpcportal to return 
// "Login complete! You can close me now :)"
var TEST = new XMLHttpRequest();
TEST.onload = function(){
	if (TEST.status != 200)
	{
		console.log("Not yet logged in");
		console.log(TEST.response);
		console.log(TEST.status);
	}
	else {
		console.log("Should be logged in now");
		console.log(TEST.response);
		console.log(TEST.status);
	}
};
TEST.open('GET', 'https://hpcportal.rcc.uq.edu.au/client/login?service=hpcportal');
TEST.send();

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
		// TODO: set application state to logged in
		
		// Redirect after small timeout..
		setTimeout(function() {
			window.location = "Dashboard/dashboard.html"
		}, 2000);
		
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