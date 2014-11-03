/**
 * Log Settings
 *
 * Sol users Winston for logging
 *
 * https://github.com/flatiron/winston
 */

module.exports = {

  /**
   * Default logging level. Valid options include
   *
   * silly, debug, verbose, info, warn, error
   *
   * @type {String}
   */
  level: 'info',

  /**
   * Winston Transports
   *
   * @type {Array}
   */
  transports: [

    /**
     * Console Transport
     */
    {
      transport: 'Console',
      enabled: true,
      options: {
        level: 'debug',
        colorize: true,
        timestamp: false
      }
    },

    /**
     * File Transport
     */
    {
      transport: 'File',
      enabled: true,
      options: {
        level: 'info',
        colorize: false,
        timestamp: true,
        filename: './logs/sol.log',
        maxsize: 1048576, // 1Mb
        maxFiles: 10
      }
    }
  ]

};
