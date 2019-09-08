import FileModel from './FileModel.js';
import ListFileView from './ListFileView.js';

displayFileList()
	.catch(error => {
		console.log(error);
	});

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

function handleFolderPathClick() {
	if(event.target && event.target.id == 'navigableDirectory') {
		console.log("handleFolderPathClick called!");
		console.log("Event: ", event);
		console.log("Event target: ", event.target);
		console.log("Event target dataset: ", event.target.dataset.directoryPath);
		displayFileList(event.target.dataset.directoryPath);
	}
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
		
	let listFilesContainer = document.getElementById("listFilesContainer");
	let fileView = new ListFileView(fileList);
	listFilesContainer.innerHTML = fileView.getFileListView();
	listFilesContainer.addEventListener('click', handleFolderPathClick, true);
	// listFilesContainer.addEventListener('click', function(event) {
	// 	console.log("Clicked");
	// 	console.log(event);
	// 	if (event.target && event.target.id == 'navigableDirectory') {
	// 		console.log("Event: " + event);
	// 		console.log("Event target: " + event.target);
	// 		console.log("Event target dataset: " + event.target.dataset);
	// 	}
	// });
}