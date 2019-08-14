let siteLogin = document.getElementById('login');
let siteLogout = document.getElementById('logout');

let loginUrl = siteLogin.getAttribute('href');

attach(siteLogin, 'click', handleLogin);
attach(siteLogout, 'click', handleLogout);

function handleLogin(e) {
	//window.location = "dashboard/dashboard.html"
	// Check if logged in then do the rest  and the redirect
	toggleLoginShow();
}

function handleLogout(e) {
	// Check if logged out then do the rest and the redirect
	toggleLoginShow();
}

function toggleLoginShow(element) {
	siteLogin.classList.toggle("login--hidden");
	siteLogout.classList.toggle("logout--hidden");
}

// TODO: just for testing
let test = document.getElementById('FETCH');
attach(test, 'click', isLoggedIn);

function isLoggedIn() {
	let resource = "https://hpcportal.rcc.uq.edu.au/client/api/session_info";
	//let resource = "https://hpcportal.rcc.uq.edu.au/";
	
	fetch(resource);
	//let fetchResponsePromise = fetch(resource);
	//console.log(fetchResponsePromise);
	
	//return false;
}