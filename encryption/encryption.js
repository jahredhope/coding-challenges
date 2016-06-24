// https://www.hackerrank.com/challenges/encryption

var input_stdin = "chillout";
var input_stdin_array = "";
var input_currentline = 0;

function run() {
    input_stdin_array = input_stdin.split("\n");
    main();
}

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var s = readLine();
    var result = '';
    var length = s.length;
    var col = Math.ceil(Math.sqrt(length));
    for(var i = 0; i < col; i++) {
      for(var j = 0; j < col; j++) {
        result += s[i + (j * col)] || '';
      }
      result += ' ';
    }
    console.log(result);
}

run();
