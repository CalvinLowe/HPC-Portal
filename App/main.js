// User
import UserModel from './User/UserModel.js';


// Create Job
//import CreateJobModel from './CreateJob/CreateJobModel.js';
//import CreateJobView from './CreateJob/CreateJobview.js';
//import CreateJobController from './CreateJob/CreateJobController.js';

// TODO: imports need to take into account which page we are on..

/**
 * addEventListener wrapper
 * 
 * @param {Element} target Target element
 * @param {string} type Event name to bind to
 * @param {Function} handler Event handler
 * // TODO: get this working in helper.js again
 */
function attach(target, type, handler) {
	target.addEventListener(type, handler);
}

/**
 * Inialises the application. Creates instances of objects.
 */
function setup() {
	console.log('Setting up...');

	// TODO: should I make an app object? I can store URLs for each of the existing pages and 

	// TODO: Initialise User object
	const user = new UserModel();
	//user.getSessionInfo();

	// TODO: check if user is logged in user.isLoggedIn
	// TODO: onreload check if user is logged in -> needs to trigger for every page
	// TODO: app should intialise only once per whatever
	// TODO: need a away to log out - in the app and in the backend..
	// 

	// TODO: check if logged in
	// TODO: if logged in and page is equal to job creation create the job modles, views and controllers.
}

// Initialise application on window load... TODO: Should this be on first load only?
attach(window, 'load', setup);


// TODO: integrate into Class
let login = document.getElementById('login');
let url = login.getAttribute('href');


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