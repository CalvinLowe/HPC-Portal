let logout = document.getElementById('logout');
attach(document.getElementById('logout'), 'click', handleLogoutButtonClick);

function toggleLogoutShow() {
	logout.classList.toggle("logout--hidden");
}

function handleLogoutButtonClick(e) {
	// Check if logged out then do the rest and the redirect
	toggleLoginShow();
}