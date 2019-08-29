displayGroups()
	.catch(error => {
		console.log(error);
	})

// Token expires every five minutes
async function getAccessToken() {
	const response = await fetch('https://hpcportal.rcc.uq.edu.au/client/api/access_token');
	const data = await response.json();
	return data.access_token;
}

async function getGroups() {
	const accessToken = await getAccessToken()
		.catch(error => {
			console.log(error);
		});
	const url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/getprojects?access_token=${accessToken}`;
	const response = await fetch(url);
	const data = await response.json();
	return data.commandResult;
}

async function displayGroups() {
	console.log("Display groups called!");
	let accountGroupsContainer = document.getElementById("accountGroups");
	const groups = await getGroups()
		.catch(error => {
			console.log(error);
		});
	groups.forEach(function(item, index, array) {
		let groupElement = document.createElement("option");
		groupElement.textContent = item.group;
		groupElement.id = item.group;
		groupElement.value = item.group;
		accountGroupsContainer.appendChild(groupElement);
	});
}