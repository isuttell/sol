/**
 * RouterFactory setups up routers for Express
 */

/**
 * Dependencies
 */
var express = require('express');
var _ = require('lodash');

// var util = require('../lib/utilities');

/**
 * Construct an Express Router
 *
 * @param  {Sol} sol main app instance
 *
 * @return {express.Router}
 */
function Router(sol) {
  var routes = sol.config.routes;
  var controllers = sol.controllers;

  var router = express.Router();

  for (var route in routes) {
    if (typeof routes[route] === 'string') {
      route = new Route(route, routes[route]);

      router[route.verb](                           // Method
        route.uri,                                  // URI
        controllers[route.controller][route.action] // Controller Function
      );
    }
  }

  return router;
}

module.exports = Router;

/**
 * Parse router and controller information so we can bind to a controller
 *
 * @param    {String}   route        string in the format of 'GET /project'
 * @param    {String}   controller   string in the format 'IndexController.home'
 */
function Route(route, controller) {
  this.route = route;

  controller = controller.split('.');
  this.controller = controller[0];
  this.action = controller[1];

  route = route.split(' ');
  this.uri = route[1];

  this.verb = route[0].toLowerCase();

  if (!this.verb.match(/get|post/i)) {
    this.verb = 'use';
  }
}

/**
 * Export Route so we can test it
 *
 * @type    {Function}
 */
module.exports.Route = Route;
