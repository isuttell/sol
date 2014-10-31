/**
 * IndexController
 *
 * Controls base routes
 */

module.exports = {
    index: function (req, res) {
        return res.send("Hi there!");
    },
    projects: function (req, res) {
        return res.send("projects");
    }
};
