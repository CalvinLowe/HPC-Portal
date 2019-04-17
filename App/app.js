import Model from './model.js';
import View from './view.js';
import Controller from './controller.js';

/**
 * Inialises the app by creating instances of the Model, View and Controller classes.
 */


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

// TODO: Add alias for add event listener to TODO MVC
//const setView = () => controller.setView();

//window.addEventListener('load', setView);
//window.addEventListener('hashchange', setView);