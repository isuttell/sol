module.exports = function(config)
{
    config.set(
    {

        basePath: '../',

        files: [
            '.tmp/public/js/**/*.js',
            'test/frontend/helpers/**/*.js',
            'test/frontend/**/*.js'
        ],

        autoWatch: false,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-safari-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-story-reporter',
            'karma-html-reporter'
        ],

        coverageReporter:
        {
            type: 'html',
            dir: 'reports/coverage/'
        },

        htmlReporter: {
            outputDir: 'test/karma/',
            templatePath: __dirname + '/reportTemplate.html'
        },

        reporters: ['story']

    });
};
