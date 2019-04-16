// define the view
function JobSubmissionView() {
	this.jobName = document.getElementById('jobName');
	this.output = document.getElementById('output');
	this.result = document.getElementById('showResult');
	this.result.addEventListner('click', JobSubmissionController.handleResultClick);
}

JobSubmissionView.prototype.render = function render() {
	this.output.innerHTML = "FUCK";
}