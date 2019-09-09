import FileModel from './FileModel.js';
import ListFileView from './ListFileView.js';

let fileNavigationStack = [];

document.onload = displayFileList()
	.catch(error => {
		console.log(error);
	});

// TODO: For testing only
async function requestFilesMock(folderPath = "") {
	let folderPathBase64 = window.btoa(folderPath);
	let url = "";

	if (folderPath == "bin") {
		url = `http://hpcportal.local/list-files/test/files1.json`;
	} else if (folderPath == "ansys") {
		url = `http://hpcportal.local/list-files/test/files2.json`;
	} else if (folderPath == "ansys-project") {
		url = `http://hpcportal.local/list-files/test/files3.json`;
	} else if (folderPath == "") {
		url = `http://hpcportal.local/list-files/test/files.json`;
	}

	const response = await fetch(url);
	const data = await response.json();
	return data.commandResult;
}

function handleFolderPathClick() {
	if(event.target && event.target.id == 'navigableDirectory') {
		displayFileList(event.target.dataset.directoryPath);
	}
}

async function displayFileList(folderPath = "") {
	// IF PRODUCTION //
	// const filesJSON = await requestFiles(folderPath)
	// ENDIF PRODUCTION //
	// TODO: for testing only

	const filesJSON = await requestFilesMock(folderPath)
	.catch(error => {
		console.log(error);
	});
	
	// TODO: Only add to the navigation stack if requestFilesJSON succeeded and we are at the /home, /root or whatever we want to call it
	if (folderPath != "" && filesJSON) {
		fileNavigationStack.push(folderPath);
	}

	let fileList = [];
	
	filesJSON.forEach(function(item, index, array) {
		let file = new FileModel(item.owner, item.modd, item.size, item.modh, item.name, item.permission, item.links, item.group );
		fileList.push(file);
	});
		
	let listFilesContainer = document.getElementById("listFilesContainer");
	let fileView = new ListFileView(fileList);
	listFilesContainer.innerHTML = fileView.getFileListView();
	listFilesContainer.addEventListener('click', handleFolderPathClick, true);
}

// Token expires every five minutes
// TODO: move to user object
async function getAccessToken() {
	const response = await fetch('https://hpcportal.rcc.uq.edu.au/client/api/access_token');
	const data = await response.json();
	return data.access_token;
}

// TODO: for production
// TODO: move to user object
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