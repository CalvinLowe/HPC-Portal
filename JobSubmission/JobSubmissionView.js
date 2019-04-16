/**
 * A view for the HPC Portal job submission form.
 *
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
 */

var JobSubmissionView = function JobSubmissionView(element) {
	this.element = element;
	this.onClickGetJobSubmission = null;
}

JobSubmissionView.prototype.render = function render(viewModel) {
	this.element.innerHTML = '<h3>' + viewModel.name + '</h3>' +
	'<img class="JobSubmission-image" src="' + viewModel.imageUrl +
	'" alt="' + viewModel.name + '" />' +
	'<p><b>Size:</b> ' + viewModel.size + '</p>' +
	'<p><b>Favorite food:</b> ' + viewModel.favoriteFood + '</p>' +
	'<a id="previousJobSubmission" class="previous button" href="javascript:void(0);"' +
	' data-JobSubmission-index="' + viewModel.previousIndex + '">Previous</a> ' +
	'<a id="nextJobSubmission" class="next button" href="javascript:void(0);"' +
	' data-JobSubmission-index="' + viewModel.nextIndex + '">Next</a>';

	this.previousIndex = viewModel.previousIndex;
	this.nextIndex = viewModel.nextIndex;

	// Wire up click events, and let the controller handle events
	var previousJobSubmission = this.element.querySelector('#previousJobSubmission');
	previousJobSubmission.addEventListener('click', this.onClickGetJobSubmission);

	var nextJobSubmission = this.element.querySelector('#nextJobSubmission');
	nextJobSubmission.addEventListener('click', this.onClickGetJobSubmission);
	nextJobSubmission.focus();
};