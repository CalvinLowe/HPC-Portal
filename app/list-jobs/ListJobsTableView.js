export default class ListJobsViewTable {
	constructor(jobList) {
		this._jobListViewMarkup = `
		<table class="list-jobs__table">
			<thead>
				<tr class="job-list__job-attributes">
					<th>State</th>
					<th>Job ID Number</th>
					<th>Job Name</th>
					<th>HPC Cluster</th>
					<th>Requested Time</th>
					<th>Requested Memory</th>
					<th>Elapsed Time</th>
				</tr>
			</thead>
			<tbody>
				${jobList.length == 0 ? `<tr><td colspan="7">There are no jobs currently running.</td></tr>`: ``}
				${jobList.map(job => 
					`<tr>
						<td class="${job.state == "R" ? `job-running` : 'job-queued'}">${job.getState()}</td>
						<td>${job.jobIDNumber}</td>
						<td>${job.jobName}</td>
						<td>${job.HPCCluster}</td>
						<td>${job.requestedTime}</td>
						<td>${job.requestedMemory}</td>
						<td>${job.elapsedTime}</td>
					</tr>`
				).join('')}
			</tbody>
		</table>`;
	}

	getJobListView()
	{
		return this._jobListViewMarkup;
	}
}
