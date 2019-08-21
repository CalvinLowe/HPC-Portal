/**
 * A model for the HPC Portal user.
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
*/
export default class UserModel {

	/**
	 * Class constructor for UserModel.
	 */
	constructor() {
		console.log("Constructing new instance of UserModel...");
		
		// Session information
		this._username = ""; // uname
		this._sessionId = null; // session_id
		this._hasToken = false; //  has_oauth_access_token
		this._providers = ""; // proviers
		this._email = ""; // email
	}

	/**
	 * Get the username
	 */
	get username() {
		return this._username;
	}
	/**
	 * Set the username.
	 */
	set username(newUsername) {
		this._username = newUsername;
	}

	/**
	 * Get the session id
	 */
	get sessionId() {
		return this._sessionId;
	}
	/**
	 * Set the session id
	 */
	set sessionId(newSessionId) {
		this._sessionId = newSessionId;
	}

	/**
	 * Get the email address
	 */
	get email() {
		return this._email;
	}
	/**
	 * Set the email address
	 */
	set email(newEmail) {
		this._email = newEmail;
	}

	/**
	 * Determine whether the user has an access token.
	 * Returns true if the user has an access token, else false.
	 */
	hasAccessToken() {
		return this._accessToken;
	}

	/**
	 * Get the session info.
	 */
	getSessionInfo() {
		fetch('https://hpcportal.rcc.uq.edu.au/client/api/session_info ')
  			.then(function(response) {
    			return response.json();
  			})
  			.then(function(myJson) {
    			console.log(JSON.stringify(myJson));
			});
	}
}