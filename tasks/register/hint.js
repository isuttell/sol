module.exports = function(grunt) {
  grunt.registerTask('hint', [
    'compileAssets',
    'csslint',
    'jshint',
    'jscs'
  ]);
};
