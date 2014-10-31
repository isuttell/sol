/**
 * ExamplesController
 */

module.exports = function(sol) {
  return {
    index: function(req, res) {
      res.render('example', {
        sol: sol
      });
    }
  };
};
