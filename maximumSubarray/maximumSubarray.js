// Returns the maximumSubArray both conigious and non-conigiuos, space deliminated;
function MaxSubArray(arr){
  var nonContiguous = arr.reduce(function(prev, next){
    return next > 0 ? prev + next : prev;
  });

  var allTimeBiggestValue = arr[0];
  var localisedBiggestValue = allTimeBiggestValue;
  for(var i = 1; i < arr.length; i++) {
    localisedBiggestValue = Math.max(arr[i], localisedBiggestValue + arr[i]);

    if(localisedBiggestValue > allTimeBiggestValue) {
      allTimeBiggestValue = localisedBiggestValue;
    }
  }

  var contiguous = allTimeBiggestValue;
  return contiguous + ' ' + nonContiguous;
}

module.exports = { MaxSubArray };
