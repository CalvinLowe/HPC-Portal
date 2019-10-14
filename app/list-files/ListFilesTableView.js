export default class ListFilesViewTable {
	constructor(fileList, currentPath, previousPath) {
		this._fileListViewMarkup =
		`<table class="list-files__table">
			<thead>
				<tr>
					<th class="list-files__table__heading list-files__table__heading--${currentPath.split('/')[1].toLowerCase()}" colspan="5">${currentPath.split('/')[1]}</th>
				</tr>
				<tr>
					<th id="currentDirectory" colspan="5">
						Current directory: ${currentPath}
					</th>
				</tr>
				<tr>
					<!--<th colspan="5">
						Return to previous directory: <a id="navigableDirectory" data-directory-path=${previousPath}>${previousPath}</a>
					</th>-->
				</tr>
				
				<tr>
					<th colspan="5">
						<a href="/create-job?workDirectory=${currentPath}">Submit job from current directory</a>
					</th>
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
							${file.IsDirectory() ? `<i class="far fa-folder"></i>` : ''}
							${file.IsFile() ? `<i class="far fa-file"></i>` : ''}
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
