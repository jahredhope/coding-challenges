function processData(input) {
  //Enter your code here
  var args = input.replace('\r','').split('\n');
  var testCaseCount = args.shift();
  for(var testCaseIndex = 0; testCaseIndex < testCaseCount; ++testCaseIndex) {
    var arrLength = args.shift();
    var arr = args.shift().split(' ').map(function(item) {return parseInt(item);});

    var allTime = arr[0];
    var prev = allTime;
    var totalPositive = allTime;
    for(var i = 1; i < arrLength; i++) {
      if(totalPositive < 0 && arr[i] > totalPositive) {
        totalPositive = arr[i];
      } else if (arr[i] > 0) {
        totalPositive += arr[i];
      }
      prev = Math.max(prev + arr[i], arr[i]);
      if(prev > allTime) {
        allTime = prev;
      }
    }
    console.log(allTime + ' ' + totalPositive);
  }
}




// function MaxSubArray(arr) {
//   var allTime = arr[0];
//   var prev = allTime;
//   var totalPositive = allTime;
//   for(var i = 1; i < arr.length; i++) {
//     if(totalPositive === undefined || (totalPositive < 0 && arr[i] > totalPositive) ) {
//       totalPositive = arr[i];
//     } else if (arr[i] > 0) {
//       totalPositive += arr[i];
//     }
//     prev = Math.max(prev + arr[i], arr[i]);
//     if(prev > allTime) {
//       allTime = prev;
//     }
//   }
//   console.log(allTime + ' ' + totalPositive);
// }

// function max_subarray(A) {
//   var max_ending_here = 0;
//   var max_so_far = 0;
//   for (x in A) {
//     max_ending_here = Math.max(0, max_ending_here + x);
//     max_so_far = Math.max(max_so_far, max_ending_here);
//   }
//   return max_so_far;
// }

// function combineDuplicates(arr) {
//   return arr.reduce(function(a,b){
//     if((a[a.length-1] > 0) === (b > 0)) {
//       a[a.length-1] = a[a.length-1] + b;
//     } else {
//       a.push(b);
//     }
//     return a;
//   }, []);
// };

// function getMaximumValue(arr) {
//   var largestIndex = 0;
//   var secondLargestIndex = 0;
//   for(var i = 0; i < arr.length; i++) {
//     if(arr[i] > arr[largestIndex]) {
//       secondLargestIndex = largestIndex;
//       largestIndex = i;
//     } else if (arr[i] > arr[secondLargestIndex]) {
//       secondLargestIndex = item;
//     }
//   }
//   console.log('largestIndex', largestIndex, arr[largestIndex]);
//   console.log('secondLargestIndex', secondLargestIndex, arr[secondLargestIndex]);
//   var start = largestIndex > secondLargestIndex ? secondLargestIndex : largestIndex;
//   var end = largestIndex > secondLargestIndex ? largestIndex : secondLargestIndex;
//   var combinedValue = 0;
//   for(i = start; i <= end; i++) {
//     combinedValue += arr[i];
//   }
//   console.log('combinedValue', combinedValue);
// }

var _input3 = `1
6
1 -1 -1 -1 -1 5`;
var _input = `6
1
1
6
-1 -2 -3 -4 -5 -6
2
1 -2
3
1 2 3
1
-10
6
1 -1 -1 -1 -1 5`;
var _input2 = `2
4
1 2 3 4
6
2 -1 2 3 4 -5`;
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
