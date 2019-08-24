let isLoggedIn; // TODO: transfer to function
let interval;

let homePageLocationPath = "/";  // TODO: move to a navigation somewhere
let dashboardLocationPath = "/dashboard"; // TODO: move to a navigation somewhere

document.onload = loginUI();
// TODO: document.onload = function() {// series of function calls go here}
//function isLoggedIn TODO:

function loginUI() {
	initSessionsStorage();

	if (sessionStorage.getItem("isLoggedIn") == "false" && window.location.pathname != homePageLocationPath) {
		console.log("Redirecting...");
		setTimeout(function() {
			window.location.pathname = homePageLocationPath;
		}, 1000);
	} else if(sessionStorage.getItem("isLoggedIn") == "true") {
		document.body.classList.add("logged-in");
	}
}

function initSessionsStorage() {
	if (sessionStorage.getItem("isLoggedIn") == null) {
		sessionStorage.setItem("isLoggedIn", "false");
	}
}

let loginButton = document.getElementById('login');

if (loginButton != null) {
	attach(loginButton, 'click', handleLoginButtonClick);
}

function handleLoginButtonClick() {
	checkLoginStatus();
	interval = window.setInterval(checkLoginStatus, 2000);
}

async function checkLoginStatus() {
	try {
		let response = await fetch('https://hpcportal.rcc.uq.edu.au/client/api/session_info');
		let data = await response.json();
		isLoggedIn = (data.has_oauth_access_token == "true");
		if (isLoggedIn == true) {
			console.log("Login successful");
			window.clearInterval(interval);
			sessionStorage.setItem("isLoggedIn", "true");
			redirectAfterLogin();
		} else {
			console.log("Login in progress");
		}
	} catch(error) {
		window.clearInterval(interval);
		console.error(error);
	}
}

function redirectAfterLogin() {
	console.log("Redirecting...");
	setTimeout(function() {
		window.location.pathname = dashboardLocationPath;
	}, 1000);
}

function toggleLoginShow() {
	loginButton.classList.toggle("login--hidden");
}