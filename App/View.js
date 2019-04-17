/**
 * A view for the HPC Portal job submission form.
 *
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
 */

 
// TODO: Helper for function for document.getElemebyId...

export default class View {

	constructor() {
		//console.log("View instance constructed");
		this.jobName = document.getElementById('jobName');
		this.output = document.getElementById('output');
		this.outputButton = document.getElementById('outputButton');
	}

	getOutput() {
		return this.output;
	}

	getJobName() {
		return this.jobName.value;
	}

	// I think I have to bind this again because I am using the handler
	attachShowOutputEvent(handler) {
		//console.log(handler);
		// TODO: construct alias function for adding event listeners like TODO MVC
		this.outputButton.addEventListener('click', handler);
	}
}