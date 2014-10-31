/* global beforeEach, describe, it, expect, inject */

describe('Controllers', function() {
  var Controllers = require('../../app/load/Controllers'),
    mockControllerDir = './test/app/mockControllers',
    mockSol;

  beforeEach(function() {
    // Reset
    mockSol = {
      paths: {
        controllers: mockControllerDir
      }
    };
  });

  it('should be a function and return and object', function() {
    expect(typeof Controllers).toBe('function');
    expect(typeof new Controllers(mockSol)).toBe('object');
  });

  it('should return a object of Controller objects', function() {
    var controllers = new Controllers(mockSol);
    expect(typeof controllers).toBe('object');
    for (var controller in controllers) {
      expect(typeof controllers[controller] === 'object').toBe(true);
    }
  });

  it('should return only read files that end with \'Controller.js\'', function() {
    var controllers = new Controllers(mockSol),
      controllersLength = 0;

    // Count them up
    for (var controller in controllers) {
      if (typeof controllers[controller] === 'object') {
        controllersLength++;
      }
    }
    expect(controllersLength).toBe(1);

  });
});
