/**
 * A model for the HPC Portal job submission form.
 *
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
*/
export default class Model {
	constructor(jobName) {
		this.jobName = jobName;
	}

	setJobName(jobName) {
		this.jobName = jobName;
		console.log("Current model state: ", this);
	}
}