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

async function requestFiles(folderPath = "") {
	const accessToken = await getAccessToken()
		.catch(error => {
			console.log(error);
		});
	let folderPathBase64 = window.btoa(folderPath);
	const url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/listfolderbase64?folderpath=${folderPathBase64}&access_token=${accessToken}`;
	const response = await fetch(url);
	const data = await response.json();
	return data.commandResult;
}

function handleFolderPathClick(event) {
	console.log("handleFolderPathClick called!");
	console.log(event);
	let folderPath = event.target.dataset.filePath;
	displayFileList(folderPath);
}

async function displayFileList(folderPath = "") {
	const filesRequest = await requestFiles(folderPath)
	.catch(error => {
		console.log(error);
	});
	
	let fileList = [];
	
	filesRequest.forEach(function(item, index, array) {
		let file = new FileModel(
			item.owner,
			item.modd,
			item.size,
			item.modh,
			item.name,
			item.permission,
			item.links,
			item.group
		);
		fileList.push(file);
	});
		
	let fileView = new fileView(fileList);

	let listFilesContainer = document.getElementById("listFilesContainer");
	listFilesContainer.appendChild(fileView.getFilesTable());
}