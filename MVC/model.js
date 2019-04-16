//Model
var JobSubmissionModel = function JobSubmissionModel(jobName) {
	this.jobName = jobName;
}

JobSubmissionModel.prototype.getJobName = function getJobName() {
	return this.jobName;
}

JobSubmissionModel.prototype.setJobName = function setJobName(jobName) {
	this.jobName = jobName
}