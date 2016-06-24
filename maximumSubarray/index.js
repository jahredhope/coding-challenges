// https://www.hackerrank.com/challenges/maxsubarray
'use strict';
var _maximumSubArray = require('./maximumSubArray');
var MaxSubArray = _maximumSubArray.MaxSubArray;

function processData(input) {
  var args = input.replace('\r','').split('\n');
  var testCaseCount = args.shift();
  for(var testCaseIndex = 0; testCaseIndex < testCaseCount; ++testCaseIndex) {
    var arrLength = args.shift();
    var arr = args.shift().split(' ').map(function(item) {return parseInt(item);});
    var result = MaxSubArray(arr);
    console.log(result);
  }
}
var _input = `3
5
7 -3 -3 2 -3 5 6 7
6
2 -1 2 3 4 -5
3
-1 -1 -1`;
var _input2 = `6
1
1
6
-1 -2 -3 -4 -5 -6
2
1 -2
3
1 2 3
1
-10
6
1 -1 -1 -1 -1 5`;
processData(_input);
