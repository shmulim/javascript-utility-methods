// Flattens a nested array (the nesting can be to any depth).
// If you pass shallow, the array will only be flattened a single level.

var arr = [[1], 2, [[3, 4], 5], [[[]]],[[[6]]], 7, 8, []];

Array.prototype._flatten = function(shallow) {
  if (shallow) {
    return this.reduce(function(a, b) {
      return a.concat(b);
    }, []);
  } else {
    return this.reduce(function(acc, val) {
      return acc.concat(val.constructor === Array ? val._flatten() : val);
    }, []);
  }
};

arr._flatten();
// [1, 2, 3, 4, 5, 6, 7, 8]

arr._flatten(true);
// [1, 2, [3, 4], 5, [[]], [[6]], 7, 8]
