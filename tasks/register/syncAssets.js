module.exports = function (grunt) {
	grunt.registerTask('syncAssets', [
		'compass:dev',
		'copy:dev'
	]);
};
