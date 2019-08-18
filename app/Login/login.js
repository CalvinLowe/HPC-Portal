// TODO: move to user model
let isLoggedIn;
let interval;

// TODO: move to to view
let login = document.getElementById('login');

// TODO: move to controller
attach(document.getElementById('login'), 'click', handleLoginButtonClick);
function handleLoginButtonClick() {
	checkLoginStatus();
	interval = window.setInterval(checkLoginStatus, 5000);
}

// TODO: move to user model
async function checkLoginStatus() {
	let response = await fetch('https://hpcportal.rcc.uq.edu.au/client/api/session_info');
	let data = await response.json();
	isLoggedIn = (data.has_oauth_access_token == "true");
	if (isLoggedIn == true) {
		console.log("Login successful");
		window.clearInterval(interval);
		redirectAfterLogin();
	} else {
		console.log("Login in progress");
	}
}

// TODO: move to controller & view
function redirectAfterLogin() {
	console.log("Redirecting...");
	setTimeout(function() {
		window.location = "Dashboard/dashboard.html"
	}, 2000);
}

// TODO: move to view or controller?
function toggleLoginShow() {
	login.classList.toggle("login--hidden");
}