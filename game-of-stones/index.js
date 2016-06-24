// https://www.hackerrank.com/challenges/game-of-stones-1

// const n = [1,2,3,4,5,6,7,10];
// const r = ['Second','First','First','First',
//   'First','First','Second','First'];

// const p = [1,0,1,1,1,1,1,0,1];
const p = [true,false,true,true,true,true,true,false,true];

function firstPlayerWins(stones) {
  // if (stones < 8) {
  //   return p[stones];
  // }

  return !(stones % 7 === 0 || stones % 7 === 1);

  const result = (!firstPlayerWins(stones - 2)
  || !firstPlayerWins(stones - 3)
  || !firstPlayerWins(stones - 5))

  return result;
}

// n.forEach((val, i) => {
//   const result = firstPlayerWins(n[i]);
//   if (result !== r[i]) {
//     console.error(n[i], 'should be', r[i])
//   }
//   console.log(result)
//
// })

for (var i = 0; i < 75; i++) {
  console.log(i, '=', firstPlayerWins(i) ? 'First' : 'Second');
}

// console.log(firstPlayerWins() ? 'First' : 'Second')
