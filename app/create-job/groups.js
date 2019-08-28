// Token expires every five minutes

let groups;

displayGroups();

function displayGroups() {
	Promise.resolve(getGroups());
	//interval = window.setInterval(getGroups, 1000);
	console.log(groups.length);
}

async function getGroups() {
	let accessToken = await accessTokenRequest();
	let url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/getprojects?access_token=${accessToken}`;
	try {
		let response = await fetch(url);
		let data = await response.json();
		if (data !== null) {
			groups = data.commandResult;
		}
	} catch(error) {
		console.log(error);
	}
}

// TODO: move to user object
async function accessTokenRequest() {
	try {
		let response = await fetch('https://hpcportal.rcc.uq.edu.au/client/api/access_token');
		let data = await response.json();
		if (data !== null) {
			return data.access_token;
		}
	} catch(error) {
		console.error(error);
	}

}