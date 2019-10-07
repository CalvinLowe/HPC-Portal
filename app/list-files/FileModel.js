export default class FileModel {
	constructor(owner, modifiedDate, size, modifiedTimeOrYear, name, permission, links, group, parent) {
		this._owner = owner;
		this._modifiedDate = modifiedDate;
		this._size = size;
		this._modifiedTimeOrYear = modifiedTimeOrYear;
		this._name = name;
		this._permission = permission;
		this._links = links;
		this._group = group;
		this._parent = parent;
	}

	//#region default getters
	get owner() { return this._owner; }
	get modifiedDate() { return this._modifiedDate; }
	get size() { return this._size; }
	get modifieidTimeOrYear() { return this._modifiedTimeOrYear; }
	get name() { return this._name; }
	get permission() { return this._permission; }
	get links() { return this._links; }
	get group() { return this._group; }
	get parent() { return this._parent; }
	//#endregion

	get type() {
		let typeIdentifier = this.permission[0];
		if (typeIdentifier == 'l') {
			return "symlink";
		} else if (typeIdentifier == 'd') {
			return "directory";
		} else if(typeIdentifier == '-') {
			return "file";
		}
	}

	get extension() {
		// calculated from name
	}

	get path() {
		return this.parent + "/" + this.name;
	}

	IsDirectory() {
		return this.type == "directory";
	}

	IsFile() {
		return this.type == "file";
	}

	IsSymlink() {
		return this.type == "symlink";
	}

	HasChildren() {
		return this.links > 1;
	}
}