let login = document.getElementById('login');
let url = login.getAttribute('href');

console.log(login);
console.log(url);


attach(login, 'click', openLoginWindow);

function openLoginWindow(event) {
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