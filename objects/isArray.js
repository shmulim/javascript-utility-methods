// Returns true if object is an Array.

var obj = {};
var arr = [];

Object.prototype._isArray = function() {
  if (this.constructor === Array){
    return true;
  } else {
    return false;
  }
};

obj._isArray();
// false

arr._isArray();
// true
