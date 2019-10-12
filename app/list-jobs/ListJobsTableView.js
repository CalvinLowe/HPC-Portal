export default class ListJobsViewTable {
	constructor(jobList) {
		this._jobListViewMarkup = `
		<table>
			<thead>
				<tr class="job-list__job-attributes">
					<th>Job ID</th>
					<th>Job ID Number</th>
					<th>Requested Time</th>
					<th>Session ID</th>
					<th>Requested Memory</th>
					<th>State</th>
					<th>NDS</th>
					<th>Elapsed Time</th>
					<th>TSK</th>
					<th>Queue</th>
					<th>Job Name</th>
					<th>Username</th>
				</tr>
			</thead>
			<tbody>
				${jobList.map(job => 
					`<tr>
						<td>${job.jobID}</td>
						<td>${job.jobIDNumber}</td>
						<td>${job.requestedTime}</td>
						<td>${job.sessionID}</td>
						<td>${job.requestedMemory}</td>
						<td>${job.state}</td>
						<td>${job.NDS}</td>
						<td>${job.elapsedTime}</td>
						<td>${job.TSK}</td>
						<td>${job.queue}</td>
						<td>${job.jobName}</td>
						<td>${job.userName}</td>
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
