displayFileList()
	.catch(error => {
		console.log(error);
	})

// Token expires every five minutes
async function getAccessToken() {
	const response = await fetch('https://hpcportal.rcc.uq.edu.au/client/api/access_token');
	const data = await response.json();
	return data.access_token;
}

async function getFileList() {
	const accessToken = await getAccessToken()
		.catch(error => {
			console.log(error);
		});
	const url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/listfolderbase64?folderpath=__based64_url__&access_token=${accessToken}`;
	// TODO: folder path
	const response = await fetch(url);
	const data = await response.json();
	console.log(data.commandResult);
	return data.commandResult;
}

async function displayFileList() {
	console.log("Display file list called!");
	let accountGroupsContainer = document.getElementById("listFilesContainer");
	const fileList = await getFileList()
		.catch(error => {
			console.log(error);
		});
	fileList.forEach(function(item, index, array) {
		console.log("Heres the item you asked for: ");
		console.log(item.name);
		console.log(item.owner);
		console.log(item.modd); //modified day
		console.log(item.modh); //modified hour 
		console.log(item.modm); //modified month
		console.log(item.permission);
		console.log(item.group);

		let tableRow = document.createElement("tr");
		let nameTableCell = document.createElement("td");
		let ownerTableCell = document.createElement("td");
		let modifiedDayTableCell = document.createElement("td");
		let modifiedHourTableCell = document.createElement("td");
		let modifiedMonthTableCell = document.createElement("td");
		let permissionsTableCell = document.createElement("td");
		let groupTableCell = document.createElement("td");
			

		//let groupElement = document.createElement("option");
		//groupElement.textContent = item.group;
		//groupElement.id = item.group;
		//groupElement.value = item.group;
		//accountGroupsContainer.appendChild(groupElement);
	});
}