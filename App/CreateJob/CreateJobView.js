import {select, attach} from '../../Utility/helper.js';

/**
 * A view for the HPC Portal job submission form.
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
 */
export default class CreateJobView {

	// TODO: Unit tests
	// TODO: Data validation
	// TODO: onChange events for the form fields.
	// TODO: Adding and removing classes for editing, verifying, validation. Add a grene tick once verifed, a red cross if validation failed
	// TODO: Form field default values should be set from the Model. I will need to attach additional events for this.

	/**
	 * Class constructor for View.
	 */
	constructor() {
		console.log("Constructing new instance of View..."); // TODO: Remove after testing.
		this._jobSubmissionForm = select("jobSubmissionForm");
	}

	/**
	 * Get the Job Submission Form element.
	 */
	get jobSubmissionForm() {
		return this._jobSubmissionForm;
	}

	/**
	 * Create a new formData object using the Job Submission Form element.
	 */
	retrieveFormData() {
		let formData = new FormData(this.jobSubmissionForm);
		return formData;
	}

	/**
	 * Attach an event handler to the Job Submission Form element for the submit event.
	 * @param {Function} handler 
	 */
	attachFormSubmitEvent(handler) {
		let target = jobSubmissionForm;
		let type = 'submit';
		attach(target, type, handler);
	}
}