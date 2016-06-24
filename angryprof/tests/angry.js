var assert = require('assert');

var _angry = require('../angry');
var shouldCancel = _angry.sc;

describe('_angry', function() {
  describe('shouldCancel', function () {
    it('should give the correct output for input 1', function () {
      var students = [-1, -3, 4, 2];
      var threshold = 3;
      var expected = true;
      var actual = shouldCancel(students, threshold);
      assert.equal(actual, expected);
    });
    it('should give the correct output for input 2', function () {
      var students = [0, -1, 2, 1];
      var threshold = 2;
      var expected = false;
      var actual = shouldCancel(students, threshold);
      assert.equal(actual, expected);
    });
    it('should give the correct output for input 3', function () {
      var students = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
      var threshold = 1;
      var expected = false;
      var actual = shouldCancel(students, threshold);
      assert.equal(actual, expected);
    });
    it('should give the correct output for input 4', function () {
      var students = [];
      var threshold = 10;
      var expected = true;
      var actual = shouldCancel(students, threshold);
      assert.equal(actual, expected);
    });
    it('should give the correct output for input 5', function () {
      var students = [1];
      var threshold = 10;
      var expected = true;
      var actual = shouldCancel(students, threshold);
      assert.equal(actual, expected);
    });
    it('should give the correct output for input 5', function () {
      var students = [];
      for (var i = 0; i < 1000; i++) {
        students[i] = i & 1;
      }
      var threshold = 499;
      var expected = false;
      var actual = shouldCancel(students, threshold);
      assert.equal(actual, expected);
    });
    it('should give the correct output for input 6', function () {
      var students = [];
      for (var i = 0; i < 1000; i++) {
        students[i] = i & 1;
      }
      var threshold = 999;
      var expected = true;
      var actual = shouldCancel(students, threshold);
      assert.equal(actual, expected);
    });
  });
});
