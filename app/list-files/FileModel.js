class FileModel {
	constructor(name, size, owner, modh, modd,  modm, permissions, links, group){
		this._name = name;
		this._size = size;
		this._owner = owner;
		this._lastModified = modified(modh, modd, modm); // TODO: create date
		this._permissions = permissions;
		this._type = type(persmissions); // Extract type (folder, link, file)
		// TODO: this._fileType extract from .exe or whatever
		// TODO: this._filePath decide if I want it to be separate to the name..
		this._links = links;
		this._group = group
	}

	

}