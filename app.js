/**
 * app.js
 *
 * To start the server, run: `node app.js`.
 *
 */

/**
 * Ensure we're in the project directory, so relative paths work as expected
 */
process.chdir(__dirname);

/**
 * Load Sol
 *
 * @type    {Object}
 */
var Sol = require('sol-core');

/**
 * Run Sol instance
 */
Sol.run();
