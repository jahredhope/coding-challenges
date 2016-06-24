// https://www.hackerrank.com/challenges/fibonacci-modified

function processData(input) {
    var inputs = input.replace('\r', '').split('\n');
    var testCaseCount = inputs.shift();
    var testCases = [];
    var contiguous = 0;
    var noncontiguous = 0;

    inputs.forEach(function(inputLine, index) {
      if((index & 1) === 1) {
        testCases.push(inputLine.split(' ').map(Number));
      }
    });

    return testCases.map(processTestcase).join('\n');
    // return testCases.length;
}

function processTestcase(testcase) {
  var contiguous = 10;
  var noncontiguous;

  noncontiguous = testcase.reduce(function(total, next) {return next > 0 ? total + next : total;},0)

  return contiguous + ' ' + noncontiguous;
}

var _inputs = [
  `2
4
1 2 3 4
6
2 -1 2 3 4 -5`
];
var _outputs = [
  `10 10
10 11`
];
for(var _i = 0; _i < _inputs.length; _i++) {
  var _result = processData(_inputs[_i]);

  console.log({
    success: _result === _outputs[_i],
    input: _inputs[_i],
    output: _outputs[_i],
    result: _result
  });
}
