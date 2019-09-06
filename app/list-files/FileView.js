export default class FileView {
	constructor(fileList) {

	}

}

<table>
<thead>
	<tr>
		<th id="directory" colspan="5">/home/</tH>
	</tr>
	<tr>
		<th>Name</th>
		<th>Owner</th>
		<th>Last Modified</th>
		<th>Group</th>
		<th>Permissions</th>
	</tr>
</thead>
<tbody id="files">
</tbody>
</table>

let tableBody = document.getElementById("files");	

// TODO: Create a 


		// let nameTableCell = document.createElement("td");
		// let ownerTableCell = document.createElement("td");
		// let modifiedDateTableCell = document.createElement("td");
		// let permissionsTableCell = document.createElement("td");
		// let groupTableCell = document.createElement("td");
		
		// let nameTableCellLink = document.createElement("a");
		// nameTableCellLink.addEventListener("click", handleFolderPathClick);
		// nameTableCellLink.dataset.filePath = file.name;
		// nameTableCellLink.textContent = file.name;
		// nameTableCell.appendChild(nameTableCellLink);

		// ownerTableCell.textContent = file.owner;
		// modifiedDateTableCell.textContent = file.lastModified;
		// permissionsTableCell.textContent = file.permissions;
		// groupTableCell.textContent = file.group;
		
		// let tableRow = document.createElement("tr");
		
		// tableRow.appendChild(nameTableCell);
		// tableRow.appendChild(ownerTableCell);
		// tableRow.appendChild(modifiedDateTableCell);
		// tableRow.appendChild(groupTableCell);
		// tableRow.appendChild(permissionsTableCell);

		// tableBody.appendChild(tableRow);