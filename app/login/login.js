// import requestAccessToken from '../RequestAPI/RequestAPI.js';

let isLoggedIn;
let interval;

let homePageLocationPath = "/";
let redirectLocationPath = "/create-job";

window.onload = initialiseLogin();

function initialiseLogin() {
	initialiseLoginButton();
	loginUI();
}

function initialiseLoginButton() {
	let loginButton = document.getElementById('login');
	if (loginButton != null) {
		attach(loginButton, 'click', handleLoginButtonClick);
	}
}

function handleLoginButtonClick() {
	openLoginWindow();
	requestLoginStatus();
	interval = window.setInterval(requestLoginStatus, 1000);
}

function loginUI() {
	initSessionStorage();
	if (sessionStorage.getItem("isLoggedIn") == "false") {
		document.body.classList.add("logged-out");
		if (window.location.pathname != homePageLocationPath) {
			console.log("Redirecting...");
			setTimeout(function () {
				window.location.pathname = homePageLocationPath;
			}, 100);
		}
	} else if (sessionStorage.getItem("isLoggedIn") == "true") {
		document.body.classList.remove("logged-out");
		document.body.classList.add("logged-in");
	}
}

function initSessionStorage() {
	if (sessionStorage.getItem("isLoggedIn") == null) {
		sessionStorage.setItem("isLoggedIn", "false");
	}
}

function openLoginWindow() {
	let myWindow = window.open("https://hpcportal.rcc.uq.edu.au/client/login?service=hpcportal");
	if (isLoggedIn === true) {
		myWindow.close();
	}
}

async function requestLoginStatus() {
	try {
		let response = await fetch('https://hpcportal.rcc.uq.edu.au/client/api/session_info').catch(error => {console.log(error);});
		let data = await response.json();
		isLoggedIn = (data.has_oauth_access_token == "true");
		if (isLoggedIn == true) {
			console.log("Login successful");
			window.clearInterval(interval);
			sessionStorage.setItem("isLoggedIn", "true");

			// let userInfoResponse = await RequestAPI.requestUserInfo().catch(error => {console.log(error);});
			// sessionStorage.setItem("user", userInfoResponse.userName)

			redirectAfterLogin();
		} else {
			console.log("Login in progress");
		}
	} catch (error) {
		window.clearInterval(interval);
		console.error(error);
	}
}

function redirectAfterLogin() {
	console.log("Redirecting...");
	setTimeout(function () {
		window.location.pathname = redirectLocationPath;
	}, 1000);
}

function redirectAfterLogout() {
	console.log("Redirecting...");
	setTimeout(function() {
		if (window.location.pathname != homePageLocationPath) {
			window.location.pathname = homePageLocationPath;
		} else {
			window.location.reload();
		}
	}, 1000);
}