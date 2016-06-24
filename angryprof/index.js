// https://www.hackerrank.com/challenges/angry-professor
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });
//
// process.stdin.on("end", function () {
//    processData(_input);
// });
//
// function main() {
//     var t = parseInt(readLine());
//     for(var a0 = 0; a0 < t; a0++){
//         var n_temp = readLine().split(' ');
//         var n = parseInt(n_temp[0]);
//         var k = parseInt(n_temp[1]);
//         a = readLine().split(' ');
//         a = a.map(Number);
//     }
//
// }

function processData(input) {
  var lines = input.replace('\r', '').split('\n');
  var count = 0;
  var t = parseInt(lines[count++]);
  for (var a0 = 0; a0 < t; a0++) {
    console.log(lines, count);
    var n_temp = lines[count++].split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var a = lines[count++].split(' ');
    a = a.map(Number);

    console.log(a, n, k);
  }
}

var _input = `2
4 3
-1 -3 4 2
4 2
0 -1 2 1`;
processData(_input);
