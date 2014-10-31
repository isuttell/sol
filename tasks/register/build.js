module.exports = function (grunt) {
	grunt.registerTask('build', [
		'compileAssets',
		'clean:build',
        'cssmin:build',
		'copy:build'
	]);
};
