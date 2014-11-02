module.exports = function(grunt) {
  grunt.registerTask('test', [
    'copy:dev',
    'jshint',
    'jscs'
  ]);
};
