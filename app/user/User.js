/**
 * A model for the HPC Portal user.
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
*/
export default class User {

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

	// Token expires every five minutes
	static async getAccessToken() {
		const response = await fetch('https://hpcportal.rcc.uq.edu.au/client/api/access_token');
		const data = await response.json();
		return data.access_token;
	}

	static async requestFiles(folderPath = "") {
		const accessToken = await User.getAccessToken()
			.catch(error => {
				console.log(error);
			});
		let folderPathBase64 = window.btoa(folderPath);
		const url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/listfolderbase64?folderpath=${folderPathBase64}&access_token=${accessToken}`;
		const response = await fetch(url);
		const data = await response.json();
		return data.commandResult;
	}

	static async requestListActiveJobs() {
		const accessToken = await User.getAccessToken()
			.catch(error => {
				console.log(error);
			});

		const url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/listall?access_token=${accessToken}`;
		const response = await fetch(url);
		const data = await response.json();
		return data.commandResult;
	}

	static async requestUserGroups() {
		const accessToken = await User.getAccessToken()
			.catch(error => {
				console.log(error);
			});
		const url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/getprojects?access_token=${accessToken}`;
		const response = await fetch(url);
		const data = await response.json();

		let groups = []
		data.commandResult.forEach(function(item, index, array) {
			groups.push(item.group);
		});

		return groups;
	}

	static async requestJobSubmission(jobName, workDirectory, pbsScript, machine) {
		const accessToken = await User.getAccessToken()
			.catch(error => {
				console.log(error);
			});

		let b64pbs = window.btoa(pbsScript);

		console.log(jobName);
		console.log(workDirectory);
		console.log(pbsScript);
		console.log(machine);
		console.log(accessToken);

		const url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/submitjob?jobName=${jobName}&workdir=${workDirectory}&pbs=${b64pbs}&machine=${machine}&access_token=${accessToken}`;
		
		const response = await fetch(url);
	}
}