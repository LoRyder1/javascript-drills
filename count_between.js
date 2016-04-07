var countBetween = function(array, lowerBound, upperBound) {
  var total = 0;
  for (var i=0; i < array.length; i++) {
    if (array[i] >= lowerBound && array[i] <= upperBound) {
      total += 1;
    }
  }
  return total;
};

