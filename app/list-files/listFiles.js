import FileModel from './FileModel.js';
import ListFileView from './ListFileView.js';
import User from '../user/User.js';

let fileNavigationStack = ["root"];
// TODO: create a fileNavigationStack object with peak() to the prototype

function getCurrentPath() {
	return fileNavigationStack[fileNavigationStack.length - 1];
}

document.onload = displayFileList()
	.catch(error => {
		console.log(error);
	});

function handleFolderPathClick() {
	if(event.target && event.target.id == 'navigableDirectory') {
		displayFileList(getCurrentPath(), event.target.dataset.directoryPath);
	}
}

async function displayFileList(currentPath = getCurrentPath(), folderName) {
	console.log("Current path: ", currentPath);
	console.log("Foldername path: ", folderName);
	
	let nextPath = folderName; // TODO: 

	if (currentPath != "root") {
		nextPath = currentPath + "/" + folderName;
	}

	console.log("Next path: ", nextPath);
	const filesJSON = await User.requestFiles(nextPath)
	.catch(error => {
		console.log(error);
	});
	
	// TODO: Only add to the navigation stack if requestFilesJSON succeeded and we are at the /home, /root or whatever we want to call it
	// if (filesJSON) {
	// 	fileNavigationStack.push(folderPath);
	// }

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