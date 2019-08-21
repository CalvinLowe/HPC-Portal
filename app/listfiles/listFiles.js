let container = document.getElementById("listFilesContainer");
let listFilesButton = document.getElementById("listFilesButton");

attach(listFilesButton, 'click', handleListFilesButtonClick);

function handleListFilesButtonClick() {
	getFileData();
}

async function getFileData() {
	let accessToken = await accessTokenRequest();
	let url = `https://hpcportal.rcc.uq.edu.au/hpcbackend/api/execute/listfolderbase64?folderpath=__based64_url__&access_token=${accessToken}`;
	let response = await fetch(url);
	let data = await response.json();
	console.log("listFiles data:", data);
	//return data;
}

async function accessTokenRequest() {
	let response = await fetch('https://hpcportal.rcc.uq.edu.au/client/api/access_token');
	let data = await response.json();
	if (data !== null) {
		return data.access_token;
	}
}