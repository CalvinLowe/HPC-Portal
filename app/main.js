// User
import UserModel from './User/UserModel.js';

// Create Job
//import CreateJobModel from './CreateJob/CreateJobModel.js';
//import CreateJobView from './CreateJob/CreateJobview.js';
//import CreateJobController from './CreateJob/CreateJobController.js';

/**
 * Inialises the application. Creates instances of objects.
 */
function setup() {
	console.log('Setting up...');

	const user = new UserModel();
	//user.getSessionInfo();

}


attach(window, 'load', setup);