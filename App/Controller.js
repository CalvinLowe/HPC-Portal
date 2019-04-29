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

		// Methods need to bind this so that they can access instance variables
		// e.g. this.view.attachShowOutputEvent(this.showOutput.bind(this));
	}




	/*setView() {
		// not sure of the use of this just yet.. perhaps useful for live updating the window with new information
		//console.log("Controller.setView() called");
	}*/
}