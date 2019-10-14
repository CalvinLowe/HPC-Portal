export default class FileModel {
	constructor(jobID, jobIDNumber, requestedTime, sessionID, requestedMemory, state, nds, elapsedTime, tsk, queue,  jobName,  userName) {
		this._jobID = jobID;
		this._jobIDNumber = jobIDNumber;
		this._requestedTime = requestedTime;
		this._sessionID = sessionID;
		this._requestedMemory = requestedMemory;
		this._state = state;
		this._nds = nds;
		this._elapsedTime = elapsedTime;
		this._tsk = tsk;
		this._queue = queue;
		this._jobName = jobName;
		this._userName = userName;
	}

	//#region default getters
	get jobID() { return this._jobID; }
	get jobIDNumber() { return this._jobIDNumber; }
	get requestedTime() { return this._requestedTime; }
	get sessionID() { return this._sessionID; }
	get requestedMemory() { return this._requestedMemory; }
	get state() { return this._state; }
	get nds() { return this._nds; }
	get elapsedTime() { return this._elapsedTime; }
	get tsk() { return this._tsk; }
	get queue() { return this._queue; }
	get jobName() { return this._jobName; }
	get userName() { return this._userName; }
	//#endregion

	get HPCCluster() {
		if (this._jobID.includes("awonmgr2")) {
			return "Awoonga";
		} else if (this._jobID.includes("tinmgr2")) {
			return "Tinaroo";
		} else if (this._jobID.includes("flashmgr2")) {
			return "FlashLite";
		}
	}

	getState() {
		if (this.state == "R") {
			return "Running";
		} else if (this.state == "Q") {
			return "Queued";
		} else {
			return "Unknown";
		}
	}
}