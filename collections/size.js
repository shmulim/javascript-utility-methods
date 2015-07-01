// Return the number of values in the list.

var arr = [1, 2, 3, 4];
var obj = {
  'one': 'one',
  'two': 'two'
};

Object.prototype._size = function() {
  var count = 0;
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      count++;
    }
  }
  return count;
};

arr._size();
// 4

obj._size();
// 2
