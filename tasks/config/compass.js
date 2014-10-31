/**
 * Compiles SCSS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only `assets/css/*.scss` are compiled.
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-compass
 */
module.exports = function(grunt) {

  grunt.config.set('compass', {
    options: {
      sassDir: 'assets/css',
      cssDir: '.tmp/public/css',
      relativeAssets: true,
      generatedImagesDir: '.tmp/public/img',
      debugInfo: true,
      trace: true
    },
    dev: {
      outputStyle: 'expanded'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
};
