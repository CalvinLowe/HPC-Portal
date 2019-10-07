export default class ListFileViewTable {
	constructor(fileList, currentPath) {
		this._fileListViewMarkup =
		`<button id="backButton">Back</button>
		<table>
			<thead>
				<tr>
					<th id="currentDirectory" colspan="10">${currentPath}</th>
				</tr>
				<tr class="file-list__file-attributes">
					<th>Name</th>
					<th>Owner</th>
					<th>Last Modified</th>
					<th>File size</th>
					<th>Permission</th>
				</tr>
			</thead>
			<tbody>
				${fileList.map(file => 
					`<tr>
						<td>
							${file.IsDirectory() ? `<i class="fas fa-folder"></i>` : ''}
							${file.IsFile() ? `<i class="fas fa-file"></i>` : ''}
							${file.IsSymlink() ? `<i class="fas fa-link"></i>` : ''}
							${file.IsDirectory() ? `<a id="navigableDirectory" data-directory-path="${file.path}">` : ''}
							${file.name}
							${file.IsDirectory() ? `</a>` : ''}
						</td>
						<td>${file.owner}</td>
						<td>${file.modifiedDate}</td>
						<td>${file.size}</td>
						<td>${file.permission}</td>
					</tr>`
				).join('')}
			</tbody>
		</table>`;
	}

	getFileListView()
	{
		return this._fileListViewMarkup;
	}
}
