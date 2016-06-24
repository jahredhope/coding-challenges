// https://www.hackerrank.com/challenges/fibonacci-modified

function processData(input) {
    var options = input.split(' ');
    var firstTerm = options[0];
    var secondTerm = options[1];
    var termToReach = options[2];
    return 'asdasd';
    //Enter your code here
}


var _inputs = [
  `0 1 5`
];
var _outputs = [
  `5`
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
