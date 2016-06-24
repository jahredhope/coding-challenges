var assert = require('assert');
var fs = require('fs');

var _maximumSubArray = require('../maximumSubArray');
var MaxSubArray = _maximumSubArray.MaxSubArray;

describe('maximumSubArray', function() {
  describe('MaxSubArray', function () {
    it('should give the correct output for input 1', function () {
      var input = ['1','1','1'];
      var expected = '3 3';
      var actual = MaxSubArray(input);
      assert.equal(actual, expected);
    });
  });
});
