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
		this.view = view;
		this.model = model;

		// Methods need to bind this so that they can access instance variables
		this.view.attachShowOutputEvent(this.showOutput.bind(this));
	}

	updateModel(model, jobName) { // Add other model variables as required. This is what will be submitted via XHR
		this.model.setJobName(jobName);
	}

	showOutput() {
		var jobName = this.view.getJobName();
		this.updateModel(this.model, jobName);
		event.preventDefault();
		this.view.getOutput().innerHTML = jobName;
	}

	setView() {
		// not sure of the use of this just yet.. perhaps useful for live updating the window with new information
		//console.log("Controller.setView() called");
	}
}