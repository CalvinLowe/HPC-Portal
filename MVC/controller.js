function JobSubmissionController(jobSubmissionView, jobSubmissionModel) {
	this.jobSubmissionView = jobSubmissionView;
	this.jobSubmissionModel = jobSubmissionModel;
};

JobSubmissionController.prototype.initialize = function initialize() {
	this.jobSubmissionView.handleResultClick = this.handleResultClick.bind(this);
};

JobSubmissionController.prototype.handleResultClick = function handleResultClick(e) {
	console.log("result click handled: " + e);
	var target = e.currentTarget;
};