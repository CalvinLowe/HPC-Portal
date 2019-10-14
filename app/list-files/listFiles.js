import FileModel from './FileModel.js';
import ListFilesTableView from './ListFilesTableView.js';
import requestAccessToken from '../RequestAPI/RequestAPI.js';

let defaultFolderPath = `/home/s4178182`; //TODO:
let fileNavigationStack = [defaultFolderPath];

document.onload = displayFileList();

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
	const filesJSON = await requestAccessToken.requestFiles(folderPath).catch(error => {console.log(error);});
	
	if (filesJSON) {
		 fileNavigationStack.push(folderPath);
		 let fileList = [];
	
		 filesJSON.forEach(function(item, index, array) {
			 let file = new FileModel(item.owner, item.modd, item.size, item.modh, item.name, item.permission, item.links, item.group, folderPath);
			 fileList.push(file);
		 });
			 
		 let listFilesContainer = document.getElementById("listFilesContainer");
		 let previousPath = getPreviousPath();
	 
		 let fileView = new ListFilesTableView(fileList, folderPath, previousPath);
		 listFilesContainer.innerHTML = fileView.getFileListView();

		 let listFilesPage = document.querySelector('.page-list-files');
		 listFilesPage.addEventListener('click', handleFolderPathClick, true);
	} 
}