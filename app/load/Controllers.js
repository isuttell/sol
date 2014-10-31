/**
 * Controllers setups up routers for Express
 */

/**
 * External Dependencies
 */
var _ = require('lodash');

/**
 * Internal Dependencies
 */
var util = require('../lib/utilities');

/**
 * Loads any controllers in a directory
 *
 * @param     {Object}    sol    Sol instance
 *
* @return    {Object}
 */
function Controllers(sol) {
  var controllers = util.loadModules(sol.paths.controllers, 'Controller');

  /**
   * Bind sol instance to this context for each action
   */
  for (var name in controllers) {
    if (controllers.hasOwnProperty(name)) {
      for (var action in controllers[name]) {
        if (controllers[name].hasOwnProperty(action) &&
            _.isFunction(controllers[name][action])) {
          controllers[name][action] = _.bind(controllers[name][action], sol);
        }
      }
    }
  }

  return controllers;
}

module.exports = Controllers;
