import CreateJobModel from './model.js';
import CreateJobView from './view.js';
import CreateJobController from './controller.js';
import {attach} from './helper.js';

/**
 * Inialises the app by creating instances of the Model, View and Controller classes.
 */
function initialiseApp() {
	console.log('Initialising application...');
	/**
	 * @type {Model}
	 */
	const model = new Model();

	/**
	 * @type {View}
	 */
	const view = new View();

	/**
	 * @type {Controller}
	 */
	const controller = new Controller(model, view);
}

// Initialise application on window load... TODO: Should this be on first load only?
attach(window, 'load', initialiseApp);

// TODO: check if logged in
// TODO: if logged in and page is equal to job creation create the job modles, views and controllers.