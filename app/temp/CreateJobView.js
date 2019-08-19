//import {select, attach} from '../../Utility/helper.js';

/**
 * A view for the HPC Portal job submission form.
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
 */
//export default class CreateJobView {
class CreateJobView {

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
		//this._jobSubmissionForm = select("jobSubmissionForm"); // TODO: see if you can get imports etc working again, might need some bundling JS
		this._jobSubmissionForm = document.getElementById("jobSubmissionForm");
		this._prevSectionJobForm = document.getElementById("prevSectionJobForm");
		this._nextSectionJobForm = document.getElementById("nextSectionJobForm");
		this._jobSubmissionFieldsetList = document.getElementsByClassName('job-submission-form__fieldset');
		this._formIndex = 0;
		this.setupForm();
	}

	get jobSubmissionForm() {
		return this._jobSubmissionForm;
	}
	
	get prevSectionJobForm() {
		return this._prevSectionJobForm;
	}

	get nextSectionJobForm() {
		return this._nextSectionJobForm;
	}

	get jobSubmissionFieldsetList() {
		return this._jobSubmissionFieldsetList;
	}

	// TODO: move to model
	get formIndex() {
		return this._formIndex;
	}

	// TODO: move to model
	set formIndex(index) {
		this._formIndex = index;
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
		//attach(target, type, handler);
		target.addEventListener(type, handler);
	}

	/**
	 * Attach an event handler to the Job Submission Form  previous button for the click event.
	 * @param {*} handler 
	 */
	attachFormPrevEvent(handler) {
		let target = prevSectionJobForm;
		let type = 'click';
		target.addEventListener(type, handler);
	}

	/**
	 * Attach an event handler to the Job Submission Form  next button for the click event.
	 * @param {*} handler 
	 */
	attachFormNextEvent(handler) {
		let target = nextSectionJobForm;
		let type = 'click';
		target.addEventListener(type, handler);
	}


	// TODO: comments and decide where this should go
	setupForm() {
		 this.jobSubmissionFieldsetList[0].classList.add("job-submission-form__fieldset--active");
		 this.jobSubmissionFieldsetList[1].classList.add("job-submission-form__fieldset--hidden");
	}
}