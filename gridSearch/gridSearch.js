// process.stdin.resume();
// process.stdin.setEncoding('ascii');
// process.stdout.write('\033[2J');
// process.stdout.write('\033[0f');
console.log("INIT");

var input_stdin = `1
5 15
111111111111111
111111111111111
111111011111111
111111111111111
111111111111111
3 5
11111
11111
11110`;
var input_stdin_array = "";
var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
input_stdin_array = input_stdin.split("\n");
main();
// });

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

// Returns array of all indices
function allIndexOf(subString, fullString) {
  var indices = [];
  var lastPosition = fullString.indexOf(subString, lastPosition);
  while(lastPosition !== -1) {
    indices.push(lastPosition);
    lastPosition = fullString.indexOf(subString, lastPosition + 1);
  }
  return indices;
}

function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var R_temp = readLine().split(' ');
    var R = parseInt(R_temp[0]);
    var C = parseInt(R_temp[1]);
    var G = [];
    for (var G_i = 0; G_i < R; G_i++) {
      G[G_i] = readLine().replace(/\s/g,'');
    }
    var r_temp = readLine().split(' ');
    var r = parseInt(r_temp[0]);
    var c = parseInt(r_temp[1]);
    var P = [];
    for (var P_i = 0; P_i < r; P_i++) {
      P[P_i] = readLine().replace(/\s/g,'');
    }

    var found = false;
    for (var a1 = 0; !found && a1 < G.length - P.length + 1; a1++) {
      var positions = allIndexOf(P[0], G[a1]);
      if (positions.length === 0) {
        continue;
      }
      for(var p0 = 0; !found && p0 < positions.length; p0++) {
        for (var a2 = 0; !found && a1 + a2 < G.length && a2 < P.length; a2++) {
          if(!(G[a1 + a2].substr(positions[p0], P[a2].length) === P[a2])) {
            break;
          }
          if(a2 + 1 === P.length) {
            found = true;
          }
        }
      }
    }
    console.log(found ? "YES" : "NO");
  }
}
