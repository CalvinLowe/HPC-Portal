/**
 * A model for the HPC Portal Application.
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
*/
export default class ApplicationModel {

	/**
	 * Class constructor for ApplicationModel.
	 */
	constructor() {
		console.log("Constructing new instance of ApplicationModel...");
		
		// Window information
		this._currentWindowPath = window.location.pathname;

		// User information
		this._isLoggedIn = false;
	}

	/**
	 * Get current window path
	 */
	get currentWindowPath() {
		return this._currentWindowPath;
	}

	/**
	 * Set the current window path
	 */
	set currentWindowPath(newWindowPath) {
		this._currentWindowPath = newWindowPath;
	}

	/**
	 * Determine whether the application is in the logged in state
	 */
	isLoggedIn() {
		return this._isLoggedIn;
	}
}