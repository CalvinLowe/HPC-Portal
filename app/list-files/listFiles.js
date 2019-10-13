import FileModel from './FileModel.js';
import ListFilesTableView from './ListFilesTableView.js';
import User from '../user/User.js';

// let defaultFolderPath = `/home/${User.username}`; TODO:
let defaultFolderPath = `/home/s4178182`;
let fileNavigationStack = [defaultFolderPath];

document.onload = displayFileList()
	.catch(error => {
		console.log(error);
	});

function getCurrentPath() {
	return fileNavigationStack[fileNavigationStack.length - 1];
}

function getPreviousPath() {
	if (fileNavigationStack.length > 1) {
		return fileNavigationStack[fileNavigationStack.length - 2];
	} else {
		return defaultFolderPath;
	}
}

function handleFolderPathClick() {
	if(event.target && event.target.id == 'navigableDirectory') {
		displayFileList(event.target.dataset.directoryPath);
	}
}

async function displayFileList(folderPath = defaultFolderPath) {

	const filesJSON = await User.requestFiles(folderPath)
	.catch(error => {
		console.log(error);
	});
	
	if (filesJSON) {
	 	fileNavigationStack.push(folderPath);
	} 

	let fileList = [];
	
	filesJSON.forEach(function(item, index, array) {
		let file = new FileModel(item.owner, item.modd, item.size, item.modh, item.name, item.permission, item.links, item.group, folderPath);
		fileList.push(file);
	});
		
	let listFilesContainer = document.getElementById("listFilesContainer");
	let previousPath = getPreviousPath();
	console.log(previousPath);
	let fileView = new ListFilesTableView(fileList, folderPath, previousPath);
	listFilesContainer.innerHTML = fileView.getFileListView();
	listFilesContainer.addEventListener('click', handleFolderPathClick, true);
}