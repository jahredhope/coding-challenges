// https://www.hackerrank.com/challenges/the-quickest-way-up
var playGameModule = require('./playGame');
var playGame = playGameModule.playGame;

function processData(input) {
    var currentLine = 0;
    var args = input.replace('\r', '').split('\n');
    function readLine() {
        return args[currentLine++];
    }

    var testcases = readLine();

    for(var testcase = 1; testcase <= testcases; testcase++) {
        console.log('Starting testcase', testcase);
        var ladderPositions = [];
        var snakePositions = [];
        var laddersCount = readLine();
        for(var ladderIndex = 0; ladderIndex < laddersCount; ladderIndex++) {
            ladderPositions.push(readLine().split(' ').map(function(item) {return parseInt(item)}));
        }
        var snakesCount = readLine();
        for(var snakeIndex = 0; snakeIndex < snakesCount; snakeIndex++) {
            snakePositions.push(readLine().split(' ').map(function(item) {return parseInt(item)}));
        }
        var result = playGame(ladderPositions, snakePositions);
        console.log('result', result);
    }
}
var _input = `1
1
3 90
7
99 10
97 20
98 30
96 40
95 50
94 60
93 70
`
var _input2 = `2
3
32 62
42 68
12 98
7
95 13
97 25
93 37
79 27
75 19
49 47
67 17
4
8 52
6 80
26 42
2 72
9
51 19
39 11
37 29
81 3
59 5
79 23
53 7
43 33
77 21 `;
processData(_input);

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
