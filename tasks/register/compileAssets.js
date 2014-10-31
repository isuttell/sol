module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'compass:dev',
		'copy:dev'
	]);
};
