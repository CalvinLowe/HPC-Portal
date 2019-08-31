export default class FileModel {
	constructor(name, size, owner, modh, modd, modm, permissions, links, group) {
		this._name = name;
		this._size = size;
		this._owner = owner;
		this._modifiedHour = modh;
		this._modifiedDay = modd;
		this._modifiedMonth = modm;
		this._permissions = permissions;
		this._links = links;
		this._group = group;
	}

	//#region getters
	get name() {
		return this._name;
	}

	get size() {
		return this._size;
	}

	get owner() {
		return this._owner;
	}

	get permissions() {
		return this._permissions;
	}

	get links() {
		return this._links;
	}

	get group() {
		return this._group;
	}

	get lastModified() {
		return "Placeholder";
		// TODO: 
		// return some combination of modifiedHour, modifiedDay, modifiedMonth
	}

	get type() {
		// TODO:
		// extract link, folder, file calculated from permissions
	}

	get fileExtension() {
		// calculated from name
	}

	get filePath() {
		// TODO:
		// calculated from name..
	}
	//#endregion
}