/**
 * A model for the HPC Portal job submission form.
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
*/
//export default class CreateJobModel {
class CreateJobModel {

	/**
	 * Class constructor for CreateJobModel.
	 */
	constructor() {
		console.log("Constructing new instance of CreateJobModel...");

		// Retrieved
		this._accountGroupList = ['RCC-UQ', 'ADMIN-UQ', 'EXAMPLE3-UQ'];

		// Job Submission
		this._jobName = null; // User input
		this._accountGroup = null; // Selected from accountGroupList
		this._walltime = null; // User input, default = 1
		this._select = 1; // User input, default = 1
		this._ncpus = 1; // User input, default = 1
		this._memory = 1; // User input, default = 1 GB
		this._payload = null; // User input

		// Form Data
		this._formData = null;

		// PBS Script
		this._pbsScript = null;
		this._pbsScriptBase64 = null;
	}

	/**
	 * Get the accountGroupList
	 */
	get accountGroupList() {
		return this._accountGroupList;
	}
	/**
	 * Set the account group list. Account group list is retrieved using the REST API.
	 */
	set accountGroupList(newAccountGroupList) {}

	//#region Field values
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
		this._payload = newPayloadValue;
	}

	/**
	 * Get the current formData object
	 */
	get formData() {
		return this._formData;
	}
	/**
	 * Set the formData object
	 */
	set formData(newFormData) {
		this._formData = newFormData;
	}

	/**
	 * Get the current pbsScript value.
	 */
	get pbsScript() {
		return this._pbsScript;
	}
	/**
	 * Set the pbsScript value.
	 */
	set pbsScript(newPbsScriptValue) {
		this._pbsScript = newPbsScriptValue;
	}

	/**
	 * Get the current pbsScriptBase64 value.
	 */
	get pbsScriptBase64() {
		return this._pbsScriptBase64;
	}
	/**
	 * Set the pbsScriptBase64 value.
	 */
	set pbsScriptBase64(newPbsScriptBase64Value) {
		this._pbsScriptBase64 = newPbsScriptBase64Value;
	}

	//#endregion

	//#region Data processing
	processFormData() {		
		let data = this.formData;

		// Check that the formData object contains all the necessary keys.
		if (this.jobSubmissionKeyCheck(data)) { // data contains all necessary keys

			// jobName
			this.jobName = data.get('jobName');

			// accountGroup
			this.accountGroup = data.get('accountGroup');

			// walltime
			this.walltime = data.get('walltime') + ":00:00";

			// select
			this.select = data.get('select');
			
			// ncpus
			this.ncpus = data.get('ncpus');

			// memory
			this.memory = data.get('memory');
			
			// payload
			this.payload = data.get('payload');

		} else {
			console.log("Key missing from formData");
			return;
		}

		// Populate the template literal with form values
		let newPbsScriptValue = this.populateScriptTemplate();
		this.pbsScript = newPbsScriptValue;

		// Encode the PBS Script
		let encodedData = this.encodeBase64(this.pbsScript);
		console.log(encodedData);

		let decodedData = this.decodeBase64(encodedData);
		console.log(decodedData);

	}

	jobSubmissionKeyCheck(formData) {
		let jobSubmissionCheckArray = ['jobName', 'accountGroup', 'walltime', 'select', 'ncpus', 'memory', 'payload'];
		let jobSubmissionCheck = true;

		for (let i = 0; i < jobSubmissionCheckArray.length; i++) {
			if (formData.get(jobSubmissionCheckArray[i]) === null) {
				console.log("Key was missing!");
				jobSubmissionCheck = false;
			}
		}
		return jobSubmissionCheck;
	}

	populateScriptTemplate() {
		let scriptTemplate = 
`#!/bin/bash
#
#PBS -A ${this.accountGroup}
#
#PBS -l select=${this.select}:ncpus=${this.ncpus}:mem=${this.memory}GB
#PBS -l walltime=${this.walltime}
#PBS -N ${this.jobName}
#
${this.payload}`;
		return scriptTemplate;
	}

	/**
	 * Encodes a PBS Script template literal to base 64.
	 * @param {String} pbsTemplate 
	 */
	encodeBase64(pbsTemplate) {
		let encodedData = window.btoa(pbsTemplate);
		return encodedData;
	}

	/**
	 * Decodes a base 64 encoded PBS Script template literal.
	 * @param {String} encodedPbsTemplate 
	 */
	decodeBase64(encodedPbsTemplate) {
		let decodedData = window.atob(encodedPbsTemplate);
		return decodedData;
	}
	//#endregion
}