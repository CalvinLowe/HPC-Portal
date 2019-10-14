/**
 * A model for the HPC Portal RequestAPI
 * @author: Calvin Lowe <calvin.lowe@uqconnect.edu.au>
*/
export default class RequestAPI {

	// Token expires every five minutes
	static async requestAccessToken() {
		const response = await fetch('https://hpcportal.rcc.uq.edu.au/client/api/access_token');
		const data = await response.json();
		return data.access_token;
	}

	static async requestFiles(folderPath = "") {
		const accessToken = await RequestAPI.requestAccessToken()
			.catch(error => {
				console.log(error);
			});
		let folderPathBase64 = window.btoa(folderPath);
		const url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/listfolderbase64?folderpath=${folderPathBase64}&access_token=${accessToken}`;
		const response = await fetch(url);
		const data = await response.json();
		return data.commandResult;
	}

	static async requestListActiveJobs() {
		const accessToken = await RequestAPI.requestAccessToken()
			.catch(error => {
				console.log(error);
			});

		const url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/listall?access_token=${accessToken}`;
		const response = await fetch(url);
		const data = await response.json();
		return data.commandResult;
	}

	static async requestUserGroups() {
		const accessToken = await RequestAPI.requestAccessToken()
			.catch(error => {
				console.log(error);
			});
		const url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/getprojects?access_token=${accessToken}`;
		const response = await fetch(url);
		const data = await response.json();

		let groups = []
		data.commandResult.forEach(function(item, index, array) {
			groups.push(item.group);
		});

		return groups;
	}

	static async requestJobSubmission(jobName, workDirectory, pbsScript, machine) {
		const accessToken = await RequestAPI.requestAccessToken()
			.catch(error => {
				console.log(error);
			});

		let b64pbs = window.btoa(pbsScript);

		console.log(jobName);
		console.log(workDirectory);
		console.log(pbsScript);
		console.log(machine);
		console.log(accessToken);

		const url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/submitjob?jobName=${jobName}&workdir=${workDirectory}&pbs=${b64pbs}&machine=${machine}&access_token=${accessToken}`;
		
		const response = await fetch(url);
	}

	static async requestAccessibleLocation() {
		const accessToken = await RequestAPI.requestAccessToken()
			.catch(error => {
				console.log(error);
			});

		const url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/accessiblelocations?access_token=${accessToken}`;
		const response = await fetch(url);
		const data = await response.json();

		let boomarks = []
		data.commandResult.forEach(function(item, index, array) {
			boomarks.push(item.path);
		});

		return boomarks;
	}
}