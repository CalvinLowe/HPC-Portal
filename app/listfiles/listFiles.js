let container = document.getElementById("listFilesContainer");
let listFilesButton = document.getElementById("listFilesButton");

attach(listFilesButton, 'click', handleListFilesButtonClick);

function handleListFilesButtonClick() {
	listFiles();
	//console.log(listFiles());
}

function listFiles() {
	//requires access_token
	let accessToken = getAccessToken();
	let url = 'https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/listfolderbase64?folderpath=__based64_url__&access_token={accessToken}'
	let response = await fetch('url');
	let data = await response.json();
	console.log("listFiles data:", data);
	//return data;
}

function getAccessToken() {
	let response = await fetch('https://hpcportal.rcc.uq.edu.au/client/api/access_token');
	let data = await response.json();
	console.log("getAccessToken data:", data);
	//return data;
}