import JobModel from './JobModel.js';
import ListJobsTableView from './ListJobsTableView.js';
import User from '../user/User.js';

document.onload = displayJobList()
	.catch(error => {
		console.log(error);
	});

async function displayJobList() {
	const jobsJSON = await User.requestListActiveJobs()
		.catch(error => {
			console.log(error);
		});
	
	if (jobsJSON) {
		let jobsList = [];
			
		jobsJSON.forEach(function(item, index, array) {
			let job = new JobModel(item.jobid, item.jobidNumber, item.reqtime, item.sessionid, item.reqmem, item.state, item.nds, item.elapTime, item.tsk, item.queue,  item.jobname,  item.username);
			console.log(job);
			jobsList.push(job);
		});

		let listJobsContainer = document.getElementById("listJobsContainer");
		let jobView = new ListJobsTableView(jobsList);
		listJobsContainer.innerHTML = jobView.getJobListView();

	} else {
		console.log("Jobs json not defined.");
	}
}