import {select, attach} from './helper.js';

/**
 * A view for the HPC Portal job submission form.
 *
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
 */
export default class View {

	/**
	 * Class constructor for View.
	 */
	constructor() {
		console.log("Constructing new instance of View...");
		this._jobSubmissionForm = select("jobSubmissionForm");
		//this._formData = new FormData(this._jobSubmissionForm); // TODO: not sure if this should be in view or not..
	}

	// TODO: Comments
	get jobSubmissionForm() {
		return this._jobSubmissionForm;
	}

	// TODO: comments
	get formData() {
		return new FormData(jobSubmissionForm);
	}

	// TODO: Comments attach Event for job submission form
	attachFormSubmitEvent(handler) {
		let target = jobSubmissionForm;
		let type = 'submit';
		attach(target, type, handler);
	}


	// TODO: Just get the formData from the form. Figure out validation as we go along..
	// TODO: Adding classes during editing, verfication, validation, adding a green tick once verified, a red cross is needing changing..
	// Should verify as editing so I will need to get the selectors for each
	// TODO: get defaults THROUGH controller from Model and attach to value on pages..
}