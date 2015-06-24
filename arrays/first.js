// Returns the first element of an array.
// Passing n will return the first n elements of the array.

function first(arr, n){
  n = n || 1;
  return arr.slice(0, n);
}

first([5, 4, 3, 2, 1]);
// [5]

first([5, 4, 3, 2, 1], 3);
// [5, 4, 3]
