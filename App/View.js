import {select, attach} from './helper.js';

/**
 * A view for the HPC Portal job submission form.
 *
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
 */

 
// TODO: Helper for function for document.getElemebyId...

export default class View {

	constructor() {
		//console.log("View instance constructed");
		this.jobName = select('jobName');
		this.accountGroup = select('accountGroup');
		this.walltime = select('wallTimeHours').value + ":" + select('wallTimeMinutes').value + ":" + select('wallTimeSeconds').value; // make this a helper function
		this.output = select('output');
		this.outputButton = select('outputButton');
	}

	getOutput() {
		return this.output;
	}

	getJobName() {
		return this.jobName.value;
	}

	getAccountGroup() {
		//console.log(this.accountGroup);
		return this.accountGroup.selected;
	}

	getWalltime() {
		return this.walltime;
	}


	// I think I have to bind this again because I am using the handler
	attachShowOutputEvent(handler) {
		//console.log(handler);
		// TODO: construct alias function for adding event listeners like TODO MVC
		attach(this.outputButton, 'click', handler);
	}
}