// https://www.hackerrank.com/challenges/matrix-rotation-algo
var startTime = new Date().getTime();
var lastTime = startTime;

var countMovedPositions = 0;


function markTime(event) {
  var nowTime = (new Date()).getTime();
  debugTrace((nowTime - startTime) + ' (+' + (nowTime - lastTime) + ')', event);
  lastTime = nowTime;
}

function debugTrace(str) {
  console.log(str);
}

function processData(input) {
  // markTime('Start Process Data');
  var lines = input.replace('\r','').split('\n');
  var config = lines.shift().split(' ');

  var rows = parseInt(config[0]);
  var cols = parseInt(config[1]);
  var rotations = parseInt(config[2]);
  // markTime('Finished Parse');

  var grid = lines.join(' ').split(/\s+/);
  // markTime('Made Grid');

  // debugTrace('Matrix ' + rows + 'x' + cols + ' Rotate ' + rotations + ' times');
  var rotatedMatrix = rotateMatrix(rows, cols, rotations, grid);

  // markTime('Rotated Grid. Moved: ' + countMovedPositions);
  console.log(getPrintableGrid(rows, cols, rotatedMatrix));
  // markTime('Done');
}

function rotateMatrix(totalRows, totalCols, rotations, grid) {
  var newGrid = JSON.parse(JSON.stringify(grid));
  for (var i = 0; i < grid.length; i++) {
    var newPosition = i + 1;
    var value = grid[i];
    var ring = getRing(totalRows, totalCols, newPosition) - 1;
    var location = getLocation(totalRows, totalCols, newPosition);
    // value = location.row + '/' + location.col;
    // value = ring;
    var perimeter = (2 * (totalRows - 1 - (ring * 2))) + (2 * (totalCols - 1 - (2 * ring)));
    var rotationsToPerform = rotations % perimeter;
    // debugTrace('perimeter', perimeter, 'saving ', rotations - rotationsToPerform, ' rotations');
    for (var rotationIndex = 0; rotationIndex < rotationsToPerform; rotationIndex++) {
      // countMovedPositions++;
      newPosition = getNewPosition(totalRows, totalCols, newPosition);
    }
    newGrid[newPosition - 1] = value
  }
  return newGrid;
}

function getRing(totalRows, totalCols, index) {
  // Get col and row
  var location = getLocation(totalRows, totalCols, index);
  var row = location.row;
  var col = location.col;

  // If past half way get the value from the last col/row
  if (row > (totalRows / 2)) {
    row = Math.abs(row - totalRows)+1;
  }
  if (col > (totalCols / 2)) {
    col = Math.abs(col - totalCols)+1;
  }
  // debugTrace('col', col, 'row', row, 'ring', Math.min(col, row));
  return Math.min(col, row);
}

function getLocation(totalRows, totalCols, index) {
  return {
    col: ((index-1) % totalCols)+1,
    row: (Math.floor((index-1) / totalCols))+1
  }
}

function getPrintableGrid(totalRows, totalCols, grid) {
  var r = grid
    .reduce(function(display, value, index) {
      if (index % totalCols === totalCols - 1) {
        return display.toString() + value.toString() + '\n';
      }
      return display.toString() + value.toString() + ' ';
    }, '').trim();
  return r;
}

function getNewPosition(totalRows, totalCols, index) {
  var location = getLocation(totalRows, totalCols, index);
  var col = location.col;
  var row = location.row;

  // Top
  if (row < (totalRows-1) / 2 && col > row && col < totalCols - row) {
    return index - 1;
  }

  // Left
  if (col < (totalCols-1) / 2 && row >= col && row < totalRows - col - 1) {
    return index + totalCols
  }

  // Bottom
  if (row > (totalRows-1) / 2 && col >= (totalRows - 1) - row && col < (totalCols - 1) - ((totalRows - 1) - row)) {
    return index + 1;
  }

  // Right
  if (col > (totalCols-1) / 2 &&row >= (totalCols) - col && row < totalRows - ((totalCols - 1) - col)) {
    return index - totalCols;
  }
  return index;
}



function create2DArray(noRows, noCols) {
  var count = 1;
  var arr = [];
  var arrCol = [];
  for (var i = 0; i < noRows; i++) {
    arrCol = [];
    for (var j = 0; j < noCols; j++) {
      arrCol.push(count++);
    }
    arr.push(arrCol.join(' '));
  }
  return arr.join('\n\r');
}

var inputRows = 298;
var inputCols = 297;
var inputRots = 999999999999;
var _input = inputRows + ' ' + inputCols + ' ' + inputRots + '\n\r'  + create2DArray(inputRows, inputCols);

module.exports = {rotateMatrix, getRing, getLocation};
processData(_input);
