/**
 * Lint JS
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Lint JS Files
 *
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-jshint
 */
module.exports = function(grunt) {

    grunt.config.set('jshint', {
        options: {
            jshintrc: true
        },
        api: {
            options: {
                node: true
            },
            files: {
                src: ['api/**/*.js','config/*.js']
            }
        },
        app: {
            options: {
                node: true
            },
            files: {
                src: ['app.js', 'app/**/*.js']
            }
        },
        frontend: {
            options: {
                browser: true,
                jquery: true
            },
            files: {
                src: ['.tmp/public/js/**/*.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};
