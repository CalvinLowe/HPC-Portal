let isLoggedIn;
let interval;

function initSessionsStorage() {
	if (sessionStorage.getItem("isLoggedIn") == null) {
		sessionStorage.setItem("isLoggedIn", "false");
	}
}

document.onload = initSessionsStorage();

let login = document.getElementById('login');

if (login != null) {
	attach(document.getElementById('login'), 'click', handleLoginButtonClick);
}

function handleLoginButtonClick() {
	checkLoginStatus();
	interval = window.setInterval(checkLoginStatus, 5000);
}

async function checkLoginStatus() {
	// TODO: handle errors
	let response = await fetch('https://hpcportal.rcc.uq.edu.au/client/api/session_info');
	let data = await response.json();
	isLoggedIn = (data.has_oauth_access_token == "true");
	if (isLoggedIn == true) {
		console.log("Login successful");
		window.clearInterval(interval);
		sessionStorage.setItem("isLoggedIn", "true");
		redirectAfterLogin();
	} else {
		// LOGOUT and redirect
		console.log("Login in progress");
	}
}

function redirectAfterLogin() {
	console.log("Redirecting...");
	setTimeout(function() {
		window.location = "dashboard/dashboard.html"
	}, 2000);
}

function toggleLoginShow() {
	login.classList.toggle("login--hidden");
}