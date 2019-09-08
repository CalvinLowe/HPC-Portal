export default class ListFileView {
	constructor(fileList) {
		this._fileListViewMarkup =
		`<table>
			<thead>
				<tr>
					<th id="currentDirectory" colspan="10"></th>
				</tr>
				<tr class="file-list__file-attributes">
					<th>Owner</th>
					<th>Modified Date</th>
					<th>Size</th>
					<th>Modified Time Or Year</th>
					<th>Name</th>
					<th>Permission</th>
					<th>Links</th>
					<th>Group</th>
					<th>Parent</th>
					<th>Is Directory?</th>
					<th>Has Children?</th>
				</tr>
			</thead>
			<tbody>
				${fileList.map(file => 
					`<tr>
						<td>${file.owner}</td>
						<td>${file.modifiedDate}</td>
						<td>${file.size}</td>
						<td>${file.modifieidTimeOrYear}</td>
						<td>
							${file.IsDirectory() && file.HasChildren() ? `<a id="navigableDirectory" data-directory-path="${file.name}">` : ''}
							${file.name}
							${file.IsDirectory() && file.HasChildren() ? `</a>` : ''}
						</td>
						<td>${file.permission}</td>
						<td>${file.links}</td>
						<td>${file.group}</td>
						<td>${file.parent}</td>
						<td>${file.IsDirectory()}</td>
						<td>${file.HasChildren()}</td>
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
