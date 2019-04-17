/**
 * A model for the HPC Portal job submission form.
 *
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
*/
export default class Model {

	// todo: comments
	constructor() {
		this.jobName = null; // User input
		this.accountGroups = null; // Get from REST API
		this.jobAccountGroup = null; // User input
		this.select = 1; // Default
		this.ncpus = 1; // Default
		this.mem = 1; // Default
	}

	setJobName(jobName) {
		// TODO: Validate job name
		this.jobName = jobName;
		console.log("Current model state: ", this);
	}
}