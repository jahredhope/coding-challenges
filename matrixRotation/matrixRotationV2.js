// https://www.hackerrank.com/challenges/matrix-rotation-algo
var startTime = new Date().getTime();
var lastTime = startTime;

var countMovedPositions = 0;


function markTime(event) {
  var nowTime = (new Date()).getTime();
  console.log((startTime - nowTime) + ' (+' + (lastTime - nowTime) + ')', event);
  lastTime = nowTime;
}

function processData(input) {
  markTime('Start Process Data');
  var lines = input.split('\n');
  var config = lines.shift().split(' ');
  var rows = parseInt(config[0]);
  var cols = parseInt(config[1]);
  var rotations = parseInt(config[2]);

  var grid = lines.join(' ').split(/\s+/);


  var positionArray = createPositionArrays(5, 5);
  positionArray = rotateArrays(positionArray, 3);

  console.log('cols', cols);
  console.log('rows', rows);
  console.log('positionArray');
  console.log(positionArray);


  // var newGrid = JSON.parse(JSON.stringify(grid));
  // for(var i = 0; i < grid.length; i++) {
  //   var newPosition = i + 1;
  //   var value = grid[i];
  //   for(var rotationIndex = 0; rotationIndex < rotations; rotationIndex++) {
  //     newPosition = getNewPosition(rows, cols, newPosition);
  //   }
  //   newGrid[newPosition - 1] = value
  // }
  // printGrid(rows, cols, newGrid);
}

function rotateArrays(arrays, inputRotations) {
  var rotations = arrays.length % inputRotations;
  for (var i = 0; i < arrays.length; i++) {
    console.log('arraysi', arrays[i]);
    for (var rotation = 0; rotation < rotations; rotation++) {
      arrays[i].push(arrays[i].shift());
    }
  }
  return arrays;
}

function printGridByPosition(grid, postitionArray) {
  for (var i = 0; i < grid.length)
    grid[positionArray]
}

function createPositionArrays(cols, rows) {
  var positionArrays = [];
  var totalRings = Math.floor((Math.min(cols, rows) / 2));
  for (var ring = 0; ring < totalRings; ring++) {
    var curArray = [];

    var topLeft = (cols * ring) + ring + 1;
    var topRight = topLeft + (cols - (2 * ring)) - 1;
    var bottomRight = topRight + ((rows - (2 * ring) - 1) * cols);
    var bottomLeft = bottomRight - (cols - (2 * ring) - 1);

    var i = topLeft;

    for (; i < topRight; i++) {
      curArray.push(i);
    }
    for (; i < bottomRight; i += cols) {
      curArray.push(i);
    }
    for (; i > bottomLeft; i--) {
      curArray.push(i);
    }
    for (; i > topLeft; i -= cols) {
      curArray.push(i);
    }
    // positionArrays.push({ring: ring, pos: curArray});
    positionArrays.push(curArray);
  }
  return positionArrays;
}

function printGrid(rows, cols, grid) {
  var r = grid
    .reduce(function(display, value, index) {
      if (index % cols === cols - 1) {
        return display + value + '\n';
      }
      return display + value + ' ';
    }, '').trim();
  console.log(r);
}

function getNewPosition(totalRows, totalCols, index) {
  var col = ((index - 1) % (totalCols));
  var row = Math.floor((index - 1) / totalCols);

  // Top
  if (col > row && col < totalCols - row) {
    return index - 1;
  }

  // Left
  if (row >= col && row < totalRows - col - 1) {
    return index + totalCols
  }

  // Bottom
  if (col >= (totalCols - 1) - row && col < (totalCols - 1) - ((totalRows - 1) - row)) {
    return index + 1;
  }

  // Right
  if (row >= (totalCols) - col && row < totalRows - ((totalCols - 1) - col)) {
    return index - totalCols;
  }
  return index;
}

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
var _input = `4 4 1
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16`;
// process.stdin.on("data", function (input) {
//     _input += input;
// });

// process.stdin.on("end", function () {
processData(_input);
// });
