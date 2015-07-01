var obj = {
  'one': 1,
  'two': 2,
  'three': 3
};

Object.prototype._values = function() {
  var values = [];
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      values.push(this[i]);
    }
  }
  return values;
};

obj._values();
// [1, 2, 3]
