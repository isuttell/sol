/**
 * JSCS
 *
 * ---------------------------------------------------------------
 *
 * # default task config
 * Enforce Coding standards
 *
 *
 * For usage docs see:
 *      https://github.com/jscs-dev/grunt-jscs
 */
module.exports = function(grunt) {

  grunt.config.set('jscs', {
    options: {
      config: ".jscsrc"
    },
    api: {
      files: {
        src: ["api/**/*.js", "config/*.js"]
      }
    },
    frontend: {
      files: {
        src: [".tmp/public/js/**/*.js"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-jscs');
};
