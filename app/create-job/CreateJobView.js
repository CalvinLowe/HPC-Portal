/**
 * A view for the HPC Portal job submission form.
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
 */
//export default class CreateJobView {
class CreateJobView {
	/**
	 * Class constructor for View.
	 */
	constructor() {
		console.log("Constructing new instance of View...");
		//this._jobSubmissionForm = select("jobSubmissionForm");
		this._jobSubmissionForm = document.getElementById("jobSubmissionForm");
		this._prevSectionJobForm = document.getElementById("prevSectionJobForm");
		this._nextSectionJobForm = document.getElementById("nextSectionJobForm");
		this._jobSubmissionFieldsetList = document.getElementsByClassName('job-submission-form__fieldset');
		this._formIndex = 0;
		this.setupForm();
	}

	/**
	 * Create a new formData object using the Job Submission Form element.
	 */
	retrieveFormData() {
		let formData = new FormData(this.jobSubmissionForm);
		return formData;
	}

	/**
	 * Attach an event handler to the Job Submission Form element for the submit event.
	 * @param {Function} handler 
	 */
	attachFormSubmitEvent(handler) {
		let target = jobSubmissionForm;
		let type = 'submit';
		//attach(target, type, handler);
		target.addEventListener(type, handler);
	}

	/**
	 * Attach an event handler to the Job Submission Form  previous button for the click event.
	 * @param {*} handler 
	 */
	attachFormPrevEvent(handler) {
		let target = prevSectionJobForm;
		let type = 'click';
		target.addEventListener(type, handler);
	}

	/**
	 * Attach an event handler to the Job Submission Form  next button for the click event.
	 * @param {*} handler 
	 */
	attachFormNextEvent(handler) {
		let target = nextSectionJobForm;
		let type = 'click';
		target.addEventListener(type, handler);
	}

	setupForm() {
		 this.jobSubmissionFieldsetList[0].classList.add("job-submission-form__fieldset--active");
		 this.jobSubmissionFieldsetList[1].classList.add("job-submission-form__fieldset--hidden");
	}

	async displayGroups() {
		console.log("Display groups called!");
		let accountGroupsContainer = document.getElementById("accountGroups");
		const groups = await User.requestUserGroups()
			.catch(error => {
				console.log(error);
			});
		groups.forEach(function(item, index, array) {
			let groupElement = document.createElement("option");
			groupElement.textContent = item.group;
			groupElement.id = item.group;
			groupElement.value = item.group;
			accountGroupsContainer.appendChild(groupElement);
		});
	}
}