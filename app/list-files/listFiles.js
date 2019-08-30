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

// TODO: what to do if token expired? how to check..
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

	let tableBody = document.getElementById("files");	
	fileList.forEach(function(item, index, array) {
		console.log("Day: ", item.modd);
		console.log("Hour: ", item.modh); //modified hour 
		console.log("Month: ", item.modm); //modified month

		let nameTableCell = document.createElement("td");
		let ownerTableCell = document.createElement("td");
		//let modifiedDayTableCell = document.createElement("td");
		//let modifiedHourTableCell = document.createElement("td");
		//let modifiedMonthTableCell = document.createElement("td");
		let modifiedDateTableCell = document.createElement("td");
		let permissionsTableCell = document.createElement("td");
		let groupTableCell = document.createElement("td");
		
		nameTableCell.textContent = item.name;
		ownerTableCell.textContent = item.owner;
		modifiedDateTableCell.textContent = "placeholder";
		permissionsTableCell.textContent = item.permission;
		groupTableCell.textContent = item.group;
		
		let tableRow = document.createElement("tr");
		
		tableRow.appendChild(nameTableCell);
		tableRow.appendChild(ownerTableCell);
		tableRow.appendChild(modifiedDateTableCell);
		tableRow.appendChild(groupTableCell);
		tableRow.appendChild(permissionsTableCell);

		tableBody.appendChild(tableRow);

		// TODO: create a file object
	});
}