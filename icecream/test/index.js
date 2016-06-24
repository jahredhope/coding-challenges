var icecream = require('../icecream.js');
var getIcecreams = icecream.getIcecreams;

var expect = require('chai').expect;

describe('icecream', function() {
  describe('getIcecreams', function () {
    it('Test case 1', function() {
      var actual = getIcecreams(5, [1, 4, 5, 3, 2]);
      var expected = [4, 1];
        expect(expected).to.equal(actual);
    });

  });
});
