import Model from './model.js';
import View from './view.js';

/**
 * A controller for the HPC Portal job submission form.
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
 */
export default class Controller {

	// TODO: Unit tests
	// TODO: Decide if I will use a data store. I will likely just use Model as my data store for now.

	/**
	 * Construct a new instance of class Controller, taking in View and Model instances.
	 * @param {Model} model 
	 * @param {View} view 
	 */
	constructor(model, view) {
		console.log("Constructing new instance of Controller..."); // TODO: Remove after testing
		this._view = view;
		this._model = model;

		// Attach events 
		this._view.attachFormSubmitEvent(this.onJobSubmit.bind(this));
	}

	/**
	 * Get the view.
	 */
	get view() {
		return this._view;
	}

	/**
	 * Get the model.
	 */
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

		let data = this.view.retrieveFormData(); // Retrieve the FormData object from View.

		this.model.formData = data; // Set the formData instance variable in Model.
		this.model.processFormData(); // Process the formData instance variable in Model.
	}
}