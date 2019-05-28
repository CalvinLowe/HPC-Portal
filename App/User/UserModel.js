/**
 * A model for the HPC Portal user.
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
*/
export default class UserModel {

	/**
	 * Class constructor for UserModel.
	 */
	constructor() { // TODO: Initial values for constructor, TODO: Allow constructor to be created with default values
		console.log("Constructing new instance of UserModel...");
		
		// User information - retrived from Auth server
		this._username = "TestUser123"; // TODO: Remove test userName
		this._accessToken = null;
	}


	//***************//
	//-- User info --//
	//***************//
	// TODO: Need access to iframe/REST API on how to handle this
	// TODO: User info and token info will probably need to be stored in the app.js
	/**
	 * Get the username
	 */
	get username() {
		return this.username;
	}
	/**
	 * Set the user's name instance variables.
	 */
	set username(newUsername) {
		this._username = username;
	}

	// TODO: Need access to Auth REST API on how to handle this
	// TODO: Comments
	get accessToken() {/** TODO: */}
	set accessToken(accessToken) {/** TODO: */}
}