/**
 * A controller for the HPC Portal job submission form.
 *
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
 */

/**
 * Constructor for the JobSubmissionController.
 * 
 * @param {} jobSubmissionView 
 * @param {*} jobSubmissionModel 
 */
var JobSubmissionController = function JobSubmissionController(jobSubmissionView, jobSubmissionModel) {
	this.jobSubmissionView = jobSubmissionView;
	this.jobSubmissionModel = jobSubmissionModel;
};

JobSubmissionController.prototype.initialize = function initialize() {
	this.jobSubmissionView.onClickGetJobSubmission = this.onClickGetJobSubmission.bind(this);
};

JobSubmissionController.prototype.onClickGetJobSubmission = function(e) {
	var target = e.currentTarget;
	var index = parseInt(target.dataset.JobSubmissionIndex, 10);
	this.jobSubmissionModel.getJobSubmission(index, this.showJobSubmission.bind(this));
};

JobSubmissionController.prototype.showJobSubmission = function showJobSubmission(jobSubmissionModelData) {
	var jobSubmissionModel = {
		jobName: jobSubmissionModel.jobName,
		/* ... insert rest of data from inputs ..*/
	};

	jobSubmissionViewModel.previousIndex = jobSubmissionModelData.index - 1;
	jobSubmissionViewModel.nextIndex = jobSubmissionModelData.index + 1;

	if (jobSubmissionModelData.index === 0) {
		jobSubmissionViewModel.previousIndex = jobSubmissionModelData.count - 1;
	}

	if (jobSubmissionModelData.index === jobSubmissionModelData.count - 1) {
		jobSubmissionViewModel.nextIndex = 0;
	}

	this.jobSubmissionView.render(jobSubmissionViewModel);
};
