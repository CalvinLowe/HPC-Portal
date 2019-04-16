/**
 * A model for the HPC Portal job submission form.
 *
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
*/

var JobSubmissionModel = function JobSubmissionModel(jobName) {
	this.jobName = jobName;
	console.log(jobName);
}

/*var JobSubmissionModel = function JobSubmissionModel(XMLHttpRequest) {
	//this.XMLHttpRequest = XMLHttpRequest;
}*/

/*
JobSubmissionModel.prototype.getJobSubmission = function getJobSubmission(index, fn) {
	var oReq = new this.XMLHttpRequest();

	oReq.onload = function onLoad(e) {
		var ajaxResponse = JSON.parse(e.currentTarget.responseText);
		// The index must be an integer type, else this fails
		var jobSubmission = ajaxResponse[index];

		jobSubmission.index = index;
		jobSubmission.count = ajaxResponse.length;

		fn(jobSubmission);
	};

	oReq.open('GET', 'https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);
	oReq.send();
};
*/