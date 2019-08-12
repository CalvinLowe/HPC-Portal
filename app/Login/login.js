let login = document.getElementById('login');

// TODO: do we wanna show the login url to users?
let loginUrl = login.getAttribute('href');

attach(login, 'click', handleLogin);

function handleLogin(e) {
	e.preventDefault();
	openLoginWindow(loginUrl);
	
	// TODO: wait for signal
	frontEndSignIn()
}

function frontEndSignIn() {
	login.removeEventListener('click', handleLogin);
	login.title = "Log out";
	login.href = "#";
	login.id = "logout";
	login.text = "Log out";
	console.log(login);
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