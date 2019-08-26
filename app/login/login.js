let isLoggedIn;
let interval;

function initSessionsStorage() {
	if (sessionStorage.getItem("isLoggedIn") == null) {
		sessionStorage.setItem("isLoggedIn", "false");
	}
}

function loginUI() {
	initSessionsStorage();
	if (sessionStorage.getItem("isLoggedIn") == "true") {
		document.body.classList.add("logged-in");
	}
}

document.onload = loginUI();

let loginButton = document.getElementById('login');

if (loginButton != null) {
	attach(loginButton, 'click', handleLoginButtonClick);
}

function handleLoginButtonClick() {
	openLoginWindow();
	APIcheckLoginStatus();
	interval = window.setInterval(APIcheckLoginStatus, 1000);
}

function openLoginWindow() {
	let myWindow = window.open("https://hpcportal.rcc.uq.edu.au/client/login?service=hpcportal");
	if (isLoggedIn === true) {
		myWindow.close();
	}
}


async function APIcheckLoginStatus() {
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
	}, 1000);
}

function toggleLoginShow() {
	loginButton.classList.toggle("login--hidden");
}