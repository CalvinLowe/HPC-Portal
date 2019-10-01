import FileModel from './FileModel.js';
import ListFileTableView from './ListFileTableView.js';
import User from '../user/User.js';

let fileNavigationStack = [];

document.onload = displayFileList()
	.catch(error => {
		console.log(error);
	});

function getCurrentPath() {
	return fileNavigationStack[fileNavigationStack.length - 1];
}

function handleFolderPathClick() {
	if(event.target && event.target.id == 'navigableDirectory') {
		displayFileList(event.target.dataset.directoryPath);
	}
}
// /home/s4178182 - use absolute file paths
async function displayFileList(folderName) {
	let nextPath;
	let currentPath = getCurrentPath();

	if (currentPath) {
		nextPath = currentPath + "/" + folderName;
	} else {
		nextPath = folderName;
	}

	const filesJSON = await User.requestFiles(nextPath)
	.catch(error => {
		console.log(error);
	});
	
	if (filesJSON) {
		if(!nextPath) {
			nextPath = "";
		}
	 	fileNavigationStack.push(nextPath);
	} 

	let fileList = [];
	
	filesJSON.forEach(function(item, index, array) {
		let file = new FileModel(item.owner, item.modd, item.size, item.modh, item.name, item.permission, item.links, item.group, nextPath);
		fileList.push(file);
	});
		
	let listFilesContainer = document.getElementById("listFilesContainer");
	let fileView = new ListFileTableView(fileList, currentPath);
	listFilesContainer.innerHTML = fileView.getFileListView();
	listFilesContainer.addEventListener('click', handleFolderPathClick, true);
	//let backButton = document.getElementById("backButton");
	//backButton.addEventListener('click', back, true);
}

// function back() {
// 	console.log("back clicked");
// 	let navigateBack = fileNavigationStack.pop();
// 	console.log(navigateBack);
// 	displayFileList(navigateBack);

// }