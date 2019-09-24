let isLoggedIn;
let interval;

let homePageLocationPath = "/";
let dashboardLocationPath = "/dashboard";


// #IF DEVELOPMENT //
//document.onload = sessionStorage.setItem("isLoggedIn", "true");
// #ENDIF DEVELOPMENT //

document.onload = loginUI();

function loginUI() {
	initSessionStorage();
	if (sessionStorage.getItem("isLoggedIn") == "false" && window.location.pathname != homePageLocationPath) {
		console.log("Redirecting...");
		setTimeout(function() {
			window.location.pathname = homePageLocationPath;
		}, 1000);
	} else if (sessionStorage.getItem("isLoggedIn") == "true") {
		document.body.classList.add("logged-in");
	}
}

function initSessionStorage() {
	if (sessionStorage.getItem("isLoggedIn") == null) {
		sessionStorage.setItem("isLoggedIn", "false");
	}
}

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