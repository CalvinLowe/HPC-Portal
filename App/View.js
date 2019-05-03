import {select, attach} from './helper.js';

/**
 * A view for the HPC Portal job submission form.
 *
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
 */
export default class View {

	/**
	 * Class constructor for View.
	 */
	constructor() {
		console.log("Constructing new instance of View...");
		this.jobSubmissionForm = select("jobSubmissionForm");
		this.formData = new FormData(this.jobSubmissionForm);
	}

	/*TODO: Do this in controller? for(var pair of formData.entries()) {
		console.log(pair[0]+ ', '+ pair[1]);
	} */

	//attachEvent

	// TODO: Just get the formData from the form. Figure out validation as we go along..
	// TODO: Adding classes during editing, verfication, validation, adding a green tick once verified, a red cross is needing changing..
	// Should verify as editing so I will need to get the selectors for each
}