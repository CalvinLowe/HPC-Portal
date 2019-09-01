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

async function getFileList(folderPath = "") {
	console.log("File path in getFileList was: ", folderPath);
	const accessToken = await getAccessToken()
		.catch(error => {
			console.log(error);
		});
	let folderPathBase64 = window.btoa(folderPath);
	const url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/listfolderbase64?folderpath=${folderPathBase64}&access_token=${accessToken}`;
	const response = await fetch(url);
	const data = await response.json();
	console.log(data.commandResult);
	return data.commandResult;
}

function handleFolderPathClick(event) {
	console.log("handleFolderPathClick called!");
	console.log(event);
	let folderPath = event.target.dataset.filePath;
	console.log(folderPath);
	displayFileList(folderPath);
}

async function displayFileList(folderPath = "") {
	let accountGroupsContainer = document.getElementById("listFilesContainer");
	const fileList = await getFileList(folderPath)
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
		
		let nameTableCellLink = document.createElement("a");
		nameTableCellLink.addEventListener("click", handleFolderPathClick);
		nameTableCellLink.dataset.filePath = file.name;
		nameTableCellLink.textContent = file.name;
		nameTableCell.appendChild(nameTableCellLink);

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