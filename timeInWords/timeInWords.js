// https://www.hackerrank.com/challenges/the-time-in-words
// process.stdin.resume();
// process.stdin.setEncoding('ascii');
var numbersAsWords = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
  'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven', 'twenty eight', 'twenty nine'];

var input_stdin = `5
0`;
var input_stdin_array = "";
var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });
//
// process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
// });

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var h = parseInt(readLine());
    var m = parseInt(readLine());
    if(m === 0) {
        console.log(numbersAsWords[h] + ' o\' clock');
    } else {
        console.log([minutesAsWords(
          m > 30 ? -m + 60 : m),
          m > 30 ? 'to' : 'past',
          numbersAsWords[nearestHour(h, m)]
        ].join(' '));
    }


}

// @return the nearest hour, rounding down when 30
function nearestHour(h, m) {
    return m > 30 ? h + 1 : h;
}

// describe the number of minutes in words
function minutesAsWords(m) {
    if(m === 30) {
        return 'half';
    }
    if(m === 15) {
        return 'quarter';
    }
    return numbersAsWords[m] + (m === 1 ? ' minute' : ' minutes');
}
