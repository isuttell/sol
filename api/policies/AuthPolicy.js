/**
 * Check if a user is authenticated
 */

module.exports = function(req, res, next) {
  if (!req.session.authenticated) {
    next();
  } else {
    res.status(403).send('Not Authenticated');
  }
};
