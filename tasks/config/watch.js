/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

  grunt.config.set('watch', {
    api: {

      // API files to watch:
      files: ['api/**/*', "config/**/*.js"],

      // When api changes run tests
      tasks: ['jshint:api', 'jscs:api']
    },

    assets: {
      // Assets to watch:
      files: ['assets/**/*', '!assets/css/**/*.scss'],

      // When assets are changed:
      tasks: ['syncAssets']
    },

    scss: {
      // SCSS files to watch
      files: ['assets/css/**/*.scss'],

      // When assets are changed:
      tasks: ['compass:dev', 'csslint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
};
