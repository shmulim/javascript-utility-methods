// Returns a copy of the array with all instances of the values removed.

var arr = [5, 4, 2, 4, 1, 3, 7];

Object.prototype._without = function() {
  for (var i = 0, argsLen = arguments.length; i < argsLen; i++) {
    for (var j = 0, arrLen = this.length; j < arrLen; j++) {
      if (arr[j] === arguments[i]) {
        arr.splice(arr.indexOf(arguments[i]), 1);
      }
    }
  }
  return arr;
};

arr._without(2, 3, 1);
// [5, 4, 4, 7]
