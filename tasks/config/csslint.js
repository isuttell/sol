/**
 * Lint CSS
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Lint CSS Files
 *
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-csslint
 */
module.exports = function(grunt) {

    grunt.config.set('csslint', {
        options:{
            csslintrc: '.csslintrc'
        },
        strict: {
            src: ['.tmp/public/css/**/*.css']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-csslint');
};
