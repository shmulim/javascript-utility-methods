// Returns the rest of the elements in an array.
// Pass an index to return the values of the array from that index onward.

var array = [5, 4, 3, 2, 1];

Array.prototype._rest = function(i) {
    i = i || 1;
    return this.slice(i);
};

array._rest();
// [4, 3, 2, 1]

array._rest(3);
// [2, 1]
