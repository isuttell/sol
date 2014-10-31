/**
 * Compiles LESS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/css/mc2.scss` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
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
