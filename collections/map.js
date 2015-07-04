// Produces a new array of values by mapping each value in list through
// a transformation function (iteratee). The iteratee is passed three arguments: the value,
// then the index (or key) of the iteration, and finally a reference to the entire list.

var obj = {'one': 1 , 'two': 2, 'three': 3};

Object.prototype._map = function (callback) {
  var arr = [];
  for (var i in this){
    if (this.hasOwnProperty(i)){
          arr.push(callback(this[i], i, this)); // validate callback
    }
  }
  return arr;
};

obj._map(function(val, key, list){
  return val + ':' + key;
});
// ["1:one", "2:two", "3:three"]
