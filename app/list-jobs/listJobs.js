import JobModel from './JobModel.js';
import ListJobsTableView from './ListJobsTableView.js';
import RequestAPI from '../RequestAPI/RequestAPI.js';

document.onload = displayJobList();

async function displayJobList() {
	const jobsJSON = await RequestAPI.requestListActiveJobs().catch(error => {console.log(error);});
	
	if (jobsJSON) {
		let jobsList = [];
			
		jobsJSON.forEach(function(item, index, array) {
			let job = new JobModel(item.jobid, item.jobidNumber, item.reqtime, item.sessionid, item.reqmem, item.state, item.nds, item.elapTime, item.tsk, item.queue,  item.jobname,  item.username);
			jobsList.push(job);
		});

		let listJobsContainer = document.getElementById("listJobsContainer");
		let jobView = new ListJobsTableView(jobsList);
		listJobsContainer.innerHTML = jobView.getJobListView();

	} else {
		console.log("Jobs json not defined.");
	}
}