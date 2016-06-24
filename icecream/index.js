// https://www.hackerrank.com/challenges/icecream-parlor
// import icecream from 'icecream';
var icecream = require('./icecream');
var getIcecreams = icecream.getIcecreams;

function trace() { // eslint-disable-line no-unused-vars
  console.log.apply(undefined, arguments);
}

function processData(input) {
  trace('start');
  var i = 0;
  var args = input.split(/[\r\f\n]+/);
  i++; //var testcases = args[i++];
  while(i < args.length) {
    trace('start at', i);
    var money = args[i++];
    i++; // var valuesCount = args[i++];
    var values = args[i++].split(' ').map(function(val){return parseInt(val);});
    var result = getIcecreams(money, values);
    console.log(result.reduce(function(a,b){return a+' '+b;}));
  }
  trace('end');
}

var _input = `2
4
5
1 4 5 3 2
4
4
2 2 4 3`;
processData(_input);
