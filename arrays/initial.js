var array = [5, 4, 3, 2, 1];

Array.prototype.initial = function(n) {
  n = n || 1;
  return this.slice(0, this.length - n);
};

array.initial();
// [5, 4, 3, 2]

array.initial(3);
// [5, 4]
