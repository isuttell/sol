/**
 * Compress CSS
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {

    grunt.config.set('cssmin', {
        build: {
            files: [{
                expand: true,
                cwd: '.tmp/public/css/',
                src: ['*.css'],
                dest: 'www/css/',
                ext: '.min.css'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');
};
