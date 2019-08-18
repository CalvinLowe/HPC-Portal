//import CreateJobModel from './CreateJobModel.js';
//import CreateJobView from './CreateJobView.js';

/**
 * A controller for the HPC Portal job submission form.
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
 */
//export default class CreateJobController {
class CreateJobController {

	/**
	 * Construct a new instance of class Controller, taking in View and Model instances.
	 * @param {Model} model 
	 * @param {View} view 
	 */
	constructor(model, view) {
		console.log("Constructing new instance of Controller..."); // TODO: Remove after testing
		this._view = view;
		this._model = model;

		// TODO: should I do this via a method that I call? rather than in the constcutor
		// Attach events 
		this._view.attachFormSubmitEvent(this.onJobSubmit.bind(this));
		this._view.attachFormPrevEvent(this.onPrevClick.bind(this));
		this._view.attachFormNextEvent(this.onNextClick.bind(this));

		// get the list and grab the ids from it
	}

	get view() {
		return this._view;
	}

	get model() {
		return this._model;
	}

	/**
	 * The event handler for the Job Submission Form submit event.
	 * @param {Event} e 
	 */
	onJobSubmit(e) {
		e.preventDefault();

		// On submit - enable select button and submit
		// Disabling an element
		//document.getElementById('buttonRemove').setAttribute("disabled", "disabled");

		// Enabling back an element by removing the "disabled" attribute
		//document.getElementById('buttonRemove').removeAttribute("disabled");

		let data = this.view.retrieveFormData(); // Retrieve the FormData object from View.

		this.model.formData = data; // Set the formData instance variable in Model.
		this.model.processFormData(); // Process the formData instance variable in Model.
	}

	
	// TODO: comments
	// TODO: check if is last index in list before incrementing further
	// TODO: figure out when to disable button
	// TODO: return error if last or first in list
	onPrevClick(e) {
		e.preventDefault();

		let list = this.view.jobSubmissionFieldsetList;

		if (this.containsClass(list, "job-submission-form__fieldset--active"))
		{
			this.removeClass(list, "job-submission-form__fieldset--active");
			this.addClass(list, "job-submission-form__fieldset--hidden");
			this.view.formIndex--;
			this.removeClass(list, "job-submission-form__fieldset--hidden");
			this.addClass(list, "job-submission-form__fieldset--active");
		}
	}

	onNextClick(e) {
		e.preventDefault();

		let list = this.view.jobSubmissionFieldsetList;

		if (this.containsClass(list, "job-submission-form__fieldset--active"))
		{
			this.removeClass(list, "job-submission-form__fieldset--active");
			this.addClass(list, "job-submission-form__fieldset--hidden");
			this.view.formIndex++;
			this.removeClass(list, "job-submission-form__fieldset--hidden");
			this.addClass(list, "job-submission-form__fieldset--active");
		}
	}

	containsClass(list, cssClass) {
		return list[this.view.formIndex].classList.contains(cssClass);
	}

	addClass(list, cssClass) {
		list[this.view.formIndex].classList.add(cssClass)
	}

	removeClass(list, cssClass) {
		list[this.view.formIndex].classList.remove(cssClass)
	}
}