let siteLogin = document.getElementById('login');
let siteLogout = document.getElementById('logout');

let loginUrl = siteLogin.getAttribute('href');

attach(siteLogin, 'click', handleLogin);
attach(siteLogout, 'click', handleLogout);

function handleLogin(e) {
	//window.location = "dashboard/dashboard.html"
	let answer = isLoggedIn();
	//console.log(answer);
	if (answer == true) {
		toggleLoginShow();
	}
}

function handleLogout(e) {
	// Check if logged out then do the rest and the redirect
	toggleLoginShow();
}

function toggleLoginShow(element) {
	siteLogin.classList.toggle("login--hidden");
	siteLogout.classList.toggle("logout--hidden");
}

async function isLoggedIn() {
	let resource = "https://hpcportal.rcc.uq.edu.au/client/api/session_info";
	let response = await fetch(resource, {});
	//console.log(response);
	let responseJSON = await response.json();
	//console.log(responseJSON);
	// TODO: errors?
	return responseJSON.has_oauth_access_token;
}