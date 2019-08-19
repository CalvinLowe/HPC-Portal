let logoutButton = document.getElementById('logout');
if (logoutButton != null) {
	attach(logoutButton, 'click', handleLogoutButtonClick);
}

function handleLogoutButtonClick(e) {
	logout();
	toggleLogoutShow();
}

async function logout() {
	// TODO: handle errors
	let response = await fetch('https://hpcportal.rcc.uq.edu.au/client/api/end_session');
	let data = await response.json();
	if (data.message.includes("invalidated")) {
		console.log("Logout successful");
		sessionStorage.setItem("isLoggedIn", "false");
		redirectAfterLogout();
	} else {
		console.log("Something went wrong...");
	}
}

function redirectAfterLogout() {
	console.log("Redirecting...");
	setTimeout(function() {
		window.location = "../index.html"
	}, 2000);
}

function toggleLogoutShow() {
	logoutButton.classList.toggle("logout--hidden");
}