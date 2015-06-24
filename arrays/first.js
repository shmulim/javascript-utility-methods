// Returns the first element of an array.
// Passing n will return the first n elements of the array.

var array = [5, 4, 3, 2, 1];

Array.prototype.first = function(n){
  n = n || 1;
  return this.slice(0, n);
};

array.first();
// [5]

array.first(3);
// [5, 4, 3]
