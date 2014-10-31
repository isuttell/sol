/**
 * Express Router Middleware
 */
function Router(sol) {

  /**
   * Setup Router
   *
   * @type    {Router}
   */
  var router = new require(sol.paths.app + '/load/Router')(sol);

  return router;
}

module.exports = Router;
