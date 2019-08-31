import FileModel from './FileModel.js';

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

		let file = new FileModel(item.name, item.size, item.owner, item.modh, item.modd, item.modm, item.permission, item.links, item.group);
		console.log(file);

		// TODO: let fileView = new FileView(FileModel);

		let nameTableCell = document.createElement("td");
		let ownerTableCell = document.createElement("td");
		let modifiedDateTableCell = document.createElement("td");
		let permissionsTableCell = document.createElement("td");
		let groupTableCell = document.createElement("td");
		
		nameTableCell.textContent = file.name;
		ownerTableCell.textContent = file.owner;
		modifiedDateTableCell.textContent = file.lastModified;
		permissionsTableCell.textContent = file.permissions;
		groupTableCell.textContent = file.group;
		
		let tableRow = document.createElement("tr");
		
		tableRow.appendChild(nameTableCell);
		tableRow.appendChild(ownerTableCell);
		tableRow.appendChild(modifiedDateTableCell);
		tableRow.appendChild(groupTableCell);
		tableRow.appendChild(permissionsTableCell);

		tableBody.appendChild(tableRow);
	});
}