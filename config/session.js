/**
 * Session Settings
 */

module.exports = {

  /**
   * Encryption key for cookies. Changing this will invalidate any active
   * sessions.
   *
   * @type    {String}
   */
  secret:  '032cfbef008f406d3b356839eaba54ea',

  /**
   * Express
   *
   * @type    {Object}
   */
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  },

  /**
   * Forces session to be saved even when unmodified.
   *
   * https://github.com/expressjs/session
   *
   * @type    {Boolean}
   */
  resave: true,

  /**
   * Forces a session that is "uninitialized" to be saved to the store. A
   * session is uninitialized when it is new but not modified. This is useful
   * for implementing login sessions, reducing server storage usage, or
   * complying with laws that require permission before setting a cookie.
   *
   * https://github.com/expressjs/session
   *
   * @type    {Boolean}
   */
  saveUninitialized: true,

  /**
   * Setup Redis
   *
   * @type    {String}
   */
  adapter: 'redis',

  redis: {
    host: 'localhost',
    port: 6379,
    ttl: 24 * 60 * 60,
    db: 0,
    // pass: '',
    prefix: 'sess:'
  }

};
