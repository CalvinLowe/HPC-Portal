import Model from './model.js';
import View from './view.js';

/**
 * A controller for the HPC Portal job submission form.
 *
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
 */
export default class Controller {

	// TODO: comments, unit tests, add data store
	constructor(model, view) {
		console.log("Constructing new instance of Controller...");
		this._view = view;
		this._model = model;

		// Attach events 
		this._view.attachFormSubmitEvent(this.onJobSubmit.bind(this));
	}

	// TODO: Comments
	get view() {
		return this._view;
	}

	// TODO: comments
	get model() {
		return this._model;
	}

	onJobSubmit(e) {
		e.preventDefault();
		console.log("onJobSubmit called");
		let data = this.view.formData; // a FormData object
		this.model.formData = data;
		
		this.model.processFormData();

		//console.log(this.model.formData());
		// so call set data then called processData
		// TODO: pass the formData object to the model and have the model process it
	}
}