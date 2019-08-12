let siteLogin = document.getElementById('login');
let siteLogout = document.getElementById('logout');

let loginUrl = siteLogin.getAttribute('href'); // TODO: do we wanna show the login url to users?

attach(siteLogin, 'click', handleLogin);
attach(siteLogout, 'click', handleLogout);

function handleLogin(e) {
	e.preventDefault();
	openLoginWindow(loginUrl);
	login(); // TODO: need to do checks before calling login
}

function handleLogout(e) {
	e.preventDefault();
	logout();
}

function login() {
	siteLogin.classList.add("login--hidden");
	siteLogout.classList.remove("logout--hidden");
}

function logout() {
	siteLogin.classList.remove("login--hidden");
	siteLogout.classList.add("logout--hidden");
	}

function openLoginWindow(url) {
	event.preventDefault();
	console.log(url);
	let windowName = "Test window";
	let width = 800,
        height = 600;
	let left = screen.width/2 - width/2,
		top = screen.height/2 - height/2;

	//let loginWindow = window.open(url, windowName, [windowFeatures]);
	//loginWindow = window.open(url, windowName);
	let loginWindow = window.open('about:blank', '', "top=" + top + ",left=" + left + ",width="+width+",height="+height);
	loginWindow.location = url;

	attach(loginWindow, 'unload', () => {console.log(loginWindow.location)});
}