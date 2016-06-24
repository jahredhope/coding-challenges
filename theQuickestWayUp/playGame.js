// Takes array of ladders and snakes and returns the quickest solution
function debugTrace() {
  console.log.apply(this, arguments);
}

function playGame(ladderPositions, snakePositions) {
  var currentPositions = [1];
  var roles = [1, 2, 3, 4, 5, 6];
  var jumps = ladderPositions.concat(snakePositions);

  for (var turn = 1; turn < 20; turn++) {
    debugTrace('START TURN', turn);
    addPositions();
    debugTrace('LENGTH', currentPositions.length);
    followJumps();
    debugTrace('LENGTH', currentPositions.length);
    sortCurrentPositions();
    debugTrace('LENGTH', currentPositions.length);
    if (hasWon()) {
      debugTrace('HAS WON', turn);
      return turn;
    }
    debugTrace('LENGTH', currentPositions.length);
    trimPositions();
    debugTrace('LENGTH', currentPositions.length);
  }
  console.log('no solution found');

  function addPositions() {
    var newPositions = [];
    currentPositions.forEach(function(position) {
      roles.forEach(function(role) {
        if (newPositions.indexOf(role + position) === -1) {
          newPositions.push(role + position);
        }
      });
    });
    currentPositions = newPositions;
  }

  function trimPositions() {
    // return;
    currentPositions = currentPositions.filter(function(item, index, arr) {
      if (index === 0) {
        return true;
      }
      var hasLadderInBetween = false;

      hasLadderInBetween = !!jumps.find(function(ladderPosition) {
        return arr[index] <= ladderPosition[0] && ladderPosition[0] <= arr[index - 1];
      });
      if(hasLadderInBetween) {
      }
      return hasLadderInBetween;
    })
  }

  function followJumps() {
    for(var i = 0; i < currentPositions.length; i++) {
      jumps.forEach(function(snakePosition) {
        if(snakePosition[0] === currentPositions[i]) {
          currentPositions[i] = snakePosition[1]
        }
      });
    }
  }
  function hasWon() {
    debugTrace('?WIN', currentPositions);
    return currentPositions.indexOf(100) !== -1;
  }

  function sortCurrentPositions() {
    currentPositions = currentPositions.sort(function(a, b) {
      return b - a;
    });
  }
}

module.exports = {
  playGame
};
