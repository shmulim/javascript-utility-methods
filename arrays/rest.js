var array = [5, 4, 3, 2, 1];

Array.prototype.rest = function(i) {
    i = i || 1;
    return this.slice(i);
};

array.rest();
// [4, 3, 2, 1]

array.rest(3);
// [2, 1]
