// Returns everything but the last entry of the array.
// Pass n to exclude the last n elements from the result.

var array = [5, 4, 3, 2, 1];

Array.prototype._initial = function(n) {
  n = n || 1;
  return this.slice(0, -n);
};

array._initial();
// [5, 4, 3, 2]

array._initial(3);
// [5, 4]
