module.exports = function(grunt) {
  grunt.registerTask('test:js', [
    'copy:dev',
    'jshint',
    'jscs',
    'jasmine_node:app'
  ]);

  grunt.registerTask('test', [
    'test:js'
  ]);
};
