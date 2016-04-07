var longestString = function(array) {
  if (array.length === 0) {
    return null;
  }

  var longest = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }

  return longest;
};

