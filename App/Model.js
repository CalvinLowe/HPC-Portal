/**
 * A model for the HPC Portal job submission form.
 *
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
*/
export default class Model {
// TODO: comments for all methods and constructors
	
	/**
	 * Class constructor for Model.
	 */
	constructor() { // TODO: Initial values for constructor, TODO: Allow constructor to be created with default values
		console.log("Constructing new instance of Model...");

		// User information - retrived from Auth server using iFrame
		// TODO: Decide whether I need to store this info in model when typing (It will be accessed using an iFrame)
		this._username = "TestUser123"; // TODO: Remove test userName
		this._accessToken = null;

		// Retrieved
		this._accountGroupList = ['RCC-UQ', 'ADMIN-UQ', 'EXAMPLE3-UQ']; // TODO: Remove test accountGroupList

		// Job Submission
		this._jobName = null; // User input
		this._accountGroup = null; // Selected from accountGroupList
		this._walltime = null; // Calculated value
		this._select = 1; // User input, default = 1
		this._ncpus = 1; // User input, default = 1
		this._memory = 1; // User input, default = 1 GB
		this._payload = null; // User input
	}

	//***************//
	//== Accessors ==//
	//***************//
	
	//***************//
	//-- User info --//
	//***************//
	// TODO: Need access to iframe/REST API on how to handle this
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

	//***************//
	//-- Retrieved --//
	//***************//
	/**
	 * Get the accountGroupList
	 */
	get accountGroupList() {
		return this._accountGroupList;
	}
	/**
	 * Set the account group list. Account group list is retrieved using the REST API.
	 */
	set accountGroupList(newAccountGroupList) {} // TODO: grabs the accountGroupList from the REST API

	//********************//
	//-- Job submission --//
	//********************//
	// TODO: Helper methods for validating user inputs
	// TODO: Explain what each variable means in terms of the HPC 

	/** 
	 * Get the job name.
	 */
	get jobName() {
		return this._jobName;
	}
	/**
	 * Set the job name.
	*/
	set jobName(newJobName) {
		this._jobName = newJobName;
	}

	/** 
	 * Get the current selected account group.
	 */
	get accountGroup() {
		return this._accountGroup;
	}
	/** 
	 * Set the current selected account group.
	 */
	set accountGroup(newAccountGroup) {
		this._accountGroup = newAccountGroup;
	}

	/** 
	 * Get the current walltime.
	 */
	get walltime() {
		return this._walltime;
	}
	/** 
	 * Set the walltime.
	 */
	set walltime(newWalltime) {
		this._walltime = newWalltime;
		// TODO: Calculate walltime from hours, seconds minutes.
	}

	/** 
	 * Get the current select value.
	 */
	get select() {
		return this._select;
	}
	/** 
	 * Set the select value. 
	 */
	set select(newSelectValue) {
		this._select = newSelectValue;
	}

	/** 
	 * Get the current ncpus value.
	 */
	get ncpus() {
		return this._ncpus;
	}
	/** 
	 * Set the ncpus value.
	 */
	set ncpus(newNcpusValue) {
		this._ncpus = newNcpusValue;
	}

	/** 
	 * Get the current memory value.
	 */
	get memory() {
		return this._memory;
	}
	/** 
	 * Set the memory value
	 */
	set memory(newMemoryValue) {
		this._memory = newMemoryValue;
	}

	/**
	 * Get the current payload value
	 */
	get payload() {
		return this._payload;
	}

	/**
	 * Set the payload value
	 */
	set payload(newPayloadValue) {
		return this._payload;
	}
}